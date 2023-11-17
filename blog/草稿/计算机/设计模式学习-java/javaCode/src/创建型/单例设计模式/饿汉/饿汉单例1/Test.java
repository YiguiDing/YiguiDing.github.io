package 创建型.单例设计模式.饿汉.饿汉单例1;

public class Test {
	public static void main(String[] args) {
		Demo demo = Demo.getInstance();
		System.out.println(demo);
	}
}

class Demo {
	private Demo() {
		// 私有化构造函数,外界使用new直接创建对象就会报错
	}

	// 内部能访问私有化后的构造函数,所以此处能够实例化。
	// 静态成员变量意味着其会在类加载阶段被初始化
	private static Demo instanceHunger = new Demo();

	// 对外暴露一个获取实例对象的接口
	public static Demo getInstance() {
		return instanceHunger;
	}
}
