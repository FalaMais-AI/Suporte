---
sidebar_position: 2
title: "Fluxo"
description: "Como criar e configurar fluxos de automação visual"
---

# Fluxos

A aba **Fluxos** dentro do módulo **Automações** é onde você monta automações complexas de forma visual, conectando blocos chamados **nós** em sequência.

Diferente das Regras — que seguem uma cadência linear — um fluxo permite criar ramificações, condições, esperas e múltiplas ações encadeadas. É o recurso ideal para automações mais sofisticadas, como resgatar um lead parado, qualificar contatos automaticamente ou reagir a eventos do sistema de forma personalizada.

Localização:

**Automações → Fluxos**

---

## Lista de fluxos

A tela inicial da aba exibe todos os fluxos criados na conta, com um painel de contadores no topo:

- **Ativos** — fluxos em execução no momento
- **Total** — todos os fluxos, ativos e inativos

Cada cartão de fluxo mostra:

- **Nome** e **descrição** (se preenchida)
- **Gatilhos** configurados, como _Tag Adicionada_, _Webhook Recebido_, _Sem Resposta_
- Status do rascunho — **Rascunho pendente** indica que há alterações não publicadas
- **Número de nós** configurados no fluxo
- Data da última atualização
- **Toggle** para ativar ou desativar o fluxo sem excluí-lo

:::info[Rascunho pendente]
Um fluxo com a etiqueta **Rascunho pendente** tem alterações salvas mas ainda não publicadas. O fluxo só começa a usar as novas configurações após a publicação.
:::

---

## Criando um novo fluxo

Clique no botão **+ Novo Fluxo** no canto superior direito. O editor visual abre em branco, pronto para você montar a automação do zero.

---

## O editor de fluxos

O editor é uma área de trabalho onde você arrasta, posiciona e conecta os nós. A interface tem três partes principais:

**Barra superior**
- Nome do fluxo (editável)
- Botões **Salvar** e **Publicar**
- Acesso a **Configurações**, **Tags** e **Sair**

**Painel esquerdo — Biblioteca de Nós**
- Lista todos os tipos de nós disponíveis, organizados por categoria
- Campo de busca para encontrar um nó rapidamente
- Arraste qualquer nó da biblioteca para a área de trabalho para adicioná-lo ao fluxo

**Área de trabalho (canvas)**
- Espaço visual onde os nós são posicionados e conectados
- Cada nó tem pontos de conexão que você liga aos próximos nós
- Clique em qualquer nó para abrir o painel **Inspector** no lado direito e configurá-lo

---

## Como funcionam os nós

Cada nó representa uma etapa dentro do fluxo. Ao clicar em um nó, o painel **Inspector** abre à direita com três abas:

- **Config** — campos de configuração do nó
- **Input** — dados de entrada que o nó recebe dos nós anteriores
- **Output** — dados que o nó passa para os próximos nós

Todo nó exibe no canvas:

| Campo | Descrição |
|---|---|
| **Categoria** | Tipo do nó (Gatilho, Condição, Ação, Controle) |
| **Nome** | Identificação do nó no fluxo |
| **Tipo** | Função específica do nó |
| **Campos Configurados** | Quantidade de campos já preenchidos |

Os pontos de saída coloridos no rodapé de cada nó indicam os caminhos possíveis:

- **Verde** — saída padrão ou resposta positiva (_Sim_)
- **Vermelho** — condição negativa (_Não_)
- **Laranja** — timeout ou tempo esgotado

---

## Tipos de nós

### Gatilhos

Os gatilhos são o ponto de partida de qualquer fluxo. Eles definem **qual evento inicia a automação**. Cada fluxo começa obrigatoriamente com um nó de gatilho.

| Gatilho | Quando dispara |
|---|---|
| **Mensagem Recebida** | Quando o contato envia uma mensagem para a conta |
| **Mensagem Enviada** | Quando a equipe envia uma mensagem para o contato |
| **Tag Adicionada** | Quando uma tag específica é adicionada ao contato |
| **Etapa Alterada** | Quando o contato muda de etapa em um funil |
| **Sem Resposta** | Quando o contato fica sem responder por um tempo definido (em minutos) |
| **Webhook Recebido** | Quando um sistema externo envia dados para a URL do fluxo via POST |
| **Contato Criado** | Quando um novo contato é criado na plataforma |
| **Negociação Criada** | Quando uma nova negociação é aberta |
| **Negociação Atualizada** | Quando os dados de uma negociação são modificados |
| **Entrada na Lista** | Quando o contato entra em uma lista específica |

---

### Condições

Os nós de condição criam **ramificações no fluxo**. Eles avaliam uma situação e direcionam o fluxo por caminhos diferentes conforme o resultado — geralmente **Sim** ou **Não**.

| Condição | O que verifica |
|---|---|
| **De Conteúdo** | Se a mensagem recebida contém uma palavra ou padrão específico |
| **Tem Tag?** | Se o contato possui uma tag selecionada |
| **Em Etapa?** | Se o contato está em uma etapa específica de um funil |
| **Decide IA** | A IA analisa o contexto e decide qual caminho seguir com base em um prompt configurado |
| **Switch** | Avalia múltiplos casos com regras avançadas, direcionando para saídas diferentes por caso |
| **Horário Comercial?** | Verifica se o momento atual está dentro do horário comercial configurado (ex: 08:00 às 18:00) |

:::tip[Dica]
O nó **Switch** é útil quando você precisa de mais de dois caminhos. Configure cada "caso" com sua regra, e o fluxo segue para o caminho correspondente ao primeiro caso verdadeiro — ou para o caminho _Default_ se nenhum caso for atendido.
:::

---

### Ações

Os nós de ação **executam algo** para o contato ou na plataforma. São os nós que enviam mensagens, aplicam tags, movem etapas e realizam outras operações práticas.

| Ação | O que faz |
|---|---|
| **Enviar Mensagem** | Envia uma mensagem para o contato. Você pode usar um Template Bot (criado na plataforma) ou um Template Oficial (aprovado pelo WhatsApp) |
| **Adicionar Tag** | Aplica uma ou mais tags ao contato |
| **Remover Tag** | Remove uma tag específica do contato |
| **Notificar Equipe** | Envia uma notificação interna para a equipe com uma mensagem configurável |
| **Mover Etapa** | Move o contato para uma etapa específica de um funil |
| **Criar Negociação** | Abre uma nova negociação para o contato, com funil e etapa definidos |
| **Pausar Bot** | Pausa o bot para o contato por um tempo determinado |

#### Enviar mensagem com botões UAZAPI

No nó **Enviar Mensagem**, contas que usam conexão WhatsApp via UAZAPI podem escolher o tipo **Botões UAZAPI**.

Esse formato envia uma mensagem com até três botões. Ele é indicado para opções curtas, como confirmar interesse, abrir um link, copiar um código ou ligar para a equipe.

Tipos de botão disponíveis:

- **Resposta** → o clique do cliente volta como resposta na conversa.
- **Link** → direciona o cliente para uma página externa.
- **Copiar** → facilita copiar um código ou texto curto.
- **Ligar** → abre a chamada telefônica no aparelho do cliente.

:::info[Quando usar]
Use botões para decisões simples. Para fluxos com muitas opções ou regras complexas, divida a jornada em mensagens menores e condições no próprio fluxo.
:::

---

### Controle

Os nós de controle gerenciam o **ritmo e o encerramento** do fluxo.

| Controle | O que faz |
|---|---|
| **Aguardar** | Pausa o fluxo por um tempo configurado antes de continuar para o próximo nó |
| **Aguardar Resposta** | Pausa o fluxo esperando o contato responder. Se a resposta chegar, o fluxo segue pelo caminho _Respondeu_. Se o tempo limite (Timeout) for atingido sem resposta, segue pelo caminho _Timeout_ |
| **Fim** | Encerra a execução do fluxo para aquele contato |

:::info[Timeout no Aguardar Resposta]
O campo **Timeout** define quantas horas o fluxo aguarda a resposta do contato. O valor padrão é **24 horas**. Após esse prazo sem resposta, o fluxo segue automaticamente pelo caminho de timeout.
:::

---

### Avançado

Os nós avançados são usados em integrações técnicas e fluxos mais elaborados.

| Nó | O que faz |
|---|---|
| **Webhook Response** | Envia uma resposta de volta para um sistema externo que acionou o fluxo via webhook. Configure o código de status HTTP da resposta |
| **Merge** | Une dois ou mais caminhos do fluxo em um único ponto, permitindo que ramificações diferentes se encontrem antes de continuar |
| **Set Fields** | Define ou atualiza campos do contato ou de uma negociação com valores fixos ou dinâmicos |
| **Mapear Campos** | Mapeia dados recebidos (como de um webhook) para os campos do contato ou da negociação |
| **Integration Call** | Executa uma chamada a uma integração configurada na plataforma, passando parâmetros e recebendo dados de retorno |
| **HTTP Request** | Faz uma requisição HTTP para qualquer URL externa. Configure a URL, o método (ex: POST) e o corpo da requisição em formato JSON |

---

## Conectando nós

Para criar a sequência do fluxo:

1. Arraste um nó da **Biblioteca de Nós** para a área de trabalho
2. Passe o cursor sobre o ponto de saída (círculo colorido) de um nó
3. Clique e arraste até o ponto de entrada do próximo nó
4. A conexão é criada e o caminho fica visível na tela

Repita o processo para cada etapa do fluxo, incluindo os diferentes caminhos de condições (_Sim_, _Não_, _Timeout_).

---

## Exemplo de fluxo

Um fluxo simples de verificação de tag funciona assim:

```
Mensagem Recebida
       ↓
   Tem Tag?
  ↙        ↘
Sim         Não
 ↓
Enviar Mensagem
       ↓
      Fim
```

Neste exemplo:
- O fluxo inicia quando o contato envia uma mensagem
- A condição verifica se o contato já possui a tag configurada
- Se tiver a tag, uma mensagem é enviada e o fluxo termina
- Se não tiver, o caminho _Não_ pode ser conectado a outra ação ou deixado sem conexão para encerrar silenciosamente

---

## Salvando e publicando

- **Salvar** — Grava o estado atual do fluxo como rascunho sem aplicá-lo. O fluxo continua usando a versão publicada anterior (se houver).
- **Publicar** — Aplica todas as alterações do rascunho e coloca o fluxo em produção. A partir deste momento, novos eventos que corresponderem ao gatilho passarão pelo fluxo atualizado.

---

## Ativando e desativando fluxos

Use o **toggle** no cartão do fluxo na lista para ligar ou desligar um fluxo sem excluí-lo.

- **Ativo** — o fluxo está em execução e reage aos eventos configurados no gatilho
- **Inativo** — o fluxo está pausado e não dispara para nenhum contato enquanto estiver desligado
