package _04_图论._06_Floyd算法;
/*
提交状态: 实际题目是无向图，以为是有向图，代码是针对于有向图的解法，对于无向图应该是正确的
输入
5 7
1 4 1
1 3 300
3 1 10
1 2 16
2 3 100
2 5 15
5 3 20
输出
3 1 2 5 
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class _03_AcWing_344_观光之旅_有向图 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f,NULL=0;
	static int g[][];
	static void init(int n, int m) {
		MAX_NODE = n;
		MAX_EDGE = m;
		g=new int[MAX_NODE+1][MAX_NODE+1];
		for (int i = 0; i < g.length; i++) {
			for (int j = 0; j < g[i].length; j++) {
				g[i][j]=INF;
			}
			g[i][i]=INF;
		}
	}
	static void addEdge(int[][] g,int a,int b,int w) {
		g[a][b]=Math.min(g[a][b], w);
	}
	static int[][] floyd(int[][] g) {
		int[][] mids = new int[MAX_NODE+1][MAX_NODE+1];
		for(int mid=1;mid<=MAX_NODE;mid++) {
			for (int from = 1; from <=MAX_NODE; from++) {
				for (int to = 1; to <=MAX_NODE; to++) {
					int d = g[from][mid]+g[mid][to];
					if(d<g[from][to]) {
						g[from][to]=d;
						mids[from][to]=mid;// 记录中间节点
					}
				}
			}
		}
		return mids;
	}
	static void dfsAddPathNode(Queue<Integer> path,int[][] mids,int from ,int to) {
		int mid = mids[from][to];
		if(mid==0) return;
		dfsAddPathNode(path, mids, from, mid);
		path.add(mid);
		dfsAddPathNode(path, mids, mid, to);
	}
	public static void main(String[] args) throws Exception {
		int n=nextInt(),m=nextInt();
		init(n, m);
		while (m--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			addEdge(g, a, b, w);
		}
		int[][] tempG = copy(g);
		int mids[][] =  floyd(tempG);
		int total = INF;
		Queue<Integer> path = new LinkedList<>();
		for (int mid = 1; mid <= MAX_NODE; mid++) {
			 for (int from = 1; from <= MAX_NODE; from++) {
				 for (int to = 1; to <= MAX_NODE; to++) {
					if(g[from][mid]==INF||g[mid][to]==INF||tempG[to][from]==INF) continue;
					int d = g[from][mid] + g[mid][to] + tempG[to][from];
					if(d<total) {
						total=d;
						path.clear();
						path.add(from);
						path.add(mid);
						path.add(to);
//						from->mid->to
//						to->?->?->?->?->?->from
						dfsAddPathNode(path, mids, to, from);
					}
				}
			}
		}
		if(total==INF) pw.println("No solution.");
		else {
			while(!path.isEmpty()) {
				pw.print(path.poll()+" ");
			}
		}
		pw.flush();
	}
	static int[][] copy(int[][] origin){
		int[][] dist = new int[origin.length][origin[0].length];
		for (int row = 0; row < origin.length; row++) {
			System.arraycopy(origin[row], 0, dist[row], 0, dist[row].length);
		}
		return dist;
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens=null;static int pos=0;
	static void nextToken() {
		pos++;
		if(tokens==null || pos==tokens.length) {
			try {
				tokens = re.readLine().split(" ");
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
	static long nextLon() {
		nextToken();
		return Long.parseLong(tokens[pos]);
	}
	static String nextStr() {
		nextToken();
		return tokens[pos];
	}
}
