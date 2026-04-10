---
title: "1Panel v2.1.8 リリース: AIファイル検索、エージェント役割管理、ファイルリンク共有に対応"
description: "1Panel v2.1.8 では、AIファイル検索、共有可能なファイルリンク、エージェントのロール管理、マルチアカウントチャネル、Bark通知、vLLM状態同期、2FAの不審IP防御を追加しました。"
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Release Notes
  - AI Search
  - Agent
  - Security
---

1Panel v2.1.8 は 2026-04-10 に正式リリースされました。Agents モジュールの大幅強化（ロール管理、マルチアカウントチャネル、Webサイトバインド）に加え、ファイルブラウザには AI 検索とリンク共有を追加。セキュリティ強化と安定性改善も多数含まれています。

## ハイライト

- ファイルブラウザに **AIファイル検索** を追加（自然言語で検索可能）
- **ファイルリンク共有** を追加（ファイルブラウザから直接リンク生成）
- **エージェント役割管理** を追加（チーム向けアクセス制御）
- **マルチアカウントチャネル** に対応（QQ / Feishu / DingTalk / Discord など）
- **エージェントのWebサイトバインド** に対応
- **Bark 通知チャネル** を追加
- 2FA ログイン時の **不審IP防御** を追加
- **vLLM 状態同期** を強化

## 新機能

### ファイルブラウザ

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): パスやファイル名を正確に覚えていなくても、自然言語で目的のファイルを検索可能。
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): 任意のファイルに対して直接ダウンロードリンクを生成可能。

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): 権限付きロールを作成し、エージェント設定に割り当て可能。
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): 1つのチャネルに複数アカウントを接続可能。
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): エージェントを 1Panel 管理下の特定サイトに紐付け可能。
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): エージェントごとの自由記述メモ欄を追加。
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): 中国本土向けスキルダウンロードの安定性を改善。

### App Store

- **外部ポート公開の一括スイッチ** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): App Store 経由で導入したアプリの外部公開を一元管理可能。

### パネル設定

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): Bark を通知先として追加。

## 改善

### Agents / OpenClaw

- OpenClaw プラグイン設定の粒度向上、バックアップモデル設定に対応 ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- OpenClaw プラグインのアンインストール/更新をパネルから実行可能 ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- QQ / Feishu を公式プラグインへ移行 ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- DingTalk の設定項目を拡充 ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- モデル関連メニュー構成を整理 ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- 推奨モデルに合わせて初期モデル設定を更新 ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- 高頻度ワークフローでの API 呼び出し安定性を向上 ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### モデル

- モデル pull ログ表示を見やすく改善 ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- vLLM 状態同期ロジックを改善

### セキュリティ

- 2FA 中の不審 IP アクセスを検知・遮断 ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- ロック時のフィードバックを改善 ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- ログインおよびパネル入口のセキュリティフローを強化 ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### ファイルブラウザ / SSH

- 高負荷時のファイル操作安定性を改善 ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- SSH 設定ファイル編集時の検証を改善 ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Webサイト / ランタイム

- OpenResty Other Settings の画面レイアウトを改善 ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- OpenClaw サイト削除時の検証強化 ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- サイトバインド設定を簡素化 ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Node.js ランタイムスクリプト選択の信頼性向上 ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### システム

- AI Terminal の更新フローを改善 ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- コードエディタの読み込み速度を改善 ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- ダイアログ表示・操作の一貫性を向上 ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- 多言語文言を更新 ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## 不具合修正

- **Overview**: 監視チャートの異常な差分値を修正 ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: OpenClaw Discord チャネル設定の不整合を修正 ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: 自動更新ロジックの不具合を修正 ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: プロキシ無効化後もヘルスチェックが継続する問題を修正 ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: 2FA + CAPTCHA 時にログイン画面へ戻れない問題を修正 ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## アップグレード方法

右下の「Update」ボタンをクリックするだけです。

初めての方は [1panel.pro](https://1panel.pro/) をご覧ください。

## 参照

- 完全なリリースノート: [1Panel v2.1.8 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)