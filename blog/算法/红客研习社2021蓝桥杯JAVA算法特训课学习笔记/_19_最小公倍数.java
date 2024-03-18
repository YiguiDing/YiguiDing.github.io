public class _19_最小公倍数 {
	public static void main(String[] args) {
		System.out.println(gcf_1(5, 10));
		System.out.println(gcf_1(4, 9));
		System.out.println(gcf_2(4, 9));
	}

	static int gcf_1(int a, int b) {
		int max = a > b ? a : b;
		int min = a > b ? b : a;
		for (int i = 1; i < min; i++) {
			if (max * i % min == 0)
				return max * i;
		}
		return max * min;
	}

	// 利用最大公约数和最小公倍数之间的关系求解
	static int gcf_2(int a, int b) {
		return a * b / gcd(a, b);
	}

	static int gcd(int a, int b) {
		if (b == 0)
			return a;
		return gcd(b, a % b);
	}
}
