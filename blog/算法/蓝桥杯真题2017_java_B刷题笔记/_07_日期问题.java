import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

/**
 * _07_日期问题
 */
public class _07_日期问题 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String info = sc.nextLine();
		int aa = Integer.parseInt(info.substring(0, 2));
		int bb = Integer.parseInt(info.substring(3, 5));
		int cc = Integer.parseInt(info.substring(6, 8));
		// System.out.println(aa);
		// System.out.println(bb);
		// System.out.println(cc);

		check(1900 + aa, bb, cc);
		check(2000 + aa, bb, cc);

		check(1900 + cc, aa, bb);
		check(2000 + cc, aa, bb);

		check(1900 + cc, bb, aa);
		check(2000 + cc, bb, aa);

		// 集合自带排序和去重
		for (String item : res) {
			System.out.println(item);
		}
	}

	static Set<String> res = new HashSet<>();

	static void check(int yyyy, int mm, int dd) {
		if (1960 <= yyyy && yyyy <= 2059 &&
				1 <= mm && mm <= 12 &&
				1 <= dd && dd <= 31) {
			switch (mm) {
				case 2:
					if (isLeaf(yyyy) && dd <= 29) {
						break;
					} else if (dd <= 28) {
						break;
					} else {
						return;
					}
					// 4 6 9 11月：30天，
					// 2月：润29 平28
					// 其他月：31天
				case 4:
				case 6:
				case 9:
				case 11:
					if (dd <= 30)
						break;
					else
						return;
			}
			String k = yyyy + "-" + (mm <= 9 ? "0" + mm : mm) + "-" + (dd <= 9 ? "0" + dd : dd);
			res.add(k);
		}
	}

	static boolean isLeaf(int yyyy) {
		return yyyy % 400 == 0 || (yyyy % 4 == 0 && yyyy % 100 != 0);
	}
}