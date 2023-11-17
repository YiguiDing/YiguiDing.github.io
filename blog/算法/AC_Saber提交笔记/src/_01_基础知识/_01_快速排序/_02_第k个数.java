package _01_基础知识._01_快速排序;

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
2 4 1 5 3
输出
3
 * */
public class _02_第k个数 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static double nextVal() {
		try {
			st.nextToken();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return st.nval;
	}
	static String nextStr() {
		try {
			st.nextToken();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return st.sval;
	}
    public static void main(String[] args) {
    	int n = (int)nextVal();
    	int k = (int)nextVal();
    	int[] arr = new int[n];
    	for(int i =0;i<n;i++) arr[i]=(int)nextVal();
    	pw.println(quickSort(arr, 0, n-1, k-1));
    	pw.flush();
    }
    static int quickSort(int[]arr,int l,int r,int k) {
    	if(l>=r) return arr[l];
    	int x=arr[(l+r)>>1],L=l-1,R=r+1;
    	while(L<R) {
    		do L++ ;while(arr[L]<x);
    		do R-- ;while(arr[R]>x);
    		if(L<R) {int t=arr[L];arr[L]=arr[R];arr[R]=t;}
    	}
    	if(k<=R) return quickSort(arr, l, R, k);//类似于二分查找，只对k所在的的区间排序
    	else return quickSort(arr, R+1, r, k);
    }
}
