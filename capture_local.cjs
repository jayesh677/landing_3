const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  console.log('Launching browser to capture local build...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  await page.screenshot({ path: path.join(__dirname, 'local_hero_shot.png') });
  console.log('Saved local_hero_shot.png');

  await page.screenshot({ path: path.join(__dirname, 'local_full_shot.png'), fullPage: true });
  console.log('Saved local_full_shot.png');

  await browser.close();
  console.log('Verification capture complete!');
})();
