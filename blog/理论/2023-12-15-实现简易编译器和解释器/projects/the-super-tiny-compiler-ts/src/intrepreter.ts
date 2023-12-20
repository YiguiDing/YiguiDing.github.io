import { NEW_AST_NODE, NEW_AST_NODE_TYPE } from "./transformer";

export function executer(node: NEW_AST_NODE): any {
  switch (node.type) {
    case NEW_AST_NODE_TYPE.Program:
      let statements = node.body;
      return statements.forEach((statement) => executer(statement));
    case NEW_AST_NODE_TYPE.ExpressionStatement:
      let expression = node.expression;
      return executer(expression);
    case NEW_AST_NODE_TYPE.CallExpression:
      let func = executer(node.callee);
      let args = node.arguments.map(executer);
      switch (func) {
        case "add":
          return args.reduce((prev, cur) => prev + cur);
        case "sub":
          return args.reduce((prev, cur) => prev - cur);
        case "mut":
          return args.reduce((prev, cur) => prev * cur);
        case "div":
          return args.reduce((prev, cur) => prev / cur);
        case "print":
          let str = args.join(",");
          return console.log(str);
        default:
          throw new SyntaxError(`unknow function: ${func}`);
      }
    case NEW_AST_NODE_TYPE.Identifier:
      let id = node.name;
      return id;
    case NEW_AST_NODE_TYPE.NumberLiteral:
      let num = new Number(node.value);
      return num;
    case NEW_AST_NODE_TYPE.StringLiteral:
      let str = node.value;
      return str;
    default:
      throw new SyntaxError(`unknow syntax: ${node}`);
  }
}
import { tokenizer } from "./tokenizer";
import { parser } from "./parser";
import { transformer } from "./transformer";

export function intrepreter(input: string) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = executer(newAst);
  return output;
}
