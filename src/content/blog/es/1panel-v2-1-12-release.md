---
title: "Lanzamiento de 1Panel v2.1.12: pulido de Overview, correcciones en File Browser y OpenWRT"
description: "1Panel v2.1.12 mejora los graficos de monitorizacion de la pagina de inicio, corrige la pausa del carrusel al editar notas, refuerza la extraccion zip y los permisos en File Browser, estabiliza terminales en nodos hijo y los upgrades en OpenWRT."
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 1Panel
  - Release Notes
  - Overview
  - File Browser
  - Terminal
  - Multi-Node
  - OpenWRT
---

1Panel v2.1.12 ya esta disponible. Esta version afina la experiencia de Overview y aporta correcciones de fiabilidad en File Browser, terminales de nodos hijo y actualizaciones en OpenWRT.

## Highlights

- **Graficos de monitorizacion** — Los graficos de la pagina de inicio se leen con mas claridad
- **Notas y carrusel** — El carrusel de la pagina de inicio se detiene correctamente mientras editas notas
- **File Browser** — Extraccion zip mas segura, permisos del directorio padre intactos tras extraer y subir archivos, y correccion al mover binarios muy grandes
- **Terminales en nodos hijo** — Las conexiones de host por defecto vuelven a comportarse como se espera
- **OpenWRT** — Las actualizaciones del panel se completan de nuevo en despliegues basados en OpenWRT

## Enhancements

### Overview

- **Presentacion de graficos de monitorizacion** — Se ajusto el diseno y la legibilidad de los graficos en la pagina de inicio ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

## Bug Fixes

| Area | Correccion |
|---|---|
| **Overview** | El carrusel de la pagina de inicio ahora se pausa al editar notas ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | La descompresion de ciertos archivos ZIP ya no falla de forma inesperada ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Los permisos del directorio padre ya no cambian tras extraer archivos ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Mover binarios muy grandes ya no deja el servidor inaccesible ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | Los permisos del directorio padre se mantienen tras subir archivos ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | Los terminales en nodos hijo usan de nuevo conexiones de host por defecto correctas ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | Las actualizaciones de 1Panel vuelven a funcionar en OpenWRT ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

## How to Upgrade

Pulse el boton `Update` abajo a la derecha en el panel.

Nuevo en 1Panel? Visite [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
