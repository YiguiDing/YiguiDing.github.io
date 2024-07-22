package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.util.Arrays;

public class _06_三部排序 {
	static void sort(int[] x) {
		int p = 0;
		int left = 0;
		int right = x.length - 1;
		while (p <= right) {
			if (x[p] < 0) {
				int t = x[left];
				x[left] = x[p];// x[left]是小于0的数区间的下一个数
				x[p] = t;// x[p]是小于0的数
				left++;
				p++;// p要向后挪，
			} else if (x[p] > 0) {
				int t = x[right];//x[right]是大于0的数的区间的前一个数
				x[right] = x[p];
				x[p] = t;
				right--;
				// p不要向后挪动，因为要判断交换后的这个数应该怎么放
			} else {
				p++;// 此处就是x[p]==0的情况，直接跳过即可
			}
		}
	}
	public static void main(String[] args) {
		int arr[] = new int[]{-1,0,3,-4,0,6,7,-8,0,10};
		sort(arr);
		System.out.println(Arrays.toString(arr));
		// [-1, -4, -8, 0, 0, 0, 7, 6, 10, 3]
	}
}
