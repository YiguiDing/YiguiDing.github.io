package 蓝桥杯历年真题刷题笔记._2013_java_B_;

public class _03_振兴中华 {

	public static void main(String[] args) {
		long start = System.currentTimeMillis();
		doSomeThing();
		long end = System.currentTimeMillis();
		System.out.println("耗时:" + (end - start) + "毫秒");
	}

	/*
	 * 从我做起振
	 * 我做起振兴
	 * 做起振兴中
	 * 起振兴中华
	 */
	static void doSomeThing() {
		System.out.println(process(0,0));
	}
	
	// 记忆性递归
	static int f[][] = new int[4][5];
	static int process(int x, int y) {
		if (x == 3 || y == 4) {
			return f[x][y] = 1;
		} else if (f[x][y] != 0) {
			return f[x][y];
		} else {
			return f[x][y] = process(x + 1, y) + process(x, y + 1);
		}
	}
}