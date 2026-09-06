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
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // Click "Get a Demo"
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await page.evaluate(el => el.innerText, btn);
    if (text.includes('GET A DEMO') || text.includes('Get a Demo')) {
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'local_modal_shot.png') });
  console.log('Saved local_modal_shot.png');

  await browser.close();
})();
