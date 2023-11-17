public class _05_抽签 {
	/*
	 * 抽签
	 * 
	 * X星球要派出一个5人组成的观察团前往W星。
	 * 其中：
	 * A国最多可以派出4人。
	 * B国最多可以派出2人。
	 * C国最多可以派出2人。
	 * ....
	 * 
	 * 那么最终派往W星的观察团会有多少种国别的不同组合呢？
	 * 
	 * 下面的程序解决了这个问题。
	 * 数组a[] 中既是每个国家可以派出的最多的名额。
	 * 程序执行结果为：
	 * DEFFF
	 * CEFFF
	 * CDFFF
	 * CDEFF
	 * CCFFF
	 * CCEFF
	 * CCDFF
	 * CCDEF
	 * BEFFF
	 * BDFFF
	 * BDEFF
	 * BCFFF
	 * BCEFF
	 * BCDFF
	 * BCDEF
	 * ....
	 * (以下省略，总共101行)
	 * 
	 * 
	 */
	public static void f(int[] a, int k, int n, String s) {
		if (k == a.length) {
			if (n == 0)
				System.out.println(s);
			return;
		}

		String s2 = s;
		for (int i = 0; i <= a[k]; i++) {
			// i表示，枚举去('A'+k)国的观察者人数，从0~a[k]
			// 递归，
			// k+1，表示决定下一个国家观察团人数，
			// n-i,表示还有多少个观察者剩余没有被分配。
			f(a, k + 1, n - i, s2); // 填空位置
			s2 += (char) (k + 'A');
		}
	}

	public static void main(String[] args) {
		int[] a = {
				4, // A
				2, // B
				2, // C
				1, // D
				1, // E
				3 // F
		};

		f(a, 0, 5, "");
	}

}
