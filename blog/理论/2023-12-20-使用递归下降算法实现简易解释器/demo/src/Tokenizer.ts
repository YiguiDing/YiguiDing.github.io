export type TokenType =
  | 'Space' //空白符
  | 'Comment' // 注释
  | ';' // 分号
  | 'if' // if语句
  | 'else' // else语句
  | 'while'
  | 'do'
  | 'def' // 声明
  | 'AssignOpSimple' // 简单赋值操作符
  | 'AssignOpComplex' // 复杂赋值操作符
  | 'TernaryOp?' // 三目运算符
  | 'TernaryOp:' // 三目运算符
  | 'LogicalOr' // 逻辑或运算符
  | 'LogicalAnd' // 逻辑与运算符
  | 'EqualityOp' // 等值运算符
  | 'RelationalOp' // 关系运算符
  | 'AddOp' // 算数加减运算符
  | 'MutOp' // 算数乘除取余运算符
  | 'Number' // 字面量
  | 'Boolean' // 字面量
  | 'String' // 字面量
  | 'null' // 字面量
  | '('
  | ')'
  | '['
  | ']'
  | '{'
  | '}'
  | '.'
  | ','
  | 'this'
  | 'super'
  | 'Identifier';
export type TokenDef = [TokenType, RegExp];
export type Token = { type: TokenType; value: string };
export const TokenDefs: Array<TokenDef> = [
  ['Space', /^\s+/],
  ['Comment', /^\/\/[^\n]*/],
  ['Comment', /^\/\*(\s|.)*?\*\//],
  [';', /^;/],
  ['if', /^\bif\b/],
  ['else', /^\belse\b/],
  ['while', /^\bwhile\b/],
  ['do', /^\bdo\b/],
  ['def', /^\bdef\b/],
  ['EqualityOp', /^[><][=]?/],
  ['RelationalOp', /^[=!]=/],
  ['AssignOpSimple', /^=/],
  ['AssignOpComplex', /^[\+\-\*\/\%]=/],
  ['TernaryOp?', /^\?/],
  ['TernaryOp:', /^[:]/],
  ['LogicalOr', /^\|\|/],
  ['LogicalAnd', /^&&/],
  ['AddOp', /^[+-]/],
  ['MutOp', /^[\*\/\%]/],
  ['Number', /^\d+\.\d+/], // 0.123
  ['Number', /^\d+/], // 123
  ['Boolean', /^\btrue\b/],
  ['Boolean', /^\bfalse\b/],
  ['null', /^\bnull\b/],
  ['String', /^\'[^\']*\'/],
  ['String', /^\"[^\"]*\"/],
  ['(', /^\(/],
  [')', /^\)/],
  ['[', /^\[/],
  [']', /^\]/],
  ['{', /^\{/],
  ['}', /^\}/],
  ['.', /^\./],
  [',', /^\,/],
  ['this', /^\bthis\b/],
  ['super', /^\bsuper\b/],
  ['Identifier', /^\w+/],
];
export class Tokenizer {
  idx!: number;
  code!: string;
  tokens!: Array<Token>;
  init(code: string) {
    this.idx = 0;
    this.code = code;
    this.tokens = [];
  }
  getTokens(code: string) {
    this.init(code);
    while (this.hasMore()) {
      let token = this.getNextToken();
      if (token.type == 'Space') continue;
      if (token.type == 'Comment') continue;
      this.tokens.push(token);
    }
    return this.tokens;
  }
  private hasMore() {
    return this.idx < this.code.length;
  }
  private getNextToken(): Token {
    if (!this.hasMore()) throw new SyntaxError('no more token.');
    const rest = this.code.slice(this.idx);
    for (const [tokenType, reg] of TokenDefs) {
      let tokenValue = this.match(reg, rest);
      if (tokenValue == null) continue;
      else return { type: tokenType, value: tokenValue };
    }
    throw new SyntaxError(`unknow token: ${rest[0]}`);
  }
  private match(reg: RegExp, str: string) {
    let matchs = reg.exec(str);
    if (matchs == null) return null; // 没有匹配到
    let matched = matchs[0]; // 匹配到了
    this.idx += matched.length; // 移动指针
    return matched;
  }
}
