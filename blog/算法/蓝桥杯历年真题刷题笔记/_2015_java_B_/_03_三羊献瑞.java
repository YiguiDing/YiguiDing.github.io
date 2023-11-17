package 蓝桥杯历年真题刷题笔记._2015_java_B_;

import java.util.Arrays;

public class _03_三羊献瑞 {
	public static void main(String[] args) {
		f(0);
	}

	static boolean[] selectted = new boolean[10];
	static int[] nums = new int[8];

	//
	static void f(int step) {
		if (step == nums.length) {
			//// a b c d
			// + e f g b
			// -------------------
			// e f c b k
			int a1 = nums[0] * 1000 + nums[1] * 100 + nums[2] * 10 + nums[3];
			int a2 = nums[4] * 1000 + nums[5] * 100 + nums[6] * 10 + nums[1];
			int re = nums[4] * 10000 + nums[5] * 1000 + nums[2] * 100 + nums[1] * 10 + nums[7];
			if (a1 + a2 == re &&
					nums[0] != 0 && // 开头不为0
					nums[4] != 0// 开头不为0
			){
				System.out.println(a2);
				System.out.println(Arrays.toString(nums));
			}
		} else {
			for (int i = 0; i < selectted.length; i++) {
				if (!selectted[i]) {
					selectted[i] = true;
					nums[step] = i;
					f(step + 1);
					selectted[i] = false;
				}
			}
		}
	}
}