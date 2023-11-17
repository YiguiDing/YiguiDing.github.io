"use strict";
exports.__esModule = true;
exports.parser = exports.ASTNodeTypes = void 0;
var tokenizer_1 = require("./tokenizer");
exports.ASTNodeTypes = {
    Root: "Program",
    Number: "NumberExpression",
    Paren: "ParenExpression",
    Add: "AddExpression",
    Multiple: "MultipleExpression",
    Function: "FunctionExpression"
};
// 创建抽象语法树根节点
function createRoot() {
    return {
        type: exports.ASTNodeTypes.Root,
        body: []
    };
}
// 创建抽象语法树数字节点
function createNumberNode(value) {
    return {
        type: exports.ASTNodeTypes.Number,
        value: value
    };
}
function createParenNode(paramsA, paramsB) {
    return {
        type: exports.ASTNodeTypes.Paren,
        params: [paramsB]
    };
}
function createAddNode(operator, paramsA, paramsB) {
    return {
        type: exports.ASTNodeTypes.Add,
        operator: operator,
        params: [paramsA, paramsB]
    };
}
function createMultipleNode(operator, paramsA, paramsB) {
    return {
        type: exports.ASTNodeTypes.Multiple,
        operator: operator,
        params: [paramsA, paramsB]
    };
}
function createFunctionNode(name, params) {
    return {
        type: exports.ASTNodeTypes.Function,
        name: name,
        params: params
    };
}
function parser(tokens) {
    var rootNode = createRoot();
    var current = 0;
    var stack = [];
    function moveStep() {
        var current_token = tokens[current];
        var next_token = tokens[current + 1];
        current++;
        console.log("current:", current_token);
        console.log("index:", current);
        // 递归终止条件
        if (current > tokens.length && stack.length != 0) {
            return stack.pop();
        }
        // 数字
        else if (current_token.type == tokenizer_1.TokenTypes.Number) {
            stack.push(createNumberNode(current_token.value));
            return moveStep();
        }
        // 加法
        else if (current_token.type == tokenizer_1.TokenTypes.Add) {
            var left = stack.pop(); // 1+1  遇到+号时，弹出上次入栈的元素
            var right = moveStep(); // 读取下一个操作数
            stack.push(createAddNode(current_token.value, left, right));
            return moveStep();
        }
        // 乘法
        else if (current_token.type == tokenizer_1.TokenTypes.Multiple) {
            var left = stack.pop(); // 1+1  遇到+号时，弹出上次入栈的元素
            var right = moveStep(); // 读取下一个操作数
            return createMultipleNode(current_token.value, left, right);
        }
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
        else
            throw new Error("未处理标识符");
    }
    while (current < tokens.length) {
        rootNode.body.push(moveStep());
    }
    return rootNode;
}
exports.parser = parser;
function main() {
    console.log(JSON.stringify(parser(tokenizer_1.tokenizer("1+2*2")), null, 2));
}
main();
