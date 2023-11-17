import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=3 lang=java
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
class Solution {
	public int lengthOfLongestSubstring(String str) {
		// 遍历一个字符串，每次将字符和位置下标用hashMap存储起来
		// 每次都将当前遍历到的字符放到hashmap中查找，如果不存在，
		// 则当前字符没有重复，如果存在，则将能获取到上一次该字符
		// 出现的位置，如果该位置是在当前所遍历的子串的开始位置之
		// 前，则忽略，否则，则表明当前所遍历的子串内有重复字符，
		// 那么就去遍历下一个子串，下一个子串的开始位置，就是查询
		// 到的坐标的下一位置，因为从这个位置开始到当前所遍历到的
		// 位置结束内的字符都是一定不重复的，算法时间复杂度为O(n)
		Map<Character, Integer> charToIndexMap = new HashMap<Character, Integer>();
		int startFrom = 0;
		int maxLength = 0;
		int currentSubStrLength = 0;
		for (int currentIndex = 0; currentIndex < str.length(); currentIndex++) {
			Character currentChar = str.charAt(currentIndex);
			Integer lastCharIndex = charToIndexMap.get(currentChar);
			if (lastCharIndex != null && startFrom <= lastCharIndex) {
				startFrom = lastCharIndex + 1;
				currentSubStrLength = currentIndex - startFrom + 1;
			} else
				currentSubStrLength++;
			if (currentSubStrLength > maxLength)
				maxLength = currentSubStrLength;
			charToIndexMap.put(currentChar, currentIndex);
		}
		return maxLength;
	}
}
// @lc code=end
