package _01_基础知识._07_双指针算法;
/*
提交状态: AC
输入
4 5 6
1 2 4 7
3 4 6 8 9
输出
1 1
 * */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _02_数组元素的目标和 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		int n1 =nextInt(),n2=nextInt(),target=nextInt();
		int[] arr1=new int[n1];
		int[] arr2=new int[n2];
		for(int i=0;i<n1;i++) arr1[i]=nextInt();
		for(int i=0;i<n2;i++) arr2[i]=nextInt();
		int i=0,j=n2-1;
		while(arr1[i]+arr2[j]!=target) {
			while(arr1[i]+arr2[j]>target && j>=1) j--;
			while(arr1[i]+arr2[j]<target && i<=arr1.length-2) i++;
		}
		pw.print(i+" "+j);
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
