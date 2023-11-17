package 左程云算法课初级班基础知识学习笔记._9_快速排序;

import java.util.Arrays;

public class Problem_2 {
	public static void main(String[] args) {
		int T[] = { 9, 5, 7, 6, 5, 4, 3, 5, 1 };
		test(T, 5);
		System.out.println(Arrays.toString(T));// [1, 3, 4, 5, 5, 5, 6, 7, 9]
	}

	// 荷兰国旗问题2
	public static void test(int arr[], int num) {
		int head = 0;
		int end = arr.length - 1;
		// 注意这个终止条件
		for (int idx =0;idx <= end;) {
			if (arr[idx] < num) {
				exchange(arr, idx, head++);
				idx++;
			} else if (arr[idx] > num) {
				exchange(arr, idx, end--);
				// 这里不必i++
			} else {
				idx++;
			}
		}
	}

	public static void exchange(int arr[], int i, int j) {
		System.out.println("交换" + i + "," + j);
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
