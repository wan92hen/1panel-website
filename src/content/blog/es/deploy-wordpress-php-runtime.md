---
title: Implementar WordPress con el runtime PHP de 1Panel
description: Aprenda a instalar OpenResty y MySQL, crear un runtime PHP, desplegar WordPress, enlazar el dominio y habilitar HTTPS con ACME en 1Panel.
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

Este tutorial explica cómo publicar un sitio WordPress con el **runtime PHP de 1Panel**, incluyendo OpenResty, MySQL, dominio y HTTPS. 1Panel es un panel moderno para servidores Linux que ofrece un flujo completo para hospedar aplicaciones PHP.

Con la **gestión del runtime PHP** en 1Panel puede:

- **Varias versiones de PHP** — PHP 5.6, 7.x, 8.0–8.3 (y versiones más recientes soportadas), según su aplicación.
- **Gestión de extensiones** — Instalar mysqli, gd, curl, zip, mbstring y más desde la interfaz.
- **Ajustes visuales** — Límites de subida, memoria, tiempo de ejecución, funciones deshabilitadas, sin editar `php.ini` a mano.

## Requisitos previos

Antes de empezar, asegúrese de tener:

1. Un servidor Linux con **IP pública** (por ejemplo, un VPS en la nube).
2. **1Panel** instalado y accesible desde el navegador.
3. Un **dominio** que pueda gestionar en DNS.
4. Reglas de firewall que permitan **HTTP (80)** y **HTTPS (443)**.

## Paso 1 — Instalar la pila de runtime

### 1.1 Instalar OpenResty

OpenResty es la plataforma web que 1Panel usa para gestionar sitios; se basa en Nginx con Lua y módulos adicionales.

1. Inicie sesión en 1Panel.
2. Abra la **Tienda de aplicaciones**.
3. Busque **OpenResty**, mantenga las opciones predeterminadas e instálelo.

![Instalación OpenResty](/blog/install-openresty.png)

### 1.2 Instalar MySQL

WordPress necesita una base de datos; MySQL es una opción habitual.

1. En la **Tienda de aplicaciones**, busque **MySQL**.
2. Instálelo con los valores predeterminados y espere a que termine.

![Instalación MySQL](/blog/install-mysql.png)

### 1.3 Crear un runtime PHP

WordPress se ejecuta en PHP, por lo que debe crear un runtime dedicado.

1. Vaya a **Sitios web** → **Runtime PHP**.
2. Elija **PHP** y pulse **Crear runtime**.
3. Asigne un nombre y elija la versión de PHP (este ejemplo usa **PHP 8.4** reciente).
4. En la **plantilla de extensiones**, elija **WordPress** y añada las extensiones que necesite para temas o plugins.
5. Confirme y espere hasta que termine.

![Creación runtime PHP](/blog/create-php-runtime.png)

## Paso 2 — Crear el sitio web

### 2.1 Crear un sitio ligado al runtime PHP

1. Abra **Sitios web** → **Crear sitio web**.
2. Elija **Runtime** y seleccione el runtime PHP que creó.
3. Rellene:
   - **Nombre** — nombre para mostrar.
   - **Dominio principal** — por ejemplo `www.example.com`.
   - **Alias** — nombre del directorio (a menudo igual al dominio).
4. Opcionalmente, defínalo como **sitio predeterminado** para esa IP.

![Crear sitio](/blog/create-website.png)

![Sitio predeterminado](/blog/default-website.png)

### 2.2 Prueba rápida

Visite la **IP** del servidor en el navegador. Si ve información del entorno PHP, el sitio y el runtime están correctamente enlazados.

![Prueba sitio](/blog/test-website.png)

## Paso 3 — Desplegar WordPress

### 3.1 Descargar y extraer WordPress

1. Abra la **raíz del documento** del sitio desde la interfaz.
2. Use **descarga remota** para obtener `https://wordpress.org/latest.zip`.
3. Descomprima en la raíz. Normalmente los archivos quedan en `wordpress`.
4. En la configuración del sitio, establezca el **directorio de runtime** en `wordpress` y **Guardar y recargar**.

![Raíz del sitio](/blog/install-wordpress-1.png)

![Descarga WordPress](/blog/install-wordpress-2.png)

![Descarga WordPress](/blog/install-wordpress-3.png)

![Extraer WordPress](/blog/install-wordpress-4.png)

![Cambiar directorio runtime](/blog/modify-website-runtime-directory.png)

### 3.2 Crear base de datos

1. Abra **Bases de datos**.
2. En MySQL, pulse **Crear base de datos**.
3. Defina nombre de usuario y contraseña (guarde la contraseña).
4. Tras crearla, abra **Información de conexión** y anote host, puerto, nombre de BD, usuario y contraseña para el instalador.

![Crear base de datos](/blog/create-database.png)

![Información de conexión](/blog/database-connection-information.png)

### 3.3 Asistente de instalación de WordPress

1. Vuelva a la IP del servidor y confirme que aparece el asistente.
2. Elija idioma, introduzca los datos de la BD y envíe.
3. Complete título del sitio, usuario administrador, etc.

![WordPress setup](/blog/setup-wordpress-1.png)

![WordPress setup](/blog/setup-wordpress-2.png)

![WordPress setup](/blog/setup-wordpress-3.png)

## Paso 4 — Apuntar el dominio

### 4.1 Registros DNS

En su proveedor DNS (Cloudflare, Alibaba Cloud, etc.):

- Cree un registro **A** para `@` o `www` apuntando a la IP pública del servidor.
- Use un TTL razonable (por ejemplo, 600 segundos).

![Registro DNS](/blog/dns-record.png)

### 4.2 Verificar resolución

Abra su **dominio** en el navegador. Si carga la portada de WordPress, el DNS es correcto.

![Verificar DNS](/blog/verify-dns-record.png)

## Paso 5 — Habilitar HTTPS

### 5.1 Crear cuenta ACME

1. Abra la gestión de **Certificados**.
2. Vaya a **Gestionar cuentas ACME**.
3. Añada correo, tipo de cuenta y algoritmo de clave y cree la cuenta.

![Cuenta ACME](/blog/acme-account.png)

### 5.2 Configurar proveedor DNS (DNS-01)

1. Abra **Gestionar proveedores DNS**.
2. Seleccione su proveedor (por ejemplo Tencent Cloud) e introduzca API.

![Proveedor DNS](/blog/dns-provider.png)

### 5.3 Emitir certificado

1. En la página de certificados, pulse **Solicitar**.
2. Dominio principal, cuenta ACME, **validación DNS** y cuenta DNS configurada.
3. Espere a que se emita el certificado.

![Solicitar certificado SSL](/blog/apply-ssl-certificate.png)

### 5.4 Aplicar HTTPS al sitio

1. Abra la configuración del sitio.
2. En **SSL**, habilite HTTPS, elija el certificado y **forzar HTTPS** si lo desea.
3. Guarde.

![Habilitar HTTPS](/blog/enable-https.png)

Visite `https://su-dominio` y confirme TLS.

![HTTPS verificado](/blog/verify-https.png)

## Enlaces relacionados

- [Documentación de 1Panel](https://1panel.pro/docs/)
- [Foro de la comunidad 1Panel](https://github.com/1Panel-dev/1Panel/discussions)

---

*Esta guía refleja versiones recientes de 1Panel. Para el comportamiento más actual, consulte la documentación oficial y la comunidad.*
