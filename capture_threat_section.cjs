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

  // Scroll to Threat Section
  await page.evaluate(() => {
    const el = document.getElementById('threat-response');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: path.join(__dirname, 'threat_section_step0.png') });
  console.log('Saved threat_section_step0.png');

  // Scroll a bit down to activate step 2
  await page.evaluate(() => {
    window.scrollBy({ top: 300, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: path.join(__dirname, 'threat_section_step1.png') });
  console.log('Saved threat_section_step1.png');

  await browser.close();
  console.log('Threat section capture complete!');
})();
