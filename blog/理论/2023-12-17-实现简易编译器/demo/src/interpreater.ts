import { AST_NODE } from "./types";

let stack: any[] = [];
let map = new Map<string, any>();

export function interpreater(ast_node: AST_NODE): any {
  switch (ast_node.type) {
    case "Program":
      ast_node.body.forEach((statement) => {
        let result = interpreater(statement);
        console.log(result);
      });
      return;
    case "EmptyStatement":
      return;
    case "ExpressionStatement":
      return interpreater(ast_node.expression);
    case "AssignExpression":
      switch (ast_node.left.type) {
        case "Identifier":
          let id = ast_node.left.name;
          map.set(id, interpreater(ast_node.right));
          return map.get(id);
      }
      return;
    case "Identifier":
      return map.get(ast_node.name);
    case "BinaryExpression":
      switch (ast_node.operator) {
        case "||":
          return interpreater(ast_node.left) || interpreater(ast_node.right);
        case "&&":
          return interpreater(ast_node.left) && interpreater(ast_node.right);
        case ">":
          return interpreater(ast_node.left) > interpreater(ast_node.right);
        case "<":
          return interpreater(ast_node.left) < interpreater(ast_node.right);
        case ">=":
          return interpreater(ast_node.left) >= interpreater(ast_node.right);
        case "<=":
          return interpreater(ast_node.left) <= interpreater(ast_node.right);
        case "==":
          return interpreater(ast_node.left) == interpreater(ast_node.right);
        case "!=":
          return interpreater(ast_node.left) != interpreater(ast_node.right);
        case "+":
          return interpreater(ast_node.left) + interpreater(ast_node.right);
        case "-":
          return interpreater(ast_node.left) - interpreater(ast_node.right);
        case "*":
          return interpreater(ast_node.left) * interpreater(ast_node.right);
        case "/":
          return interpreater(ast_node.left) / interpreater(ast_node.right);
        case "%":
          return interpreater(ast_node.left) % interpreater(ast_node.right);
      }
      return;
    case "NullLiteral":
      return null;
    case "StringLiteral":
      return ast_node.value;
    case "BooleanLiteral":
      return new Boolean(ast_node.value);
    case "NumericLiteral":
      return new Number(ast_node.value);
  }
}
