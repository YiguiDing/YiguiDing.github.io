export type Token = { type: TokenType; value: string };
export enum TokenType {
  paren = "paren",
  number = "number",
  string = "string",
  name = "name",
}
export function tokenizer(input: string) {
  let current = 0;
  let tokens: Array<Token> = [];
  while (current < input.length) {
    let char = input[current];
    if (char === "(") {
      tokens.push({ type: TokenType.paren, value: "(" });
      current++;
      continue;
    }
    if (char === ")") {
      tokens.push({ type: TokenType.paren, value: ")" });
      current++;
      continue;
    }
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: TokenType.number, value });
      continue;
    }
    if (char === '"') {
      let value = "";
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({ type: TokenType.string, value });
      continue;
    }
    let LETTERS = /[a-z]/i; // /i 表示不区分大小写
    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: TokenType.name, value });
      continue;
    }
    throw new TypeError("I dont know what this character is: " + char);
  }
  return tokens;
}
