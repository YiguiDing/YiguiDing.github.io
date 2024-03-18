public class _13_啤酒和饮料 {
	public static void main(String[] args) {
		for (int yi = 1; yi < 83; yi++) {
			for (int pi = 1; pi < yi; pi++) {
				if (2.3 * pi + 1.9 * yi == 82.3) {// 直接浮点数等值比较可能出错
					System.out.println(pi);
				}
			}
		}

		for (int yi = 1; yi < 83; yi++) {
			for (int pi = 1; pi < yi; pi++) {
				if (23 * pi + 19 * yi == 823) {// 扩大十倍，避免使用浮点数
					System.out.println(pi);
				}
			}
		}
	}
}
