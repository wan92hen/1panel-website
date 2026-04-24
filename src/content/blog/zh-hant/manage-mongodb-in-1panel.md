---
title: "如何用 1Panel 管理 VPS 上的 MongoDB"
description: "1Panel MongoDB 實作指南：App Store 安裝、建立資料庫、連線資訊、內建 mongosh、備份還原與遠端實例管理。"
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

透過 1Panel，你可以在同一個介面完成 MongoDB 的主要運維流程：安裝、建立、連線、查詢、備份與還原。

## 1Panel 可完成的 MongoDB 工作

- 從 **App Store** 安裝 MongoDB
- 建立資料庫與使用者並設定權限
- 在瀏覽器使用內建 **mongosh**
- 查看應用程式連線資訊
- 進行備份/還原與排程任務
- 管理遠端 MongoDB 實例

## 前置條件

- 1Panel 已可正常使用
- 伺服器有足夠記憶體供 MongoDB 運行
- 可連網以下載映像

## 步驟 1：在 App Store 安裝 MongoDB

打開 **App Store**，切到 **Database** 分類，找到 **MongoDB** 後點擊 **Install**。

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

主要欄位：

| 欄位 | 建議 |
|---|---|
| Name | 實例名稱（預設 `mongodb`） |
| Version | 選擇要部署的 MongoDB 版本 |
| Username / Password | 初始認證資訊 |
| Port | 預設 `27017` |
| External Access | 非必要不開啟 |
| Restart Policy | 正式環境常用 `always` |

設定完成後點 **Confirm**。

## 步驟 2：建立 MongoDB 資料庫

進入 **Databases** -> **MongoDB**，點 **Create**。

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

填寫：

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description**（可選）

點擊 **Confirm** 完成。

## 步驟 3：查看連線資訊

點擊 **Connection** 可查看 host、port、credentials。

常見 URI：

`mongodb://username:password@host:27017/databasename`

## 步驟 4：使用內建終端

點擊 **Terminal** 可開啟 `mongosh`。

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

示例：

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## 步驟 5：備份與還原

在資料庫列表中開啟備份操作。

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up**：建立快照
- **Restore**：由快照還原
- **Settings** -> **Backup Accounts**：設定雲端備份目的地
- **Cron Jobs**：建立自動備份排程

## 步驟 6：管理遠端伺服器

使用 **Remote server** 新增外部 MongoDB 實例。

若有在面板外手動修改，可用 **Sync from server** 同步 UI 狀態。

## 安全建議

- 盡量避免 MongoDB 直接對公網暴露
- Firewall 僅開放必要來源
- 優先使用 VPN / Tunnel 等私網路徑
- 定期輪替憑證並保留異地備份

## 快速檢查清單

- 實例狀態正常
- 連線 URI 已實測
- 至少做過一次還原演練
- 存取規則符合你的安全基線

## 總結

1Panel 讓你在 VPS 上用單一介面完成 MongoDB 主要運維流程。

可從 [1panel.pro](https://1panel.pro/) 開始。
