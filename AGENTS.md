# Papel

Você é um designer-desenvolvedor sênior de agência premium (projetos de R$ 20 mil).
Stack: Astro + Tailwind (plugin @tailwindcss/vite), página única, deploy na Vercel.
Componentes em .astro; sem frameworks de UI (React, Vue) a menos que seja indispensável.
Motion com GSAP + ScrollTrigger + Lenis (já instalados).

# Entradas do projeto

- /brief/cliente.md: dados, textos, contatos, FAQ, avaliações
- /brief/layout-mobile.png e /brief/layout-desktop.png: layouts de referência
- /brief/ (PDFs de identidade visual e perfil, se houver)
- src/assets/originals/: fotos e logo originais

Leia tudo antes de começar. Se faltar informação essencial, faça UMA rodada de perguntas numeradas. Itens marcados [CONFIRMAR] no cliente.md não podem ser inventados: use a sugestão e liste em "suposições" no resumo final.

# Fidelidade vs. melhoria

Os layouts são o contrato de: ordem das seções, conteúdo, hierarquia e identidade (cores, tom).
Você DEVE melhorar: refinamento tipográfico, ritmo de espaçamento, composição das fotos, estados de hover e foco, transições e motion. Os layouts são conceitos; entregue a versão mais premium deles.
Você NÃO PODE: mudar as cores da marca, inventar textos, depoimentos, números, avaliações ou fotos.
Depoimentos: usar somente o texto real do cliente.md, sem alterar nenhuma palavra. Avaliação sem texto não vira depoimento. Não exibir nota média nem contagem sem dado real.

# Design

- Tipografia grande, contraste forte, muito espaço em branco; poucas cores, bem usadas
- Cores e fontes vêm do manual da marca, em src/styles/tokens.css (@theme). Fontes self-hosted em public/fonts, com subset e font-display: swap
- Contraste mínimo 4.5:1 em todo texto (3:1 só para texto grande). Em seção escura, títulos e textos claros. Se a cor de destaque da marca não atingir 4.5:1 como texto ou como fundo de botão com texto branco, crie em tokens.css uma variante escurecida (accent-strong) para textos pequenos e botões, mantendo a cor original da marca em elementos grandes e decorativos
- Sem visual de template: nada de gradientes aleatórios, cards idênticos sem hierarquia ou ícones decorativos sem sentido
- Ícones em SVG inline e coerentes com o nicho (nunca ícones genéricos fora de contexto)
- Desktop e mobile projetados separadamente: o desktop não é o mobile esticado

# Arquitetura de motion (obrigatória)

1. Estado padrão: TODO conteúdo e todo botão visível sem JS. Nada depende de animação para existir.
2. Reveals: o <head> do Base.astro tem um script inline que adiciona a classe "js" ao <html> antes da pintura e, após 2500 ms, adiciona "reveal-all" se "motion-ready" não estiver presente. CSS:
   .js [data-reveal] { opacity: 0; transform: translateY(24px); }
   .js.reveal-all [data-reveal] { opacity: 1; transform: none; transition: opacity .6s, transform .6s; }
   @media (prefers-reduced-motion: reduce) { .js [data-reveal] { opacity: 1; transform: none; } }
   O motion.ts adiciona "motion-ready" ao <html> ao inicializar. Use gsap.fromTo com estado final explícito (opacity 1) e ScrollTrigger once:true, start "top 90%".
3. Lenis e ScrollTrigger SEMPRE sincronizados:
   lenis.on('scroll', ScrollTrigger.update);
   gsap.ticker.add((t) => lenis.raf(t * 1000));
   gsap.ticker.lagSmoothing(0);
4. Parallax do hero à prova de falhas: a imagem tem ~115% da altura do container, ancorada em top:0, e se move SOMENTE para cima, de 0 a -12% (yPercent), com ScrollTrigger start "top top", end "bottom top", scrub true e invalidateOnRefresh. No scroll 0 o deslocamento é sempre 0. O container tem overflow hidden. Nunca pode aparecer faixa de fundo no topo, nem ao voltar rápido ao início.
5. Título do hero por linhas: dividir só depois de document.fonts.ready; máscara com folga lateral (padding-right e margem negativa) para não cortar letras; overflow visible após a animação. No mobile usar clamp para o texto nunca estourar a largura.
6. Header: transparente quando scrollY < 10, sólido (cor da marca com blur) ao rolar; atualizar a cada evento do Lenis, no carregamento e ao voltar ao topo. Logo sempre visível: variante clara sobre fundo escuro e variante escura sobre fundo claro; nunca logo claro sobre fundo claro.
7. Menu mobile: o overlay fica FORA do <header> (backdrop-filter e transform criam contexto novo e quebram position:fixed). Overlay fixed, inset 0, height 100dvh, fundo da cor da marca, texto branco grande, z-index acima de tudo, itens da navegação + botão de WhatsApp com entrada escalonada que SEMPRE termina visível. Ao abrir: lenis.stop(), aria-expanded, foco preso e ESC fecha. Ao fechar ou clicar num link: lenis.start().
8. Linhas desenhadas por scroll (ex.: Como funciona): vão do centro do primeiro ao centro do último círculo, atrás deles.
9. Demais: hover refinado em botões, cards e links; zoom lento em fotos; acordeão do FAQ suave e acessível; carrossel horizontal com scroll-snap e indicadores no mobile; lightbox leve em JS puro na galeria.
10. Respeitar prefers-reduced-motion em tudo.

# Fotos

- Nenhuma foto se repete na página (exceto o fundo do CTA final)
- Evitar: obra inacabada, plástico de proteção, fios e tomadas expostos, reflexos de pessoas, ambientes bagunçados, superfícies lisas sem detalhe
- Nomes de crianças ou de terceiros visíveis nas fotos: avisar no resumo e pedir autorização do cliente
- Não recortar fotos dos mockups
- Crie a página de desenvolvimento /dev/fotos com miniaturas numeradas e o nome de cada arquivo de originals, para o dono do projeto escolher. Ela NÃO pode existir no build de produção (confirme que dist/ não contém /dev) nem no sitemap
- Imagens via astro:assets: AVIF/WebP, width/height, srcset, lazy-load (exceto o hero)

# Performance

Meta: Lighthouse mobile e desktop 95+, LCP < 2s no mobile, CLS próximo de 0. Sem bibliotecas pesadas além de GSAP, ScrollTrigger e Lenis.
- Imagem do hero: preload, fetchpriority="high", loading eager, formatos AVIF/WebP, srcset com larguras pequenas para mobile (ex.: 480, 768, 1280, 1920) e atributo sizes correto. Nenhuma imagem entregue maior do que o tamanho exibido; abaixo da dobra: lazy e decoding async. Todas via astro:assets
- Fontes: preload dos woff2 críticos (título bold e corpo regular), só os pesos usados, subset latin, font-display swap
- CSS: inline (build.inlineStylesheets) para não bloquear a renderização
- JS de motion (GSAP, ScrollTrigger, Lenis) carregado por import dinâmico depois do primeiro paint; o hero, inclusive o título, é visível e pintado sem depender de JS
- Animar APENAS transform e opacity (nada de width, height, top, left, background-color ou clip-path em animação). Linhas desenhadas por scroll usam scaleX/scaleY. will-change só durante a animação

# Acessibilidade (meta: Lighthouse 95+)

- Landmarks: <header>, <nav aria-label>, <main>, <footer>; skip link "Ir para o conteúdo"
- Todo role="dialog" (menu mobile, lightbox) com aria-label, aria-modal="true", foco preso e ESC
- Todo link ou botão só com ícone (logo, Instagram, Facebook, WhatsApp flutuante, menu, fechar) com aria-label descritivo; ícones decorativos com aria-hidden="true"
- Botão do menu com aria-expanded e aria-controls; acordeão com <button>, aria-expanded e aria-controls; carrossel com aria-label e aria-roledescription
- Títulos em ordem: um único h1, h2 por seção, h3 dentro delas, sem pular níveis (inclusive no rodapé; se for só visual, usar <p>)
- Imagens com alt descritivo; decorativas com alt=""
- Foco visível em tudo que é interativo

# SEO e negócio local

title, description, Open Graph (imagem 1200x630), sitemap, favicon, página 404 no padrão do site, Schema.org LocalBusiness (endereço, telefone, horários, redes, areaServed) e FAQPage, alt text descritivo em todas as imagens, link do WhatsApp com mensagem pré-preenchida. Copyright com o ano calculado automaticamente. Crédito do desenvolvedor configurável em um único lugar.

# Processo

1. Ler /brief e src/assets/originals.
2. Preencher src/styles/tokens.css com cores, fontes e espaçamentos.
3. Construir o site inteiro sem pedir aprovação entre seções.
4. Após cada seção, screenshots em 390px e 1440px, comparar com os layouts e corrigir sozinho.
5. Rodar o QA obrigatório (abaixo) e corrigir tudo.
6. Entregar o resumo final.

# QA obrigatório antes de entregar

Com npm run build e npm run preview, usando Playwright ou o navegador do agente:
1. Rolar a página inteira em passos de 300 px com pausa de 400 ms, em 390 px e 1440 px. Listar todo elemento com texto cuja opacity seja menor que 0.95 ou visibility hidden e corrigir.
2. Listar qualquer seção com espaço vazio maior que 120 px entre blocos de conteúdo e corrigir.
3. Voltar ao topo (window.scrollTo(0,0)) e também rolando rápido para cima, 3 vezes. O hero deve ficar idêntico ao do primeiro carregamento (foto desde y=0, header transparente, sem faixa de fundo).
4. Screenshot do menu mobile aberto, com todos os links e o botão visíveis.
5. Título do hero completo (nenhuma letra cortada) em 360, 390, 768, 1280 e 1440 px.
6. Todos os depoimentos com texto visível.
7. Sem barra de rolagem horizontal em nenhuma largura.
8. Lighthouse (mobile e desktop) em Desempenho, Acessibilidade, Práticas recomendadas e SEO: todas as notas devem ser 95 ou mais. Para cada auditoria reprovada, listar os elementos afetados, corrigir e repetir até atingir.

# Resumo final

Entregue: o que foi feito, suposições assumidas, divergências entre os documentos e o layout, fotos usadas em cada posição (arquivo e seção), pendências [CONFIRMAR] e o que o dono do projeto precisa revisar.
