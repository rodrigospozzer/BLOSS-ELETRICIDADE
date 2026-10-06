# Arquitetura do Site — Bloss Eletricidade

Este arquivo é a SOURCE OF PROJECT TRUTH operacional do projeto BLOSS ELETRICIDADE.

Ele define:
- objetivo comercial;
- prioridade de conversão;
- público;
- serviços;
- hierarquia;
- ordem das seções;
- requisitos funcionais;
- restrições de conteúdo.

Ele NÃO substitui:
- `brief/corporate/perfil-corporativo.pdf`
- `brief/brand/manual-identidade.pdf`
- os mockups aprovados;
- `brief/design/implementation-spec.md`
- `brief/design/asset-map.md`

---

# 1. Fontes de verdade

## Verdade factual

Fonte:

`brief/corporate/perfil-corporativo.pdf`

Informações factuais sobre empresa, serviços, endereço, contatos, horários, avaliações, números, credenciais e demais dados devem vir desse documento.

Não preencher lacunas por inferência.

## Verdade da marca

Fonte:

`brief/brand/manual-identidade.pdf`

Define:
- identidade;
- cores;
- tipografia;
- fotografia;
- personalidade;
- direção visual.

## Verdade do projeto

Fontes:

`brief/project/arquitetura-site.md`
`brief/project/arquitetura-site.pdf`

Este `.md` é a versão operacional para agentes e desenvolvimento.

## Verdade visual

Fontes:

`brief/design/sections/desktop/approved-desktop.png`
`brief/design/sections/mobile/approved-mobile.png`

Os mockups aprovados são SOURCE OF VISUAL TRUTH.

## Verdade de implementação

Fontes:

`brief/design/implementation-spec.md`
`brief/design/asset-map.md`

---

# 2. Identificação

PROJECT_NAME:
Bloss Eletricidade

SITE_TYPE:
Landing Page

PROJECT_STATUS:
APPROVED_FOR_IMPLEMENTATION

STRUCTURE_MODE:
DEFAULT

COPY_MODE:
AUTO

---

# 3. Objetivo comercial

PRIMARY_GOAL:
Gerar solicitações de orçamento qualificadas, priorizando contato direto pelo WhatsApp.

PRIMARY_CTA:
Solicitar orçamento pelo WhatsApp

SECONDARY_CTA:
Ver serviços / projetos realizados

TARGET_AUDIENCE:
Clientes residenciais; empresas e condomínios; arquitetos, engenheiros, construtoras e responsáveis por obras na região atendida.

PRIMARY_SERVICE_OR_PRODUCT:
Instalação, manutenção e infraestrutura elétrica residencial, predial e comercial.

SECONDARY_SERVICES:
- Instalação de ar-condicionado Split
- Higienização / limpeza de ar-condicionado
- Manutenção de ar-condicionado
- Reinstalação de ar-condicionado

GEOGRAPHIC_FOCUS:
Nova Petrópolis / RS e região atendida conforme Perfil Corporativo.

---

# 4. Princípio de conversão

A página deve responder progressivamente:

1. Vocês fazem o que eu preciso?
2. Posso confiar?
3. Vocês atendem minha região?
4. Como entro em contato?

Fluxo narrativo:

ENTENDER
→ CONFIAR
→ ENCAIXAR
→ PROVAR
→ LOCALIZAR
→ DECIDIR

WhatsApp é o principal canal de conversão.

Fotografias reais devem funcionar como prova de capacidade operacional.

---

# 5. Estrutura Desktop aprovada

1. Header
2. Hero
3. Prova rápida / confiança
4. Serviços / soluções
5. Diferenciais reais
6. Projetos / portfólio
7. Avaliações / depoimentos
8. Localização / área atendida
9. FAQ factual
10. CTA final
11. Footer

A autoridade institucional está integrada principalmente à seção de diferenciais.

Não adicionar uma seção corporativa genérica no desktop se ela não estiver prevista no mockup aprovado.

---

# 6. Estrutura Mobile aprovada

O mockup mobile apresentado em três painéis representa UMA página contínua.

Ordem:

1. Header
2. Hero
3. Prova rápida / confiança
4. Serviços / soluções
5. Diferenciais reais
6. Projetos / portfólio
7. Avaliações / depoimentos
8. Localização / área atendida
9. Bloco de climatização
10. FAQ factual
11. CTA final
12. Autoridade / Sobre
13. Footer

Não forçar a mesma composição estrutural do desktop no mobile.

---

# 7. Seções obrigatórias

MANDATORY_SECTIONS:

- Header
- Hero
- Prova rápida / confiança
- Serviços / soluções
- Diferenciais reais
- Projetos / portfólio
- Avaliações / depoimentos
- Localização / área atendida
- Mapa
- FAQ factual
- CTA final
- Footer

MOBILE_ADDITIONAL_SECTIONS:

- Climatização
- Autoridade / Sobre

---

# 8. Header

OBJETIVO:
Orientação imediata e acesso à ação principal.

CONTEÚDO:
- Logo
- Início
- Serviços
- Projetos
- Sobre
- Avaliações
- Contato

CTA:
Solicitar orçamento

MOBILE:
Logo + WhatsApp + menu hamburger.

---

# 9. Hero

OBJETIVO:
Comunicar imediatamente serviço, região, competência e ação.

MENSAGEM:
Infraestrutura elétrica e climatização com execução profissional.

CONTEÚDO:
- Headline forte
- Apoio sobre elétrica e climatização
- Localização
- CTA WhatsApp
- CTA secundário quando previsto
- Provas rápidas
- Fotografia real

ASSET:
Fotografia real definida em `brief/design/asset-map.md`.

---

# 10. Prova rápida / confiança

OBJETIVO:
Reduzir risco percebido antes de aprofundar os serviços.

CONTEÚDO:
- Nota Google
- Quantidade de avaliações validada
- Horários publicados
- Nova Petrópolis / região
- Operação local

IMPORTANTE:
Revalidar dados variáveis antes do deploy.

---

# 11. Serviços / soluções

OBJETIVO:
Permitir identificação rápida com a necessidade do visitante.

SERVIÇOS DO LAYOUT:

1. Instalações elétricas
2. Ar-condicionado Split
3. Manutenção e reparos
4. Projetos e consultoria

Não ampliar o catálogo sem suporte factual.

Fotografias conforme:

`brief/design/asset-map.md`

---

# 12. Diferenciais reais

OBJETIVO:
Transformar padrões percebidos nas avaliações públicas em argumentos de confiança.

ATRIBUTOS:
- organização;
- cuidado;
- qualidade de execução;
- atendimento;
- domínio técnico;
- confiança.

Evitar transformar essas características em garantias absolutas não documentadas.

---

# 13. Projetos / portfólio

OBJETIVO:
Mostrar competência por meio de trabalhos reais.

PROJETOS DO LAYOUT:

1. Infraestrutura elétrica
2. Instalação de ar-condicionado
3. Quadro / caixa e infraestrutura
4. Infraestrutura externa

Fotografias:

`brief/design/asset-map.md`

Não utilizar stock.

---

# 14. Avaliações / depoimentos

OBJETIVO:
Reduzir objeções com prova social real.

CONTEÚDO:
Avaliações públicas reais disponíveis no Perfil Corporativo.

REGRAS:
- não inventar depoimentos;
- não inventar nomes;
- não inventar fotos de avaliadores;
- atualizar quantidade de avaliações antes da publicação.

---

# 15. Localização / área atendida

LOCATION_SECTION:
YES

MAP:
YES

CONTEÚDO:
- Nova Petrópolis / RS
- endereço confirmado;
- região atendida;
- mapa;
- link para rota.

Fonte factual:

`brief/corporate/perfil-corporativo.pdf`

---

# 16. Bloco de climatização — Mobile

MOBILE_ONLY:
YES

OBJETIVO:
Dar ênfase específica aos serviços de climatização no fluxo mobile.

CONTEÚDO:
- instalação;
- higienização;
- manutenção / reinstalação;
- CTA de orçamento.

Fotografia:

`brief/design/asset-map.md`

Não criar versão desktop independente desta seção sem nova aprovação visual.

---

# 17. FAQ

FAQ:
YES

OBJETIVO:
Responder dúvidas de decisão com informação factual.

TÓPICOS:
- serviços;
- manutenção / higienização;
- região atendida;
- instalação de Split;
- orçamento;
- empresas e condomínios.

Não inventar:
- garantias;
- prazos;
- políticas;
- formas de pagamento.

---

# 18. CTA final

OBJETIVO:
Encerrar a narrativa com ação direta.

PRIMARY_CTA:
Solicitar orçamento pelo WhatsApp

SECONDARY_CTA:
Ver nossos serviços

Fotografia de fundo conforme:

`brief/design/asset-map.md`

---

# 19. Autoridade / Sobre

DESKTOP:
Integrada principalmente à seção de diferenciais.

MOBILE:
Seção própria após o CTA final, conforme mockup aprovado.

Fotografia:
Prédio + veículos Bloss conforme `asset-map.md`.

IMPORTANTE:
Claims sobre tempo de atuação devem estar validados antes da publicação.

---

# 20. Footer

CONTEÚDO:
- Logo
- descrição curta
- links de navegação
- Instagram
- WhatsApp
- localização
- copyright

No mobile:
- navegação vertical;
- CTA WhatsApp destacado.

---

# 21. Elementos opcionais / funcionais

WHATSAPP_FLOATING:
YES

FAQ:
YES

GALLERY:
YES

BEFORE_AFTER:
NO

MAP:
YES

PRICING:
NO

FORM:
NO

LOCATION_SECTION:
YES

PROCESS_SECTION:
NO

Processo / Como funciona só poderá ser incluído após validação de um processo institucional oficial.

---

# 22. Não incluir

DO_NOT_INCLUDE:

- preços sem confirmação;
- tabela de pricing;
- garantia não confirmada;
- prazo padrão não confirmado;
- emergência 24h como promessa sem validação;
- “melhor eletricista”;
- “mais barato”;
- superlativos não comprovados;
- cidades não confirmadas;
- clientes ou parceiros sem autorização;
- certificações não verificadas;
- imagens de banco;
- imagens geradas por IA;
- antes/depois sem pares reais;
- formulário como canal principal;
- dashboards;
- visual SaaS;
- glassmorphism;
- neon;
- elementos futuristas artificiais.

---

# 23. Conteúdo ainda sujeito a validação

CONTENT_MISSING_OR_VALIDATION:

- e-mail corporativo;
- lista exata de cidades atendidas;
- catálogo completo de serviços;
- garantias;
- formas de pagamento;
- processo oficial de atendimento;
- prazo médio de orçamento;
- prazo médio de execução;
- validação documental de credenciais;
- comprovação final de claims de tempo de atuação;
- equipe e funções;
- cases nomeados/autorizados;
- números dinâmicos de avaliações.

A ausência desses dados não autoriza inferência.

---

# 24. Requisitos especiais

SPECIAL_REQUIREMENTS:

- WhatsApp como canal principal de conversão;
- WhatsApp flutuante;
- mapa;
- fotografias reais;
- fotografia como evidência de execução;
- direção Industrial Premium;
- influência Swiss / International;
- amarelo como assinatura e não como excesso;
- desktop e mobile devem seguir os mockups aprovados;
- não transformar mobile em desktop empilhado;
- usar `implementation-spec.md`;
- usar `asset-map.md`;
- PageSpeed/Lighthouse mobile de produção >= 90 em Performance;
- Accessibility / Best Practices / SEO idealmente >= 95;
- validar em URL publicada;
- não sacrificar fidelidade visual para atingir performance.

---

# 25. Sources of Truth

FACTUAL:
`brief/corporate/perfil-corporativo.pdf`

BRAND:
`brief/brand/manual-identidade.pdf`

PROJECT:
`brief/project/arquitetura-site.md`

PROJECT_REFERENCE_PDF:
`brief/project/arquitetura-site.pdf`

VISUAL_DESKTOP:
`brief/design/sections/desktop/approved-desktop.png`

VISUAL_MOBILE:
`brief/design/sections/mobile/approved-mobile.png`

IMPLEMENTATION:
`brief/design/implementation-spec.md`

ASSETS:
`brief/design/asset-map.md`

TEMPLATE_REFERENCE:
`brief/project/arquitetura-site.template.md`

---

# 26. Regra final de implementação

A implementação não é uma nova etapa de design.

Os mockups aprovados definem a composição visual.

`implementation-spec.md` define como traduzi-la tecnicamente.

`asset-map.md` define exatamente quais imagens utilizar.

Se houver conflito:

1. fatos → Perfil Corporativo;
2. marca → Manual de Identidade;
3. estrutura → Arquitetura;
4. composição → Mockups aprovados;
5. medidas / comportamento → implementation-spec.md;
6. escolha de imagens → asset-map.md.

Não redesenhar durante o desenvolvimento.
