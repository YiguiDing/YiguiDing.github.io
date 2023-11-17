package 千峰蓝桥杯第14届个人赛公开课学习笔记;

public class Temp {
	public static void main(String[] args) {
		long before = System.currentTimeMillis();
		System.out.println(
				process(1000)
		// 89
		// 耗时：1ms
		);

		long now = System.currentTimeMillis();
		System.out.println("耗时：" + (now - before) + "ms");
	}

	static long process(int distance) {
		int[] f = new int[11];
		f[1] = 1;
		f[2] = 2;
		for (int i = 3; i <= 10; i++) {
			f[i] = f[i - 1] + f[i - 2];
		}
		return f[10];
	}
}
