public class _12_谨慎使用浮点数 {
	public static void main(String[] args) {
		System.out.println(0.1 + 0.2);// 0.30000000000000004
		System.out.println(0.3);// 0.3
		System.out.println(0.1 + 0.2 == 0.3);// false
	}
}
