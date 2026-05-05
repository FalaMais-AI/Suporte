---
sidebar_position: 1
title: "Regras"
description: "Como criar e configurar regras de follow-up automático"
---

# Regras

A aba **Regras** dentro do módulo **Automações** é onde você cria e gerencia os follow-ups automáticos da sua operação.

Uma regra define **quando** enviar uma mensagem, **para quem** ela vai, **o que** será enviado e **quando parar** — tudo de forma automática, sem precisar agir manualmente em cada conversa.

Localização:

**Automações → Regras**

---

## Como funciona o criador de follow-up

Ao entrar na aba, o sistema exibe um painel explicando o fluxo de criação em três etapas:

1. **Escolha o caminho** — Comece por um objetivo, use um template atualizado ou descreva o caso com suas palavras.
2. **Veja os avisos antes de ativar** — O wizard mostra conflitos, uso de template oficial e escopo amplo demais antes de salvar.
3. **Regra simples ou fluxo** — Se a cadência tiver muitas etapas, o sistema sugere transformar em fluxo visual.

---

## Regras configuradas

Abaixo do painel de instruções, ficam todas as regras já criadas.

- **Ativas** — mostra apenas as regras que estão em funcionamento
- **Total** — mostra todas as regras, ativas e inativas

Para ordenar a lista, use o menu **Prioridade atual**, que oferece as opções:

- Prioridade atual
- Nome A-Z
- Tipo de gatilho
- Status

Cada regra exibe:

- **Nome** e **status** (Ativa / Inativa)
- **Resumo** com o tipo de gatilho, origem da mensagem, horário e limite de envios
- **Descrição** do objetivo da regra
- Botões **Editar** e **Estatísticas**

---

## Estatísticas da regra

Ao clicar em **Estatísticas** em qualquer regra, o sistema abre um painel com os dados de desempenho dos últimos 30 dias, como quantidade de envios, respostas geradas, entre outros.

Se a regra for nova ou tiver poucos disparos, o painel exibe a mensagem: *"Ainda não há dados suficientes para esta regra."*

---

## Criando uma nova regra

Clique no botão **+ Nova regra** no canto superior direito. O menu oferece três formas de começar:

- **Começar por objetivo** — você descreve o que quer alcançar e o sistema monta a regra
- **Usar um template** — escolhe um modelo pronto e ajusta o que precisar
- **Descrever com IA** — escreve com suas palavras e a IA configura automaticamente

Independente da forma escolhida, o criador de regras segue 5 etapas.

---

### Usar um template

Ao escolher **Usar um template**, o sistema abre a **Biblioteca de templates de follow-up**.

Você pode filtrar os modelos de duas formas:

**Por objetivo principal:**
- Todos
- Reengajar sem resposta
- Cobrar retorno de proposta
- Confirmar interesse após atendimento
- Lembrar compromisso ou agendamento
- Retomar lead parado no pipeline

**Por segmento:**
- Todos, Geral, Saúde, Jurídico, Imobiliário, Educação, Serviços, Varejo

Cada template exibe uma prévia com o texto da mensagem e informações como tipo de gatilho, segmento e se é uma regra simples ou fluxo. Templates marcados como **Revisar template oficial** indicam um modelo mantido pela plataforma — esses são atualizados com boas práticas.

Ao selecionar um template, o painel lateral direito exibe:

- **Cadência sugerida** — os passos da sequência de envio com os intervalos (ex: Disparo em 24h, Nova tentativa em +24h)
- **Mensagem de exemplo** — o texto que seria enviado ao contato
- **Cenários onde costuma funcionar bem** — exemplos de uso recomendados (ex: Atendimento inicial, Lead morno, Primeiro contato comercial)

Clique em **Usar este template** para abrir o wizard com todas as configurações já preenchidas. Você pode revisar e ajustar qualquer campo antes de salvar.

---

### Descrever com IA

Ao escolher **Descrever com IA**, o sistema abre o modo **"Descreva seu follow-up e gere um rascunho"**.

:::info[Atenção]
Este modo **não ativa nada sozinho**. Ele transforma o que você descrever em uma regra editável, com resumo e cadência sugerida. Você revisa tudo no wizard antes de salvar.
:::

O formulário pede as seguintes informações:

| Campo | O que preencher |
|---|---|
| **Qual situação deve disparar esse follow-up?** | Descreva o contexto em linguagem natural. Ex: *"quando eu mandar um orçamento e a pessoa não responder em dois dias, quero duas tentativas com tom consultivo e parar se ela responder"* |
| **Qual objetivo parece mais próximo?** | Selecione entre: Reengajar sem resposta, Cobrar retorno de proposta, Confirmar interesse após atendimento, Lembrar compromisso ou agendamento, Retomar lead parado no pipeline |
| **Para quem isso vale?** | Descreva o público. Ex: *leads com proposta aberta* |
| **Depois de quanto tempo?** | Informe o intervalo. Ex: *4 horas, 24h, 2 dias* |
| **Quantas tentativas?** | Escolha entre 1, 2 ou 3 |
| **Qual tom você quer?** | Consultivo e objetivo, Leve e cordial, Mais direto, Acolhedor |
| **Quando a regra deve parar?** | Descreva a condição de parada. Ex: *parar se o cliente responder ou se a cadência terminar* |
| **Contexto adicional (opcional)** | Informações extras que a IA deve considerar. Ex: *só em horário comercial, com foco em reagendamento* |

Enquanto você preenche, o painel lateral direito atualiza em tempo real um **Rascunho sugerido** com:

- O nome e tipo de gatilho identificado
- A cadência inicial com os passos e intervalos
- **Sugestões antes de aplicar** — recomendações automáticas como revisar o nome da regra, confirmar a conexão de envio correta, ou usar template aprovado se a cadência rodar depois de 24h no WhatsApp Oficial

Quando estiver satisfeito com o rascunho, clique em **Aplicar rascunho** para abrir o wizard com tudo preenchido e fazer os ajustes finais.

---

## Etapas do criador de regras

### Etapa 1 — Contexto

Define a identidade da regra e onde ela pode atuar.

**Identidade e alcance**

| Campo | O que preencher |
|---|---|
| **Nome interno da regra** | Um nome claro para identificar a regra na lista |
| **Resumo para sua equipe** | Descrição curta explicando o objetivo da regra |
| **Onde essa regra pode disparar** | Selecione em quais instâncias/conexões ela deve funcionar |
| **Como a mensagem deve sair** | Define por qual conexão a mensagem será enviada. A opção padrão é *Seguir conexão de origem do lead* |
| **Conexão de fallback** | Conexão alternativa caso a principal não esteja disponível |

:::tip[Dica]
O painel de resumo no topo desta etapa mostra em tempo real o impacto da regra: quando dispara, para quem, o que envia e quando para. Use-o para revisar antes de avançar.
:::

---

### Etapa 2 — Disparo

Define **o que aciona** a regra.

**Tipo de gatilho**

Escolha o evento que vai iniciar o follow-up:

| Gatilho | Quando dispara |
|---|---|
| **Sem Resposta** | Quando o contato para de responder por um tempo definido |
| **Tag Adicionada** | Quando uma tag específica é adicionada ao contato |
| **Etapa Alterada** | Quando o contato muda de etapa no funil |
| **Sentimento Detectado** | Quando a IA identifica um sentimento específico na conversa |
| **Janela Oficial 24h** | Quando a janela de mensagens do WhatsApp Business está próxima de fechar |
| **Entrou na Lista** | Quando o contato entra em uma lista inteligente |
| **Saiu da Lista** | Quando o contato sai de uma lista inteligente |

**Atraso do gatilho**

Define quanto tempo após o evento a regra espera antes de disparar o primeiro envio. Exemplo: 24 horas após ficar sem resposta.

**Listas inteligentes**

Você pode restringir a regra para disparar apenas para contatos que estejam em uma lista específica, mantendo o gatilho configurado.

**Ajustes avançados de entrada**

Expanda essa seção para filtrar por lista, tag, etapa, funil, automação ou regra anterior — útil para reduzir o escopo e evitar envios desnecessários.

---

### Etapa 3 — Cadência

Define **o que será enviado** em cada disparo.

Cada regra pode ter um ou mais passos. O primeiro passo usa o tempo do gatilho; os demais definem o espaçamento da cadência.

**Configurações de cada passo:**

| Campo | Descrição |
|---|---|
| **Nome do passo** | Identificação interna do passo |
| **Atraso extra (opcional)** | Tempo adicional de espera antes deste passo específico |
| **Tipo de resposta** | **IA gera a mensagem** (a IA escreve com base no contexto) ou **Mensagem fixa** (texto definido por você) |
| **Mini-prompt (opcional)** | Instrução específica para a IA usar neste passo. Se não escolher, usa o comportamento padrão |
| **Instrução complementar da etapa** | Contexto extra para a IA, como tom desejado e objetivo do passo |

**Validação por IA**

Quando ativada, a IA analisa se o contato ainda faz sentido receber aquele follow-up antes de enviar. Se não fizer sentido, o envio é bloqueado (isso aparece no histórico como *ai_validation_rejected*).

Para adicionar mais passos à cadência, clique em **+ Adicionar passo**.

---

### Etapa 4 — Regras

Define os **limites, horário e critérios de parada**.

**Limites e controle de envio**

| Campo | Descrição |
|---|---|
| **Máx. por contato** | Quantidade máxima de vezes que a regra pode disparar para o mesmo contato |
| **Intervalo mínimo (h)** | Tempo mínimo entre um disparo e outro para o mesmo contato |
| **Pausa ativa** | Bloqueia o envio se o cliente respondeu recentemente. Defina o tempo de pausa |

**Horário de envio**

Ative **Respeitar horário definido** para que as mensagens saiam apenas dentro de uma janela de horário. Configure:

- **Início e Fim** — ex: 08:00 às 18:00
- **Dias permitidos** — selecione os dias da semana em que a regra pode disparar

**Ajustes avançados**

- **Política de reentrada** — Define o que acontece se o contato voltar a se qualificar para a regra. A opção padrão é *Reiniciar após nova resposta*.
- **Condições de saída** — Adicione condições específicas que fazem a regra parar de ser aplicada a um contato.

---

### Etapa 5 — Pós

Define **ações automáticas** executadas após o follow-up ser enviado (opcional).

Você pode combinar as seguintes ações:

| Ação | O que faz |
|---|---|
| **Adicionar Tag** | Aplica uma tag ao contato após o envio |
| **Mover Etapa** | Move o contato para uma etapa específica de um funil |
| **Agendar Próximo** | Agenda o próximo contato após um intervalo de horas |

Após configurar as pós-ações, clique em **Criar Regra** para salvar.

---

## Avisos e recomendações

Durante a criação, o sistema exibe alertas automáticos para ajudar a evitar erros comuns:

:::warning[Risco principal]
Aparece quando há um problema crítico na configuração, como o intervalo mínimo sendo maior que a própria cadência planejada, ou a regra com escopo muito amplo podendo disparar para contatos demais.
:::

:::info[Recomendação]
Aparece quando a configuração está funcional, mas pode ser melhorada. Por exemplo, sugerir filtrar por etapa, tag ou funil para reduzir ruído operacional, ou transformar a regra em um fluxo visual quando ela está ficando muito sofisticada.
:::

---

## Editando uma regra existente

Clique em **Editar** no cartão da regra. O sistema abre o mesmo wizard de 5 etapas com as configurações atuais preenchidas.

Revise as configurações e os impactos antes de salvar. O painel de resumo no topo mostra os efeitos da regra em tempo real enquanto você edita.

---

## Ativando e desativando regras

Cada regra tem um **toggle** (botão liga/desliga) no canto direito do cartão. Use-o para ativar ou pausar a regra sem precisar excluí-la.

As regras pausadas permanecem na lista com o status **Inativa** e não disparam nenhuma mensagem enquanto estiverem desligadas.
