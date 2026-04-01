---
title: "Como ejecutar Ollama en una VPS con 1Panel: tu laboratorio de IA privada en 10 minutos"
description: "Guía práctica para desplegar Ollama en una VPS con 1Panel, operar LLM privados y reforzar la seguridad sin configuraciones complejas."
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

Ollama permite ejecutar modelos como Llama 3 y Mistral en tu propia VPS. Con 1Panel, la instalación desde App Store toma unos minutos y el entorno completo queda listo en menos de 10.

## Instalación con 1Panel

### Step 1: Instalar 1Panel
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: Buscar Ollama en App Store
En la barra lateral, abre **App Store**, busca **Ollama** y pulsa **Install**.

### Step 3: Configurar opciones
- Puerto por defecto: `11434`
- Límites opcionales de CPU/RAM
- Directorio de datos para modelos
- Activa `External Access` si necesitas acceso externo

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: Ejecutar el primer modelo
Ve a `AI` > `Local Models` > `Ollama`, pulsa `Add` e introduce el nombre del modelo. Catálogo: <https://ollama.com/search>.

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: Probar el modelo
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: Endurecer seguridad
Para exponer el servicio, habilita `AI Proxy Enhancement` para usar reverse proxy + HTTPS.

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
