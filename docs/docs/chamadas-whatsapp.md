---
sidebar_position: 7
title: "Chamadas pelo WhatsApp"
description: "Inicie, receba e acompanhe chamadas do WhatsApp no FalaMais.AI usando uma linha UAZAPI habilitada."
---

# Chamadas pelo WhatsApp

Contas habilitadas podem iniciar e receber chamadas sem sair do FalaMais.AI. A
telefonia direta funciona nas linhas **UAZAPI** liberadas para a empresa. Não é
necessário acessar a Wavoip, copiar tokens ou configurar webhooks manualmente.

![Configuração e histórico de chamadas no FalaMais.AI](chamadas-whatsapp-v1-35.png)

## Antes de começar

Você precisa de:

- uma linha UAZAPI conectada e com número identificado no FalaMais.AI;
- a funcionalidade de chamadas liberada para a empresa pela equipe FalaMais.AI;
- a permissão **Gerenciar chamadas** para ativar a linha;
- as permissões de chamada adequadas para cada função da equipe.

A liberação da funcionalidade é independente do plano contratado. Se a opção
**Chamadas** não aparecer, entre em contato com o suporte para confirmar a
ativação da empresa.

## Ativar chamadas em uma linha

1. Acesse **Configurações → Empresa → Canais**.
2. Localize a linha UAZAPI que será usada.
3. Na seção **Chamadas**, clique em **Ativar**.
4. Confirme o nome da linha e clique em **Gerar QR Code**.
5. No WhatsApp desse mesmo número, abra **Aparelhos conectados → Conectar
   aparelho** e leia o QR Code exibido no FalaMais.AI.
6. Aguarde a validação automática do número e o status **Pronta para chamar**.

O QR Code e o estado da conexão são atualizados automaticamente. Se a leitura
for feita com outro número, a tela informa a divergência e mantém a linha
bloqueada até que o aparelho correto seja conectado.

### Estados da linha

- **Aguardando a leitura do QR Code** — o dispositivo foi preparado e ainda
  precisa ser conectado pelo WhatsApp.
- **Validando o número conectado** — o FalaMais.AI está confirmando que o
  aparelho corresponde à linha UAZAPI.
- **Pronta para chamar** — a linha foi validada e pode iniciar e receber
  ligações.
- **Aguardando liberação** — o dispositivo ainda está sendo preparado; nenhuma
  ação em outro painel é necessária.
- **Chamadas desativadas nesta linha** — novas ligações estão bloqueadas, mas as
  mensagens do canal continuam funcionando.

## Fazer uma chamada

Você pode iniciar a ligação pelo ícone de telefone:

- no cabeçalho de uma conversa em **Mensagens**; ou
- nos detalhes de um contato em **Contatos**.

Antes de chamar, o FalaMais.AI mostra o contato e a linha de saída para
confirmação. Durante a conversa, a barra de chamada permanece visível, com os
controles para silenciar o microfone e encerrar a ligação.

### Contatos atendidos pela API Oficial

Na API Oficial, o ícone de telefone não inicia uma ligação direta. O FalaMais.AI
envia primeiro o template aprovado de solicitação de permissão para chamada. A
mensagem segue as regras e a janela de atendimento definidas pela Meta.

## Receber uma chamada

Quando uma ligação chega, o FalaMais.AI mostra o contato, a linha e as ações
**Atender** e **Recusar**. Se o sistema estiver aberto em várias abas, somente
uma delas assume a chamada, evitando respostas duplicadas.

Permita o uso do microfone quando o navegador solicitar. Se o áudio não ficar
disponível, revise a permissão do site nas configurações do navegador e tente
novamente.

## Consultar registros, gravações e logs

Acesse **Configurações → Empresa → Chamadas**. Essa área reúne:

- **Registros** — chamadas recebidas e realizadas, com contato, linha,
  atendente, resultado, duração e data;
- **Gravações** — áudios autorizados e ainda dentro do prazo de retenção;
- **Logs** — diagnóstico técnico das linhas para pessoas com permissão de
  gerenciamento.

As chamadas também aparecem no **Histórico de Atividades** do contato, junto
das mensagens, negociações e demais interações comerciais.

## Habilitar gravações autorizadas

1. Acesse **Configurações → Empresa → Canais**.
2. Na linha já conectada, abra **Chamadas → Configurar**.
3. Ative **Guardar gravações**.
4. Defina o período de retenção e o aviso que será apresentado ao participante.
5. Clique em **Salvar**.

Os áudios são mantidos de forma privada pelo período configurado e ficam
disponíveis somente para pessoas autorizadas. Ao fim da retenção, a gravação é
removida automaticamente.

## Permissões da equipe

Em **Configurações → Empresa → Usuários → Funções**, ajuste conforme a
responsabilidade de cada perfil:

- **Realizar chamadas**;
- **Atender chamadas**;
- **Ver chamadas próprias**;
- **Ver chamadas da equipe**;
- **Gerenciar chamadas**, para ativar linhas, consultar logs e configurar
  gravações.

Por segurança, mantenha **Gerenciar chamadas** somente com administradores ou
responsáveis técnicos.

## Desativar chamadas em uma linha

Volte a **Configurações → Empresa → Canais → Chamadas → Configurar** e escolha
**Desativar**. O dispositivo gerenciado é cancelado e novas ligações deixam de
funcionar, sem interromper as mensagens do canal.

Veja também: [Canais — WhatsApp](configuracao/canais.md) e
[Funções e permissões](configuracao/usuarios/funcao.md).
