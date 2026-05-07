---
title: "1Panel v2.1.11 verfuegbar: DeepSeek V4 Standard, File Browser-Aufgaben und Stabilitaet"
description: "1Panel v2.1.11 aktualisiert DeepSeek-Modellpools fuer V4, verbessert Dekomprimierung im File Browser und VS-Code-SSH-Hinweise, optimiert Container-Log-Downloads und Terminal-Layout, ermoeglicht IPv6-Selbstsignatur-SSL und liefert zwoelf Bugfixes."
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

1Panel v2.1.11 ist verfuegbar. Der Fokus liegt auf praxisnahen Verbesserungen in Agents, File Browser, Containern und Panel Settings sowie auf Bugfixes fuer Overview, Websites, Multi-Node und weitere Bereiche.

## Highlights

- **DeepSeek V4 in Modellpools** — DeepSeek-Konten nutzen in den Pools standardmaessig die aktuellen **V4**-Modelle
- **Dekomprimierung im File Browser** — laufende Entpackjobs abbrechen und klarere Task-UI fuer grosse Archive
- **VS Code ueber SSH** — klarere Verbindungshinweise und erweiterter SSH-Setup-Skriptinhalt
- **Container-Log-Downloads** — angepasste Timeouts; Docker-Hilfsprozesse werden nach Timeout bereinigt (siehe Bugfixes)
- **IPv6-Panel-SSL** — selbstsigniertes Zertifikat fuer das Panel auch in IPv6- oder Dual-Stack-Umgebungen
- **Terminal-Layout** — Hoehenanpassungen reduzieren ueberfluessige aeussere Scrollbalken

## Enhancements

### Agents

- **DeepSeek-Modellpools** — Pools fuer DeepSeek-Konten enthalten standardmaessig die neuesten **V4**-Modelle ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **Log-Download-Timeouts** — Wartezeiten fuer Container-Log-Exports sind an typische Netz- und Disk-Szenarien angepasst ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **Dekomprimierung stoppen** — Entpackjobs lassen sich abbrechen; die Taskliste ist fuer parallele Jobs uebersichtlicher ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code und SSH** — Verbindungsanleitung fuer VS Code verfeinert, SSH-Skriptinhalt erweitert ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **Hoehe des eingebetteten Terminals** — Layout-Anpassungen vermeiden oft einen zusaetzlichen aeusseren Scrollbalken ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 und selbstsigniertes SSL** — Panel-HTTPS mit selbstsigniertem Zertifikat ist nutzbar, wenn der Server ueber IPv6 erreichbar ist ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

## Bug Fixes

| Bereich | Fix |
|---|---|
| **Overview** | Normales Laden der Monitoring-Diagramme auf der Startseite wiederhergestellt ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | Memo-Widget in mehreren Sprachumgebungen korrigiert ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | Vergleichspfeile auf der App-Upgrade-Dateidiff-Ansicht wieder sichtbar ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | Redirect-Regeln unterstuetzen Wildcard-Domains wo zutreffend ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | Docker-Hilfsprozesse werden nach Log-Download-Timeout bereinigt ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | Dialog-Schaltflaechen nach Speichern von Compose-Aenderungen korrekt ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Docker-Service-Erkennung unter Arch Linux korrigiert ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | Kontextmenue und Filter in Randfaellen stabil ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | Rueckgabetypen der Datei-Service-API korrigiert ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | Kindknoten koennen wieder Host-Verbindungen des Hauptknotens nutzen ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | Hinweise wenn OpenResty nicht laeuft entsprechen dem tatsaechlichen Zustand. |
| **System** | Tabellensortierung der Spalten wieder korrekt ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

## How to Upgrade

Im Dashboard unten rechts auf `Update` klicken.

Neu bei 1Panel? [1panel.pro](https://1panel.pro/)

## Source

Vollstaendige Release Notes: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
