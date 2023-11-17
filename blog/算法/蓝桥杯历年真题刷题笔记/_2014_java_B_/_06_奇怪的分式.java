package 蓝桥杯历年真题刷题笔记._2014_java_B_;

public class _06_奇怪的分式 {
	public static void main(String[] args) {
		int count = 0;
		for (int n1_a = 1; n1_a <= 9; n1_a++) {
			for (int n1_b = 1; n1_b <= 9; n1_b++) {
				if (n1_a == n1_b)// 分子分母相等的情况不算
					continue;

				for (int n2_a = 1; n2_a <= 9; n2_a++) {
					for (int n2_b = 1; n2_b <= 9; n2_b++) {
						if (n2_a == n2_b)// 分子分母相等的情况不算
							continue;

						Frac f1 = new Frac(n1_a, n1_b);
						Frac f2 = new Frac(n2_a, n2_b);
						Frac f3 = new Frac(n1_a * 10 + n2_a, n1_b * 10 + n2_b);

						// f1*f2 == f3;
						if (f1.multiple(f2).equals(f3)) {
							count++;

							System.out.printf("%d/%d*%d/%d==%d/%d\n",
									n1_a, n1_b,
									n2_a, n2_b,
									n1_a * 10 + n2_a,
									n1_b * 10 + n2_b);
						}

					}
				}
			}
		}

		System.out.printf("共有%d种。", count);
		/*
		 * 输出：
		 * 1/2*5/4==15/24
		 * 1/4*8/5==18/45
		 * 1/6*4/3==14/63
		 * 1/6*6/4==16/64
		 * 1/9*9/5==19/95
		 * 2/1*4/5==24/15
		 * 2/6*6/5==26/65
		 * 4/1*5/8==45/18
		 * 4/9*9/8==49/98
		 * 6/1*3/4==63/14
		 * 6/1*4/6==64/16
		 * 6/2*5/6==65/26
		 * 9/1*5/9==95/19
		 * 9/4*8/9==98/49
		 * 共有14种。
		 */
	}

	static class Frac {
		int ra;
		int rb;

		public Frac(int ra, int rb) {
			this.ra = ra;
			this.rb = rb;
			int k = gcd(ra, rb);
			if (k > 1) {//约分
				this.ra /= k;
				this.rb /= k;
			}
		}

		Frac multiple(Frac obj) {
			return new Frac(
					this.ra * obj.ra,
					this.rb * obj.rb);
		}
		// Greatest Common Divisor(GCD)
		static int gcd(int a, int b) {
			return b == 0 ? a : gcd(b, a % b);
		}

		public boolean equals(Frac obj) {
			return (this.ra == obj.ra && this.rb == obj.rb);
		}
	}
}