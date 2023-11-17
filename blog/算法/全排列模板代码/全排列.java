package 全排列模板代码;

import java.util.Arrays;

public class 全排列 {
	public static void main(String[] args) {
		int[] test = { 0, 1, 2, 3 };
		f(test, 0);
	}

	// 全排列
	static void f(int[] array, int step) {
		if (step == array.length) {
			// 得到全排列的结果
			System.out.println(Arrays.toString(array));
			return;
		} else {
			for (int i = step; i < array.length; i++) {
				exchange(array, step, i);// 从后面的可选项中挑选一个放到当前位置
				f(array, step + 1);// 递归确认下一个位置的元素
				exchange(array, step, i);// 交换回来，恢复原样，回溯。
			}
		}
	}

	static void exchange(int[] arr, int i, int j) {
		if (i != j) {
			arr[i] = arr[i] ^ arr[j];
			arr[j] = arr[i] ^ arr[j];
			arr[i] = arr[i] ^ arr[j];
		}
	}

}
