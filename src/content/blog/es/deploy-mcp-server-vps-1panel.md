---
title: "Como desplegar un servidor MCP en tu VPS con 1Panel (configuracion en un clic)"
description: "Guia paso a paso para desplegar un servidor MCP autoalojado en un VPS con la interfaz de un clic de 1Panel: arquitectura, modos de transporte, endurecimiento y conexion con Claude, Cursor y mas."
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

## Resumen

- **MCP** (Model Context Protocol) es el estandar abierto que conecta agentes de IA a bases de datos, APIs y herramientas.
- Autoalojar en tu VPS mantiene los datos en tu infraestructura, sin coste por llamada ni dependencia del proveedor.
- **1Panel** es el unico panel VPS open source con gestion nativa de servidores MCP.
- 1Panel convierte automaticamente servidores MCP en modo STDIO a SSE (npx o binarios).
- Gestion MCP disponible desde **1Panel v1.10.29 LTS**.

---

## Que es un servidor MCP?

Los agentes razonan bien con datos publicos, pero ante una base privada, una herramienta interna o una API propietaria se quedan en silencio o alucinan.

**Model Context Protocol (MCP)** lo resuelve con un puente JSON-RPC 2.0 estandarizado. [Fuente: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — expone herramientas, recursos o datos.
- **MCP Client** — el host de IA (Claude Desktop, Cursor, Windsurf, VS Code Copilot).

Mas de 500 servidores MCP publicos existen hoy; muchas organizaciones ejecutan instancias privadas en su propia infraestructura.

---

## Por que autoalojar

**1. Soberania de datos.** [Fuente: MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. Coste.** Un VPS de ~6 USD/mes sin coste por peticion.

**3. Control.** Centralizar en un VPS que administras: logs, acceso y configuracion unica. [Fuente: Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## Requisitos del VPS

| Caso de uso | Minimo |
|---|---|
| Un solo MCP (proxy/API) | 1 vCPU, 1 GB RAM |
| MCP + Ollama (7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + vector DB | 4 vCPU, 32 GB RAM |
| Inferencia GPU (14B+) | VPS GPU, 24 GB+ VRAM |

**SO:** Ubuntu 22.04 LTS o Debian 12. **Puertos:** 443 y puerto MCP (3000/8080 detras de proxy).

---

## STDIO vs HTTP/SSE

**STDIO** — solo local. **HTTP + SSE** — obligatorio si el servidor esta en el VPS y el cliente en otra maquina.

> **Regla:** VPS remoto + cliente en otro equipo → HTTP/SSE.

**1Panel** envuelve STDIO en contenedor y expone SSE con HTTPS.

---

## Desplegar con 1Panel

[1Panel](https://1panel.pro/) incluye workspace de IA: Ollama, OpenClaw, GPU y gestor MCP.

### Paso 1: Instalar 1Panel

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

Visita `https://your-vps-ip:PORT`.

### Paso 2: Gestion MCP

**AI → MCP** → **Create MCP Server**.

### Paso 3: Crear servidor

**Metodo 1 — npx**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**Metodo 2 — Binary** — montar ejecutable y comando de arranque.

![Crear servidor MCP en 1Panel](/blog/create-mcp-server.png)

### Paso 4: Config del cliente

Boton **Config** → pegar JSON en Claude, Cursor o `.vscode/mcp.json`:

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

### Bonus: Varios MCP bajo un dominio

| Servidor | Ruta SSE |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![Varios servidores MCP bajo un dominio](/blog/mcp-bind-website.png)

Todo en `https://mcp.yourdomain.com` — un puerto 443 y un certificado SSL.

---

## Seguridad

Vulnerabilidades reales en produccion (p. ej. CVE-2025-49596). [Fuente: Oligo Security](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

1. **HTTPS** en el binding del sitio web.
2. **Token Bearer** con `MCP_AUTH_TOKEN`.
3. **Lista blanca IP** por servidor; **Host → Firewall**.
4. **No exponer STDIO** publicamente.

---

## Clientes de IA compatibles

| Cliente | Soporte MCP |
|---|---|
| Claude Desktop | Completo |
| Cursor | Completo |
| Windsurf | Completo |
| VS Code + Copilot | Completo |
| Continue.dev | Completo |
| Open WebUI | Parcial |

---

## 1Panel vs Docker manual

Tabla de tareas: npx, binario, STDIO→SSE, dominio unificado, whitelist, SSL, logs, varios MCP — todo mas simple en 1Panel.

[1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel) para administrar el VPS por lenguaje natural.

---

## Preguntas frecuentes

**Varios MCP en un VPS?** Si, contenedores aislados y rutas SSE distintas en el mismo dominio.

**Que servidores soporta?** Cualquiera via `npx` o binario. Desde **v1.10.29 LTS**.

**Es gratis?** Open source; Pro desde 80 USD/ano. [1panel.pro](https://1panel.pro/)

**Con Ollama?** Si, en **AI → Local LLMs**.

---

## Conclusion

Autoalojar MCP da control de datos y coste cero por llamada. 1Panel elimina la friccion de SSL, proxy y Docker.

**Empieza:** [1panel.pro](https://1panel.pro/) o [GitHub](https://github.com/1panel-dev/1panel).
