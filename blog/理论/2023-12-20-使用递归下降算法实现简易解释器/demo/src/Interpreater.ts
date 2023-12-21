import { AST_NODE } from './ast';

export class Interpreater {
  /**
   * 暂时的想法是，进入一个块作用域，就创建一个上下文对象，压入栈顶，
   * 当要在该作用域定义变量时，把变量存储到栈顶的上下文对象中。
   * 当要寻找一个变量的值时，则从栈顶往栈底遍历。
   * 当离开一个作用域时，弹出栈顶上下文对象，并将其销毁
   */
  ctxIdx = 0; // 上下文栈指针，第0个栈为系统栈
  ctxStack: Array<Map<string, any>> = [new Map()]; // 上下文对象栈
  constructor() {}

  exec(node?: AST_NODE): any {
    if (!node) return undefined;
    switch (node.type) {
      case 'Program':
      case 'BlockStatement':
        // 执行代码块，返回最后一条语句的值
        this.ctxIdx++;
        let res = node.statements.map((stm) => this.exec(stm)).pop();
        this.ctxIdx--;
        return res;
      case 'EmptyStatement':
        return undefined;
      case 'IfStatement':
        // TODO: 需要考虑 return 和 break
        if (this.exec(node.condition)) this.exec(node.case1);
        else if (node.case2) this.exec(node.case2);
        return undefined;
      case 'WhileStatement':
        // TODO: 需要考虑return 和 break
        while (this.exec(node.condition)) this.exec(node.statement);
        // 返回最后执行的一条语句
        return undefined;
      case 'IdentifierDeclarationsStatement':
        // 返回标识符列表
        return node.declarations.map((dec) => this.exec(dec));
      case 'VariableDeclaration':
        // 变量声明以及初始化
        return this.declear(node.name, this.exec(node.value));
      case 'FunctionDeclaration':
        // 返回函数名
        return this.declear(node.name, node);
      case 'ExpressionStatement':
        this.exec(node.expression);
        return undefined;
      case 'CommaExpression':
        // 计算并返回逗号表达式的最后一个值
        return node.expressions.map((exp) => this.exec(exp)).pop();
      case 'AssignExpression':
        switch (node.left.type) {
          case 'Identifier':
            return this.assign(
              node.left.name,
              node.operator,
              this.exec(node.right)
            );
          default:
            throw new SyntaxError('unimplement functions.');
        }
      case 'TernaryExpression':
        return this.exec(node.condition)
          ? this.exec(node.case1)
          : this.exec(node.case2);
      case 'BineryExpression':
        switch (node.operator) {
          case '||':
            return this.exec(node.left) || this.exec(node.right);
          case '&&':
            return this.exec(node.left) && this.exec(node.right);
          case '==':
            return this.exec(node.left) == this.exec(node.right);
          case '!=':
            return this.exec(node.left) != this.exec(node.right);
          case '<':
            return this.exec(node.left) < this.exec(node.right);
          case '>':
            return this.exec(node.left) > this.exec(node.right);
          case '<=':
            return this.exec(node.left) <= this.exec(node.right);
          case '>=':
            return this.exec(node.left) >= this.exec(node.right);
          case '+':
            return this.exec(node.left) + this.exec(node.right);
          case '-':
            return this.exec(node.left) - this.exec(node.right);
          case '*':
            return this.exec(node.left) * this.exec(node.right);
          case '/':
            return this.exec(node.left) / this.exec(node.right);
          case '%':
            return this.exec(node.left) % this.exec(node.right);
        }
        throw new SyntaxError(`unknow operator:${node.operator}`);
      case 'FunctionCall':
        switch (node.calee.type) {
          case 'Identifier':
            let symbol = node.calee.name;
            let fun: Function | AST_NODE = this.getVal(symbol);
            if (fun) {
              if (fun instanceof Function) {
                let args = node.args.map((arg) => this.exec(arg));
                return fun(args);
              } else if (fun.type == 'FunctionDeclaration') {
                // 计算实参
                let argValus = node.args.map((arg) => this.exec(arg));
                // 进入函数调用
                this.ctxIdx++;
                // 声明初始化形式参数
                let argNames = fun.FormedArguments.map((arg) => this.exec(arg));
                // 把实参传给形式参数
                argNames.forEach((name, idx) =>
                  this.assign(name, '=', argValus[idx])
                );
                let result = this.exec(fun.statements);
                this.ctxIdx--;
                return result;
              }
            } else {
              throw new SyntaxError(`unimplement function ${symbol}.`);
            }
          default:
            throw new SyntaxError('unimplement functions.');
        }
      case 'BracketedExpression':
        return this.exec(node.expression);
      case 'Identifier':
        return this.getVal(node.name);
      case 'NumberLiteral':
        return Number(node.value);
      case 'BooleanLiteral':
        return node.value == 'true' ? true : false;
      case 'StringLiteral':
        return node.value;
      case 'NullLiteral':
        return null;
      case 'MumberAccessExpression':
      case 'super':
      case 'this':
        throw new SyntaxError('unimplement functions.');
    }
  }
  /**
   * 获取当前作用域的上下文对象
   * 如果不存在，则要负责创建它
   */
  getCurrentContext() {
    this.ctxStack.length = this.ctxIdx + 1;
    let ctx = this.ctxStack[this.ctxIdx];
    if (!ctx) {
      ctx = this.ctxStack[this.ctxIdx] = new Map<string, any>();
    }
    return ctx;
  }
  /**
   * 自上而下的到上下文对象栈中去寻找定义了某个符号的上下文对象。
   */
  findContextWithSymbol(symbol: string) {
    this.ctxStack.length = this.ctxIdx + 1;
    let stack = this.ctxStack;
    for (let idx = this.ctxIdx; 0 <= idx; idx--) {
      const ctx = stack[idx];
      if (ctx && ctx.has(symbol)) return ctx;
    }
    return null;
  }
  registerFun(funName: string, fun: Function) {
    // 把预定义函数定义在系统栈中
    this.ctxStack[0].set(funName, fun);
  }
  /**
   * 在当前的作用域中声明变量
   */
  declear(symbol: string, val: any | undefined) {
    let ctx = this.getCurrentContext();
    if (ctx.has(symbol)) throw new SyntaxError(`redefined symbol: ${symbol}`);
    ctx.set(symbol, val);
    return symbol;
  }
  /**
   * 对一个已经定义的变量赋值
   */
  assign(symbol: string, operator: string, val: number) {
    let ctx = this.findContextWithSymbol(symbol);
    if (!ctx) throw new SyntaxError(`undefined symbol: ${symbol}`);
    let newVal = ctx.get(symbol);
    switch (operator) {
      case '=':
        newVal = val;
        break;
      case '+=':
        newVal += val;
        break;
      case '-=':
        newVal -= val;
        break;
      case '*=':
        newVal *= val;
        break;
      case '/=':
        newVal /= val;
        break;
      case '%=':
        newVal %= val;
        break;
      default:
        throw new SyntaxError(`unknow operator:${operator}`);
    }
    ctx.set(symbol, newVal);
    return newVal;
  }
  /**
   * 获取一个已经定义的变量的值
   */
  getVal(symbol: string) {
    let ctx = this.findContextWithSymbol(symbol);
    if (!ctx) throw new SyntaxError(`undefined symbol: ${symbol}`);
    return ctx.get(symbol);
  }
}
