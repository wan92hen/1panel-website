---
title: "1Panel v2.1.9 ist da: Hermes Agent, MongoDB-Verwaltung und Dateiverlauf"
description: "1Panel v2.1.9 bringt Hermes Agent Support, integrierte MongoDB-Verwaltung und File History sowie Verbesserungen in Agents, File Browser, Containern und S3-Kompatibilitaet."
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

1Panel v2.1.9 ist verfuegbar. Dieses Release fuehrt drei neue Kernfunktionen ein und liefert dazu gezielte Optimierungen plus fuenf Bugfixes fuer den produktiven Betrieb.

## Highlights

- **Hermes Agent** im Agents-Modul
- **MongoDB-Verwaltung** direkt in der Datenbankoberflaeche
- **Dateiverlauf** im File Browser fuer bessere Wiederherstellung
- Vereinfachter OpenClaw-Channel-Bot-Workflow
- Stabilere AWS-S3-Anbindung

## New Features

### Agents
Unterstuetzung fuer **Hermes Agent** erweitert das lokale AI-Agent-Setup in 1Panel.

### Databases
**MongoDB** kann jetzt wie MySQL, PostgreSQL und Redis zentral verwaltet werden.

### File Browser
Mit **File History** werden Dateiaenderungen nachvollziehbar und ruecksetzbar.

## Enhancements

- Agents: sauberes Website-Unbinding und vereinfachter Channel-Bot-Prozess
- App Store: robustere Compose-Aenderungserkennung
- File Browser: laufende Komprimierung abbrechen, Dockerfile-Syntax, konfigurierbare Header beim Teilen, strengere Metadatenpruefung
- Containers: verbesserte Datensynchronisierung bei schnellen Statuswechseln
- Panel Settings: bessere S3-Kompatibilitaet
- System/Websites: UI-Feinschliff bei Tabellen und Namens-Badges

## Bug Fixes

| Bereich | Fix |
|---|---|
| Runtime | Bearbeitbarkeit des Runtime-Verzeichnisses waehrend aktiver Session behoben |
| File Browser | Downloadproblem bei per QR-Code freigegebenen Dateien behoben |
| Firewall | Bearbeitung von Regelbeschreibungen nach Erstellung wieder moeglich |
| Firewall | Fehlerhafte Listening-Statusanzeige korrigiert |
| Tamper Protection | Uebersetzungsfehler in mehreren Sprachen behoben |

## How to Upgrade

Im Dashboard unten rechts auf `Update` klicken.

Neu bei 1Panel? [1panel.pro](https://1panel.pro/)

## Source

Vollstaendige Release Notes: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
