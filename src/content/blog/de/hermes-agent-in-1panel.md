---
title: "Hermes Agent mit 1Panel auf dem Server installieren"
description: "Hermes Agent von Nous Research: selbstverbessernde KI mit Speicher und Skills. Schritt-fuer-Schritt in 1Panel mit Model Accounts und Agents installieren, WebUI oeffnen und fuer Produktion abstimmen."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Was ist Hermes Agent?

**Hermes Agent** ist ein selbstverbessernder KI-Agent von [Nous Research](https://nousresearch.com/). Er hat eine **integrierte Lernschleife**: Mit der Zeit kann er **Skills erstellen und verbessern**, **Langzeitgedaechtnis** behalten, **fruehere Sitzungen** abrufen und ein besseres Verstaendnis fuer deine Arbeit **ueber viele Konversationen hinweg** aufbauen.

Er ist **nicht an einen einzelnen Laptop gebunden**. Du kannst ihn auf einem **VPS**, in einem **GPU-Cluster** oder in aehnlichen Umgebungen betreiben und ueber **Kommandozeile**, **WebUI** oder **Messaging-Kanaele** nutzen.

Der 1Panel-Weg liefert eine **WebUI im Browser**, um **Konfiguration** und **API-Keys** zu verwalten und **Laufzeitstatus** sowie **Sitzungen** im Panel zu sehen. In 1Panel laufen Bereitstellung und Betrieb ueber **AI -> Agents** zusammen mit **Model Accounts** fuer den Zugriff auf LLMs.

## Warum Hermes Agent mit 1Panel betreiben?

Du fuehrst **Model-Zugangsdaten**, **Agent-Definition** (Typ, Version, Ports, Modell) und **WebUI-Einstieg** in einem Ablauf zusammen. Das passt zum ueblichen Teambetrieb auf einem Host: weniger Einmal-Skripte, mehr wiederholbare Prozesse.

## Voraussetzungen

Vor dem Deployment:

- **1Panel** ist installiert und das Dashboard ist erreichbar.
- Du hast einen **gueltigen LLM-API-Key** oder ein **lokales Modell** bereits in 1Panel angebunden.
- Der Server hat **Internetzugang** (fuer Installation und typischen API-Verkehr, sofern nicht komplett lokal).

## Schritt 1: Modellkonto anlegen

1. In der Seitenleiste **AI** -> **Model Accounts** oeffnen.
2. **Add Model Account** klicken.
3. Den genutzten **Model-Anbieter** waehlen und die benoetigten Felder ausfuellen.
4. Konto **speichern**.
5. In der Liste pruefen, dass der neue Eintrag sichtbar und korrekt ist.

![Create Model Account in 1Panel](/blog/create-model-account.png)

Bei mehreren Konten/Modellen waehlst du spaeter die konkrete Kombination **Model Account / Model** im Hermes-Agent-Formular.

## Schritt 2: Hermes Agent erstellen

1. **AI** -> **Agents** oeffnen.
2. **Create** klicken.
3. **Agent Type** auf **Hermes Agent** setzen.

Dann das Formular ausfuellen:

| Feld | Eingabe |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | Standard ist `hermes-agent`; eigener Name ist moeglich. |
| **App Version** | Gewuenschte Hermes-Agent-Version waehlen. |
| **Access Port / WebUI Port** | Standard nutzen oder passend zum Netzwerkplan setzen. |
| **Model Provider** | Anbieter passend zum Konto aus Schritt 1. |
| **Model Account / Model** | Konkretes Konto und Modell waehlen. |
| **Other Parameters** | Meist Standard lassen; nur bei klarem Bedarf aendern. |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

Nach der Anbieterwahl laedt 1Panel die vorhandenen **Model Accounts** fuer diesen Anbieter.

Wenn mehrere Modelle vorhanden sind, hier das richtige **Modell** auswaehlen. Bei zusaetzlichen Optionen den Hinweisen im Formular folgen.

Vor dem Absenden **Name, Version, Ports und Modell** nochmal pruefen.

## Schritt 3: Installation starten und abschliessen

Wenn alles stimmt, auf **Confirm** klicken.

Den **Status im UI beobachten**, bis klar **abgeschlossen** angezeigt wird. Danach ist Hermes Agent auf dem Host bereitgestellt.

Bei Fehlern die Meldung im Panel nutzen (z. B. Pull-Fehler, Port-Konflikte, Auth-Probleme, Speicherplatz), Ursache beheben und erneut starten.

## Schritt 4: Hermes-Agent-WebUI oeffnen oder per TUI chatten

Zurueck zur **Agents**-Liste, Hermes-Agent-Eintrag finden und **WebUI** klicken.

Beim **ersten Aufruf** kann die Seite noch initialisieren. Kurz warten und ein- bis zweimal neu laden.

In der WebUI verwaltest du weiterhin **Einstellungen**, **Keys** und **Sitzungsansichten** parallel zur Panel-Sicht.

Alternativ kannst du auf **Chat** klicken und direkt ueber die TUI mit Hermes Agent sprechen.

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## Schritt 5: Nachkonfiguration in 1Panel

Nach erfolgreichem Start kannst du Hermes Agent in 1Panel weiter anpassen: **Modell** oder Konto-Bindung wechseln, den **Zugriffspfad** schaerfen (intern vs. oeffentliche Domain) und weitere **Laufzeitparameter** aus Formular/WebUI abstimmen.

Fuer oeffentlich erreichbare Oberflaechen gelten uebliche Regeln: passende **Firewall**-Freigaben, **HTTPS** bei Domain-Zugriff und sorgfaeltiger Umgang mit **API-Keys** in Tickets, Logs und Screenshots.

## Kurze Pruefliste

- WebUI oeffnet stabil nach der kurzen Initialphase.
- Ein Smoke-Test trifft das **gewuenschte Modell**.
- **Ports** kollidieren nicht mit anderen Diensten.
- **Backup/Snapshot** ist vorhanden, falls eure Richtlinie das verlangt.

## Fazit

Hermes Agent ist eine **dauerhaft laufende, skill-orientierte** Agent-Runtime fuer Self-Hosting. Mit 1Panel ist der Ablauf: **Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** -> danach **Modell, Zugriff und Parameter** laufend optimieren.

Neu bei 1Panel? Start unter [1panel.pro](https://1panel.pro/).
