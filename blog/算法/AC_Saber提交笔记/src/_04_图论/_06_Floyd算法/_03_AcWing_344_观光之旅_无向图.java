package _04_图论._06_Floyd算法;
/*
提交状态: AC
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
2 5 3 1 
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

public class _03_AcWing_344_观光之旅_无向图 {
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
	static void dfsAddPathNode(Queue<Integer> path,int[][] mids,int from ,int to) {
		int mid = mids[from][to];//mids[from][to]中记录的是form<->??<->to的最短路径中必然经过mid
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
			addEdge(g, b, a, w);
		}
		int[][] tempG = copy(g);
		int[][] mids = new int[g.length][g[0].length];
		int total = INF;
		Queue<Integer> path = new LinkedList<>();
		for (int mid = 1; mid <= MAX_NODE; mid++) {// 假设mid是最大的节点，如果真的存在环，那么这个环中也必然存在最大的点，这么假设是没问题的
			 for (int from = 1; from < mid; from++) {// 其他两个点必然比mid小
				 for (int to = from+1; to < mid; to++) {//对于无向图来说from到to和to到from是一样的，所以这里进行剪枝
					if(g[from][mid]==INF||g[mid][to]==INF||tempG[to][from]==INF) continue;
					int d = g[from][mid] + g[mid][to] + tempG[to][from];
					if(d<total) {
						total=d;
						path.clear();
						path.add(from);
						path.add(mid);
						path.add(to);
//						from<->mid<->to
//						to<->?<->?<->?<->?<->?<->from
//						由于mid是环中最大的节点，所以from和to应该是[1,mid-1]的节点，实际也是这么枚举的
//						由于mid是环中最大的节点，所以这些？也应该是[1,mid-1]的节点，实际上floyd算法会枚举任意两节点，把能经过[1,mid-1]的节点记录。
//						所以这条路径不可能是from<->mid<->to,只会是环的另一半的路径
						dfsAddPathNode(path, mids, to, from);
					}
				}
			}
//			 floyd算法，使用当前的mid联通其他可联通的点
			 for (int from = 1; from <=MAX_NODE; from++) {
				for (int to = from + 1; to <=MAX_NODE; to++) {// 剪枝
					int d = tempG[from][mid]+tempG[mid][to];
					if(d<tempG[from][to]) {
						tempG[from][to]=tempG[to][from]=d;// 同时更新
						mids[from][to]=mids[to][from]=mid;// 同时更新，表示的是form<->??<->to的最短路径中必然经过mid
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
