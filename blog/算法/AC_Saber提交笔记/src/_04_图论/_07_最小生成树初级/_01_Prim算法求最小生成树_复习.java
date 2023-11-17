package _04_图论._07_最小生成树初级;
/*
提交状态: AC
输入
4 5
1 2 1
1 3 2
1 4 3
2 3 2
3 4 4
输出
6
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.PriorityQueue;

public class _01_Prim算法求最小生成树_复习 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static int g[][];// 邻接矩阵可以用于去除重边
	static void init(int n,int m) {
		MAX_NODE = n;
		MAX_EDGE = m;
		g = new int[MAX_NODE+1][MAX_NODE+1];
		for (int i = 0; i < g.length; i++) {
			for (int j = 0; j < g[i].length; j++) {
				g[i][j]=INF;
			}
			g[i][i]=0;
		}
	}
	static void addEdge(int a,int b,int w) {
		g[a][b]=Math.min(g[a][b], w);
	}
	static class Edge implements Comparable<Edge>{
		int from,to,wigh;

		public Edge(int from, int to, int wigh) {
			super();
			this.from = from;
			this.to = to;
			this.wigh = wigh;
		}
		@Override
		public int compareTo(Edge o) {
			return this.wigh-o.wigh;
		}
	}
	static HashSet<Edge> prim(int root) {
		boolean visited[] = new boolean[MAX_NODE+1];
		PriorityQueue<Edge> heap = new PriorityQueue<>();
		HashSet<Edge> res = new HashSet<>();
		visited[root]=true;
		for(int a=root,b=1;b<=MAX_NODE;b++) {
			int w = g[a][b];
			if(a!=b&&w!=INF) heap.add(new Edge(a, b, w));// 自己到自己的距离是0，这里不应该加入自环，不过由于有visited数组，不这样写也没事
		}
		while(!heap.isEmpty()) {
			Edge e = heap.poll();
			int cur = e.to;
			if(visited[cur]) continue;
			else visited[cur] = true;
			for(int ne=1;ne<=MAX_NODE;ne++) {
				int wi = g[cur][ne];
				if(cur!=ne && wi!=INF) 
					heap.add(new Edge(cur ,ne, wi));
			}
			res.add(e);
		}
		return res;
	}
	public static void main(String[] args) {
		int n =nextInt(),m=nextInt();
		init(n, m);
		while (m--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			if(a==b)continue;
			addEdge(a, b, w);
			addEdge(b, a, w);
		}
		HashSet<Edge> res = prim(1);
		if(res.size()==MAX_NODE-1) { // 最小生成树不能联通所有节点
			printer.println("impossible");
		}else {
			int sum = 0;
			for(Edge e:res) {
				sum+=e.wigh;
			}
			printer.println(sum);
		}
		printer.flush();
	}
	static BufferedReader reader=new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer=new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer = new PrintWriter(writer);
	static String[] tokens=null; static int pos = 0;
	static void nextToken() {
		pos++;
		if(tokens==null||pos==tokens.length) {
			try {
				tokens = reader.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			pos=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[pos]);
	}
}
