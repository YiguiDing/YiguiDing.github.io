import { TokenNode, TokenTypes, tokenizer } from "./tokenizer";

export const ASTNodeTypes = {
	Root: "Program",
	Number: "NumberExpression",
	Paren: "ParenExpression",
	Add: "AddExpression",
	Multiple: "MultipleExpression",
	Function: "FunctionExpression"
} as const;
type ValueOf<T> = T[keyof T];

export type ASTNodeTypesEnum = ValueOf<typeof ASTNodeTypes>;
export interface ASTBaseNode {
	type: ASTNodeTypesEnum;
}

export interface ASTRootNode extends ASTBaseNode {
	type: typeof ASTNodeTypes.Root;
	body: Array<ASTChildNode>;
}
export type ASTNode = ASTRootNode | ASTChildNode;
export type ASTChildNode = ASTNumberItem | ASTAddItem | ASTParenItem | ASTMultipleItem;
export interface ASTNumberItem extends ASTBaseNode {
	type: typeof ASTNodeTypes.Number;
	value: string;
}
interface ASTParenItem extends ASTBaseNode {
	type: typeof ASTNodeTypes.Paren;
	params: ASTChildNode[];
}
export interface ASTAddItem extends ASTBaseNode {
	type: typeof ASTNodeTypes.Add;
	operator: string;
	params: [ASTChildNode, ASTChildNode];
}
export interface ASTMultipleItem extends ASTBaseNode {
	type: typeof ASTNodeTypes.Multiple;
	operator: string;
	params: [ASTChildNode, ASTChildNode];
}
export interface ASTFunctionItem extends ASTBaseNode {
	type: typeof ASTNodeTypes.Function;
	name: string;
	params: ASTChildNode[];
}

// 创建抽象语法树根节点
function createRoot(): ASTRootNode {
	return {
		type: ASTNodeTypes.Root,
		body: []
	};
}
// 创建抽象语法树数字节点
function createNumberNode(value: string): ASTNumberItem {
	return {
		type: ASTNodeTypes.Number,
		value: value
	};
}
function createParenNode(paramsA: ASTChildNode, paramsB: ASTChildNode): ASTParenItem {
	return {
		type: ASTNodeTypes.Paren,
		params: [paramsB]
	};
}
function createAddNode(operator: string, paramsA: ASTChildNode, paramsB: ASTChildNode): ASTAddItem {
	return {
		type: ASTNodeTypes.Add,
		operator: operator,
		params: [paramsA, paramsB]
	};
}
function createMultipleNode(operator: string, paramsA: ASTChildNode, paramsB: ASTChildNode): ASTMultipleItem {
	return {
		type: ASTNodeTypes.Multiple,
		operator: operator,
		params: [paramsA, paramsB]
	};
}
function createFunctionNode(name: string, params: ASTChildNode[]): ASTFunctionItem {
	return {
		type: ASTNodeTypes.Function,
		name: name,
		params: params
	};
}

export function parser(tokens: Array<TokenNode>) {
	const rootNode = createRoot();
	let current = 0;
	const stack: Array<ASTChildNode> = [];
	function moveStep(): ASTChildNode {
		const current_token = tokens[current];
		const next_token = tokens[current + 1];
		current++;
		console.log("current:", current_token);
		console.log("index:", current);

		// 递归终止条件
		if (current > tokens.length && stack.length != 0) {
			return stack.pop() as ASTChildNode;
		}
		// 数字
		else if (current_token.type == TokenTypes.Number) {
			stack.push(createNumberNode(current_token.value));
			return moveStep();
		}
		// 加法
		else if (current_token.type == TokenTypes.Add) {
			const left = stack.pop() as ASTNumberItem; // 1+1  遇到+号时，弹出上次入栈的元素
			const right = moveStep(); // 读取下一个操作数
			stack.push(createAddNode(current_token.value, left, right));
			return moveStep();
		}
		// 乘法
		// else if (current_token.type == TokenTypes.Multiple) {
		// 	const left = stack.pop() as ASTNumberItem; // 1+1  遇到+号时，弹出上次入栈的元素
		// 	const right = moveStep(); // 读取下一个操作数
		// 	return createMultipleNode(current_token.value, left, right);
		// }
		// // 函数调用处理
		// else if (current_token.type == TokenTypes.Name && next_token.value == "(") {
		// 	// let args = [];
		// 	// while (current < tokens.length && tokens[current].value != ")") {}
		// 	// return createFunctionNode();
		// }
		// // 括号优先级处理
		// else if (current_token.type == TokenTypes.Paren && current_token.value == "(") {
		// 	while (current < tokens.length && tokens[current].value != ")") {
		// 		rootNode.body.push(moveStep());
		// 	}
		// 	return rootNode.body.pop(); // 这里充分利用了递归来实现，此处的return将能处理遇到的第一个左括号和最后一个右括号内的全部内容
		// }
		// // 括号优先级处理
		// else if (current_token.type == TokenTypes.Paren && current_token.value == ")") {
		// 	return rootNode.body.pop();
		// }
		else throw new Error("未处理标识符");
	}
	while (current < tokens.length) {
		rootNode.body.push(moveStep());
	}
	return rootNode;
}

function main() {
	console.log(JSON.stringify(parser(tokenizer("1+2*2")), null, 2));
}
main();
