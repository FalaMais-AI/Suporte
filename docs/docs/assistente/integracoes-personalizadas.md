---
sidebar_position: 4
title: "Integrações personalizadas"
description: "Configure integrações HTTP para que a IA execute ações autorizadas em sistemas externos."
---

# Integrações personalizadas

A área **Integrações da IA** permite conectar o assistente a sistemas externos da empresa, como ERPs, CRMs, gateways de pagamento, sistemas de cobrança ou APIs internas.

Cada integração vira uma ferramenta que pode ser mencionada no prompt com `@`. A IA só consegue usar uma integração quando ela está ativa, pertence à empresa e foi citada no prompt salvo.

## Quando usar

Use integrações personalizadas quando a IA precisar executar uma ação fora do FalaMais.AI.

Exemplos:

- Gerar um boleto em um sistema financeiro.
- Consultar status de pedido em um ERP.
- Enviar uma solicitação para uma API interna.
- Abrir um chamado em uma ferramenta externa.
- Registrar uma etapa em outro CRM.

## Como criar uma integração

1. Acesse **IA**.
2. Abra a aba **Integrações**.
3. Clique em **Adicionar**.
4. Preencha nome, instrução de uso, método HTTP e endpoint.
5. Escolha a autenticação, se necessária.
6. Configure os campos do JSON que a IA poderá preencher.
7. Responda se a integração precisa de confirmação antes de executar.
8. Salve e teste a integração antes de usar em produção.

## Campos do JSON

Os campos configurados definem quais informações a IA pode enviar para o endpoint.

Cada campo possui:

- **Chave:** nome técnico enviado no JSON.
- **Rótulo:** nome amigável para identificar o campo.
- **Tipo:** texto, número, booleano ou opções.
- **Obrigatório:** indica se a IA precisa informar o valor.
- **Descrição:** orientação para a IA preencher o campo corretamente.

:::tip[Dica]
Use nomes de chave simples, como `customer_id`, `cpf`, `order_id` ou `amount`.
:::

## Como liberar no prompt

Depois de criar uma integração, mencione-a no prompt usando o menu `@`.

Exemplo:

```text
Quando o cliente confirmar a geração do boleto, use @Gerar boleto.
```

Ao salvar, o prompt guarda uma referência segura para a integração. O endpoint, token e demais dados técnicos não aparecem no texto compilado enviado para a IA.

## Confirmação do cliente

A configuração **Precisa pedir confirmação antes de executar?** define se a IA deve confirmar com o cliente antes de chamar a integração.

Escolha **Não, executar direto** quando a integração apenas consulta informações e não altera nada fora do FalaMais.AI.

Exemplos:

- Consultar resultado de jogos.
- Verificar status de pedido.
- Buscar disponibilidade, cotação ou saldo informativo.

Escolha **Sim, pedir confirmação** quando a integração pode criar, alterar, enviar, cobrar, cancelar ou registrar uma ação em outro sistema.

Respostas como:

- "sim"
- "ok"
- "confirmo"
- "pode fazer"

são tratadas como confirmação positiva quando respondem diretamente à pergunta feita pela IA.

Respostas negativas ou ambíguas bloqueiam a execução e a IA deve pedir esclarecimento.

:::tip[Dica]
Para integrações de consulta recorrente, como acompanhar resultados da Copa, use **Não, executar direto** para evitar confirmações repetidas.
:::

## Segurança

As integrações personalizadas seguem controles de segurança antes de executar qualquer chamada.

Para a execução acontecer, é necessário que:

- A integração esteja ativa.
- A integração pertença à mesma empresa.
- O prompt mencione a integração com `@`.
- A autonomia permita **Executar Integrações da IA**.
- A conversa tenha confirmação positiva quando exigida.
- A URL do endpoint seja permitida pela política de segurança.

Tokens e chaves ficam protegidos e aparecem mascarados depois de salvos.

## Teste antes de ativar

Use o teste da integração para enviar um payload de exemplo e confirmar que o endpoint responde como esperado.

Se o teste falhar, revise:

- URL e método HTTP.
- Campos obrigatórios do payload.
- Token, API key ou header de autenticação.
- Resposta retornada pelo sistema externo.

## Boas práticas

- Comece com poucas integrações e valide uma por vez.
- Mantenha nomes claros, como **Gerar boleto** ou **Consultar pedido**.
- Descreva exatamente quando a IA deve usar a integração.
- Evite enviar dados desnecessários no payload.
- Monitore as decisões da IA e os resultados das execuções nos primeiros dias.
