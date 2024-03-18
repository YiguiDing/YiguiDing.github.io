import java.util.LinkedList;
import java.util.List;

public class _14_比酒量_暴力法 {
	public static void main(String[] args) {
		// 初始人数
		for (int a1 = 20; 4 <= a1; a1--) {
			for (int a2 = 0; a2 <= a1 - 1; a2++) {
				for (int a3 = 0; a3 <= a2 - 1; a3++) {
					for (int a4 = 0; a4 <= a3 - 1; a4++) {
						Frac k1 = new Frac(1, a1);
						Frac k2 = new Frac(1, a2);
						Frac k3 = new Frac(1, a3);
						Frac k4 = new Frac(1, a4);
						if (k1.add(k2).add(k3).add(k4).equal_ONE()) {
							System.out.printf("%d,%d,%d,%d%n", a1, a2, a3, a4);
						}
					}
				}
			}
		}
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

	// 判断是否为1
	boolean equal_ONE() {
		return a == b;
	}

	int gcd(int a, int b) {
		if (b == 0)
			return a;
		else
			return gcd(b, a % b);
	}
}