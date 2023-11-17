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
H 9
I 1 1
D 1
D 0
H 6
I 3 6
I 4 5
I 4 5
I 3 4
D 6
输出
6 4 6 5
 * */
public class _01_单链表 {
	private static int N,NULL=0;
	private static int datas[];
	private static int nexts[];
	private static int idx;
	static void init(int n) {
		N=n;
		datas = new int[N];
		nexts = new int[N];
		nexts[0]=NULL;// 0号节点作为头节点
		idx=1;// 地址从1开始，0号地址作为空指针，否则需要使用-1作为头指针
	}
	// 插入到头部一个数x
	static void insertToHead(int x) {
		datas[idx]=x;
		nexts[idx]=nexts[0];
		nexts[0]=idx++;
	}
	//	在第k个插入的数后插入一个数。
	static void insertAfterK(int k,int x) {
		datas[idx]=x;
		nexts[idx]=nexts[k];
		nexts[k]=idx++;
	}
//	删除第k个插入的数后面的数(由于头指针放在0号节点，所以删除第0个插入的数就是删除节点)
	static void removeAfterK(int k) {
		nexts[k]=nexts[nexts[k]];
//		nexts[0]=nexts[nexts[0]]; k==0时，支持删除头节点
	}
	public static void main(String[] args) throws IOException {
		init(1000000);
		int M =Integer.parseInt(br.readLine());
		while (M--!=0) {
			String[] in= br.readLine().split(" ");
			if("H".equals(in[0])) {
//				插入到头部一个数x
				int x = Integer.parseInt(in[1]);
				insertToHead(x);
			}else if ("I".equals(in[0])) {
//				在第k个插入的数后插入一个数。
				int k = Integer.parseInt(in[1]);
				int x = Integer.parseInt(in[2]);
				insertAfterK(k, x);
			}else if("D".equals(in[0])) {
//				删除第k个插入的数后面的数
				int k = Integer.parseInt(in[1]);
				removeAfterK(k);
			}
		}
		for(int p=nexts[0];p!=NULL;p=nexts[p]) {
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
