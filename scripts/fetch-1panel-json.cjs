const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ZIP_URL = 'http://apps.1panel.pro/stable/1panel.json.zip';
const OUT_PATH = path.join(__dirname, '..', 'src', '1panel.json');

function download(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { followRedirect: true }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading 1panel.json.zip...');
  const zipBuffer = await download(ZIP_URL);
  const zip = new AdmZip(zipBuffer);
  const entry = zip.getEntry('1panel.json') || zip.getEntries()[0];
  if (!entry || entry.isDirectory) {
    throw new Error('1panel.json not found in zip');
  }
  const data = entry.getData();
  fs.writeFileSync(OUT_PATH, data, 'utf8');
  console.log('Updated src/1panel.json');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
