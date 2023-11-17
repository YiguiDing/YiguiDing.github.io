package 左程云算法课初级班基础知识学习笔记._5_二分查找;

public class Problem_2 {
	public static void main(String[] args) {
		int test1[] = { 111, 9999, 5, 4, 3, 4 };
		System.out.println(FindMin(test1));// 111是局部最小值
		int test2[] = { 5, 4, 5, 4, 9999, 111 };
		System.out.println(FindMin(test2)); // 111是局部最小值
		int test3[] = { 444, 333, 11, 444, 33, 444 };
		System.out.println(FindMin(test3));// 11是局部最小值
	}

	static int FindMin(int arr[]) {
		// 根据局部最小值定义，直接判断数组开头和结尾是否为局部最下值
		if (arr[0] < arr[1])
			return arr[0];
		if (arr[arr.length - 2] > arr[arr.length - 1])
			return arr[arr.length - 1];

		int left = 1;// 从第二个数开始
		int right = arr.length - 2;// 从最后第二个数结束
		int middle = (left + right) / 2;
		while (left <= right) {
			if (arr[middle] < arr[middle - 1] && // 小于左边的数
					arr[middle] < arr[middle + 1] // 也小于右边的数
			) {
				return arr[middle];
			}
			if (arr[middle - 1] < arr[middle]) {// 左边的数比右边的数小，这意味着往左边走，数会更小
				right = middle - 1;
			} else if (arr[middle] > arr[middle + 1]) {// 右边的数比右边的数小，这意味着往右边走，数会更小
				left = middle + 1;
			}
			middle = (left + right) / 2;
		}
		return 0;
	}
}
