package _01_基础知识._02_归并排序;

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
9
1
0
5
4
3
1
2
3
0
输出
6
0
 * */
public class _03_超快速排序 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		int len ;
		while ((len= nextInt())!=0) {
			int arr[] = new int[len],i;
			for (i = 0; i < arr.length; i++) {
				arr[i]=nextInt();
			}
			mergeSort(arr);
			pw.println(cnt);
		}
		pw.flush();
	}
	static long cnt = 0;
	static int temp[];
	static void mergeSort(int[] arr) {
		temp=new int[arr.length];
		cnt=0;
		mergeSort(arr,0,arr.length-1);
	}
	static void mergeSort(int[] arr,int L,int R) {
		if(L>=R)return;
		int mid = L+(R-L)/2;
		mergeSort(arr,L,mid);mergeSort(arr,mid+1,R);
		int i=0,l=L,r=mid+1;
		while (l<=mid&&r<=R) {
			if(arr[l]<=arr[r]) {temp[i++]=arr[l++];}
			else {temp[i++]=arr[r++];cnt+=mid-l+1;}
		}
		while (l<=mid) temp[i++]=arr[l++];
		while (r<=R)  temp[i++]=arr[r++];
		for(i=0,l=L;l<=R;l++,i++) arr[l]=temp[i]; 
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
