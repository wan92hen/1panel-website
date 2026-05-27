---
title: "Cara deploy pelayan MCP pada VPS dengan 1Panel (satu klik)"
description: "Panduan langkah demi langkah untuk deploy pelayan MCP self-hosted pada VPS menggunakan antara muka satu klik 1Panel — seni bina, mod pengangkutan, pengerasan keselamatan, dan sambungan Claude, Cursor, dan lain-lain."
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

## Ringkasan

- **MCP** (Model Context Protocol) ialah standard terbuka yang membolehkan ejen AI menyambung ke pangkalan data, API, dan alat.
- Self-host pada VPS anda mengekalkan data dalam infrastruktur sendiri, tanpa kos setiap panggilan.
- **1Panel** ialah satu-satunya panel VPS sumber terbuka dengan pengurusan pelayan MCP terbina dalam.
- 1Panel menjambatani pelayan MCP mod STDIO ke SSE secara automatik.
- Pengurusan MCP tersedia dari **1Panel v1.10.29 LTS**.

---

## Apakah pelayan MCP?

**Model Context Protocol (MCP)** menyediakan antara muka standard JSON-RPC 2.0. [Sumber: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — mendedahkan alat dan sumber data
- **MCP Client** — Claude Desktop, Cursor, Windsurf, VS Code Copilot

---

## Mengapa self-host

**1. Kedaulatan data** — [MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. Kos** — VPS ~$6/bulan tanpa caj setiap permintaan

**3. Kawalan** — pusatkan pada VPS yang anda urus. [Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## Keperluan VPS

| Kes penggunaan | Minimum |
|---|---|
| Satu MCP (proxy/API) | 1 vCPU, 1 GB RAM |
| MCP + Ollama (7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + DB vektor | 4 vCPU, 32 GB RAM |
| Inferens GPU (14B+) | VPS GPU, 24 GB+ VRAM |

**OS:** Ubuntu 22.04 LTS atau Debian 12.

---

## STDIO vs HTTP/SSE

**STDIO** — tempatan sahaja. **HTTP + SSE** — wajib untuk VPS jauh.

**1Panel** membungkus STDIO dalam kontena dan mendedahkan SSE dengan HTTPS.

---

## Deploy dengan 1Panel

### Langkah 1

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Langkah 2: **AI → MCP** → **Create MCP Server**

### Langkah 3

**npx:**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**Binary** — mount fail boleh laku.

![Cipta pelayan MCP dalam 1Panel](/blog/create-mcp-server.png)

### Langkah 4: **Config** → tampal JSON

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

### Bonus: Beberapa MCP di satu domain

| Pelayan | Laluan SSE |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![Beberapa pelayan MCP di satu domain](/blog/mcp-bind-website.png)

---

## Keselamatan

[Oligo Security — CVE-2025-49596](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

HTTPS, `MCP_AUTH_TOKEN`, senarai putih IP, jangan dedahkan STDIO secara awam.

---

## Klien AI

Claude Desktop, Cursor, Windsurf, VS Code + Copilot, Continue.dev, Open WebUI (separa).

---

## 1Panel vs Docker manual

UI menggantikan Dockerfile, compose, Nginx manual, dan pelbagai fail konfigurasi. [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel).

---

## Soalan lazim

**Beberapa MCP pada satu VPS?** Ya — laluan SSE berbeza, port 443 dikongsi.

**Pelayan yang disokong?** Semua melalui `npx` atau binary. Dari **v1.10.29 LTS**.

**Percuma?** Sumber terbuka; Pro dari $80/tahun. [1panel.pro](https://1panel.pro/)

**Dengan Ollama?** **AI → Local LLMs**.

---

## Kesimpulan

[1panel.pro](https://1panel.pro/) · [GitHub](https://github.com/1panel-dev/1panel)
