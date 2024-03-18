public class _23_不定方程的优化解法1 {
	public static void main(String[] args) {
		test1();
	}

	// 解法2：对于x、y特别大的数才需要用这种方法。
	// 4x-5y=7 (x、y都是正整数)
	// 一次方程可以表示为:
	// ax + by = c
	// ax = c - by
	// 因为 y是整数，方程左右两边都是整数
	// 又因为a、x是整数,
	// 所以 (c-by)%a==0 x=(c-by)/a,
	// 这样就把双层循环优化成了单层循环，
	static void test1() {
		for (int y = 0; y < 100; y++) {
			// 4x - 5y = 7
			// 4x = 7 + 5y
			// (7+5y)%4==0
			if ((7 + 5 * y) % 4 == 0) {
				int x = (7 + 5 * y) / 4;
				if (x < 100) {// 再对x的范围约束
					System.out.printf("%d,%d%n", x, y);
				}
			}
		}
	}
}
