package 创建型.单例设计模式.懒汉.懒汉单例1;

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

	private static Demo instance;

	// 由于存在线程安全问题，所以需要使用synchronized关键字来解决，保证多个线程对该函数的调用是依次的、同步的
	synchronized public static Demo getInstance() {
		if (instance == null)// 仅在第一次调用获取实例方法时创建实例对象
			instance = new Demo();
		return instance;
	}
}
