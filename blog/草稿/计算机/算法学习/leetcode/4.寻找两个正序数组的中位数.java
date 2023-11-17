/*
 * @lc app=leetcode.cn id=4 lang=java
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
class Solution {

	// 用时：1ms
	// 2094/2094 cases passed (1 ms)
	// Your runtime beats 100 % of java submissions
	// Your memory usage beats 26.35 % of java submissions (42.6 MB)
	// public double findMedianSortedArrays(int[] nums1, int[] nums2) {
	// int length = nums1.length + nums2.length;
	// int[] mix = new int[length];
	// int i = 0;
	// int j = 0;
	// int k = 0;
	// // 合并两有序数组(归并排序)，时间复杂度O(m+n)，显然不不符合O(log(m+n))的题目要求
	// while (i < length) {
	// if (j < nums1.length && k < nums2.length)
	// mix[i++] = nums1[j] < nums2[k] ? nums1[j++] : nums2[k++];
	// else if (j < nums1.length)
	// mix[i++] = nums1[j++];
	// else
	// mix[i++] = nums2[k++];
	// }
	// // length == 1 则中位数为 mix[1/2]
	// // length == 2 则中位数为 (mix[2/2]+mix[2/2-1])/2
	// // length == 3 则中位数为 mix[3/2]
	// // length == 4 则中位数为 (mix[4/2]+mix[4/2-1])/2
	// // length == 5 则中位数为 mix[5/2]
	// return length % 2 == 1 ? mix[length / 2] : (mix[length / 2] + mix[length / 2
	// - 1]) / 2.0;
	// }

	// 用时：1ms
	// 2094/2094 cases passed (1 ms)
	// Your runtime beats 100 % of java submissions
	// Your memory usage beats 94.29 % of java submissions (42.1 MB)
	public double findMedianSortedArrays(int[] nums1, int[] nums2) {
		int length = nums1.length + nums2.length;
		int[] mix = new int[length];
		int i = 0;
		int j = 0;
		int k = 0;
		// 合并两有序数组(归并排序)，
		// 实际上，计算中位数，只需要合并一半的数组，
		// 因为只需要保证能够访问到元素mix[length/2]
		// 所以循环结束条件改为 while(i <= length / 2)
		// 时间复杂度O((m+n)/2),仍然不符合题目要求 O(log(m+n))
		while (i <= length / 2) {
			if (j < nums1.length && k < nums2.length)
				mix[i++] = nums1[j] < nums2[k] ? nums1[j++] : nums2[k++];
			else if (j < nums1.length)
				mix[i++] = nums1[j++];
			else
				mix[i++] = nums2[k++];
		}
		// length == 1 则中位数为 mix[1/2]
		// length == 2 则中位数为 (mix[2/2]+mix[2/2-1])/2
		// length == 3 则中位数为 mix[3/2]
		// length == 4 则中位数为 (mix[4/2]+mix[4/2-1])/2
		// length == 5 则中位数为 mix[5/2]
		return length % 2 == 1 ? mix[length / 2] : (mix[length / 2] + mix[length / 2 - 1]) / 2.0;
	}
}
// @lc code=end
