const units = ["B", "KB", "MB", "GB", "TB", "PB"]

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 B"

  let i = 0
  for (i; bytes >= 1024; i++) {
    bytes /= 1024
  }

  const dm = bytes % 1 === 0 ? 0 : decimals
  return `${bytes.toFixed(dm)} ${units[i]}`
}
