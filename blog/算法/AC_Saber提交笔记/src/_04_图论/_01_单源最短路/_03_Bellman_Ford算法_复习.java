package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
3 3 1
1 2 1
2 3 1
1 3 3
输出
3
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

public class _03_Bellman_Ford算法_复习 {

	static class Edge{
		int from,to,wigh;
		public Edge(int from, int to, int wigh) {
			super();
			this.from = from;
			this.to = to;
			this.wigh = wigh;
		}
	}
	static ArrayList<Edge> edges;
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=m;
		edges = new ArrayList<>();
	}
	static void addEdge(int a,int b,int w) {
		edges.add(new Edge(a, b, w));
	}
	static int[] bellman_ford(int from,int k) {
		int[] dist = new int[MAX_NODE+1];
		int[] back = new int[MAX_NODE+1];
		Arrays.fill(dist, INF);
		dist[from]=0;
		for(int t=1;t<=k;t++) {
			System.arraycopy(dist, 0, back, 0, back.length);
			for(Edge e:edges) {
				dist[e.to]=Math.min(dist[e.to], back[e.from]+e.wigh);
			}
		}
		return dist;
	}
	public static void main(String[] args) throws Throwable {
		int n=nextInt(),m=nextInt(),k=nextInt();
		init(n, m);
		while(m--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			addEdge(a, b, w);
		}
		int[] res= bellman_ford(1, k);
		if(res[n]<INF/2) pw.println(res[n]);
		else pw.println("impossible");
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens;
	static int idx=0;
	static void nextToken() {
		idx++;
		if(tokens==null ||idx==tokens.length) {
			try {
				tokens=re.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			idx=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	} 
}
