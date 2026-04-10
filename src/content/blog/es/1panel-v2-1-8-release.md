---
title: "Lanzamiento de 1Panel v2.1.8: búsqueda de archivos con IA, gestión de roles de agentes y enlaces compartibles"
description: "1Panel v2.1.8 incorpora búsqueda de archivos con IA, enlaces compartibles, gestión de roles de agentes, canales multi-cuenta, alertas Bark, sincronización de estado vLLM y protección de IP sospechosas en 2FA."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Notas de la versión
  - Búsqueda IA
  - Agent
  - Seguridad
---

1Panel v2.1.8 se publicó oficialmente el 10 de abril de 2026. Esta versión amplía de forma importante el módulo de Agents (roles, canales multi-cuenta y vinculación de sitios), añade búsqueda IA y enlaces compartibles en el explorador de archivos, y mejora seguridad y estabilidad general.

## Novedades destacadas

- Búsqueda de archivos con IA en lenguaje natural
- Enlaces para compartir archivos directamente desde el explorador
- Gestión de roles para agentes con control de acceso por equipos
- Soporte multi-cuenta por canal (QQ, Feishu, DingTalk, Discord, etc.)
- Vinculación de agentes a sitios web específicos
- Nuevo canal de alertas Bark
- Protección frente a IP sospechosas durante 2FA
- Sincronización en tiempo real del estado de vLLM

## Nuevas funciones

### Explorador de archivos

- **Búsqueda IA** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): encuentra archivos sin recordar rutas o nombres exactos.
- **Compartir enlace de archivo** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): genera enlaces de descarga directos para artefactos, copias de seguridad o logs.

### Agents

- **Gestión de roles** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): crea roles con permisos y asígnalos a configuraciones de agentes.
- **Canales multi-cuenta** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): permite conectar varias cuentas a un mismo canal.
- **Vinculación de sitios web** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): asocia agentes a un sitio gestionado en 1Panel.
- **Notas del agente** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): campo de texto libre para documentar propósito y contexto.
- **Mirror de ClawHub en China** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): mejora la descarga de skills en China continental.

### App Store

- **Interruptor unificado de puertos externos** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): controla en un solo lugar la exposición externa de apps instaladas.

### Configuración del panel

- **Canal de alertas Bark** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): añade Bark como destino de notificaciones push.

## Optimizaciones

### Agents y OpenClaw

- Configuración más granular de plugins OpenClaw con modelo de respaldo ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- Desinstalación y actualización de plugins OpenClaw desde el panel ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- Migración de QQ y Feishu a plugins oficiales ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- Más opciones de configuración para DingTalk ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- Reorganización del menú de modelos ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Actualización de configuración predeterminada de modelos ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- Mejor estabilidad de llamadas API en flujos intensivos ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Modelos

- Formato más claro para logs de descarga de modelos ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- Sincronización de estado vLLM más fiable entre panel y servidor de inferencia

### Seguridad

- Protección de IP sospechosa en 2FA ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- Mejoras en bloqueo de autenticación y mensajes de inicio de sesión ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Endurecimiento del flujo de acceso al panel ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### Explorador de archivos y SSH

- Mayor estabilidad en operaciones de archivos bajo carga ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- Mejor validación al editar archivos de configuración SSH ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Sitios web y runtime

- Página de ajustes de OpenResty más limpia ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- Validación reforzada al eliminar sitios OpenClaw ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Configuración de vinculación de sitios simplificada ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Selección de scripts de runtime Node.js más fiable ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### Sistema

- Flujo de actualización de AI Terminal más fluido ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Mejor velocidad de carga del editor de código ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Comportamiento de diálogos más consistente ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Actualización de textos i18n en todos los idiomas soportados ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## Correcciones de errores

- **Overview**: corregidos valores delta anómalos en gráficos de monitoreo ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: corregida configuración incorrecta de canal Discord de OpenClaw ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: corregido fallo en renovación automática de certificados ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: los health checks de proxy continuaban tras deshabilitar el proxy ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: corregido retorno a login cuando 2FA requería CAPTCHA ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## Cómo actualizar

Simplemente haz clic en el botón "Update" en la esquina inferior derecha.

¿Primera vez con 1Panel? Empieza en [1panel.pro](https://1panel.pro/).

## Fuente

- Notas completas: [1Panel v2.1.8 en GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)

