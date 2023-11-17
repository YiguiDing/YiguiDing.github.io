import java.util.LinkedList;
import java.util.List;

public class _14_比酒量_递归法 {
	public static void main(String[] args) {
		for (int rest_people = 20; 4 <= rest_people; rest_people--) {
			f(0, rest_people, new Frac(0, 1));
			// 输出：
			// [20, 5, 4, 2]
			// [18, 9, 3, 2]
			// [15, 10, 3, 2]
			// [12, 6, 4, 2]
		}
	}

	static LinkedList<Integer> result = new LinkedList<>();

	static void f(int step, int rest_people, Frac sum) {
		if (step == 4 && rest_people == 0) {
			if (sum.equal_ONE()) {
				System.out.println(result);
			}
		} else {
			// 倒下的人数
			for (int off = 1; off <= rest_people; off++) {
				result.addLast(rest_people);
				f(step + 1, rest_people - off, sum.add(new Frac(1, rest_people)));
				result.removeLast();// 回溯
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