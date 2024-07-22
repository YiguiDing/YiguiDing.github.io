package 蓝桥杯历年真题刷题笔记._2014_java_B_;

import java.util.Arrays;
import java.util.Scanner;

public class _08_分糖果 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int arr[] = new int[N];
		int half[] = new int[N];
		int ans = 0;
		for (int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
		}
		sc.close();

		while (!isSame(arr)) {
			for (int i = 0; i < arr.length; i++) {
				half[i] = arr[i] / 2;// 拿出一半
				arr[i] -= half[i];// 减少
			}
			for (int i = 0; i < arr.length; i++) {
				arr[i] += half[(i + 1) % arr.length];// 当前的获取隔壁的一半
			}
			for (int i = 0; i < arr.length; i++) {
				if (arr[i] % 2 == 1) {
					arr[i]++;// 糖果是奇数，补一颗
					ans++;// 计数
				}
			}
			System.out.println(Arrays.toString(arr));
		}
		System.out.println(ans);
	}

	// 数组中所有数都一样
	static boolean isSame(int[] arr) {
		int k = arr[0];
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] != k)
				return false;
		}
		return true;
	}
}
