package 创建型.单例设计模式.懒汉.懒汉单例3;

public class Test {
	public static void main(String[] args) {
		Demo demo1 = Demo.getInstance();
		Demo demo2 = Demo.getInstance();
		System.out.println(demo1 == demo2);
	}
}

class Demo {
	private Demo() {
		// 私有化构造函数,外界使用new直接创建对象就会报错
	}

	// 由于jvm在加载类的字节码时，不会递归加载其静态的内部类，
	// 仅当内部类被访问时，其才会被加载
	private static class InstanceHolder {
		// 私有、静态、最终....
		private static final Demo INSTANCE = new Demo();
	}

	public static Demo getInstance() {
		return InstanceHolder.INSTANCE;
	}
}
