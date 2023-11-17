package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.util.Calendar;

public class _01_世纪末的星期 {
	static void doSomeThing() {
		Calendar calendar = Calendar.getInstance();
		for (int year = 1999; year <= 9999; year += 100) {// 每次增加100年
			calendar.set(Calendar.YEAR, year);
			calendar.set(Calendar.MONTH, 11);// 1月是0 12月是11
			calendar.set(Calendar.DAY_OF_MONTH, 31);// 1号是1

			int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
			System.out.println("year:" + year + " week:" + dayOfWeek);
			if (dayOfWeek == Calendar.SUNDAY) {
				break;
			}
		}
	}

	public static void main(String[] args) {
		long start = System.currentTimeMillis();
		doSomeThing();
		long end = System.currentTimeMillis();
		System.out.println("耗时:" + (end - start) + "毫秒");
		/*
		 * year:1999 week:6 # 6是星期五
		 * year:2099 week:5
		 * year:2199 week:3
		 * year:2299 week:1 # 1是星期日
		 * 耗时:37毫秒
		 */
	}
}
