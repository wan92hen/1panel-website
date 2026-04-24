import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY?.trim();

if (!INDEXNOW_KEY) {
  console.log('[indexnow-key-file] skip: INDEXNOW_KEY is not set');
  process.exit(0);
}

const distDir = join(process.cwd(), 'dist');
if (!existsSync(distDir)) {
  console.warn('[indexnow-key-file] skip: dist/ does not exist (build not finished?)');
  process.exit(0);
}

mkdirSync(distDir, { recursive: true });
const keyFilePath = join(distDir, `${INDEXNOW_KEY}.txt`);
writeFileSync(keyFilePath, `${INDEXNOW_KEY}\n`, 'utf8');

console.log(`[indexnow-key-file] wrote ${keyFilePath}`);
