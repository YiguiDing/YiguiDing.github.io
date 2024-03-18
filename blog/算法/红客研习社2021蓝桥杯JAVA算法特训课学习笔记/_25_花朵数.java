import java.math.BigInteger;
import java.util.Arrays;

public class _25_花朵数 {
	static int N = 21;// N=3 就是求经典水仙花数，N=21就是求本题

	public static void main(String[] args) {
		dfs(0, N);
		// 输出：
		// 128468643043731391252
		// 449177399146038697307
	}

	// 可以认为是频次统计
	static int[] counter = new int[10];// 0~9的计数

	// base_e21[5]里存的是5的21次方
	static BigInteger[] base_exp = new BigInteger[10];// 0~9 的21次方
	static {
		for (int i = 0; i < base_exp.length; i++) {
			base_exp[i] = BigInteger.valueOf(i).pow(N);
		}
	}

	// dfs所做的是确定21个数字，有几个0，几个1 几个2.....几个9.
	// 因为，水仙花数是把每一位数的N次方相加，
	// 每一位数的具体次序不会影响相加的结果，
	// 只要相加的结果的位数满足要求则就是水仙花数
	static void dfs(int step, int rest) {
		if (step == counter.length) {
			if (rest == 0) {
				// System.out.println(Arrays.toString(counter));
				process();
			}
		} else {
			for (int i = 0; i <= rest; i++) {
				counter[step] = i;// 这一位出现i次
				dfs(step + 1, rest - i);
				// counter[step] = 0;// 回溯
			}
		}
	}

	// 用频次统计结果计算 各个位次方的和，然后判断这个和
	static void process() {
		BigInteger bi_sum = BigInteger.ZERO;
		for (int i = 0; i < counter.length; i++) {
			bi_sum = bi_sum.add(base_exp[i].multiply(BigInteger.valueOf(counter[i])));
		}
		String str_sum = bi_sum.toString();
		// 这个数的位数首先要满足要求
		if (str_sum.length() == N) {
			// System.out.println(str_sum);
			// 这个数的各个数出现的频次要符合要求
			int[] counter_sum = new int[10];
			for (int i = 0; i < str_sum.length(); i++) {
				counter_sum[str_sum.charAt(i) - '0']++;// 统计
			}
			for (int i = 0; i < counter_sum.length; i++) {
				if (counter[i] == counter_sum[i]) {// 一致性判断
					continue;
				} else {
					return;
				}
			}
			System.out.println(str_sum);
		}
	}
}
