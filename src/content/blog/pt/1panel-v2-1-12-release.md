---
title: "1Panel v2.1.12 lancado: refinamentos no Overview, correcoes no File Browser e OpenWRT"
description: "O 1Panel v2.1.12 aprimora os graficos de monitoramento na pagina inicial, corrige a pausa do carrossel ao editar memorandos, endurece descompactacao ZIP e permissoes no File Browser, estabiliza terminais em nos filhos e upgrades no OpenWRT."
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

O 1Panel v2.1.12 ja esta disponivel. O foco e refinar a experiencia do Overview e entregar correcoes de confiabilidade para File Browser, terminais em nos filhos e upgrades em OpenWRT.

## Highlights

- **Graficos de monitoramento** — Os graficos na pagina inicial ficam mais claros para leitura rapida
- **UX de memorandos** — O carrossel da pagina inicial pausa corretamente durante a edicao
- **Estabilidade do File Browser** — Descompactacao ZIP mais segura, permissoes do diretorio pai preservadas apos extrair e enviar arquivos, e correcao ao mover binarios muito grandes
- **Terminais em nos filhos** — Conexoes de host padrao voltam ao comportamento esperado
- **Upgrades no OpenWRT** — Atualizacoes do painel concluem com sucesso em implantacoes baseadas em OpenWRT

## Enhancements

### Overview

- **Exibicao dos graficos de monitoramento** — Layout e legibilidade dos graficos na pagina inicial foram ajustados ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

## Bug Fixes

| Area | Correcao |
|---|---|
| **Overview** | O carrossel da pagina inicial agora pausa enquanto os memorandos sao editados ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | A descompactacao de certos arquivos ZIP deixa de falhar de forma inesperada ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Permissoes do diretorio pai nao sao mais alteradas apos extrair arquivos ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Mover binarios muito grandes nao deixa mais o servidor inacessivel ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | Permissoes do diretorio pai permanecem intactas apos uploads ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | Terminais em nos filhos usam conexoes de host padrao corretas ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | Upgrades do 1Panel voltam a funcionar no OpenWRT ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

## How to Upgrade

Clique em `Update` no canto inferior direito do painel.

Novo no 1Panel? Acesse [1panel.pro](https://1panel.pro/).

## Source

Notas completas: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
