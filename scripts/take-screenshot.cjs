const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Capturing Desktop 1440px...');
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });
  // Wait a bit for GSAP animations
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });

  console.log('Capturing Mobile 390px...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

  await browser.close();
  console.log('Screenshots generated successfully.');
})();
