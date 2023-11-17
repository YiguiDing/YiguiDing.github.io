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

public class _02_Kurskal算法求最小生成树_复习 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static int head[],node[],wigh[],next[],idx,parent[];
	static void init(int n,int m) {
		MAX_NODE = n;
		MAX_EDGE = m;
		head = new int[MAX_NODE+1];
		node = new int[MAX_EDGE+1];
		wigh = new int[MAX_EDGE+1];
		next = new int[MAX_EDGE+1];
		idx = 1;
		parent =new int[MAX_NODE+1];
	}
	static void addEdge(int a,int b,int w) {
		node[idx]=b;
		wigh[idx]=w;
		next[idx]=head[a];
		head[a]=idx++;
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
	static int findParent(int x) {
		if(parent[x]!=x) parent[x]=findParent(parent[x]);
		return parent[x];
	}
	static HashSet<Edge> Kurskal() {
		HashSet<Edge> res = new HashSet<>();
		PriorityQueue<Edge> heap = new PriorityQueue<>();
		for (int i = 1; i <= MAX_NODE; i++) {
			for (int p = head[i]; p!=0; p=next[p]) {
				int n = node[p];
				int w = wigh[p];
				if(w==INF) continue;
				heap.add(new Edge(i,n,w));
			}
		}
		for(int n=1;n<=MAX_NODE;n++) parent[n]=n;
		while (!heap.isEmpty()) {
			Edge e = heap.poll();
			int a = e.from;
			int b= e.to;
			if(findParent(a)!=findParent(b)) {
				parent[findParent(a)]=parent[findParent(b)];
				res.add(e);
			}
		}
		return res;
	}
	public static void main(String[] args){
		int n= nextInt(),m=nextInt();
		init(n, 2*m);
		while (m--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			if(a==b)continue;
			addEdge(a, b, w);
			addEdge(b, a, w);
		}
		HashSet<Edge> res = Kurskal();
		if(res.size()<MAX_NODE-1) {
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
