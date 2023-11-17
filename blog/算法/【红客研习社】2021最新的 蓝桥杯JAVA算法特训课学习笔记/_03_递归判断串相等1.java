/**
 * _03_递归判断串相等
 */
public class _03_递归判断串相等1 {

	public static void main(String[] args) {
		System.out.println(isSameString("123", "123"));
		System.out.println(isSameString("123", "234"));
	}

	static boolean isSameString(String str1, String str2) {
		if (str1 == str2) {
			return true;
		} else if (str1.length() != str2.length()) {
			return false;
		} else {
			return isEqual(str1, str2, 0);
		}
	}

	static boolean isEqual(String s1,String s2,int idx){
		if(idx==s1.length())return true;
		if(s1.charAt(idx)!=s2.charAt(idx)){
			return false;
		}else{
			return isEqual(s1,s2,idx+1);
		}
	}
}