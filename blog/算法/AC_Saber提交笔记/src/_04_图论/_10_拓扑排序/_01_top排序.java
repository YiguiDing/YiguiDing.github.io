package _04_图论._10_拓扑排序;
/*
提交状态: AC
输入
5
0
4 5 1 0
1 0
5 3 0
3 0
输出
2 4 5 3 1
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;


public class _01_top排序 {
	static int nodes[],in[],out[],from[],to[],wigh[],next[],idx,MAX_NODE,MAX_EDGE,NULL=0,INF=0x3f3f3f3f;
	static void init(int n,int e) {
		MAX_NODE=n;
		MAX_EDGE=e;
		nodes= new int[MAX_NODE+1];
		in = new int[MAX_NODE+1];
		out = new int[MAX_NODE+1];
		from=new int[MAX_EDGE+1];
		to = new int[MAX_EDGE+1];
		wigh=new int[MAX_EDGE+1];
		next=new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b,int w) {
		out[a]++;
		in[b]++;
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
	static int[] topOrder() {
		int processQueue[]=new int[MAX_NODE],head=0,tail=0;
		boolean visited[] = new boolean[MAX_NODE+1];
		for (int n = 1; n <=MAX_NODE; n++) {
			if(!visited[n] && in[n]==0) {// 找到所有入度为0的点，入队
				processQueue[tail++]=n;
				visited[n]=true;
			}
		}
		while(head<tail) {
			int curN = processQueue[head++];
			for(int p=nodes[curN];p!=NULL;p=next[p]) {
				int nextN = to[p];
				if(!visited[nextN] && --in[nextN]==0) {// 入度减减后如果为0，则入队。
					processQueue[tail++]=nextN;
					visited[nextN]=true;
				}
			}
		}
		if(tail==MAX_NODE) return processQueue;
		else return null;
	}
	public static void main(String[] args) throws Throwable{
		int N=nextInt();
		init(N,10*N);
		for (int from = 1; from <= N; from++) {
			while(true) {
				int next = nextInt();
				if(next==0) break;
				addEdge(from, next, 0);
			}
		}
		int[] res= topOrder();
		if(res==null) printer.println("impossible");
		else {
			for (int i = 0; i < res.length; i++) {
				if(i!=0) printer.print(" ");
				printer.print(res[i]);
			}
		}
		printer.flush();
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
