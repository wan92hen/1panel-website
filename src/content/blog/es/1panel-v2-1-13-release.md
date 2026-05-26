---
title: "Lanzamiento de 1Panel v2.1.13: descargador de modelos, File Browser y correcciones de runtime"
description: "1Panel v2.1.13 anade un descargador de modelos, mejora el historial de archivos, el tamano de directorios y la seleccion en File Browser, comprueba espacio en disco al actualizar y corrige runtime, rutas, licencias y snapshots."
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

1Panel v2.1.13 ya esta disponible. Esta version introduce un descargador de modelos integrado, afina File Browser y el flujo de actualizacion, y corrige problemas en entornos de runtime y ajustes del panel.

## Highlights

- **Descargador de modelos** — Descarga y gestiona modelos desde el modulo Models sin salir del panel
- **File Browser** — Errores mas claros en el historial, calculo de tamano de directorios mas rapido y seguro, y seleccion multiple mas fluida
- **Actualizaciones mas seguras** — El proceso de upgrade comprueba el espacio en disco restante
- **Runtime fiable** — Los directorios de proyecto ya no se eliminan si falla la creacion del entorno; los mapeos de host se eliminan correctamente
- **Ajustes del panel** — Mejoras en la reasignacion de licencias y la recuperacion de snapshots

## New Features

### Models

- **Descargador de modelos** — Descarga modelos directamente en 1Panel ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

## Enhancements

### File Browser

- **Errores del historial** — Manejo de errores mas predecible al cargar contenido del historial ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **Tamano de directorios** — Logica optimizada con control de concurrencia ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **UX de seleccion** — Interfaz de gestion de archivos y operaciones de seleccion refinadas ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **Reasignacion de licencia** — Logica mejorada en varios escenarios ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **Comprobacion de disco en upgrade** — Se verifica el espacio libre antes de continuar ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

## Bug Fixes

| Area | Correccion |
|---|---|
| **Runtime** | Los directorios de proyecto ya no se eliminan si falla la creacion del entorno ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | Los mapeos de host del runtime se pueden eliminar de nuevo ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | Cargar un directorio inexistente ya no provoca errores inesperados ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | La recuperacion de snapshots funciona en escenarios donde fallaba ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

## How to Upgrade

Pulse el boton `Update` abajo a la derecha en el panel.

Nuevo en 1Panel? Visite [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
