---
sidebar_position: 4
title: "Em andamento"
description: "Acompanhe contatos, próximas ações e resultados de regras e fluxos em execução"
---

# Em andamento

A área **Em andamento** reúne os contatos que estão passando por uma regra de
follow-up ou por um fluxo visual. Ela mostra o que já aconteceu, qual é a
próxima ação e quais itens precisam de atenção.

Localização:

**Automações → Em andamento → Em andamento**

![Contatos em automações](img.png)

---

## O que aparece na lista

Cada contato mostra:

- nome e telefone
- nome da automação
- origem **Regra** ou **Fluxo**
- status atual
- próxima ação e horário previsto
- quantidade de mensagens já enviadas, quando for uma regra
- motivo operacional quando uma ação falha, é cancelada ou é pulada

Os contatos são agrupados por prioridade e horário. Itens com falha, atraso ou
alguma ação necessária aparecem antes dos que estão apenas aguardando.

## Status disponíveis

O filtro de status permite consultar:

- **Pendentes** — aguardam o próximo disparo
- **Em execução** — a automação está processando uma ação
- **Aguardando** — depende de prazo, resposta ou outra condição
- **Concluídos** — finalizaram o caminho previsto
- **Enviados** — tiveram mensagem enviada
- **Respondidos** — receberam resposta do contato
- **Com falha** — não conseguiram concluir a ação
- **Não enviados ou cancelados** — foram interrompidos antes do envio

:::info[Decisões da IA]
Quando a IA decide não enviar ou reagendar uma ação, o card mostra a
justificativa registrada e o próximo passo disponível. Se a automação antiga
não tiver uma justificativa detalhada, a tela informa isso sem inventar um
motivo.
:::

## Filtros

Você pode combinar três filtros:

- **Automação** — todas ou uma regra específica
- **Período** — todas as datas, hoje, últimos 7 dias, últimos 30 dias ou período
  personalizado
- **Status** — um dos estados listados acima

Use **Limpar filtros** para voltar rapidamente às automações pendentes.

## Ações por contato

- **Abrir conversa** — leva diretamente à conversa do contato
- **Histórico** — expande os eventos recentes daquela automação
- **Cancelar próximo envio** — disponível para regras ainda aguardando envio
- **Remover da automação** — interrompe os próximos passos da regra

Fluxos visuais aparecem para acompanhamento, mas as ações que alteram a
execução ficam no próprio editor do fluxo.

## Estado vazio e falhas de carregamento

Quando não há resultados, a mensagem considera o filtro atual. Assim é
possível diferenciar uma operação sem contatos em andamento de uma busca sem
correspondência.

Se a consulta falhar, a lista não é apresentada como vazia: a tela informa o
erro e oferece **Tentar novamente**.
