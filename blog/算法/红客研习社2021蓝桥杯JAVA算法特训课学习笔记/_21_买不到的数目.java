import java.util.ArrayList;
import java.util.Arrays;

public class _21_买不到的数目 {
	public static void main(String[] args) {
		f(257, 191);
	}

	static void f(int nn, int mm) {
		int maxI = 2 * nn;
		int maxJ = 2 * mm;
		byte[] sign = new byte[nn * maxI + mm * maxJ];
		for (int i = 0; i < maxI; i++) {
			for (int j = 0; j < maxJ; j++) {
				int num = nn * i + mm * j;
				sign[num] = 1;
			}
		}
		System.out.println(Arrays.toString(sign));
	}
}
