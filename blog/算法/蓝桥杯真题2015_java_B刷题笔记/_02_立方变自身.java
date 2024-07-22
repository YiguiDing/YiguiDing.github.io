package 蓝桥杯历年真题刷题笔记._2015_java_B_;


public class _02_立方变自身 {
	public static void main(String[] args) {
		for (int i = 1; i <= 1000; i++) {
			int i_3 = i * i * i;
			String i_3_str = i_3 + "";
			if (strToEachNumSun(i_3_str)==i) {
				System.out.println(i);
			}
		}
	}

	static int strToEachNumSun(String str) {
		char[] chars = str.toCharArray();
		int num = 0;
		for (int i = 0; i < chars.length; i++) {
			num += chars[i] - '0';
		}
		return num;
	}
}
