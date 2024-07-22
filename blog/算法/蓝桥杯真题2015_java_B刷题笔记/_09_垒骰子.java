package 蓝桥杯历年真题刷题笔记._2015_java_B_;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class _09_垒骰子 {
	static Long N = (long) 0;
	static Long M = (long) 0;
	static long[][] confilict = new long[7][7];
	static int[] opposite = new int[7];
	static {
		opposite[0] = 0; // 可以认为0的反面是0
		opposite[1] = 4; // 1的反面是4
		opposite[2] = 5;
		opposite[3] = 6;
		opposite[4] = 1; // 4的反面是1
		opposite[5] = 2;
		opposite[6] = 3;

		for (int i = 1; i < 7; i++) {
			for (int j = 1; j < 7; j++) {
				confilict[i][j] = 1;
			}
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextLong();
		M = sc.nextLong();
		// 构建冲突矩阵
		for (int i = 1; i <= M; i++) {
			int j = sc.nextInt();
			int k = sc.nextInt();
			confilict[opposite[j]][k] = 0;
			confilict[opposite[k]][j] = 0;
		}
		long[][] res = mPow(confilict, N - 1);
		long k = 0;
		for (int i = 1; i < 7; i++) {
			for (int j = 1; j < 7; j++) {
				k += res[i][j];
			}
		}
		System.out.println(k);
		System.out.println(k * pow(4, N));
	}

	static long[][] multiple(long a[][], long b[][]) {
		long[][] res = new long[7][7];
		for (int i = 1; i < 7; i++) {
			for (int j = 1; j < 7; j++) {
				long add = 0;
				for (int k = 1; k < 7; k++) {
					add += a[i][k] * b[k][j];
				}
				res[i][j] = add;
			}
		}
		return res;
	}

	static long[][] mPow(long a[][], long n) {
		long[][] res = new long[7][7];
		for (int i = 1; i < 7; i++) {
			res[i][i] = 1;// 单位矩阵，对角线元素为1
		}
		while (n != 0) {
			if ((n & 1) == 1)
				res = multiple(res, a);
			a = multiple(a, a);
			n >>= 1;
		}
		return res;
	}

	static long pow(long num, long e) {
		long res = 1;
		while (e != 0) {
			if ((e & 1) == 1)
				res = res * num;
			num = num * num;
			e >>= 1;
		}
		return res;
	}
}