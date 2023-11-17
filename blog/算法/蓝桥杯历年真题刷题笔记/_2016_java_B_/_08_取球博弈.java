import java.util.ArrayList;
import java.util.Scanner;

public class _08_取球博弈 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		for (int i = 0; i < choices.length; i++) {
			choices[i] = sc.nextInt();
		}
		for (int i = 0; i < init.length; i++) {
			init[i] = sc.nextInt();
		}
		sc.close();

		for (int i = 0; i < init.length; i++) {
			int num = process(init[i], 0, 0);
			char ch;
			if (num == 1)
				ch = '-';
			else if (num == 2)
				ch = '0';
			else
				ch = '+';
			if (i != init.length - 1) {
				System.out.print(ch + " ");
			} else {
				System.out.print(ch);
			}
		}

	}

	// 选择
	static int[] choices = new int[3];
	// 初始值
	static int[] init = new int[5];

	static int[][][] cache = new int[1000][2][2];

	static int process(int rest, int userA, int userB) {
		// 以剩余球数以及自己和对手球的奇偶性做状态特征即可
		int result = cache[rest][userA & 1][userB & 1];
		if (result != 0)// 为0说明这个状态没有被缓存过,因为缓存的值只会是1、2、3
			return result;

		// 剩余无球可以拿（取任何一个球都会导致剩余球变负数）
		if (rest - choices[0] < 0 &&
				rest - choices[1] < 0 &&
				rest - choices[2] < 0) {

			// 我是基数，对手偶数，我赢，得分最高
			if ((userA & 1) == 1 && (userB & 1) == 0) {
				result = 3;
				// return 3;// '+';
			}
			// 我是偶数，对手基数，他赢，得分最低
			else if ((userA & 1) == 0 && (userB & 1) == 1) {
				result = 1;
				// return 1;// '-';
			}
			// 都是偶数 或 都是基数，平局，得分最中等
			else {
				result = 2;
				// return 2;// '0';
			}
		} else {
			// 找到让对手得分最低的策略
			Integer worstScore = null;
			for (int i = 0; i < choices.length; i++) {
				if (rest - choices[i] >= 0/* 可以取 */) {
					// 将局势交给对手 得到对手的得分
					int otherScore = process(rest - choices[i], userB, userA + choices[i]);
					if (worstScore == null || otherScore < worstScore) {
						worstScore = otherScore;
					}
				}
			}

			// 可以找到一种让对手输的策略,则我会赢
			if (worstScore == 1)
				result = 3;
			// return 3;
			// 无法赢，但可以找到一种让对手平局的策略,则我会平
			else if (worstScore == 2)
				result = 2;
			// return 2;
			// 找不到赢的策略也找不到平局的策略,则我会输
			else// if (worstScore == 3)
				result = 1;
			// return 1;
		}
		cache[rest][userA & 1][userB & 1] = result;
		return result;
	}
}
