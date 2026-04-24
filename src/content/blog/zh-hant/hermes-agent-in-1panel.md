---
title: "如何用 1Panel 在伺服器安裝 Hermes Agent"
description: "Nous Research 的 Hermes Agent：具備記憶與技能演進的自我改進 AI。本文以 1Panel 的 Model Accounts 與 Agents 為主軸，說明安裝、WebUI 進入與上線後調整。"
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Hermes Agent 是什麼

**Hermes Agent** 是 [Nous Research](https://nousresearch.com/) 打造的自我改進型 AI 智能體。它具備**內建學習循環**：可在實際使用中持續**建立與優化技能**、保留**長期記憶**、檢索**歷史會話**，並在多輪對話之間持續加深對使用者的理解。

Hermes Agent **不綁定單一本地電腦**。你可以將它運行在 **VPS**、**GPU 叢集**等環境，並透過**命令列**、**WebUI**或**訊息通道**互動。

透過 1Panel 安裝時，會提供**瀏覽器 WebUI**，可用來管理**配置**與 **API Key**，並在面板內查看**運行狀態**與**會話資訊**。在 1Panel 中，部署與日常操作主要走 **AI -> Agents**，搭配 **Model Accounts** 完成模型連接。

## 為什麼用 1Panel 部署 Hermes Agent

你可以把**模型憑證**、**智能體定義**（類型、版本、連接埠、模型）與 **WebUI 入口**整合在同一流程中。相較於零散腳本，這種方式更易於標準化與重複運維。

## 前置條件

部署前先確認：

- **1Panel** 已安裝並可正常登入。
- 已準備可用的 **LLM API Key**，或 1Panel 已接入**本地模型**。
- 伺服器可正常**連接網際網路**（非純本地部署情境）。

## 步驟 1：新增模型帳號

1. 進入 **AI** -> **Model Accounts**。
2. 點擊 **Add Model Account**。
3. 選擇實際使用的**模型供應商**，填寫必要欄位。
4. **儲存**帳號。
5. 在列表中確認新帳號已出現且資訊正確。

![Create Model Account in 1Panel](/blog/create-model-account.png)

若你維護多個帳號或模型，後續會在 Hermes Agent 建立頁面選擇對應的 **Model Account / Model**。

## 步驟 2：建立 Hermes Agent

1. 進入 **AI** -> **Agents**。
2. 點擊 **Create**。
3. 將 **Agent Type** 設為 **Hermes Agent**。

部署表單常見欄位如下：

| 欄位 | 建議填寫 |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | 預設範例為 `hermes-agent`，可依命名規範調整。 |
| **App Version** | 選擇要安裝的 Hermes Agent 版本。 |
| **Access Port / WebUI Port** | 使用預設值，或依網路規劃自訂。 |
| **Model Provider** | 選擇與步驟 1 模型帳號對應的供應商。 |
| **Model Account / Model** | 選擇要使用的帳號與具體模型。 |
| **Other Parameters** | 一般建議先維持預設，必要時再調整。 |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

選定供應商後，1Panel 會自動載入該供應商底下已建立的 **Model Accounts**。

若有多個模型，請在本頁選對**模型**；若表單出現額外配置項，請依頁面提示填寫。

提交前務必再檢查 **名稱、版本、連接埠、模型** 是否正確。

## 步驟 3：開始安裝並等待完成

確認無誤後，點擊 **Confirm** 開始安裝。

任務執行期間請留意**頁面狀態**，直到 UI 清楚顯示**安裝完成**。出現成功狀態後，即代表 Hermes Agent 已部署完成。

若失敗，請依面板錯誤訊息（映像拉取、連接埠衝突、認證、磁碟等）排查原因，修正後再重新執行。

## 步驟 4：開啟 Hermes Agent WebUI 或透過 TUI 對話

回到 **Agents** 列表，找到 Hermes Agent，點擊 **WebUI**。

**首次開啟**可能仍在初始化，建議稍等後重新整理 1-2 次。

在 WebUI 中可持續管理**設定**、**金鑰**與**會話相關檢視**。

你也可以點擊 **Chat** 按鈕，透過 TUI 與 Hermes Agent 對話。

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## 步驟 5：在 1Panel 做後續配置

完成首次部署後，可依實際負載調整：切換**模型**或帳號綁定、收斂**存取方式**（僅內網或公開網域）、調整表單/WebUI 中可用的**運行參數**。

若服務對外開放，建議同步落實基礎安全：最小權限的 **Firewall** 範圍、網域入口的 **HTTPS**，以及對 **API Key** 在工單、日誌、截圖中的謹慎管理。

## 快速驗證清單

- WebUI 在初次初始化後可穩定開啟。
- Smoke test 命中**預期模型**。
- **連接埠**未與其他服務衝突。
- 若政策要求，已具備 **備份 / 快照** 保護。

## 總結

Hermes Agent 是可自建託管的**長時運行、技能導向**智能體執行環境。在 1Panel 的流程是：  
**Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** -> 再依需求持續優化**模型、存取與參數**。

若你剛開始接觸 1Panel，可先從 [1panel.pro](https://1panel.pro/) 開始。
