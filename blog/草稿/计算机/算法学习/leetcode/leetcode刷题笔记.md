---
date: 2023-04-04 13:25:00
title: leetcode刷题笔记
cover: ./cover/default_cover.jpg
tag: [leetcode,JAVA,算法,刷题笔记]
category: 算法
# ---article: false--- # 在主页中隐藏
---



# leetcode刷题笔记

## 数组

### _1_两数之和

```java
import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=1 lang=java
 *
 * [1] 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

// @lc code=start
class Solution {
 public int[] twoSum(int[] nums, int target) {
  // 最直观的方法是两层for循环嵌套，时间复杂度O(n^2) 耗时56ms
  // 实际应该使用hashMap,时间复杂度O(n),耗时1ms
  // 因为a+b=target 那么当遍历数组到a时，程序关心的问题就是
  // 是否数组中存在存在这个数b？,而 b= target - a;
  // 所以只需要在遍历的过程中把value:index的键值对存放在hashmap中就好了
  Map<Integer, Integer> valueToIndexMap = new HashMap<Integer, Integer>();
  Integer j = 0;
  for (int i = 0; i < nums.length; i++) {
   j = valueToIndexMap.get(target - nums[i]); // 如果target-nums[i]这个数存在将返回index
   if (j != null) {
    return new int[] { j, i };
   }
   valueToIndexMap.put(nums[i], i); // 把value 和 index 存进去
  }
  return null;
 }
}
// @lc code=end
```
