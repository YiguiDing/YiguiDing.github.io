/*
 * @lc app=leetcode.cn id=7 lang=java
 *
 * [7] 整数反转
 */

// @lc code=start
class Solution {
	public int reverse(int x) {
		double result = 0;
		while (x != 0) {
			result = result * 10 + x % 10;
			x /= 10;
		}
		if (Integer.MIN_VALUE <= result && result <= Integer.MAX_VALUE) {
			return (int) result;
		} else {
			return 0;
		}
	}
}
// @lc code=end
