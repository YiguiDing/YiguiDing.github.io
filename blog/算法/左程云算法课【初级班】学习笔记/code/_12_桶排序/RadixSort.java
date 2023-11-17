package 左程云算法课初级班基础知识学习笔记._12_桶排序;

import java.util.Arrays;

public class RadixSort {
	public static void main(String[] args) {
		int[] test = { 9, 8, -7, 5, -4, 6, 3, -8, 4, 6, 2, 1, -6, -4 };
		radixSort(test, 10);
		System.out.println(Arrays.toString(test));// [-8, -7, -6, -4, -4, 1, 2, 3, 4, 5, 6, 6, 8, 9]
	}

	static void radixSort(int arr[], int radix) {
		int maxLen = findMaxBitLen(arr, radix);
		int help[] = new int[arr.length];
		for (int i = 1; i <= maxLen; i++) {
			// 统计
			int counter[] = new int[2 * radix - 1];// 假设radix为10进制，则要统计 [-9,-1] and [0] and [+1,+9] 也就是2*radix-1
			for (int j = 0; j < arr.length; j++) {
				// 如果遍历到 -??4
				// 则counter["-4"]++
				// 表示又统计到个位为-4的数一次
				// 因为getDigit()的返回值范围为[-9,0,+9],所以将其加9，则范围就成了[0,18]
				counter[radix - 1 + getDigit(arr[j], i, radix)]++;
			}
			// 计算前缀和，这就表示之前一共有多少位
			for (int j = 1; j < counter.length; j++) {
				counter[j] = counter[j - 1] + counter[j];
			}
			// 如果遍历到 ??5 且counter["5"]=8 则表示 7号位置就是??5应当存在的位置
			for (int j = arr.length - 1; j >= 0; j--) {
				help[--counter[radix - 1 + getDigit(arr[j], i, radix)]] = arr[j];
			}
			// 复制到arr
			for (int j = 0; j < arr.length; j++) {
				arr[j] = help[j];
			}
		}
	}

	// 找到数组中位数最长的数的位数，如189 就是3位数
	static int findMaxBitLen(int arr[], int radix) {
		int max = 0;
		for (int i = 0; i < arr.length; i++) {
			max = Math.max(Math.abs(max), Math.abs(arr[i]));
		}
		int len = 0;
		while (max > 0) {
			len++;
			max /= radix;
		}
		return len;
	}

	// 获取一个数的第i位 如1458 的第1位为8 第2位为5
	static int getDigit(int num, int i, int radix) {
		while (i > 1 && num != 0) {
			num /= radix;
			i--;
		}
		return num % radix;
	}
}