package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
3 3
1 2 5
2 3 -3
1 3 4
输出
2
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class _04_SPFA算法 {

	static int node[],to[],wigh[],next[],idx,MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f,NULL=0;
	static void init(int nodeSize,int edgeSize) {
		MAX_NODE = nodeSize;
		MAX_EDGE = edgeSize;
		node = new int[MAX_NODE+1];
		to = new int[MAX_EDGE+1];
		wigh = new int[MAX_EDGE+1];
		next = new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b,int w) {
		to[idx]=b;
		wigh[idx]=w;
		next[idx]=node[a];
		node[a]=idx++;
	}
	static int[] SPFA(int from) {
		boolean[] existInQueue = new boolean[MAX_NODE+1];
		int[] distance = new int[MAX_NODE+1];
		Arrays.fill(distance, INF);
		distance[from]=0;
		Queue<Integer> processQueue = new LinkedList<>();
		processQueue.add(from);
		existInQueue[from]=true;
		while(!processQueue.isEmpty()) {
			int curNode = processQueue.poll();
			existInQueue[curNode]=false;
			int curDis = distance[curNode];
			for(int p=node[curNode];p!=NULL;p=next[p]) {
				int no = to[p];
				int wight = wigh[p];
				int newDis = curDis+wight;
				if(newDis<distance[no]) {
					distance[no]=newDis;
					if(!existInQueue[no]) {
						processQueue.add(no);
						existInQueue[no]=true;
					}
				}
			}
		}
		return distance;
	}
	public static void main(String[] args) throws Throwable {
		String[] ops = re.readLine().split(" ");
		int n=Integer.parseInt(ops[0]),
			m=Integer.parseInt(ops[1]);
		init(n,m);
		while(m--!=0) {
			ops = re.readLine().split(" ");
			int a = Integer.parseInt(ops[0]),
				b = Integer.parseInt(ops[1]),
				w = Integer.parseInt(ops[2]);
			if(a!=b) addEdge(a, b, w);
		}
		int[] res= SPFA(1);
		if(res[n]<=INF/2)
			pw.print(res[n]);
		else
			pw.print("impossible");
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
	static PrintWriter pw = new PrintWriter(wr);
	static int nextInt() {
		try {
			tokenizer.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) tokenizer.nval;
	}
	static String nextStr() {
		try {
			tokenizer.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return tokenizer.sval;
	}
}
