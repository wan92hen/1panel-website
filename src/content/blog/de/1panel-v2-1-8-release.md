---
title: "1Panel v2.1.8 veröffentlicht: KI-Dateisuche, Agent-Rollenverwaltung und Dateilink-Freigabe"
description: "1Panel v2.1.8 bringt KI-gestützte Dateisuche, teilbare Dateilinks, Rollenverwaltung für Agenten, Multi-Account-Kanäle, Bark-Benachrichtigungen, vLLM-Statusabgleich und mehr Sicherheit bei 2FA."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Versionshinweise
  - KI-Suche
  - Agent
  - Sicherheit
---

1Panel v2.1.8 wurde am 10. April 2026 veröffentlicht. Dieses Update erweitert das Agents-Modul deutlich (Rollen, Multi-Account-Kanäle, Website-Bindung), ergänzt den Dateibrowser um KI-Suche und Link-Freigabe und verbessert Sicherheit sowie Stabilität in mehreren Bereichen.

## Highlights

- KI-Dateisuche im Dateibrowser per natürlicher Sprache
- Dateilink-Freigabe direkt aus dem Dateibrowser
- Rollenverwaltung für Agenten zur Team-Zugriffskontrolle
- Multi-Account-Unterstützung pro Kanal (QQ, Feishu, DingTalk, Discord usw.)
- Website-Bindung für Agenten
- Bark als neuer Alert-Kanal
- Schutz vor verdächtigen IPs im 2FA-Login
- Echtzeit-Statusabgleich für vLLM

## Neue Funktionen

### Dateibrowser

- **KI-Suche** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): Dateien über natürliche Sprache finden, ohne exakte Pfade oder Dateinamen zu kennen.
- **Dateilink-Freigabe** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): Direkte Download-Links für Dateien erzeugen, z. B. für Artefakte, Backups und Logs.

### Agents

- **Rollenverwaltung** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): Rollen mit Berechtigungen definieren und Agenten zuweisen.
- **Multi-Account-Kanal** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): Mehrere Konten an einen Kanal binden.
- **Website-Bindung** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): Agenten explizit mit einer Website in 1Panel verknüpfen.
- **Agent-Bemerkungen** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): Freitextfeld zur Dokumentation von Zweck, Kontext und Verantwortlichen.
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): Bessere Zuverlässigkeit beim Skill-Download in Festlandchina.

### App Store

- **Einheitlicher Schalter für externe Portfreigabe** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): Zentrale Steuerung der externen Erreichbarkeit von App-Store-Apps.

### Panel-Einstellungen

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): Bark als zusätzlicher Push-Kanal neben E-Mail/Webhooks.

## Optimierungen

### Agents und OpenClaw

- Feinere OpenClaw-Plugin-Konfiguration inkl. Backup-Modell ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- Deinstallation und Upgrade von OpenClaw-Plugins im Panel ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- QQ/Feishu auf offizielle Plugins migriert ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- Mehr Konfigurationsoptionen für DingTalk in OpenClaw ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- Überarbeitete Modell-Menüstruktur ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Aktualisierte Standard-Modellkonfiguration ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- Stabilere API-Aufrufe für hochfrequente Agent-Workflows ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Modelle

- Besser lesbare Logs beim Modell-Pull ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- Verbesserte vLLM-Statussynchronisation zwischen Panel und Inferenzdienst

### Sicherheit

- Schutz vor verdächtigen IPs im 2FA-Flow ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- Verbesserte Sperr- und Login-Feedbacks ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Gehärteter Login- und Panel-Zugriffsablauf ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### Dateibrowser und SSH

- Stabilere Dateioperationen unter Last ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- Bessere Validierung beim Bearbeiten von SSH-Konfigurationsdateien ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Websites und Runtime

- Aufgeräumtere OpenResty-Other-Settings-Seite ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- Strengere Validierung bei OpenClaw-Website-Löschung ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Vereinfachte Website-Bindung ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Zuverlässigere Auswahl von Node.js-Runtime-Skripten ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### System

- Nahtloserer Update-Ablauf für AI Terminal ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Schnellere Ladezeiten im Code-Editor ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Konsistenteres Dialogverhalten im Panel ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Aktualisierte i18n-Texte in allen unterstützten Sprachen ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## Fehlerbehebungen

- **Overview**: Abnormale Delta-Werte in Monitoring-Diagrammen behoben ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: Fehlerhafte OpenClaw-Discord-Kanal-Konfiguration korrigiert ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: Fehler in der Auto-Renew-Logik behoben ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: Proxy-Health-Checks liefen nach Deaktivierung weiter ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: Rücknavigation zur Login-Seite bei 2FA+CAPTCHA korrigiert ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## Upgrade

Klicke einfach auf die Schaltfläche "Update" unten rechts.

Neu bei 1Panel? Starte auf [1panel.pro](https://1panel.pro/).

## Quelle

- Vollständige Release Notes: [1Panel v2.1.8 auf GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)

