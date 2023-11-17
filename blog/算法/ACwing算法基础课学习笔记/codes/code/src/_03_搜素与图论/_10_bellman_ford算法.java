package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
import java.util.Arrays;
/*
输入
3 3 1
1 2 1
2 3 1
1 3 3
输出
3
 * */
public class _10_bellman_ford算法 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	
	static int Max_Val = 0x3f3f3f3f,MAX_NODE,MAX_EDGE;
	static class Edge{
		int from,to,weight;
		public Edge(int from, int to, int weight) {
			this.from = from;
			this.to = to;
			this.weight = weight;
		}
	}
	static ArrayList<Edge> edges = new ArrayList<>();
	static int[] bellman_ford(int from,int k) {
		int[] dist = new int[edges.size()+1];
		int[] backup = new int[edges.size()+1];
		Arrays.fill(dist, Max_Val);
		dist[from]=0;// 自己到自己的距离为0
		for(int i=1;i<=k;i++) {// k次k条边
			System.arraycopy(dist, 0, backup, 0, backup.length);// 拷贝到backup
			for(Edge edge:edges) {
				dist[edge.to]=Math.min(dist[edge.to], backup[edge.from]+edge.weight);
			}
		}
		return dist;
	}
	public static void main(String[] args) {
		int N = nextInt();
		int M = nextInt();
		int K = nextInt();
		MAX_NODE=N;
		MAX_EDGE=M;
		while(M--!=0) {
			edges.add(new Edge(nextInt(), nextInt(), nextInt()));
		}
//		这里求的是1号节点到N号节点的距离
		int[] res = bellman_ford(1,K);
		
//		因为可能赋值语句dist[to]=min(dist[to],dist[from]+weight)中，
//		可能存在dist[from]是正无穷距离最初的点无限远，dist[to]也是正无穷，距离最初的起始点无限远，
//		但是weight是负数，这会导致dist[to]距离最初起始点的距离被更新，单实际上，最初起始点距离dist[to]依然是不可达的。
		if(res[N]>Max_Val/2) pw.println("impossible");
		else pw.println(res[N]);
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
