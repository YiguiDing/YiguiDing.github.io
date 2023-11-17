import { ASTRootNode, ASTNumberItem, ASTAddItem, ASTNodeTypes, ASTChildNode, ASTNode, ASTNodeTypesEnum } from "./parser";
import { parser } from "./parser";
import { tokenizer } from "./tokenizer";

interface VisiterOption {
	enter(node: ASTNode, parent: ASTNode): void;
	leave(node: ASTNode, parent: ASTNode): void;
}
type Visiter = Partial<Record<ASTNodeTypesEnum, VisiterOption>>;

function traverser(ASTRoot: ASTRootNode, visiter: Visiter) {
	// 遍历子节点
	function traverserEach(nodes: Array<ASTChildNode>, parent: ASTNode) {
		nodes.forEach(node => traverserNode(node, parent));
	}
	// 遍历单个节点
	function traverserNode(node: ASTNode, parent: ASTNode) {
		visiter[node.type]?.enter(node, parent); // 访问该节点
		console.log(node);
		switch (node.type) {
			case ASTNodeTypes.Root:
				traverserEach(node.body, node);
				break;
			case ASTNodeTypes.Number:
				break;
			case ASTNodeTypes.Add:
				traverserEach(node.params, node);
				break;
			case ASTNodeTypes.Multiple:
				traverserEach(node.params, node);
				break;
			default:
				new Error("遇到暂时无法遍历的节点");
		}
		visiter[node.type]?.leave(node, parent); // 离开该节点
	}
	traverserNode(ASTRoot, null as unknown as ASTNode); // 从根节点开始遍历
}

function main() {
	traverser(parser(tokenizer("1+(2+(1*7))")), {
		AddExpression: {
			enter: (node, parent) => {
				console.log("进入add");
			},
			leave: (node, parent) => {
				console.log("离开add");
			}
		}
	});
}
main();
