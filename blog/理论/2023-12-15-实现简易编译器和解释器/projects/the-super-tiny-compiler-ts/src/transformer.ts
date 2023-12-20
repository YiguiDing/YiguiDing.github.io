import {
  AST_NODE,
  AST_ROOT_NODE,
  AST_NODE_TYPE,
  AST_Call_NODE,
  AST_VALE_NODE,
} from "./parser";

export type NEW_AST_NODE =
  | NEW_AST_ROOT_NODE
  | NEW_AST_IDNT_NODE
  | NEW_AST_CALL_NODE
  | NEW_AST_NUMB_NODE
  | NEW_AST_EXPR_NODE
  | NEW_AST_STRI_NODE;

export enum NEW_AST_NODE_TYPE {
  Program = "Program",
  NumberLiteral = "NumberLiteral",
  StringLiteral = "StringLiteral",
  Identifier = "Identifier",
  CallExpression = "CallExpression",
  ExpressionStatement = "ExpressionStatement",
}
export type NEW_AST_ROOT_NODE = {
  type: NEW_AST_NODE_TYPE.Program;
  body: Array<NEW_AST_NODE>;
};
export type NEW_AST_NUMB_NODE = {
  type: NEW_AST_NODE_TYPE.NumberLiteral;
  value: string;
};
export type NEW_AST_STRI_NODE = {
  type: NEW_AST_NODE_TYPE.StringLiteral;
  value: string;
};
export type NEW_AST_IDNT_NODE = {
  type: NEW_AST_NODE_TYPE.Identifier;
  name: string;
};
export type NEW_AST_CALL_NODE = {
  type: NEW_AST_NODE_TYPE.CallExpression;
  callee: NEW_AST_IDNT_NODE;
  arguments: Array<NEW_AST_NODE>;
};
export type NEW_AST_EXPR_NODE = {
  type: NEW_AST_NODE_TYPE.ExpressionStatement;
  expression: NEW_AST_CALL_NODE;
};

let ctx_map: Map<AST_NODE, Array<NEW_AST_NODE>> = new Map();
export function transformer(ast: AST_ROOT_NODE) {
  let newAst: NEW_AST_ROOT_NODE;
  let visitor: Visitor = {};
  visitor[AST_NODE_TYPE.Program] = {
    enter(node: AST_ROOT_NODE, parent: null) {
      newAst = {
        type: NEW_AST_NODE_TYPE.Program,
        body: [],
      };
      ctx_map.set(node, newAst.body);
    },
    exit(node: AST_Call_NODE, parent: AST_NODE) {
      ctx_map.delete(node);
    },
  };
  visitor[AST_NODE_TYPE.CallExpression] = {
    enter(node: AST_Call_NODE, parent: AST_NODE) {
      let expression: NEW_AST_CALL_NODE | NEW_AST_EXPR_NODE = {
        type: NEW_AST_NODE_TYPE.CallExpression,
        callee: {
          type: NEW_AST_NODE_TYPE.Identifier,
          name: node.name,
        },
        arguments: [],
      };
      ctx_map.set(node, expression.arguments);
      if (parent.type !== AST_NODE_TYPE.CallExpression) {
        expression = {
          type: NEW_AST_NODE_TYPE.ExpressionStatement,
          expression: expression,
        };
      }
      ctx_map.get(parent)!.push(expression);
    },
    exit(node: AST_Call_NODE, parent: AST_NODE) {
      ctx_map.delete(node);
    },
  };
  visitor[AST_NODE_TYPE.NumberLiteral] = {
    enter(node: AST_VALE_NODE, parent: AST_NODE) {
      ctx_map.get(parent)!.push({
        type: NEW_AST_NODE_TYPE.NumberLiteral,
        value: node.value,
      });
    },
  };
  visitor[AST_NODE_TYPE.StringLiteral] = {
    enter(node: AST_VALE_NODE, parent: AST_NODE) {
      ctx_map.get(parent)!.push({
        type: NEW_AST_NODE_TYPE.StringLiteral,
        value: node.value,
      });
    },
  };
  traverser(ast, visitor);
  return newAst!;
}
type Visitor = {
  [key in AST_NODE_TYPE]?: {
    enter(node: AST_NODE, parent: AST_NODE | null): void;
    exit?(node: AST_NODE, parent: AST_NODE | null): void;
  };
};
function traverser(ast: AST_ROOT_NODE, visitor: Visitor) {
  function traverseArray(
    array: Array<AST_NODE>,
    parent: AST_ROOT_NODE | AST_Call_NODE
  ) {
    array.forEach((child) => {
      traverseNode(child, parent);
    });
  }
  function traverseNode(
    node: AST_NODE,
    parent: AST_ROOT_NODE | AST_Call_NODE | null
  ) {
    let methods = visitor[node.type];
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }
    switch (node.type) {
      case AST_NODE_TYPE.Program:
        traverseArray(node.body, node);
        break;
      case AST_NODE_TYPE.CallExpression:
        traverseArray(node.params, node);
        break;
      case AST_NODE_TYPE.NumberLiteral:
      case AST_NODE_TYPE.StringLiteral:
        break;
      default:
        // @ts-ignore
        throw new TypeError(AST_NODE_TYPE[node.type]);
    }
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }
  traverseNode(ast, null);
}
