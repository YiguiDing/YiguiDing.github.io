package 左程云算法课初级班基础知识学习笔记._8_归并排序;

public class Problem_1 {
	public static void main(String[] args) {
		int test[] = { 1, 3, 4, 2, 5 };
		System.out.println(getMinSum(test, 0, test.length - 1)); // 输出： 16
	}

	// 求小和
	public static int getMinSum(int arr[], int left, int right) {
		if (left == right) {
			return 0;
		}
		int middle = left + (right - left) / 2;
		return getMinSum(arr, left, middle) //
				+ getMinSum(arr, middle + 1, right) // 仍然需要注意，应当是middle+1
				+ merge(arr, left, middle, right);
	}

	// 合并并计算小和
	public static int merge(int arr[], int left, int middle, int right) {
		int res = 0;
		int help[] = new int[right - left + 1];
		int help_i = 0;
		int p1 = left, p1_max = middle, p2 = middle + 1, p2_max = right;
		while (p1 <= p1_max && p2 <= p2_max) {
			// ------------
			res += arr[p1] < arr[p2] ? (p2_max - p2 + 1) * arr[p1] : 0;
			// 相等的时候一定要先拷贝右边数组的数，否则就会错过一位数
			help[help_i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
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
		return res;
	}

}
