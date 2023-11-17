/*
 * @lc app=leetcode.cn id=5 lang=java
 *
 * [5] 最长回文子串
 */

// @lc code=start
class Solution {
	// Accepted
	// 141/141 cases passed (14 ms)
	// Your runtime beats 90.12 % of java submissions
	// Your memory usage beats 98.45 % of java submissions (40.9 MB)
	// 暴力解法：中心扩散
	private int beginIndex = 0;
	private int maxlength = 0;

	public String longestPalindrome(String s) {
		int length = s.length();
		if (length <= 1)
			return s;

		for (int i = 0; i < length - 1; i++) {
			Test(s, i, i);
			Test(s, i, i + 1);
		}
		return s.substring(beginIndex, beginIndex + maxlength);
	}

	public void Test(String s, int left, int right) {
		int length = 0;
		while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
			left--;
			right++;
		}
		length = right - left - 1;
		left += 1;
		if (length > maxlength) {
			maxlength = length;
			beginIndex = left;
		}
	}
	// 算法错误
	// public String longestPalindrome(String s) {
	// // 基本情况：单字回文，任何单字符都是一个回文 "a" "b" "c"
	// // 基本情况：双字回文，任何相同双字符都是一个回文 "aa" "bb" "cc"
	// // 基本情况：三字回文，任何单字符+两相同双字符都是一个回文 "?"+"x"+"?"
	// // 推广：s是上述任何一种回文 则 "?"+s+"?" 也是一个回文
	// // 遍历s

	// // 依次判断
	// // 判断 s[i]+ 以s[i+1]开头的回文 + s[i+前者的length] 是否为回文
	// // 判断 s[i]+s[i+1]是否为回文
	// // 判断 s[i] 是否为回文
	// // ---------------

	// int[] map = new int[s.length()];// 用来保存回文长度
	// map[0] = 1;
	// int maxSubStrIndex = 0; // 最长回文开始位置
	// int maxSubStrLength = 1; // 题目中给出了，s的长度最小为1，初始的最长回文长度就是1
	// for (int i = 1; i < s.length(); i++) {
	// int subStrLength = map[i - 1];// 以s[i-1]结束的回文的长度length
	// int startFrom;
	// // 判断是否是一个格式为： s[i-length-1] + 以s[i-1]结束的回文 + s[i] 的回文
	// // 即，只需要判断 s[i-length-1] == s[i]
	// if (i - subStrLength - 1 >= 0 && s.charAt(i - subStrLength - 1) ==
	// s.charAt(i)) {
	// map[i] = subStrLength + 2;
	// startFrom = i - subStrLength - 1;
	// }
	// // 判断是否是一个格式为 s[i-2] + s[i-1] + s[i] 的三字回文
	// else if (i - 2 >= 0 && s.charAt(i - 2) == s.charAt(i)) {
	// map[i] = 3;
	// startFrom = i - 2;
	// }
	// // 判断 s[i-1] + s[i] 是否为一个双字回文
	// else if (i - 1 >= 0 && s.charAt(i - 1) == s.charAt(i)) {
	// map[i] = 2;
	// startFrom = i - 1;
	// }
	// // 否则为单字回文
	// else {
	// map[i] = 1;
	// startFrom = i;
	// }
	// if (map[i] > maxSubStrLength) {
	// maxSubStrIndex = startFrom;
	// maxSubStrLength = map[i];// 保存最大长度
	// }
	// }
	// return s.subSequence(maxSubStrIndex, maxSubStrIndex +
	// maxSubStrLength).toString();
	// }
}
// @lc code=end
