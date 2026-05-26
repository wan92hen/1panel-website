---
title: "1Panel v2.1.13 verfuegbar: Modell-Downloader, File Browser und Runtime-Fixes"
description: "1Panel v2.1.13 fuegt einen Modell-Downloader hinzu, verbessert Dateiverlauf, Verzeichnisgroessen und Auswahl im File Browser, prueft Speicherplatz beim Upgrade und behebt Runtime-, Pfad-, Lizenz- und Snapshot-Probleme."
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

1Panel v2.1.13 ist verfuegbar. Der Release bringt einen integrierten Modell-Downloader, verfeinert File Browser und Upgrade-Ablauf und liefert gezielte Korrekturen fuer Runtime-Umgebungen und Panel Settings.

## Highlights

- **Modell-Downloader** — Modelle direkt im Models-Modul laden und verwalten
- **File Browser** — klarere Fehler beim Dateiverlauf, schnellere Verzeichnisgroessenberechnung mit Parallelitaetskontrolle, fluessigere Mehrfachauswahl
- **Sichereres Upgrade** — vor dem Upgrade wird freier Speicherplatz geprueft
- **Runtime** — Projektverzeichnisse werden bei fehlgeschlagener Erstellung nicht mehr geloescht; Host-Mappings lassen sich wieder entfernen
- **Panel Settings** — verbesserte Lizenz-Neubindung und Snapshot-Wiederherstellung

## New Features

### Models

- **Modell-Downloader** — Modelle direkt in 1Panel herunterladen ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

## Enhancements

### File Browser

- **Dateiverlauf-Fehler** — stabilere Fehlerbehandlung beim Laden von Verlaufsinhalten ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **Verzeichnisgroesse** — optimierte Berechnung mit Parallelitaetskontrolle ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **Auswahl-UX** — verfeinerte Dateiverwaltungs-UI und Auswahloperationen ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **Lizenz-Neubindung** — Logik in mehreren Szenarien verbessert ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **Speicherpruefung beim Upgrade** — freier Speicher wird vor dem Fortfahren geprueft ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

## Bug Fixes

| Bereich | Fix |
|---|---|
| **Runtime** | Projektverzeichnisse werden bei fehlgeschlagener Runtime-Erstellung nicht mehr geloescht ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | Host-Mappings lassen sich wieder loeschen ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | Laden nicht existierender Verzeichnisse wirft keine unerwarteten Fehler mehr ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | Snapshot-Wiederherstellung in zuvor fehlerhaften Szenarien korrigiert ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

## How to Upgrade

Im Dashboard unten rechts auf `Update` klicken.

Neu bei 1Panel? [1panel.pro](https://1panel.pro/)

## Source

Vollstaendige Release Notes: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
