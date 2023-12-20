export function visualizeEscapes(str: string) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\f/g, "\\f")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0")
    .replace(/\x08/g, "\\b")
    .replace(/\x0B/g, "\\x0B");
}
