---
title: "Como executar Ollama em uma VPS com 1Panel: seu laboratório de IA privada em 10 minutos"
description: "Guia prático para instalar Ollama em uma VPS usando 1Panel, rodar LLMs privados com baixo custo e reforçar segurança com poucos cliques."
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

Com Ollama, você roda modelos como Llama 3 e Mistral na sua própria VPS. Com 1Panel, a instalação via App Store leva cerca de 2 minutos, e o ambiente completo fica pronto em menos de 10 minutos.

## Passo a passo com 1Panel

### Step 1: Instalar 1Panel
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: Abrir App Store e buscar Ollama
No menu lateral, acesse **App Store**, procure **Ollama** e clique em **Install**.

### Step 3: Configurar instalação
- Porta padrão: `11434`
- Limites opcionais de CPU/RAM
- Diretório de dados dos modelos
- Se precisar acesso externo, habilite `External Access`

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: Rodar o primeiro modelo
Vá em `AI` > `Local Models` > `Ollama`, clique em `Add` e informe o nome do modelo. Catálogo: <https://ollama.com/search>.

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: Testar o modelo
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: Reforçar segurança
Para uso público, ative `AI Proxy Enhancement` para configurar reverse proxy + HTTPS.

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
