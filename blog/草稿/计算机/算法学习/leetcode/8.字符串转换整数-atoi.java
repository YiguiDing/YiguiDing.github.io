/*
 * @lc app=leetcode.cn id=8 lang=java
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
class Solution {
	// Accepted
	// 1083/1083 cases passed (1 ms)
	// Your runtime beats 100 % of java submissions
	// Your memory usage beats 88.08 % of java submissions (41.1 MB)
	public int myAtoi(String s) {
		char str[] = s.toCharArray();
		int i = 0;
		double result = 0;
		int sign = 1;
		// 跳过空格
		while (i < str.length && str[i] == ' ')
			i++;
		// 仅处理一个正负号
		if (i < str.length && str[i] == '+') {
			sign = 1;
			i++;
		} else if (i < str.length && str[i] == '-') {
			sign = -1;
			i++;
		}
		// 处理剩余连续的数字部分
		while (i < str.length && Character.isDigit(str[i])) {
			result = result * 10 + (str[i] - '0');
			i++;
		}
		// 符号位
		result *= sign;
		if (result <= Integer.MIN_VALUE)
			return Integer.MIN_VALUE;
		else if (Integer.MAX_VALUE <= result)
			return Integer.MAX_VALUE;
		else
			return (int) result;
	}
}
// @lc code=end
