---
title: "1Panel v2.1.8 發布：AI 檔案搜尋、智能體角色管理與檔案連結分享"
description: "1Panel v2.1.8 新增 AI 檔案搜尋、可分享檔案連結、智能體角色管理、多帳號頻道、Bark 告警、vLLM 狀態同步，以及 2FA 可疑 IP 防護。"
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Release Notes
  - AI Search
  - Agent
  - Security
---

1Panel v2.1.8 於 2026-04-10 正式發布。本次版本重點強化 Agents 模組（角色權限、多帳號頻道、網站綁定），同時在檔案管理器加入 AI 搜尋與連結分享功能，並進一步提升安全性與整體穩定性。

## 版本亮點

- 檔案管理器新增 **AI 檔案搜尋**（支援自然語言）
- 檔案管理器新增 **檔案連結分享**
- 智能體新增 **角色管理**（支援團隊權限控管）
- 頻道新增 **多帳號接入**（QQ、飛書、釘釘、Discord 等）
- 智能體新增 **網站綁定**
- 新增 **Bark 告警頻道**
- 2FA 登入新增 **可疑 IP 防護**
- 新增 **vLLM 狀態同步**

## 新增功能

### 檔案管理器

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415))：無需記住完整路徑或檔名，以自然語言即可搜尋目標檔案。
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453))：可直接產生檔案下載連結，方便分享建置產物、備份與日誌。

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364))：可建立具體權限角色並指派給智能體配置。
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))：單一頻道可綁定多個帳號。
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413))：可將智能體綁定至 1Panel 中指定網站。
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361))：每個智能體新增備註欄位，便於記錄用途與責任人。
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396))：提升中國大陸地區技能下載穩定性。

### App Store

- **外部埠存取統一開關** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426))：集中控制應用商店安裝應用的外部埠可達性。

### 面板設定

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338))：新增 Bark 作為推播告警目的地。

## 功能優化

### Agents 與 OpenClaw

- OpenClaw 外掛設定粒度更細，支援備援模型配置 ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- 支援於面板內直接卸載/升級 OpenClaw 外掛 ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- QQ 與飛書頻道遷移至官方外掛 ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- OpenClaw 釘釘頻道設定更可配置 ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- 模型相關選單結構重整 ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- 預設模型配置更新 ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- 高頻智能體流程下 API 穩定性提升 ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### 模型

- 模型拉取日誌顯示更清晰 ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- vLLM 狀態同步邏輯優化

### 安全

- 2FA 流程新增可疑 IP 攔截 ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- 身分驗證鎖定與登入回饋更清楚 ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- 登入安全檢查與面板入口流程強化 ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### 檔案管理器與 SSH

- 高負載下檔案操作穩定性提升 ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- SSH 設定檔編輯體驗與驗證改善 ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### 網站與 Runtime

- OpenResty Other Settings 頁面佈局更清爽 ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- OpenClaw 網站刪除校驗更嚴謹 ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- 網站綁定配置流程簡化 ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Node.js Runtime 腳本選擇更可靠 ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### 系統

- AI Terminal 更新流程更順暢 ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- 程式碼編輯器載入速度提升 ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- 對話框顯示與互動一致性提升 ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- 全語系 i18n 文案更新 ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## 問題修復

- **Overview**：修復監控圖表異常 Delta 值 ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**：修復 OpenClaw Discord 頻道配置錯誤 ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**：修復憑證自動續期邏輯問題 ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**：修復代理停用後健康檢查仍持續執行 ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**：修復 2FA 需 CAPTCHA 時無法返回登入頁問題 ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## 升級方式

只需點擊右下角的「更新」按鈕即可。

首次使用 1Panel？歡迎前往 [1panel.pro](https://1panel.pro/)。

## 來源

- 完整釋出說明：[1Panel v2.1.8 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)