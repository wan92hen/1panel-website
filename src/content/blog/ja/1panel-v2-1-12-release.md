---
title: "1Panel v2.1.12 リリース: Overview の調整、File Browser 修正、OpenWRT アップグレード"
description: "1Panel v2.1.12 はホームの監視チャート表示を改善し、メモ編集中のカルーセル停止、File Browser の ZIP 解凍と親ディレクトリ権限、大きなバイナリ移動、子ノード端末の既定ホスト接続、OpenWRT でのアップグレードを修正します。"
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 1Panel
  - Release Notes
  - Overview
  - File Browser
  - Terminal
  - Multi-Node
  - OpenWRT
---

1Panel v2.1.12 を公開しました。Overview の体験を磨きつつ、File Browser、子ノードのターミナル、OpenWRT 上のアップグレードに向けた信頼性修正をまとめて届けます。

## Highlights

- **監視チャート** — ホームの監視チャートがより読み取りやすく表示されます
- **メモとカルーセル** — メモ編集中はホームのカルーセルが正しく一時停止します
- **File Browser** — ZIP 解凍の安定化、解凍・アップロード後も親ディレクトリ権限を維持、巨大バイナリ移動時の接続問題を修正
- **子ノードのターミナル** — 子ノード上のターミナルで既定のホスト接続が再び期待どおりに
- **OpenWRT** — OpenWRT 環境でもパネルのアップグレードが完了します

## Enhancements

### Overview

- **監視チャートの表示** — ホームの監視チャートのレイアウトと視認性を調整 ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673))。

## Bug Fixes

| 領域 | 修正内容 |
|---|---|
| **Overview** | メモ編集中にホームのカルーセルが停止するよう修正 ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680))。 |
| **File Browser** | 一部 ZIP の解凍が異常終了する問題を修正 ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684))。 |
| **File Browser** | 解凍後に親ディレクトリの権限が変わる問題を修正 ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684))。 |
| **File Browser** | 大きなバイナリ移動でサーバーが応答不能になる恐れを修正 ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683))。 |
| **File Browser** | アップロード後も親ディレクトリの権限を維持 ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672))。 |
| **Terminal** | 子ノード端末の既定ホスト接続を修正 ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676))。 |
| **System** | OpenWRT での 1Panel アップグレード失敗を修正 ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670))。 |

## How to Upgrade

ダッシュボード右下の `Update` からアップグレードできます。

はじめての方は [1panel.pro](https://1panel.pro/) をご覧ください。

## Source

詳細なリリースノート: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
