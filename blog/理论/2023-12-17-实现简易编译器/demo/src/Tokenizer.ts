export class Tokenizer {
  idx: number;
  code: string;
  constructor(code: string) {
    this.idx = 0;
    this.code = code;
  }
  getNextToken(): Token | null {
    if (this.idx >= this.code.length) return null;
    const rest = this.code.slice(this.idx);
    for (const [type, reg] of def) {
      let matched = this.match(reg, rest);
      if (!matched) continue;
      if (type == "SPACES") return this.getNextToken();
      else return { type, value: matched };
    }
    throw new SyntaxError(`unknow token: ${rest[0]}`);
  }
  match(reg: RegExp, str: string) {
    let matchs = reg.exec(str);
    // 没有匹配到
    if (matchs == null) return null;
    // 匹配到了
    let matched = matchs[0];
    this.idx += matched.length;
    return matched;
  }
}
export type TokenType =
  // 空格
  | "SPACES"
  // 关键字
  | "let"
  | "if"
  | "else"
  | "for"
  | "while"
  | "this"
  | "super"
  | "new"
  // 特殊符号
  | ","
  | ";"
  | "("
  | ")"
  | "["
  | "]"
  | "{"
  | "}"
  // 双目运算符
  // 算数运算操作
  | "ADDITIVE_OPERATOR"
  | "MULTIPLICATIVE_OPERATOR"
  // 赋值
  | "SIMPLE_ASSIGN"
  | "COMPLEX_ASSIGN"
  // 逻辑运算符
  | "||"
  | "&&"
  // 等值运算符
  | "=="
  | "!="
  // 三目运算
  | "?"
  | ":"
  //
  | "&&"
  | "||"
  //
  | "Equality_OPERATOR"
  | "Relational_OPERATOR"
  | "!"
  | "++"
  | "--"
  | "."
  // 常量
  | "STRING"
  | "NUMBER"
  | "BOOLEAN"
  | "NULL"
  // 标志符
  | "IDENTIFIER";

export interface Token {
  type: TokenType;
  value: string;
}
const def: Array<[TokenType, RegExp]> = [
  // 无意义字符
  ["SPACES", /^\s*/],
  // 关键字
  ["let", /\blet\b/],
  ["if", /\bif\b/],
  ["else", /\belse\b/],
  ["for", /\bfor\b/],
  ["while", /\bwhile\b/],
  ["this", /\bthis\b/],
  ["super", /\bsuper\b/],
  ["new", /\bnew\b/],
  // 字面量
  ["STRING", /^"[^"]*"/],
  ["STRING", /^'[^']*'/],
  ["NUMBER", /^\d+/],
  ["BOOLEAN", /\btrue\b/],
  ["BOOLEAN", /\bfalse\b/],
  ["NULL", /\bnull\b/],
  // 算数运算符
  // 赋值符号
  ["SIMPLE_ASSIGN", /^=/],
  ["COMPLEX_ASSIGN", /^[\+\-\*\/\%]=/],
  // 三目运算符号
  ["?", /^[\?]/],
  [":", /^[\:]/],
  // 逻辑运算
  ["&&", /^&&/],
  ["||", /^\|\|/],
  // 等值判断运算符
  ["Equality_OPERATOR", /^==/],
  ["Equality_OPERATOR", /^!=/],
  // 关系判断运算符
  ["Relational_OPERATOR", /^>/],
  ["Relational_OPERATOR", /^</],
  ["Relational_OPERATOR", /^>=/],
  ["Relational_OPERATOR", /^<=/],
  ["ADDITIVE_OPERATOR", /^[+-]/],
  ["MULTIPLICATIVE_OPERATOR", /^[*\/\%]/],
  // 一元运算符
  ["++", /^\+\+/],
  ["--", /^\-\-/],
  ["!", /^\!/],

  // 符号
  ["(", /^\(/],
  [")", /^\)/],
  ["]", /^\]/],
  ["[", /^\[/],
  ["{", /^\{/],
  ["}", /^\}/],
  [".", /^\./],
  [",", /^,/],
  [";", /^;/],
  //   标识符
  ["IDENTIFIER", /^\w+/],
];
