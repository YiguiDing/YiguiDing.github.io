package _04_图论._01_单源最短路;
/*
提交状态: AC
输入样例：
4 4
1 2 4
2 3 7
2 4 1
3 4 6
输出样例：
11
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.PriorityQueue;

public class _08_信使 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f,NULL=0;
	static int head[],node[],wigh[],next[],idx=1;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=m;
		head = new int[MAX_NODE+1];
		node = new int[MAX_EDGE+1];
		wigh = new int[MAX_EDGE+1];
		next = new int[MAX_EDGE+1];
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
		@Override
		public int compareTo(Record other) {
			return this.dist-other.dist;
		}
	}
	static int[] djikstra(int from) {
		int[] dist = new int[MAX_NODE+1];
		Arrays.fill(dist, INF);
		dist[from]=0;
		boolean visited[] = new boolean[MAX_NODE+1];
		PriorityQueue<Record> heap = new PriorityQueue<>();
		heap.add(new Record(from, dist[from]));
		while (!heap.isEmpty()) {
			Record record = heap.poll();
			int cur = record.node;
			if(visited[cur]) continue;
			else visited[cur] = true;
			for(int p =head[cur];p!=NULL;p=next[p]) {
				int n = node[p];
				int w = wigh[p];
				int newDist = dist[cur]+w;
				if(newDist<dist[n]) {
					dist[n]=newDist;
					heap.add(new Record(n, dist[n]));
				}
			}
		}
 		return dist;
	}
	public static void main(String[] args)  {
		int n=nextInt(),m=nextInt();
		init(n, 2*m);
		while (m--!=0) {
			int i=nextInt(),j=nextInt(),k=nextInt();
			addEdge(i, j, k);
			addEdge(j, i, k);
		}
		int dist[] = djikstra(1);
		int total = 0;
		boolean impossible=false;
		for(int i=1;i<=MAX_NODE;i++) {
			int d=dist[i];
			if(d==INF) {impossible=true;break;}// 说明某个节点不可达
			total = Math.max(total, d);// 全部可达，则花费时间最多的节点就是信最后送到的节点
		}
		if(!impossible)pw.println(total);
		else pw.println(-1);
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
