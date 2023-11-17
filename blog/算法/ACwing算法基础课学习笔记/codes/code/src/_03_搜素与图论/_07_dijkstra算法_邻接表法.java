package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
/*
3 3
1 2 2
2 3 1
1 3 4
输出
3
 * */
public class _07_dijkstra算法_邻接表法 {
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st =new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static int node[],edge[],weight[],next[],idx;
	static int MAX_NODE,MAX_EDGE;
	static int MAX_VAL = 0x3f3f3f3f,NULL=-1;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=m;
		node=new int[MAX_NODE+1];
		edge=new int[MAX_EDGE+1];
		weight=new int[MAX_EDGE+1];
		next=new int[MAX_EDGE+1];
		idx=0;
		Arrays.fill(node, NULL);
	}
	static void addEdge(int a,int b,int w) {
		edge[idx]=b;weight[idx]=w;// 存储
		next[idx]=node[a];node[a]=idx++;// 头插法
	}
	static int[] dijkstra(int from) {
		int[] distanceMap = new int[node.length];
		boolean[] arrived = new boolean[node.length];
		Arrays.fill(distanceMap, MAX_VAL);
		distanceMap[from]=0;// 自己到自己为0
		for (int i = 1; i <= MAX_NODE; i++) {// 迭代N次
			int minNode = getMinDistanceNodeExcludeArrived(distanceMap, arrived);
			arrived[minNode]=true;
			int toMinDis = distanceMap[minNode];
			for (int p = node[minNode]; p !=NULL ; p=next[p]) {
				int curNode = edge[p];
				int curWigt = weight[p];
				distanceMap[curNode] = Math.min(distanceMap[curNode], toMinDis + curWigt);
			}
		}
		return distanceMap;
	}
	static int getMinDistanceNodeExcludeArrived(int[] distanceMap,boolean[] arrived) {
		int minNode=-1,minDis=MAX_VAL;
		for (int i = 1; i < distanceMap.length; i++) {
			if( !arrived[i] && distanceMap[i]<minDis) {
				minDis=distanceMap[i];
				minNode=i;
			}
		}
		return minNode;
	}
	public static void main(String[] args) {
		int N = nextInt();
		int M = nextInt();
		init(N, M);
		while (M--!=0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}
		int[] res = dijkstra(1);
		if(res[N]==MAX_VAL) pw.println(-1);
		else pw.println(res[N]);// 输出1->N的最短距离
		pw.flush();
	}
	static int nextInt() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) st.nval;
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
