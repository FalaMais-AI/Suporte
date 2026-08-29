---
sidebar_position: 21
title: "Integração Controle Odonto"
description: "Como a integração com o Controle Odonto envia lembretes e confirmações de consultas pelo WhatsApp."
---

# Integração Controle Odonto

A integração com o **Controle Odonto** usa a agenda da clínica para enviar
lembretes e confirmações de consultas pelo WhatsApp automaticamente.

## Como funciona

- As consultas da agenda do Controle Odonto são sincronizadas com o
  FalaMais.AI, que envia as mensagens nos horários configurados pela
  clínica.
- Cada regra define o **horário de disparo** em relação à consulta (por
  exemplo: 1 dia antes) e os **canais de comunicação** (WhatsApp, e-mail,
  chamada, etc.).
- O fuso horário usado é o configurado na empresa, evitando mensagens fora
  do horário esperado.

## Comportamento da integração

- **Agendamentos cancelados** não recebem mais mensagens: quando a clínica
  cancela uma consulta, o disparo é pulado e o histórico registra o motivo.
- **Consultas no mesmo dia**: quando a regra dispara no mesmo dia da
  consulta, visitas cujo horário já passou (anterior ao horário do disparo)
  são puladas, evitando confirmações fora de contexto.
- A mensagem é enviada uma única vez por consulta, e o histórico guarda o
  status de cada envio.

## Observações

- Para ativar, é preciso que a clínica tenha o **código de acesso** do
  Controle Odonto cadastrado nas integrações da empresa.
- A captura de tela desta página ainda não está disponível — o conteúdo
  textual está completo.