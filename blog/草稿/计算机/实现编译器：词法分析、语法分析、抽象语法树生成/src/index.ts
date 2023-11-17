interface Expression {
	interpret(context: Context): number;
}

class Variable implements Expression {
	constructor(protected name) {
		this.name = name;
	}
	interpret(context: Context) {
		return context.getValue(this)?.interpret(context) as number;
	}
}
class Value implements Expression {
	constructor(protected value: number) {
		this.value = value;
	}
	interpret(context: Context) {
		return this.value;
	}
}
class Add implements Expression {
	constructor(protected left: Expression, protected right: Expression) {
		this.left = left;
		this.right = right;
	}
	interpret(context: Context) {
		return this.left.interpret(context) + this.right.interpret(context);
	}
}
class Minus implements Expression {
	constructor(protected left: Expression, protected right: Expression) {
		this.left = left;
		this.right = right;
	}
	interpret(context: Context) {
		return this.left.interpret(context) - this.right.interpret(context);
	}
}

class SingleEqual implements Expression {
	constructor(protected left: Variable, protected right: Expression) {
		this.left = left;
		this.right = right;
	}
	interpret(context: Context) {
		context.setValue(this.left, new Value(this.right.interpret(context)));
		return this.left.interpret(context);
	}
}

class Pow implements Expression {
	constructor(protected left: Expression, protected right: Expression) {
		this.left = left;
		this.right = right;
	}
	interpret(context: Context) {
		return Math.pow(this.left.interpret(context), this.right.interpret(context));
	}
}

class Context {
	context = new Map<Variable, Value>();
	setValue(variable: Variable, value: Value) {
		this.context.set(variable, value);
	}
	getValue(variable: Variable) {
		return this.context.get(variable);
	}
}

function main1() {
	// 上下文
	const ctx = new Context();

	const a = new Variable("a");
	const b = new Variable("b");
	const c = new Variable("c");
	const d = new Variable("d");
	const result = new Variable("result");

	// 赋值
	new SingleEqual(a, new Value(1)).interpret(ctx); // a = 1
	new SingleEqual(b, new Value(2)).interpret(ctx); // b = 2
	new SingleEqual(c, new Value(3)).interpret(ctx); // c = 3
	new SingleEqual(d, new Value(4)).interpret(ctx); // d = 4

	// result = (a+b)-(c+d)
	new SingleEqual(result, new Minus(new Add(a, b), new Add(c, d))).interpret(ctx);

	console.log(result.interpret(ctx));
}
main1();

function main2() {
	// 上下文
	const ctx = new Context();

	const a = new Variable("a");
	const b = new Variable("b");
	const result = new Variable("result");

	// 赋值
	new SingleEqual(a, new Value(2)).interpret(ctx); // a = 2
	new SingleEqual(b, new Value(3)).interpret(ctx); // b = 3

	// result = (a+b)-(c+d)
	new SingleEqual(result, new Pow(a, b)).interpret(ctx);

	console.log(result.interpret(ctx));
}
// main2();
