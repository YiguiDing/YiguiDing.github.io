public class _02_递归求解数组元素和 {
	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4, 5 };
		System.out.println(f1(arr, 0));
		System.out.println(f2(arr, arr.length - 1));
		System.out.println(f3(arr, 0, arr.length - 1));
	}

	// 方法1：从i~end
	static int f1(int[] array, int idx) {
		if (idx == array.length) {
			return 0;
		}
		return array[idx] + f1(array, idx + 1);
	}

	// 方法2：从i~0
	static int f2(int[] array, int idx) {
		if (idx == -1) {
			return 0;
		}
		return array[idx] + f2(array, idx - 1);
	}

	// 方法3：二分法
	static int f3(int[] array, int left, int right) {
		if (left == right) {
			return array[left];
		} else {
			int mid = left + (right - left) / 2;
			return f3(array, left, mid) + f3(array, mid + 1, right);
		}

	}
}
