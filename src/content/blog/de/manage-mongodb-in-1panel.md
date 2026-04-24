---
title: "MongoDB auf dem VPS mit 1Panel verwalten"
description: "MongoDB in 1Panel Schritt fuer Schritt: App-Store-Installation, Datenbank anlegen, Verbindung, integriertes mongosh-Terminal, Backup/Restore und Remote-Instanzen."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

Mit 1Panel laesst sich der komplette MongoDB-Betrieb auf einem VPS zentral steuern: installieren, Datenbank anlegen, verbinden, abfragen, sichern und wiederherstellen.

## Was ist in 1Panel moeglich

- MongoDB ueber den **App Store** installieren
- Datenbanken und Benutzer mit Rechten anlegen
- Integriertes **mongosh** im Browser nutzen
- Verbindungsdaten fuer Anwendungen einsehen
- Backup, Restore und geplante Sicherungen ausfuehren
- Externe MongoDB-Instanzen einbinden

## Voraussetzungen

- 1Panel ist installiert und erreichbar
- Der Server hat genug RAM fuer dein MongoDB-Setup
- Internetzugang ist fuer den Image-Download verfuegbar

## Schritt 1: MongoDB aus dem App Store installieren

In 1Panel **App Store** oeffnen, nach **Database** filtern, **MongoDB** waehlen und **Install** klicken.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

Wichtige Felder:

| Feld | Hinweis |
|---|---|
| Name | Instanzname (Standard `mongodb`) |
| Version | Gewuenschte MongoDB-Version |
| Username / Password | Initiale Zugangsdaten |
| Port | Standard `27017` |
| External Access | Nur aktivieren, wenn wirklich noetig |
| Restart Policy | Fuer Produktion oft `always` |

Dann **Confirm** klicken.

## Schritt 2: MongoDB-Datenbank erstellen

Nach der Installation zu **Databases** -> **MongoDB** wechseln und **Create** klicken.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

Eintragen:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description** (optional)

Mit **Confirm** speichern.

## Schritt 3: Verbindungsdaten einsehen

Ueber **Connection** Host, Port und Zugangsdaten anzeigen.

URI-Beispiel:

`mongodb://username:password@host:27017/databasename`

## Schritt 4: Integriertes Terminal verwenden

Mit **Terminal** ein `mongosh` direkt im Panel oeffnen.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

Beispiele:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Schritt 5: Backup und Restore

In der Datenbankliste die Backup-Aktion oeffnen.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up** erstellt ein Snapshot
- **Restore** stellt daraus wieder her
- In **Settings** -> **Backup Accounts** Cloud-Ziele konfigurieren
- Ueber **Cron Jobs** automatische Sicherungen planen

## Schritt 6: Remote-MongoDB verwalten

Per **Remote server** externe MongoDB-Instanzen eintragen.

Bei manuellen Aenderungen ausserhalb von 1Panel hilft **Sync from server** zum UI-Abgleich.

## Sicherheitsempfehlungen

- Direkte oeffentliche MongoDB-Freigaben minimieren
- Firewall nur fuer bekannte Quellen oeffnen
- Bevorzugt private Zugriffswege (z. B. VPN/Tunnel) nutzen
- Zugangsdaten rotieren und Offsite-Backups vorhalten

## Kurze Checkliste

- Instanzstatus ist gesund
- Verbindungs-URI wurde getestet
- Mindestens ein Restore-Test wurde durchgefuehrt
- Zugriffsregeln entsprechen eurem Sicherheitsstandard

## Fazit

Mit 1Panel kannst du MongoDB auf VPS aus einer Oberfläche heraus betreiben.

Mehr zu 1Panel: [1panel.pro](https://1panel.pro/).
