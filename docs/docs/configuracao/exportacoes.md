---
sidebar_position: 18
title: "Exportação de conversas"
description: "Baixe as conversas de um período em planilhas, com um link enviado por e-mail."
---

# Exportação de conversas

A **Exportação de conversas** gera um arquivo com as mensagens e as ligações
de um período, para você guardar, analisar no Excel ou entregar a quem
precisa.

## Quem pode exportar

Somente **administradores da empresa** (usuários com permissão para
administrar a empresa e ver todos os dados) veem a opção. O e-mail do usuário
precisa estar verificado. Ela fica em
**Configurações → Exportações**, no grupo **Empresa**.

## Como pedir uma exportação

1. Escolha o **período**. Use os atalhos (últimos 30 dias, 90 dias ou 12
   meses) ou marque as datas no calendário. Cada pedido cobre até 12 meses.
2. Em **Linhas de WhatsApp**, escolha as linhas que entram. Deixe em branco
   para incluir todas.
3. Clique em **Exportar**.

O arquivo é preparado em segundo plano, sem deixar o sistema lento. Você pode
fechar a tela: quando ele ficar pronto, chega um **e-mail** no endereço do seu
usuário com o link para baixar.

:::info
A empresa faz uma exportação por vez e há um limite diário de pedidos. Se um
pedido falhar, use **Tentar novamente** na lista de exportações recentes.
:::

## Baixar o arquivo

- Use o link do e-mail ou o botão **Baixar** em **Exportações recentes**.
- O link só abre para administradores da empresa que estejam conectados.
- O arquivo fica disponível por **7 dias**. Depois disso ele é apagado e é
  preciso pedir uma nova exportação.

## O que vem no arquivo

O download é um arquivo `.zip` com:

| Arquivo | O que tem |
|---|---|
| `LEIA-ME.txt` | Período, fuso horário e a explicação de cada coluna |
| `mensagens.csv` | Uma linha por mensagem: conversa, contato, linha, data/hora, quem falou, tipo e texto |
| `conversas.csv` | Uma linha por conversa: contato, telefone, atendente, equipe, status, datas e totais do período |
| `ligacoes.csv` | Uma linha por ligação: contato, direção, resultado, duração, atendente e horários |

Na coluna **Quem**, você vê o nome do cliente, o nome do atendente seguido de
"(atendente)", **IA** ou **Sistema** (mensagens automáticas, disparos ou
enviadas pelo celular). Em grupos, aparece o nome do participante seguido
de "(participante)".

Áudios transcritos, imagens, vídeos, documentos e mensagens editadas aparecem
indicados no começo do texto, como `[áudio transcrito]`, `[imagem]` ou
`[editada]`.

As planilhas abrem direto no Excel com dois cliques. As datas estão no
formato dia/mês/ano hora:minuto, no fuso horário da empresa.

## O que não vem no arquivo

- Notas internas (sussurros).
- Arquivos de mídia, gravações de ligação e áudios (só o texto da transcrição).
- Mensagens apagadas.
- Conversas de contatos que você não tem permissão para ver.

:::warning
O arquivo tem dados pessoais dos seus clientes, como nomes, telefones e
mensagens. Compartilhe somente com quem precisa.
:::
