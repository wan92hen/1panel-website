---
title: "1Panel v2.1.11 lancado: DeepSeek V4 padrao, tarefas no File Browser e correcoes"
description: "O 1Panel v2.1.11 atualiza pools DeepSeek para V4, melhora descompressao no File Browser e orientacao VS Code SSH, ajusta timeouts de download de logs, layout do terminal, SSL autoassinado em IPv6 e inclui doze correcoes."
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - Release Notes
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

O 1Panel v2.1.11 ja esta disponivel. O foco sao melhorias praticas em Agents, File Browser, conteineres e configuracoes do painel, alem de correcoes em Overview, sites, multi-no e outros modulos.

## Highlights

- **DeepSeek V4 nos pools** — contas DeepSeek passam a usar por padrao os modelos **V4** mais recentes no pool
- **Descompressao no File Browser** — cancelar trabalhos em andamento e UI de tarefas mais clara para arquivos grandes
- **VS Code via SSH** — instrucoes de conexao revisadas e script SSH ampliado
- **Download de logs de conteineres** — timeouts ajustados; limpeza de processos Docker apos timeout (ver Bug Fixes)
- **SSL do painel em IPv6** — certificado autoassinado tambem em servidores apenas IPv6 ou dual stack
- **Layout do terminal** — ajustes de altura interna para reduzir barras de rolagem externas desnecessarias

## Enhancements

### Agents

- **Pools DeepSeek** — pools de contas DeepSeek incluem por padrao os modelos **V4** mais recentes ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **Timeouts de download de logs** — a espera no download de logs alinha-se melhor a rede e disco reais ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **Parar descompressao** — tarefas podem ser canceladas em execucao; lista de tarefas melhor para trabalhos paralelos ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code e SSH** — guia de conexao do VS Code esclarecido e conteudo do script SSH expandido ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **Altura do terminal embutido** — ajustes de layout para evitar rolagem externa extra em tamanhos comuns ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 e SSL autoassinado** — HTTPS do painel com certificado autoassinado quando o servidor e acessado por IPv6 ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

## Bug Fixes

| Area | Correcao |
|---|---|
| **Overview** | Graficos de monitoramento na pagina inicial carregam normalmente ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | Widget de memorando corrigido em varios idiomas ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | Setas de comparacao restauradas na diff de atualizacao de apps ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | Redirecionamentos aceitam dominios curinga quando aplicavel ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | Processos Docker limpos apos timeout no download de logs ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | Botoes de dialogo corretos apos salvar alteracoes de orquestracao (Compose) ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Deteccao do servico Docker no Arch Linux corrigida ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | Menu de contexto do editor e filtros em casos extremos ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | Tipos de retorno da API de arquivos corrigidos ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | Nos filhos voltam a usar conexoes de host do no principal ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | Mensagens coerentes quando o OpenResty nao esta em execucao. |
| **System** | Ordenacao de colunas de tabelas restaurada ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

## How to Upgrade

Clique em `Update` no canto inferior direito do painel.

Novo no 1Panel? Acesse [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
