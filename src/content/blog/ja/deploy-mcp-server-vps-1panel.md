---
title: "1Panel で VPS に MCP サーバーをワンクリックデプロイする方法"
description: "1Panel のワンクリック UI で VPS にセルフホスト MCP サーバーを構築する手順。アーキテクチャ、トランスポート、セキュリティ強化、Claude・Cursor などへの接続まで。"
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

- **MCP**（Model Context Protocol）は、AI エージェントが DB・API・ツールに接続するためのオープン標準です。
- 自前 VPS でホストすればデータは自社インフラに留まり、従量課金やベンダーロックインを避けられます。
- **1Panel** は MCP サーバー管理をネイティブ搭載した唯一のオープンソース VPS パネルです。
- STDIO モードの MCP を自動で SSE にブリッジ。`npx` やバイナリサーバーをリモートから利用可能。
- MCP 管理は **1Panel v1.10.29 LTS** 以降。

---

## MCP サーバーとは

公開データでは推論できても、プライベート DB や社内 API が必要になるとエージェントは止まるか幻覚します。

**Model Context Protocol（MCP）** は JSON-RPC 2.0 で外部ツールに接続する標準です。[出典: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — ツール・リソースを公開するプロセス
- **MCP Client** — Claude Desktop、Cursor、Windsurf、VS Code Copilot など

---

## なぜセルフホストか

**1. データ主権** — [MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. コスト** — 月約 6 ドルの VPS ならリクエスト課金なし

**3. 統制** — ノート PC 上の散在サーバーではなく VPS で一元管理。[Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## VPS 要件

| 用途 | 最小構成 |
|---|---|
| 単一 MCP（プロキシ） | 1 vCPU、1 GB RAM |
| MCP + Ollama（7B） | 4 vCPU、16 GB RAM |
| MCP + Ollama + ベクトル DB | 4 vCPU、32 GB RAM |
| GPU 推論（14B+） | GPU VPS、24 GB+ VRAM |

**OS:** Ubuntu 22.04 LTS または Debian 12。**ポート:** 443 と MCP 用ポート。

---

## STDIO と HTTP/SSE

**STDIO** — ローカルのみ。**HTTP + SSE** — VPS とクライアントが別マシンなら必須。

> **ルール:** リモート VPS → HTTP/SSE。

**1Panel** が STDIO をコンテナ化し SSE と HTTPS URL を提供。

---

## 1Panel でデプロイ

[1Panel](https://1panel.pro/) は Ollama、OpenClaw、GPU 監視、MCP 管理を含む AI ワークスペースを提供。

### ステップ 1: 1Panel をインストール

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

`https://your-vps-ip:PORT` でログイン。

### ステップ 2: MCP 管理

サイドバー **AI → MCP** → **Create MCP Server**。

### ステップ 3: サーバー作成

**方法 1 — npx**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**方法 2 — Binary** — バイナリをマウントして起動コマンドを設定。

![1Panel で MCP サーバーを作成](/blog/create-mcp-server.png)

### ステップ 4: クライアント設定

**Config** から JSON をコピー：

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

### Bonus: 1 ドメインに複数 MCP

| サーバー | SSE パス |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![1 つのドメインに複数の MCP サーバーを統合](/blog/mcp-bind-website.png)

`https://mcp.yourdomain.com` で 443・SSL を共有。

---

## セキュリティ

CVE-2025-49596 など実被害あり。[Oligo Security](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

1. **HTTPS** を有効化
2. **`MCP_AUTH_TOKEN`** で Bearer 認証
3. **IP ホワイトリスト** — **Host → Firewall** と併用可
4. **STDIO を公開しない**

---

## 対応 AI クライアント

Claude Desktop、Cursor、Windsurf、VS Code + Copilot、Continue.dev（フル）、Open WebUI（一部）。

---

## 1Panel vs 手動 Docker

npx・バイナリ・STDIO→SSE・統一ドメイン・whitelist・SSL・ログ・複数 MCP は UI で完結。[1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel) で VPS 自体も AI 管理可能。

---

## FAQ

**1 VPS に複数？** 可能。SSE パスを分けて同一ドメインにバインド。

**対応サーバー？** `npx` またはバイナリ。**v1.10.29 LTS** 以降。

**無料？** コア機能は無料。Pro は年 80 USD から。[1panel.pro](https://1panel.pro/)

**Ollama と併用？** **AI → Local LLMs** から可能。

---

## まとめ

セルフホスト MCP でデータとコストを掌握。1Panel なら 10 分以内に HTTPS エンドポイントへ。

**開始:** [1panel.pro](https://1panel.pro/) / [GitHub](https://github.com/1panel-dev/1panel)
