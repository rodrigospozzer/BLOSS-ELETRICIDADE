# Arquitetura do Site — Template Z-Agent

Este documento define a estratégia, conteúdo e arquitetura específica do projeto.

Ele NÃO define a identidade visual final.
Ele NÃO substitui o Perfil Corporativo.
Ele NÃO substitui o Manual de Identidade Visual.
Ele NÃO é um mockup.

---

# 1. Regras de fonte

## Verdade factual

Informações sobre empresa, serviços, endereço, contatos, horários, avaliações, números, garantias e outros fatos devem vir de:

brief/corporate/perfil-corporativo.pdf

Nunca inventar informações para preencher lacunas.

## Verdade da marca

Cores, tipografia, estilo, personalidade e direção visual devem vir de:

brief/brand/manual-identidade.pdf

## Verdade do projeto

A estrutura, objetivo, prioridade comercial e textos específicos deste site são definidos neste documento.

## Verdade visual

Depois da aprovação dos mockups, a composição visual final será definida por:

brief/design/approved-desktop.png
brief/design/approved-mobile.png

---

# 2. Identificação do projeto

PROJECT_NAME:

SITE_TYPE:
Landing Page

PROJECT_STATUS:
DRAFT

---

# 3. Objetivo comercial

PRIMARY_GOAL:

Exemplos:
- gerar pedidos de orçamento;
- gerar agendamentos;
- apresentar serviço premium;
- captar leads;
- vender produto;
- gerar visitas físicas.

PRIMARY_CTA:

SECONDARY_CTA:

TARGET_AUDIENCE:

PRIMARY_SERVICE_OR_PRODUCT:

SECONDARY_SERVICES:

GEOGRAPHIC_FOCUS:

---

# 4. Modo de estrutura

STRUCTURE_MODE:
DEFAULT

Valores permitidos:

DEFAULT
CUSTOM

## DEFAULT

Quando STRUCTURE_MODE = DEFAULT:

utilizar a arquitetura padrão Z-Agent descrita neste documento como ponto de partida.

Ela define conteúdo e narrativa.

Ela NÃO define layout visual.

A ordem pode ser refinada quando houver justificativa estratégica.

Se uma seção não possuir conteúdo factual suficiente ou não fizer sentido para o negócio, ela poderá ser omitida.

## CUSTOM

Quando STRUCTURE_MODE = CUSTOM:

a seção "Estrutura Customizada" abaixo passa a definir a ordem obrigatória da página.

Não substituir a estrutura fornecida por uma estrutura padrão.

---

# 5. Modo de copy

COPY_MODE:
AUTO

Valores permitidos:

AUTO
PROVIDED
MIXED

## AUTO

Criar a copy usando somente informações suportadas pelo Perfil Corporativo.

É permitido melhorar:

- clareza;
- persuasão;
- escaneabilidade;
- hierarquia;
- linguagem comercial.

É proibido inventar fatos.

## PROVIDED

Preservar os textos fornecidos neste documento.

Não reescrever sem solicitação.

## MIXED

Textos marcados como APPROVED devem ser preservados.

Os demais podem ser desenvolvidos a partir do Perfil Corporativo.

---

# 6. Arquitetura padrão Z-Agent

Quando STRUCTURE_MODE = DEFAULT, considerar esta arquitetura completa:

1. Header
2. Hero
3. Prova rápida / confiança
4. Serviços / soluções
5. Diferenciais / benefícios
6. Sobre / autoridade
7. Processo / como funciona
8. Projetos / portfólio / provas visuais
9. Resultados / antes e depois, quando aplicável
10. Avaliações / depoimentos
11. Localização / área atendida, quando relevante
12. FAQ
13. CTA final
14. Footer
15. WhatsApp flutuante, quando aplicável

IMPORTANTE:

Esta lista NÃO é um template visual.

Não significa:

Hero
→ quatro cards
→ três cards
→ depoimentos
→ CTA.

Cada projeto deverá receber uma composição visual própria na etapa de mockup.

---

# 7. Estrutura Customizada

Preencher somente quando:

STRUCTURE_MODE = CUSTOM

SITE_STRUCTURE:

1.
2.
3.
4.
5.
6.
7.
8.

---

# 8. Seções obrigatórias

MANDATORY_SECTIONS:

-

---

# 9. Seções opcionais

OPTIONAL_SECTIONS:

-

---

# 10. Não incluir

DO_NOT_INCLUDE:

-

---

# 11. Conteúdo específico fornecido

Preencher quando COPY_MODE = PROVIDED ou MIXED.

## Hero

EYEBROW:

HEADLINE:

SUBHEADLINE:

PRIMARY_CTA_TEXT:

SECONDARY_CTA_TEXT:

COPY_STATUS:
AUTO | APPROVED

---

## Sobre

TITLE:

TEXT:

COPY_STATUS:
AUTO | APPROVED

---

## Serviços

SERVICE_01:

TITLE:

TEXT:

COPY_STATUS:
AUTO | APPROVED

SERVICE_02:

TITLE:

TEXT:

COPY_STATUS:
AUTO | APPROVED

Adicionar quantos forem necessários.

---

## Processo

TITLE:

STEPS:

COPY_STATUS:
AUTO | APPROVED

---

## Projetos / Galeria

TITLE:

TEXT:

COPY_STATUS:
AUTO | APPROVED

---

## Avaliações

Não criar avaliações.

Usar apenas avaliações reais do Perfil Corporativo.

---

## FAQ

QUESTIONS_PROVIDED:

-

COPY_STATUS:
AUTO | APPROVED

---

## CTA Final

TITLE:

TEXT:

CTA_TEXT:

COPY_STATUS:
AUTO | APPROVED

---

# 12. Elementos funcionais

WHATSAPP_FLOATING:
YES

LOCATION_SECTION:
AUTO

MAP:
AUTO

FAQ:
AUTO

GALLERY:
AUTO

BEFORE_AFTER:
AUTO

PRICING:
NO

CONTACT_FORM:
NO

BOOKING:
NO

SOCIAL_LINKS:
YES

---

# 13. Header

HEADER_MODE:
AUTO

MENU_ITEMS:
AUTO

HEADER_PRIMARY_CTA:
AUTO

SPECIAL_REQUIREMENTS:

-

---

# 14. Footer

Exibir quando disponíveis:

- logo;
- telefone;
- WhatsApp;
- endereço;
- redes sociais;
- horários;
- copyright.

Incluir obrigatoriamente:

Site desenvolvido por Z-Agent

Link:

https://site.z-agent.com.br

---

# 15. SEO

SEO_MODE:
AUTO

PRIMARY_SEARCH_INTENT:

PRIMARY_LOCATION:

SPECIAL_KEYWORDS:

-

A estratégia de SEO deve utilizar somente serviços e localidades realmente suportados pelo Perfil Corporativo.

---

# 16. Assets prioritários

Caso alguma fotografia ou elemento precise obrigatoriamente aparecer:

MANDATORY_ASSETS:

-

PREFERRED_ASSETS:

-

DO_NOT_USE_ASSETS:

-

A escolha visual definitiva dos assets será documentada posteriormente em:

brief/design/asset-map.md

---

# 17. Requisitos especiais

SPECIAL_REQUIREMENTS:

-

Exemplos:

- destacar determinado serviço;
- mostrar mapa;
- priorizar atendimento via WhatsApp;
- apresentar antes/depois;
- não mostrar preços;
- destacar determinada unidade;
- incluir vídeo;
- destacar determinada avaliação.

---

# 18. Prioridade narrativa

Definir quando necessário:

PRIMARY_MESSAGE:

SECONDARY_MESSAGE:

TERTIARY_MESSAGE:

A página deve deixar clara a mensagem principal antes das informações secundárias.

---

# 19. Conteúdo ausente

CONTENT_MISSING:

-

Nunca preencher lacunas factuais por inferência.

---

# 20. Resumo operacional

PROJECT_NAME:

STRUCTURE_MODE:

COPY_MODE:

PRIMARY_GOAL:

PRIMARY_CTA:

SECONDARY_CTA:

TARGET_AUDIENCE:

PRIMARY_SERVICE_OR_PRODUCT:

MANDATORY_SECTIONS:

DO_NOT_INCLUDE:

SPECIAL_REQUIREMENTS:

CONTENT_MISSING:

---

# Regra final

Este documento define O QUE o site precisa comunicar e QUAL jornada deve existir.

Ele não define COMO o site deve parecer.

A originalidade visual será criada posteriormente usando:

Manual de Identidade
+
Perfil Corporativo
+
Arquitetura do Site
+
Assets reais

para produzir um mockup exclusivo para este projeto.
