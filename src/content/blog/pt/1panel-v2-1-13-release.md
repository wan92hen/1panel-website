---
title: "1Panel v2.1.13 lancado: baixador de modelos, File Browser e correcoes de Runtime"
description: "O 1Panel v2.1.13 adiciona um baixador de modelos, melhora historico de arquivos, tamanho de diretorios e selecao no File Browser, verifica espaco em disco na atualizacao e corrige Runtime, caminhos, licenca e snapshots."
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - Release Notes
  - Models
  - File Browser
  - Runtime
  - Panel Settings
---

O 1Panel v2.1.13 ja esta disponivel. O release traz um baixador de modelos integrado, refinamentos no File Browser e no fluxo de atualizacao, e correcoes para ambientes Runtime e configuracoes do painel.

## Highlights

- **Baixador de modelos** — Baixe e gerencie modelos no modulo Models sem sair do painel
- **File Browser** — Erros de historico mais claros, calculo de tamanho de diretorios otimizado com controle de concorrencia e selecao mais fluida
- **Atualizacoes mais seguras** — O processo de upgrade verifica o espaco em disco restante
- **Runtime confiavel** — Diretorios de projeto nao sao mais removidos quando a criacao do ambiente falha; mapeamentos de host podem ser excluidos novamente
- **Configuracoes do painel** — Reassociacao de licenca e recuperacao de snapshot aprimoradas

## New Features

### Models

- **Baixador de modelos** — Baixe modelos diretamente no 1Panel ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

## Enhancements

### File Browser

- **Erros de historico** — Tratamento de erros mais previsivel ao carregar conteudo do historico ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **Tamanho de diretorios** — Logica otimizada com controle de concorrencia ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **UX de selecao** — Interface de gerenciamento de arquivos e operacoes de selecao refinadas ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **Reassociacao de licenca** — Logica melhorada em varios cenarios ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **Verificacao de disco no upgrade** — Espaco livre e verificado antes de continuar ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

## Bug Fixes

| Area | Correcao |
|---|---|
| **Runtime** | Diretorios de projeto nao sao mais excluidos quando a criacao do ambiente falha ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | Mapeamentos de host do Runtime podem ser removidos novamente ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | Carregar um diretorio inexistente nao gera mais erros inesperados ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | Recuperacao de snapshot corrigida em cenarios onde falhava ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

## How to Upgrade

Clique em `Update` no canto inferior direito do painel.

Novo no 1Panel? Acesse [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
