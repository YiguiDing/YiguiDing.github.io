public class _23_不定方程的优化解法2 {
	public static void main(String[] args) {
		test2();
	}

	// 解法3：先求出一个特解，在用一次方程的通解公式直接计算出x和y
	// 4x-5y=7 (x、y都是正整数)
	// 一次方程可以表示为:
	// ax + by = c a=4，b=-5 , c=7
	// ax = c - by
	// 因为 y是整数，方程左右两边都是整数
	// 又因为a、x是整数,
	// 所以 (c-by)%a==0 x=(c-by)/a,
	// 这样就能找到一组特解｛x=x_0,y=y_0｝。

	// 然后使用一次方程的通解公式
	// x= x_0 + bt (t=0,±1,±2,±3,±4,±5)
	// y= y_0 - at (t=0,±1,±2,±3,±4,±5)
	static void test2() {
		// ax + by = c a=4，b=-5 , c=7
		int a = 4;
		int b = -5;
		int c = 7;
		int x0 = 0, y0 = 0;
		// 求一个特解
		for (int y = 0; y < 100; y++) {
			if ((c - (b) * y) % a == 0) {
				int x = (c - (b) * y) / a;
				System.out.printf("特解：%d,%d%n", x, y);
				x0 = x;// 求特解
				y0 = y;// 求特解
				break;
			}
		}
		// 求所有通解
		// t++
		for (int t = 0; t < 100; t++) {
			int x = x0 + b * t;
			int y = y0 - a * t;
			System.out.printf("%d,%d%n", x, y);
		}
		// t--
		for (int t = 0; -100 < t; t--) {
			int x = x0 + b * t;
			int y = y0 - a * t;
			System.out.printf("%d,%d%n", x, y);
		}
	}
}
