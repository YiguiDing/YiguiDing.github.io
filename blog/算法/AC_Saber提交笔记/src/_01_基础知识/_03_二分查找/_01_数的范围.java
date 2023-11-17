package _01_基础知识._03_二分查找;

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
1 2 2 3 3 4
3
4
5
输出
3 4
5 5
-1 -1
 * */
public class _01_数的范围 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		int N = nextInt(),Q=nextInt();
		int arr[] = new int[N],i;
		for (i = 0; i < arr.length; i++) {
			arr[i]=nextInt();
		}
		while (Q--!=0) {
			int x = nextInt();
			int res1 = binerySearch_FindMin(arr, x);
			int res2 = binerySearch_findMax(arr, x);
			pw.println(res1+" "+res2);
		}
		pw.flush();
	}
	static int binerySearch_findMax(int[]arr,int x) {
		int l=0,r=arr.length-1,mid;
		while (l<r) {
			mid=l+(r-l)/2+1;
			if(arr[mid]<=x) l=mid;
			else r=mid-1;
		}
		if(arr[l]!=x)return -1;
		else return l;
	}
	static int binerySearch_FindMin(int[] arr,int x) {
		int l=0,r=arr.length-1,mid;
		while (l<r) {
			mid=l+(r-l)/2;
			if(x<=arr[mid]) r=mid;
			else l=mid+1;
		}
		if(arr[l]!=x)return -1;
		else return l;
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
