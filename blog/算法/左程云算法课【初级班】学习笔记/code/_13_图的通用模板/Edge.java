package 左程云算法课初级班基础知识学习笔记._13_图的通用模板;

public class Edge {
	public Node from;
	public Node to;
	public int weight;// 权重
	Edge(Node from, Node to, int weight) {
		this.from = from;
		this.to = to;
		this.weight = weight;
	}
}
