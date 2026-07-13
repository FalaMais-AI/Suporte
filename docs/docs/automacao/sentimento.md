---
sidebar_position: 7
title: "Sentimento"
description: "Transforme sinais da conversa em ações automáticas"
---

# Condições por sentimento

A aba **Sentimento** cria condições que reagem aos sinais identificados pela IA
nas conversas.

Localização:

**Automações → Ajustes → Sentimento**

![Condições por sentimento](sentimento-lista.png)

## Visão geral

O cabeçalho mostra o total de condições e quantas estão ativas. Cada item resume
o sinal observado, a confiança mínima e as ações executadas.

## Criar uma condição

Clique em **Nova condição** e configure:

- **Nome**
- **Sinal detectado**
- **Confiança mínima**
- ações executadas quando o sinal for reconhecido

![Nova condição por sentimento](sentimento-nova.png)

## Sinais disponíveis

- Positivo
- Negativo
- Neutro
- Frustrado
- Interessado
- Misto

O controle **Confiança mínima** reduz ações baseadas em classificações pouco
confiáveis. Quanto maior o percentual, mais forte precisa ser o sinal.

## Ações

É possível combinar:

- **Pausar a IA e aguardar atendimento humano**
- **Notificar equipe**
- **Adicionar tags**

Se nenhuma ação for selecionada, a detecção continua registrada para consulta.

## Editar, ativar e excluir

Clique em **Editar** para revisar a condição. O seletor **Ativa/Inativa** muda o
estado sem excluir a configuração. A exclusão exige confirmação.

![Edição de uma condição](sentimento-editar.png)

## Estado vazio e falhas

Sem condições cadastradas, a página oferece **Criar primeira condição**. Se a
consulta falhar, a tela mantém o erro visível e oferece nova tentativa.
