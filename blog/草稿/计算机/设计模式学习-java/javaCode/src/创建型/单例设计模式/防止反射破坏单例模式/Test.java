package 创建型.单例设计模式.防止反射破坏单例模式;

import java.lang.reflect.Constructor;


public class Test {
	public static void main(String[] args) throws Exception {
		Constructor constrator = Demo.class.getDeclaredConstructor();// 获取构造函数
		constrator.setAccessible(true);// 设置可访问性
		Demo demo1 = (Demo) constrator.newInstance();// 用构造函数创建对象
		Demo demo2 = (Demo) constrator.newInstance();// 用构造函数创建对象
		System.out.println(demo1 == demo2);// false
	}
}

class Demo {
	private static boolean first = false;

	private Demo() {
		if (!first)
			throw new RuntimeException("不能创建多个:" + Demo.class.toString());
		first = true;
	};

	private static Demo instance = new Demo();

	public static Demo getInstance() {
		return instance;
	}
}