import java.util.Arrays;

public class _26_六角幻方 {
	// 一共1~19个数，和为(1+19)*19/2=190，
	// 填5行，每行都相等，这说明每行的和为190/5 = 38,题中
	// ---* * *
	// --* * * *
	// -* * * * *
	// --* * * *
	// ---* * *

	// * * *
	// * * * *
	// * * * * *
	// * * * *
	// * * *

	public static void main(String[] args) {
		f(1, 0, 38, 0);
		System.out.println(counter);
	}

	static int[][] nums = new int[][] {
			new int[] { 15, 13, 10 },
			new int[] { 4, 5, 6, 7 },
			new int[] { 8, 9, 3, 11, 12 },
			new int[] { 2, 14, 1, 16 },
			new int[] { 17, 18, 19 }
	};

	static int counter = 0;

	static void f(int cur_i, int cur_j, int preLineSum, int curLineSum) {
		if (cur_i == nums.length - 1 && cur_j == nums[cur_i].length/* 最后一个合法位置的下一个位置是递归的出口 */) {
			counter++;
			// System.out.println(Arrays.toString(nums[0]) + sumArray(nums[0]));
			// System.out.println(Arrays.toString(nums[1]) + sumArray(nums[1]));
			// System.out.println(Arrays.toString(nums[2]) + sumArray(nums[2]));
			// System.out.println(Arrays.toString(nums[3]) + sumArray(nums[3]));
			// System.out.println(Arrays.toString(nums[4]) + sumArray(nums[4]));
			// System.out.println();
		} else {
			// 计算正确的当前位置
			if (cur_j == nums[cur_i].length) {
				cur_i++;
				cur_j = 0;
				preLineSum = curLineSum;
				curLineSum = 0;
			}

			if (curLineSum > 38) {// 剪枝
				return;
			}
			if (cur_j == 0 && preLineSum != 38) {
				return;// 剪枝
			}
			if (cur_i == 3 && cur_j == 0) {
				// 剪枝
				if (((nums[0][0] +
						nums[1][0] +
						nums[2][0]) != 38

				) || ((nums[0][2] +
						nums[1][3] +
						nums[2][4]) != 38)) {
					return;
				}
			}

			int i = cur_i;// 从cur_i开始
			int j = cur_j;// 从cur_j开始
			for (/* 应该空着 */; i < nums.length; i++) {
				for (/* 应该空着 */; j < nums[i].length; j++) {
					swap(nums, cur_i, cur_j, i, j);
					f(cur_i, cur_j + 1, preLineSum, curLineSum + nums[cur_i][cur_j]);// 去到下一个位置
					swap(nums, cur_i, cur_j, i, j);// 回溯
				}
				j = 0;// 末尾恢复【重要！】
			}
		}
	}

	// 交换
	static void swap(int[][] datas, int a_i, int a_j, int b_i, int b_j) {
		if (a_i != b_i && a_j != b_j) {
			datas[a_i][a_j] = datas[a_i][a_j] ^ datas[b_i][b_j];
			datas[b_i][b_j] = datas[a_i][a_j] ^ datas[b_i][b_j];
			datas[a_i][a_j] = datas[a_i][a_j] ^ datas[b_i][b_j];
		}
	}

	static int sumArray(int[] arr) {
		int res = 0;
		for (int i = 0; i < arr.length; i++) {
			res += arr[i];
		}
		return res;
	}
}
