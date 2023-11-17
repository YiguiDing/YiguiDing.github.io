package _02_基础算法._02_排序算法._06_P1908_逆序对;

import java.io.BufferedInputStream;
//import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(new BufferedInputStream(System.in));
		int N = sc.nextInt();
		int[] nums = new int[N];

		for (int i = 0; i < nums.length; i++) {
			nums[i] = sc.nextInt();
		}
		mergeSort(nums);
		// System.out.println(Arrays.toString(nums));
		System.out.println(ans);

	}

	static long ans = 0;

	static void mergeSort(int[] arr) {
		process(arr, 0, arr.length - 1);
	}

	static void process(int[] arr, int left, int right) {
		if (left < right) {
			int mid = left + (right - left) / 2;
			process(arr, left, mid);
			process(arr, mid + 1, right);
			merge(arr, left, mid, mid + 1, right);
		}
	}

	static void merge(int[] arr, int L1_start, int L1_end, int L2_start, int L2_end) {
		int[] help = new int[L2_end - L1_start + 1];
		int N = 0, l1 = L1_start, l2 = L2_start;
		while (l1 <= L1_end && l2 <= L2_end) {
			if (arr[l1] > arr[l2]) {
				// System.out.println(arr[l1]+" "+arr[l2]);
				ans += L1_end - l1 + 1;
			}
			help[N++] = arr[l1] > arr[l2] ? arr[l2++] : arr[l1++];
		}
		while (l1 <= L1_end) {
			help[N++] = arr[l1++];
		}
		while (l2 <= L2_end) {
			help[N++] = arr[l2++];
		}
		N = 0;
		while (N < help.length) {
			arr[L1_start + N] = help[N];
			N++;
		}
	}
}
