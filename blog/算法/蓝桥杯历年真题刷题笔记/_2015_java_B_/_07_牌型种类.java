package 蓝桥杯历年真题刷题笔记._2015_java_B_;

public class _07_牌型种类 {
	public static void main(String[] args) {
		f(0, 0);
		System.out.println(count);
		// 输出：3598180
	}

	static int count = 0;

	static void f(int step, int cardTotalNum) {
		if (step > 13 || cardTotalNum > 13)
			return;// 拿了不止13次 或 拿了的总牌数超过13张牌
		if (step == 13 && cardTotalNum == 13) {// 拿了13次，且总共拿了13张牌
			count++;
			return;
		}
		// 考虑这张牌被发到0次、1次、2次、3次、4次,的5种情况
		for (int i = 0; i <= 4; i++) {
			f(step + 1, cardTotalNum + i);
		}
	}
}