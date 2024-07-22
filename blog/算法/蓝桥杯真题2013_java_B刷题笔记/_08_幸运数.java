package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.util.Arrays;
import java.util.Scanner;

public class _08_幸运数 {
	static void doSomeThing() {
		Scanner sc = new Scanner(System.in);
		int m = 1;// sc.nextInt();
		int n = 20;// sc.nextInt();
		sc.close();
		int[] arr = new int[n + 1];

		for (int i = 1; i < arr.length; i++) {
			// 在1~n的位置生成1~n的自然数
			arr[i] = i;// 因为幸运数中的下标概念是从1开始算的，所以从1开始
		}

		System.out.println("生成自然数: " + Arrays.toString(arr));

		for (int idx = 2; // 从2开始
				idx < arr.length && arr[idx] != -1; // 提前结束
				idx++) {
			// 根据数组中第i位的数来删除
			deleteByN(arr, idx, arr[idx]);
		}

		System.out.println("生成幸运数: " + Arrays.toString(arr));

		// 输出这些数
		StringBuilder sb = new StringBuilder();
		for (int idx = 1; // 从1开始
				idx < arr.length && arr[idx] != -1; // 提前结束
				idx++) {
			// 找出m和n之间的数
			if (m < arr[idx] && arr[idx] < n) {
				sb.append(arr[idx]);
				sb.append(',');
			}
		}
		sb.deleteCharAt(sb.length() - 1);// 删除最后一个多余的逗号
		System.out.println("m:" + m + ",n:" + n);
		System.out.println("m n之间的幸运数是: " + sb.toString());

		// 输出这些数有多少个
		Integer startIndex = null;
		Integer endIndex = 1;
		for (int idx = 1; // 从1开始
				idx < arr.length && arr[idx] != -1; // 提前结束
				idx++) {

			if (startIndex == null && m < arr[idx]) {
				startIndex = idx;
			}
			if (arr[idx] < n) {
				endIndex = idx;
			} else {
				break;
			}
		}
		System.out.println("这些数的个数: " + (endIndex - startIndex));

	}

	// 删除位置下标是n倍数的数
	static void deleteByN(int[] arr, int startFrom, int n) {
		int next = startFrom;
		for (int idx = startFrom; // 从startFrom开始
				idx < arr.length && arr[idx] != -1; // 当等于-1时，后续的数都不再判断
				idx++) {
			if (idx % n == 0) {
				arr[idx] = -1; // 标记为-1 表示删除
			}
			if (arr[idx] != -1) {
				exchange(arr, next++, idx); // 将非-1的数往前挪动
			}
		}
	}

	static void exchange(int[] arr, int idxA, int idxB) {
		if (idxA != idxB) {
			arr[idxA] = arr[idxA] ^ arr[idxB];
			arr[idxB] = arr[idxA] ^ arr[idxB];
			arr[idxA] = arr[idxA] ^ arr[idxB];
		}
	}

	public static void main(String[] args) {
		long start = System.currentTimeMillis();
		doSomeThing();
		long end = System.currentTimeMillis();
		System.out.println("耗时:" + (end - start) + "毫秒");
	}
}