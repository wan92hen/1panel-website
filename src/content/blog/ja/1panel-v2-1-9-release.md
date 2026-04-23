---
title: "1Panel v2.1.9 リリース: Hermes Agent、MongoDB 管理、ファイル履歴に対応"
description: "1Panel v2.1.9 では Hermes Agent 対応、MongoDB の統合管理、File Browser の履歴管理を追加。Agents、コンテナ、S3 互換性なども強化しました。"
pubDate: 2026-04-23
updatedDate: 2026-04-23
tags:
  - 1Panel
  - Release Notes
  - Hermes Agent
  - MongoDB
  - File Browser
  - OpenClaw
  - AWS S3
---

1Panel v2.1.9 を公開しました。Agents、Databases、File Browser に 3 つの新機能を追加し、運用面の改善と 5 件の不具合修正を実施しています。

## Highlights

- Agents で **Hermes Agent** をサポート
- Databases で **MongoDB の一元管理** に対応
- File Browser に **ファイル履歴管理** を追加
- OpenClaw チャンネル Bot の設定フローを簡素化
- AWS S3 互換ストレージ接続の安定性を向上

## New Features

### Agents
**Hermes Agent** を 1Panel 内で利用可能になり、ローカル AI エージェント構成の選択肢が拡大しました。

### Databases
**MongoDB 管理** を Databases 画面へ統合。MySQL、PostgreSQL、Redis と同じ導線で扱えます。

### File Browser
**File History** により、ファイル変更履歴の追跡と復元がしやすくなりました。

## Enhancements

- Agents: Web サイトとの関連解除操作を改善、OpenClaw チャンネル Bot 追加手順を短縮
- App Store: Compose 差分検出ロジックを改良
- File Browser: 圧縮タスクの中断、Dockerfile 構文対応、共有時ヘッダー設定、メタデータ検証強化
- Containers: データ処理と状態同期を改善
- Panel Settings: S3 接続の互換性と安定性を向上
- System/Websites: テーブル表示と名称バッジの UI 調整

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | 編集セッション中に runtime ディレクトリを変更できてしまう問題を修正 |
| File Browser | QR 共有ファイルをダウンロードできない問題を修正 |
| Firewall | ルール説明を後から編集できない問題を修正 |
| Firewall | Listening 状態表示の異常を修正 |
| Tamper Protection | 多言語翻訳の不整合を修正 |

## How to Upgrade

ダッシュボード右下の `Update` ボタンをクリックしてください。

1Panel を初めて使う場合は [1panel.pro](https://1panel.pro/) をご覧ください。

## Source

詳細なリリースノート: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
