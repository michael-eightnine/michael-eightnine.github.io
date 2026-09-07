import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const htmlPath = path.join(__dirname, 'resume.html');
const outPaths = [
  path.resolve(__dirname, '../../apps/portfolio/public/MichaelSmith_Resume.pdf'),
  path.resolve(
    __dirname,
    '../../apps/popup-portfolio/public/MichaelSmith_Resume.pdf'
  )
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href);
await page.emulateMedia({ media: 'print' });

for (const outPath of outPaths) {
  await page.pdf({
    path: outPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' }
  });
  console.log(`Resume PDF written to ${outPath}`);
}

await browser.close();
