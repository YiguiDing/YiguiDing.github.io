package _03_数据结构;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
/*
提交状态: AC
输入
10
R 7
D 1
L 3
IL 2 10
D 3
IL 2 7
L 8
R 9
IL 4 7
IR 2 2
输出
8 7 7 3 2 9
 * */
public class _02_双链表 {
	private static int N,NULL=0,HEAD=0,TAIL=1;
	private static int datas[];
	private static int after[],before[];
	private static int idx;
	static void init(int n) {
		N=n;
		datas = new int[N];
		after = new int[N];
		before= new int[N];
		after[HEAD]=TAIL;// 0号节点作为头节点，其后驱指向尾节点
		before[TAIL]=HEAD;// 1号节点作为尾节点，其前驱指向头节点
		idx=2;// 地址从2开始，0号地址作为空地址，0号节点作为头节点，1号节点作为尾节点
	}
	//	在第k个节点之后插入一个数。
	static void insertAfterK(int k,int x) {
		datas[idx]=x;
		after[idx]=after[k];// 当前节点的后继为k的后继
		before[idx]=k;// 当前节点的前驱为k
		
		before[after[k]]=idx;// k号节点的后继的前驱修改为当前节点
		after[k]=idx++;// k号节点的后继修改为当前节点。
	}
	//	在第k个节点之前插入一个数。
	static void insertBeforeK(int k,int x) {
		insertAfterK(before[k], x);
	}
	// 插入一个数x到头部
	static void insertToHead(int x) {
		insertAfterK(0, x);
	}
	// 插入一个数x到尾部部
	static void insertToTail(int x) {
		insertBeforeK(1, x);
	}
//	删除第k个节点,k是从2开始编号的
	static void removeK(int k) {
		after[before[k]]=after[k];
		before[after[k]]=before[k];
	}
	public static void main(String[] args) throws IOException {
		init(1000000);
		int M =Integer.parseInt(br.readLine());
		while (M--!=0) {
			String[] in= br.readLine().split(" ");
			if("L".equals(in[0])) {
//				插入到头部一个数x
				int x = Integer.parseInt(in[1]);
				insertToHead(x);
			}else if ("R".equals(in[0])) {
//				插入到尾部一个数x
				int x = Integer.parseInt(in[1]);
				insertToTail(x);
			}else if("D".equals(in[0])) {
//				删除第k个插入的数后面的数
				int k = Integer.parseInt(in[1]);
// 				由于地址0、1以被头节点和尾节点占用,地址从2开始编址，所以第k个插入的节点一定是第k+1号节点
				removeK(k+1);
			}else if("IL".equals(in[0])) {
//				在第k个插入的数左侧插入一个数。
				int k = Integer.parseInt(in[1]);
				int x = Integer.parseInt(in[2]);
				insertBeforeK(k+1, x);
			}else if("IR".equals(in[0])) {
//				在第k个插入的数右侧插入一个数。
				int k = Integer.parseInt(in[1]);
				int x = Integer.parseInt(in[2]);
				insertAfterK(k+1, x);
			}
		}
		for(int p=after[HEAD];p!=TAIL;p=after[p]) {
			pw.print(datas[p]+" ");
		}
		pw.flush();
	}

	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw =new PrintWriter(bw);

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
