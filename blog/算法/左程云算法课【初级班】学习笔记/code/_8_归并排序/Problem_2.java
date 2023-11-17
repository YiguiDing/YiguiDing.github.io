package 左程云算法课初级班基础知识学习笔记._8_归并排序;

public class Problem_2 {
	public static void main(String[] args) {
		int test[] = { 3, 2, 4, 5, 0 };
		mergeSort(test, 0, test.length - 1);
	}

	public static void mergeSort(int arr[], int left, int right) {
		if (left == right) {
			return;
		}
		int middle = left + (right - left) / 2;
		mergeSort(arr, left, middle);
		mergeSort(arr, middle + 1, right);// 仍然需要注意，应当是middle+1
		merge(arr, left, middle, right);
	}

	// 合并为一个
	public static void merge(int arr[], int left, int middle, int right) {
		int help[] = new int[right - left + 1];
		int help_i = 0;
		int p1 = left, p1_max = middle, p2 = middle + 1, p2_max = right;
		while (p1 <= p1_max && p2 <= p2_max) {
			if (arr[p1] > arr[p2]) {
				// 如果倒序，输出这两个数
				System.out.println("[" + arr[p1] + "," + arr[p2] + "]");
			}
			// 倒序排序
			// 两数相等时，剔除右边数组的数
			help[help_i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++];
		}
		while (p1 <= p1_max) {
			help[help_i++] = arr[p1++];
		}
		while (p2 <= p2_max) {
			help[help_i++] = arr[p2++];
		}
		// copy
		for (int i = 0; i < help.length; i++) {
			arr[left + i] = help[i];
		}
	}

}
