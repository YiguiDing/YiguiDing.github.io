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
push 5
query
push 6
pop
query
pop
empty
push 4
query
empty
输出
5
5
YES
4
NO
 * */
public class _03_栈 {
	private static int stack[],top,MAX_SIXE;
	static void init(int size) {
		MAX_SIXE=size;
		stack = new int[MAX_SIXE];
		top=-1;
	}
	static void push(int x) {
		stack[++top]=x;
	}
	static int getTop() {
		return stack[top];
	}
	static int pop() {
		return stack[top--];
	}
	static boolean isEmpty() {
		return top==-1;
	}
	static boolean isFull() {
		return top==MAX_SIXE-1;
	}

	public static void main(String[] args) throws IOException {
		init(1000000);
		int M =Integer.parseInt(br.readLine());
		while (M--!=0) {
			String[] in= br.readLine().split(" ");
			if("push".equals(in[0])) {
				int x = Integer.parseInt(in[1]);
				push(x);
			}else if ("pop".equals(in[0])) {
				pop();
			}else if("empty".equals(in[0])) {
				pw.println(isEmpty()?"YES":"NO");
			}else if("query".equals(in[0])) {
				pw.println(getTop());
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
