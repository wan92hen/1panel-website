---
title: "Como gestionar MongoDB en tu VPS con 1Panel"
description: "MongoDB en 1Panel paso a paso: instalacion desde App Store, creacion de base de datos, conexion, terminal mongosh integrada, backup/restore y servidores remotos."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

Con 1Panel puedes operar MongoDB en VPS desde un panel unico: instalar, crear base de datos, conectar, consultar, respaldar y restaurar.

## Que puedes hacer en 1Panel

- Instalar MongoDB desde **App Store**
- Crear bases de datos y usuarios con permisos
- Usar **mongosh** integrado en navegador
- Ver informacion de conexion para aplicaciones
- Ejecutar backup, restore y tareas programadas
- Gestionar instancias MongoDB remotas

## Requisitos previos

- 1Panel instalado y accesible
- RAM suficiente para tu despliegue de MongoDB
- Acceso a internet para descargar imagenes

## Paso 1: Instalar MongoDB desde App Store

Abre **App Store**, filtra por **Database**, selecciona **MongoDB** y pulsa **Install**.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

Campos clave:

| Campo | Guia |
|---|---|
| Name | Identificador de instancia (`mongodb` por defecto) |
| Version | Version de MongoDB a desplegar |
| Username / Password | Credenciales iniciales |
| Port | `27017` por defecto |
| External Access | Mantener desactivado salvo necesidad |
| Restart Policy | `always` suele ser lo recomendado |

Pulsa **Confirm**.

## Paso 2: Crear base de datos MongoDB

Ve a **Databases** -> **MongoDB** y haz clic en **Create**.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

Completa:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description** (opcional)

Confirma con **Confirm**.

## Paso 3: Ver informacion de conexion

Pulsa **Connection** para ver host, puerto y credenciales.

Formato tipico:

`mongodb://username:password@host:27017/databasename`

## Paso 4: Usar terminal integrada

Pulsa **Terminal** para abrir `mongosh` en el panel.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

Ejemplos:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Paso 5: Backup y restore

En la lista de bases, abre la accion de backup.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up** crea snapshot
- **Restore** recupera el estado
- En **Settings** -> **Backup Accounts** conecta destinos cloud
- En **Cron Jobs** programa respaldos automaticos

## Paso 6: Gestionar servidores remotos

Con **Remote server** agrega instancias externas.

Si hubo cambios fuera del panel, usa **Sync from server** para sincronizar estado.

## Recomendaciones de seguridad

- Minimiza exposicion publica directa de MongoDB
- Limita firewall a IPs conocidas
- Prioriza acceso por red privada (VPN/tunel)
- Rota credenciales y manten copias fuera del servidor

## Checklist rapido

- Instancia en estado saludable
- URI de conexion validada
- Restore probado al menos una vez
- Reglas de acceso alineadas con tu baseline de seguridad

## Conclusion

1Panel simplifica el ciclo completo de MongoDB en VPS desde una sola interfaz.

Empieza en [1panel.pro](https://1panel.pro/).
