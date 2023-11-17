public class _15_有理分数的完整实现 {
	public static void main(String[] args) {
		// 约分测试
		System.out.println(new Frac(2, 4));
		System.out.println(new Frac(4, 8));
		System.out.println(new Frac(-2, 4));
		System.out.println(new Frac(2, -4));
		// 加减乘除测试
		System.out.println(new Frac(1, 4).add(new Frac(1, 4)));
		System.out.println(new Frac(1, 4).sub(new Frac(1, 4)));
		System.out.println(new Frac(1, 4).mul(new Frac(1, 4)));
		System.out.println(new Frac(1, 4).div(new Frac(1, 4)));
	}
}

// 有理分数
class Frac {
	int a, b;

	Frac(int a, int b) {
		this.a = a;
		this.b = b;
		int k = gcd(a, b);
		if (k != 1) {
			this.a /= k;
			this.b /= k;
		}
	}

	// 加法
	Frac add(Frac o) {
		return new Frac(this.a * o.b + o.a * this.b, this.b * o.b);
	}

	// 乘法
	Frac mul(Frac o) {
		return new Frac(this.a * o.a, this.b * o.b);
	}

	// 相反数
	Frac negative() {
		return new Frac(-a, b);
	}

	// 倒数
	Frac inverse() {
		return new Frac(b, a);
	}

	// 减法,减一个数等于加一个数的相反数
	Frac sub(Frac o) {
		return this.add(o.negative());
	}

	// 除法，除一个数等于乘一个数的倒数
	Frac div(Frac o) {
		return this.mul(o.inverse());
	}

	// 判断是否为1
	boolean equal_ONE() {
		return a == b;
	}

	int gcd(int a, int b) {
		if (a <= 0)
			a = -a;// 注意此处对负数的处理
		if (b <= 0)
			b = -b;// 注意此处对负数的处理
		if (b == 0)
			return a;
		else
			return gcd(b, a % b);
	}

	@Override
	public String toString() {
		return "Frac [a=" + a + ", b=" + b + "]";
	}

}