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

public class _01_染色法判断二分图 {
	static int nodes[],to[],next[],idx,MAX_NODE,MAX_EDGE,NULL=0,INF=0x3f3f3f3f;
	static void init(int node,int edge) {
		MAX_NODE=node;
		MAX_EDGE=edge;
		nodes = new int[MAX_NODE+1];
		to = new int[MAX_EDGE+1];
		next = new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b) {
		to[idx]=b;
		next[idx]=nodes[a];
		nodes[a]=idx++;
	}
	static int fill[],BLACK=1,WHITE=2,UNDEFINE=0;
	static boolean fillColor(int curNode,int color) {
		if(curNode==0/*特殊处理*/) {
			fill=new int[MAX_NODE+1];
			for (int n=1;n<=MAX_NODE;n++) {// 遍历所有节点
				if(fill[n]==UNDEFINE && !fillColor(n, color)) return false;// 仅对未染色的节点染色,出现冲突则说明不是二分图
			}
			return true;// 说明是二分图
		}else {
			if(fill[curNode]==BLACK&&color==WHITE) return false;//冲突
			if(fill[curNode]==WHITE&&color==BLACK) return false;//冲突
			if(fill[curNode]!=UNDEFINE) return true;// 已经染色且不冲突
			// 未染色
			fill[curNode]=color;
			int nextColor = color==WHITE? BLACK:WHITE;// 计算其子节点的颜色
			for (int p = nodes[curNode]; p!=NULL; p=next[p]) {
				if(!fillColor(to[p], nextColor)) return false;// 为所有子节点染色，如果染色过程出现冲突，则不是二分图
			}
			return true;// 说明对当前节点及其子节点的染色操作是成功的
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
