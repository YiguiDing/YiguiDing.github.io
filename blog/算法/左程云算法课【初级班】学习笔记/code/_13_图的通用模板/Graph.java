package 左程云算法课初级班基础知识学习笔记._13_图的通用模板;

import java.util.HashMap;
import java.util.HashSet;

public class Graph {
	// 点集 其中键可以是任何数据结构，表示节点的值，
	// 但如果刷题，值一般是不重复的value，可以用数组来实现，会更快
	public HashMap<Integer, Node> nodes;

	// 边集合
	public HashSet<Edge> edges;

	Graph() {
		this.nodes = new HashMap<>();
		this.edges = new HashSet<>();
	}
}