export function rgbToAnsi(r, g, b) {
  return `\u001b[38;2;${r};${g};${b}m`;
}