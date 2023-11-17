package 左程云算法课初级班基础知识学习笔记._4_插入排序;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] Test = { 9, 8, 7, 6, 5, 4, 3, 2, 1 };
		insertSort(Test);
		System.out.println(Arrays.toString(Test));
	}

	static void insertSort(int arr[]) {
		for (int i = 0; i < arr.length; i++) {// 遍历n次
			for (int j = i; // j从i开始
					0 <= j - 1 && arr[j - 1] > arr[j]; // 同时判断是否到头和是否满足交换条件
					j--// 前移
					) {
				exchange(arr, j - 1, j);// 交换
			}
		}
	}

	static void exchange(int arr[], int i, int j) {
		int temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
}
