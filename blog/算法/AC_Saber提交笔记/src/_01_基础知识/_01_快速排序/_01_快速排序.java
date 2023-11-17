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
5
3 1 2 4 5
输出
1 2 3 4 5
 * */

public class _01_快速排序 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static  BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static int nextInt() throws IOException {
		st.nextToken();
		return (int)st.nval;
	}
	static String nexString() throws IOException {
		st.nextToken();
		return st.sval;
	}
    public static void main(String[] args)throws IOException {
		int N = nextInt();
		int[] arr = new int[N];
		for(int i=0;i<N;i++) arr[i]=nextInt();
        // 算法1和算法2，实际测试，两者都是正确的，耗时，前者约是后者的1.5倍
		// quick_sort1(arr); // 左成云算法课上讲解的算法
		quick_sort2(arr);// acWing算法基础课上讲解的算法
		for(int i=0;i<N;i++) pw.printf("%d ", arr[i]);
		pw.flush();
	}
    static void quick_sort1(int[] arr) {
        quick_sort1(arr, 0, arr.length - 1);
    }
	static void quick_sort2(int[] arr) {
        quick_sort2(arr, 0, arr.length - 1);
    }

    private static void quick_sort1(int[] arr, int left, int right) {
        if(left>=right) return;
        int x=arr[left],idx=left,L=left-1,R=right+1;
        while (idx<R) 
            if(arr[idx]<x) swap(arr,idx++,++L);
            else if(arr[idx]>x) swap(arr,idx,--R);
            else idx++;
        quick_sort1(arr,left,L);
        quick_sort1(arr,R,right);
    }
	static void quick_sort2(int q[], int l, int r) {
        if (l >= r) return;
        int x = q[l],L = l - 1, R = r + 1;
        while (L < R) {
            do L++; while (q[L] < x);
            do R--; while (q[R] > x);
            if (L < R) swap(q, L, R);
        }
        quick_sort2(q, l, R);quick_sort2(q, R + 1, r);
    }
    static void swap(int[] arr, int i, int j) {
        if (i != j) {
            arr[i] = arr[i] ^ arr[j];
            arr[j] = arr[i] ^ arr[j];
            arr[i] = arr[i] ^ arr[j];
        }
    }
}