---
sidebar_position: 12
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

## Primeiro acesso administrativo local

Depois de atualizar a instalação, execute novamente o instalador no servidor e
escolha **Criar Super Admin**. Informe o nome, e-mail e uma senha forte para o
primeiro acesso administrativo da plataforma local.

A senha é digitada sem aparecer na tela e a confirmação mostra apenas o nome e
o e-mail. Essa ação só funciona quando ainda não existe outro Super Admin na
instalação; para alterar um acesso já criado, use os recursos administrativos
da própria plataforma.

Aguarde a mensagem **Atualização aplicada e validada** antes de criar esse
primeiro acesso. Essa confirmação é exibida apenas quando a API local está
pronta. Se a atualização não for validada ou a API estiver indisponível, use a
opção **Diagnóstico** e envie ao suporte somente o erro, sem senhas, tokens ou
outras credenciais.

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

## Contato comercial por empresa

No Super Admin, selecione a empresa e informe o telefone comercial com código
do país e DDD. Nas configurações gerais, defina o contato global para empresas
sem número próprio. O número da empresa tem prioridade. Sem nenhum dos dois,
o botão de WhatsApp comercial não aparece. Essa personalização é exclusiva
das instalações On-Premise.

## Armazenamento S3 sem reinstalar

A partir da versão 1.71.0, com aplicação e instalador atualizados, execute
`sudo falamais-onprem armazenamento` no servidor ou escolha
**Variáveis → Armazenamento S3** no menu.

Preencha bucket, região, endpoint (opcional para AWS), access key, secret key,
URL pública/CDN e path-style. Cache e validade dos links são opcionais. Enter
mantém o valor atual; `-` limpa um campo opcional. As chaves ficam ocultas.

O sistema testa gravação, leitura e exclusão no bucket antes de pedir a
confirmação. Depois, guarda um backup da configuração e reinicia os serviços
da aplicação. Se a validação falhar, restaura a configuração anterior.

Os arquivos antigos continuam no armazenamento local; os novos usam S3.
Mantenha o volume local e seus backups. Essa operação não transfere arquivos
antigos automaticamente e não reinstala a aplicação.

Para trocar de bucket ou endpoint de um S3 existente, interrompa novos uploads
e copie os objetos mantendo as mesmas chaves. Confirme com **COPIADO** apenas
quando terminar. Preserve o bucket e a URL pública antigos para links já
salvos. O menu não faz essa cópia por você.

## Configurações gerais

Na seleção de modelos de IA, o nome selecionado aparece separado dos recursos,
das descrições e dos preços das opções. As configurações de roteamento e de
escalonamento permanecem disponíveis em telas menores.
