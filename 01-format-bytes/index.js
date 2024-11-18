const unitsMap = {
  fa: ["بایت", "کیلوبایت", "مگابایت", "گیگابایت", "ترابایت", "پتابایت"],
  en: ["B", "KB", "MB", "GB", "TB", "PB"],
};

const EN_BYTE = "B";
const FA_BYTE = "بایت";

const validLocales = ["fa", "en"];

function formatBytes(bytes, decimals = 2, locale = "en") {
  if (!validLocales.includes(locale)) {
    return new Error("** Locale could be either `fa` or `en` **");
  }

  if (!+bytes) return `0 ${locale == "en" ? EN_BYTE : FA_BYTE}`;

  let unitIndex = 0;
  for (unitIndex; bytes >= 1024; unitIndex++) {
    bytes /= 1024;
  }

  const dm = bytes % 1 === 0 ? 0 : decimals;
  return `${bytes.toFixed(dm)} ${unitsMap[locale][unitIndex]}`;
}
