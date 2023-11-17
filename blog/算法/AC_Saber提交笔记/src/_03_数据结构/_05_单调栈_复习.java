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
5
3 4 2 7 5
输出
-1 3 -1 2 2
 * */
public class _05_单调栈_复习 {
	static int stack[],top=-1;
	static void init(int size) {
		stack = new int[size];
	}
	static boolean isEmpty() {
		return	top == -1;
	}
	static boolean isFull() {
		return top+1 == stack.length;
	}
	static void push(int x) {
		stack[++top] = x;
	}
	static int pop() {
		return stack[top--];
	}
	static int getTop() {
		return stack[top];
	}
	static void clear() {
		top = -1;
	}
	static int[] getLeftMax(int[] arr) {
		clear();
		int res[] = new int[arr.length];
		for(int i=0;i<arr.length;i++) {
			while(!isEmpty() && arr[getTop()]<=arr[i]) pop();
			if(!isEmpty()) res[i] = getTop();
			else res[i] = -1;
			push(i);
		}
		return res;
	}
	static int[] getLeftMin(int[] arr) {
		clear();
		int res[] = new int[arr.length];
		for(int i =0;i<arr.length;i++) {
			while (!isEmpty() && arr[getTop()]>=arr[i])  pop();
			if(!isEmpty()) res[i] = getTop();
			else res[i] = -1;
			push(i);
		}
		return res;
	}
	public static void main(String[] args) throws IOException {
		int N =nextInt();
		init(N);
		int[] arr = new int[N];
		for (int i = 0; i < arr.length; i++) arr[i]=nextInt();
		int[] res = getLeftMin(arr);
		for (int i = 0; i < res.length; i++) {
			if(i!=0) pw.print(" ");
			if(res[i]!=-1) pw.print(arr[res[i]]);
			else pw.print(-1);
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
