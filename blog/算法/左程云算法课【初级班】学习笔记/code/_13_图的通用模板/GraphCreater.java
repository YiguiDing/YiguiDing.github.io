package 左程云算法课初级班基础知识学习笔记._13_图的通用模板;

public class GraphCreater {
	/*
	 * 将矩阵转换成Graph
	 * matrix: [
	 * * [fromNodeValue,toNodeValue,Weight],
	 * * [fromNodeValue,toNodeValue,Weight]
	 * ]
	 */
	static Graph createGraphUseMatrix(Integer matrix[][]) {
		Graph graph = new Graph();
		for (int i = 0; i < matrix.length; i++) {
			Integer fromValue = matrix[i][0];
			Integer toValue = matrix[i][1];
			Integer weightVal = matrix[i][2];
			if (!graph.nodes.containsKey(fromValue)) {
				graph.nodes.put(fromValue, new Node(fromValue));
			}
			if (!graph.nodes.containsKey(toValue)) {
				graph.nodes.put(toValue, new Node(toValue));
			}
			Node fromNode = graph.nodes.get(fromValue);
			Node toNode = graph.nodes.get(toValue);
			Edge edge = new Edge(fromNode, toNode, weightVal);
			fromNode.out++;
			toNode.in++;
			fromNode.edges.add(edge);
			graph.edges.add(edge);
		}
		return graph;
	}
}
