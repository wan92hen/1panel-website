---
title: "1Panel v2.1.13 リリース: モデルダウンローダー、File Browser 改善、Runtime 修正"
description: "1Panel v2.1.13 はモデルダウンローダーを追加し、File Browser の履歴エラー処理・ディレクトリサイズ計算・選択操作を改善。アップグレード時のディスク空き確認と Runtime・スナップショット関連の不具合を修正します。"
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - Release Notes
  - Models
  - File Browser
  - Runtime
  - Panel Settings
---

1Panel v2.1.13 を公開しました。組み込みのモデルダウンローダーを追加し、File Browser とアップグレードフローを磨き、Runtime 環境とパネル設定向けの修正を含みます。

## Highlights

- **モデルダウンローダー** — Models モジュールからパネル内でモデルを取得・管理
- **File Browser** — ファイル履歴のエラー表示を明確化、ディレクトリサイズ計算の最適化と並行制御、選択操作の改善
- **安全なアップグレード** — アップグレード前にディスク空き容量を確認
- **Runtime の信頼性** — 作成失敗時にプロジェクトディレクトリを誤削除しない、ホストマッピングの削除を修正
- **パネル設定** — ライセンス再バインドとスナップショット復元を改善

## New Features

### Models

- **モデルダウンローダー** — 1Panel 内でモデルを直接ダウンロード ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694))。

## Enhancements

### File Browser

- **履歴エラー処理** — ファイル履歴内容取得時のエラー処理を改善 ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736))。
- **ディレクトリサイズ** — 計算ロジックの最適化と並行制御 ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737))。
- **選択 UX** — ファイル管理 UI と選択操作を改善 ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740))。

### Panel Settings

- **ライセンス再バインド** — 一部シナリオでの再バインドロジックを最適化 ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778))。

### System

- **アップグレード時のディスク確認** — 続行前に空き容量を確認 ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708))。

## Bug Fixes

| 領域 | 修正内容 |
|---|---|
| **Runtime** | 実行環境作成失敗時にプロジェクトディレクトリが誤削除されないよう修正 ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756))。 |
| **Runtime** | ホストマッピングが削除できない問題を修正 ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779))。 |
| **File Browser** | 存在しないディレクトリ読み込み時の異常を修正 ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744))。 |
| **Panel Settings** | スナップショット復元の異常を修正 ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777))。 |

## How to Upgrade

ダッシュボード右下の `Update` からアップグレードできます。

はじめての方は [1panel.pro](https://1panel.pro/) をご覧ください。

## Source

詳細なリリースノート: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
