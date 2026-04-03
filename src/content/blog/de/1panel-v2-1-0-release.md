---
title: 1Panel v2.1.0 mit OpenClaw-Agentenverwaltung veröffentlicht
description: 1Panel v2.1.0 bringt OpenClaw-Agentenverwaltung, Unternehmens-Alarmkanäle, Passkey-Anmeldung, Memo-Funktion und zahlreiche Verbesserungen für Website, App Store, Container und Sicherheit.
pubDate: 2026-02-13
updatedDate: 2026-02-13
tags:
  - 1Panel
  - Versionshinweise
  - OpenClaw
  - Passkey
  - Alarme
---

1Panel v2.1.0 wurde am 12. Februar 2026 veröffentlicht und erweitert die Plattform deutlich im Bereich KI/Agent-Workflows, Panel-Einstellung und Systemsicherheit.

## Highlights

- OpenClaw-Agentenverwaltung ist jetzt in 1Panel integriert.
- Panel-Einstellungen unterstützen Unternehmens-Alarmkanäle (WeCom, DingTalk, Feishu; X-Pack).
- Passkey-Anmeldung reduziert die Abhängigkeit von rein passwortbasierter Anmeldung.
- Übersichtsmodul um Memo-Funktion erweitert.

## Neue Funktionen

- Übersicht: Memo-Funktion hinzugefügt.
- KI: OpenClaw-Agentenverwaltung hinzugefügt.
- Zertifikat: Unterstützung für benutzerdefinierte ACME-Kontoverifizierung.
- Container: Massenimport von Images unterstützt.
- Datei: Notizen in der Dateiverwaltung.
- WAF (X-Pack): Export von Sperrprotokollen.
- Panel-Einstellungen (X-Pack): Benachrichtigungen über WeCom, DingTalk und Feishu.
- System: Passkey-Anmeldung unterstützt.

## Verbesserungen

- App Store: Fern-App-Updates, Icon-Speicher, Caching und Dialoge installierter Apps.
- Website: Verzeichnisstruktur, Weiterleitungen, Browser-Cache und Listendarstellung.
- Zertifikat: Wiederholungsmechanismus bei Zertifikatsanfragen.
- Container: Zeitstempel in Logs, Force-Pull beim Erstellen von Compose.
- Datei: Streaming-Downloads zur Speicherreduzierung.
- System und Toolbox: API-Parameterprüfung und Statusprüfungen.

## Fehlerbehebungen

- Hostname-Cache in der Übersicht aktualisiert.
- Klartextpasswörter beim Anzeigen installierter App-Passwörter behoben.
- Mehrere Website-Weiterleitungen und HTTPS-Port-Hinweise.
- IPv6-Zertifikatsanfragen in bestimmten Szenarien.
- Compose-Umgebungsvariablen in Einzelfällen.
- Zeitüberschreitungen bei Massenänderungen von Datei-/Verzeichnisberechtigungen.
- SSHd-Prozessreste nach Terminal-Schließen auf bestimmten Systemen.
- Fehler bei geplanten Aufgaben in bestimmten Szenarien.
- Mehrere bekannte X-Pack- und Panel-Einstellungsprobleme.

## Quelle

- Originalankündigung: [支持OpenClaw智能体管理，新增企业微信、钉钉和飞书告警通知，1Panel v2.1.0版本发布](https://blog.fit2cloud.com/?p=019c5408-2593-73f0-8ed5-718d5023fb20)
