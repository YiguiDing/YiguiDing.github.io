/**
 * _22_快速求第k位素数_欧拉筛
 */
public class _22_快速求第k位素数_欧拉筛 {
	public static void main(String[] args) {

		System.out.println("");
		for (int i = 1; i < 20; i++) {
			System.out.print(getPrimeAt(i) + " ");
			// OUTPUT:
			// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67
		}
		System.out.println("");
		System.out.println(getPrimeAt(100002));
		// 1299743
		// OUTPUT:
	}

	// 和上面完全相同的算法
	static int getPrimeAt(int idx) {
		int prime_counter = 0;
		int[] primes = new int[1000002];// 存素数
		byte[] flags = new byte[10000000];// 0代表素数，1代表合数
		for (int cur_num = 2; cur_num < flags.length; cur_num++) {
			// 是素数
			if (flags[cur_num] == 0) {
				// prime_counter 素数计数器正好可以用来当下标用
				primes[prime_counter] = cur_num;// 记录这个数
				prime_counter++;// 计数，找到一个素数
				if (prime_counter == idx)
					return cur_num;// 找到就返回这个数
			}

			// 标记为合数：
			// 遍历当前找到的所有素数,乘上当前数，一定是合数
			for (int k = 0; k < prime_counter; k++) {

				// 过去的所有素数乘以当前素数，也是合数
				int he_num = primes[k] * cur_num; //

				if (he_num >= flags.length)// 防止越界
					break;

				flags[he_num] = 1;// 标记为合数

				// 提高效率的最最最最最最最最最最最最最最最最最最最最最关键的一句：
				if (cur_num % primes[k] == 0)
					// 表示cur_num曾经被 primes[k] 筛掉过，
					break;

			}
		}
		return -1;// 表示内部空间不足了
	}
}
