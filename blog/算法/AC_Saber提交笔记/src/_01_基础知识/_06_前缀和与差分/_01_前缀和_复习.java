package _01_基础知识._06_前缀和与差分;


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
5 3
2 1 3 6 4
1 2
1 3
2 4
输出
3
6
10
 * */

public class _01_前缀和_复习 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		int N = nextInt(),M=nextInt(),l,r,i;
		int arr[] = new int[N+1];
		for (i = 1; i < arr.length; i++) arr[i]=nextInt();
		PreFixSum preFixSum = new PreFixSum();
		preFixSum.load(arr);
		while (M--!=0) {
			l=nextInt();r=nextInt();
			pw.println(preFixSum.getSum(l, r));
		}
		pw.flush();
	}
	static class PreFixSum{
		int data[];
		void load(int arr[]) {
			data = new int[arr.length+1];
			for(int i=1;i<arr.length;i++) {
				data[i]=data[i-1]+arr[i];
			}
		}
		int getSum(int l,int r) {
			return data[r]-data[l-1];
		}
	}
	
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

