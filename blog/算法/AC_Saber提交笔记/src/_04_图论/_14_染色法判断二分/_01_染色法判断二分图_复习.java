package _04_图论._14_染色法判断二分;
/*
提交状态: AC
输入
4 4
1 3
1 4
2 3
2 4
输出
Yes
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _01_染色法判断二分图_复习 {
	static int head[],node[],next[],idx,MAX_NODE,MAX_EDGE,NULL=0,INF=0x3f3f3f3f;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=m;
		head = new int[MAX_NODE+1];
		node = new int[MAX_EDGE+1];
		next = new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b) {
		node[idx]=b;
		next[idx]=head[a];
		head[a]=idx++;
	}
	static int fill[],BLACK=1,WHITE=2,UNDEFINE=0;
	static boolean fillColor(int cur,int color) {
		if (cur==0) {
			fill = new int[MAX_NODE+1];
			for(int i=1;i<=MAX_NODE;i++) {
				if(fill[i]==UNDEFINE && !fillColor(i, color)) return false;
			}
			return true;
		}else {
			if(fill[cur]==BLACK && color==WHITE) return false;
			if(fill[cur]==WHITE && color==BLACK) return false;
			if(fill[cur]==color) return true;
			fill[cur]=color;
			for(int p=head[cur];p!=NULL;p=next[p]) {
				int n = node[p];
				int newCol = color==WHITE?BLACK:WHITE;
				if(!fillColor(n, newCol)) return false;
			}
			return true;
		}
	}
	public static void main(String[] args) throws Throwable {
		int n=nextInt(),m=nextInt();
		init(n, 2*m);
		while(m--!=0) {
			int a=nextInt(),b=nextInt();
//			if(a==b) continue;// 存在自环一定不是二分图
			addEdge(a, b);
			addEdge(b, a);
		}
		if(fillColor(0, WHITE))
			printer.println("Yes");
		else
			printer.println("No");
		printer.flush();
	}
	
	
	
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(reader);
	static PrintWriter printer = new PrintWriter(writer);
	static int nextInt() throws Throwable{
		tokenizer.nextToken();
		return (int) tokenizer.nval;
	}
	static String nextStr() throws Throwable {
		tokenizer.nextToken();
		return tokenizer.sval;
	}
}
