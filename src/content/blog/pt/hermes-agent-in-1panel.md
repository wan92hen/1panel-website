---
title: "Como instalar o Hermes Agent no servidor com 1Panel"
description: "Hermes Agent da Nous Research: IA autoevolutiva com memoria e habilidades. Guia passo a passo no 1Panel com Model Accounts e Agents, acesso ao WebUI e ajuste para producao."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## O que e o Hermes Agent?

O **Hermes Agent** e um agente de IA da [Nous Research](https://nousresearch.com/) que melhora com o uso. Ele inclui um **ciclo de aprendizagem**: pode **criar e refinar habilidades**, manter **memoria de longo prazo**, consultar **sessoes anteriores** e aprofundar o entendimento sobre voce ao longo de varias conversas.

Ele **nao fica preso a um unico laptop**. Pode rodar em **VPS**, **cluster GPU** e ambientes semelhantes, com interacao por **linha de comando**, **WebUI** ou **canais de mensageria**.

No 1Panel, voce ganha uma **WebUI no navegador** para gerenciar **configuracoes** e **chaves de API**, alem de acompanhar **status de execucao** e **informacoes de sessao**. O fluxo principal no painel passa por **AI -> Agents** e **Model Accounts**.

## Por que usar 1Panel com Hermes Agent?

Voce centraliza **credenciais de modelo**, **definicao do agente** (tipo, versao, portas, modelo) e o acesso ao **WebUI** em um unico processo. Isso reduz scripts isolados e melhora a repetibilidade operacional.

## Pre-requisitos

Antes do deploy, confirme:

- **1Panel** instalado e dashboard acessivel.
- **LLM API key valida** ou **modelo local** ja conectado no 1Panel.
- Servidor com **acesso a internet** (exceto cenarios totalmente locais).

## Passo 1: Adicionar conta de modelo

1. Abra **AI** -> **Model Accounts**.
2. Clique em **Add Model Account**.
3. Escolha o **provedor de modelo** e preencha os campos exigidos.
4. **Salve** a conta.
5. Confirme na lista que o novo registro apareceu corretamente.

![Create Model Account in 1Panel](/blog/create-model-account.png)

Se voce usa varias contas/modelos, a combinacao **Model Account / Model** sera escolhida na criacao do Hermes Agent.

## Passo 2: Criar o Hermes Agent

1. Abra **AI** -> **Agents**.
2. Clique em **Create**.
3. Defina **Agent Type** como **Hermes Agent**.

Preencha o formulario:

| Campo | O que preencher |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | Exemplo padrao: `hermes-agent`; pode personalizar. |
| **App Version** | Versao do Hermes Agent que deseja instalar. |
| **Access Port / WebUI Port** | Use o padrao ou ajuste conforme seu plano de rede. |
| **Model Provider** | Provedor correspondente a conta criada no passo 1. |
| **Model Account / Model** | Conta e modelo exatos para esta instancia. |
| **Other Parameters** | Na maioria dos casos, mantenha padrao; altere so quando necessario. |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

Ao escolher o provider, o 1Panel carrega os **Model Accounts** vinculados a ele.

Se houver varios modelos, selecione o **modelo correto** nesta pagina. Se aparecerem opcoes extras, siga as orientacoes na tela.

Antes de enviar, revise **nome, versao, portas e modelo**.

## Passo 3: Instalar e aguardar a conclusao

Com tudo validado, clique em **Confirm** para iniciar a instalacao.

Durante a tarefa, acompanhe o **status na pagina** e espere ate o UI mostrar **concluido**. Com status de sucesso, o Hermes Agent estara implantado.

Se falhar, use a mensagem de erro exibida (pull de imagem, conflito de porta, autenticacao, disco etc.), corrija a causa e execute novamente.

## Passo 4: Abrir o WebUI do Hermes Agent ou conversar via TUI

Volte para a lista de **Agents**, localize o Hermes Agent e clique em **WebUI**.

No **primeiro acesso**, a pagina pode estar inicializando. Aguarde um pouco e recarregue uma ou duas vezes.

No WebUI voce continua a gerenciar **configuracoes**, **chaves** e **visoes de sessao**.

Ou voce pode clicar no botao **Chat** para conversar com o Hermes Agent pela TUI.

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## Passo 5: Configuracao posterior no 1Panel

Depois do primeiro deploy bem-sucedido, ajuste conforme a carga real: altere **modelo** ou vinculacao de conta, refine o **padrao de acesso** (interno vs dominio publico) e ajuste **parametros de runtime** no formulario/WebUI.

Se houver exposicao a internet, aplique seu baseline: escopo minimo de **firewall**, **HTTPS** para acesso por dominio e cuidado com **chaves de API** em tickets, logs e capturas.

## Checklist rapido

- WebUI abre de forma estavel apos a inicializacao.
- Um teste simples atinge o **modelo esperado**.
- As **portas** nao entram em conflito com outros servicos.
- Existe cobertura de **backup/snapshot** quando exigida pela politica.

## Resumo

O Hermes Agent e uma runtime de agente **duravel e orientada a habilidades** para hospedagem propria. No 1Panel, o fluxo e: **Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** -> depois iterar **modelo, acesso e parametros** conforme a producao evolui.

Se voce esta comecando no 1Panel, acesse [1panel.pro](https://1panel.pro/).
