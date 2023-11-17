/*
 * @lc app=leetcode.cn id=6 lang=java
 *
 * [6] Z 字形变换
 */

// @lc code=start
class Solution {
	// Accepted
	// 1157/1157 cases passed (4 ms)
	// Your runtime beats 87.15 % of java submissions
	// Your memory usage beats 41.11 % of java submissions (42.2 MB)
	public String convert(String s, int numRows) {
		char[] ch = s.toCharArray();
		StringBuilder[] sb = new StringBuilder[numRows];
		for (int i = 0; i < sb.length; i++)
			sb[i] = new StringBuilder();
		int ch_i = 0;
		while (ch_i < ch.length) {
			for (int sb_i = 0; sb_i < sb.length && ch_i < ch.length; sb_i++, ch_i++)
				sb[sb_i].append(ch[ch_i]);
			for (int sb_i = sb.length - 2; sb_i >= 1 && ch_i < ch.length; sb_i--, ch_i++)
				sb[sb_i].append(ch[ch_i]);
		}
		for (int j = 1; j < sb.length; j++) {
			sb[0].append(sb[j]);
		}
		return sb[0].toString();
	}
}
// @lc code=end
