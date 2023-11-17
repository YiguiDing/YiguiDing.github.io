import java.util.Arrays;
import java.util.Scanner;

import _02_最少刷题数.Date;

public class _03_承压计算 {
	public static void main(String[] args) {

		long factor = (long) Math.pow(2, 30);
		Scanner sc = new Scanner(System.in);
		long[][] data = new long[30][30];
		for (int i = 0; i < 29; i++) {
			for (int j = 0; j <= i; j++) {
				// 重量均匀的落在下一层,也就是要把重量除以2分给下一层，一共有30层，就是会执行29次除2操作
				// 而这种除以2均摊重量的操作要在每一层都要发生，这就导致必然产生小数。
				// 而计算机中表示小数存在精度问题，导致计算出的数不再是原来的数了
				// 正确的做法是，提前把每个重量乘以2^29，这样在除以2后，依然是整数
				data[i][j] += sc.nextLong() * factor;
				data[i + 1][j] += data[i][j] / 2;
				data[i + 1][j + 1] += data[i][j] / 2;//注意必须是 `+=` 不是 `=`
			}
		}
		Arrays.sort(data[29]);
		System.out.println(data[29][0]);
		System.out.println(data[29][29]);

		System.out.println(data[29][0]/2086458231d);
		System.out.println(data[29][0]/2086458231*data[29][29]);

	}

	static long gcd(long a, long b) {
		if (b == 0) {
			return a;
		} else {
			return gcd(b, a % b);
		}
	}
}
