package 左程云算法课初级班基础知识学习笔记._9_快速排序;

import java.util.Arrays;

public class QuickSort {
	public static void main(String[] args) {
		int test[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1 };
		quickSort(test, 0, test.length - 1);
		System.out.println(Arrays.toString(test));
	}

	public static void quickSort(int arr[], int left, int right) {
		if (left >= right)
		// 这个判断条件也是关键，因为mid[0] mid[1] 取值范围的原因
		return;
		int mid[] = partition(arr, left, right);
		System.out.println(Arrays.toString(arr));
		quickSort(arr, left, mid[0] - 1);
		quickSort(arr, mid[1] + 1, right);
	}

	// 对于数组 [5,4,3,2,1,0]
	// 该函数会随机选一个数作为num
	// 该函数会将其变为 [小于num的数，等于num的数，大于num的数]
	// 返回值为 等于num的数的区域 的开始和结束坐标
	public static int[] partition(int arr[], int left, int right) {
		// 随机最后一个数作为比较对象
		int num = arr[randomRange(left, right)];
		int p1 = left - 1;
		int p2 = right + 1;
		int i = left;
		while (i < p2) {
			if (arr[i] == num) {
				i++;
			} else if (arr[i] < num) {
				swap(arr, i++, ++p1);
			} else if (arr[i] > num) {
				swap(arr, i, --p2);
			}
		}
		// 返回 中间区域的范围
		return new int[] { p1 + 1, p2 - 1 };
	}

	public static void swap(int arr[], int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	public static int randomRange(int from, int to) {
		return (int) (from + Math.random() * (to - from));
	}
}
