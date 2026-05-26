---
title: "1Panel v2.1.13 發布：模型下載器、File Browser 優化與運行環境修復"
description: "1Panel v2.1.13 新增模型下載器，優化 File Browser 歷史記錄錯誤處理、目錄大小計算與選取操作，升級流程增加磁碟空間檢查，並修復運行環境、目錄載入、授權與快照相關問題。"
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - 發布說明
  - Models
  - File Browser
  - Runtime
  - Panel Settings
---

1Panel v2.1.13 現已可用。此版本新增模型下載器，精煉 File Browser 與升級流程，並針對運行環境與面板設定提供修復。

## 重點摘要

- **模型下載器**：在 Models 模組內直接下載與管理模型，無需離開面板
- **File Browser**：檔案歷史錯誤處理更清晰；目錄大小計算更快且受併發控制；檔案管理選取操作更順暢
- **升級更安全**：升級前會檢查磁碟剩餘空間
- **運行環境**：建立失敗時不再誤刪專案目錄；主機映射可正常刪除
- **面板設定**：授權重新綁定與快照恢復在部分情境下更可靠

---

## 新增功能

### Models

- **模型下載器**：可在 1Panel 內直接下載模型，簡化本機模型部署與更新（[`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)）。

---

## 功能優化

### File Browser

- **檔案歷史錯誤處理**：取得檔案歷史內容時的錯誤處理邏輯更穩定（[`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)）。
- **目錄大小計算**：優化計算邏輯並加入併發控制，適用大型目錄樹（[`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)）。
- **選取操作**：優化檔案管理介面與選取互動（[`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)）。

### Panel Settings

- **授權重新綁定**：優化部分情境下授權重新綁定的邏輯（[`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)）。

### System

- **升級磁碟檢查**：升級流程會先檢查磁碟剩餘空間（[`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)）。

---

## 問題修復

| 模組 | 修復內容 |
|---|---|
| **Runtime** | 修復部分情境下運行環境建立失敗時可能誤刪專案目錄（[`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)）。 |
| **Runtime** | 修復部分情境下運行環境主機映射無法刪除（[`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)）。 |
| **File Browser** | 修復部分情境下載入不存在目錄時異常（[`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)）。 |
| **Panel Settings** | 修復部分情境下快照恢復異常（[`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)）。 |

---

## 如何升級

在 1Panel 儀表板右下角點擊 `Update` 即可完成升級。

首次使用 1Panel？可前往 [1panel.pro](https://1panel.pro/) 了解更多。

---

## 來源

完整發版說明：[1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
