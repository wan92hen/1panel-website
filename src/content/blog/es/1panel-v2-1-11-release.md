---
title: "Lanzamiento de 1Panel v2.1.11: DeepSeek V4 por defecto, tareas en File Browser y correcciones"
description: "1Panel v2.1.11 actualiza los pools de modelos DeepSeek a V4, mejora la descompresion en File Browser y la guia VS Code SSH, ajusta timeouts de descarga de logs de contenedores, el layout del terminal, SSL autofirmado en IPv6 e incluye doce correcciones."
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - Release Notes
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

1Panel v2.1.11 ya esta disponible. Esta version centra mejoras practicas en Agents, File Browser, contenedores y ajustes del panel, junto con correcciones en Overview, sitios web, multi-nodo y mas.

## Highlights

- **DeepSeek V4 en pools de modelos** — las cuentas DeepSeek usan por defecto los modelos **V4** mas recientes en el pool
- **Control de descompresion en File Browser** — cancelar trabajos de descompresion en curso y UI de tareas mas clara para archivos grandes
- **VS Code por SSH** — instrucciones de conexion mas claras y script SSH ampliado
- **Descarga de logs de contenedores** — timeouts afinados; limpieza de procesos Docker tras timeout (ver Bug Fixes)
- **SSL del panel en IPv6** — certificado autofirmado tambien en servidores solo IPv6 o dual stack
- **Layout del terminal** — ajustes de altura interna para reducir barras de desplazamiento externas innecesarias

## Enhancements

### Agents

- **Pools DeepSeek** — los pools de cuentas DeepSeek incluyen por defecto los modelos **V4** mas recientes ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **Timeouts de descarga de logs** — la espera en la descarga de logs se ajusta mejor a red y disco reales ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **Detener descompresion** — se pueden cancelar tareas en ejecucion; la lista de tareas mejora el trabajo en paralelo ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code y SSH** — guia de conexion para VS Code aclarada y contenido del script SSH ampliado ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **Altura del terminal embebido** — ajustes de layout para evitar un scroll externo extra en tamanos habituales ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 y SSL autofirmado** — HTTPS del panel con certificado autofirmado cuando el servidor se accede por IPv6 ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

## Bug Fixes

| Area | Correccion |
|---|---|
| **Overview** | Carga normal de graficos de monitorizacion en inicio ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | Widget de notas corregido en varios idiomas ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | Flechas de comparacion restauradas en la vista diff de actualizacion de apps ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | Las redirecciones admiten dominios comodin cuando aplica ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | Limpieza de procesos Docker tras timeout en descarga de logs ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | Botones de dialogo correctos tras guardar cambios de orquestacion (Compose) ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Deteccion del servicio Docker en Arch Linux corregida ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | Menu contextual del editor y filtros en casos limite ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | Tipos de retorno de la API de archivos corregidos ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | Los nodos hijo vuelven a usar conexiones de host del nodo principal ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | Mensajes coherentes cuando OpenResty no esta en ejecucion. |
| **System** | Ordenacion de columnas de tablas restaurada ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

## How to Upgrade

Pulse el boton `Update` abajo a la derecha en el panel.

Nuevo en 1Panel? Visite [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
