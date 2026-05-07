---
title: "1Panel v2.1.11 發布：DeepSeek V4 模型池、File Browser 任務與穩定性修復"
description: "1Panel v2.1.11 為 DeepSeek 模型池預設帶入 V4、強化 File Browser 解壓與 VS Code SSH 說明、調整容器日誌下載逾時與終端版面，支援 IPv6 自簽 SSL，並修復 12 項問題。"
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - 發布說明
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

1Panel v2.1.11 現已可用。此版本聚焦 Agents、File Browser、容器與面板設定上的實用優化，並涵蓋總覽、網站、多節點等模組的多項缺陷修復。

## 重點摘要

- **DeepSeek V4 模型池**：DeepSeek 模型帳號的模型池預設支援最新 **V4** 模型
- **File Browser 解壓控制**：可中止進行中的解壓任務，並優化長時間封存作業的任務管理介面
- **VS Code 與 SSH**：連線說明更清楚，內建 SSH 設定腳本內容更完整
- **容器日誌下載**：調整逾時等待；逾時後 Docker 程序清理見下方「問題修復」
- **IPv6 面板 SSL**：在純 IPv6 或雙堆疊環境可為面板啟用自簽憑證 HTTPS
- **終端版面**：內部元素高度調整，減少嵌入終端出現外層捲軸的情況

---

## 功能優化

### Agents

- **DeepSeek 模型池**：DeepSeek 帳號的模型池預設納入最新 **V4** 模型，新設定無須手動改池即可對齊現行世代（[`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)）。

### Containers

- **日誌下載逾時**：容器日誌下載的等待時間已調整，更貼近實際網路與磁碟狀況（[`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)）。

### File Browser

- **中止解壓**：解壓任務執行中可取消；任務列表介面優化，便於管理並行作業（[`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)）。
- **VS Code 與 SSH**：釐清 VS Code 連線指引，並擴充 SSH 設定腳本內容（[`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)）。

### Terminal

- **嵌入終端高度**：調整內部版面高度，常見視窗尺寸下較不易出現多餘外層捲軸（[`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)）。

### Panel Settings

- **IPv6 與自簽 SSL**：伺服器以 IPv6 存取時，面板 HTTPS 可使用自簽憑證（[`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)）。

---

## 問題修復

| 模組 | 修復內容 |
|---|---|
| **Overview** | 修復首頁監控圖表載入異常（[`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)）。 |
| **Overview** | 修復部分語系環境下備忘錄元件顯示異常（[`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)）。 |
| **App Store** | 修復應用升級檔案對比頁箭頭缺失（[`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)）。 |
| **Websites** | 重定向設定支援泛域名（[`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)）。 |
| **Containers** | 日誌下載逾時後正確清理 Docker 相關程序（[`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)）。 |
| **Containers** | 儲存容器編排（Compose）變更後對話框按鈕行為正常（[`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)）。 |
| **Containers** | 修復 Arch Linux 下 Docker 服務偵測異常（[`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)）。 |
| **File Browser** | 修復部分情境下編輯器右鍵選單與篩選異常（[`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)）。 |
| **File Browser** | 修復檔案服務介面回傳型別錯誤（[`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)）。 |
| **Multi-Node** | 子節點可再次使用主節點上的主機連線設定（[`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)）。 |
| **Website Monitoring** | OpenResty 未啟動時，網站監控頁提示與實際狀態一致。 |
| **System** | 修復表格欄位排序異常（[`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)）。 |

---

## 如何升級

在 1Panel 儀表板右下角點擊 `Update` 即可完成升級。

首次使用 1Panel？可前往 [1panel.pro](https://1panel.pro/) 了解更多。

---

## 來源

完整發版說明：[1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
