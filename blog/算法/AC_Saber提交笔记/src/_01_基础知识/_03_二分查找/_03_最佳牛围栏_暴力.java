package _01_基础知识._03_二分查找;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

/*
提交状态: 超时
输入
10 6
6 
4
2
10
3
8
5
9
4
1

输出
6500
 * */
public class _03_最佳牛围栏_暴力 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	public static void main(String[] args) {
		int N = nextInt(),F=nextInt();
		int[] arr = new int[N+1];
		for(int i=1;i<arr.length;i++) arr[i]=nextInt();
		long max =Long.MIN_VALUE;
		PreFixSum preFixSum = new PreFixSum(arr);
		for (int i = 1; i < arr.length-F; i++) {
			for(int j=i+F-1; j < arr.length; j++) {
				int sum = preFixSum.getSum(i, j);
				int len = j-i+1;
				double k = (int)((sum/(double)len)*1000);
				if(max<k) max=(int) k;
			}
		}
		pw.println(max);
		pw.flush();
	}
	static class PreFixSum{
		int[] prefix;
		public PreFixSum(int origin[]) {
			prefix = new int[origin.length];
			for (int i = 1; i < origin.length; i++) {
				prefix[i]=prefix[i-1]+origin[i];
			}
		}
		public int getSum(int l,int r) {
			return prefix[r]-prefix[l-1];
		}
	}



	static double nextDouble() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return st.nval;
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
