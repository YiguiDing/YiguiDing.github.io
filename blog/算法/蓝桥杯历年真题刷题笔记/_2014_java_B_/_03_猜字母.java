package 蓝桥杯历年真题刷题笔记._2014_java_B_;


public class _03_猜字母 {
	public static void main(String[] args) {
		char[] str = new char[2014];
		for (int i = 0; i < 106; i++) {// 拼接106次
			for (int j = 0; j < 19; j++) {// 构成a-s的字符序列
				str[i * 19 + j] = (char) ('a' + j);
			}
		}
		int len = 2014;
		while (len != 1) {
			int next = 0;
			for (int i = 0; i < len; i++) {
				if ((i + 1) % 2 == 1) {// 下标是奇数
					len--;// 长度缩减
				} else {// 下标是偶数
					str[next++] = str[i];// 往前挪
				}
			}
		}
		System.out.println(str[0]);
	}
}
