package 蓝桥杯历年真题刷题笔记._2014_java_B_;

public class _05_圆周率 {
	public static void main(String[] args) {
		double x = 111;
		for (int n = 10000; n >= 0; n--) {
			int i = 2 * n + 1;// 保证i是奇数,最后i=1 !!!!!!!!!!!!!!!
			x = 2 + (i * i / x);// 要注意x是图中的哪一部分
		}
		System.out.println(String.format("%.4f",4/(x-1)));
	}
}
