---
title: "1Panel で Hermes Agent をサーバーに導入する方法"
description: "Nous Research 製 Hermes Agent（自己改善型 AI）を 1Panel で導入する手順。Model Accounts と Agents を使った設定、WebUI へのアクセス、運用向け調整まで解説。"
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Hermes Agent とは

**Hermes Agent** は [Nous Research](https://nousresearch.com/) が提供する自己改善型 AI エージェントです。**学習ループ**を備え、運用の中で **スキルの生成・改善**、**長期記憶**の保持、**過去セッション**の参照、そして会話をまたいだユーザー理解の向上が可能です。

Hermes Agent は **1 台の PC に固定されません**。**VPS** や **GPU クラスター** などで実行でき、**CLI**、**WebUI**、**メッセージ系チャネル**から利用できます。

1Panel で導入すると、**ブラウザ WebUI** から **設定** と **API Key** を管理し、**実行状態**や**セッション情報**を確認できます。1Panel 上では、導入と日常運用は **AI -> Agents** と **Model Accounts** を中心に進めます。

## Hermes Agent を 1Panel で使う理由

**モデル資格情報**、**エージェント定義**（タイプ・バージョン・ポート・モデル指定）、そして **WebUI への導線**を 1 つのワークフローで扱えます。個別スクリプト依存を減らし、運用を標準化しやすくなります。

## 事前準備

デプロイ前に以下を確認します。

- **1Panel** がインストール済みでダッシュボードにアクセスできる。
- 利用可能な **LLM API Key**、または 1Panel に接続済みの **ローカルモデル**がある。
- サーバーが **インターネット接続**可能（完全ローカル運用を除く）。

## Step 1: モデルアカウントを追加

1. **AI** -> **Model Accounts** を開く。
2. **Add Model Account** をクリック。
3. 利用する **モデルプロバイダー**を選択し、必要項目を入力。
4. **保存**する。
5. 一覧に新しいアカウントが表示され、内容が正しいことを確認。

![Create Model Account in 1Panel](/blog/create-model-account.png)

複数アカウント/モデルを管理している場合は、後続の Hermes Agent 作成画面で **Model Account / Model** を選択します。

## Step 2: Hermes Agent を作成

1. **AI** -> **Agents** を開く。
2. **Create** をクリック。
3. **Agent Type** に **Hermes Agent** を選択。

フォーム入力の基本項目:

| 項目 | 入力内容 |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | 既定例は `hermes-agent`。任意の命名も可能。 |
| **App Version** | 導入したい Hermes Agent のバージョン。 |
| **Access Port / WebUI Port** | 既定値、またはネットワーク方針に合わせた値。 |
| **Model Provider** | Step 1 で追加したアカウントに対応するプロバイダー。 |
| **Model Account / Model** | 実際に使うアカウントとモデル。 |
| **Other Parameters** | 通常は既定値で可。必要時のみ変更。 |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

プロバイダー選択後、1Panel はそのプロバイダーに紐づく **Model Accounts** を自動表示します。

モデルが複数ある場合は、この画面で対象 **モデル** を正しく選択します。追加オプションがある場合は画面の案内に従ってください。

送信前に **名前・バージョン・ポート・モデル** を再確認しましょう。

## Step 3: インストール実行と完了確認

設定に問題がなければ **Confirm** をクリックしてインストール開始。

タスク実行中は **画面上のステータス**を確認し、**完了表示**になるまで待機します。成功表示になればデプロイ完了です。

失敗した場合は、パネルに表示されるエラー（イメージ取得、ポート競合、認証、ディスクなど）を確認して原因を解消し、再実行します。

## Step 4: Hermes Agent WebUI へアクセス、または TUI でチャット

**Agents** 一覧に戻り、対象 Hermes Agent の **WebUI** をクリックします。

**初回アクセス時**は初期化中の場合があります。少し待ってから 1〜2 回リロードしてください。

WebUI では **設定**、**キー管理**、**セッション関連情報**を継続的に確認・調整できます。

また、**Chat** ボタンをクリックして TUI から Hermes Agent と会話することもできます。

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## Step 5: 1Panel 上での後続調整

初回デプロイ後は、実運用に合わせて Hermes Agent を調整します。**モデル**やアカウント紐付けの見直し、**アクセス方式**（内部限定か公開ドメインか）の整理、フォーム/WebUI の **実行パラメータ**調整が主なポイントです。

外部公開する場合は、**ファイアウォール**範囲、ドメイン利用時の **HTTPS**、**API Key** の取り扱い（チケット・ログ・スクリーンショット）を必ず運用ルール化してください。

## クイック確認リスト

- 初期化後、WebUI が安定して開ける。
- スモークテストが **想定モデル** に到達している。
- **ポート** が他サービスと衝突していない。
- 必要に応じて **バックアップ/スナップショット** 方針がある。

## まとめ

Hermes Agent は、自己ホストできる **長時間稼働・スキル指向** のエージェント実行基盤です。1Panel では  
**Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** の順で導入し、その後 **モデル・アクセス・パラメータ** を継続的に最適化します。

1Panel を初めて使う場合は [1panel.pro](https://1panel.pro/) から始めてください。
