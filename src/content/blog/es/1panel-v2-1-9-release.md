---
title: "Lanzamiento de 1Panel v2.1.9: Hermes Agent, gestion de MongoDB e historial de archivos"
description: "1Panel v2.1.9 incorpora soporte para Hermes Agent, gestion integrada de MongoDB e historial de archivos, con mejoras en Agents, File Browser, contenedores y compatibilidad S3."
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

1Panel v2.1.9 ya esta disponible. Esta version agrega tres capacidades clave en Agents, Databases y File Browser, junto con mejoras puntuales y cinco correcciones para aumentar la estabilidad operativa.

## Highlights

- Soporte para **Hermes Agent** en el modulo de Agents
- **Gestion de MongoDB** en la misma interfaz de bases de datos
- **Historial de archivos** en File Browser para recuperacion de cambios
- Flujo mejorado para bots de canal en OpenClaw
- Mejor compatibilidad con AWS S3 y endpoints compatibles

## New Features

### Agents
Ahora puedes usar **Hermes Agent** dentro de 1Panel, ampliando las opciones de despliegue de agentes de IA locales.

### Databases
**MongoDB** pasa a ser una base de datos gestionada de forma nativa desde la interfaz de Databases.

### File Browser
Se incorpora **File History**, con seguimiento de cambios para facilitar auditoria y restauracion.

## Enhancements

- Agents: desvinculacion limpia de sitios web y flujo mas simple para bots de canal OpenClaw
- App Store: deteccion de cambios en Compose mas precisa
- File Browser: cancelar compresiones en curso, soporte de sintaxis Dockerfile, encabezados personalizados al compartir y validacion de metadatos reforzada
- Containers: mejor manejo de datos y sincronizacion de estado
- Panel Settings: mayor estabilidad en conexiones S3
- System/Websites: ajustes visuales de tablas y etiquetas

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | Corregido: el directorio runtime podia editarse durante una sesion activa |
| File Browser | Corregido: no se podian descargar archivos compartidos por QR |
| Firewall | Corregido: no era posible editar descripciones de reglas |
| Firewall | Corregido: estados de escucha mostrados de forma incorrecta |
| Tamper Protection | Corregidos errores de traduccion en varios idiomas |

## How to Upgrade

Haz clic en `Update` en la esquina inferior derecha del panel.

Nuevo en 1Panel? Visita [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
