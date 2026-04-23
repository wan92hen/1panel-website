---
title: "1Panel v2.1.9 lancado: Hermes Agent, gestao de MongoDB e historico de arquivos"
description: "O 1Panel v2.1.9 adiciona suporte ao Hermes Agent, gestao integrada de MongoDB e historico de arquivos, com melhorias em Agents, File Browser, Containers e compatibilidade S3."
pubDate: 2026-04-23
updatedDate: 2026-04-23
tags:
  - 1Panel
  - Release Notes
  - Hermes Agent
  - MongoDB
  - File Browser
  - OpenClaw
  - AWS S3
---

O 1Panel v2.1.9 ja esta disponivel. Esta versao traz tres novos recursos em Agents, Databases e File Browser, alem de melhorias pontuais e cinco correcoes de bugs.

## Highlights

- Suporte a **Hermes Agent** no modulo de Agents
- **Gestao de MongoDB** na mesma interface de bancos de dados
- **Historico de arquivos** no File Browser para recuperacao de alteracoes
- Fluxo simplificado para bots de canal no OpenClaw
- Melhor compatibilidade com AWS S3 e endpoints compativeis

## New Features

### Agents
O 1Panel agora suporta **Hermes Agent**, ampliando as opcoes de agentes de IA locais no painel.

### Databases
**MongoDB** passa a ser gerenciado nativamente junto de MySQL, PostgreSQL e Redis.

### File Browser
Com **File History**, alteracoes em arquivos ficam rastreaveis e mais faceis de restaurar.

## Enhancements

- Agents: desvinculacao de websites mais limpa e fluxo de bot OpenClaw mais direto
- App Store: deteccao de mudancas em arquivos Compose mais robusta
- File Browser: cancelamento de compressao em andamento, sintaxe Dockerfile, cabecalhos configuraveis no compartilhamento e validacao de metadados mais rigorosa
- Containers: sincronizacao de dados e status mais confiavel
- Panel Settings: conexoes AWS S3 mais estaveis
- System/Websites: ajustes visuais em tabelas e badges de nome

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | Corrigido: diretorio runtime permanecia editavel durante sessao ativa |
| File Browser | Corrigido: arquivos compartilhados por QR nao podiam ser baixados |
| Firewall | Corrigido: descricao de regra nao podia ser alterada apos criacao |
| Firewall | Corrigido: exibicao incorreta de portas em listening |
| Tamper Protection | Corrigidos erros de traducao em varios idiomas |

## How to Upgrade

Clique em `Update` no canto inferior direito do dashboard.

Novo no 1Panel? Acesse [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
