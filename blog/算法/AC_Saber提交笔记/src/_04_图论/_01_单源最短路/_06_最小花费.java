package _04_图论._01_单源最短路;
/*
提交状态: AC
输入
3 3
1 2 1
2 3 2
1 3 3
1 3
输出
103.07153164
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.PriorityQueue;


public class _06_最小花费 {
//	dist[i] = dist[parent] + z_i;算的是路径上的交易费率的累加，但要的不是这个，
//	因为并不是说手续费的费率加起来最小就是最划算转账的路径
//
//  假设从A到B需要经过的银行的转账手续费率分别是 z_1/100、z_2/100、......、z_i/100
//	就是要算拿着x的本金，经过一系列的银行的转账交易和支付手续费后，本金还剩100，可得计算公式：
//	x*(1-z_1/100)*(1-z_2/100)*.....*(1-z_i/100) = 100
//	本金就为：
//	x = 100/((1-z_1/100)*(1-z_2/100)*.....(1-z_i/100))
//	x = 100/cost[i]
//	cost[i] = (1-z_1/100)*(1-z_2/100)*....*(1-z_i/100)
//	cost[i] = cost[parent] * (1-z_i/100)
//	cost[i] 越大，则x越小，即需要带的钱越少，因交易手续费而发生的对本金的磨损越少
	static int MAX_NODE,MAX_EDGE,INF=0x3f3f3f3f;
	static int head[],node[],wigh[],next[],idx;
	static void init(int n,int m) {
		MAX_NODE=n;
		MAX_EDGE=2*m;
		head=new int[MAX_NODE+1];
		node=new int[MAX_EDGE+1];
		wigh=new int[MAX_EDGE+1];
		next=new int[MAX_EDGE+1];
		idx=1;
	}
	static void addEdge(int a,int b,int w) {
		node[idx]=b;
		wigh[idx]=w;
		next[idx]=head[a];
		head[a]=idx++;
	}
	static class Record implements Comparable<Record>{
		int node;double cost;
		public Record(int node, double cost) {
			this.node = node;
			this.cost = cost;
		}
		@Override
		public int compareTo(Record other) {
			return -Double.compare(this.cost, other.cost);// 越大越好，越大说明花费的手续费越少
		}
	}
	static double djikstra(int from,int end) {
		double[] cost = new double[MAX_NODE+1];
		boolean[] visited = new boolean[MAX_NODE+1];
		PriorityQueue<Record> heap = new PriorityQueue<>();
		cost[from]=1;
		heap.add(new Record(from, cost[from]));
		while (!heap.isEmpty()) {
			Record record = heap.poll();
			int cur = record.node;
			if(visited[cur]) continue;
			else visited[cur]=true;
			for(int p=head[cur];p!=0;p=next[p]) {
				int n = node[p];
				int w = wigh[p];
				double newCost = cost[cur]*(1-w/100.0);// cost[i] = cost[from] * (1-z_i/100)
				if(cost[n]<newCost) {
					cost[n]=newCost;
					heap.add(new Record(n, cost[n]));
				}
			}
		}
		return cost[end];
	}
	public static void main(String[] args)  {
		int n=nextInt(),m=nextInt();
		init(n, m);
		while (m--!=0) {
			int x=nextInt(),y=nextInt(),z=nextInt();
			addEdge(x, y, z);
			addEdge(y, x, z);
		}
		int a=nextInt(),b=nextInt();
		double p = djikstra(a, b);
		pw.printf("%.8f",100.0/p);
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
	static PrintWriter pw = new PrintWriter(wr);
	static String[] tokens;
	static int pos=0;
	static void nextToken() {
		pos++;
		if(tokens==null ||pos==tokens.length) {
			try {
				tokens=re.readLine().split(" ");
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
