package 左程云算法课初级班基础知识学习笔记._13_图的通用模板;

import java.util.ArrayList;

public class Node {
	public int value;// 数据项，可以是int 可以是一个复杂的数据类型
	public int in;// 入度
	public int out;// 出度
	public ArrayList<Node> nexts;// 节点的下一跳（从自己所在位置出发的目的地）
	public ArrayList<Edge> edges;// 节点的边（发出的）

	Node(int value) {
		this.value = value;
		this.in = 0;
		this.out = 0;
		this.nexts = new ArrayList<>();
		this.edges = new ArrayList<>();
	}
}
