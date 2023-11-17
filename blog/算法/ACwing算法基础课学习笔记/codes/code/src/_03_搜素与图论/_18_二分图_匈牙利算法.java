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
输出
2
 * 
 */

public class _18_二分图_匈牙利算法 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	public static void main(String[] args) {
		int n1 = nextInt(),n2 = nextInt(), m = nextInt();
		Graph graph = new Graph(n1+n2, m);
		while (m-- != 0) {
			int a = nextInt(),b=n1+nextInt(),w=0;
			graph.addEdge(a, b, w);
			graph.addEdge(b, a, w);
		}
		graph.dfs(0,1);
		graph.match(0);
		pw.println(graph.matchCnt);
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
			if(nodes[a]==null) nodes[a]=new Node(a);
			if(nodes[b]==null) nodes[b]=new Node(b);
			nodes[a].nexts.add(new Edge(a,b,w));
		}
//		二分图染色法染色，能成功染色则返回true，并把所有二分图放到left和right两个集合中。
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
		int mach[],matchCnt=0;
		Set<Integer> mached=new HashSet<>();
		boolean match(int x) {
			if(x==0) {
				matchCnt=0;
				mach=new int[MaxNode+1];
				for(Node n:left) {
					mached.clear();
					if(match(n.val)) matchCnt++;
				}
				return false;
			}else {
				for(Edge e:nodes[x].nexts) {
					int y=e.to;
					if(!mached.contains(y)) {// 如果y没有被任何匹配
						mached.add(y);// 标记y已经被当前x匹配
						if(mach[y]==0 /*如果y之前没有匹配任何x*/
							|| match(mach[y]) /*否则说明y已经匹配了另一个x了，尝试为另一个x去匹配另一个y(因为当前y已经被标记为匹配了)*/
						) {
							mach[y]=x;// 当前的y匹配当前的x
							return true;
						}
					}
				}
				return false;
			}
		}
	}
	static class Node{
		int val;
		ArrayList<Edge> nexts = new ArrayList<>();
		public Node(int val) {
			this.val = val;
		}
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
