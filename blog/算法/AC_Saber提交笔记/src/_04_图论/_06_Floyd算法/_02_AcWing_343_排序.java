package _04_图论._06_Floyd算法;
/*
提交状态: AC
输入
4 6
A<B
A<C
B<C
C<D
B<D
A<B
3 2
A<B
B<A
26 1
A<Z
0 0
输出
Sorted sequence determined after 4 relations: ABCD.
Inconsistency found after 2 relations.
Sorted sequence cannot be determined.
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.Collections;

public class _02_AcWing_343_排序 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f,NULL=0;
	static int g[][],out[],in[];
	static boolean exist[];
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=m;
		g=new int[MAX_NODE+1][MAX_NODE+1];
		out=new int[MAX_NODE+1];//统计某节点的出度
		in=new int[MAX_NODE+1];// 统计某节点的入度
		for (int i = 0; i < g.length; i++) {
			for (int j = 0; j < g[i].length; j++) {
				g[i][j]=INF;
			}
			g[i][i]=0;
		}
	}
	static void addEdge(int a,int b,int w) {
		if(w<g[a][b]) {// 仅当添加的边的权重更小时才添加
			if(g[a][b]==INF) {// 仅在创建新边的时候更新入度和出度
				out[a]++; // a的出边+1
				in[b]++; // b的入度+1
			}
			g[a][b]=w;
		}
	}
	static void floydUpdate(int mid) {
		for (int from = 1; from <=MAX_NODE; from++) {
			for (int to = 1; to <=MAX_NODE; to++) {
				addEdge(from, to, g[from][mid]+g[mid][to]);
//				上一行代码完全可以替换下面8行代码
//				int newDistance = g[from][mid]+g[mid][to];
//				if(newDistance<g[from][to]) {
//					if(g[from][to]==INF) { //仅当from->to之间原本是没有边的情况下来统计，否则会重复统计
//						out[from]++; // 更新出度
//						in[to]++; // 更新入度
//					}
//					g[from][to]=newDistance; // 实际就是在 from->to 之间加一条权重更短的边
//				}
			}
		}
	}
	static class Record implements Comparable<Record>{
		int node,nextCnt;
		public Record(int node, int nextCnt) {
			this.node = node;
			this.nextCnt = nextCnt;
		}
		public int compareTo(Record o) {
			return this.nextCnt-o.nextCnt;
		};
	}
	static Record[] sort() {
		Record records[] = new Record[MAX_NODE];
		for(int n=1;n<=MAX_NODE;n++) {
//			到达n的节点数 + n能到达的节点数 + 1 应当等于 总节点数
			if(in[n]+out[n]+1!=MAX_NODE) return null;
			records[n-1]=new Record(n, out[n]);
		}
		Arrays.sort(records);
		return records;
	}
	public static void main(String[] args) throws Exception {
		int n,m;
		while((n=nextInt())!=0&&(m=nextInt())!=0) {
			init(n,m);
			boolean done = false; // 处理完毕
			int i=1;
			for(;i<=m;i++) {
				String info = nextStr();
				int a= info.charAt(0)-'A'+1;
				int b= info.charAt(2)-'A'+1;
				if(done) continue;
				if(g[a][b]!=INF) {
					pw.printf("Inconsistency found after %d relations.\n",i);
					done=true;
					continue;
				}
				addEdge(b, a, 1);
//				分别以a b为中间点来使用 floyd 算法更新,
//				实际是检查其余节点中任意两点是否能够通过新增加的节点联通起来，如果可以。则加一条边（floyd算法的本质就是这样的）
				floydUpdate(a);floydUpdate(b);
				Record[] res;
				if(!done && (res = sort())!=null) {
					StringBuffer sb =new StringBuffer();
					for(Record r:res) {sb.append((char)('A'+r.node-1));}
					pw.printf("Sorted sequence determined after %d relations: %s.\n",i,sb.toString());
					done=true;
				}
			}
			
			if(!done) pw.println("Sorted sequence cannot be determined.");
		}
		
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens=null;static int pos=0;
	static void nextToken() {
		pos++;
		if(tokens==null || pos==tokens.length) {
			try {
				tokens = re.readLine().split(" ");
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
	static long nextLon() {
		nextToken();
		return Long.parseLong(tokens[pos]);
	}
	static String nextStr() {
		nextToken();
		return tokens[pos];
	}
}
