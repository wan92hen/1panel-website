const fs = require("fs");
const path = require("path");

const translationsDir = path.join(__dirname, "..", "src", "i18n", "translations");
const baseLocaleFile = path.join(translationsDir, "en.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function flattenKeys(value, prefix = "", out = new Set()) {
  if (Array.isArray(value)) {
    out.add(prefix);
    return out;
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0 && prefix) out.add(prefix);
    for (const key of keys) {
      const next = prefix ? `${prefix}.${key}` : key;
      flattenKeys(value[key], next, out);
    }
    return out;
  }
  if (prefix) out.add(prefix);
  return out;
}

function sortedDiff(left, right) {
  return [...left].filter((k) => !right.has(k)).sort();
}

function main() {
  const allFiles = fs
    .readdirSync(translationsDir)
    .filter((name) => name.endsWith(".json"))
    .sort();

  const base = readJson(baseLocaleFile);
  const baseKeys = flattenKeys(base);

  let hasErrors = false;

  for (const file of allFiles) {
    if (file === "en.json") continue;

    const filePath = path.join(translationsDir, file);
    const current = readJson(filePath);
    const currentKeys = flattenKeys(current);

    const missingKeys = sortedDiff(baseKeys, currentKeys);
    const extraKeys = sortedDiff(currentKeys, baseKeys);

    if (missingKeys.length === 0 && extraKeys.length === 0) continue;

    hasErrors = true;
    console.error(`\n[${file}] i18n key mismatch`);

    if (missingKeys.length > 0) {
      console.error(`  Missing keys (${missingKeys.length}):`);
      for (const key of missingKeys) console.error(`    - ${key}`);
    }

    if (extraKeys.length > 0) {
      console.error(`  Extra keys (${extraKeys.length}):`);
      for (const key of extraKeys) console.error(`    + ${key}`);
    }
  }

  if (hasErrors) {
    console.error("\nI18n key check failed.");
    process.exit(1);
  }

  console.log("I18n key check passed.");
}

main();
