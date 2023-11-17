import java.util.Arrays;

public class _24_买不到的数_数组法 {
	public static void main(String[] args) {
		System.out.println(f(3, 5));
		System.out.println(f(4, 7));
		System.out.println(f(10, 13));
		System.out.println(f(30, 41));
		System.out.println(f(257, 191));
		// 输出（一般快，但存在越界风险）：
		// 7
		// 17
		// 107
		// 1159
		// 48639
	}

	static int N = 100000;

	static int f(int a, int b) {
		boolean[] couldBuy = new boolean[N];
		for (int i = 0; i < N / a; i++) {
			for (int j = 0; j < (N - a * i) / b; j++) {
				couldBuy[a * i + b * j] = true;
			}
		}
		int min = a < b ? a : b;
		int len = 0;
		for (int i = 0; i < couldBuy.length; i++) {
			if (couldBuy[i])
				len++;
			else
				len = 0;

			// 连续能买到min次，则后续的数都能买到。
			if (len == min) {
				return i - len;
			}
		}
		return -1;
	}
}
