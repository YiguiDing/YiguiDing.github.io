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
4 4
1 3
1 4
2 3
2 4
输出 Yes
 * 
 */

public class _17_二分图_二分染色法_图的模板写法 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	public static void main(String[] args) {
		int n = nextInt(), m = nextInt();
		Graph graph = new Graph(n, m);
		while (m-- != 0) {
			int a = nextInt(),b=nextInt(),w=0;
			graph.addEdge(a, b, w);
			graph.addEdge(b, a, w);
		}
		if (graph.dfs(0,1)) pw.println("Yes");
		else pw.println("No");
		pw.flush();
	}

	
	static class Graph{
		Set<Node> left = new HashSet<>();
		Set<Node> right = new HashSet<>();
		Node[] nodes;
		int MaxNode,MaxEdge;
		public Graph(int n,int m) {
			MaxNode=n;
			MaxEdge=m;
			nodes=new Node[MaxNode+1];
		}
		void addEdge(int a,int b,int w){
			if(nodes[a]==null) nodes[a]=new Node();
			if(nodes[b]==null) nodes[b]=new Node();
			nodes[a].nexts.add(new Edge(a,b,w));
		}
		boolean dfs(int from,int color) {
			if(from==0) {
				left.clear();right.clear();// 清空左右两集合
				for (int n = 1; n <= MaxNode; n++) {
					if( !left.contains(nodes[n]) && !right.contains(nodes[n]) && !dfs(n,color) ) return false;
				}
				return true;
			}else {
				if(color==1&&right.contains(nodes[from])) return false;// 应该在1中但实际在2中，冲突
				if(color==2&&left.contains(nodes[from])) return false;// 应该在2中但实际在1中，冲突
				if(color==1&&left.contains(nodes[from])) return true;// 应该在1中但实际在1中，重复考虑
				if(color==2&&right.contains(nodes[from])) return true;// 应该在2中但实际在2中，重复考虑
				if(color==1) left.add(nodes[from]);
				if(color==2) right.add(nodes[from]);
				for(Edge e:nodes[from].nexts) {
					if(!dfs(e.to, 3-color)) return false;
				}
				return true;
			}
		}
	}
	static class Node{
		ArrayList<Edge> nexts = new ArrayList<>();
	}
	static class Edge{
		int from,to,weight;
		public Edge(int from, int to, int weight) {
			super();
			this.from = from;
			this.to = to;
			this.weight = weight;
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
