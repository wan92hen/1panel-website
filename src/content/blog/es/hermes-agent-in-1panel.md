---
title: "Como instalar Hermes Agent en tu servidor con 1Panel"
description: "Hermes Agent de Nous Research: IA auto-mejorable con memoria y habilidades. Guia paso a paso en 1Panel con Model Accounts y Agents, apertura de WebUI y ajustes para produccion."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Que es Hermes Agent?

**Hermes Agent** es un agente de IA auto-mejorable de [Nous Research](https://nousresearch.com/). Incluye un **ciclo de aprendizaje integrado**: con el uso puede **crear y refinar habilidades**, mantener **memoria a largo plazo**, consultar **sesiones pasadas** y mejorar su entendimiento de tu forma de trabajo **a traves de multiples conversaciones**.

No esta **atado a un solo equipo local**. Puedes ejecutarlo en **VPS**, **clusters GPU** u otros entornos similares, e interactuar por **linea de comandos**, **WebUI** o **canales de mensajeria**.

Con 1Panel obtienes una **WebUI en navegador** para gestionar **configuracion** y **API keys**, y revisar **estado en ejecucion** e informacion de **sesiones** desde el panel. En 1Panel, el despliegue y operacion diaria pasan por **AI -> Agents** junto con **Model Accounts** para acceso a LLM.

## Por que usar 1Panel para Hermes Agent?

Mantienes en un solo flujo las **credenciales del modelo**, la **definicion del agente** (tipo, version, puertos, modelo), y el acceso a **WebUI**. Esto reduce scripts aislados y mejora la repetibilidad operativa.

## Requisitos previos

Antes de desplegar, confirma:

- **1Panel** instalado y dashboard accesible.
- **LLM API key valida** o **modelo local** ya conectado en 1Panel.
- Servidor con **acceso a internet** (instalacion y trafico API, salvo escenarios 100% locales).

## Paso 1: Agregar una cuenta de modelo

1. Abre **AI** -> **Model Accounts**.
2. Haz clic en **Add Model Account**.
3. Elige el **proveedor de modelo** y completa los campos requeridos.
4. **Guarda** la cuenta.
5. Verifica en la lista que el nuevo registro aparece correctamente.

![Create Model Account in 1Panel](/blog/create-model-account.png)

Si manejas varias cuentas o modelos, elegiras la combinacion exacta **Model Account / Model** al crear Hermes Agent.

## Paso 2: Crear Hermes Agent

1. Entra en **AI** -> **Agents**.
2. Haz clic en **Create**.
3. Define **Agent Type** como **Hermes Agent**.

Completa el formulario:

| Campo | Que ingresar |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | Ejemplo por defecto: `hermes-agent`; puedes personalizarlo. |
| **App Version** | Version de Hermes Agent que deseas instalar. |
| **Access Port / WebUI Port** | Usa el valor por defecto o ajusta segun tu red. |
| **Model Provider** | Proveedor vinculado a la cuenta creada en el paso 1. |
| **Model Account / Model** | Cuenta y modelo exactos para esta instancia. |
| **Other Parameters** | Normalmente dejar por defecto; cambiar solo si es necesario. |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

Al elegir proveedor, 1Panel carga las **model accounts** disponibles para ese proveedor.

Si tienes varios modelos, selecciona el correcto en esta pantalla. Si aparecen opciones extra, sigue las indicaciones del formulario.

Antes de confirmar, revisa **nombre, version, puertos y modelo**.

## Paso 3: Instalar y esperar finalizacion

Con todo validado, haz clic en **Confirm** para iniciar la instalacion.

Sigue el **estado en la pagina** hasta que se muestre como **completada**. Cuando el estado es exitoso, Hermes Agent queda desplegado.

Si falla, usa el error mostrado por el panel (pull de imagen, conflicto de puertos, autenticacion, disco, etc.), corrige la causa y reintenta.

## Paso 4: Abrir la WebUI de Hermes Agent o chatear por TUI

Vuelve a la lista de **Agents**, localiza Hermes Agent y pulsa **WebUI**.

En el **primer acceso**, la interfaz puede seguir inicializando. Espera un poco y recarga una o dos veces.

Desde WebUI puedes seguir gestionando **ajustes**, **claves** y **vistas de sesiones** junto con la vista del panel.

Tambien puedes hacer clic en **Chat** para conversar con Hermes Agent desde la TUI.

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## Paso 5: Configuracion posterior en 1Panel

Tras el primer despliegue exitoso, ajusta Hermes Agent segun la carga real: cambia **modelo** o cuenta, define mejor la **ruta de acceso** (solo interno vs dominio publico) y afina **parametros de ejecucion** del formulario/WebUI.

Si hay exposicion a internet, aplica tu base de seguridad: alcance minimo en **firewall**, **HTTPS** para accesos por dominio y manejo cuidadoso de **API keys** en tickets, logs y capturas.

## Checklist rapido

- WebUI abre sin errores tras la fase inicial.
- Una prueba simple usa el **modelo esperado**.
- Los **puertos** no colisionan con otros servicios.
- Hay **backup/snapshot** si tu politica lo exige.

## Resumen

Hermes Agent es una runtime de agente **persistente y orientada a habilidades** que puedes alojar por tu cuenta. En 1Panel, el flujo es: **Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** -> y luego iterar **modelo, acceso y parametros**.

Si eres nuevo en 1Panel, empieza en [1panel.pro](https://1panel.pro/).
