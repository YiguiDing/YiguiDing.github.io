import java.util.EnumSet;

public class _20_求a的n次幂 {
	public static void main(String[] args) {
		System.out.println(pow(3, 3));
		System.out.println(pow_mod(3, 3,100));
		System.out.println(quick_pow_1(3, 3));
		System.out.println(quick_pow_2(3, 3));
	}

	static int pow(int a, int n) {
		int res = 1;
		for (int i = 1; i <= n; i++) {
			res *= a;
		}
		return res;
	}

	// 如果n特别大的话或者题目要求取余的话
	// 取余时需要注意
	// res = (a*a*a...*a)%n
	// res = (a%n*a%n*a%n....a%n)%n
	static int pow_mod(int a, int n, int mod) {
		int res = 1;
		for (int i = 1; i <= n; i++) {
			res = (res * a) % mod;
		}
		return res % mod;
	}

	// 快速求解幂
	static int quick_pow_1(int a, int n) {
		if (n == 0)
			return 1;
		else if (n % 2 == 0) {
			int k = quick_pow_1(a, n / 2);
			return k * k;
		} else {
			return a * quick_pow_1(a, n - 1);
		}
	}
	// 快速求解幂
	static int quick_pow_2(int base, int exp) {
		int res = 1;
		while (exp != 0) {
			if ((exp & 1) == 1) {
				res *= base;
			}
			base *= base;
			exp >>= 1;
		}
		return res;
	}
}
