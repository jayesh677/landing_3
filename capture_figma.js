const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  
  const networkLogs = [];
  page.on('response', async (response) => {
    try {
      const url = response.url();
      const status = response.status();
      const contentType = response.headers()['content-type'] || '';
      
      if (url.includes('figma.com') && (contentType.includes('json') || contentType.includes('text') || contentType.includes('svg'))) {
        try {
          const text = await response.text();
          networkLogs.push({ url, status, contentType, length: text.length });
          if (url.includes('make') || url.includes('nodes') || url.includes('file') || url.includes('meta') || url.includes('code') || url.includes('document')) {
            fs.appendFileSync('figma_api_responses.txt', '\n\n--- URL: ' + url + ' ---\n' + text.substring(0, 10000) + '\n');
          }
        } catch (e) {}
      }
    } catch (e) {}
  });

  console.log('Navigating to Figma URL...');
  try {
    await page.goto('https://www.figma.com/make/l1CpzmcOX4hJhbARx2gDIG/Create-Home-Page?fullscreen=1&t=gHiiBQjxwlEw963j-1&code-node-id=0-6', {
      waitUntil: 'networkidle2',
      timeout: 45000
    });
  } catch (err) {
    console.log('Navigation warning:', err.message);
  }

  console.log('Waiting 12s for WebGL / canvas / preview / iframe to load...');
  await new Promise(r => setTimeout(r, 12000));

  await page.screenshot({ path: path.join(__dirname, 'figma_fullscreen.png'), fullPage: true });
  console.log('Saved figma_fullscreen.png');

  const pageData = await page.evaluate(() => {
    const textNodes = [];
    const walk = (node) => {
      if (node.nodeType === 3 && node.nodeValue.trim()) {
        textNodes.push(node.nodeValue.trim());
      }
      for (let child of node.childNodes) walk(child);
    };
    walk(document.body);

    const iframes = Array.from(document.querySelectorAll('iframe')).map(f => f.src);
    return {
      title: document.title,
      textNodes: [...new Set(textNodes)],
      iframes,
      htmlLength: document.documentElement.outerHTML.length
    };
  });

  fs.writeFileSync('page_data.json', JSON.stringify(pageData, null, 2));
  console.log('Saved page_data.json. Extracted texts:', pageData.textNodes.length);

  const frames = page.frames();
  console.log('Found frames:', frames.length);
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    console.log('Frame ' + i + ': ' + frame.url());
    try {
      const frameContent = await frame.content();
      fs.writeFileSync('frame_' + i + '_content.html', frameContent);
      console.log('Frame ' + i + ' content length: ' + frameContent.length);
    } catch (e) {
      console.log('Could not get content for frame ' + i + ':', e.message);
    }
  }

  await browser.close();
  console.log('Done!');
})();
