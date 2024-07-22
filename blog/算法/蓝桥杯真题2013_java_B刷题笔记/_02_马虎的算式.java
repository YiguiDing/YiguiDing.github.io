package 蓝桥杯历年真题刷题笔记._2013_java_B_;

public class _02_马虎的算式 {
	public static void main(String[] args) {
		int count = 0;
		for (int a = 1; a <= 9; a++) {
			for (int b = 1; b <= 9; b++)
				if (b != a) 
				for (int c = 1; c <= 9; c++)
					if (c != a && c != b)
					for (int d = 1; d <= 9; d++)
						if (d != a && d != b && d != c)
						for (int e = 1; e <= 9; e++) {
							if (e != a && e != b && e != c && e != d) {
								// ab*cde == adb*ce;
								if ((a * 10 + b) * (c * 100 + d * 10 + e) == (a * 100 + d * 10 + b)* (c * 10 + e)) {
									System.out.println("" + a + b + "*" + c + d + e + "==" + a + d + b + "*"+ c+ e);
									count++;
								}
							}
						}
		}
		System.out.println("total:" + count);
		/*
		 * 输出:
		 * ......略
		 * 81*495==891*45
		 * 81*594==891*54
		 * 81*693==891*63
		 * 81*792==891*72
		 * 84*596==894*56
		 * 91*532==931*52
		 * 96*234==936*24
		 * 98*134==938*14
		 * 98*536==938*56
		 * total:142
		 */
	}
}
