import java.util.Arrays;

public class _02_大数阶乘 {
	public static void main(String[] args) {
		// 输出为：3628800 和计算器计算结果一致
		System.out.println(comput(10));

		// 输出为：93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
		System.out.println(comput(100));

	}

	/*
	 * num[j]中存的数的最大值是9，
	 * num[j] 中能存储的最大值是Integer.MAX_VALUE
	 * 所以N的最大值至少是 Integer.MAX_VALUE/9
	 */
	static String comput(int N) {
		int[] num = new int[N * String.valueOf(N).length()/* 注意这个数组的大小是如何计算的，直接假设是n个和n位数相同的数相乘 */];
		num[0] = 1; // 初始化为1的阶乘
		int len = 1;// 数组中的有效位数为1
		// 依次求2的阶乘，3的阶乘,4的阶乘....指导n的阶乘
		for (int i = 2; i <= N; i++) {
			for (int j = 0; j < len; j++) {
				num[j] *= i;
			}
			// System.out.println(Arrays.toString(num));
			for (int j = 0; j < len; j++) {
				if (j == len - 1 /* 已在最后一位（最高位） */ && num[len - 1] / 10 != 0/* 还有进位未处理 */) {
					len++;
				}
				num[j + 1] += num[j] / 10;// 处理进位,低位向高位进
				num[j] %= 10;// 处理当前位，对10取余
			}
			// System.out.println(Arrays.toString(num));
		}
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < len; i++) {
			sb.append(num[i]);
		}
		sb.reverse();// 反转
		return sb.toString();
	}
}
