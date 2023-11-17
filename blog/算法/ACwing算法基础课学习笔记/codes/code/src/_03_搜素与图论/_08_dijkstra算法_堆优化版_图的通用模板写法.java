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
import java.util.PriorityQueue;
import java.util.Map.Entry;
import java.util.Set;

import javafx.util.Pair;

/*
3 3
1 2 2
2 3 1
1 3 4
输出
3
 * */
public class _08_dijkstra算法_堆优化版_图的通用模板写法 {
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
		HashSet<Node> arrived = new HashSet<>();
		HashMap<Node, Integer> distanceMap = new HashMap<>();
		distanceMap.put(g.nodes.get(from), 0);// 自己到自己的距离是0
		PriorityQueue<Info> heap = new PriorityQueue<>(
				(o1,o2)->o1.distance-o2.distance// 小根堆
		);
		heap.add(new Info(g.nodes.get(from), 0));// 自己到自己的距离是0
		while (!heap.isEmpty()) {
			Info minInfo  = heap.poll();// 距离最近的点就在堆顶
			Node minNode = minInfo.node;
			if(arrived.contains(minNode)) continue;// 由于没有更新和删除操作，堆顶可能存在到达过节点删除即可
			arrived.add(minNode);
			for(Edge edge:minNode.edges) {
				Node to = edge.to;
				int curDis = distanceMap.get(minNode);
				if(!distanceMap.containsKey(to)) distanceMap.put(to, MAX_VAL);
				distanceMap.put(to, Math.min(distanceMap.get(to),curDis+edge.weight));
				heap.add(new Info(to, distanceMap.get(to)));
			}
		}
		return distanceMap;
	}
	static class Info{
		public Node node;
		public int distance;
		public Info(Node node, int distance) {
			this.node = node;
			this.distance = distance;
		}
		
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
