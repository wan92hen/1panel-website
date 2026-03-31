---
title: 1Panel の PHP ランタイムで WordPress をデプロイする
description: OpenResty と MySQL の導入、PHP ランタイムの作成、WordPress の配置、ドメイン設定、1Panel での ACME による HTTPS までを解説します。
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

このチュートリアルでは、**1Panel の PHP ランタイム**を使って WordPress サイトを公開する手順を説明します。OpenResty、MySQL、ドメイン設定、HTTPS までをカバーします。1Panel はモダンな Linux サーバー管理パネルで、PHP アプリのホスティングを一連の流れで行えます。

1Panel の **PHP ランタイム管理**では次が利用できます。

- **複数の PHP バージョン** — PHP 5.6、7.x、8.0–8.3（およびサポートされる新しいバージョン）に対応し、アプリに合わせて選択できます。
- **拡張の管理** — mysqli、gd、curl、zip、mbstring など、よく使う拡張を UI からインストール・設定できます。
- **視覚的な調整** — アップロード上限、メモリ上限、実行時間、無効化する関数などを、`php.ini` を直接編集せずに変更できます。

## 前提条件

始める前に、次を用意してください。

1. **グローバル IP** を持つ Linux サーバー（クラウド VPS など）。
2. ブラウザからアクセスできる **1Panel**。
3. DNS を管理できる **独自ドメイン**。
4. ファイアウォールで **HTTP (80)** と **HTTPS (443)** を許可すること。

## ステップ 1 — ランタイムスタックを入れる

### 1.1 OpenResty をインストール

OpenResty は 1Panel がサイト管理に使う Web 基盤で、Nginx と Lua、各種モジュールを組み合わせたものです。

1. 1Panel にサインインします。
2. **アプリストア**を開きます。
3. **OpenResty** を探し、デフォルトのままインストールします。

![OpenResty インストール](/blog/install-openresty.png)

### 1.2 MySQL をインストール

WordPress はデータベースが必要です。MySQL がよく使われます。

1. **アプリストア**で **MySQL** を探します。
2. デフォルト設定でインストールし、完了を待ちます。

![MySQL インストール](/blog/install-mysql.png)

### 1.3 PHP ランタイムを作成

WordPress は PHP 上で動くため、専用のランタイムを作成します。

1. **ウェブサイト** → **PHP ランタイム**に移動します。
2. **PHP** を選び、**ランタイムを作成**をクリックします。
3. 名前を付け、PHP バージョンを選びます（例では比較的新しい **PHP 8.4**）。
4. **拡張テンプレート**で **WordPress** を選び、テーマやプラグインに必要な拡張を追加します。
5. 確定し、作成が完了するまで待ちます。

![PHP ランタイム作成](/blog/create-php-runtime.png)

## ステップ 2 — サイトを作成

### 2.1 PHP ランタイムに紐づくサイトを作る

1. **ウェブサイト** → **ウェブサイトを作成**を開きます。
2. **ランタイム**を選び、先ほど作った PHP ランタイムを指定します。
3. 次を入力します。
   - **名前** — サイトの表示名。
   - **プライマリドメイン** — 例: `www.example.com`。
   - **エイリアス** — ディレクトリ名（多くはドメインに合わせます）。
4. 必要ならこの IP の**デフォルトサイト**に設定します。

![サイト作成](/blog/create-website.png)

![デフォルトサイト](/blog/default-website.png)

### 2.2 動作確認

ブラウザでサーバーの **IP** にアクセスします。PHP の環境情報が表示されれば、サイトとランタイムの接続は問題ありません。

![サイトテスト](/blog/test-website.png)

## ステップ 3 — WordPress をデプロイ

### 3.1 WordPress をダウンロード・展開

1. UI からサイトの**ドキュメントルート**を開きます。
2. **リモートダウンロード**で `https://wordpress.org/latest.zip` を取得します。
3. ルートに解凍します。通常は `wordpress` サブディレクトリに展開されます。
4. サイト設定で**ランタイムディレクトリ**を `wordpress` にし、**保存して再読み込み**します。

![サイトルート](/blog/install-wordpress-1.png)

![WordPress ダウンロード](/blog/install-wordpress-2.png)

![WordPress ダウンロード](/blog/install-wordpress-3.png)

![WordPress 展開](/blog/install-wordpress-4.png)

![ランタイムディレクトリ変更](/blog/modify-website-runtime-directory.png)

### 3.2 データベースを作成

1. **データベース**を開きます。
2. MySQL で **データベースを作成**をクリックします。
3. データベース名、ユーザー名、パスワードを設定します（パスワードは控えます）。
4. 作成後、**接続情報**でホスト、ポート、DB 名、ユーザー、パスワードをメモし、インストーラーで使います。

![データベース作成](/blog/create-database.png)

![接続情報](/blog/database-connection-information.png)

### 3.3 WordPress インストーラーを実行

1. 再度サーバー IP にアクセスし、セットアップウィザードが出ることを確認します。
2. 言語を選び、前の手順の DB 情報を入力して送信します。
3. サイトタイトル、管理者ユーザーなどを入力して完了します。

![WordPress セットアップ](/blog/setup-wordpress-1.png)

![WordPress セットアップ](/blog/setup-wordpress-2.png)

![WordPress セットアップ](/blog/setup-wordpress-3.png)

## ステップ 4 — ドメインを向ける

### 4.1 DNS レコードを追加

DNS プロバイダー（Cloudflare、Alibaba Cloud など）で次を設定します。

- `@` または `www` の **A レコード**をサーバーのグローバル IP へ向ける。
- TTL は適宜（例: 600 秒）。

![DNS レコード](/blog/dns-record.png)

### 4.2 解決を確認

ブラウザで**ドメイン**を開きます。WordPress のトップが表示されれば DNS は正しく解決されています。

![DNS 確認](/blog/verify-dns-record.png)

## ステップ 5 — HTTPS を有効にする

### 5.1 ACME アカウントを作成

1. **証明書**管理を開きます。
2. **ACME アカウントの管理**に進みます。
3. メール、種類、鍵アルゴリズムを選び、アカウントを作成します。

![ACME アカウント](/blog/acme-account.png)

### 5.2 DNS プロバイダーを設定（DNS-01）

1. **DNS プロバイダーの管理**を開きます。
2. プロバイダー（例: Tencent Cloud）を選び、API 認証情報を入力します。

![DNS プロバイダー](/blog/dns-provider.png)

### 5.3 証明書を発行

1. 証明書ページで **申請**をクリックします。
2. プライマリドメイン、ACME アカウント、**DNS 検証**、設定した DNS アカウントを指定します。
3. 発行が完了するまで待ちます。

![SSL 証明書申請](/blog/apply-ssl-certificate.png)

### 5.4 サイトに HTTPS を適用

1. サイトの設定を開きます。
2. **SSL** で HTTPS を有効にし、発行した証明書を選び、必要なら **HTTPS へ強制リダイレクト**を有効にします。
3. 保存します。

![HTTPS 有効化](/blog/enable-https.png)

`https://あなたのドメイン` で TLS 表示を確認します。

![HTTPS 確認](/blog/verify-https.png)

## 関連リンク

- [1Panel ドキュメント](https://1panel.pro/docs/)
- [1Panel コミュニティ](https://github.com/1Panel-dev/1Panel/discussions)

---

*本ガイドは公開当時の 1Panel に基づきます。最新の挙動は公式ドキュメントとコミュニティを参照してください。*
