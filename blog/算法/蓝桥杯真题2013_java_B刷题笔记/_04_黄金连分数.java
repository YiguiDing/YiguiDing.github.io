package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Iterator;
import java.util.Scanner;

public class _04_黄金连分数 {
	// 黄金分割数生成器
	static class GoldNumber implements Iterator<BigDecimal> {
		BigDecimal a;
		BigDecimal b;
		BigDecimal c;
		GoldNumber() {
			a = BigDecimal.valueOf(1);
			b = BigDecimal.valueOf(2);
			c = a.add(b);
		}
		@Override
		public boolean hasNext() {
			return true;
		}
		@Override
		public BigDecimal next() {
			BigDecimal next = a.divide(b, 220, RoundingMode.HALF_DOWN);// 不要四舍五入
			a = b;
			b = c;
			c = a.add(b);
			return next;
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		GoldNumber gd = new GoldNumber();
		String res;
		int count = 1000;
		while (count>0) {
			BigDecimal bd = (BigDecimal) gd.next();
			res = bd.toString();
			System.out.println(res.toString().substring(0, 2 + 200 + 5));
			count--;
		}
		sc.close();
		// 0.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475408807538689175212663386222353693179318006076672635443338908659593958290563832266131992829026788 06752
	}
}
