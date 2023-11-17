import java.util.Arrays;

public class KMP算法实现 {
	public static void main(String[] args) {
		testNext();
		testKMP();
	}

	public static void testNext() {
		int[] next = getNextArray(new int[] { 1, 2, 3, 1, 2, 3, 4, 5 });
		System.out.println(Arrays.toString(next));
	}

	public static void testKMP() {
		System.out.println(KMP_getIndexOf("123456789", "456"));
		System.out.println(KMP_getIndexOf("12312345", "1234"));
		System.out.println(KMP_getIndexOf("123k123m123k123mb", "123k123mb"));
	}

	static int KMP_getIndexOf(String str1, String str2) {
		if (str2.length() > str1.length())
			return -1;

		char[] s1 = str1.toCharArray();
		char[] s2 = str2.toCharArray();
		int[] next = getNextArray(s2);

		int i = 0;
		int j = 0;

		while (i < s1.length && j < s2.length) {
			if (s1[i] == s2[j]) {
				i++;
				j++;
			} else if (next[j] != -1) {
				j = next[j];
			} else {
				i++;
			}
		}
		return j == s2.length ? i - j : -1;
	}
	
	// 递推方式计算next数组
	static int[] getNextArray(char[] array) {
		if (array.length == 1) {
			return new int[] { -1 };
		} else if (array.length == 2) {
			return new int[] { -1, 0 };
		}
		int[] next = new int[array.length];

		next[0] = -1;// 按定义，不存在，人为定义为-1
		next[1] = 0;// 按定义为0

		for (int idx = 2; idx < next.length; idx++) {
			for (int preIdx = next[idx - 1]; 0 <= preIdx; preIdx = next[preIdx]) {
				if (array[preIdx] == array[idx - 1]) {
					next[idx] = preIdx + 1;
					break;
				}
			}
		}
		return next;
	}
}
