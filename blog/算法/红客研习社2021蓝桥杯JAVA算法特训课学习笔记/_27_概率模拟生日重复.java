public class _27_概率模拟生日重复 {

	public static void main(String[] args) {
		System.out.println(f());
	}

	// 模拟次数
	static int N = 1000000;

	static double f() {
		int count = 0;
		for (int t = 0; t < N; t++) {
			int[] k = new int[365];
			for (int i = 1; i <= 30; i++) {
				int year = (int) (Math.random() * 365);
				if (k[year] == 1) {
					count++;
					break;
				} else {
					k[year] = 1;
				}
			}
		}
		return count / (double) N;
	}
}
