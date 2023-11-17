package _04_图论._07_最小生成树初级;
/*
提交状态: AC
输入
4 5
1 2 1
1 3 2
1 4 3
2 3 2
3 4 4
输出
6
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.HashSet;
import java.util.PriorityQueue;

public class _01_Prim算法求最小生成树 {
	static int matrix[][],NULL=0,INF=0x3f3f3f3f,MAX_NODE,MAX_EDGE;
	static void init(int nodes,int edges) {
		MAX_NODE=nodes;
		matrix = new int[MAX_NODE+1][MAX_NODE+1];
		for (int i = 0; i < matrix.length; i++) {
			Arrays.fill(matrix[i],INF);
			matrix[i][i]=0;// 自己到自己的距离为0；
		}
	}
	static void addEdge(int a,int b,int w) {
		matrix[a][b]=Math.min(matrix[a][b], w);// 邻接矩阵存储的好处就是可以方便的过滤重边
	}
	static class Edge implements Comparable<Edge>{
		int from,to,wigh;
		public Edge(int a,int b,int w) {
			from=a;to=b;wigh=w;
		}
		@Override
		public int compareTo(Edge other) {
			return this.wigh-other.wigh;
		}
	}
	static int totalDis =0,totalNode=0;
	static HashSet<Edge> prim(int root/*随便选一个点作为根节点即可*/){
		HashSet<Edge> result = new HashSet<>();// 结果应当是边的集合
		PriorityQueue<Edge> heap = new PriorityQueue<>();
		boolean[] connected=new boolean[MAX_NODE+1];
		connected[root]=true;// 用来判断某个节点是否已经在联通图中，也可以用集合实现。
		totalDis=0;totalNode=1;// 初始化用来统计连接整个图的总路程和连通块节点数的两个全局变量
		for (int from=root,to = 1; to<=MAX_NODE; to++) {// 遍历根节点所有边，加入到堆中。
			int w = matrix[from][to];
			if(w!=INF) heap.add(new Edge(from, to, w));
		}
		while(!heap.isEmpty()) {
			Edge edge = heap.poll();
			int nextN = edge.to;
			int pathW = edge.wigh;
			if (!connected[nextN]) {// 要求下一个节点没有被连接
				connected[nextN]=true;
				for (int from=nextN,to = 1; to<=MAX_NODE; to++) {// 该节点的所有边添加到堆
					int w = matrix[from][to];
					if(w!=INF) heap.add(new Edge(from, to, w));
				}
				result.add(edge);
				totalDis+=pathW;// 统计总路程
				totalNode+=1;// 统计总节点数
			}
		}
		return result;
	}
	public static void main(String[] args) throws Throwable{
		int n=nextInt(),m=nextInt();
		init(n, 2*m);
		while(m--!=0) {
			int from=nextInt(),to=nextInt(),wigh=nextInt();
			if(from==to) continue;
			addEdge(from, to, wigh);
			addEdge(to, from, wigh);
		}
		HashSet<Edge> res = prim(1);
		if(totalNode!=MAX_NODE) printer.println("impossible");
		else printer.print(totalDis);
		printer.flush();
	}
	static BufferedReader reader=new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer=new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokens = new StreamTokenizer(reader);
	static PrintWriter printer = new PrintWriter(writer);
	static int nextInt() throws Throwable {
		tokens.nextToken();
		return (int) tokens.nval;
	}
	static String nextStr() throws Throwable{
		tokens.nextToken();
		return tokens.sval;
	}
}
