public class _22_快速求第k位素数_埃氏筛法 {
	public static void main(String[] args) {
		for (int i = 1; i < 20; i++) {
			System.out.print(getPrimeAt(i) + " ");
			// OUTPUT:
			// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67
		}
		System.out.println("");
		for (int i = 1; i < 20; i++) {
			System.out.print(getPrimeAt_(i) + " ");
			// OUTPUT:
			// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67
		}
		System.out.println("");
		System.out.println(getPrimeAt(100002));
		// OUTPUT:
		// 1299743

	}

	static int getPrimeAt(int i) {
		int counter = 0;
		// 思路就是，先假设数组中全是素数，isSu[k]==true 表示k是素数，然后往后把k的倍数全部标记为不是素数
		// 但是初始化isSu[]为全部是true会有额外耗时，
		// 因为不是素数就是合数，换一种思路就是，用数组isHe[num] 表示num是不是合数，
		// 由于全部是false，就是全部是素数
		boolean[] isHe = new boolean[10000000];// 默认全是false，全是素数
		for (int num = 2; num < isHe.length; num++) {
			if (isHe[num]) {
				// 不是素数就是合数
				continue;
			} else {
				counter++;// 找到一个素数,计数
				if (counter == i)
					return num;
				// 是素数
				// 则素数的倍数，全部都是合数
				for (int k = 2 * num; k < isHe.length; k += num) {
					isHe[k] = true;// 标记为合数
				}
			}
		}
		return -1;
	}

	// 和上面完全相同的算法
	static int getPrimeAt_(int i) {
		int counter = 0;
		byte[] flag = new byte[10000000];// 0代表素数，1代表合数
		for (int num = 2; num < flag.length; num++) {
			if (flag[num] == 1) {
				continue;// 合数跳过
			} else {
				// 不是合数就是素数
				counter++;// 计数
				if (counter == i)
					return num;// 找到就返回这个数

				for (int num_he = 2 * num; num_he < flag.length; num_he += num) {
					flag[num_he] = 1;// 标记为合数
				}
			}
		}
		return -1;
	}
}
