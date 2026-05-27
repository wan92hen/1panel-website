---
title: "MCP-Server auf dem VPS mit 1Panel deployen (One-Click)"
description: "Schritt-fuer-Schritt: Self-hosted MCP-Server auf einem VPS mit 1Panels One-Click-Oberflaeche — Architektur, Transportmodi, Haertung und Anbindung von Claude, Cursor und weiteren AI-Clients."
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

## Kurzfassung

- **MCP** (Model Context Protocol) ist der offene Standard, mit dem AI-Agenten ueber eine Schnittstelle auf Datenbanken, APIs und Tools zugreifen.
- Self-Hosting auf dem eigenen VPS haelt sensible Daten in Ihrer Infrastruktur, ohne Kosten pro Aufruf und ohne Vendor Lock-in.
- **1Panel** ist das einzige Open-Source-VPS-Panel mit nativer MCP-Server-Verwaltung — Deploy, Monitoring und Verbindung per Web-UI.
- 1Panel bridgt STDIO-MCP-Server automatisch zu SSE; npx- und Binary-Server sind remote erreichbar ohne Transport-Umbau.
- MCP-Verwaltung ab **1Panel v1.10.29 LTS**.

---

## Was ist ein MCP-Server?

Jeder AI-Agent stoesst irgendwann an dieselbe Grenze: oeffentliche Daten funktionieren, aber private Datenbanken, interne Tools oder proprietäre APIs fuehren zu Stille — oder Halluzinationen.

**Model Context Protocol (MCP)** loest das. Seit November 2024 (Anthropic), heute mit OpenAI, Google und Docker, liefert MCP LLMs eine standardisierte JSON-RPC-2.0-Bruecke zu externen Tools und Daten. [Quelle: Anthropic](https://www.anthropic.com/news/model-context-protocol)

Zwei Seiten:

- **MCP Server** — Prozess, der Tools, Ressourcen oder Datenquellen exponiert.
- **MCP Client** — AI-Host (Claude Desktop, Cursor, Windsurf, VS Code Copilot), der den Server aufruft.

Jeder MCP-faehige Host spricht mit jedem MCP-Server — unabhaengig vom Modell.

---

## Warum Self-Hosting statt Managed Service?

Smithery, MintMCP und Cloud-Anbieter eignen sich fuer Prototypen. Fuer echte Daten und Produktions-Uptime spricht Self-Hosting:

**1. Datensouveraenitaet.** Daten durchlaufen den MCP-Server. Auf fremder Infrastruktur liegt der Datenpfad dort. EU AI Act (Strafen ab August 2025): bis 7 % Jahresumsatz. Eigener VPS = klare Grenze. [Quelle: MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. Kosten.** Managed: pro Request oder Seat. ~6 $/Monat VPS: keine Per-Call-Kosten.

**3. Kontrolle.** Zentrales VPS-Management statt verstreuter Laptop-Server ohne Audit. [Quelle: Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## VPS-Anforderungen

MCP-Prozesse sind leicht (< 100 MB RAM). Die Last kommt von Datenbank-Proxy oder Inference.

| Anwendungsfall | Minimum |
|---|---|
| Einzelner MCP (Proxy/API) | 1 vCPU, 1 GB RAM |
| MCP + Ollama (7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + Vektordb | 4 vCPU, 32 GB RAM |
| GPU (14B+) | GPU VPS, 24 GB+ VRAM |

**OS:** Ubuntu 22.04 LTS oder Debian 12.

**Ports:** 443 (HTTPS) und MCP-Port (oft 3000/8080 hinter Reverse Proxy).

---

## STDIO vs. HTTP/SSE

**STDIO** — stdin/stdout, lokal, Client startet Subprozess. Nicht fuer Internet-Remote.

**HTTP + SSE** — persistenter HTTP-Dienst, URL-Endpunkt. Pflicht fuer VPS + Client auf anderem Rechner.

> **Regel:** VPS-Server + Client woanders → HTTP/SSE. STDIO nur lokal.

**1Panel** packt STDIO-Server (`npx` oder Binary) in Container und exponiert SSE — inkl. Bridge, Port und Reverse Proxy.

**Streamable HTTP** kommt in der MCP-Roadmap 2026; 1Panel folgt Spec-Updates.

---

## MCP-Server mit 1Panel deployen

[1Panel](https://1panel.pro/) ist ein Open-Source-VPS-Panel mit nativer MCP-Verwaltung und AI-Workspace (Ollama, OpenClaw, GPU-Monitoring).

### Schritt 1: 1Panel installieren

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

Nach der Installation: URL und Einmal-Passwort. `https://your-vps-ip:PORT` oeffnen.

> 1Panel schon da? → Schritt 2.

### Schritt 2: MCP-Verwaltung

**AI → MCP** in der Sidebar. **Create MCP Server** klicken.

### Schritt 3: MCP-Server anlegen

**Methode 1 — npx (Node.js-MCP)**

1. **npx** waehlen.
2. Befehl, z. B.:
   ```bash
   npx -y @modelcontextprotocol/server-filesystem /data
   ```
3. Env-Variablen setzen.
4. **Confirm**.

**Methode 2 — Binary**

1. **Binary** waehlen.
2. Binary mounten (Host- und Container-Pfad).
3. Run-Command und Env setzen.
4. **Confirm**.

![MCP-Server in 1Panel erstellen](/blog/create-mcp-server.png)

### Schritt 4: Client-Config

Nach Start **Config** klicken — JSON mit Port, Adresse und SSE-Pfad kopieren.

**Claude Desktop** (macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`):

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

**Cursor / Windsurf:** Settings → AI → MCP Servers.

**VS Code + Copilot:** `.vscode/mcp.json`.

### Bonus: Mehrere MCP-Server unter einer Domain

| Server | SSE-Pfad |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![Mehrere MCP-Server unter einer Domain](/blog/mcp-bind-website.png)

Alle unter `https://mcp.yourdomain.com` — ein Port 443, ein Zertifikat. In den Website-Bindings jedes MCP-Servers konfigurieren.

---

## MCP-Server absichern

Bekannte Schwachstellen: u. a. RCE in MCP Inspector (CVE-2025-49596, CVSS 9.4). [Quelle: Oligo Security](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

**1. HTTPS** — Zertifikat in Website-Binding hochladen.

**2. Bearer-Token** — `MCP_AUTH_TOKEN` in App Settings:

```json
{
  "url": "https://your-vps.example.com:8080/mcp",
  "transport": "sse",
  "headers": { "Authorization": "Bearer YOUR_SECRET_TOKEN" }
}
```

**3. IP-Whitelist** pro MCP-Website; optional **Host → Firewall**.

**4. STDIO nie oeffentlich** — kein Auth-Layer, nur lokal.

---

## AI-Clients

| Client | MCP | Hinweise |
|---|---|---|
| Claude Desktop | Voll | Native Config |
| Cursor | Voll | Settings → MCP Servers |
| Windsurf | Voll | Settings |
| VS Code + Copilot | Voll | `.vscode/mcp.json` |
| Continue.dev | Voll | Open Source |
| Open WebUI | Teilweise | Tool-Server |

---

## 1Panel vs. manuelles Docker

| Aufgabe | Docker | 1Panel |
|---|---|---|
| npx-MCP | Dockerfile + compose | npx in UI |
| Binary-MCP | Mount + compose | UI-Mount |
| STDIO→SSE | Proxy/supergateway | eingebaut |
| Eine Domain, viele MCP | Nginx locations | Website-Binding |
| IP-Whitelist | allow/deny | Web-UI |
| SSL | Certbot | UI-Upload |
| Logs | docker logs | Web-UI |
| Mehrere MCP | viele Configs | ein Dashboard |
| Restart | --restart always | Standard |

Auch [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel) zum Verwalten des VPS per AI.

---

## FAQ

### Mehrere MCP auf einem VPS?

Ja — isolierte Container, eine Domain, verschiedene SSE-Pfade, Port 443 gemeinsam.

### Welche MCP-Server?

Alle per `npx` oder Binary — inkl. [offizielles Repo](https://github.com/modelcontextprotocol/servers). Ab **v1.10.29 LTS**.

### Kostenlos?

GPL-3.0, Kernfunktionen inkl. MCP kostenlos. Pro ab $80/Jahr. [1panel.pro](https://1panel.pro/)

### Mit Ollama?

Ja — **AI → Local LLMs**, dann MCP; gemeinsames Docker-Netz.

---

## Fazit

Self-Hosted MCP = Datenkontrolle, keine Per-Call-Kosten, klare Audit-Grenze. 1Panel nimmt SSL, Proxy, Docker und Firewall ab — in unter zehn Minuten zum HTTPS-MCP-Endpunkt.

**Start:** [1panel.pro](https://1panel.pro/) oder [GitHub](https://github.com/1panel-dev/1panel) (35.000+ Stars).
