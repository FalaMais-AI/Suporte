---
sidebar_position: 8
title: Integração On-Premise para parceiros
description: Como a Sócios AI acompanha clientes, limites e operações On-Premise pela API Super Admin.
---

# Integração On-Premise para parceiros

A API Super Admin permite que um parceiro autorizado administre clientes
On-Premise sem acessar o banco do cliente e sem abrir portas de entrada no
servidor dele. O parceiro usa uma credencial de servidor, acompanha as
operações por status ou webhook e deixa QR Code e credenciais de WhatsApp no
ambiente local.

## O que pode ser administrado

- clientes, planos, limites e funcionalidades;
- instalações, contas e políticas de release;
- usuários individuais;
- canais WhatsApp UAZAPI e API Oficial/Cloud API;
- códigos de ativação, operações e auditoria.

Os planos e preços pertencem ao parceiro. A plataforma apenas valida os
limites técnicos que a versão instalada suporta.

## Segurança

O token deve ficar em um cofre e ser usado somente pelo backend do parceiro.
Toda alteração usa uma chave de idempotência. Bloqueios, remoções,
cancelamentos e alterações de acesso também precisam de um motivo. Nunca
coloque tokens, senhas, QR Codes ou credenciais em logs ou respostas.

O parceiro deve tratar `PENDING`, `SUCCEEDED` e `FAILED` como estados distintos.
Uma resposta `202` significa que o comando foi aceito, não que a alteração já
foi aplicada.

## Sincronização com o cliente

A instalação faz polling autenticado por mTLS para buscar o estado desejado e
os comandos pendentes. Depois de aplicar uma revisão, ela envia um acknowledge.
Se o acknowledge falhar, o comando é reenviado sem repetir a operação local.

## Documentação de integração

O backend da Sócios AI deve seguir o contrato OpenAPI fornecido pela FalaMais.
Ele inclui exemplos de rotas, payloads, paginação, webhooks assinados,
tratamento de QR Code e o checklist de aceite.

> A captura de tela do painel será adicionada quando houver um ambiente de
> homologação autenticado disponível para captura.

