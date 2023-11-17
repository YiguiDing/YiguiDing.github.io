package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
7 11 5 4
2 4 2
1 4 3
7 2 2
3 4 3
5 7 5
7 3 3
6 1 1
6 3 4
2 4 3
5 6 3
7 2 1
输出
7
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;


public class _05_热浪 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static int head[],node[],wigh[],next[],p=1;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=2*m;
		head=new int[MAX_NODE+1];
		node=new int[MAX_EDGE+1];
		wigh=new int[MAX_EDGE+1];
		next=new int[MAX_EDGE+1];
		p=1;
	}
	static void addEdge(int a,int b,int w) {
		node[p]=b;
		wigh[p]=w;
		next[p]=head[a];
		head[a]=p++;
	}
//	O（M）~O（MN）
	static int SPFA(int from,int end) {
		int dist[] = new int[MAX_NODE+1];
		Queue<Integer> processQueue = new LinkedList<>();
		boolean inQueue[] = new boolean[MAX_NODE+1];
		Arrays.fill(dist, INF);
		dist[from]=0;
		processQueue.add(from);
		while(!processQueue.isEmpty()) {
			int cur = processQueue.poll();
			inQueue[cur]=false;
			for(int p=head[cur];p!=0;p=next[p]) {
				int n=node[p];
				int w=wigh[p];
				if(dist[cur]+w<dist[n]) {
					dist[n]=dist[cur]+w;
					if(!inQueue[n]) {
						processQueue.add(n);
						inQueue[n]=true;
					}
				}
			}
		}
		return dist[end];
	}
	static class Info implements Comparable<Info>{
		int node,dist;
		public Info(int node, int dist) {
			this.node = node;
			this.dist = dist;
		}
		@Override
		public int compareTo(Info other) {
			// TODO 自动生成的方法存根
			return this.dist-other.dist;
		}
	}
//	堆优化版djikstra O(mlogN)
	static int Djiktra(int from,int to) {
		int dist[] = new int[MAX_NODE+1];
		boolean visited[] = new boolean[MAX_NODE+1];
		Arrays.fill(dist, INF);
		dist[from]=0;
		PriorityQueue<Info> heap= new PriorityQueue<>();
		heap.add(new Info(from, dist[0]));
		while(!heap.isEmpty()) {
			Info info = heap.poll();
			int cur = info.node;
			if(visited[cur]) continue;
			else visited[cur] = true;
			for(int p=head[cur];p!=0;p=next[p]) {
				int n = node[p];
				int w = wigh[p];
				if(dist[cur]+w<dist[n]) {
					dist[n]=dist[cur]+w;
					heap.add(new Info(n, dist[n]));
				}
			}
		}
		return dist[to];
	}
	public static void main(String[] args) throws Throwable {
		int T=nextInt(),C=nextInt(),T_s=nextInt(),T_e=nextInt();
		init(T, C);
		while(C--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			addEdge(a, b, w);
			addEdge(b, a, w);
		}
//		int res = SPFA(T_s, T_e); // SPFA可以通过
		int res = Djiktra(T_s, T_e); // Dijkstra也可以通过
		pw.println(res);
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
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
