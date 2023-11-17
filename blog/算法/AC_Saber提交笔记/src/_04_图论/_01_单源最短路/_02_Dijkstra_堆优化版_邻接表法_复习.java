package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
5 10
1 2 2
5 3 3
4 1 8
2 4 3
4 5 7
5 2 3
3 4 1
1 2 9
3 2 3
1 2 8
输出
12
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.PriorityQueue;

public class _02_Dijkstra_堆优化版_邻接表法_复习 {
	static int he[],no[],wi[],ne[],p=1;
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=(int)2e5;
		he=new int[MAX_NODE+1];
		no=new int[MAX_EDGE+1];
		wi=new int[MAX_EDGE+1];
		ne=new int[MAX_EDGE+1];
		p=1;
	}
	static void addEdge(int a,int b,int w) {
		no[p]=b;
		wi[p]=w;
		ne[p]=he[a];
		he[a]=p++;
	}
	static class Info implements Comparable<Info>{
		int node,dist;
		public Info(int node, int dist) {
			this.node = node;
			this.dist = dist;
		}
		public int compareTo(Info other) {
			return this.dist-other.dist;
		};
	}
	static int[] Dijkstra(int from) {
		int dist[] = new int[MAX_NODE+1];
		Arrays.fill(dist, INF);
		boolean visited[] = new boolean[MAX_EDGE+1];
		PriorityQueue<Info> heap = new PriorityQueue<>();
		dist[from]=0;
		heap.add(new Info(from, dist[from]));
		while(!heap.isEmpty()) {
			Info info = heap.poll();
			int cur = info.node;
			if(visited[cur]) continue;
			else visited[cur]=true;
			for(int p=he[cur];p!=0;p=ne[p]) {
				int n = no[p];
				int w = wi[p];
				if(dist[cur]+w<dist[n]) {
					dist[n]=dist[cur]+w;
					heap.add(new Info(n, dist[n]));
				}
			}
		}
		return dist;
	}
	public static void main(String[] args) throws Throwable {
		int n=nextInt(),m=nextInt();
		init(n, m);
		while (m--!=0) {
			int a=nextInt(),b=nextInt(),c=nextInt();
			if(a!=b) addEdge(a, b, c);
		}
		int[] res = Dijkstra(1);
		if(res[n]!=INF)
			pw.println(res[n]);
		else
			pw.println(-1);
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
