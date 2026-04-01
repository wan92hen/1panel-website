---
title: "1PanelでVPSにOllamaを導入する方法：10分で作るプライベートAI環境"
description: "1Panelを使ってVPSにOllamaを導入する手順を解説。プライベートLLMを低コストで運用し、セキュリティも簡単に強化できます。"
pubDate: 2026-04-01
updatedDate: 2026-04-01
tags:
  - Ollama
  - VPS
  - 1Panel
  - LLM
  - Self-hosted
---

## TL;DR

Ollamaを使えば、Llama 3やMistralなどのオープンソースLLMを自分のVPS上で実行できます。1PanelならApp Storeから数クリックで導入でき、最初のモデル起動まで約10分です。

## 1PanelでOllamaを導入する手順

### Step 1: 1Panelをインストール
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: App StoreでOllamaを検索
サイドバーの **App Store** で **Ollama** を検索し、**Install** をクリックします。

### Step 3: インストール設定
- ポート（既定: `11434`）
- CPU / メモリ制限（必要な場合）
- モデル保存ディレクトリ
- 外部アクセスが必要なら `External Access` を有効化

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: 最初のモデルを実行
`AI` > `Local Models` > `Ollama` で `Add` を押し、モデル名を入力して起動します。モデル一覧は <https://ollama.com/search> で確認できます。

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: 動作確認
CLIチャットで確認するか、APIでテストします。

```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: セキュリティ強化
公開運用する場合は、`AI Proxy Enhancement` でリバースプロキシ + HTTPS を有効化します。

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
