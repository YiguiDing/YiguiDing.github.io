public class _06_求两个串的最长公共子序列 {
	public static void main(String[] args) {
		System.out.println(f("abc", "xacbd"));
	}

	static int f(String s1, String s2) {
		if (s1.length() == 0 || s2.length() == 0)
			return 0;
		if (s1.charAt(0) == s2.charAt(0)) {// 比较第一个字符串，是否相等，相等则递归比较后序字符串
			return 1 + f(s1.substring(1), s2.substring(1));
		} else {// 不相等则递归比较
			return Math.max(
					f(s1, s2.substring(1)), // s1不动，比较s2的后序部分
					f(s1.substring(1), s2)// s2不动，比较s1的后序部分
			);
		}
	}
}
