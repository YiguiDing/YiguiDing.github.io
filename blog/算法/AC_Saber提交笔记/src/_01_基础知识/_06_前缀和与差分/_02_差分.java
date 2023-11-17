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
6 3
1 2 2 1 2 1
1 3 1
3 5 1
1 6 1
输出
3 4 5 3 4 2
 * */

public class _02_差分 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static class DifferArray{
		int[] differ;
		public DifferArray(int[] origin) {
			differ = new int[origin.length+1];
			for (int i = 1; i < origin.length; i++) {
				add(i, i, origin[i]);
			}
		}
		void add(int l,int r,int x) {
			differ[l]+=x;
			differ[r+1]-=x;
		}
		int[] getPreFixSum() {
			int[] prefix = new int[differ.length-1];
			for (int i = 1; i < differ.length-1; i++) {
				prefix[i]=prefix[i-1]+differ[i];
			}
			return prefix;
		}
	}
	public static void main(String[] args) {
		int N = nextInt(),M=nextInt(),l,r,i,w;
		int arr[] = new int[N+1];
		for (i = 1; i < arr.length; i++) arr[i]=nextInt();
		DifferArray differArray = new DifferArray(arr);
		while (M--!=0) {
			l=nextInt();r=nextInt();w=nextInt();
			differArray.add(l, r, w);
		}
		int[] res = differArray.getPreFixSum();
		for (i = 1; i < res.length-1; i++) pw.print(res[i]+" ");
		pw.println(res[i]);
		pw.flush();
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

