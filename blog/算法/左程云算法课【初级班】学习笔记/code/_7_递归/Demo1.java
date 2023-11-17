package 左程云算法课初级班基础知识学习笔记._7_递归;

public class Demo1 {

	static int getMax(int arr[], int left, int right) {
		if (left == right) {
			return arr[left];
		}
		int middle = left + (right - left) / 2;
		int max1 = getMax(arr, left, middle);// 注意：这里不能写middle-1 否则对于长度为2的子问题， middle就等于-1
		int max2 = getMax(arr, middle + 1, right);// 注意：只能在这里写middle+1
		return Math.max(max1, max2);
	}
}
