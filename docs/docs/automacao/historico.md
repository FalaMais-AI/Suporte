---
sidebar_position: 8
title: "Histórico"
---

# Histórico

A aba **Histórico** dentro do módulo **Automações** registra todos os follow-ups executados pelas regras automáticas do sistema.

Aqui você consegue ver o que foi enviado, quando foi enviado, qual foi o resultado e por qual motivo.

**Automações → Histórico**

![Histórico de Follow-ups](image.png)

---

## Visão Geral

O título da página é **Histórico de Follow-ups**, com a descrição:

> Histórico operacional com filtro por conversa, status, origem e motivo

O total de registros encontrados é exibido logo abaixo (ex: `1 itens`).

---

## Filtros Disponíveis

A página possui quatro formas de filtrar os registros:

### Filtrar por conversationId

Campo de texto para buscar registros de uma conversa específica usando o ID da conversa.

---

### Todos status

Filtra os registros pelo resultado do follow-up.

Opções disponíveis:
- Todos status
- **Enviado** → mensagem foi entregue com sucesso
- **Respondido** → cliente respondeu após o envio
- **Não enviado** → houve falha no envio
- **Não enviado (skipped)** → envio foi pulado por alguma condição da regra
- **Não enviado (IA)** → a IA decidiu não enviar a mensagem
- **Cancelado** → automação foi cancelada antes do envio
- **Pendente** → ainda aguardando o momento do envio

---

### Todas origens

Filtra os registros pela origem do follow-up.

Opções disponíveis:
- Todas origens
- **Regra** → disparado automaticamente por uma regra
- **Manual** → enviado manualmente por um usuário
- **IA** → originado por uma ação da inteligência artificial

---

### Buscar motivo

Campo de texto para buscar registros por um motivo específico (ex: motivo de cancelamento ou de não envio).

---

## Estrutura de Cada Registro

Cada item do histórico exibe:

### Nome da Regra
Qual regra de automação foi responsável pelo disparo.

Exemplo:
```
Reengajamento - Cliente (30min)
```

---

### Status do Follow-up

Aparece como uma etiqueta ao lado do nome da regra.

---

### Conteúdo da Mensagem

O texto que foi enviado automaticamente ao cliente.

Exemplo:
```
Oi! Você ainda está disponível para conversar?
```

---

### Descrição do Resultado

Uma linha explicando o que aconteceu após o envio.

Exemplos:
```
Cliente respondeu após o envio
```

---

### Data do Evento

Quando o follow-up foi executado.

Exemplos:
```
há 3 meses
há 1 dia
há cerca de 23 horas
```

---

## Sobre o Status "Não enviado (IA)"

Quando a IA decide bloquear o envio, **não é um erro** — é uma decisão intencional do sistema.

Isso acontece quando a automação está configurada para usar validação por IA antes do disparo, e a IA entende que o envio não é adequado naquele momento (ex: o cliente já havia respondido, a conversa já estava encerrada, etc.).

---

## Como Utilizar o Histórico

Use o histórico para:

- Confirmar se uma automação foi executada
- Ver o que foi enviado para um cliente específico
- Investigar por que um follow-up não foi enviado
- Auditar as interações automáticas por regra ou período
