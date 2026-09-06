import fs from 'fs';
import path from 'path';

const distHtml = fs.readFileSync('dist/index.html', 'utf8');
const assets = fs.readdirSync('dist/assets');
const cssFile = assets.find(f => f.endsWith('.css'));
const jsFile = assets.find(f => f.endsWith('.js'));

const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join('dist/assets', jsFile), 'utf8');

let singleFile = distHtml
  .replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/i, `<style>\n${cssContent}\n</style>`)
  .replace(/<script[^>]*src=["'][^"']*index-[^"']*\.js["'][^>]*><\/script>/i, `<script type="module">\n${jsContent}\n</script>`);

fs.writeFileSync('standalone.html', singleFile);
fs.writeFileSync('preview.html', singleFile);
console.log('Successfully generated standalone.html and preview.html! Size:', singleFile.length);
