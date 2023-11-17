package 蓝桥杯历年真题刷题笔记._2015_java_B_;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.Stack;
import java.util.ArrayList;

public class _10_生命之树 {
	public static void main(String[] args) {
		Graph g = Graph.convert();
		g.dfs(g.nodes.iterator().next(), null);
		System.out.println(g.maxScore);
	}
}

class Graph {
	Set<Node> nodes = new HashSet<>();
	Set<Edge> edges = new HashSet<>();

	// 读取输入
	static Graph convert() {
		Graph graph = new Graph();
		Scanner sc = new Scanner(System.in);
		List<Node> indexNodes = new ArrayList<>();
		Long N = sc.nextLong();
		for (int i = 1; i <= N; i++) {
			Node node = new Node(sc.nextLong());
			indexNodes.add(node);
			graph.nodes.add(node);
		}
		for (int i = 1; i <= N - 1; i++) {
			Node nodeA = indexNodes.get(sc.nextInt() - 1);
			Node nodeB = indexNodes.get(sc.nextInt() - 1);
			Edge e1, e2;// 无向图，可以认为就是有两条边方向相反的边
			nodeA.nexts.add(e1 = new Edge(nodeA, nodeB));
			nodeB.nexts.add(e2 = new Edge(nodeB, nodeA));
			graph.edges.add(e1);
			graph.edges.add(e2);
		}
		sc.close();
		return graph;
	}

	Long maxScore = Long.MIN_VALUE;// 设置为系统最小值

	// 深度优先遍历
	void dfs(Node current, Node parent) {

		Stack<DfsFrame> firstRootOrderFrames = new Stack<>();
		Stack<DfsFrame> afterRootOrderFrames = new Stack<>();// 收集栈，用于收集先序遍历的结果后序遍历

		firstRootOrderFrames.push(new DfsFrame(current, parent));

		// 先序遍历
		while (!firstRootOrderFrames.isEmpty()) {// 先根遍历
			DfsFrame frame = firstRootOrderFrames.pop();
			afterRootOrderFrames.push(frame);// 放到收集栈，先序遍历的顺序压入栈后就是后序遍历
			Node cur = frame.current;
			Node par = frame.parent;
			for (Edge edge : cur.nexts) {
				// 将子节点放入先根遍历栈
				Node child = edge.to;
				if (child != par) {// 防止产生回路
					firstRootOrderFrames.push(new DfsFrame(child, cur));
				}
			}
		}

		// 后序遍历
		while (!afterRootOrderFrames.isEmpty()) {

			DfsFrame frame = afterRootOrderFrames.pop();
			Node cur = frame.current;
			Node par = frame.parent;

			if (cur.weight > maxScore) {
				maxScore = cur.weight;// 当前节点的值大于历史记录的最大值，则记录当前值为历史最大值
			}
			if (par != null // 父节点存在,因为根节点没有父节点
					&&
					par.weight + cur.weight > par.weight// 父节点的权重加上当前节点的权重可使得父节点的权重增加
			) {
				par.weight += cur.weight;// 把子节点的权重添加到父节点上
			}
		}
	}

}

class Node {
	Long weight;
	Set<Edge> nexts = new HashSet<>();

	Node(Long w) {
		weight = w;
	}
}

class Edge {
	Node from;
	Node to;

	Edge(Node f, Node t) {
		from = f;
		to = t;
	}
}

// 数据帧
class DfsFrame {
	Node current;
	Node parent;

	DfsFrame(Node c, Node p) {
		current = c;
		parent = p;
	}
}