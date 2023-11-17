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
import java.util.Arrays;

public class _01_Floyd算法_邻接矩阵实现_复习 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static int m[][];
	static void init(int n) {
		MAX_NODE = n+1;
		m = new int[MAX_NODE+1][MAX_NODE+1];
		for(int[] arr:m) {Arrays.fill(arr, INF);}
		for(int i=0;i<=MAX_NODE;i++) m[i][i]=0;// 自己到自己是0
	}
	static void addEdge(int a,int b,int w) {
		m[a][b]=Math.min(m[a][b], w);
	}
	static int[][] copy(int m[][]){
		int[][] r = new int[m.length][m[0].length];
		for (int i = 0; i < r.length; i++) {
			System.arraycopy(m[i], 0, r[i], 0, r[i].length);
		}
		return r;
	}
//	O(N^3)
	static int[][] floyd() {
		int[][] dist = copy(m);
		int[][] path = new int[MAX_NODE+1][MAX_NODE+1]; // path[a][b] 记录从a到b经过了哪一个节点
		for(int mid=1;mid<=MAX_NODE;mid++) // 遍历中间节点
			for(int from=1;from<=MAX_NODE;from++) // 遍历起始节点
				for (int to = 0; to <=MAX_NODE; to++) { // 遍历结束节点
					int newDist = dist[from][mid]+dist[mid][to];// 计算从 form 到 mid 再到 to 的路程
					if(dist[from][to]>newDist) {// 如果从 form 到 mid 再到 to 的路程，比直接从 from 到 to 的路程要少则更新
						dist[from][to]=newDist;
						path[from][to]=mid;// 记录从from到to要经过的中间节点
					}
				}
		return dist;
 	}
	public static void main(String[] args) throws Exception {
		int n = nextInt(),m=nextInt(),k=nextInt();
		init(n);
		while(m--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			// 过滤掉自环，因为自己到自己应当是0（也可以负数吗？）， 实际测试时发现不过滤自环似乎也可以，测试数据中没有权重为负的自环。
			if(a!=b) addEdge(a, b, w);
		}
		int dist[][] = floyd();
		while (k--!=0) {
			int a=nextInt(),b=nextInt();
			int res = dist[a][b];
			if(res<INF/2) pw.println(res);
			else pw.println("impossible");
		}
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens=null; static int pos=0;
	static void nextToken() {
		pos++;
		if(tokens==null||pos==tokens.length) {
			try {
				tokens=re.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			pos=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[pos]);
	}
	
}
