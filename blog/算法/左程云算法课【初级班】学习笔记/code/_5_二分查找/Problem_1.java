package 左程云算法课初级班基础知识学习笔记._5_二分查找;

public class Problem_1 {
	public static void main(String[] args) {
		int arr[] = { 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6 };
		System.out.println(findFirst(arr, 0));
		System.out.println(findFirst(arr, 1));
		System.out.println(findFirst(arr, 2));
		System.out.println(findFirst(arr, 3));
		System.out.println(findFirst(arr, 4));
		System.out.println(findFirst(arr, 5));
		System.out.println(findFirst(arr, 6));
	}

	static int findFirst(int arr[], int num) {
		int front = 0;
		int end = arr.length - 1;
		int mid = front + (end - front) / 2;
		int pos = end;
		while (front <= end) {
			if (num <= arr[mid]) {// 注意这个符号是<=
				pos = mid < pos ? mid : pos;// 记录最小坐标
			}
			if (num <= arr[mid]) {//注意 num <= arr[mid]时，要向左边搜索
				end = mid - 1;
			} else if (num > arr[mid]) {
				front = mid + 1;
			}
			mid = front + (end - front) / 2;
		}
		return pos;
	}
}
