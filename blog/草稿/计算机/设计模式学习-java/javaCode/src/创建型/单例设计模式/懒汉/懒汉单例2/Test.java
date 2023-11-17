package 创建型.单例设计模式.懒汉.懒汉单例2;

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

	// 由于线程安全问题只存在于写操作上，对整个函数加线程锁是有性能问题的，
	// 这将导致多个线程同时调用该函数时，将被强制依次访问
	// 解决的方法是双重检查锁, 仅在写操作上加锁
	synchronized public static Demo getInstance() {
		if (instance == null) {
			synchronized (instance) {// 锁住instance对象
				if (instance == null)// 重新进行判断
					instance = new Demo();// 赋值
			}
		}
		return instance;
	}
}
