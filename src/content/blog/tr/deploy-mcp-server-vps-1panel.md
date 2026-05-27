---
title: "1Panel ile VPS uzerinde MCP sunucusu kurulumu (tek tikla)"
description: "1Panel tek tik arayuzuyle VPS uzerinde self-hosted MCP sunucusu kurulum rehberi: mimari, tasima modlari, guvenlik ve Claude, Cursor gibi istemcilere baglanti."
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

## Ozet

- **MCP** (Model Context Protocol), AI ajanlarinin veritabanlari, API'ler ve araclara baglanmasini saglayan acik standarttir.
- Kendi VPS'inizde barindirmak veriyi altyapinizda tutar; cagri basina ucret yoktur.
- **1Panel**, yerlesik MCP sunucu yonetimi olan tek acik kaynak VPS panelidir.
- 1Panel STDIO MCP sunucularini otomatik olarak SSE'ye kopruler. **1Panel v1.10.29 LTS** ve sonrasi.

---

## MCP sunucusu nedir?

**Model Context Protocol (MCP)** JSON-RPC 2.0 koprusu sunar. [Kaynak: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — arac ve veri kaynaklarini sunar
- **MCP Client** — Claude Desktop, Cursor, Windsurf, VS Code Copilot

---

## Neden self-host

**1. Veri egemenligi** — [MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. Maliyet** — ayda ~$6 VPS, istek basina ucret yok

**3. Kontrol** — daginik laptop sunuculari yerine merkezi VPS. [Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## VPS gereksinimleri

| Kullanim | Minimum |
|---|---|
| Tek MCP (proxy) | 1 vCPU, 1 GB RAM |
| MCP + Ollama (7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + vektor DB | 4 vCPU, 32 GB RAM |
| GPU cikarimi (14B+) | GPU VPS, 24 GB+ VRAM |

**OS:** Ubuntu 22.04 LTS veya Debian 12.

---

## STDIO ve HTTP/SSE

**STDIO** — yalnizca yerel. **HTTP + SSE** — uzak VPS icin zorunlu.

**1Panel** STDIO'yu konteynerde calistirir ve HTTPS SSE URL verir.

---

## 1Panel ile kurulum

### Adim 1

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Adim 2: **AI → MCP** → **Create MCP Server**

### Adim 3

**npx:**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**Binary** — calistirilabilir dosyayi mount edin.

![1Panel'de MCP sunucusu olusturma](/blog/create-mcp-server.png)

### Adim 4: **Config** dugmesi

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

### Bonus: Tek domainde birden fazla MCP

| Sunucu | SSE yolu |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![Tek domainde birden fazla MCP sunucusu](/blog/mcp-bind-website.png)

---

## Guvenlik

[Oligo Security — CVE-2025-49596](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

HTTPS, `MCP_AUTH_TOKEN`, IP beyaz listesi (**Host → Firewall**), STDIO'yu halka acmayin.

---

## AI istemcileri

Claude Desktop, Cursor, Windsurf, VS Code + Copilot, Continue.dev, Open WebUI (kismi).

---

## 1Panel vs manuel Docker

UI ile npx, binary, STDIO→SSE, birlesik domain ve SSL. [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel).

---

## SSS

**Bir VPS'te birden fazla MCP?** Evet — farkli SSE yollari, ortak 443.

**Hangi sunucular?** `npx` veya binary. **v1.10.29 LTS**'ten itibaren.

**Ucretsiz mi?** Cekirdek ucretsiz; Pro yilda $80. [1panel.pro](https://1panel.pro/)

**Ollama ile?** **AI → Local LLMs**.

---

## Sonuc

[1panel.pro](https://1panel.pro/) · [GitHub](https://github.com/1panel-dev/1panel)
