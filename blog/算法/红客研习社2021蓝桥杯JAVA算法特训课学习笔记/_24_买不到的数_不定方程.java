
public class _24_买不到的数_不定方程 {
	public static void main(String[] args) {
		System.out.println(f(3, 5));
		System.out.println(f(4, 7));
		System.out.println(f(10, 13));
		System.out.println(f(30, 41));
		System.out.println(f(257, 191));
		// 输出很快：
		// 7
		// 17
		// 107
		// 1159
		// 48639
	}

	static int f(int a, int b) {
		// ax+by=c
		// by = c-ax;
		// y = (c-ax)/b
		//
		// x = x0 + bt;
		// y = y0 - at;
		int c = 0;
		int min = a < b ? a : b;
		int len = 0;
		while (true) {
			boolean find = false;
			for (int x0 = 0; a * x0 <= c; x0++) {
				if ((c - a * x0) % b == 0) {
					int y0 = (c - a * x0) / b;
					if (y0 < 0)
						continue;
					else {
						find = true;
					}
				}
			}
			if (find) {
				len++;
				if (len == min)
					return c - len;
			} else {
				len = 0;
			}
			c++;
		}
	}
}
