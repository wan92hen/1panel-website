import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const INDEXNOW_ENDPOINT =
  process.env.INDEXNOW_ENDPOINT?.trim() || 'https://api.indexnow.org/indexnow';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY?.trim();
const SITE_HOST = process.env.INDEXNOW_HOST?.trim() || 'https://1panel.pro';
const KEY_LOCATION = process.env.INDEXNOW_KEY_LOCATION?.trim();
const RETRY_MS = Number(process.env.INDEXNOW_RETRY_MS || 15000);
const FAIL_ON_ERROR = process.env.INDEXNOW_FAIL_ON_ERROR !== 'false';

const distDir = join(process.cwd(), 'dist');
const sitemapIndexPath = join(distDir, 'sitemap-index.xml');
const fallbackSitemapPath = join(distDir, 'sitemap-0.xml');

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function readXmlIfExists(path) {
  if (!existsSync(path)) {
    return '';
  }
  return readFileSync(path, 'utf8');
}

function collectUrlsFromDist() {
  const urls = new Set();
  const indexXml = readXmlIfExists(sitemapIndexPath);

  if (indexXml) {
    const sitemapUrls = extractLocs(indexXml);
    for (const sitemapUrl of sitemapUrls) {
      try {
        const parsed = new URL(sitemapUrl);
        if (parsed.origin !== SITE_HOST) {
          continue;
        }
        const localPath = join(distDir, decodeURIComponent(parsed.pathname).replace(/^\//, ''));
        const childXml = readXmlIfExists(localPath);
        if (!childXml) {
          continue;
        }
        for (const url of extractLocs(childXml)) {
          urls.add(url);
        }
      } catch {
        // Ignore malformed sitemap URLs and keep going.
      }
    }
  }

  if (urls.size === 0) {
    const fallbackXml = readXmlIfExists(fallbackSitemapPath);
    for (const url of extractLocs(fallbackXml)) {
      urls.add(url);
    }
  }

  return [...urls].filter((url) => {
    try {
      return new URL(url).origin === SITE_HOST;
    } catch {
      return false;
    }
  });
}

async function pushIndexNow(urlList) {
  const payload = {
    host: new URL(SITE_HOST).host,
    key: INDEXNOW_KEY,
    urlList,
  };

  if (KEY_LOCATION) {
    payload.keyLocation = KEY_LOCATION;
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await res.text();
  let bodyJson;
  try {
    bodyJson = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    bodyJson = null;
  }

  if (res.ok && bodyJson?.errorCode) {
    const err = new Error(bodyJson.message || bodyJson.errorCode);
    err.code = bodyJson.errorCode;
    err.details = bodyJson.details;
    throw err;
  }

  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}: ${bodyText}`);
    err.status = res.status;
    err.code = bodyJson?.errorCode;
    err.details = bodyJson?.details;
    throw err;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!INDEXNOW_KEY) {
    console.log('[indexnow] skip: INDEXNOW_KEY is not set');
    return;
  }

  let host;
  try {
    host = new URL(SITE_HOST).origin;
  } catch {
    throw new Error('[indexnow] INDEXNOW_HOST must be a valid absolute URL');
  }

  const urls = collectUrlsFromDist();
  if (urls.length === 0) {
    console.log('[indexnow] skip: no sitemap URLs found in dist/');
    return;
  }

  const batches = [];
  const size = 10000;
  for (let i = 0; i < urls.length; i += size) {
    batches.push(urls.slice(i, i + size));
  }

  for (let i = 0; i < batches.length; i += 1) {
    try {
      await pushIndexNow(batches[i]);
      console.log(
        `[indexnow] pushed batch ${i + 1}/${batches.length} (${batches[i].length} urls) for ${host}`,
      );
    } catch (err) {
      if (err.code === 'SiteVerificationNotCompleted') {
        console.warn(
          `[indexnow] verification not completed; retrying in ${RETRY_MS}ms (batch ${i + 1}/${batches.length})`,
        );
        await sleep(RETRY_MS);
        try {
          await pushIndexNow(batches[i]);
          console.log(
            `[indexnow] pushed batch ${i + 1}/${batches.length} (${batches[i].length} urls) for ${host} after retry`,
          );
          continue;
        } catch (retryErr) {
          console.warn(
            `[indexnow] still not verified, skip blocking deploy. host=${host}, keyLocation=${KEY_LOCATION || `${host}/${INDEXNOW_KEY}.txt`}`,
          );
          console.warn(`[indexnow] response: ${retryErr.message}`);
          continue;
        }
      }

      if (FAIL_ON_ERROR) {
        throw err;
      }
      console.warn(`[indexnow] non-fatal error: ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error('[indexnow] failed:', err.message);
  process.exit(1);
});
