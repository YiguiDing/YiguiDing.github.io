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
push 6
empty
query
pop
empty
push 3
push 4
pop
query
push 6
输出
NO
6
YES
4
 * */
public class _04_队列 {
	private static int queue[],head,tail,size,MAX_SIXE;
	static void init(int capacity) {
		MAX_SIXE=capacity;
		queue = new int[MAX_SIXE];
		head=0;tail=0;size=0;
	}
	static void Enqueue(int x) {
		queue[tail]=x;
		tail=++tail%MAX_SIXE;
		size++;
	}
	static int Dequeue() {
		int t = queue[head];
		head=++head%MAX_SIXE;
		size--;
		return t;
	}
	static int getFront() {
		return queue[head];
	}
	static boolean isEmpty() {
		return size==0;
	}
	static boolean isFull() {
		return size==MAX_SIXE;
	}

	public static void main(String[] args) throws IOException {
		init(1000000);
		int M =Integer.parseInt(br.readLine());
		while (M--!=0) {
			String[] in= br.readLine().split(" ");
			if("push".equals(in[0])) {
				int x = Integer.parseInt(in[1]);
				Enqueue(x);
			}else if ("pop".equals(in[0])) {
				Dequeue();
			}else if("empty".equals(in[0])) {
				pw.println(isEmpty()?"YES":"NO");
			}else if("query".equals(in[0])) {
				pw.println(getFront());
			}
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
