package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.util.Scanner;

public class _10_连号区间数 {
	static int count = 0;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[] arr = new int[N + 1];
		for (int i = 1; i <= N; i++) {
			arr[i] = sc.nextInt();
		}
		sc.close();
		for (int L = 1; L <= N; L++) {
			int min = arr[L];
			int max = arr[L];
			for (int R = L; R <= N; R++) {
				if(arr[R]<min) min=arr[R];// 记录该区间最小值
				if(arr[R]>max) max=arr[R];// 记录该区间最大值

				if(R==L) count++;// 单独一个数构成连续区间
				else if(R-L+1==max-min+1) count++;
				// 因为arr是1~N的某个排列，所以不会有重复的数，即：不会出现这样的排序[3,4,4,6]
				// 所以对于像 [3,4,5,6]这样的连续的数,有特征：6-3+1=4 即max-min+1 == length
				print(arr, L, R);
			}
		}
		System.out.println(count);
	}

	private static void print(int[] arr, int l, int r) {
		StringBuilder sb = new StringBuilder();
		sb.append('[');
		for (int i = l; i <= r; i++) {
			sb.append(arr[i]);
			sb.append(',');
		}
		sb.deleteCharAt(sb.length() - 1);
		sb.append(']');
		System.out.println(sb.toString());
	}

}
