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
3 3 2
1 2 1
2 3 2
1 3 1
2 1
1 3
输出
impossible
1
 * */
public class _13_Floyd算法 {
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st =new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static int matrix[][];
	static int MAX_NODE,MAX_EDGE;
	static int INF=0x3f3f3f3f;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=m;
		matrix = new int[MAX_NODE+1][MAX_NODE+1];
		for (int i = 0; i < matrix.length; i++) {
			Arrays.fill(matrix[i], INF);
		}
	}
	static void addEdge(int a,int b,int w) {
		matrix[a][b]=w;
//		matrix[b][a]=w;
	}
	static int[][] floyd() {
		for (int k = 1; k <= MAX_NODE; k++) {
			for (int a = 1; a <= MAX_NODE; a++) {
				for (int b = 1; b <= MAX_NODE; b++) {
					matrix[a][b]=Math.min(matrix[a][b], matrix[a][k]+matrix[k][b]);
				}
			}
		}
//		matrix[a][b] 中存的就是a->b的最短距离
		return matrix;
	}
	public static void main(String[] args) {
		int N = nextInt();
		int M = nextInt();
		int Q = nextInt();
		init(N, M);
		while (M--!=0) {
			addEdge(nextInt(), nextInt(), nextInt());
		}
		int[][] res = floyd();
		while (Q--!=0) {
			int a =nextInt();
			int b=nextInt();
			if(res[a][b]>=INF/2) pw.println("impossible");
			else pw.println(res[a][b]);
		}
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
