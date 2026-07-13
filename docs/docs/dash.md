---
sidebar_position: 2
title: "Dashboard"
description: "Acompanhe atendimento, vendas e prioridades em uma visão operacional"
---

# Dashboard

O **Dashboard** reúne indicadores de atendimento e vendas para responder três
perguntas rapidamente:

- o que precisa de atenção agora
- como o período atual se compara ao anterior
- onde estão os principais volumes e oportunidades

![Dashboard operacional](./dash/image.png)

## Cabeçalho e atualização

No topo ficam:

- total de conversas ativas
- horário da última atualização
- botão **Atualizar**
- botão **Personalizar**

O botão Atualizar recarrega os indicadores sem mudar o período ou o funil
selecionado.

## Funil exibido

Use **Funil exibido** para escolher qual pipeline comercial alimenta as
métricas de vendas e o bloco de distribuição por etapa.

A escolha fica salva por empresa e também aparece no endereço da página. Ao
trocar o funil, você permanece no Dashboard.

## Período

Períodos rápidos:

- Hoje
- 7 dias
- 14 dias
- 30 dias

Em **Personalizado**, selecione uma data inicial e uma final. O calendário pode
ser navegado por mês sem voltar sozinho à data anterior. Use **Voltar para 7D**
para retornar ao período padrão.

![Seletor de período do Dashboard](./dash/image3.png)

O período considera o fuso horário da empresa e permanece salvo para os
próximos acessos.

## Personalizar blocos

Clique em **Personalizar** para mostrar ou ocultar:

- Prioridades e pendências
- Resumo da IA
- Campanhas
- Funil, metas e ranking
- Conversas da semana
- Equipe no período
- Instâncias de atendimento
- Horários de pico
- Atividade recente

A preferência fica salva no perfil. Se todos os blocos forem ocultados, o
Dashboard mostra como reativá-los.

## Precisa da sua atenção

O painel de prioridades reúne atalhos para:

- **Tarefas atrasadas** — abre a Agenda
- **Follow-ups pendentes** — abre Automações em andamento
- **Conversas em andamento** — abre Mensagens
- **Negociações abertas** — abre o Funil

Quando existe uma tarefa atrasada, o primeiro título aparece como contexto.
Falhas nesse bloco não interrompem os demais indicadores e podem ser tentadas
novamente.

## Desempenho no período

Os seis indicadores comparam o período escolhido com o período anterior de
mesma duração:

### Novas conversas

Total de conversas iniciadas no período.

### 1ª resposta

Tempo mediano até a primeira resposta da equipe.

### Tempo de resolução

Tempo mediano necessário para encerrar uma conversa.

### Atendimentos por demanda

Conversas encerradas e distribuição dos motivos de encerramento.

### Novos contatos

Pessoas que entraram em contato pela primeira vez no período.

### CSAT

Índice de satisfação calculado a partir das avaliações recebidas.

Cada indicador mostra separadamente:

- **direção** — o número subiu, caiu ou ficou estável
- **impacto** — a mudança é positiva, negativa ou neutra para aquela métrica

Por exemplo, uma queda no tempo de primeira resposta é uma variação para baixo,
mas representa um resultado positivo.

![Indicadores de desempenho](./dash/image1.png)

## Evolução das conversas

O gráfico combina volume diário e tempo de primeira resposta. O total no canto
considera todo o período selecionado.

Em períodos maiores, os rótulos do eixo são distribuídos para preservar a
leitura. Se não houver dados, o bloco informa que não existe atividade naquele
período.

## Resumo da IA

O resumo destaca padrões e pontos de atenção encontrados nos dados atuais. Ele
é um apoio à leitura; use os indicadores e listas detalhadas para confirmar a
situação operacional.

## Funil comercial

O bloco mostra o funil selecionado, o total de negociações e a distribuição por
etapa. Cada linha informa quantidade e participação no estoque atual.

Use **Abrir funil** para trabalhar nas negociações.

## Metas e ranking

Apresenta o progresso comercial e o ranking de vendas dentro do período e das
permissões do usuário.

## Equipe no período

Mostra o desempenho dos atendentes, incluindo volume, tempo e satisfação quando
esses dados estiverem disponíveis.

## Por instância

Apresenta a distribuição das conversas entre as instâncias de atendimento. Cada
linha mostra volume, percentual e tempo médio de resposta.

## Horários de pico

Exibe a intensidade do atendimento por faixa horária. As barras têm descrição
acessível e ajudam a planejar a cobertura da equipe.

## Atividade recente

Lista os eventos mais recentes, com tipo, horário e contexto disponível.

## Campanhas

Resume a atividade de campanhas quando esse módulo está habilitado e tem dados
no período.

![Gráficos e blocos operacionais](./dash/image2.png)

## Comportamento em telas menores

Em desktop, os blocos relacionados aparecem lado a lado. Em notebook estreito,
tablet ou celular, grupos como **Funil / Metas e ranking** e
**Equipe / Instâncias / Picos / Atividade** viram abas. Isso preserva o espaço
de leitura sem comprimir os gráficos.

## Falhas e atualização parcial

Cada bloco tem carregamento e recuperação próprios. Se apenas uma consulta
falhar, os demais dados continuam disponíveis e o bloco afetado mostra
**Tentar novamente**.

:::tip[Rotina recomendada]
Comece pelo painel **Precisa da sua atenção**, revise a tendência das métricas e
depois use o funil, os horários de pico e a equipe para decidir as ações do dia.
:::
