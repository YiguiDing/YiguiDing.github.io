package _04_图论._06_Floyd算法;
/*
提交状态: AC
输入
3 3 2
1 2 1
2 3 2
1 3 1
2 1
1 3
输出
impossible
1
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _01_Floyd算法_邻接矩阵实现 {
	static int matrix[][],MAX_NODE,INF=0x3f3f3f3f;
	static void init(int nodeNum) {
		MAX_NODE = nodeNum;
		matrix=new int[MAX_NODE+1][MAX_NODE+1];
		for (int i = 0; i < matrix.length; i++) {
			for (int j = 0; j < matrix[i].length; j++) {
				if(i==j)
					matrix[i][j]=0;
				else
					matrix[i][j]=INF;
			}
		}
	}
	static void addEdge(int A,int toB,int w) {
		matrix[A][toB]=Math.min(matrix[A][toB], w);
	}
	static int[][] floyd() {
		int distance[][] = matrixCopy(matrix);
		for (int k = 1; k <= MAX_NODE; k++) {
			for (int a = 1; a <= MAX_NODE; a++) {
				for (int b = 1; b <= MAX_NODE; b++) {
					distance[a][b]=Math.min(distance[a][b], distance[a][k]+distance[k][b]);
				}
			}
		}
		return distance;
	}
	static int[][] matrixCopy(int[][] src){
		int distance[][] = new int[src.length][src[0].length];
		for (int i = 0; i < distance.length; i++) 
			System.arraycopy(matrix[i], 0, distance[i], 0, distance[i].length);
		return distance;
	}
	public static void main(String[] args) throws Exception {
		String[] ops = re.readLine().split(" ");
		int N=Integer.parseInt(ops[0]),M=Integer.parseInt(ops[1]),K=Integer.parseInt(ops[2]);
		init(N);
		while (M--!=0) {
			ops = re.readLine().split(" ");
			int a=Integer.parseInt(ops[0]);
			int b=Integer.parseInt(ops[1]);
			int w=Integer.parseInt(ops[2]);
			if(a==b) continue;
			addEdge(a, b, w);
		}
		int[][] res = floyd();
		while(K--!=0) {
			ops = re.readLine().split(" ");
			int a=Integer.parseInt(ops[0]);
			int b=Integer.parseInt(ops[1]);
			if(res[a][b]<INF/2)
				pw.println(res[a][b]);
			else
				pw.println("impossible");
		}
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
	static PrintWriter pw = new PrintWriter(wr);
	static int nextInt() {
		try {
			tokenizer.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) tokenizer.nval;
	}
	static String nextStr() {
		try {
			tokenizer.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return tokenizer.sval;
	}
}
