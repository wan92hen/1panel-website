---
title: "Como gerenciar MongoDB no seu VPS com 1Panel"
description: "Guia MongoDB no 1Panel: instalacao via App Store, criacao de banco, informacoes de conexao, terminal mongosh integrada, backup/restore e servidores remotos."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

Com 1Panel, voce pode executar todo o fluxo de MongoDB no VPS em uma unica interface: instalar, criar banco, conectar, consultar, fazer backup e restaurar.

## O que voce pode fazer no 1Panel

- Instalar MongoDB pela **App Store**
- Criar bancos e usuarios com permissoes
- Usar **mongosh** integrado no navegador
- Ver dados de conexao para aplicativos
- Executar backup/restore e tarefas agendadas
- Gerenciar instancias remotas de MongoDB

## Pre-requisitos

- 1Panel instalado e acessivel
- Memoria suficiente para seu setup de MongoDB
- Internet disponivel para download de imagens

## Passo 1: Instalar MongoDB pela App Store

Abra **App Store**, filtre por **Database**, selecione **MongoDB** e clique em **Install**.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

Campos principais:

| Campo | Orientacao |
|---|---|
| Name | Identificador da instancia (`mongodb` por padrao) |
| Version | Versao de MongoDB para deploy |
| Username / Password | Credenciais iniciais |
| Port | Padrao `27017` |
| External Access | Ative so quando necessario |
| Restart Policy | `always` e comum em producao |

Clique em **Confirm**.

## Passo 2: Criar banco MongoDB

Vá para **Databases** -> **MongoDB** e clique em **Create**.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

Preencha:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description** (opcional)

Finalize com **Confirm**.

## Passo 3: Ver informacoes de conexao

Use **Connection** para ver host, porta e credenciais.

Formato:

`mongodb://username:password@host:27017/databasename`

## Passo 4: Usar terminal integrada

Clique em **Terminal** para abrir `mongosh`.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

Exemplos:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Passo 5: Backup e restore

Na lista de bancos, abra a acao de backup.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up**: cria snapshot
- **Restore**: recupera snapshot
- **Settings** -> **Backup Accounts**: adiciona destino cloud
- **Cron Jobs**: agenda backups automaticos

## Passo 6: Gerenciar servidores remotos

Com **Remote server**, adicione instancias externas.

Se houver mudancas manuais fora do painel, use **Sync from server**.

## Recomendacoes de seguranca

- Minimize exposicao publica direta do MongoDB
- Restrinja firewall a origens conhecidas
- Prefira acesso por rede privada (VPN/tunel)
- Rode credenciais e mantenha backup off-site

## Checklist rapido

- Instancia em estado saudavel
- URI de conexao validada
- Pelo menos um teste de restore executado
- Regras de acesso alinhadas ao baseline de seguranca

## Conclusao

1Panel simplifica a operacao completa do MongoDB em VPS em uma unica UI.

Comece em [1panel.pro](https://1panel.pro/).
