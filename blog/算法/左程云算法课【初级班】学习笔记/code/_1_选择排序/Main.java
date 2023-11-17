package 左程云算法课初级班基础知识学习笔记._1_选择排序;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int arr[] = {9,8,7,6,5,4,3,2,1};
		SelectSort(arr);
		System.out.println(Arrays.toString(arr));	
	}

	// 选择排序
	static void SelectSort(int arr[]) {
		if (arr == null || arr.length <= 1)
			return;
		for (int i = 0; i < arr.length; i++) {
			int minIndex = i;
			for (int j = i; j < arr.length; j++) {
				minIndex = arr[j] < arr[minIndex] ? j : minIndex;
			}
			exchange(arr, i, minIndex);
		}
	}

	// 交换元素
	static void exchange(int arr[], int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
