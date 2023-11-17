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
import java.util.Set;
/**
4 5
1 2 1
1 3 2
1 4 3
2 3 2
3 4 4
输出
6
 */

public class _15_Kruskal算法 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	public static void main(String[] args) {
		int n = nextInt();
		int m = nextInt();
		init(n, m);
		while (m-- != 0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}
		Set<Edge> res = Kruskal();
		if(res==null) pw.println("impossible");
		else {
			int total = 0;
			for(Edge e:res) { total+=e.w; }
			pw.println(total);
		}
		pw.flush();
	}

//	------------------------------------graph------------------------------------
	static HashMap<Integer, Node> nodes = new HashMap<>();
	static ArrayList<Edge> edges = new ArrayList<>();
	static int MAX_NODE, MAX_EDGE;

	static void init(int n, int m) {
		MAX_NODE = n; MAX_EDGE = m;
	}

	static void addEdge(int a, int b, int w) {
		if(!nodes.containsKey(a)) nodes.put(a, new Node(a));
		if(!nodes.containsKey(b)) nodes.put(b, new Node(b));
		edges.add(new Edge(a, b, w));
	}
	static Set<Edge> Kruskal() {
		Set<Edge> res = new HashSet<>();
		PriorityQueue<Edge> heap = new PriorityQueue<>(edges);
		UnionSet<Node> unionSet = new UnionSet<>(nodes.values());
		int connectTimes = 0;
		while (connectTimes<MAX_NODE && !heap.isEmpty()) {
			Edge edge = heap.poll();
			if(!unionSet.isSameSet(nodes.get(edge.a), nodes.get(edge.b))) {
				unionSet.union(nodes.get(edge.a), nodes.get(edge.b));
				res.add(edge);
				connectTimes++;
			}
		}
		if(connectTimes<MAX_NODE-1) return null;// 边数少于n-1
		else return res;
	}
	static class Node{
		int val;
		public Node(int val) {
			this.val = val;
		}
	}
	static class Edge implements Comparable<Edge> {
		int a, b, w;
		public Edge(int a, int b, int w) {
			this.a = a;
			this.b = b;
			this.w = w;
		}
		@Override
		public int compareTo(Edge other) {
			return this.w - other.w;
		}
	}

//	------------------------------------graph------------------------------------
//	------------------------------------UnionSet------------------------------------
	static class UnionSet<T> {
		HashMap<Wrapper<T>, Wrapper<T>> parentMap = new HashMap<>();
		HashMap<T, Wrapper<T>> valMap = new HashMap<>();
		public UnionSet(Iterable<T> arr) {
			for(T v:arr) {
				add(v);
			}
		}
		void add(T v) {
			Wrapper<T> item = new Wrapper<>(v);
			parentMap.put(item, item);
			valMap.put(v, item);
		}
		Wrapper<T> findRoot(Wrapper<T> elem) {
			if(parentMap.get(elem)!=elem) 
				parentMap.put(elem, findRoot(parentMap.get(elem)));// 优化，扁平化
			return parentMap.get(elem);
		}
		void union(T valA,T valB) {
			parentMap.put(findRoot(valMap.get(valA)), findRoot(valMap.get(valB)));
		}
		boolean isSameSet(T valA,T valB) {
			return findRoot(valMap.get(valA))==findRoot(valMap.get(valB));
		}
		static class Wrapper<T> {
			T val;
			public Wrapper(T val) {
				this.val = val;
			}
		}
	}
//	------------------------------------UnionSet------------------------------------
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
