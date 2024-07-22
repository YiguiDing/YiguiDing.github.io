package 蓝桥杯历年真题刷题笔记._2014_java_B_;

import java.math.BigInteger;
import java.util.Scanner;

public class _10_矩阵翻硬币 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger M = new BigInteger(sc.next());
		BigInteger N = new BigInteger(sc.next());
		sc.close();
		System.out.println(M.sqrt().multiply(N.sqrt()));
	}
}
