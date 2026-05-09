---
title: "1Panel v2.1.12 發布：總覽優化、File Browser 修復與 OpenWRT 升級"
description: "1Panel v2.1.12 優化首頁監控圖表、修復編輯備忘錄時輪播未暫停、強化 File Browser 的 ZIP 解壓與上層目錄權限、修正大型二進位檔移動、子節點終端預設主機連線，並修復 OpenWRT 上升級失敗。"
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 1Panel
  - 發布說明
  - Overview
  - File Browser
  - Terminal
  - Multi-Node
  - OpenWRT
---

1Panel v2.1.12 現已可用。此版本精煉總覽（Overview）體驗，並針對檔案管理、子節點終端與 OpenWRT 環境升級提供集中修復。

## 重點摘要

- **監控圖表**：首頁監控圖表更易一眼掌握系統狀態
- **備忘錄與輪播**：編輯備忘錄時首頁輪播會正確暫停，內容更易閱讀
- **File Browser**：ZIP 解壓更穩定；解壓與上傳後上層目錄權限不再被誤改；修正移動大型二進位檔可能導致面板連線中斷的問題
- **子節點終端**：子節點上終端的預設主機連線恢復預期行為
- **OpenWRT**：在 OpenWRT 類環境下可再次順利完成 1Panel 升級

---

## 功能優化

### Overview

- **監控圖表呈現**：調整首頁監控圖表的版面與可讀性（[`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)）。

---

## 問題修復

| 模組 | 修復內容 |
|---|---|
| **Overview** | 編輯備忘錄時首頁輪播會暫停（[`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)）。 |
| **File Browser** | 修復部分 ZIP 解壓異常（[`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)）。 |
| **File Browser** | 解壓後不再錯改上層目錄權限（[`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)）。 |
| **File Browser** | 修復移動大體積二進位檔可能導致伺服器無法連線（[`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)）。 |
| **File Browser** | 上傳檔案後上層目錄權限維持不變（[`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)）。 |
| **Terminal** | 修復子節點終端預設主機連線異常（[`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)）。 |
| **System** | 修復 OpenWRT 下 1Panel 升級失敗（[`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)）。 |

---

## 如何升級

在 1Panel 儀表板右下角點擊 `Update` 即可完成升級。

首次使用 1Panel？可前往 [1panel.pro](https://1panel.pro/) 了解更多。

---

## 來源

完整發版說明：[1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
