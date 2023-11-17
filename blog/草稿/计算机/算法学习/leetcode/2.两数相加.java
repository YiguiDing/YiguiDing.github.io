/*
 * @lc app=leetcode.cn id=2 lang=java
 *
 * [2] 两数相加
 * 
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */
// @lc code=start
// Definition for singly-linked list.
// class ListNode {
// 	int val;
// 	ListNode next;
// 	ListNode() {
// 	}
// 	ListNode(int val) {
// 		this.val = val;
// 	}
// 	ListNode(int val, ListNode next) {
// 		this.val = val;
// 		this.next = next;
// 	}
// }

class Solution {
	public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
		ListNode head = new ListNode();// 用来当做头指针
		ListNode p = head;// 移动的指针
		int k = 0;// 保存一位和
		while (l1 != null || l2 != null || k != 0) {
			if (l1 != null) {
				k += l1.val;
				l1 = l1.next;
			}
			if (l2 != null) {
				k += l2.val;
				l2 = l2.next;
			}
			p.next = new ListNode(k % 10);// k%10就是当前位结果
			p = p.next;// 移动指针
			k /= 10;// k/10 得到下一位的进位
		}
		return head.next;
	}
}
// @lc code=end
