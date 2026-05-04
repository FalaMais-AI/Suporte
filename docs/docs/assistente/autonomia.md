---
sidebar_position: 3
title: "Autonomia"
description: "A seção **Nível de Autonomia** define o quanto a IA pode agir automaticamente dentro do sistema."
---

# Autonomia

A seção **Nível de Autonomia** define o quanto a IA pode agir automaticamente dentro do sistema.

Essa configuração impacta diretamente:

- Ações no CRM
- Alterações em negociações
- Atualizações de contato
- Execuções automáticas estratégicas

Recomendação geral:
Começar em modo **Híbrido** e liberar autonomia gradualmente.

![Tela de configuração do nível de autonomia](img/image-2.png)

## Básico

O modo **Básico** é o nível mais restritivo de autonomia.

### O que a IA faz no modo Básico?

- Responde mensagens automaticamente.
- Orienta o cliente.
- Esclarece dúvidas.
- Mantém a conversa ativa.

### O que a IA NÃO pode fazer?

- Não cria negociações.
- Não move etapas de funil.
- Não atualiza registros.
- Não altera dados no CRM.
- Não executa ações internas.

### Quando usar?

- Início da implementação.
- Testes controlados.
- Operações que exigem validação humana constante.
- Empresas com baixa maturidade em automação.

É o modo ideal para validar comportamento sem risco operacional.

## Modo Híbrido

Permite selecionar exatamente quais ações a IA pode executar.

Mais seguro e recomendado para início de operação.

## Ações que a IA pode executar

Entre as opções:

- Adicionar Nota Interna
- Atualizar Perfil do Contato
- Gerenciar Tags
- Adicionar Nota na Negociação
- Ler Notas da Negociação
- Criar Negociação
- Atualizar Negociação
- Mover de Estágio
- Marcar como Qualificado
- Agendar Follow-up
- Criar Agendamento (rascunho)
- Criar Funil
- Criar Etapa do Funil
- Fechar Negociação como Ganho
- Fechar Negociação como Perdida
- Pausar Atendimento
- Notificar Humano
- Disparar Automação
- Criar Agendamento (confirmado)

Cada ação pode ser ativada ou desativada individualmente.

## Controle Total

A IA pode executar qualquer ação automaticamente.

Recomendado apenas quando:

- O fluxo já está validado.
- A operação é estável.
- Existe monitoramento constante.

Requer revisão periódica.

## Direcionamento por time/cargo

No modo Híbrido, é possível restringir quais ações a IA executa com base no time ou cargo do atendente responsável pela conversa.

Como funciona:

- Quando o prompt autoriza uma ação e a conversa pertence a um atendente do time configurado, a IA pode executar normalmente.
- Se a conversa for de um time diferente, a ação é bloqueada.

Isso garante que a IA aja de acordo com o perfil de cada equipe — sem conversas rotativas ou ações fora do contexto certo.

:::tip[Exemplo]
O time comercial pode ter autonomia para criar negociações, enquanto o time de suporte não tem essa permissão.
:::

## Copiloto Interno

A seção **Copiloto Interno** controla como a IA lida com agendamentos automáticos.

:::warning[Importante]
Não altera a autonomia do WhatsApp.
Afeta apenas comportamento interno relacionado a agenda.
:::

![Configurações do Copiloto Interno](img/image-3.png)

### Objetivo do Copiloto

Permitir que a IA:

- Crie agendamentos automaticamente.
- Confirme horários.
- Bloqueie agendas.

### Rascunho (Recomendado)

O Copiloto cria o agendamento como **DRAFT (rascunho)**.

#### Como funciona:

- A IA sugere o horário.
- O sistema cria um agendamento pendente.
- Um humano revisa e confirma manualmente.

#### Vantagens

- Reduz risco.
- Mantém controle humano.
- Ideal para fase inicial de implementação.

### Confirmar Automaticamente

O Copiloto confirma e bloqueia horários automaticamente.

#### Como funciona:

- A IA agenda.
- O horário é confirmado.
- A agenda é bloqueada sem revisão humana.

Alto risco operacional.

Use apenas quando:

- O fluxo de qualificação é extremamente confiável.
- A operação já está validada.
- Existe monitoramento ativo.

## Execução Segura

Mesmo que uma ação esteja autorizada no prompt, a IA ainda passa por várias verificações antes de executar qualquer coisa.

Para uma ação ser executada, é necessário que:

1. O prompt mencione a funcionalidade (via `@` ou texto direto)
2. A intenção do cliente naquele momento justifique a ação
3. O usuário responsável tenha permissão para isso
4. O plano contratado suporte a funcionalidade
5. As políticas internas do sistema permitam a execução

Se qualquer uma dessas condições não for atendida, a ação é bloqueada — e o registro aparece em **Decisões da IA** para consulta.

Isso existe para garantir que a IA não tome ações inesperadas mesmo em ambientes com alta autonomia.

## Análise de Cobertura

Após salvar o prompt, o sistema analisa automaticamente quais funcionalidades estão cobertas pelo texto.

Essa análise mostra:

- Quais ações a IA está autorizada a executar com base no conteúdo do prompt
- Se alguma funcionalidade está habilitada na autonomia mas não está mencionada no prompt

Útil para identificar lacunas entre o que está configurado e o que o prompt realmente instrui a IA a fazer.

:::tip[Dica]
Sempre salve o prompt antes de verificar a análise de cobertura, pois ela é gerada com base na versão mais recente.
:::

## Alerta de Risco

Ao habilitar confirmação automática:

A IA poderá confirmar eventos sem revisão humana.

Recomendado apenas quando o processo estiver estável e previsível.
