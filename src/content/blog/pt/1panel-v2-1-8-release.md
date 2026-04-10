---
title: "1Panel v2.1.8 lançado: busca de arquivos com IA, gestão de funções de agentes e compartilhamento por link"
description: "O 1Panel v2.1.8 adiciona busca de arquivos com IA, links compartilháveis de arquivos, gestão de funções para agentes, suporte a múltiplas contas por canal, alertas Bark, sincronização de status do vLLM e proteção de IP suspeito no 2FA."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Notas de Lançamento
  - Busca por IA
  - Agent
  - Segurança
---

O 1Panel v2.1.8 foi lançado oficialmente em 10 de abril de 2026. Esta versão amplia bastante o módulo Agents (funções, canais com múltiplas contas e vínculo com sites), adiciona busca por IA e compartilhamento por link no navegador de arquivos, e também reforça segurança e estabilidade.

## Destaques

- **Busca de arquivos com IA** no File Browser usando linguagem natural
- **Compartilhamento por link de arquivo** direto no File Browser
- **Gestão de funções de agentes** para controle de acesso em equipe
- **Suporte a múltiplas contas por canal** (QQ, Feishu, DingTalk, Discord etc.)
- **Vínculo de agentes a sites**
- **Canal de alertas Bark**
- **Proteção contra IP suspeito no 2FA**
- **Sincronização de status do vLLM** em tempo real

## Novos recursos

### File Browser

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): encontre arquivos descrevendo o que procura, sem precisar lembrar caminho ou nome exatos.
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): gere links de download diretos para artefatos, backups e logs.

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): crie funções com permissões específicas e atribua aos agentes.
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): conecte várias contas a um mesmo canal.
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): vincule agentes a sites específicos gerenciados no 1Panel.
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): campo de observações para documentar contexto e responsável.
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): melhora a confiabilidade de download de skills na China continental.

### App Store

- **Chave unificada de acesso a portas externas** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): controle centralizado da exposição externa dos apps instalados.

### Configurações do painel

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): Bark adicionado como destino de notificações push.

## Melhorias

### Agents e OpenClaw

- Configuração de plugins OpenClaw mais granular, com modelo de backup ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- Suporte a desinstalação/upgrade de plugins OpenClaw no painel ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- Migração de QQ e Feishu para plugins oficiais ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- Mais opções de configuração para DingTalk no OpenClaw ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- Reorganização do menu de modelos ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Atualização da configuração padrão de modelos ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- Maior estabilidade de chamadas de API em fluxos intensivos ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Modelos

- Logs de pull de modelos com formatação mais limpa ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- Sincronização de status do vLLM mais precisa

### Segurança

- Bloqueio de IP suspeito no fluxo de 2FA ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- Melhorias no tratamento de bloqueio de autenticação e feedback de login ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Reforço no fluxo de segurança de login e acesso ao painel ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### File Browser e SSH

- Maior estabilidade em operações de arquivo sob carga ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- Edição de arquivo de configuração SSH com validação aprimorada ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Sites e runtime

- Layout mais limpo da página OpenResty Other Settings ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- Validação mais forte ao excluir sites OpenClaw ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Configuração de website binding simplificada ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Seleção de script de runtime Node.js mais confiável ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### Sistema

- Fluxo de atualização do AI Terminal mais fluido ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Melhor velocidade de carregamento no editor de código ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Comportamento de diálogos mais consistente no painel ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Textos de i18n atualizados para todos os idiomas suportados ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## Correções de bugs

- **Overview**: corrigidos valores delta anormais nos gráficos de monitoramento ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: corrigida configuração incorreta do canal Discord no OpenClaw ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: corrigido bug na renovação automática de certificados ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: health checks de proxy continuavam após desativar o proxy ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: corrigido retorno para login quando 2FA exigia CAPTCHA ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## Como atualizar

Basta clicar no botão "Update" no canto inferior direito.

Novo no 1Panel? Acesse [1panel.pro](https://1panel.pro/).

## Fonte

- Notas completas: [1Panel v2.1.8 no GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)

