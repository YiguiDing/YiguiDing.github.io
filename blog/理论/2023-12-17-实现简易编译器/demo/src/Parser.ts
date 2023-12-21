import { Token, TokenType, Tokenizer } from "./Tokenizer";
import {
  Arguments,
  AssignExpression,
  BracketExpression,
  CommaExpression,
  GeneralBinaryExpression,
  LeftHandExpression,
  MumberExpression,
  MumberOrFunCallExpression,
  NewExpression,
  PostfixExpression,
  SuffixExpression,
  TernaryOperationExpression,
  UnaryExpression,
  VariableDeclaration,
  VariableDeclarationInitsStatement,
  VariableInit,
  IParser,
  EmptyStatement,
  Statement,
  Program,
} from "./types";

export class Parser implements IParser {
  tokenizer!: Tokenizer;
  curToken!: Token | null;
  constructor() {}
  parse(code: string) {
    this.tokenizer = new Tokenizer(code);
    this.curToken = this.tokenizer.getNextToken();
    return this.Program();
  }
  Program(): Program {
    return {
      type: "Program" as const,
      body: this.Statements(),
    };
  }
  Statements(shouldStop?: boolean) {
    let statements = [this.Statement()];
    while (!shouldStop && this.curToken != null) {
      statements.push(this.Statement());
    }
    return statements;
  }
  Statement(): Statement {
    switch (this.curToken?.type) {
      case ";":
        return this.EmptyStatement();
      case "let":
        return this.VariableDeclarationInitsStatement();
      default:
        // 其他情况全部归类为表达式语句
        return this.ExpressionStatement();
    }
  }
  EmptyStatement(): EmptyStatement {
    this.eat(";");
    return {
      type: "EmptyStatement" as const,
    };
  }
  VariableDeclarationInitsStatement(): VariableDeclarationInitsStatement {
    this.eat("let");
    let declaration = this.VariableDeclarations();
    this.eat(";");
    return {
      type: "VariableDeclarationInitStatement" as const,
      variableType: "let",
      declaration,
    };
  }
  VariableDeclarations(): VariableDeclaration {
    let inits = [this.VariableInit()];
    while (this.curToken?.type == ",") {
      this.eat(",");
      inits.push(this.VariableInit());
    }
    return {
      type: "VariableDeclarations" as const,
      inits,
    };
  }
  VariableInit(): VariableInit {
    let identifier = this.eat("IDENTIFIER").value;
    let value: TernaryOperationExpression | undefined;
    if (this.curToken?.type == "SIMPLE_ASSIGN") {
      this.eat("SIMPLE_ASSIGN");
      value = this.TernaryOperationExpression();
    }
    return {
      type: "VariableInit" as const,
      identifier,
      init: value,
    };
  }

  ExpressionStatement() {
    // 表达式语句的不同是由于表达式不同而造成的，所以把复杂度全部交给表达式
    let expression = this.Expression();
    this.eat(";");
    return {
      type: "ExpressionStatement" as const,
      expression,
    };
  }
  Expression() {
    return this.CommaExpression();
  }
  CommaExpression(): CommaExpression {
    let expressions = [this.AssignExpression()];
    if (this.curToken?.type == ",") {
      while (this.curToken?.type == ",") {
        this.eat(",");
        expressions.push(this.AssignExpression());
      }
      return {
        type: "CommaExpression" as const,
        expressions,
      };
    }
    return expressions[0];
  }
  AssignExpression(): AssignExpression {
    let expression = this.TernaryOperationExpression();
    if (
      (expression.type == "Identifier" ||
        expression.type == "MumberExpression") &&
      (this.curToken?.type == "SIMPLE_ASSIGN" ||
        this.curToken?.type == "COMPLEX_ASSIGN")
    ) {
      let opt = this.curToken.type;
      let opv = this.eat(opt).value;
      let right = this.TernaryOperationExpression();
      return {
        type: "AssignExpression",
        operatorType: opt,
        operator: opv,
        left: expression,
        right: right,
      };
    }
    return expression;
  }
  TernaryOperationExpression() {
    let condition = this.LogicalOrExpression();
    if (this.curToken?.type == "?") {
      this.eat("?");
      let case1 = this.LogicalOrExpression();
      this.eat(":");
      let case2 = this.LogicalOrExpression();
      return {
        type: "TernaryOperationExpression" as const,
        condition,
        case1,
        case2,
      };
    }
    return condition;
  }
  LogicalOrExpression() {
    return this.GeneralBinaryExpression(this.LogicalAndExpression, "||");
  }
  LogicalAndExpression() {
    return this.GeneralBinaryExpression(this.EqualityExpression, "&&");
  }
  EqualityExpression() {
    return this.GeneralBinaryExpression(
      this.RelationalExpression,
      "Equality_OPERATOR"
    );
  }
  RelationalExpression() {
    return this.GeneralBinaryExpression(
      this.ArithmeticExpression,
      "Relational_OPERATOR"
    );
  }
  ArithmeticExpression() {
    return this.AdditionExpression();
  }
  AdditionExpression() {
    return this.GeneralBinaryExpression(
      this.MultiplicationExpression,
      "ADDITIVE_OPERATOR"
    );
  }
  MultiplicationExpression() {
    return this.GeneralBinaryExpression(
      this.UnaryExpression,
      "MULTIPLICATIVE_OPERATOR"
    );
  }
  // 二分树表达式
  GeneralBinaryExpression<TreeNode, OpType extends TokenType>(
    builder: () => TreeNode,
    opType: OpType
  ): GeneralBinaryExpression<TreeNode, OpType> {
    let left: GeneralBinaryExpression<TreeNode, OpType> = builder.call(this);
    if (this.curToken?.type == opType) {
      while (this.curToken?.type == opType) {
        let opt = opType;
        let opv = this.eat(opt).value;
        let right = builder.call(this);
        left = {
          type: "BinaryExpression",
          operatorType: opt,
          operator: opv,
          left,
          right,
        } as GeneralBinaryExpression<TreeNode, OpType>;
      }
      return left;
    }
    return left;
  }
  UnaryExpression(): UnaryExpression {
    return this.PostfixExpression();
  }
  PostfixExpression(): PostfixExpression {
    switch (this.curToken?.type) {
      case "!":
      case "++":
      case "--":
        let opt = this.curToken?.type;
        let opv = this.eat(opt).value;
        let exp = this.SuffixExpression();
        return {
          type: "PostfixExpression" as const,
          operatorType: opt,
          operator: opv,
          value: exp,
        };
      default:
        return this.SuffixExpression();
    }
  }
  SuffixExpression(): SuffixExpression {
    let exp = this.LeftHandExpression();
    switch (this.curToken?.type) {
      case "++":
      case "--":
        let opt = this.curToken?.type;
        let opv = this.eat(opt).value;
        return {
          type: "AfterfixExpression" as const,
          operatorType: opt,
          operator: opv,
          value: exp,
        };
    }
    return exp;
  }
  LeftHandExpression(): LeftHandExpression {
    return this.MumberOrFunCallExpression();
  }
  MumberOrFunCallExpression(): MumberOrFunCallExpression {
    let mumber = this.MumberExpression();
    if (this.curToken?.type == "(") {
      let args = this.Arguments();
      return {
        type: "FunCallExpression" as const,
        calee: mumber,
        arguments: args,
      };
    }
    return mumber;
  }
  Arguments(): Arguments {
    this.eat("(");
    let args = [this.AssignExpression()];
    while (
      this.curToken?.type == "SIMPLE_ASSIGN" ||
      this.curToken?.type == "COMPLEX_ASSIGN"
    ) {
      args.push(this.AssignExpression());
    }
    this.eat(")");
    return args;
  }
  MumberExpression(): MumberExpression {
    let obj = this.PrimaryExpression();
    if (this.curToken?.type == ".") {
      this.eat(".");
      let identifier = this.Identifier();
      return {
        type: "MumberExpression" as const,
        object: obj,
        mumber: identifier,
        isIdx: false,
      };
    }
    if (this.curToken?.type == "[") {
      this.eat("[");
      let expression = this.Expression();
      this.eat("]");
      return {
        type: "MumberExpression" as const,
        object: obj,
        mumber: expression,
        isIdx: true,
      };
    }
    return obj;
  }
  PrimaryExpression() {
    switch (this.curToken?.type) {
      case "this":
        return this.ThisExpression();
      case "new":
        return this.NewExpression();
      case "IDENTIFIER":
        return this.Identifier();
      case "(":
        return this.BracketExpression();
      default:
        return this.Literal();
    }
  }
  ThisExpression() {
    return {
      type: "this" as const,
    };
  }
  NewExpression(): NewExpression {
    this.eat("new");
    let mumber = this.MumberExpression();
    let args = this.Arguments();
    return {
      type: "NewExpression" as const,
      mumber: mumber,
      arguments: args,
    };
  }
  Identifier() {
    let id = this.eat("IDENTIFIER").value;
    return {
      type: "Identifier" as const,
      name: id,
    };
  }
  FunctionCall() {
    let id = this.eat("IDENTIFIER").value;
    this.eat("(");
    let parameters = this.CommaExpression();
    this.eat(")");
    return {
      type: "FunctionCall" as const,
      identifier: id,
      parameters,
    };
  }
  /**
   * Literal
   *   : NumericLiteral
   *   | StringLiteral
   *   | BooleanLiteral
   *   | NullLiteral
   *   ;
   */
  Literal() {
    switch (this.curToken?.type) {
      case "NUMBER":
        return this.NumericLiteral();
      case "STRING":
        return this.StringLiteral();
      case "BOOLEAN":
        return this.BooleanLiteral();
      case "NULL":
        return this.NullLiteral();
      default:
        throw new SyntaxError("unknow sync:" + this.curToken?.value);
    }
  }
  NumericLiteral() {
    let token = this.eat("NUMBER");
    return {
      type: "NumericLiteral" as const,
      value: token.value,
    };
  }
  StringLiteral() {
    let token = this.eat("STRING");
    return {
      type: "StringLiteral" as const,
      value: token.value,
    };
  }
  BooleanLiteral() {
    let token = this.eat("BOOLEAN");
    return {
      type: "BooleanLiteral" as const,
      value: token.value,
    };
  }
  NullLiteral() {
    let token = this.eat("NULL");
    return {
      type: "NullLiteral" as const,
      value: token.value,
    };
  }
  BracketExpression(): BracketExpression {
    this.eat("(");
    let expression = this.Expression();
    this.eat(")");
    return {
      type: "BracketExpression" as const,
      expression,
    };
  }

  eat(tokenType: TokenType) {
    let token = this.curToken;
    if (token == null)
      throw new SyntaxError(`unexpected end of code,expected: ${tokenType}`);
    if (token.type != tokenType) {
      const position = this.tokenizer.idx;
      const snippet = this.tokenizer.code.slice(position, position + 10);
      throw new SyntaxError(
        `expected token: ${tokenType}, but actually get: ${token.value}; at position: ${position}, code snippet: ${snippet}.`
      );
    }
    this.curToken = this.tokenizer.getNextToken();
    return token;
  }
}
