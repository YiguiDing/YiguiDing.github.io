package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
5 10
1 2 2
5 3 3
4 1 8
2 4 3
4 5 7
5 2 3
3 4 1
1 2 9
3 2 3
1 2 8
输出
12
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

public class _01_Dijkstra_朴素版_邻接矩阵实现 {
	static int matrix[][],MAX_NODE_SIZE,INF=0x3f3f3f3f;
	static void init(int nodeNum) {
		MAX_NODE_SIZE = nodeNum;
		matrix=new int[MAX_NODE_SIZE+1][MAX_NODE_SIZE+1];
		for (int i = 0; i < matrix.length; i++) {
			Arrays.fill(matrix[i], INF);
		}
	}
	static void addEdge(int A,int toB,int w) {
		matrix[A][toB]=Math.min(matrix[A][toB], w);
	}
//	单源非负最短路：从一个点出发到其他所有点的最短距离
	static int[] Dijkstra(int from) {
		boolean visited[]=new boolean[MAX_NODE_SIZE+1];
		int distance[]=new int[MAX_NODE_SIZE+1];
		Arrays.fill(distance, INF);
		distance[from]=0;// 自己到自己的距离为0
		for (int i = 1; i<=MAX_NODE_SIZE; i++) {
			int minNode = getMinDisNextNodeExcludeVisited(distance, visited);
			if(minNode==-1) break;// -1说明到其他节点的距离都是无穷远，说明到达剩余的其他节点的路径是不存在的。
			visited[minNode]=true;
			for (int next = 1; next<=MAX_NODE_SIZE; next++) {
				int toNextN =next;
				int toNextW = matrix[minNode][toNextN];
				distance[toNextN]=Math.min(distance[toNextN],distance[minNode]+toNextW);
			}
		}
		return distance;
	}
	static int getMinDisNextNodeExcludeVisited(int distance[],boolean exclude[]) {
		int targetIdx = -1;
		int targetDis = INF;
		for (int i = 1; i <= MAX_NODE_SIZE; i++) {
			if(!exclude[i] && (distance[i]<targetDis)) {
				targetIdx=i;
				targetDis=distance[i];
			}
		}
		return targetIdx;
	}
	public static void main(String[] args) throws Exception {
		String[] ops = re.readLine().split(" ");
		int N=Integer.parseInt(ops[0]),M=Integer.parseInt(ops[1]);
		init(N);
		while (M--!=0) {
			ops = re.readLine().split(" ");
			int a=Integer.parseInt(ops[0]);
			int b=Integer.parseInt(ops[1]);
			int w=Integer.parseInt(ops[2]);
			if(a==b)continue;
			addEdge(a, b, w);
//			addEdge(b, a, w);
		}
		int[] res = Dijkstra(1);
		if(res[N]!=INF) {
			pw.print(res[N]);
		}else {
			pw.print(-1);
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
