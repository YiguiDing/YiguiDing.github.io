public class _01_简单循环改递归 {

	public static void main(String[] args) {
		System.out.println("-----f0-----");
		f0();
		System.out.println("-----f1-----");
		f1(0);
		System.out.println("-----f2-----");
		f2(0);
		System.out.println("-----f3-----");
		f3(0, 9);
		System.out.println("-----f4-----");
		f4(9);
	}

	// for循环 打印输出 0~9
	static void f0() {
		for (int i = 0; i <= 9; i++) {
			System.out.println(i);
		}
	}

	// 写法1
	static void f1(int i) {
		if (i > 9)
			return;
		System.out.println(i);
		f1(i + 1);
	}

	// 写法2
	static void f2(int i) {
		if (0 <= i && i <= 9) {
			System.out.println(i);
			f2(i + 1);
		}
	}

	// 写法3：添加参数
	static void f3(int begin, int end) {
		if (begin > end)
			return;
		System.out.println(begin);
		f3(begin + 1, end);
	}

	// 写法4
	static void f4(int k) {
		if (k > 0)
			f4(k - 1);
		System.out.println(k);
	}
	// 写法N
	// .....
}