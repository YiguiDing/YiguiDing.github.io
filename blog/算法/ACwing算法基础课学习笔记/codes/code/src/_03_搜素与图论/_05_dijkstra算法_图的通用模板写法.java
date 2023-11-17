package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map.Entry;
import java.util.Set;

/*
3 3
1 2 2
2 3 1
1 3 4
输出
3
 * */
public class _05_dijkstra算法_图的通用模板写法 {
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st =new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		Graph graph = createGraph();
		HashMap<Node, Integer>  distanceMap = Dijkstra(graph, 1);
		Integer disToN = distanceMap.get(graph.nodes.get(graph.nodes.size()));// 求1->N的最短距离
		if(disToN!=null) pw.println(disToN);
		else pw.println(-1);
		pw.flush();

	}
	static int MAX_VAL = 0x3f3f3f3f;
	static HashMap<Node, Integer> Dijkstra(Graph g,int from) {
		HashMap<Node, Integer> distanceMap = new HashMap<>();
		HashSet<Node> arrived = new HashSet<>();
		distanceMap.put(g.nodes.get(from), 0);// 自己到自己的距离是0
		for (int i = 0; i < g.nodes.size(); i++) {
			// getMinDistanceNodeExcludeArrived这一步，时间复杂度为O(N)，
				//使用堆优化可达到O(1），但是下面的修改操作将变成O(logN)，
					// 堆可以使用带映射的支持修改任意元素的堆，好处是堆中最对只会有N个元素,也就是节点数，坏处是要手写实现
					// 也可以使用系统自带的堆，
						// 使用系统自带的堆，修改方式是冗余，就是修改是通过在队列中添加权值更小的边来实现的，
						// 这样依然能保证权值最小的边在对头。好处是不用手写，坏处是堆中元素最对可达到M,修改操作可到达O(logM)
			Node minNode  = getMinDistanceNodeExcludeArrived(distanceMap,arrived);
			arrived.add(minNode);
			for(Edge edge:minNode.edges) {
				Node to = edge.to;
				int curDis = distanceMap.get(minNode);
				if(!distanceMap.containsKey(to)) distanceMap.put(to, MAX_VAL);
				distanceMap.put(to, Math.min(distanceMap.get(to),curDis+edge.weight));
			}
		}
		return distanceMap;
	}
	
	private static Node getMinDistanceNodeExcludeArrived(HashMap<Node, Integer> distanceMap, HashSet<Node> arrived) {
		Node minNode = null;
		Integer minDis = Integer.MAX_VALUE;
		for(Entry<Node,Integer> entry:distanceMap.entrySet()) {
			Node node= entry.getKey();
			Integer dis = entry.getValue();
			if(!arrived.contains(node) && dis<minDis) {
				minNode=node;
				minDis=dis;
			}
			
		}
		return minNode;
	}
	static Graph createGraph() {
		Graph graph = new Graph();
		
		int N = nextInt();
		int M = nextInt();
		
		while(M--!=0) {
			int n1 = nextInt();
			int n2 = nextInt();
			int wi = nextInt();
			
			Node node1=null;
			Node node2=null;
			
			if(!graph.nodes.containsKey(n1)) graph.nodes.put(n1, new Node(n1));
			if(!graph.nodes.containsKey(n2)) graph.nodes.put(n2, new Node(n2));
			
			node1 = graph.nodes.get(n1);
			node2 = graph.nodes.get(n2);
			
			Edge edge=new Edge(node1, node2, wi);
			node1.edges.add(edge);
			graph.edges.add(edge);
		}
		return graph;
	}
	
	static class Graph{
		HashMap<Integer, Node> nodes = new HashMap<>();
		Set<Edge> edges = new HashSet<>();

	}
	static class Node{
		int in,out;
		int val;
		ArrayList<Node> nexts = new ArrayList<>();
		ArrayList<Edge> edges = new ArrayList<>();
		public Node(int val) {
			this.val = val;
		}
	}
	static class Edge{
		int weight;
		Node from,to;
		public Edge(Node from, Node to,int weight) {
			this.weight = weight;
			this.from = from;
			this.to = to;
		}
	}
	static int nextInt() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) st.nval;
	}
	static String nextStr() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return st.sval;
	}
}
