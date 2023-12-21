import { TokenType } from './Tokenizer';

/**
 * Program
 * : Statements
 * ;
 */
export interface Program extends AST_BASE_NODE {
  type: 'Program';
  statements: Statements;
}
/**
 * Statements
 * : Statement
 * | Statements Statement
 * ;
 */
export type Statements = Array<Statement>;
/**
 * 语句
 * Statement
 * : EmptyStatement
 * | IdentifierDeclarationsStatement
 * | ExpressionStatement
 * ;
 */
export type Statement =
  | EmptyStatement
  | BlockStatement
  | IfStatement
  | WhileStatement
  | IdentifierDeclarationsStatement
  | ExpressionStatement;
/**
 * 空语句
 * EmptyStatement
 * : ';'
 * ;
 */
export interface EmptyStatement extends AST_BASE_NODE {
  type: 'EmptyStatement';
}

/**
 * 代码块
 * BlockStatement
 * | '{' Statements '}'
 * ;
 */
export interface BlockStatement extends AST_BASE_NODE {
  type: 'BlockStatement';
  statements: Statements;
}

/**
 * if语句：
 * IfStatement
 * : if(Expression) [空语句,块语句]
 * | IfStatement ['else' [空语句,块语句,if语句]]*
 * ;
 *
 * 简化
 * 由于 `Statement:=空语句|块语句|if语句|...;` 所以可以直接简化：
 * IfStatement
 * : if(Expression) Statement
 * | IfStatement [else Statement]?
 * ;
 */
export interface IfStatement extends AST_BASE_NODE {
  type: 'IfStatement';
  condition: Expression;
  case1: Statement;
  case2?: Statement;
}
/**
 * WhileStatement
 * : while(表达式) 空语句|单语句|块语句|....
 * ;
 *
 * 简化
 * WhileStatement
 * : while(表达式) 语句
 * ;
 */
export interface WhileStatement extends AST_BASE_NODE {
  type: 'WhileStatement';
  condition: Expression;
  statement: Statement;
}
/**
 * 标识符声明语句可以用来声明多个变量或函数
 *
 * 标识符声明语句
 * | 'def' [变量或函数声明]+ ';'
 * ;
 */
export interface IdentifierDeclarationsStatement extends AST_BASE_NODE {
  type: 'IdentifierDeclarationsStatement';
  declarations: Array<VariableOrFunctionDeclaration>;
}
/**
 * 变量或函数声明，
 * 函数声明的写法是 ：标识符 + [(]
 * 变量声明的写法是 ：标识符 + [= 表达式]?
 * 区别就在于有没有括号
 *
 * 变量或函数声明:
 * | 函数声明
 * : 变量声明
 * ;
 */
export type VariableOrFunctionDeclaration =
  | VariableDeclaration
  | FunctionDeclaration;
/**
 * 变量声明由一个标识符和一个可选的初始化语句组成，初始化语句由'='符号开头。
 *
 * 变量声明
 * : 标识符 ['=' 逻辑或表达式]?
 * : 标识符 变量声明初始化?
 * ;
 */
export interface VariableDeclaration extends AST_BASE_NODE {
  type: 'VariableDeclaration';
  name: string;
  value?: VariableDeclarationInit;
}
/**
 * 变量声明初始化
 * : ['=' 逻辑或表达式]?
 * ;
 */
export type VariableDeclarationInit = LogicalOrExpression | undefined;
/**
 * 函数声明
 * : 标识符 函数形式参数列表 块语句组成
 * ;
 *
 * FunctionDeclaration
 * | Identifier FormedArguments  BlockStatement
 * ;
 */
export interface FunctionDeclaration extends AST_BASE_NODE {
  type: 'FunctionDeclaration';
  name: string;
  FormedArguments: FormedArguments;
  statements: BlockStatement;
}
/**
 * 函数形式参数列表
 * : (   [    [def 变量或函数声明]    [,def 变量或函数声明]*    ]*    )
 * ;
 *
 * FormedArguments
 * : (   [    [def VariableOrFunctionDeclaration]    [,def VariableOrFunctionDeclaration]*    ]*    )
 * ;
 */
export type FormedArguments = Array<VariableOrFunctionDeclaration>;

/**
 * 表达式语句
 * ExpressionStatement
 * : Expression ';'
 * ;
 */
export interface ExpressionStatement extends AST_BASE_NODE {
  type: 'ExpressionStatement';
  expression: Expression;
}
/**
 * 表达式
 * Expression
 * : CommaExpression
 * ;
 */
export type Expression = CommaExpression;

/**
 * 逗号表达式
 * CommaExpression
 * | AssignExpression [CommaOp AssignExpression]*
 * ;
 */
export type CommaExpression = AssignExpression | _CommaExpression;
export interface _CommaExpression extends AST_BASE_NODE {
  type: 'CommaExpression';
  expressions: Array<AssignExpression>;
}
/**
 * 赋值表达式
 * AssignExpression
 * : TernaryExpression
 * | MumberAccessExpression [AssignOp AssignExpression]*
 * ;
 */
export type AssignExpression = TernaryExpression | _AssignExpression;
export interface _AssignExpression extends AST_BASE_NODE {
  type: 'AssignExpression';
  operator: string;
  left: MumberAccessExpression | Identifier;
  right: AssignExpression;
}

/**
 * 三目表达式
 * TernaryExpression
 * : LogicalOrExpression [? TernaryExpression : TernaryExpression]
 * ;
 */
export type TernaryExpression = LogicalOrExpression | _TernaryExpression;
export interface _TernaryExpression extends AST_BASE_NODE {
  type: 'TernaryExpression';
  condition: LogicalOrExpression;
  case1: TernaryExpression;
  case2: TernaryExpression;
}
/**
 * 双目运算表达式
 * BineryExpression<Child,OpType>
 * | Child OpType Child
 * ;
 */
export interface BineryExpression<Child, OpType extends TokenType>
  extends AST_BASE_NODE {
  type: 'BineryExpression';
  operatorType: Extract<TokenType, OpType>;
  operator: string;
  left: Child;
  right: Child;
}
/**
 * 逻辑或表达式
 * LogicalOrExpression
 * : LogicalAndExpression [LogicalOr LogicalAndExpression]*
 * ;
 */
export type LogicalOrExpression =
  | LogicalAndExpression
  | BineryExpression<LogicalAndExpression, 'LogicalOr'>;
/**
 * 逻辑或表达式
 * LogicalAndExpression
 * : EqualityExpression [LogicalAnd EqualityExpression]*
 * ;
 */
export type LogicalAndExpression =
  | EqualityExpression
  | BineryExpression<EqualityExpression, 'LogicalAnd'>;
/**
 * 等值表达式
 * EqualityExpression
 * : RelationalExpression [EqualityOp RelationalExpression]*
 * ;
 */
export type EqualityExpression =
  | RelationalExpression
  | BineryExpression<RelationalExpression, 'EqualityOp'>;
/**
 * 关系表达式
 * EqualityExpression
 * : AdditiveExpression [RelationalOp AdditiveExpression]*
 * ;
 */
export type RelationalExpression =
  | AdditiveExpression
  | BineryExpression<AdditiveExpression, 'RelationalOp'>;
/**
 * 加减表达式
 * AdditiveExpression
 * : MultiplicativeExpression
 * | AdditiveExpression AddOp MultiplicativeExpression
 * ;
 */
export type AdditiveExpression =
  | MultiplicativeExpression
  | BineryExpression<MultiplicativeExpression, 'AddOp'>;
/**
 * 乘除取余表达式
 * MultiplicativeExpression
 * : PrimaryExpression
 * | PrimaryExpression MutOp PrimaryExpression
 * ;
 */
export type MultiplicativeExpression =
  | PrimaryExpression
  | BineryExpression<PrimaryExpression, 'MutOp'>;
/**
 * 成员属性访问表达式和函数调用都以标识符开头，这是字面量所没有的特征
 * 所以在主表达式中可以根据该特征来做区分
 *
 * PrimaryExpression
 * : MumberAccessExpressionOrFunctionCallExpression
 * | BracketedExpression
 * | Literal
 * ;
 */
export type PrimaryExpression =
  | MumberAccessExpressionOrFunctionCallExpression
  | BracketedExpression
  | Literal;
/**
 * 成员属性访问表达式和函数调用的区分就在于后续有没有括号
 * 所以可以先假设这里是一个成员属性访问表达式，如果后面接着一个括号，则假设错误，说明这里是一个函数调用
 *
 * MumberAccessExpressionOrFunctionCallExpression
 * : MumberAccessExpression
 * | FunctionCall
 * ;
 */
export type MumberAccessExpressionOrFunctionCallExpression =
  | MumberAccessExpression
  | FunctionCall;
/**
 * 成员属性访问表达式
 * 把this,super,标识符,都归到这类，因为他们都有相同的特征
 *
 * MumberAccessExpression
 * : This
 * | Super
 * | Identifier
 * | MumberAccessExpression '.' Identifier
 * | MumberAccessExpression '[' Expression ']'
 * ;
 */
export type MumberAccessExpression =
  | This
  | Super
  | Identifier
  | _MumberAccessExpression;
export interface _MumberAccessExpression extends AST_BASE_NODE {
  type: 'MumberAccessExpression';
  object: MumberAccessExpression;
  property: Identifier | Expression;
  isIndex: boolean;
}
/**
 * FunctionCall
 * : Calee Arguments
 * ;
 */
export interface FunctionCall extends AST_BASE_NODE {
  type: 'FunctionCall';
  calee: Calee;
  args: Arguments;
}
/**
 * Calee
 * : MumberAccessExpression
 * ;
 */
export type Calee = MumberAccessExpression;
/**
 * Arguments
 * : '(' AssignExpression ')'
 * | '(' ')'
 * ;
 */
export type Arguments = Array<AssignExpression>;
/**
 * This
 * : 'this'
 * ;
 */
export interface This extends AST_BASE_NODE {
  type: 'this';
  name: string;
}
/**
 * Super
 * : 'super'
 * ;
 */
export interface Super extends AST_BASE_NODE {
  type: 'super';
  name: string;
}
/**
 * Identifier
 * : [\w]+
 * ;
 */
export interface Identifier extends AST_BASE_NODE {
  type: 'Identifier';
  name: string;
}
/**
 * 括号表达式
 * BracketedExpression
 * : '(' Expression ')'
 * ;
 * 这里原本可以直接写 BracketedExpression = Expression; 但是这会导致类型循环定义。
 */
export interface BracketedExpression extends AST_BASE_NODE {
  type: 'BracketedExpression';
  expression: Expression;
}
/**
 * Literal
 * : NumberLiteral
 * | BooleanLiteral
 * | StringLiteral
 * | NullLiteral
 * ;
 */
export type Literal =
  | NumberLiteral
  | BooleanLiteral
  | StringLiteral
  | NullLiteral;
export interface NumberLiteral extends AST_BASE_NODE {
  type: 'NumberLiteral';
  value: string;
}
export interface BooleanLiteral extends AST_BASE_NODE {
  type: 'BooleanLiteral';
  value: string;
}
export interface StringLiteral extends AST_BASE_NODE {
  type: 'StringLiteral';
  value: string;
}
export interface NullLiteral extends AST_BASE_NODE {
  type: 'NullLiteral';
  value: string;
}

export type AST_NODE_TYPE =
  | 'Program'
  | 'Statement'
  | 'EmptyStatement'
  | 'BlockStatement'
  | 'IfStatement'
  | 'WhileStatement'
  | 'IdentifierDeclarationsStatement'
  | 'VariableDeclaration'
  | 'FunctionDeclaration'
  | 'ExpressionStatement'
  | 'AssignExpression'
  | 'CommaExpression'
  | 'TernaryExpression'
  | 'BineryExpression'
  | 'MumberAccessExpression'
  | 'this'
  | 'super'
  | 'Identifier'
  | 'FunctionCall'
  | 'NumberLiteral'
  | 'BooleanLiteral'
  | 'StringLiteral'
  | 'NullLiteral'
  | 'BracketedExpression';

export type AST_NODE =
  | Program
  | Statement
  | EmptyStatement
  | BlockStatement
  | IfStatement
  | WhileStatement
  | IdentifierDeclarationsStatement
  | VariableDeclaration
  | FunctionDeclaration
  | ExpressionStatement
  | Expression /* Expression中以递归下降的方式定义了其他所有表达式 */;

export interface AST_BASE_NODE {
  type: AST_NODE_TYPE;
}
