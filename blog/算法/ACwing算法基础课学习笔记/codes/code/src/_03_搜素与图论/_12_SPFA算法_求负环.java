package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;
/*
3 3
1 2 -1
2 3 4
3 1 -4
输出
3
 * */
public class _12_SPFA算法_求负环 {
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
	static boolean SPFA_haveNegativeLoop() {
		int[] distanceMap = new int[node.length]; 
		int[] cnt = new int[node.length]; // 记录经过的边数
//		Arrays.fill(distanceMap, MAX_VAL); // 不需要初始化dist数组
		boolean[] inQueue = new boolean[node.length];
		Queue<Integer> queue = new LinkedList<>();
		for (int i = 1; i <= MAX_NODE; i++) {
			queue.add(i);// 所有节点入队
			inQueue[i]=true;
		}
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
						cnt[curNode]=cnt[updatedNode]+1;// 更新距离
						if(cnt[curNode]>=MAX_NODE) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}
	public static void main(String[] args) {
		int N = nextInt();
		int M = nextInt();
		init(N, M);
		while (M--!=0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}

		if(SPFA_haveNegativeLoop()) pw.println("Yes");
		else pw.println("No");// 输出1->N的最短距离
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
