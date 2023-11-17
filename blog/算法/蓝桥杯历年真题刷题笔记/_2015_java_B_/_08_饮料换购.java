package 蓝桥杯历年真题刷题笔记._2015_java_B_;

public class _08_饮料换购 {
	public static void main(String[] args) {
		System.out.println(process(101));
	}

	static int process(int n) {
		int k = 0;
		while (n >= 3) {
			k += 3;// 喝三瓶
			n -= 3;// 少三瓶
			n += 1;// 多一瓶
		}
		k+=n;
		return k;
	}
}