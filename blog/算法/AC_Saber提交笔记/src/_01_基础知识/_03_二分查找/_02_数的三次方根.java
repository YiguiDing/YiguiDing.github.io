package _01_基础知识._03_二分查找;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

/*
提交状态: AC
输入
-1000.00
输出
-10.000000
 * */
public class _02_数的三次方根 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	public static void main(String[] args) {
		pw.printf("%.6f\n", binerySearch_find3Root(nextDouble()));
		pw.flush();
	}

	static double binerySearch_find3Root(double x) {
//		一开始写的是l=-x,但是当x是负数时，l就成正数了，但l是左边界，l应该=-math.abs(x),保证其始终为负
		double l = -Math.abs(x), r = Math.abs(x);// x>1时的x立方根的上域在[-x,x]内，开方越来越大
		if (Math.abs(x) < 1) {l = -1;r = 1;} // 小数的立方根会更大，但不会超过1，因为只有小数才会开方越来越大，立方越来越小
		while (r - l > 1e-8) {
			double mid = l + (r - l) / 2;
			if (mid * mid * mid <= x) l = mid;
			else r = mid;
		}
		return r;
	}

	static double nextDouble() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return st.nval;
	}

	static int nextInt() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) st.nval;
	}

	static String nextStr() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return st.sval;
	}

}
