export enum TokenTypes {
	Number = "Number",
	Name = "Name",
	Paren = "Paren", // 括号
	Add = "Add",
	Minus = "Minus",
	Multiple = "Multiple",
	Division = "Division",
	Equal = "Equal",
	Assign = "Assign",
	Semi = "Semi" // 分号
}
export type TokenNode = { type: TokenTypes; value: string };
// 代码词法分析
export function tokenizer(code: string) {
	const tokens: Array<TokenNode> = [];
	let current = 0;
	while (current < code.length) {
		// 数值
		if (code[current].match(/\d/)) {
			let token = "";
			let index = current;
			while (index < code.length && code[index].match(/\d/)) token += code[index++];
			tokens.push({ type: TokenTypes.Number, value: token });
			current = index;
		}
		// 变量名 字符数字，不以数字开头
		else if (code[current].match(/\w/)) {
			let token = "";
			let index = current;
			while (index < code.length && code[index].match(/\w/)) token += code[index++];
			tokens.push({ type: TokenTypes.Name, value: token });
			current = index;
		}
		// 括号
		else if (code[current] == "(" || code[current] == ")") {
			tokens.push({ type: TokenTypes.Paren, value: code[current] });
			current++;
		}
		// 加减乘除
		else if (code[current] == "+") {
			tokens.push({ type: TokenTypes.Add, value: code[current] });
			current++;
		} else if (code[current] == "-") {
			tokens.push({ type: TokenTypes.Minus, value: code[current] });
			current++;
		} else if (code[current] == "*") {
			tokens.push({ type: TokenTypes.Multiple, value: code[current] });
			current++;
		} else if (code[current] == "/") {
			tokens.push({ type: TokenTypes.Division, value: code[current] });
			current++;
		}
		// 等于号
		else if (code[current] == "=" && current + 1 < code.length && code[current + 1] == "=") {
			tokens.push({ type: TokenTypes.Equal, value: "==" });
			current += 2;
		}
		// 赋值号
		else if (code[current] == "=" && current + 1 < code.length && code[current + 1] != "=") {
			tokens.push({ type: TokenTypes.Assign, value: code[current] });
			current++;
		}
		// 分号
		else if (code[current] == ";") {
			tokens.push({ type: TokenTypes.Semi, value: code[current] });
			current++;
		}
		// 空白符
		else if (code[current].match(/\s/)) {
			current++;
		} else {
			current++;
		}
	}
	return tokens;
}

function main() {
	console.log(tokenizer("a+b/(1+1)"));
	console.log(tokenizer("(add 1 2)"));
	console.log(tokenizer("a=b a==b"));
	console.log(tokenizer("a=1;b=2;c=a+b;"));
}
// main();
