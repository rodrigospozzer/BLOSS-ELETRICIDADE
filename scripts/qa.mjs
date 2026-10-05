import { test, expect, chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Starting QA process...");

  try {
    await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });
    console.log("Page loaded.");

    // Helper to test across viewports
    const viewports = [
      { width: 390, height: 844 },
      { width: 1440, height: 900 }
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      console.log(`\nTesting viewport ${vp.width}x${vp.height}`);

      // 1. Rolar a página inteira em passos de 300px com pausa de 400ms
      await page.evaluate(async () => {
        const delay = (ms) => new Promise(res => setTimeout(res, ms));
        let scrollY = 0;
        while (scrollY < document.body.scrollHeight) {
          window.scrollBy(0, 300);
          scrollY += 300;
          await delay(400);
        }
      });

      // Checar opacidade de elementos textuais
      const invisibleTexts = await page.evaluate(() => {
        const els = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a');
        const bad = [];
        els.forEach(el => {
          const style = window.getComputedStyle(el);
          // Ignoramos elementos ocultos propositalmente por outras razoes, mas o QA pede para checar
          if ((parseFloat(style.opacity) < 0.95 && style.opacity !== '0') || style.visibility === 'hidden') {
            // Ignorar textos dentro de nav ocultos no desktop
            const isMenuOverlay = el.closest('#mobile-menu-overlay');
            if (!isMenuOverlay || parseFloat(style.opacity) > 0) {
               bad.push(el.textContent.trim().substring(0, 30));
            }
          }
        });
        return bad;
      });

      if (invisibleTexts.length > 0) {
        console.warn(`[WARNING] Textos com opacidade < 0.95 ou visibility hidden em ${vp.width}px:`, invisibleTexts);
      } else {
        console.log(`[OK] Nenhum texto invisível detectado em ${vp.width}px.`);
      }

      // 2. Voltar ao topo
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      const headerBg = await page.evaluate(() => {
        const header = document.getElementById('main-header');
        return window.getComputedStyle(header).backgroundColor;
      });
      console.log(`[INFO] Cor de fundo do header no topo em ${vp.width}px:`, headerBg);

      // 3. Checar scroll horizontal
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      if (hasHorizontalScroll) {
        console.error(`[ERROR] Scroll horizontal detectado em ${vp.width}px!`);
      } else {
        console.log(`[OK] Sem scroll horizontal em ${vp.width}px.`);
      }
    }

    // Título do hero quebra
    console.log("\nChecando título do hero em várias larguras:");
    const heroWidths = [360, 390, 768, 1280, 1440];
    for (const w of heroWidths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.waitForTimeout(200);
      const isClipping = await page.evaluate(() => {
        const title = document.querySelector('h1');
        if (!title) return false;
        return title.scrollWidth > title.clientWidth;
      });
      console.log(`[INFO] Largura ${w}px - Clipping de texto:`, isClipping ? 'SIM' : 'NÃO');
    }

  } catch (error) {
    console.error("Erro durante o QA:", error);
  } finally {
    await browser.close();
    console.log("QA finished.");
  }
})();
