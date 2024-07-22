package 蓝桥杯历年真题刷题笔记._2014_java_B_;

public class _04_大衍数列 {
	public static void main(String[] args) {
		for (int i = 1; i < 100; i++) {
			if (i % 2 == 0)
				System.out.println(i * i / 2);
			else
				System.out.println((i * i - 1) / 2);
		}
	}
}
