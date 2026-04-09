/**
 * Deep-merge en.json `pricing` into other locale files so new keys exist
 * while preserving existing translations.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'i18n', 'translations');
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8'));

function deepMerge(base, override) {
  const out = { ...base };
  for (const k of Object.keys(override)) {
    const bv = base[k];
    const ov = override[k];
    if (
      ov &&
      typeof ov === 'object' &&
      !Array.isArray(ov) &&
      bv &&
      typeof bv === 'object' &&
      !Array.isArray(bv)
    ) {
      out[k] = deepMerge(bv, ov);
    } else {
      out[k] = ov;
    }
  }
  return out;
}

for (const name of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
  if (name === 'en.json') continue;
  const p = path.join(dir, name);
  const loc = JSON.parse(fs.readFileSync(p, 'utf8'));
  loc.pricing = deepMerge(en.pricing, loc.pricing || {});
  fs.writeFileSync(p, JSON.stringify(loc, null, 2) + '\n', 'utf8');
  console.log('merged pricing →', name);
}
