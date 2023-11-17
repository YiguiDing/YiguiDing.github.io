package 左程云算法课初级班基础知识学习笔记._5_二分查找;

public class Main {
	public static void main(String[] args) {
		int test[] = { 1, 2, 3, 4, 5, 6, 7 };
		System.out.println(binarySearch(test, 1)); // 0
		System.out.println(binarySearch(test, 2)); // 1
		System.out.println(binarySearch(test, 3)); // 2
		System.out.println(binarySearch(test, 4)); // 3
		System.out.println(binarySearch(test, 5)); // 4
		System.out.println(binarySearch(test, 6)); // 5
		System.out.println(binarySearch(test, 7)); // 6
	}

	static int binarySearch(int arr[], int num) {
		int left = 0;
		int right = arr.length - 1;
		// 注意middle的计算公式，bug写法：middle=(right - left) / 2
		int middle = left + (right - left) / 2;
		// 注意一定是小于等于,bug写法：while (left < right)
		while (left <= right) {
			if (arr[middle] == num) {
				return middle;// 找到直接返回下标
			}
			// num在左侧区域
			if (num < arr[middle]) {
				right = middle - 1;// 收紧右边界
			}
			// num在右侧区域
			else if (arr[middle] < num) {
				left = middle + 1;// 收紧左边界
			}
			// 重新计算middle
			middle = left + (right - left) / 2;
		}
		return -1;
	}
}
