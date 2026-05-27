---
title: "1Panel로 VPS에 MCP 서버 원클릭 배포하기"
description: "1Panel 원클릭 UI로 VPS에 셀프호스팅 MCP 서버를 배포하는 단계별 가이드. 아키텍처, 전송 방식, 보안 강화, Claude·Cursor 등 AI 클라이언트 연결."
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

## TL;DR

- **MCP**(Model Context Protocol)는 AI 에이전트가 DB·API·도구에 연결하는 오픈 표준입니다.
- 자체 VPS에 호스팅하면 데이터가 내 인프라에 남고 호출당 비용·벤더 종속이 없습니다.
- **1Panel**은 MCP 서버 관리를 네이티브로 제공하는 유일한 오픈소스 VPS 패널입니다.
- STDIO MCP를 SSE로 자동 브리지합니다. **1Panel v1.10.29 LTS**부터 MCP 관리 지원.

---

## MCP 서버란?

공개 데이터는 잘 다루지만 비공개 DB·내부 API가 필요하면 에이전트가 멈추거나 환각합니다.

**MCP**는 JSON-RPC 2.0으로 외부 도구에 연결합니다. [출처: Anthropic](https://www.anthropic.com/news/model-context-protocol)

- **MCP Server** — 도구·리소스 노출
- **MCP Client** — Claude Desktop, Cursor, Windsurf, VS Code Copilot 등

---

## 왜 셀프호스팅인가

**1. 데이터 주권** — [MintMCP](https://www.mintmcp.com/blog/mcp-gateways-self-hosted-deployments)

**2. 비용** — 월 약 $6 VPS, 호출당 과금 없음

**3. 통제** — 분산된 노트북 서버 대신 VPS 중앙 관리. [Obot AI](https://obot.ai/blog/understanding-mcp-server-hosting-why-centralized-management-matters-and-where-your-servers-should-run/)

---

## VPS 요구 사항

| 사용 사례 | 최소 사양 |
|---|---|
| 단일 MCP(프록시) | 1 vCPU, 1 GB RAM |
| MCP + Ollama(7B) | 4 vCPU, 16 GB RAM |
| MCP + Ollama + 벡터 DB | 4 vCPU, 32 GB RAM |
| GPU 추론(14B+) | GPU VPS, 24 GB+ VRAM |

**OS:** Ubuntu 22.04 LTS 또는 Debian 12.

---

## STDIO vs HTTP/SSE

**STDIO** — 로컬 전용. **HTTP + SSE** — VPS와 클라이언트가 다른 머신이면 필수.

**1Panel**이 STDIO를 컨테이너에 넣고 HTTPS SSE URL을 제공합니다.

---

## 1Panel로 배포

### 1단계: 1Panel 설치

```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### 2단계: **AI → MCP** → **Create MCP Server**

### 3단계: 서버 생성

**npx:**

```bash
npx -y @modelcontextprotocol/server-filesystem /data
```

**Binary** — 실행 파일 마운트.

![1Panel에서 MCP 서버 생성](/blog/create-mcp-server.png)

### 4단계: **Config**에서 JSON 복사

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

### Bonus: 단일 도메인에 여러 MCP

| 서버 | SSE 경로 |
|---|---|
| Filesystem | `/files` |
| PostgreSQL | `/db` |
| GitHub | `/github` |

![하나의 도메인에 여러 MCP 서버 통합](/blog/mcp-bind-website.png)

---

## 보안

[Oligo Security — CVE-2025-49596](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

HTTPS, `MCP_AUTH_TOKEN`, IP 화이트리스트(**Host → Firewall**), STDIO 공개 금지.

---

## AI 클라이언트

Claude Desktop, Cursor, Windsurf, VS Code + Copilot, Continue.dev(전체), Open WebUI(일부).

---

## 1Panel vs 수동 Docker

UI에서 npx·바이너리·STDIO→SSE·통합 도메인·whitelist·SSL·로그·다중 MCP 관리. [1Panel MCP Server](https://mcpservers.org/servers/1Panel-dev/mcp-1panel).

---

## FAQ

**한 VPS에 여러 개?** 가능. SSE 경로만 분리.

**지원 서버?** `npx` 또는 바이너리. **v1.10.29 LTS**부터.

**무료?** 코어 무료. Pro 연 $80. [1panel.pro](https://1panel.pro/)

**Ollama와 함께?** **AI → Local LLMs**.

---

## 결론

[1panel.pro](https://1panel.pro/) · [GitHub](https://github.com/1panel-dev/1panel)
