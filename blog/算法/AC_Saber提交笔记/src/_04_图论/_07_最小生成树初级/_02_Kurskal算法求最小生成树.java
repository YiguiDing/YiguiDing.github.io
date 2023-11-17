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
import java.util.HashSet;
import java.util.PriorityQueue;

public class _02_Kurskal算法求最小生成树 {
	static int nodes[],from[],to[],wigh[],next[],idx,MAX_NODE,MAX_EDGE,NULL=0,INF=0x3f3f3f3f;
	static void init(int n,int e) {
		MAX_NODE=n;
		MAX_EDGE=e;
		nodes= new int[MAX_NODE+1];
		from=new int[MAX_EDGE+1];
		to = new int[MAX_EDGE+1];
		wigh=new int[MAX_EDGE+1];
		next=new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b,int w) {
		from[idx]=a;
		to[idx]=b;
		wigh[idx]=w;
		next[idx]=nodes[a];
		nodes[a]=idx++;
	}
	static class Edge implements Comparable<Edge>{
		int from,to,wigh;
		public Edge(int a,int b,int w) {
			from =a;to=b;wigh=w;
		}
		@Override
		public int compareTo(Edge other) {
			return this.wigh-other.wigh;
		}
	}
	static int nodeCnt=0,wighCnt=0;// 统计最小生成树的连通节点个数，路径总长
	static HashSet<Edge> Kruskal(int root/*最小生成树的根节点*/) {
		nodeCnt=1;wighCnt=0;// 初始化
		initUnionSet(MAX_NODE);// 初始化并查集
		HashSet<Edge> result = new HashSet<>();// 结果应当是边的集合
		PriorityQueue<Edge> heap = new PriorityQueue<>();
		for (int n1 = 1; n1 <=MAX_NODE; n1++) {// 把所有边添加到堆中
			for(int p=nodes[n1];p!=NULL;p=next[p]) {
				int n2=to[p];
				int w=wigh[p];
				heap.add(new Edge(n1, n2, w));
			}
		}
		while(!heap.isEmpty()) {
			Edge edge = heap.poll();
			int fromN = edge.from;
			int nextN = edge.to;
			int pathW = edge.wigh;
			if(!isInUnionSet(fromN)) addToUnionSet(fromN);
			if(!isInUnionSet(nextN)) addToUnionSet(nextN);
			if(!isSameSet(fromN, nextN)) {
				Union(fromN, nextN);
				result.add(edge);
				nodeCnt+=1;
				wighCnt+=pathW;
			}
		}
		return result;
	}
	public static void main(String[] args) throws Throwable{
		int N=nextInt(),M=nextInt();
		init(N,2*M);
		while(M--!=0) {
			int a=nextInt(),b=nextInt(),w=nextInt();
			if(a==b) continue;// 过滤自环
			addEdge(a, b, w);
			addEdge(b, a, w);
		}
		HashSet<Edge> res = Kruskal(1);
		if(nodeCnt==MAX_NODE) printer.println(wighCnt);
		else printer.println("impossible");
		printer.flush();
	}
	static int parent[],MAX_SIZE;
	static void initUnionSet(int n) {
		MAX_SIZE=n;
		parent = new int[MAX_SIZE+1];
	}
	static void addToUnionSet(int a) {
		parent[a]=a;
	}
	static int findParent(int a) {
		if(parent[a]!=a) parent[a]=findParent(parent[a]);
		return parent[a];
	}
	static boolean isInUnionSet(int a) {// 判断a是否已经在集合中
		return parent[a]!=NULL;
	}
	static boolean isSameSet(int a,int b) {// a、b必须已经在集合中
		return findParent(a)==findParent(b);
	}
	static void Union(int a,int b) {// a、b必须已经在集合中
		parent[findParent(a)]=findParent(b);
	}
	static BufferedReader reader= new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer =new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(reader);
	static PrintWriter printer = new PrintWriter(writer);
	static int nextInt() throws Throwable {
		tokenizer.nextToken();
		return (int) tokenizer.nval;
	}
	static String nextStr()throws Throwable{
		tokenizer.nextToken();
		return tokenizer.sval;
	}
}
