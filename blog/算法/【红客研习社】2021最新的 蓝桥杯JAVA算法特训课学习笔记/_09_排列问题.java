public class _09_排列问题 {
	public static void main(String[] args) {
		System.out.println(f(3, 2));
	}

	static int f(int m, int n) {
		if (m == 0 || n == 0)// 因为是排列问题，A为0时B无论有多少个，对于后续B的排列顺序，都属于一种情况
			return 1;
		// 因为这里的排列问题实际上就是每个位置上都是要么选A要么选B,所以就是考虑这两种情况,然后把这两种情况s数相加即可
		return f(m - 1, n) + f(m, n - 1);
	}
}
