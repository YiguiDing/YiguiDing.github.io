package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
3 3
1 2 5
2 3 -3
1 3 4
输出
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
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class _04_SPFA算法_复习 {
	
	static int MAX_EDGE,MAX_NODE,INF=0x3f3f3f3f;
	static int he[],no[],wi[],ne[],p=1;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=(int) 10e5;
		he = new int[MAX_NODE+1];
		no = new int[MAX_EDGE+1];
		wi = new int[MAX_EDGE+1];
		ne = new int[MAX_EDGE+1];
		p=1;
	}
	static void addEdge(int a,int b,int w) {
		no[p]=b;
		wi[p]=w;
		ne[p]=he[a];
		he[a]=p++;
	}
	static int[] SPFA(int from) {
		int[] dist=new int[MAX_NODE+1];
		Arrays.fill(dist, INF);
		boolean[] inqueue = new boolean[MAX_NODE+1];
		Queue<Integer> processQueue = new LinkedList<>();
		processQueue.add(from);
		dist[from]=0;
		inqueue[from]=true;
		while (!processQueue.isEmpty()) {
			int cur = processQueue.poll();
			inqueue[cur]=false;
			for(int p=he[cur];p!=0;p=ne[p]) {
				int n = no[p];
				int w = wi[p];
				if(dist[cur]+w<dist[n]) {
					dist[n]=dist[cur]+w;
					if(!inqueue[n]) {
						processQueue.add(n);
						inqueue[n]=true;
					}
				}
			}
		}
		return dist;
	}
	public static void main(String[] args) throws Throwable {
		int n=nextInt(),m=nextInt();
		init(n,m);
		while(m--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			addEdge(a, b, w);
		}
		int[] dis = SPFA(1);
		if(dis[n]<INF/2) pw.println(dis[n]);
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
