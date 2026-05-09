---
title: "1Panel v2.1.12 verfuegbar: Overview verfeinert, File Browser-Fixes und OpenWRT-Upgrades"
description: "1Panel v2.1.12 optimiert die Monitoring-Diagramme auf der Startseite, behebt das Karussell bei Memos, haertet ZIP-Entpacken und Berechtigungen im File Browser, stabilisiert Kindknoten-Terminals und OpenWRT-Upgrades."
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

1Panel v2.1.12 ist verfuegbar. Der Release verfeinert die Overview-Erfahrung und liefert gezielte Stabilitaetskorrekturen fuer File Browser, Terminals auf Kindknoten und Upgrades unter OpenWRT.

## Highlights

- **Monitoring-Diagramme** — Diagramme auf der Startseite sind uebersichtlicher und schneller erfassbar
- **Memos und Karussell** — Das Startseiten-Karussell pausiert beim Bearbeiten von Memos zuverlaessig
- **File Browser** — sichereres ZIP-Entpacken, unveraenderte Berechtigungen des uebergeordneten Ordners nach Entpacken und Upload, Korrektur beim Verschieben sehr grosser Binaerdateien
- **Kindknoten-Terminals** — Standard-Hostverbindungen fuer Terminals auf Kindknoten wieder erwartungskonform
- **OpenWRT** — Panel-Upgrades laufen auf OpenWRT-basierten Systemen wieder erfolgreich durch

## Enhancements

### Overview

- **Darstellung der Monitoring-Diagramme** — Layout und Lesbarkeit der Startseiten-Diagramme wurden optimiert ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

## Bug Fixes

| Bereich | Fix |
|---|---|
| **Overview** | Das Startseiten-Karussell pausiert beim Bearbeiten von Memos ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | Entpacken bestimmter ZIP-Archive schlaegt nicht mehr unerwartet fehl ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Berechtigungen des Elternverzeichnisses bleiben nach dem Entpacken unveraendert ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Das Verschieben sehr grosser Binaerdateien bringt den Server nicht mehr in einen nicht erreichbaren Zustand ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | Berechtigungen des Elternverzeichnisses bleiben nach Datei-Uploads intakt ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | Kindknoten-Terminals nutzen wieder korrekte Standard-Hostverbindungen ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | 1Panel-Upgrades unter OpenWRT funktionieren wieder ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

## How to Upgrade

Im Dashboard unten rechts auf `Update` klicken.

Neu bei 1Panel? [1panel.pro](https://1panel.pro/)

## Source

Vollstaendige Release Notes: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
