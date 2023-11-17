package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

/**
4 5
1 2 1
1 3 2
1 4 3
2 3 2
3 4 4

 */

public class _14_Prim算法 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	
	
	static int g[][];
	static int MAX_NODE,INF=0x3f3f3f3f;
 	static void init(int n) {
 		MAX_NODE = n;
 		g=new int[MAX_NODE+1][MAX_NODE+1];
 		for (int i = 1; i <= MAX_NODE; i++) {
			Arrays.fill(g[i], INF);
		}
 	}
 	static void addEdge(int a,int b,int w) {
 		g[a][b]=g[b][a]=w;
 	}
 	static int prim() {
 		int res=0;// 存储联通整个图需要经过的最短距离
 		boolean connected[]=new boolean[MAX_NODE+1];//每个元素表示的是是否已经加入的到了连通块中
 		int dist[]=new int[MAX_NODE+1];// 每个元素表示的是距离连通图最近的距离
 		Arrays.fill(dist, INF);// 每个点距离联通块最初都是无穷
 		dist[1]=0;// 任意加入一个点，设置其离联通块最近的距离为0，这样就能在循环中选中
 		for (int t = 1; t <= MAX_NODE; t++) {// 迭代次数和节点数一致
			int curNode = findMinDistNodeExcludeConnected(dist, connected);// 找出离联通块最近的点，且不能是已经联通的点
			if(dist[curNode]==INF) return INF;
			connected[curNode]=true;// 联通
			res+=dist[curNode];// 记录距离
			for(int next=1;next<=MAX_NODE;next++) 
				if(!connected[next])
					dist[next]=Math.min(dist[next], g[curNode][next]/*和dijikstra的区别就在于此，取的距离表示的是到联通块的最近距离*/);
 		}
 		return res;
 	}
 	static int findMinDistNodeExcludeConnected(int[] dist,boolean connected[]) {
 		int res = -1;
 		int min = INF;
 		for (int i = 1; i < dist.length; i++) {
			if(!connected[i] && (res==-1 || dist[i]<min)) {
				res=i;
				min=dist[i];
			}
		}
 		return res;
 	}
	public static void main(String[] args) {
		int n =nextInt();
		int m =nextInt();
		init(n);
		while (m--!=0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}
		int res = prim();
		if(res==INF) pw.println("impossible");
		else pw.println(res);
		pw.flush();
	}
 	
 	
 	static int nextInt() {
 		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
 		return (int)st.nval;
 	}
 	static String nextStr() {
 		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
 		return st.sval;
 	}
}
