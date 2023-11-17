package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
3 3 1
1 2 1
2 3 1
1 3 3
输出
3
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.HashSet;

public class _03_Bellman_Ford算法 {
	static class Edge{
		int from,to,weight;
		public Edge(int from, int to, int weight) {
			this.from = from;
			this.to = to;
			this.weight = weight;
		}
	}
	static int MAX_NODE,INF=0x3f3f3f3f;
	static HashSet<Edge> edges=new HashSet<>();
	static void init(int nodeSize) {
		MAX_NODE = nodeSize;
	}
	static void addEdge(int a,int b,int w) {
		edges.add(new Edge(a, b, w));
	}
	static int[] bellman_ford(int from,int k) {
		int[] distance = new int[MAX_NODE+1];
		int[] distance_bak = new int[MAX_NODE+1];
		Arrays.fill(distance, INF);
		distance[from]=0;
		System.arraycopy(distance, 0, distance_bak, 0, distance_bak.length);
		for(int i=1;i<=k;i++) {
			for(Edge edge:edges) {
				distance[edge.to]=Math.min(distance[edge.to], distance_bak[edge.from]+edge.weight);
			}
			System.arraycopy(distance, 0, distance_bak, 0, distance_bak.length);
		}
		return distance;
	}
	public static void main(String[] args) throws Throwable {
		String[] ops = re.readLine().split(" ");
		int n=Integer.parseInt(ops[0]),
			m=Integer.parseInt(ops[1]),
			k=Integer.parseInt(ops[2]);
		init(n);
		while(m--!=0) {
			ops = re.readLine().split(" ");
			int a = Integer.parseInt(ops[0]),
				b = Integer.parseInt(ops[1]),
				w = Integer.parseInt(ops[2]);
			if(a!=b) addEdge(a, b, w);
		}
		int[] res= bellman_ford(1, k);
		if(res[n]<=INF/2)
			pw.print(res[n]);
		else
			pw.print("impossible");
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
