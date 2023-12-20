import { NEW_AST_NODE, NEW_AST_NODE_TYPE } from "./transformer";

export function codeGenerator(node: NEW_AST_NODE): string {
  switch (node.type) {
    case NEW_AST_NODE_TYPE.Program:
      let statements = node.body.map(codeGenerator);
      return statements.join("\n");
    case NEW_AST_NODE_TYPE.ExpressionStatement:
      let expression = codeGenerator(node.expression);
      return expression + ";";
    case NEW_AST_NODE_TYPE.CallExpression:
      let funName = codeGenerator(node.callee);
      let args = node.arguments.map(codeGenerator);
      return funName + "(" + args.join(",") + ")";
    case NEW_AST_NODE_TYPE.Identifier:
      return node.name;
    case NEW_AST_NODE_TYPE.NumberLiteral:
      return node.value;
    case NEW_AST_NODE_TYPE.StringLiteral:
      return '"' + node.value + '"';
    default:
      // @ts-ignore
      throw new TypeError(NEW_AST_NODE_TYPE[node.type]);
  }
}
