import { Token, TokenType } from "./tokenizer";

export type AST_NODE = AST_ROOT_NODE | AST_VALE_NODE | AST_Call_NODE;
export enum AST_NODE_TYPE {
  Program = "Program",
  NumberLiteral = "NumberLiteral",
  StringLiteral = "StringLiteral",
  CallExpression = "CallExpression",
}
export type AST_ROOT_NODE = {
  type: AST_NODE_TYPE.Program;
  body: Array<AST_NODE>;
};
export type AST_Call_NODE = {
  type: AST_NODE_TYPE.CallExpression;
  name: string;
  params: Array<AST_VALE_NODE | AST_Call_NODE>;
};
export type AST_VALE_NODE = {
  type: AST_NODE_TYPE.NumberLiteral | AST_NODE_TYPE.StringLiteral;
  value: string;
};

export function parser(tokens: Array<Token>) {
  let current = 0;
  function walk() {
    let token = tokens[current];
    let node: AST_NODE;
    if (token.type === TokenType.number) {
      current++;
      node = { type: AST_NODE_TYPE.NumberLiteral, value: token.value };
      return node;
    }
    if (token.type === TokenType.string) {
      current++;
      node = { type: AST_NODE_TYPE.StringLiteral, value: token.value };
      return node;
    }
    if (token.type === TokenType.paren && token.value === "(") {
      token = tokens[++current];
      node = {
        type: AST_NODE_TYPE.CallExpression,
        name: token.value,
        params: [],
      };
      token = tokens[++current];
      while (
        token.type !== TokenType.paren ||
        (token.type === TokenType.paren && token.value !== ")")
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      current++;
      return node;
    }
    throw new TypeError(TokenType[token.type]);
  }
  let ast: AST_ROOT_NODE = {
    type: AST_NODE_TYPE.Program,
    body: [],
  };
  while (current < tokens.length) {
    ast.body.push(walk());
  }
  return ast;
}
