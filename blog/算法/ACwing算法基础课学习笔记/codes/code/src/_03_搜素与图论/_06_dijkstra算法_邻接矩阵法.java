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
public class _06_dijkstra算法_邻接矩阵法 {
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st =new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static int[][] matrix;
	static int MAX_VAL = 0x3f3f3f3f;
	static void init() {
		for (int i = 1; i < matrix.length; i++) {
			Arrays.fill(matrix[i], MAX_VAL);
		}
	}
	static void addEdge(int a,int b,int weight) {
		matrix[a][b] = Math.min(matrix[a][b], weight);
	}
	static int[] dijkstra(int from) {
		int[] distanceMap = new int[matrix.length];
		boolean[] arrived = new boolean[matrix.length];
		Arrays.fill(distanceMap, MAX_VAL);
		distanceMap[from]=0;// 自己到自己为0
		for (int i = 1; i < matrix.length; i++) {// 迭代N次
			int minNode = getMinDistanceNodeExcludeArrived(distanceMap, arrived);
			arrived[minNode]=true;
			for (int next = 1; next < matrix.length; next++) {
				int w =  matrix[minNode][next];
				int curDis = distanceMap[minNode];
				distanceMap[next] = Math.min(distanceMap[next], curDis + w);
			}
		}
		return distanceMap;
	}
	static int getMinDistanceNodeExcludeArrived(int[] distanceMap,boolean[] arrived) {
		int minNode=-1,minDis=Integer.MAX_VALUE;
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
		matrix = new int[N+1][N+1];
		init();
		while (M--!=0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}

		int[] res = dijkstra(1);
//		int i=1;
//		for(;i<res.length-1;i++) pw.printf("%d ", res[i]); pw.println(res[i]); // 输出1-》所有节点的最短距离
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
