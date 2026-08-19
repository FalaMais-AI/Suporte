---
sidebar_position: 24
title: "Primeiro Super Admin local"
description: "Crie com segurança o primeiro acesso administrativo de uma instalação FalaMais On-Premise."
---

# Primeiro Super Admin local

Depois de instalar ou atualizar uma edição FalaMais On-Premise, use o próprio
menu do instalador para criar o primeiro acesso administrativo da plataforma
local. Esta conta é diferente do acesso ao painel de parceiros.

## Antes de começar

Confirme que a atualização terminou com a mensagem **Atualização aplicada e
validada**. Essa confirmação só aparece quando a API local está pronta.

## Criar o primeiro acesso

1. Abra novamente o menu do instalador no servidor On-Premise.
2. Escolha **Criar Super Admin**.
3. Informe o nome, o e-mail e uma senha forte.
4. Confirme a senha.

Em caso de sucesso, o instalador mostra apenas o nome e o e-mail criados. A
senha nunca é exibida ou salva no terminal.

## Regras importantes

- Existe apenas uma criação inicial por instalação.
- Se já houver um Super Admin, o instalador informa o conflito e não cria uma
  conta adicional.
- Se a API ainda não estiver disponível, execute **Atualizar** e aguarde a
  validação concluir antes de tentar novamente.
- Não compartilhe a senha pelo suporte ou por mensagens. Se for necessário
  trocar o acesso depois, use o fluxo de administração da própria plataforma.

## Quando precisar de ajuda

Use a opção **Diagnóstico** do instalador se a atualização não for validada ou
se a API continuar indisponível. Envie ao suporte somente as mensagens de erro
sem senhas, tokens ou outros dados de acesso.
