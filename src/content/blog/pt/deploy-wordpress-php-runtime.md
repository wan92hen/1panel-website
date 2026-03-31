---
title: Implantar o WordPress com o runtime PHP do 1Panel
description: Saiba como instalar OpenResty e MySQL, criar um runtime PHP, implantar o WordPress, apontar o domínio e ativar HTTPS com ACME no 1Panel.
pubDate: 2025-03-15
updatedDate: 2025-03-15
heroImage: /blog/setup-wordpress-1.png
tags:
  - PHP
  - WordPress
  - 1Panel
  - OpenResty
  - SSL
  - MySQL
---

Este tutorial explica como publicar um site WordPress com o **runtime PHP do 1Panel**, incluindo OpenResty, MySQL, domínio e HTTPS. O 1Panel é um painel Linux moderno que oferece um fluxo completo para hospedar aplicações PHP.

Com a **gestão de runtime PHP** no 1Panel você pode:

- **Várias versões do PHP** — PHP 5.6, 7.x, 8.0–8.3 (e versões suportadas), para escolher conforme a aplicação.
- **Gestão de extensões** — Instalar mysqli, gd, curl, zip, mbstring e outras pela interface.
- **Ajustes visuais** — Limites de upload, memória, tempo de execução, funções desativadas, sem editar `php.ini` manualmente.

## Pré-requisitos

Antes de começar, tenha:

1. Um servidor Linux com **IP público** (por exemplo, VPS na nuvem).
2. **1Panel** instalado e acessível no navegador.
3. Um **domínio** que você controle (para DNS).
4. Firewall permitindo **HTTP (80)** e **HTTPS (443)**.

## Passo 1 — Instalar a stack de runtime

### 1.1 Instalar o OpenResty

O OpenResty é a plataforma web que o 1Panel usa para sites, baseada no Nginx com Lua e módulos.

1. Inicie sessão no 1Panel.
2. Abra a **Loja de aplicações**.
3. Localize **OpenResty**, mantenha as opções predefinidas e instale.

![Instalação OpenResty](/blog/install-openresty.png)

### 1.2 Instalar o MySQL

O WordPress precisa de base de dados; o MySQL é comum.

1. Na **Loja de aplicações**, encontre **MySQL**.
2. Instale com os valores predefinidos e aguarde.

![Instalação MySQL](/blog/install-mysql.png)

### 1.3 Criar um runtime PHP

O WordPress corre em PHP, por isso cria-se um runtime dedicado.

1. Vá a **Website** → **PHP runtime**.
2. Escolha **PHP** e clique em **Criar runtime**.
3. Defina um nome e a versão PHP (este exemplo usa **PHP 8.4** recente).
4. No **modelo de extensões**, escolha **WordPress** e adicione outras extensões necessárias.
5. Confirme e aguarde até ficar pronto.

![Criação PHP runtime](/blog/create-php-runtime.png)

## Passo 2 — Criar o site

### 2.1 Criar site ligado ao runtime PHP

1. Abra **Website** → **Criar website**.
2. Escolha **Runtime** e selecione o runtime PHP criado.
3. Preencha:
   - **Nome** — nome de exibição.
   - **Domínio principal** — por exemplo `www.example.com`.
   - **Alias** — nome da pasta (muitas vezes igual ao domínio).
4. Opcionalmente defina como **site predefinido** para esse IP.

![Criar website](/blog/create-website.png)

![Default website](/blog/default-website.png)

### 2.2 Teste rápido

Aceda ao **IP** do servidor no navegador. Se vir informação do ambiente PHP, o site e o runtime estão corretos.

![Test website](/blog/test-website.png)

## Passo 3 — Implantar o WordPress

### 3.1 Descarregar e extrair o WordPress

1. Abra a **raiz do documento** do site na interface.
2. Use **download remoto** para obter `https://wordpress.org/latest.zip`.
3. Extraia na raiz. Normalmente fica em `wordpress`.
4. Nas definições do site, defina o **diretório de runtime** como `wordpress` e **Guardar e recarregar**.

![Site root](/blog/install-wordpress-1.png)

![Download WordPress](/blog/install-wordpress-2.png)

![Download WordPress](/blog/install-wordpress-3.png)

![Extrair WordPress](/blog/install-wordpress-4.png)

![Change runtime directory](/blog/modify-website-runtime-directory.png)

### 3.2 Criar base de dados

1. Abra **Bases de dados**.
2. Em MySQL, clique em **Criar base de dados**.
3. Defina nome, utilizador e palavra-passe (guarde a palavra-passe).
4. Depois **Informação de ligação** para host, porta, nome da BD, utilizador e palavra-passe no instalador.

![Create database](/blog/create-database.png)

![Database connection info](/blog/database-connection-information.png)

### 3.3 Assistente de instalação do WordPress

1. Volte ao IP do servidor e confirme o assistente de instalação.
2. Escolha o idioma, introduza os dados da BD e submeta.
3. Complete título do site, utilizador de administração, etc.

![WordPress setup](/blog/setup-wordpress-1.png)

![WordPress setup](/blog/setup-wordpress-2.png)

![WordPress setup](/blog/setup-wordpress-3.png)

## Passo 4 — Apontar o domínio

### 4.1 Registos DNS

No seu provedor DNS (Cloudflare, Alibaba Cloud, etc.):

- Crie um registo **A** para `@` ou `www` com o IP público do servidor.
- TTL razoável (ex.: 600 segundos).

![DNS record](/blog/dns-record.png)

### 4.2 Verificar resolução

Abra o **domínio** no navegador. Se a página inicial do WordPress carregar, o DNS está correto.

![Verify DNS](/blog/verify-dns-record.png)

## Passo 5 — Ativar HTTPS

### 5.1 Criar conta ACME

1. Abra gestão de **Certificados**.
2. Vá a **Gerir contas ACME**.
3. Adicione email, tipo de conta e algoritmo de chave e crie a conta.

![ACME account](/blog/acme-account.png)

### 5.2 Configurar provedor DNS (DNS-01)

1. Abra **Gerir fornecedores DNS**.
2. Selecione o provedor (ex.: Tencent Cloud) e introduza credenciais API.

![DNS provider](/blog/dns-provider.png)

### 5.3 Emitir certificado

1. Na página de certificados, clique em **Aplicar**.
2. Domínio principal, conta ACME, **validação DNS** e conta DNS configurada.
3. Aguarde a emissão.

![Apply SSL certificate](/blog/apply-ssl-certificate.png)

### 5.4 Aplicar HTTPS ao site

1. Abra as definições do site.
2. Em **SSL**, ative HTTPS, escolha o certificado e **forçar HTTPS** se desejar.
3. Guarde.

![Enable HTTPS](/blog/enable-https.png)

Visite `https://seu-dominio` e confirme TLS.

![HTTPS verified](/blog/verify-https.png)

## Ligações relacionadas

- [Documentação 1Panel](https://1panel.pro/docs/)
- [1Panel community forum](https://github.com/1Panel-dev/1Panel/discussions)

---

*Este guia reflete versões recentes do 1Panel. Para o comportamento mais atual, consulte a documentação oficial e a comunidade.*
