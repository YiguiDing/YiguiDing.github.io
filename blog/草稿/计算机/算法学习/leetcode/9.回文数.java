/*
 * @lc app=leetcode.cn id=9 lang=java
 *
 * [9] 回文数
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 例如，121 是回文，而 123 不是。
 */

// @lc code=start
class Solution {
	// 方法1：字符比较
	// public boolean isPalindrome(int x) {
	// if (x < 0)
	// return false;
	// else if (x == 0)
	// return true;
	// // StringBuilder sb = new StringBuilder(x + ""); // 8ms
	// String sb = x + "";// 6ms
	// for (int i = 0, j = sb.length() - 1; i < j; i++, j--) {
	// if (sb.charAt(i) != sb.charAt(j))
	// return false;
	// }
	// return true;
	// }

	// 方法2：数值计算
	public boolean isPalindrome(int x) {
		if (x < 0 || (x % 10 == 0 && x != 0))
			return false;
		else if (x == 0)
			return true;

		int reserved = 0;
		while (x > reserved) {// 5ms
			reserved = reserved * 10 + x % 10;
			x /= 10;
		}
		return reserved == x || reserved / 10 == x;
	}
}
// @lc code=end
