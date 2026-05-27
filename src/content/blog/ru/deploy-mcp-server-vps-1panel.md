---
title: "Как развернуть MCP-сервер на VPS с 1Panel (установка в один клик)"
description: "Пошаговое руководство по развёртыванию self-hosted MCP-сервера на VPS через интерфейс 1Panel: архитектура, транспорты, безопасность и подключение Claude, Cursor и других клиентов."
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - MCP
  - VPS
  - Self-hosted
  - AI Agent
  - Deployment
---

## Кратко

- **MCP** (Model Context Protocol) — открытый стандарт подключения AI-агентов к БД, API и инструментам.
- Self-host на своём VPS сохраняет данные в вашей инфраструктуре без оплаты за каждый вызов.
- **1Panel** — единственная open-source панель VPS с нативным управлением MCP-серверами.
- 1Panel автоматически преобразует STDIO в SSE. Управление MCP с **1Panel v1.10.29 LTS**.

---

## Что такое MCP-сервер?

**Model Context Protocol (MCP)** — стандартизированный мост JSON-RPC 2.0. [Источник: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — процесс, экспонирующий инструменты и данные
- **MCP Client** — Claude Desktop, Cursor, Windsurf, VS Code Copilot

---

## Зачем self-host

**1. Суверенитет данных** — [MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. Стоимость** — VPS ~$6/мес без платы за запрос

**3. Контроль** — централизация вместо разрозненных серверов на ноутбуках. [Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## Требования к VPS

| Сценарий | Минимум |
|---|---|
| Один MCP (прокси) | 1 vCPU, 1 GB RAM |
| MCP + Ollama (7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + векторная БД | 4 vCPU, 32 GB RAM |
| GPU (14B+) | GPU VPS, 24 GB+ VRAM |

**ОС:** Ubuntu 22.04 LTS или Debian 12.

---

## STDIO и HTTP/SSE

**STDIO** — только локально. **HTTP + SSE** — обязательно при удалённом VPS.

**1Panel** упаковывает STDIO в контейнер и выдаёт HTTPS URL с SSE.

---

## Развёртывание с 1Panel

### Шаг 1

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Шаг 2: **AI → MCP** → **Create MCP Server**

### Шаг 3

**npx:**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**Binary** — смонтировать исполняемый файл.

![Создание MCP-сервера в 1Panel](/blog/create-mcp-server.png)

### Шаг 4: кнопка **Config**

```json
{
  "mcpServers": {
    "my-vps-server": {
      "url": "https://your-vps.example.com/filesystem",
      "transport": "sse"
    }
  }
}
```

### Bonus: несколько MCP на одном домене

| Сервер | Путь SSE |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![Несколько MCP-серверов на одном домене](/blog/mcp-bind-website.png)

---

## Безопасность

[Oligo Security — CVE-2025-49596](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

HTTPS, `MCP_AUTH_TOKEN`, белый список IP (**Host → Firewall**), не публикуйте STDIO в интернет.

---

## AI-клиенты

Claude Desktop, Cursor, Windsurf, VS Code + Copilot, Continue.dev, Open WebUI (частично).

---

## 1Panel vs ручной Docker

UI вместо Dockerfile, compose и ручного Nginx. [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel).

---

## FAQ

**Несколько MCP на одном VPS?** Да — разные пути SSE, общий порт 443.

**Какие серверы?** Любые через `npx` или binary. С **v1.10.29 LTS**.

**Бесплатно?** Open source; Pro от $80/год. [1panel.pro](https://1panel.pro/)

**С Ollama?** **AI → Local LLMs**.

---

## Заключение

[1panel.pro](https://1panel.pro/) · [GitHub](https://github.com/1panel-dev/1panel)
