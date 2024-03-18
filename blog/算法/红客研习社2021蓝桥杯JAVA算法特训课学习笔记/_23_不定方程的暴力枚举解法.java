public class _23_不定方程的暴力枚举解法 {
	public static void main(String[] args) {
		test0();
	}
	// 4x-5y=7 (x、y都是正整数)

	// 解法1
	// 对于xy都不大的数，暴力枚举
	static void test0() {
		for (int x = 0; x < 100; x++) {
			for (int y = 0; y < 100; y++) {
				if ((4 * x - 5 * y) == 7) {
					// System.out.printf("4*%d-5*%d==7\n", x, y);
					System.out.printf("%d,%d%n", x, y);
				}
			}
		}
	}
}
