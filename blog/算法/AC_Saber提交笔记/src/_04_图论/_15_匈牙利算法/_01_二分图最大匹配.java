package _04_图论._15_匈牙利算法;
/*
提交状态: AC
输入
2 2 4
1 1
1 2
2 1
2 2
输出
2
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

public class _01_二分图最大匹配 {
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
	static int match[],matchCnt;
	static boolean matched[];
	static int match(int x) {
		if(x==0) {
			matchCnt=0;
			match=new int[MAX_NODE+1];
			matched=new boolean[MAX_NODE+1];
			for (int n = 1; n <= MAX_NODE ; n++) {
				Arrays.fill(matched, false);
				if(fill[n]==WHITE && match(n)!=NULL) {
					matchCnt++;
				}
			}
			return NULL;
		}else {
			for (int p = nodes[x]; p !=NULL; p=next[p]) {
				int y=to[p];
				if(!matched[y]) {
					matched[y]=true;
					if(match[y]==NULL||match(match[y])!=NULL) {
						match[y]=x;
						return y;
					}
				}
			}
			return NULL;
		}
	}
	public static void main(String[] args) throws Throwable {
		int n1=nextInt(),n2=nextInt(),m=nextInt();
		init(n1+n2, 2*m);
		while(m--!=0) {
			int a=nextInt(),b=nextInt()+n1;
//			if(a==b) continue;// 存在自环一定不是二分图
			addEdge(a, b);
			addEdge(b, a);
		}
		if(fillColor(0, WHITE)) {// 题目是保证所给图一定是二分图，但这里把题一般化了，会先染色然后判断是否是二分图
			match(0);
			printer.println(matchCnt);
		}else
			printer.println(0);
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
