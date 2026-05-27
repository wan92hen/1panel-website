---
title: "Como implantar um servidor MCP no VPS com 1Panel (configuracao em um clique)"
description: "Guia passo a passo para implantar um servidor MCP auto-hospedado em um VPS com a interface de um clique do 1Panel: arquitetura, transportes, endurecimento de seguranca e conexao com Claude, Cursor e mais."
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

## Resumo

- **MCP** (Model Context Protocol) e o padrao aberto que conecta agentes de IA a bancos de dados, APIs e ferramentas.
- Auto-hospedar no seu VPS mantem os dados na sua infraestrutura, sem custo por chamada.
- **1Panel** e o unico painel VPS open source com gerenciamento nativo de servidores MCP.
- O 1Panel converte automaticamente servidores MCP em modo STDIO para SSE.
- Gerenciamento MCP disponivel a partir do **1Panel v1.10.29 LTS**.

---

## O que e um servidor MCP?

**Model Context Protocol (MCP)** oferece uma ponte JSON-RPC 2.0 padronizada. [Fonte: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — expoe ferramentas e recursos
- **MCP Client** — Claude Desktop, Cursor, Windsurf, VS Code Copilot

---

## Por que auto-hospedar

**1. Soberania de dados** — [MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. Custo** — VPS de ~US$ 6/mes sem cobranca por requisicao

**3. Controle** — centralize em um VPS que voce administra. [Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## Requisitos do VPS

| Caso de uso | Minimo |
|---|---|
| Um MCP (proxy/API) | 1 vCPU, 1 GB RAM |
| MCP + Ollama (7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + banco vetorial | 4 vCPU, 32 GB RAM |
| Inferencia GPU (14B+) | VPS GPU, 24 GB+ VRAM |

**SO:** Ubuntu 22.04 LTS ou Debian 12.

---

## STDIO vs HTTP/SSE

**STDIO** — apenas local. **HTTP + SSE** — obrigatorio se o servidor esta no VPS e o cliente em outra maquina.

O **1Panel** encapsula STDIO em container e expoe SSE com HTTPS.

---

## Implantar com 1Panel

### Passo 1

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Passo 2: **AI → MCP** → **Create MCP Server**

### Passo 3

**npx:**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**Binary** — montar o executavel.

![Criar servidor MCP no 1Panel](/blog/create-mcp-server.png)

### Passo 4: botao **Config**

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

### Bonus: varios MCP em um dominio

| Servidor | Caminho SSE |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![Varios servidores MCP em um dominio](/blog/mcp-bind-website.png)

Tudo em `https://mcp.yourdomain.com` — porta 443 e SSL unicos.

---

## Seguranca

[Oligo Security — CVE-2025-49596](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

HTTPS, `MCP_AUTH_TOKEN`, lista branca de IP (**Host → Firewall**), nunca exponha STDIO publicamente.

---

## Clientes de IA

Claude Desktop, Cursor, Windsurf, VS Code + Copilot, Continue.dev (completo), Open WebUI (parcial).

---

## 1Panel vs Docker manual

Tarefas como npx, binario, STDIO→SSE, dominio unificado e SSL sao mais simples na UI. [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel).

---

## Perguntas frequentes

**Varios MCP em um VPS?** Sim — caminhos SSE diferentes no mesmo dominio.

**Quais servidores?** Qualquer um via `npx` ou binario. A partir do **v1.10.29 LTS**.

**E gratuito?** Open source; Pro a partir de US$ 80/ano. [1panel.pro](https://1panel.pro/)

**Com Ollama?** **AI → Local LLMs**.

---

## Conclusao

[1panel.pro](https://1panel.pro/) · [GitHub](https://github.com/1panel-dev/1panel)
