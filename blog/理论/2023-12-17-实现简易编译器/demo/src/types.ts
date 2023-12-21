/**
 * 按优先级来设计嵌套深度：
 * * 优先级越低，深度越浅，
 *   * 在该深度优先遍历的过程中，
 *   * 越先被遍历到，越晚被处理，
 *   * 节点处于抽象语法树的树根部位
 * * 优先级越高，深度越深，
 *   * 在该深度优先遍历的过程中，
 *   * 越晚被遍历到，越先被处理，
 *   * 节点处于抽象语法树的树叶部位
 *
 * 按经典C语言优先级（由低到高）：
 * * 括号表达式 前缀自增表达式 数组寻址 属性访问
 * * 后缀自增表达式 正负号 强制类型转换 取反 取址 寻址 sizeof
 * * 乘除取余运算
 * * 加减运算
 * * 移位运算
 * * 关系运算符
 * * 等值运算符
 * * 按位与
 * * 按位或
 * * 三元运算
 * * 赋值表达式
 */
import { TokenType } from "./Tokenizer";

/**
 * 程序
 * : 语句序列
 * ;
 */
export type Program = {
  type: "Program";
  body: Statements;
};
/**
 * 语句序列
 * : 语句 [语句]*
 * ;
 */
export type Statements = Array<Statement>;
/**
 * 语句
 * : 空语句
 * | 赋值语句
 * | 表达式语句
 * ;
 */
export type Statement =
  | EmptyStatement
  | VariableDeclarationInitsStatement
  | ExpressionStatement;
/**
 * 空语句
 * : `;`
 * ;
 */
export type EmptyStatement = {
  type: "EmptyStatement";
};
/**
 * 变量声明初始化语句
 * : `let` 变量初始化语句列表 `;`
 * ;
 * 变量初始化语句列表
 * : 变量初始化
 * | 变量初始化语句列表 `,` 变量初始化
 * ;
 * 变量初始化
 * : 标识符 [= 三目表达式]
 * ;
 */
export type VariableDeclarationInitsStatement = {
  type: "VariableDeclarationInitStatement";
  variableType: "let";
  declaration: VariableDeclaration;
};
export type VariableDeclaration = {
  type: "VariableDeclarations";
  inits: Array<VariableInit>;
};
export type VariableInit = {
  type: "VariableInit";
  identifier: string;
  init?: TernaryOperationExpression; // 三目表达式，因为该表达式的优先级比逗号低
};
/**
 * 表达式语句
 * : 表达式 `;`
 * ;
 */
export type ExpressionStatement = {
  type: "ExpressionStatement";
  expression: Expression;
};
/**
 * 表达式
 * : 逗号表达式
 * ;
 */
export type Expression = CommaExpression;

/**
 * 逗号表达式
 * : 赋值表达式
 * | 逗号表达式 [',' 赋值表达式]*
 * ;
 */
// 逗号表达式
export type CommaExpression =
  | AssignExpression
  | {
      type: "CommaExpression";
      expressions: Array<AssignExpression>;
    };
/**
 * 赋值表达式
 * : 三目运算表达式
 * | 左值表达式 [= 三目运算表达式]?
 * | 左值表达式 [+= 三目运算表达式]?
 * | 左值表达式 [-= 三目运算表达式]?
 * | 左值表达式 [*= 三目运算表达式]?
 * | 左值表达式 [/= 三目运算表达式]?
 * ;
 */
// 赋值表达式
export type AssignExpression =
  | TernaryOperationExpression
  | {
      type: "AssignExpression";
      operatorType: Extract<"SIMPLE_ASSIGN" | "COMPLEX_ASSIGN", TokenType>;
      operator: string;
      // 应该能保证只有成员变量或标识符能被赋值
      left: MumberExpression | Identifier;
      right: TernaryOperationExpression;
    };
/**
 * 三目运算表达式
 * : 双目运算表达式
 * | 逻辑表达式 ? 双目运算表达式 : 双目运算表达式
 * ;
 */
// 三目运算表达式
export type TernaryOperationExpression =
  | BinaryOperationExpression
  | {
      type: "TernaryOperationExpression";
      condition: LogicalExpression;
      case1: TernaryOperationExpression;
      case2: TernaryOperationExpression;
    };
/**
 * 双目运算表达式
 * : 逻辑表达式
 * ;
 */
// 双目运算表达式
export type BinaryOperationExpression = LogicalExpression;
/**
 * 逻辑表达式
 * : 逻辑或表达式
 * ;
 */
// 逻辑表达式
export type LogicalExpression = LogicalOrExpression;
/**
 * 逻辑或表达式
 * : 逻辑与表达式 [|| 逻辑与表达式]*
 * ;
 */
// 逻辑或表达式
export type LogicalOrExpression = GeneralBinaryExpression<
  LogicalAndExpression,
  "||"
>;
/**
 * 逻辑与表达式
 * : 等值判断表达式 [&& 等值判断表达式]*
 * ;
 */
// 逻辑与表达式
export type LogicalAndExpression = GeneralBinaryExpression<
  EqualityExpression,
  "&&"
>;
/**
 * 等值判断表达式
 * : 关系表达式 [== 关系表达式]*
 * | 关系表达式 [!= 关系表达式]*
 * ;
 */
// 条件表达式
export type EqualityExpression = GeneralBinaryExpression<
  RelationalExpression,
  "Equality_OPERATOR"
>;
/**
 * 关系表达式
 * : 算数表达式 [< 算数表达式]*
 * : 算数表达式 [> 算数表达式]*
 * : 算数表达式 [<= 算数表达式]*
 * : 算数表达式 [>= 算数表达式]*
 */
// 关系表达式
export type RelationalExpression = GeneralBinaryExpression<
  ArithmeticExpression,
  "Relational_OPERATOR"
>;
/**
 * 算数表达式
 * : 加减运算表达式
 * ;
 */
// 数学表达式
export type ArithmeticExpression = AdditiveExpression;
/**
 * 加减运算表达式
 * : 乘除取余运算表达式 [+ 乘除取余运算表达式]*
 * : 乘除取余运算表达式 [- 乘除取余运算表达式]*
 * ;
 */
// 加减表达式
export type AdditiveExpression = GeneralBinaryExpression<
  MultiplicativeExpression,
  "ADDITIVE_OPERATOR"
>;
/**
 * 乘除取余运算表达式
 * : 单目表达式 [* 单目表达式]*
 * : 单目表达式 [/ 单目表达式]*
 * : 单目表达式 [% 单目表达式]*
 * ;
 */
// 乘除表达式
export type MultiplicativeExpression = GeneralBinaryExpression<
  UnaryExpression,
  "MULTIPLICATIVE_OPERATOR"
>;
/**
 * 单目表达式
 * : 前缀表达式
 * ;
 */
export type UnaryExpression = PostfixExpression;
/**
 * 前缀表达式
 * : 后缀表达式
 * | `!`  后缀表达式
 * | `++` 后缀表达式
 * | `--` 后缀表达式
 * ;
 */
export type PostfixExpression =
  | SuffixExpression
  | {
      type: "PostfixExpression";
      operatorType: Extract<TokenType, "!" | "++" | "--">;
      operator: string;
      value: SuffixExpression;
    };
/**
 * 后缀表达式
 * : 左值表达式
 * | 左值表达式 `++`
 * | 左值表达式 `--`
 * ;
 */
export type SuffixExpression =
  | LeftHandExpression
  | {
      type: "AfterfixExpression";
      operatorType: Extract<TokenType, "++" | "--">;
      operator: string;
      value: LeftHandExpression;
    };
/**
 * 由于此处的左值表达式并不是真的左值，比如说字面量也被包含在这里面了，
 * 如果编程者对字面量赋值，该阶段不会报错，需要到语法分析阶段检查。
 *
 * 左值表达式
 * : 函数调用或成员表达式
 * ;
 */
export type LeftHandExpression = MumberOrFunCallExpression;

/**
 * 函数调用或成员表达式
 * : 成员表达式
 * | 函数调用表达式 ::= 成员表达式(args)
 * ;
 */
export type MumberOrFunCallExpression = MumberExpression | FunCallExpression;
/**
 * 函数调用表达式
 * : 被调用者 形式参数
 * ;
 */
export type FunCallExpression = {
  type: "FunCallExpression";
  calee: Calee;
  arguments: Arguments;
};
/*
 * 被调用者
 * : 成员表达式
 * | 函数调用表达式
 * ;
 */
export type Calee = MumberExpression | FunCallExpression;
/*
 * 形式参数
 * : '(' 括号表达式 ')'
 * ;
 */
export type Arguments = Array<AssignExpression>;

/**
 * 成员表达式
 * : 主表达式
 * | 成员表达式 '.' 标识符
 * | 成员表达式 '[' 表达式 ']'
 * ;
 */
export type MumberExpression =
  | PrimaryExpression
  | {
      type: "MumberExpression";
      object: MumberExpression;
      mumber: Identifier | Expression;
      isIdx: boolean;
    };
/**
 * 主表达式
 * : this
 * | new表达式
 * | 标识符
 * | 字面量
 * | 括号表达式
 * ;
 */
export type PrimaryExpression =
  | ThisExpression
  | NewExpression
  | Identifier
  | Literal
  | BracketExpression;

export type ThisExpression = {
  type: "this";
};
/**
 * new表达式:
 * : 'new' 成员表达式 形式参数
 * ;
 */
export type NewExpression = {
  type: "NewExpression";
  mumber: MumberExpression;
  arguments: Arguments;
};
export type Identifier = {
  type: "Identifier";
  name: string;
};
/**
 * 字面量
 * : 数字
 * | 字符串
 * | 布尔值
 * | NULL
 */
export type Literal =
  | NumericLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral;
export type NumericLiteral = {
  type: "NumericLiteral";
  value: string;
};
export type StringLiteral = {
  type: "StringLiteral";
  value: string;
};
export type BooleanLiteral = {
  type: "BooleanLiteral";
  value: string;
};
export type NullLiteral = {
  type: "NullLiteral";
  value: string;
};
// export type Identiify = {
//   type: "Identiify";
//   name: string;
// };
export type MemberExpression = {
  type: "MemberExpression";
  name: string;
};

/**
 * 括号表达式
 * : '(' 表达式 ')'
 * ;
 */
// 括号表达式
export type BracketExpression = {
  type: "BracketExpression";
  expression: Expression;
};

/**
 * 广义双目表达式<高优先级文法规则,操作符>
 * | 高优先级文法规则 [操作符 高优先级文法规则]*
 * ;
 */
// 广义双目表达式
export type GeneralBinaryExpression<
  ChildNode,
  BinaryOpType extends TokenType,
> =
  | ChildNode
  | {
      type: "BinaryExpression";
      operatorType: BinaryOpType;
      operator: string;
      left: ChildNode;
      right: ChildNode;
    };

export interface IParser {
  parse: (code: string) => Program;
}

export type AST_NODE =
  | Program
  | EmptyStatement
  | VariableDeclarationInitsStatement
  | VariableDeclaration
  | VariableInit
  | ExpressionStatement
  | Expression
  | CommaExpression
  | AssignExpression
  | TernaryOperationExpression
  | BinaryOperationExpression
  | LogicalExpression
  | LogicalOrExpression
  | LogicalAndExpression
  | EqualityExpression
  | RelationalExpression
  | ArithmeticExpression
  | AdditiveExpression
  | MultiplicativeExpression
  | UnaryExpression
  | PostfixExpression
  | SuffixExpression
  | FunCallExpression
  | MumberExpression
  | ThisExpression
  | NewExpression
  | Identifier
  | NumericLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral
  // | Identiify
  | MemberExpression
  | BracketExpression;
