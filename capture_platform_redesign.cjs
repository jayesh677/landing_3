const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // Scroll directly to platform section
  await page.evaluate(() => {
    const el = document.getElementById('platform');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'platform_card_01_endpoint.png') });
  console.log('Saved platform_card_01_endpoint.png');

  // Scroll to card 2 (Identity)
  await page.evaluate(() => {
    window.scrollBy({ top: 500, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'platform_card_02_identity.png') });
  console.log('Saved platform_card_02_identity.png');

  // Scroll to card 3 (Cloud)
  await page.evaluate(() => {
    window.scrollBy({ top: 500, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'platform_card_03_cloud.png') });
  console.log('Saved platform_card_03_cloud.png');

  // Scroll to card 5 (Threat Intel)
  await page.evaluate(() => {
    window.scrollBy({ top: 1000, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'platform_card_05_intel.png') });
  console.log('Saved platform_card_05_intel.png');

  await browser.close();
  console.log('Platform redesign captures completed!');
})();
