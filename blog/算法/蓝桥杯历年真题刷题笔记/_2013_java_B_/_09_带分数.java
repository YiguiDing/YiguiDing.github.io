package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.util.Arrays;
import java.util.Scanner;

public class _09_带分数 {
	private static int N = 0;
	static int counter = 0;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		sc.close();

		long l1 = System.currentTimeMillis();
		f(nums, 0);
		long l2 = System.currentTimeMillis();

		System.out.printf("共%d种.\n", counter);
		System.out.printf("耗时:%dms\n", l2 - l1);
	}

	static int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

	// 全排列
	static void f(int[] array, int step) {
		if (step == array.length) {
			// 得到全排列的结果
			// System.out.println(Arrays.toString(array));
			check(array);
			return;
		} else {
			for (int i = step; i < array.length; i++) {
				exchange(array, step, i);// 从后面的可选项中挑选一个放到当前位置
				f(array, step + 1);// 递归确认下一个位置的元素
				exchange(array, step, i);// 交换回来，恢复原样，回溯。
			}
		}
	}

	static void check(int[] arr) {

		// 每个数的长度都在[1,len-2]范围上，
		// 因为格式是 num1+num2/num3 每个数都至少占一位，也要至少给另外两个数预留一位
		for (int n1_len = 1; n1_len <= arr.length - 2; n1_len++) {
			/*
			 * 此处可以优化,但为了代码好理解，这里保持原样
			 * int n1 = parseInt(arr, 0, n1_len); if(n1>N) continue;
			 */
			for (int n2_len = 1; n2_len <= arr.length - 2; n2_len++) {
				// n2_len的结束条件可以优化成 n2_len <= arr.length - n1_len - 1 即至少给n3预留一个位置
				for (int n3_len = 1; n3_len <= arr.length - 2; n3_len++) {
					// 其实n3的长度可以直接计算出来： n3_len = arr.length - n1_len - n2_len
					if (n1_len + n2_len + n3_len == arr.length) {// 长度合理
						// 提取出这些数
						int n1 = parseInt(arr, 0, n1_len);
						int n2 = parseInt(arr, 0 + n1_len, n2_len);
						int n3 = parseInt(arr, 0 + +n1_len + n2_len, n3_len);
						// System.out.println(Arrays.toString(arr));
						// System.out.println(n1);
						// System.out.println(n2);
						// System.out.println(n3);
						if (n2 % n3 == 0 && n1 + n2 / n3 == N) {
							System.out.printf("%d+%d/%d==%d\n", n1, n2, n3, N);
							counter++;
						}
					}
				}
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

	static int parseInt(int[] arr, int start, int len) {
		int res = 0;
		for (int i = start; i < start + len; i++) {
			res *= 10;
			res += arr[i];
		}
		return res;
	}

	// check的另一种实现
	static int i = 0;
	// 从arr中选数，连续选出，至少选出1位数构成一个数，所有数都要被选出，一共构成K个数,放到nums[]中
	static void select(int[] arr, int rest_len, int current, int K, int[] nums) {
		// 最后一个数是剩余的全部数构成的数
		if (K == 1) {
			nums[i] = parseInt(arr, current, rest_len);
			System.out.println(Arrays.toString(nums));
			return;
		} else {
			for (int len = 1; len <= rest_len - (K - 1); len++) {
				nums[i] = parseInt(arr, current, len);
				i++;
				select(arr, rest_len - len, current + len, K - 1, nums);
				i--;// 回溯
			}
		}
	}
	/*
	 * nums=[1,2,3,4,5,6,7,8,9]
	 * select(nums, nums.length, 0, 3, new int[3]);
	 * 输出结果：
	 * [1, 2, 3456789]
	 * [1, 23, 456789]
	 * [1, 234, 56789]
	 * [1, 2345, 6789]
	 * [1, 23456, 789]
	 * [1, 234567, 89]
	 * [1, 2345678, 9]
	 * [12, 3, 456789]
	 * [12, 34, 56789]
	 * [12, 345, 6789]
	 * [12, 3456, 789]
	 * [12, 34567, 89]
	 * [12, 345678, 9]
	 * [123, 4, 56789]
	 * [123, 45, 6789]
	 * [123, 456, 789]
	 * [123, 4567, 89]
	 * [123, 45678, 9]
	 * [1234, 5, 6789]
	 * [1234, 56, 789]
	 * [1234, 567, 89]
	 * [1234, 5678, 9]
	 * [12345, 6, 789]
	 * [12345, 67, 89]
	 * [12345, 678, 9]
	 * [123456, 7, 89]
	 * [123456, 78, 9]
	 * [1234567, 8, 9]
	 */

}
