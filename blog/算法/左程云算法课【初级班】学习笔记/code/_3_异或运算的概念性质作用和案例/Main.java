package 左程云算法课初级班基础知识学习笔记._3_异或运算的概念性质作用和案例;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int arr[] = {999,888};
		exchange(arr, 0, 1);
		System.out.println(Arrays.toString(arr));// [888, 999]
	}
	static void exchange(int arr[], int i, int j) {
		arr[i] = arr[i]^arr[j];
		arr[j] = arr[i]^arr[j];
		arr[i] = arr[i]^arr[j];
	}
}
