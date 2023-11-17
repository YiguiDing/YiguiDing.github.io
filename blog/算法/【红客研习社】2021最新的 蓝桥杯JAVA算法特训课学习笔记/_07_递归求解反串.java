public class _07_递归求解反串 {
	public static void main(String[] args) {
		System.out.println(reverse("123456789"));
	}
	static String reverse(String str) {
		if (str == null || str.length() <= 1)
			return str;// 长度为0或1的反串为自身
		else
			return reverse(str.substring(1)) + str.charAt(0);
	}
}
