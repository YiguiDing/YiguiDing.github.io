package 蓝桥杯历年真题刷题笔记._2013_java_B_;

public class _05_有理数类 {

	static void doSomeThing() {
		Rational a = new Rational(2, 4);
		Rational b = new Rational(5, 6);
		Rational c = a.add(b);
		System.out.println(a + "+" + b + "=" + c);
		// 1/2+5/6=4/3
		// 耗时:1毫秒
	}

	public static void main(String[] args) {
		long start = System.currentTimeMillis();
		doSomeThing();
		long end = System.currentTimeMillis();
		System.out.println("耗时:" + (end - start) + "毫秒");
	}

	// 用分数表示的有理数
	static class Rational {
		private long ra;// 分子
		private long rb;// 分母
		public Rational(long a, long b) {
			ra = a;
			rb = b;
			long k = gcd(ra, rb);// 求最大公因数/最大公约数
			if (k > 1) {
				ra /= k;// 约分化简
				rb /= k;
			}
		}
		// 求最大公因数/最大公约数
		private long gcd(long a, long b) {
			if (b == 0)
				return a;
			return gcd(b, a % b);
		}
		// 加法
		public Rational add(Rational x) {
			return new Rational(
				this.ra * x.rb + x.ra * this.rb,
				this.rb * x.rb
			);
		}
		// 乘法
		public Rational mul(Rational x) {
			return new Rational(ra * x.ra, rb * x.rb);
		}
		@Override
		public String toString() {
			if (rb == 1)
				return ra + "";
			else
				return ra + "/" + rb;
		}
	}

}
