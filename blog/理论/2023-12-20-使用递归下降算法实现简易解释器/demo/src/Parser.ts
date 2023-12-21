import { TokenType, Token } from './Tokenizer';
import {
  Program,
  Statements,
  Statement,
  EmptyStatement,
  BlockStatement,
  IfStatement,
  WhileStatement,
  ExpressionStatement,
  IdentifierDeclarationsStatement,
  VariableOrFunctionDeclaration,
  VariableDeclaration,
  VariableDeclarationInit,
  FunctionDeclaration,
  FormedArguments,
  Expression,
  CommaExpression,
  AssignExpression,
  TernaryExpression,
  LogicalOrExpression,
  LogicalAndExpression,
  EqualityExpression,
  RelationalExpression,
  AdditiveExpression,
  MultiplicativeExpression,
  PrimaryExpression,
  MumberAccessExpressionOrFunctionCallExpression,
  MumberAccessExpression,
  Identifier,
  This,
  Super,
  Arguments,
  BracketedExpression,
  Literal,
  NumberLiteral,
  BooleanLiteral,
  StringLiteral,
  NullLiteral,
  BineryExpression,
} from './ast';

export class Parser {
  curToken!: Token | null;
  tk_idx = 0;
  tokens!: Token[];
  parse(tokens: Token[]) {
    this.tokens = tokens;
    this.curToken = this.tokens[(this.tk_idx = 0)];
    return this.Program();
  }
  Program(): Program {
    return {
      type: 'Program',
      statements: this.Statements(),
    };
  }
  Statements(stopAt?: TokenType): Statements {
    let statements = [this.Statement()];
    while (this.curToken != null && this.curToken?.type != stopAt) {
      statements.push(this.Statement());
    }
    return statements;
  }
  Statement(): Statement {
    switch (this.curToken?.type) {
      case ';':
        return this.EmptyStatement();
      case '{':
        return this.BlockStatement();
      case 'if':
        return this.IfStatement();
      case 'while':
        return this.WhileStatement();
      case 'def':
        return this.IdentifierDeclarationsStatement();
      default:
        return this.ExpressionStatement();
    }
  }
  EmptyStatement(): EmptyStatement {
    this.eat(';');
    return {
      type: 'EmptyStatement',
    };
  }
  BlockStatement(): BlockStatement {
    this.eat('{');
    let statements = this.curToken?.type != '}' ? this.Statements('}') : [];
    this.eat('}');
    return {
      type: 'BlockStatement',
      statements,
    };
  }
  IfStatement(): IfStatement {
    this.eat('if');
    this.eat('(');
    let condition = this.Expression();
    this.eat(')');
    let case1 = this.Statement();
    let case2: Statement | undefined;
    if (this.curToken?.type == 'else') {
      this.eat('else');
      case2 = this.Statement();
    }
    return {
      type: 'IfStatement',
      condition,
      case1,
      case2,
    };
  }
  WhileStatement(): WhileStatement {
    this.eat('while');
    this.eat('(');
    let condition = this.Expression();
    this.eat(')');
    let statement = this.Statement();
    return {
      type: 'WhileStatement',
      condition,
      statement,
    };
  }
  ExpressionStatement(): ExpressionStatement {
    let expression = this.Expression();
    this.eat(';');
    return {
      type: 'ExpressionStatement',
      expression,
    };
  }
  IdentifierDeclarationsStatement(): IdentifierDeclarationsStatement {
    this.eat('def');
    let declarations = [this.VariableOrFunctionDeclaration()];
    while (this.curToken?.type == ',') {
      this.eat(',');
      declarations.push(this.VariableOrFunctionDeclaration());
    }
    this.eat(';');
    return {
      type: 'IdentifierDeclarationsStatement',
      declarations,
    };
  }
  VariableOrFunctionDeclaration(): VariableOrFunctionDeclaration {
    let identifier = this.eat('Identifier').value;
    switch (this.curToken?.type) {
      case '(':
        return this.FunctionDeclaration(identifier);
      default:
        return this.VariableDeclaration(identifier);
    }
  }

  VariableDeclaration(variableName: string): VariableDeclaration {
    return {
      type: 'VariableDeclaration',
      name: variableName,
      value: this.VariableDeclarationInit(),
    };
  }
  VariableDeclarationInit(): VariableDeclarationInit {
    if (this.curToken?.type == 'AssignOpSimple') {
      this.eat('AssignOpSimple');
      return this.LogicalOrExpression();
    }
    return undefined;
  }
  FunctionDeclaration(functionName: string): FunctionDeclaration {
    return {
      type: 'FunctionDeclaration',
      name: functionName,
      FormedArguments: this.FormedArguments(),
      statements: this.BlockStatement(),
    };
  }
  FormedArguments(): FormedArguments {
    this.eat('(');
    let args: VariableOrFunctionDeclaration[] = [];
    while (this.curToken?.type == 'def') {
      this.eat('def');
      args.push(this.VariableOrFunctionDeclaration());
      // @ts-ignore
      if (this.curToken.type == ',') this.eat(',');
      else break;
    }
    this.eat(')');
    return args;
  }
  Expression(): Expression {
    return this.CommaExpression();
  }

  CommaExpression(): CommaExpression {
    let exp = this.AssignExpression();
    if (this.curToken?.type == ',') {
      let exps = [exp];
      while (this.curToken?.type == ',') {
        this.eat(',');
        exps.push(this.AssignExpression());
      }
      return {
        type: 'CommaExpression',
        expressions: exps,
      };
    }
    return exp;
  }
  AssignExpression(): AssignExpression {
    let left: AssignExpression = this.TernaryExpression();
    while (
      (left.type == 'MumberAccessExpression' || left.type == 'Identifier') &&
      (this.curToken?.type == 'AssignOpSimple' ||
        this.curToken?.type == 'AssignOpComplex')
    ) {
      let operator = this.eat(this.curToken.type).value;
      let right = this.AssignExpression();
      left = {
        type: 'AssignExpression',
        operator,
        left,
        right,
      };
    }
    return left;
  }
  TernaryExpression(): TernaryExpression {
    let condition: TernaryExpression = this.LogicalOrExpression();
    if (this.curToken?.type == 'TernaryOp?') {
      this.eat('TernaryOp?');
      let case1 = this.TernaryExpression();
      this.eat('TernaryOp:');
      let case2 = this.TernaryExpression();
      return {
        type: 'TernaryExpression',
        condition,
        case1,
        case2,
      };
    }
    return condition;
  }
  LogicalOrExpression(): LogicalOrExpression {
    return this.BineryExpression(this.LogicalAndExpression, 'LogicalOr');
  }
  LogicalAndExpression(): LogicalAndExpression {
    return this.BineryExpression(this.EqualityExpression, 'LogicalAnd');
  }
  EqualityExpression(): EqualityExpression {
    return this.BineryExpression(this.RelationalExpression, 'EqualityOp');
  }
  RelationalExpression(): RelationalExpression {
    return this.BineryExpression(this.AdditiveExpression, 'RelationalOp');
  }
  AdditiveExpression(): AdditiveExpression {
    return this.BineryExpression(this.MultiplicativeExpression, 'AddOp');
  }
  MultiplicativeExpression(): MultiplicativeExpression {
    return this.BineryExpression(this.PrimaryExpression, 'MutOp');
  }
  PrimaryExpression(): PrimaryExpression {
    switch (this.curToken?.type) {
      case 'Identifier':
      case 'this':
      case 'super':
        return this.MumberAccessExpressionOrFunctionCallExpression();
      case '(':
        return this.BracketedExpression();
      default:
        return this.Literal();
    }
  }
  MumberAccessExpressionOrFunctionCallExpression(): MumberAccessExpressionOrFunctionCallExpression {
    let mumberExp = this.MumberAccessExpression();
    if (this.curToken?.type == '(') {
      return {
        type: 'FunctionCall',
        calee: mumberExp,
        args: this.Arguments(),
      };
    }
    return mumberExp;
  }
  MumberAccessExpression(): MumberAccessExpression {
    let object!: MumberAccessExpression;
    switch (this.curToken?.type) {
      case 'this':
        object = this.This();
        break;
      case 'super':
        object = this.Super();
        break;
      case 'Identifier':
        object = this.Identifier();
        break;
      default:
        throw new SyntaxError(`unexpectted token:${this.curToken?.value}`);
    }
    // @ts-ignore
    while (this.curToken?.type == '.' || this.curToken.type == '[') {
      let property!: Identifier | Expression;
      let isIndex = false;
      if (this.curToken.type == '.') {
        this.eat('.');
        property = this.Identifier();
        isIndex = false;
      } else if (this.curToken.type == '[') {
        this.eat('[');
        property = this.Expression();
        this.eat(']');
        isIndex = true;
      }
      object = {
        type: 'MumberAccessExpression',
        object: object,
        property: property,
        isIndex,
      };
    }
    return object;
  }
  This(): This {
    let ts = this.eat('this').value;
    return {
      type: 'this',
      name: ts,
    };
  }
  Super(): Super {
    let sp = this.eat('super').value;
    return {
      type: 'super',
      name: sp,
    };
  }
  Identifier(): Identifier {
    let id = this.eat('Identifier').value;
    return {
      type: 'Identifier',
      name: id,
    };
  }
  Arguments(): Arguments {
    this.eat('(');
    let args: Array<AssignExpression> = [];
    if (this.curToken?.type == ')') {
      this.eat(')');
      return args;
    }
    args.push(this.AssignExpression());
    if (this.curToken?.type == ',') {
      this.eat(',');
      args.push(this.AssignExpression());
    }
    this.eat(')');
    return args;
  }
  BracketedExpression(): BracketedExpression {
    this.eat('(');
    let expression = this.Expression();
    this.eat(')');
    return {
      type: 'BracketedExpression',
      expression,
    };
  }
  Literal(): Literal {
    switch (this.curToken?.type) {
      case 'Number':
        return this.NumberLiteral();
      case 'String':
        return this.StringLiteral();
      case 'null':
        return this.NullLiteral();
      case 'Boolean':
        return this.BooleanLiteral();
      default:
        throw new SyntaxError(`unknow Literal: ${this.curToken?.value}`);
    }
  }
  NumberLiteral(): NumberLiteral {
    let val = this.eat('Number').value;
    return {
      type: 'NumberLiteral',
      value: val,
    };
  }
  BooleanLiteral(): BooleanLiteral {
    let val = this.eat('Boolean').value;
    return {
      type: 'BooleanLiteral',
      value: val,
    };
  }
  StringLiteral(): StringLiteral {
    let val = this.eat('String').value;
    return {
      type: 'StringLiteral',
      value: val,
    };
  }
  NullLiteral(): NullLiteral {
    let val = this.eat('null').value;
    return {
      type: 'NullLiteral',
      value: val,
    };
  }

  BineryExpression<ChildNode, operatorType extends TokenType>(
    childBuilder: () => ChildNode,
    operatorType: operatorType
  ): ChildNode | BineryExpression<ChildNode, operatorType> {
    let left: ChildNode | BineryExpression<ChildNode, operatorType> =
      childBuilder.apply(this);
    while (this.curToken?.type == operatorType) {
      let operator = this.eat(operatorType).value;
      let right = childBuilder.apply(this);
      left = {
        type: 'BineryExpression',
        operator,
        left,
        right,
      } as BineryExpression<ChildNode, operatorType>;
    }
    return left;
  }
  eat(tkt: TokenType) {
    if (this.curToken?.type != tkt) {
      throw new SyntaxError(
        `expected:'${tkt}';but actually get:'${this.curToken?.value}'`
      );
    }
    let token = this.tokens[this.tk_idx];
    this.curToken =
      this.tk_idx + 1 < this.tokens.length ? this.tokens[++this.tk_idx] : null;
    return token;
  }
}
