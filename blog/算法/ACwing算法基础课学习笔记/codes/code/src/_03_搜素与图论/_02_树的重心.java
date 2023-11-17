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
9
1 2
1 7
1 4
2 8
2 5
4 3
3 9
4 6

输出4
 */
public class _02_树的重心 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static int nextInt() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int)st.nval;
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
	public static void main(String[] args) {
		int N = nextInt();
		int E = N-1;
		Graph g = new Graph(N+1);
		while(E--!=0) {
			g.add(nextInt(), nextInt());
		}
		g.dfs(1);
		pw.println(g.res);
		pw.flush();
		
	}
	static class Graph{
		int head[],vale[],next[],idx,MAX_SIZE;
		int nodeCnt=0;
		public Graph(int capacity) {
			MAX_SIZE=capacity;
			head=new int[MAX_SIZE];// head 表示点
			vale=new int[2*MAX_SIZE];// vale 表示边，假设边的数量是节点数量的两倍
			next=new int[2*MAX_SIZE];// next 表示指针
			visited=new boolean[MAX_SIZE];// 标记是否访问
			Arrays.fill(head, -1);// 表示空指针
			idx=0;
		}
		// 插入 a<->b 的两条边
		void add(int a,int b){
			// 头插法
			if(head[a]==-1) nodeCnt++;// 统计节点数
			if(head[b]==-1) nodeCnt++;// 
//			直接建两条边，保证无向图。
			vale[idx]=b; next[idx]=head[a]; head[a]=idx; idx++;
			vale[idx]=a; next[idx]=head[b]; head[b]=idx; idx++;
		}
		int min = Integer.MAX_VALUE;
		int res = -1;
		
		boolean visited[];
//		利用系统栈来递归实现深度优先遍历
//		返回当前节点子树大小
		int dfs(int start) {
			visited[start]=true;
			int max = 0;
			int size = 1;// 记录以当前节点为树根的树的节点数
			for(int p=head[start];p!=-1;p=next[p]) {
				if(!visited[vale[p]]) {
					int t = dfs(vale[p]); //子节点大小
					size+=t; // 统计所有子树的大小
					max=Math.max(max, t);// 找出最大的子树大小
				}
			}
			int k = Math.max(max, nodeCnt-size);
			if(k<min) {
				min=k;
				res=max;
			}
			return size;
		}
	}
}
