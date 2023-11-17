public class _18_最大公约数 {
	public static void main(String[] args) {
		System.out.println(gcd_1(5, 10));
		System.out.println(gcd_2(5, 10));
	}

	// 用循环方式暴力求最大公约数｛低效｝
	static int gcd_1(int a, int b) {
		if (a < 0)
			a = -a;// 一般不讨论负数的最大公约数
		if (b < 0)
			b = -b;

		int min = a < b ? a : b;
		for (int k = min; k > 1; k--) {
			if (a % k == 0 && b % k == 0) {
				return k;
			}
		}
		return 1;
	}
	// 辗转相除的原理

	// 取余
	// a = 【k1 * n】 + c1
	// b = 【k2 * n】 + c2
	// (a+b) % n = ( a % n + b % n ) % n
	// (a+b) % n = ( ([k1 * n] + c1) % n + ([k2 * n] + c2) % n ) % n
	// (a+b) % n = ( [k1 * n] % n + c1 % n + [k2 * n] % n + c2 % n ) % n
	// (a+b) % n = ( 0 + c1 % n + 0 + c2 % n ) % n
	// (a+b) % n = ( c1 % n + c2 % n ) % n
	// (a+b) % n = ( c1 + c2 ) % n



	// 辗转相除法，递归求余方式算最大公约数
	static int gcd_2(int a, int b) {
		if (a < 0)
			a = -a;// 一般不讨论负数的最大公约数
		if (b < 0)
			b = -b;
		if (b == 0)
			return a;
		else
			return gcd_2(b, a % b);
	}

	// 辗转相除，for循环求解
	// static int gcd_3(int a, int b) {

	// }
}
