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
3 3
1 2
2 3
1 3
输出
1 2 3
 * */

public class _04_有向图的拓扑排序 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		int N = nextInt();
		int M = nextInt();
		Graph graph = new Graph(N+1, M+1);
		while(M--!=0) {
			graph.add(nextInt(), nextInt());
		}
		int[] res = graph.topOrder();
		if(res!=null) {
			int i=1;
			for(;i<res.length-1;i++) pw.printf("%d ",res[i]);
			pw.println(res[i]);
		}else pw.println(-1);
		pw.flush();
	}
	static class Graph{
		int NODE_MAX_SIZE,EDGE_MAX_SIZE,NULL=0x3f3f3f3f;// 常量定义
		int node[],vale[],next[],idx;
		int in[];// 入度
		int nodeCounter;// 存在的节点数统计
		public Graph(int nodeMaxSize,int edgeMaxSize) {
			NODE_MAX_SIZE=nodeMaxSize;
			EDGE_MAX_SIZE=edgeMaxSize;
			in=new int[NODE_MAX_SIZE];
			node=new int[NODE_MAX_SIZE];
			vale=new int[EDGE_MAX_SIZE];
			next=new int[EDGE_MAX_SIZE];
			Arrays.fill(node, NULL);
			Arrays.fill(in, NULL);
			idx=0;
			nodeCounter=0;
		}
//		添加a->b的边
		void add(int a,int b) {
			vale[idx]=b;next[idx]=node[a];node[a]=idx++;
			
			if(in[a]==NULL) {in[a]=0; nodeCounter++;}// 第一次单独初始化，保证不存在的节点入度为NULL
			if(in[b]==NULL) {in[b]=0; nodeCounter++;}
			
			in[b]++;// 入度自增
		}
		int[] topOrder() {
			int queue[]=new int[NODE_MAX_SIZE],front=1,tail=1,qsize=0;// 建队列，从1开始存，因为这里所有的下标都是从1开始，这里为了统一
			boolean visited[]=new boolean[NODE_MAX_SIZE];// 防止有环导致死循环
			for(int node=0;node<NODE_MAX_SIZE;node++) {
				if(in[node]==0) {
					queue[tail++]=node;// 找到所有入度为0的节点，入队
					visited[node]=true;// 标记访问，防止死循环
					qsize++;
				}
			}
			while (front<tail) {
				int v = queue[front++];
				for(int p = node[v];p!=NULL;p=next[p]) {
					if(!visited[vale[p]]) {
						if(--in[vale[p]]==0) {
							queue[tail++]=vale[p];// 入度自减后为0，说明该节点不依赖其他节点了，可以被后续处理，入队
							visited[vale[p]]=true;// 标记访问，防止死循环
							qsize++;
						}
					}
				}
			}
			if(qsize==nodeCounter) return queue;// qsize==nodeCounter说明填满了，说明该图是一个无环拓扑图
			else return null;
		}
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
