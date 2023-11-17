public class _01_李白打酒 {
	public static void main(String[] args) {
		dfs(2, 5, 10);
		System.out.println(count);
		/*
		 * 输出：
		 * ababbbbbabababb
		 * abbabbabbbababb
		 * abbabbbaabbbabb
		 * abbabbbabaabbbb
		 * abbbaabbabbbabb
		 * abbbaabbbaabbbb
		 * abbbabaabbabbbb
		 * baababbbbbababb
		 * baabbabbabbbabb
		 * baabbabbbaabbbb
		 * baabbbaabbabbbb
		 * babaababbbbbabb
		 * babaabbabbabbbb
		 * bababaababbbbbb
		 * 14
		 */
	}

	static int count = 0;
	static StringBuilder sb = new StringBuilder();

	static void dfs(int restWine/* 剩多少酒 */, int restShop/* 剩多少店没逢 */, int restFllower/* 剩多少朵花没遇 */) {
		if (restWine == 0 && restFllower == 0 && restShop == 0/* 喝完酒，遇完花，逢完店 */) {
			String string = sb.toString();
			if (string.charAt(string.length() - 1) == 'b'/* 只统计最后遇到的是花的情况 */) {
				System.out.println(string);
				count++;// 找到一种情况
			}
		} else {

			if (0 < restShop /* 还能遇到店 */ /* && restWine != 0/* 是否需要保证没有提前把酒喝完？ 实测对最终统计结果没有影响 */) {
				sb.append("a");
				dfs(restWine + restWine/* 加一倍 */, restShop - 1, restFllower);
				sb.deleteCharAt(sb.length() - 1);// 回溯
			}
			if (0 < restFllower /* 还能遇到花 */ && restWine != 0/* 是否需要保证还有酒? */) {
				sb.append("b");
				dfs(restWine - 1/* 喝一斗 */, restShop, restFllower - 1);
				sb.deleteCharAt(sb.length() - 1);// 回溯
			}
		}
	}
}
