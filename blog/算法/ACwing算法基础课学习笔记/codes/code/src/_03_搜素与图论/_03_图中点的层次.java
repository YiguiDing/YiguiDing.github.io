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
输入
4 5
1 2
2 3
3 4
1 3
1 4

输出1
 */
public class _03_图中点的层次 {
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
		int E = nextInt();
		Graph g = new Graph(N+1,E+1);
		while(E--!=0) {
			g.add(nextInt(), nextInt());
		}
		pw.println(g.wfs(1, N));// 输出1->N节点的最短距离
		pw.flush();
	}
	static class Graph{
		int head[],vale[],next[],idx,NODE_MAX_SIZE,EDGE_MAX_SIZE;
		public Graph(int nodeMaxSize,int edgeMaxSize) {
			NODE_MAX_SIZE=nodeMaxSize;
			EDGE_MAX_SIZE = 2*edgeMaxSize;
			head=new int[NODE_MAX_SIZE];// head 表示点
			vale=new int[EDGE_MAX_SIZE];// vale 表示边，假设边的数量是节点数量的两倍
			next=new int[EDGE_MAX_SIZE];// next 表示指针
			Arrays.fill(head, -1);// 表示空指针
			idx=0;
		}
		// 插入 a<->b 的两条边
		void add(int a,int b){
//			直接建两条边，保证无向图。
			// 头插法
			vale[idx]=b; next[idx]=head[a]; head[a]=idx; idx++;
			vale[idx]=a; next[idx]=head[b]; head[b]=idx; idx++;
		}
//		返回从front到to的最短距离
		int wfs(int from,int to) {
			int queue[]=new int[NODE_MAX_SIZE],front=0,tail=0;// 队列
			boolean visited[] = new boolean[NODE_MAX_SIZE];// 访问标记，防止死循环
			int[] distance =new int[NODE_MAX_SIZE]; Arrays.fill(distance, -1);// 计算距离，初始化-1
			visited[from]=true;// 访问这个节点
			queue[tail++]=from;// 加入队列，从起始节点开始宽度遍历
			distance[from]=0;// 自己到自己的距离是0
			while(front<tail && distance[to]!=-1 /*队不为空，且还未计算出目标位置*/) {
					int v = queue[front++];// 从队头拿出一个节点
					for(int p= head[v];p!=-1;p=next[p]) {//p是指针
						if(!visited[vale[p]]) {
							visited[vale[p]]=true;// 标记访问
							queue[tail++]=vale[p];// 加入队列
							if(distance[vale[p]]==-1) distance[vale[p]]=0;//初始化，其实也可以换种写法
								// 计算距离，到达当前节点的距离=到达当前节点父节点的距离+当前节点到父节点边的距离或权重（此处为1）
								distance[vale[p]]=distance[v]+1;
						}
					}
			}
			return distance[to];
		}
	}
}
