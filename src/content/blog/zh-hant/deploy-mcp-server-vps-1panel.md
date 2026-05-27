---
title: "如何用 1Panel 在 VPS 上一鍵部署 MCP 伺服器"
description: "逐步教你在 VPS 上用 1Panel 一鍵部署自架 MCP 伺服器，無需與終端機搏鬥。涵蓋架構、傳輸模式、安全加固，以及如何連接 Claude、Cursor 等 AI 客戶端。"
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - MCP
  - VPS
  - Self-hosted
  - AI Agent
  - Deployment
---

## TL;DR

- **MCP**（Model Context Protocol）是讓 AI 智能體透過統一介面連接資料庫、API 與工具的開放標準。
- 在自有 VPS 上自架 MCP 伺服器，資料留在你的基礎設施內，無按次 API 費用，也避免廠商鎖定。
- **1Panel** 是唯一內建 MCP 伺服器管理的開源 VPS 面板——透過 Web UI 部署、監控與連接，無需命令列。
- 1Panel 自動將 STDIO 模式 MCP 伺服器橋接為 SSE，任何 npx 或二進位 MCP 伺服器都可遠端存取，無需改傳輸層。
- MCP 伺服器管理自 **1Panel v1.10.29 LTS** 起提供。

---

## 什麼是 MCP 伺服器？

每個 AI 智能體遲早會遇到同一堵牆：公開資料上推理尚可，一旦需要私有資料庫、內部工具或專有 API，智能體就會沉默——或更糟，開始幻覺作答。

**Model Context Protocol（MCP）** 是解決這一點的開放標準。由 Anthropic 於 2024 年 11 月提出，現已獲 OpenAI、Google、Docker 等支持，透過 JSON-RPC 2.0 橋接，為大語言模型提供連接外部工具、資料庫與服務的標準化介面。[來源：Anthropic](https://www.anthropic.com/news/model-context-protocol)

核心架構兩端：

- **MCP Server** — 暴露工具、資源或資料來源的進程，相當於把資料庫、檔案系統、GitHub API 或內部服務包裝成 MCP 介面。
- **MCP Client** — 呼叫伺服器的 AI 主機（Claude Desktop、Cursor、Windsurf、VS Code Copilot 等），取得結構化結果。

任何支援 MCP 的主機都能與任何 MCP 伺服器對話，與底層模型無關——這是協議的核心價值。

採用速度很快：目前已有 500+ 公開 MCP 伺服器，企業也越來越多在自有基礎設施上運行私有實例，處理敏感資料與無法走第三方服務的智能體工作流。

---

## 為什麼要自架而非託管服務？

Smithery、MintMCP 等託管平台適合原型驗證。一旦涉及真實資料或生產可用性，自架通常更合理，原因有三：

**1. 資料主權。** MCP 伺服器連接私有資料庫或內部 API 時，資料會經過伺服器。若伺服器在他人基礎設施上，你的資料也在他人境內。依歐盟《AI 法案》，2025 年 8 月起處罰條款已生效，嚴重違規可達全球年營收 7%。自有 VPS 讓資料邊界清晰。[來源：MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. 成本。** 託管服務常按請求或席位計費。每月約 6 美元的 VPS 自架 MCP，無論每天 100 還是 10 萬次請求，都無按次費用。

**3. 管控。** 影子 IT 已是現實：Obot AI 研究發現大量開發者在筆電上各自跑 MCP，憑證分散、無審計。集中在你管理的 VPS 上，可統一日誌、存取控制與配置。[來源：Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## VPS 需求

MCP 伺服器本身很輕：最小進程通常低於 100 MB RAM。實際規格取決於伺服器*做什麼*——若代理本地資料庫或跑推理，由這些工作負載決定。

| 使用場景 | 最低 VPS 規格 |
|---|---|
| 單一 MCP 伺服器（代理/API 橋接） | 1 vCPU，1 GB RAM |
| MCP + 本地 LLM（Ollama，7B） | 4 vCPU，16 GB RAM |
| MCP + Ollama + 向量資料庫 | 4 vCPU，32 GB RAM |
| GPU 推理（14B+ 模型） | GPU VPS，24 GB+ VRAM |

**作業系統：** Ubuntu 22.04 LTS 或 Debian 12（與 1Panel 測試充分）。

**連接埠：** 至少開放 443（HTTPS），MCP 端點常用 3000 或 8080（位於反向代理後）。

---

## STDIO 與 HTTP/SSE：該用哪種傳輸？

MCP 支援兩種傳輸，選擇比多數教學更重要。

**STDIO（標準輸入/輸出）**  
透過 stdin/stdout 通訊，本地開發預設——客戶端在同一機器上以子進程啟動伺服器。

- 適用：本機、同一伺服器
- 不適用：跨網際網路遠端連接
- 安全：同機其他進程可能與之互動

**HTTP + SSE（Server-Sent Events）**  
伺服器作為持久 HTTP 服務，客戶端以 URL 連接——遠端 VPS 部署必須用此方式。

- 適用：遠端伺服器、VPS、雲實例
- 支援：認證 Token、HTTPS、反向代理
- 安全：可置於防火牆與反向代理後

> **規則：** MCP 在 VPS、AI 客戶端在另一台機器 → 需要 HTTP/SSE。STDIO 僅限本地。

**1Panel 自動解決此問題。** 多數 npm 分發的 MCP 伺服器為 STDIO；1Panel 將 STDIO 進程（`npx` 或二進位）放入容器並暴露為 SSE 端點。你配置 STDIO 命令，1Panel 處理橋接、連接埠與反向代理，無需改 MCP 伺服器程式碼。

第三種 **Streamable HTTP** 正進入 2026 MCP 路線圖以取代 SSE；1Panel MCP 管理會跟進規範更新。

---

## 用 1Panel 部署 MCP 伺服器

[1Panel](https://1panel.pro/) 是內建 MCP 管理的開源 VPS 面板——將 AI 基礎設施與網站、Docker、資料庫同等對待。AI 工作區含 Ollama、OpenClaw、GPU 監控與 MCP 伺服器管理。

### 步驟 1：在 VPS 上安裝 1Panel

SSH 登入後執行一鍵安裝：

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

安裝程式會偵測系統、安裝 Docker（若無）並啟動 Web 介面，首次啟動會顯示存取 URL 與一次性管理員密碼。

瀏覽 `https://your-vps-ip:PORT` 登入。

> 已有 1Panel？跳至步驟 2。

### 步驟 2：開啟 MCP 管理

在左側導覽進入 **AI → MCP**，查看所有實例的狀態、SSE URL 與一鍵複製配置。

點擊 **Create MCP Server** 建立第一個伺服器。

### 步驟 3：建立 MCP 伺服器

兩種方式都將 STDIO 橋接為 SSE，AI 客戶端獲得穩定 HTTPS URL。

**方式 1 — npx 命令（建議用於 Node.js MCP）**

1. 建立對話框選擇 **npx**。
2. 輸入命令，例如官方檔案系統伺服器：
   ```bash
   npx -y @modelcontextprotocol/server-filesystem /data
   ```
3. 在 Env 區填寫必要環境變數。
4. 點擊 **Confirm**。

1Panel 在隔離容器中執行 npx，暴露 SSE，容器自動啟動並崩潰後重啟。

**方式 2 — Binary**

適用 Go、Rust 等編譯二進位：

1. 選擇 **Binary**。
2. 掛載主機路徑與容器路徑。
3. 設定執行命令與環境變數。
4. 點擊 **Confirm**。

無需 Node.js 等執行環境。

![在 1Panel 中建立 MCP 伺服器](/blog/create-mcp-server.png)

### 步驟 4：取得客戶端配置並連接

伺服器啟動後，點擊實例旁的 **Config**。1Panel 自動產生含連接埠、位址與 SSE 路徑的完整 JSON。

**Claude Desktop**（macOS：`~/Library/Application Support/Claude/claude_desktop_config.json`）：

```json
{
  "mcpServers": {
    "my-vps-server": {
      "url": "https://your-vps.example.com/filesystem",
      "transport": "sse"
    }
  }
}
```

**Cursor / Windsurf：** 設定 → AI → MCP Servers → 新增，貼上相同 URL。

**VS Code + GitHub Copilot：** 工作區 `.vscode/mcp.json`，結構相同。

### Bonus：將多個 MCP 伺服器綁定到同一網域

多數 VPS 會跑多個 MCP——檔案、資料庫代理、GitHub 整合。每個開獨立連接埠既雜亂又擴大攻擊面。

1Panel 的 **統一網域綁定** 讓多實例共用網站網域，僅 SSE 路徑不同：

| 伺服器 | SSE 路徑 |
|---|---|
| 檔案系統 | `/files` |
| PostgreSQL 代理 | `/db` |
| GitHub 整合 | `/github` |

![將多個 MCP 伺服器綁定到同一網域](/blog/mcp-bind-website.png)

三者均可透過 `https://mcp.yourdomain.com` 存取——單一 443、單一 SSL、單一防火牆規則。在各 MCP 伺服器的網站綁定設定中配置。

---

## 加固自架 MCP 伺服器

生產環境已出現真實漏洞——含 Anthropic MCP Inspector 嚴重 RCE（CVE-2025-49596，CVSS 9.4）、Apache Doris MCP SQL 注入、STDIO 命令注入等。[來源：Oligo Security](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

正確配置的自架 VPS 可顯著縮小攻擊面。

**1. MCP 端點必須走 HTTPS**

在 MCP 網站綁定中啟用 HTTPS，上傳 SSL 憑證。提示詞、工具結果、憑證均加密傳輸。

**2. 使用認證 Token**

HTTP/SSE 支援 Bearer。在容器配置中設定 `MCP_AUTH_TOKEN`，客戶端帶相同 Token：

```json
{
  "url": "https://your-vps.example.com:8080/mcp",
  "transport": "sse",
  "headers": { "Authorization": "Bearer YOUR_SECRET_TOKEN" }
}
```

**3. 按伺服器設定 IP 白名單**

在 MCP 網站設定中允許特定 IP 或 CIDR，其餘自動拒絕。團隊部署可結合 **主機 → 防火牆** 預設拒絕。

**4. 切勿公開暴露 STDIO 伺服器**

STDIO 無內建認證，僅限本地。誤暴露連接埠等同未認證執行端點。

---

## 哪些 AI 客戶端可連接自架 MCP 伺服器？

| 客戶端 | MCP 支援 | 說明 |
|---|---|---|
| Claude Desktop | 完整 | 原生 MCP 配置 |
| Cursor | 完整 | 設定 → MCP Servers |
| Windsurf | 完整 | 設定面板 |
| VS Code + GitHub Copilot | 完整 | `.vscode/mcp.json` |
| Continue.dev | 完整 | 開源自架 |
| Open WebUI | 部分 | 工具伺服器配置 |

2026 路線圖含 OAuth 2.0 與多伺服器編排，生態持續擴張。

---

## 1Panel 與手動 Docker 對比

| 任務 | 手動 Docker | 1Panel |
|---|---|---|
| 部署 npx MCP | 撰寫 Dockerfile + compose | UI 輸入 npx 命令 |
| 部署二進位 MCP | 手動掛載 + compose | UI 掛載 |
| STDIO 橋接 SSE | 自寫代理或 supergateway | 內建自動 |
| 多伺服器統一網域 | 手動 Nginx location | 網站綁定 + SSE 路徑 |
| 每伺服器 IP 白名單 | Nginx allow/deny | Web UI |
| SSL | Certbot 或手動上傳 | UI 上傳 |
| 日誌 | `docker logs` | Web UI |
| 多 MCP 管理 | 多份配置 | 單一 MCP 儀表板 |
| 崩潰重啟 | `--restart always` | 預設啟用 |

僅單一服務且熟悉 Docker 時手動更快；多服務、團隊交接或需審計時 1Panel 更合適。

1Panel 還提供 [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel)，讓 AI 以自然語言管理 VPS 本身。

---

## 常見問題

### 一台 VPS 能跑多個 MCP 嗎？

可以。每個 MCP 為隔離容器，可綁定同一網域、不同 SSE 路徑，共用 443。儀表板可查看各實例狀態、日誌與配置。

### 1Panel 支援哪些 MCP？

任何可透過 `npx` 或二進位運行的 MCP，涵蓋 [官方伺服器庫](https://github.com/modelcontextprotocol/servers) 與社群套件。管理功能自 **v1.10.29 LTS** 起提供。

### 1Panel 免費嗎？

開源（GPL-3.0），免費版含 MCP 管理。Pro 約 $80/年，含優先支援與進階監控。[定價](https://1panel.pro/)

### 能與 Ollama 一起部署嗎？

可以。在 **AI → Local LLMs** 部署 Ollama，再部署指向它的 MCP，兩者自動共用 Docker 網路。

---

## 結語

自架 MCP 帶來資料掌控、零按次成本與清晰的審計邊界。摩擦多在 SSL、反向代理、Docker 與防火牆——正是 1Panel 要消除的。

用 1Panel 原生 MCP 管理，十分鐘內從新 VPS 到 HTTPS 安全的 MCP 端點，無需命令列。同一面板還可加入 Ollama 與 OpenClaw，組成完整自架 AI 堆疊。

**準備開始？** 造訪 [1panel.pro](https://1panel.pro/) 免費下載，或查看 [GitHub](https://github.com/1panel-dev/1panel)（35,000+ stars）。
