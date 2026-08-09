---
sidebar_position: 8
title: "FalaMais On-Premise"
description: "Como funciona a edição FalaMais On-Premise, sua ativação e as atualizações verificadas."
---

# FalaMais On-Premise

O FalaMais On-Premise é a edição para empresas que precisam manter a operação
do FalaMais em uma infraestrutura própria. Os dados do atendimento, contatos,
conversas e credenciais continuam no ambiente da organização.

## Antes de instalar

A instalação é destinada ao administrador técnico responsável pelo servidor.
Ela é entregue com um código de ativação de uso único e é compatível com
Ubuntu 24.04 em servidor x86_64.

Com o código em mãos, o administrador executa o instalador fornecido pela
FalaMais. O menu orienta a configuração de domínio, certificado TLS, banco de
dados, e-mail, armazenamento, canal de WhatsApp e recursos de IA.

:::tip
Guarde o código de ativação em local seguro. Ele é usado apenas na primeira
instalação e não deve ser compartilhado em grupos ou chamados públicos.
:::

## Ativação e privacidade

Quando uma nova conta é criada na edição On-Premise, ela recebe um identificador
exclusivo. Esse identificador permite que a FalaMais acompanhe a ativação e o
licenciamento da instalação.

O processo não transmite nomes de empresas, e-mails de administradores,
contatos, conversas, mensagens ou credenciais para o painel da FalaMais.

## Atualizações

Use a opção **Atualizar** do menu do instalador. Ela busca somente uma versão
publicada e verificada para sua instalação, valida a integridade antes de
aplicar a atualização e executa as verificações necessárias ao final.

Antes de atualizar, mantenha um backup recente do banco de dados. Se uma
verificação técnica falhar, os serviços retornam à versão anterior; os dados
nunca são restaurados automaticamente.

## Conexão com a FalaMais

A instalação confirma sua autorização periodicamente. Se ela ficar sem conexão
por até sete dias, a operação existente continua. Após esse prazo, novas
alterações e tarefas automáticas são suspensas até que a conexão seja
restabelecida, preservando os dados para recuperação.

## Precisa de ajuda?

Fale com o suporte FalaMais e informe o identificador da instalação mostrado na
opção **Status** do instalador. Não envie senhas, chaves de API, backups ou
arquivos de configuração em mensagens de suporte.
