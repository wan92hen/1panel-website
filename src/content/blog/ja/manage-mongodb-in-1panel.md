---
title: "1Panel で VPS の MongoDB を管理する方法"
description: "1Panel での MongoDB 運用手順。App Store からの導入、DB 作成、接続情報、組み込み mongosh、バックアップ/復元、リモート管理まで解説。"
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

1Panel を使うと、VPS 上の MongoDB を 1 つの画面で運用できます。導入、作成、接続、確認、バックアップ、復元までを順に実施できます。

## 1Panel でできること

- **App Store** から MongoDB を導入
- データベースとユーザーを権限付きで作成
- ブラウザから組み込み **mongosh** を利用
- アプリ接続向けの接続情報を確認
- バックアップ/復元と定期実行
- リモート MongoDB インスタンス管理

## 前提条件

- 1Panel が利用可能
- MongoDB 用の十分なメモリがある
- イメージ取得のためのインターネット接続がある

## Step 1: App Store から MongoDB をインストール

**App Store** で **Database** を選び、**MongoDB** を **Install**。

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

主要項目:

| 項目 | 目安 |
|---|---|
| Name | インスタンス名（既定 `mongodb`） |
| Version | 導入する MongoDB バージョン |
| Username / Password | 初期認証情報 |
| Port | 既定 `27017` |
| External Access | 必要時のみ有効化 |
| Restart Policy | 本番は `always` が一般的 |

入力後 **Confirm**。

## Step 2: MongoDB データベースを作成

**Databases** -> **MongoDB** で **Create** をクリック。

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

入力項目:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description**（任意）

**Confirm** で作成。

## Step 3: 接続情報を確認

**Connection** で host / port / credentials を確認。

形式:

`mongodb://username:password@host:27017/databasename`

## Step 4: 組み込みターミナルを使う

**Terminal** をクリックして `mongosh` を起動。

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

例:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Step 5: バックアップと復元

データベース一覧のバックアップ操作を開く。

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up** でスナップショット作成
- **Restore** で復元
- **Settings** -> **Backup Accounts** で外部保存先設定
- **Cron Jobs** で定期バックアップ設定

## Step 6: リモートサーバー管理

**Remote server** で外部 MongoDB を追加。

手動変更後は **Sync from server** で UI と実状態を同期。

## セキュリティの推奨

- MongoDB の公開ポート露出は最小化
- Firewall は必要な送信元に限定
- VPN / トンネルなどの私設経路を優先
- 認証情報ローテーションとオフサイトバックアップを実施

## チェックリスト

- インスタンスが正常稼働
- 接続 URI を検証済み
- 少なくとも 1 回は復元テスト済み
- アクセス制御が運用基準に合致

## まとめ

1Panel なら MongoDB の運用フローを 1 つの UI で完結できます。

はじめる場合は [1panel.pro](https://1panel.pro/) を参照してください。
