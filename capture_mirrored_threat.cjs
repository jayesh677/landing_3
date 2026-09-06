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

  // Scroll to Threat Response section
  await page.evaluate(() => {
    const el = document.getElementById('threat-response');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'threat_mirrored_phase0.png') });
  console.log('Saved threat_mirrored_phase0.png');

  // Scroll to Phase 2 (Respond)
  await page.evaluate(() => {
    window.scrollBy({ top: 400, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'threat_mirrored_phase2.png') });
  console.log('Saved threat_mirrored_phase2.png');

  // Scroll to Phase 3 (Contain)
  await page.evaluate(() => {
    window.scrollBy({ top: 400, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, 'threat_mirrored_phase3.png') });
  console.log('Saved threat_mirrored_phase3.png');

  await browser.close();
  console.log('Mirrored Threat section captures complete!');
})();
