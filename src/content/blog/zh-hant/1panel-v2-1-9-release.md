---
title: "1Panel v2.1.9 發布：Hermes Agent、MongoDB 管理與檔案歷史"
description: "1Panel v2.1.9 新增 Hermes Agent 支援、MongoDB 一體化管理與檔案歷史功能，並針對 Agents、File Browser、容器與 S3 相容性進行優化。"
pubDate: 2026-04-23
updatedDate: 2026-04-23
tags:
  - 1Panel
  - 發布說明
  - Hermes Agent
  - MongoDB
  - File Browser
  - OpenClaw
  - AWS S3
---

1Panel v2.1.9 現已可用。此版本在 Agents、Database、File Browser 三個模組新增核心能力，並帶來一系列可感知的優化與 5 項缺陷修復，重點提升日常運維穩定性。

## 重點摘要

- **新增 Hermes Agent 支援**，擴充本地 AI Agent 生態
- **MongoDB 納入統一資料庫管理**，與 MySQL、PostgreSQL、Redis 並列
- **File Browser 新增檔案歷史**，便於追蹤與回復誤操作
- **OpenClaw 頻道機器人流程優化**，降低配置門檻
- **AWS S3 相容性提升**，改善物件儲存接入穩定性

---

## 新功能

### Agents

1Panel 現在支援 **Hermes Agent**。這讓你在既有 OpenClaw 之外，多一種可本地部署、可控性更高的 AI Agent 選擇。

### Databases

新增 **MongoDB 管理能力**。你可在同一個資料庫介面中建立、監控與維護 MongoDB，無需再切換外部工具。

### File Browser

新增 **檔案歷史管理**。透過面板進行的檔案變更將被記錄，可用於回溯與恢復，特別適合配置檔與共享資源。

---

## 功能優化

### Agents
- **網站解綁**：可在不手動清理的情況下，將 Agent 與網站安全解綁
- **OpenClaw 頻道機器人流程**：新增機器人流程更順暢、步驟更少

### App Store
- **Compose 變更偵測重構**：降低誤判與漏判，更新流程更可靠

### File Browser
- **壓縮任務可中止**：支援取消進行中的壓縮作業
- **Dockerfile 語法識別**：編輯器新增 Dockerfile 語法高亮
- **檔案分享自訂請求標頭**：提升在代理與本地化場景中的相容性
- **元資料校驗加強**：檔案與回收站服務資料完整性更穩定

### Containers
- **資料處理與狀態同步優化**：快速生命周期容器場景更可靠

### Panel Settings
- **AWS S3 相容性提升**：對非標準配置與相容端點處理更穩定

### System
- **表格樣式微調**：不同顯示密度下可讀性更佳

### Websites
- **站點名稱標籤樣式優化**：介面層級更清晰

---

## 問題修復

| 模組 | 修復內容 |
|---|---|
| Runtime | 修復編輯期間 runtime 目錄仍可修改導致路徑異常的問題 |
| File Browser | 修復 QR Code 分享檔案無法下載的問題 |
| Firewall | 修復防火牆規則建立後描述無法修改的問題 |
| Firewall | 修復監聽狀態顯示異常導致埠狀態錯誤的問題 |
| Tamper Protection | 修復 Tamper 模組多語翻譯錯誤 |

---

## 如何升級

在 1Panel 儀表板右下角點擊 `Update` 即可完成升級。

首次使用 1Panel？可前往 [1panel.pro](https://1panel.pro/) 了解更多。

---

## 來源

完整發版說明： [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
