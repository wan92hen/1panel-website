---
title: 使用 1Panel PHP Runtime 部署 WordPress
description: 本文教你在 1Panel 上安裝 OpenResty 與 MySQL、建立 PHP Runtime、部署 WordPress、綁定網域並啟用 HTTPS。
pubDate: 2025-03-15
updatedDate: 2025-03-15
heroImage: /blog/setup-wordpress-1.png
tags:
  - PHP
  - WordPress
  - 1Panel
  - OpenResty
  - SSL
  - MySQL
---

這篇教學提供一條完整且可重現的流程，讓你透過 1Panel 的 PHP Runtime 快速完成 WordPress 部署。

## 流程總覽

1. 安裝 OpenResty 與 MySQL。
2. 建立對應版本的 PHP Runtime。
3. 建立網站並綁定 Runtime。
4. 下載並安裝 WordPress。
5. 建立 MySQL 資料庫並完成 WordPress 安裝精靈。
6. 設定 DNS、申請證書並啟用 HTTPS。

## 先決條件

- 具公網 IP 的 Linux 伺服器
- 已安裝並可存取的 1Panel
- 可管理 DNS 的網域
- 已開放 80/443 連接埠

## 為什麼用 1Panel 做這件事

- 可視化管理 PHP 版本與擴展
- OpenResty/MySQL/網站設定集中於同一面板
- 證書申請與 HTTPS 啟用流程完整

如需逐步圖文細節，建議搭配官方文件與社群說明一併操作：

- [1Panel 文件](https://1panel.pro/docs/)
- [1Panel 社群討論](https://github.com/1Panel-dev/1Panel/discussions)


