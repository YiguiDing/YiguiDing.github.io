
/*
 * @lc app=leetcode.cn id=5 lang=java
 *
 * [5] 最长回文子串
 */

// @lc code=start
class Solution {
	// Accepted
	// 141/141 cases passed (114 ms)
	// Your runtime beats 42.93 % of java submissions
	// Your memory usage beats 27.16 % of java submissions (44.4 MB)
	// 动态规划解法，效率不如中心扩散
	public String longestPalindrome(String s) {
		char[] str = s.toCharArray();
		int maxlength = 0;
		int startFrom = 0;
		boolean[][] dp = new boolean[str.length][str.length]; // dp[0][5]=false 表示 s[0] ~ s[5] 不是回文
		for (int len = 1; len <= str.length; len++) {// 枚举子串长度
			for (int left = 0, right = left + len - 1; // 初始化
					left < str.length && right < str.length; // 结束条件
					left++, right = left + len - 1// 移动至下一个left并重新计算right
					) {
				// 单字符是一个回文 "a" "b" "c"
				if (left == right) {
					dp[left][right] = true;
				}
				// 双字符是一个回文 "aa" "bb" "cc"
				else if (right - left == 1 && str[left] == str[right]) {
					dp[left][right] = true;
				}
				// s是一个回文 则： '?' + s + '?' 也是一个回文
				else if (dp[left + 1][right - 1] && str[left] == str[right]) {
					dp[left][right] = true;
				}
				// 否则不是一个回文
				else {
					dp[left][right] = false;
				}
				// 记录最长回文的位置
				if (dp[left][right] && len > maxlength) {
					maxlength = len;
					startFrom = left;
				}
			}
		}
		return s.substring(startFrom, startFrom + maxlength);
	}
}
// @lc code=end
