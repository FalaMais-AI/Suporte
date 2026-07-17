---
sidebar_position: 9
title: "Integrações"
description: "A aba Integrações permite conectar sistemas externos e configurar autenticações técnicas."
---

# Integrações

A aba Integrações permite conectar sistemas externos e configurar autenticações técnicas.

![alt text](img/image-12.png)

## API e Documentação

Exibe o endpoint base da API da plataforma.

Endpoint:
https://api2.falamais.ai/api

Ações disponíveis:
- Copiar endpoint
- Abrir documentação pública da API

Use esta seção para:
- Desenvolver integrações
- Testar endpoints
- Consultar exemplos de requisição

## WhatsApp

Permite gerenciar conexões e instâncias do WhatsApp.

Ação disponível:
Gerenciar conexões

Credenciais de providers são gerenciadas no admin global.

## Webhooks Operacionais

Permite cadastrar endpoints externos para receber eventos da plataforma.

Eventos disponíveis incluem:
- Contatos
- Funil
- Mensagens
- Automações

Informações exibidas:
- Nome
- URL
- Eventos inscritos
- Status
- Última entrega

Para criar um webhook:
Clique em Novo Webhook.

## Admed

Em **Ajustes → Integrações externas → Admed**, configure a confirmação automática
de consultas por WhatsApp. Depois de validar as credenciais e buscar as agendas,
o sistema lista as unidades e os profissionais encontrados.

Cada regra pode atender:

- **Todos os profissionais**;
- **Somente profissionais selecionados**;
- **Todos, exceto os profissionais selecionados**.

Nos dois últimos modos, marque um ou mais nomes retornados pela agenda Admed. O
filtro é aplicado tanto na prévia da regra quanto nos envios programados. Se um
profissional ainda não aparecer, use novamente a busca de unidades e agendas
antes de editar a regra.


## Chaves de API (API Keys)

Permite criar e gerenciar chaves para autenticar requisições externas.

Campos exibidos:
- Nome
- Prefixo
- Data de criação
- Último uso

Para gerar nova chave:
Clique em Gerar Nova Chave.

:::warning[Atenção:]
Guarde a chave com segurança.
Não compartilhe publicamente.
:::
