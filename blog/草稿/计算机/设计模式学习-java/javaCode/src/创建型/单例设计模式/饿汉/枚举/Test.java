package 创建型.单例设计模式.饿汉.枚举;

public class Test {
	public static void main(String[] args) {
		Demo demo0 = Demo.getInstance();
		demo0.doSomeThing();

		Demo demo1 = Demo.getInstance().getSelf();
		Demo demo2 = Demo.getInstance().getSelf();
		System.out.println(demo1 == demo2);
	}
}

enum Demo {
	INSTANCE;
	// 静态方法
	public static Demo getInstance() {
		return INSTANCE;
	}

	// 成员方法，属于INSTANCE
	public void doSomeThing() {
		System.out.println("hello");
	}

	// 成员方法，属于INSTANCE
	public Demo getSelf() {
		return this;
	}
}