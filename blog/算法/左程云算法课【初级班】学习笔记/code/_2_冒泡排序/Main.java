package 左程云算法课初级班基础知识学习笔记._2_冒泡排序;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int arr[] = {9,8,7,6,5,4,3,2,1};
		bubbleSort(arr);
		System.out.println(Arrays.toString(arr));	
	}

	// 冒泡排序
	static void bubbleSort(int arr[]) {
		if (arr == null || arr.length <= 1) {
			return;
		}
		// 循环n次
		for (int top = 0; top < arr.length; top++) {
			for (int i = arr.length - 1; i  > top; i--) {
				if (arr[i - 1] > arr[i])// 比较两个数，如果第一数比第二个数大，交换
					exchange(arr, i - 1, i);
			}
		}
		return;
	}

	// 交换元素
	static void exchange(int arr[], int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
