---
sidebar_position: 5
title: "Auditoria"
description: "Visibilidade sobre as regras internas do sistema com filtros operacionais"
---

# Auditoria Interna

A aba **Auditoria** exibe as **regras internas do sistema** com filtros operacionais, permitindo inspecionar como as automações estão configuradas e identificar possíveis anomalias.

Localização no sistema:

**Automações → Auditoria**

![Visão geral da Auditoria Interna](auditoria.png)

---

## Filtros disponíveis

A página oferece três formas de filtrar as regras exibidas:

### Busca por regra/chave

Campo de texto livre para localizar uma regra específica pelo nome ou pela chave interna.

### Tipo de regra

Dropdown que filtra as regras por categoria. O valor padrão é **Todas**.

### Anomalias

Dropdown que permite filtrar entre:

- **Com e sem anomalia** — exibe todas as regras (padrão)
- **Com anomalia** — exibe apenas regras com problemas detectados
- **Sem anomalia** — exibe apenas regras que funcionam normalmente

---

## Estado sem resultados

Quando nenhuma regra interna corresponde aos filtros aplicados, o sistema exibe:

```
Nenhuma regra interna encontrada
Não há itens para os filtros atuais.
```

Nesse caso, ajuste os filtros ou verifique se há regras internas configuradas na conta.
