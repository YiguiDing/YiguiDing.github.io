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
public class _03_最佳牛围栏_二分 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	public static void main(String[] args) {
		int N = nextInt(),F=nextInt();
		int[] arr = new int[N+1];
		for(int i=1;i<arr.length;i++) arr[i]=nextInt();
		
		double l=0,r=2000,mid;
		while (r-l>0.000001) {
			mid=l+(r-l)/2;
			if(check(arr,F,mid)) l=mid;
			else r=mid;
		}
		pw.printf("%d\n",(int)(r*1000));
		pw.flush();
	}



	private static boolean check(int[] arr,int minWindowLen, double mid) {
		double[] prefix = new double[arr.length];
		for (int i = 1; i < arr.length; i++) {
			prefix[i]=prefix[i-1]+arr[i]-mid;
		}
		double min = 0;
		for(int i=1,j=minWindowLen;j<prefix.length;i++,j++) {
			min=Math.min(min, prefix[i-1]);
			if(prefix[j]-min>=0) return true;
		}
		return false;
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
