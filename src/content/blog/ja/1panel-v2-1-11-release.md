---
title: "1Panel v2.1.11 リリース: DeepSeek V4 既定、File Browser タスク、安定性修正"
description: "1Panel v2.1.11 は DeepSeek モデルプールの V4 対応、File Browser の解凍停止と VS Code SSH 手順の改善、コンテナログ取得のタイムアウト調整、ターミナルレイアウト、IPv6 自己署名 SSL、12 件の不具合修正を含みます。"
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - Release Notes
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

1Panel v2.1.11 を公開しました。Agents、File Browser、コンテナ、パネル設定の使い勝手を中心に改善し、Overview、Websites、マルチノードなど幅広い不具合修正を行っています。

## Highlights

- **DeepSeek V4 モデルプール** — DeepSeek アカウントのモデルプールが既定で最新の **V4** モデルに対応
- **File Browser の解凍制御** — 実行中の解凍タスクを停止可能に。長時間アーカイブ向けにタスク管理 UI を改善
- **SSH 経由の VS Code** — 接続手順の整理と SSH セットアップスクリプト内容の拡充
- **コンテナログのダウンロード** — タイムアウト調整。タイムアウト後の Docker プロセス整理は Bug Fixes を参照
- **IPv6 パネル SSL** — IPv6 のみ／デュアルスタック環境でもパネルに自己署名証明書を有効化可能
- **ターミナルレイアウト** — 内部要素の高さ調整で、埋め込みターミナル周りの外側スクロールを抑制

## Enhancements

### Agents

- **DeepSeek モデルプール** — DeepSeek アカウントのプールが既定で最新 **V4** を含み、新規構成で手動更新が不要に ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622))。

### Containers

- **ログ取得タイムアウト** — コンテナログダウンロードの待機時間を実運用に合わせて調整 ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632))。

### File Browser

- **解凍の停止** — 解凍タスクを実行中にキャンセル可能。並列ジョブ向けにタスク一覧 UI を改善 ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582))。
- **VS Code と SSH** — VS Code 接続ガイドの明確化と SSH 設定スクリプトの拡充 ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613))。

### Terminal

- **埋め込みターミナルの高さ** — よくあるビューポートで外側スクロールが出にくいようレイアウト調整 ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630))。

### Panel Settings

- **IPv6 と自己署名 SSL** — サーバーが IPv6 でアクセスされる場合でもパネル HTTPS に自己署名証明書を利用可能 ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652))。

## Bug Fixes

| 領域 | 修正内容 |
|---|---|
| **Overview** | ホームの監視チャート読み込み異常を修正 ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591))。 |
| **Overview** | 一部言語環境でのメモウィジェット表示を修正 ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629))。 |
| **App Store** | アプリアップグレードのファイル差分画面で矢印が欠ける問題を修正 ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663))。 |
| **Websites** | リダイレクト設定でワイルドカードドメインに対応 ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625))。 |
| **Containers** | ログダウンロードタイムアウト後に Docker 関連プロセスをクリーンアップ ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607))。 |
| **Containers** | Compose 変更保存後のダイアログボタン挙動を修正 ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631))。 |
| **Containers** | Arch Linux での Docker サービス検出異常を修正 ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651))。 |
| **File Browser** | エディタのコンテキストメニューとフィルタの端ケースを修正 ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612))。 |
| **File Browser** | ファイルサービス API の戻り値型を修正 ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648))。 |
| **Multi-Node** | 子ノードが主ノードのホスト接続を再度利用可能に ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659))。 |
| **Website Monitoring** | OpenResty 未起動時のサイト監視ページの案内を実状態に一致。 |
| **System** | テーブル列ソートの異常を修正 ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658))。 |

## How to Upgrade

ダッシュボード右下の `Update` からアップグレードできます。

はじめての方は [1panel.pro](https://1panel.pro/) をご覧ください。

## Source

詳細なリリースノート: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
