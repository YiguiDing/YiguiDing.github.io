package _04_图论._01_单源最短路;
/*
提交状态: AC
输入样例：
3 4 5
2
3
4
1 2 1
1 3 5
2 3 7
2 4 3
3 4 5
输出样例：
8
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


public class _07_香甜的黄油 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f,NULL=0;
	static int head[],node[],wigh[],next[],idx;
	static void init(int n,int m) {
		MAX_NODE = n;
		MAX_EDGE = 2*m;
		head=new int[MAX_NODE+1];
		node=new int[MAX_EDGE+1];
		wigh=new int[MAX_EDGE+1];
		next=new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b,int w) {
		node[idx]=b;
		wigh[idx]=w;
		next[idx]=head[a];
		head[a]=idx++;
	}
	static class Record implements Comparable<Record>{
		int node,dist;
		public Record(int node, int dist) {
			this.node = node;
			this.dist = dist;
		}
		public int compareTo(Record other) {
			return this.dist-other.dist;
		};
	}
//	O(mlogN)
	static int[] djkstra(int from) {
		int dist[] = new int[MAX_NODE+1];
		Arrays.fill(dist, INF);
		dist[from]=0;
		boolean visited[] = new boolean[MAX_NODE+1];
		PriorityQueue<Record> heap = new PriorityQueue<>();
		heap.add(new Record(from, dist[from]));
		while (!heap.isEmpty()) {
			Record record = heap.poll();
			int cur = record.node;
			if(visited[cur]) continue;
			else visited[cur] =true;
			for(int p=head[cur];p!=NULL;p=next[p]) {
				int n = node[p];
				int w = wigh[p];
				int newDist = dist[cur]+w;
				if(dist[n]>newDist) {
					dist[n]=newDist;
					heap.add(new Record(n, newDist));
				}
			}
		}
		return dist;
	}
//	平均O(M) 最差O(MN)
	static int[] SPFA(int from) {
		int dist[] = new int[MAX_NODE+1];
		Arrays.fill(dist, INF);
		dist[from]=0;
		Queue<Integer> processQueue = new LinkedList<>();
		boolean inQueue[] = new boolean[MAX_NODE+1];
		processQueue.add(from);
		inQueue[from]=true;
		while (!processQueue.isEmpty()) {
			int cur = processQueue.poll();
			inQueue[cur]=false;
			for(int p=head[cur];p!=NULL;p=next[p]) {
				int n = node[p];
				int w = wigh[p];
				int newDist = dist[cur]+w;
				if(newDist<dist[n]) {
					dist[n]=newDist;
					if(!inQueue[n]) {
						processQueue.add(n);
						inQueue[n]=true;
					}
				}
			}
		}
		return dist;
	}
	public static void main(String[] args)  {
		int N =nextInt(),P=nextInt(),C=nextInt();
		int from[] = new int[N];
		for (int i = 0; i < from.length; i++) {
			from[i]=nextInt();
		}
		init(P, C);
		while (C--!=0) {
			int a=nextInt(),b=nextInt(),d=nextInt();
			addEdge(a, b, d);
			addEdge(b, a, d);
		}
		int min=INF;
		for(int n=1;n<=MAX_NODE;n++) {
			int sum=0;
			int dist[] = djkstra(n); // 可以通过
//			int dist[] = SPFA(n);// // 可以通过
			boolean impossible=false;
			for(int p:from) {
				if(dist[p]==INF) {
					impossible=true; break;
				}
				sum+=dist[p];
			}
			if(!impossible) min = Math.min(min, sum);
		}
		pw.println(min);
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens;
	static int pos=0;
	static void nextToken() {
		pos++;
		if(tokens==null ||pos==tokens.length) {
			try {
				tokens=re.readLine().split(" ");
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
