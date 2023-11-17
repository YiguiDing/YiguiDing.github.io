package _04_图论._01_单源最短路;
/*
提交状态: AC
输入样例：
4 50
9 42 47
48 3 7 14 17 20 42
1 48
6 7 11 12 13 14 15 17 22 23 33 34 37 40 41 47 50
输出样例：
2

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

// 思路：对一条线路上的所有的节点
// 48->3->7->14->17->20->42  
// 额外添加边：
//48->7
//48->14
//48->17
//48->20
//48->42
//
//3->14
//3->17
//3->20
//3->42
//
//7->17
//7->20
//7->42
//
//14->20
//14->42
//
//17->42

public class _09_最优乘车 {
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
		int m=nextInt(),n=nextInt();
		init(n, n*n);
		for(int p=1;p<=m;p++) {
			nextLineToken();
			int[] nums = new int[tokens.length];
			for (int i = 0; i < tokens.length; i++) {
				nums[i] = Integer.parseInt(tokens[i]);
			}
			for(int i=0;i<nums.length;i++) {
				for(int j=i+1;j<nums.length;j++) {
					addEdge(nums[i], nums[j], 1);
				}
			}
		}
		int dist[] = djikstra(1);
		if(dist[n]!=INF) pw.println(dist[n]-1);
		else pw.println("NO");
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens;
	static int pos=0;
	static void nextLineToken() {
		try {
			tokens=re.readLine().split(" ");
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
	static void nextToken() {
		pos++;
		if(tokens==null ||pos==tokens.length) {
			nextLineToken();
			pos=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[pos]);
	} 
}
