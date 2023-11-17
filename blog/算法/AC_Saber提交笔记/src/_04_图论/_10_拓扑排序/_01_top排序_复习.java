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
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;


public class _01_top排序_复习 {
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f,NULL=0;
	static int head[],node[],wigh[],next[],in[],ou[],idx=1;
	static void init(int n,int m) {
		MAX_NODE = n;
		MAX_EDGE = m;
		head = new int[MAX_NODE+1];
		in = new int[MAX_NODE+1];
		ou = new int[MAX_NODE+1];
		node = new int[MAX_EDGE+1];
		wigh= new int[MAX_EDGE+1];
		next = new int[MAX_EDGE+1];
		idx = 1;
	}
	static void addEdge(int a,int b,int w) {
		node[idx]=b;
		wigh[idx]=w;
		next[idx]=head[a];
		head[a]=idx++;
		ou[a]++;
		in[b]++;
	}
	static int[] top() {
		int queue[] = new int[MAX_NODE],front=0,tail=0;
		boolean visited[] = new boolean[MAX_NODE+1];
		for(int n=1;n<=MAX_NODE;n++) {
			if(!visited[n] && in[n]==0) {
				queue[tail++]=n;
				visited[n]=true;
			}
		}
		while (front<tail) {
			int c = queue[front++];
			for(int p=head[c];p!=NULL;p=next[p]) {
				int n = node[p];
				if(!visited[n] && --in[n]==0) {
					queue[tail++]=n;
					visited[n]=true;
				}
			}
		}
		if(tail==MAX_NODE) return queue;
		return null;
	}
	public static void main(String[] args) {
		int n = nextInt();
		init(n, 100*n);
		for(int a=1;a<=MAX_NODE;a++) {
			int b;
			while((b=nextInt())!=0) {
				addEdge(a, b, 1);
			}
		}
		int[] res = top();
		for(int r:res) {
			printer.print(r+" ");
		}
		printer.flush();
	}
	static BufferedReader reader=new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer=new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer = new PrintWriter(writer);
	static String[] tokens=null; static int pos = 0;
	static void nextToken() {
		pos++;
		if(tokens==null||pos==tokens.length) {
			try {
				tokens = reader.readLine().split(" ");
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
