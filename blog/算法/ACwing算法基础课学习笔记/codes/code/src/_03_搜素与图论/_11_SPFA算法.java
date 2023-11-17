package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
/*
3 3
1 2 2
2 3 1
1 3 4
输出
3
 * */
public class _11_SPFA算法 {
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
	static int[] SPFA(int from) {
		int[] distanceMap = new int[node.length];
		boolean[] inQueue = new boolean[node.length];
		Arrays.fill(distanceMap, MAX_VAL);
		Queue<Integer> queue = new LinkedList<>();
		distanceMap[from]=0;// 自己到自己为0
		queue.add(from);
		inQueue[from]=true;
		while (!queue.isEmpty()) {
			int updatedNode = queue.poll();
			inQueue[updatedNode]=false;
			int updatedNodeDis = distanceMap[updatedNode];
			for (int p = node[updatedNode]; p !=NULL ; p=next[p]) {
				int curNode = edge[p];
				int curWigt = weight[p];
				if(updatedNodeDis+curWigt<distanceMap[curNode]) {
					distanceMap[curNode] = updatedNodeDis + curWigt;
					if(!inQueue[curNode]) {
						queue.add(curNode);
						inQueue[curNode]=true;
					}
				}
			}
		}
		return distanceMap;
	}
	public static void main(String[] args) {
		int N = nextInt();
		int M = nextInt();
		init(N, M);
		while (M--!=0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}
		int[] res = SPFA(1);
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
