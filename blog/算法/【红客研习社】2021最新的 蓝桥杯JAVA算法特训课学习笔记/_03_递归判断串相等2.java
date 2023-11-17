/**
 * _03_递归判断串相等
 */
public class _03_递归判断串相等2 {

	public static void main(String[] args) {
		System.out.println(isSameString("123", "123"));
		System.out.println(isSameString("123", "234"));
	}

	static boolean isSameString(String str1, String str2) {
		if (str1.length() != str2.length())
			return false;
		else if (str1.length() == 0)
			return true;
		else if (str1.charAt(0) != str2.charAt(0))
			return false;
		else
			return isSameString(str1.substring(1), str2.substring(1));
	}
}