package 创建型.工厂模式.简单工厂模式;

public class Test {
	public static void main(String[] args) {
		Store store = new Store();

		Coffee coffee1 = store.orderCoffee("美式咖啡");
		Coffee coffee2 = store.orderCoffee("卡布奇诺咖啡");

		System.out.println(coffee1.getName());
		System.out.println(coffee2.getName());
	}
}

abstract class Coffee {
	abstract String getName();

	// 链式写法，返回值也可以为void
	abstract Coffee addSuger();

	abstract Coffee addMilk();
}

// 工厂模式的意义在于隐藏创建的细节(是否加糖，加奶)
class SimpleCoffeeFactory {
	// 该函数经static修饰后便称静态工厂模式
	public Coffee getCoffeeByName(String name) {
		if (name == null)
			throw new RuntimeException("咖啡名称不能为null");
		switch (name) {
			case "美式咖啡":
				return new AmericaCoffee().addSuger();// 美式咖啡加糖
			case "卡布奇诺咖啡":
				return new CappuccinoCoffee().addMilk();// 卡布奇诺加牛奶
			default:
				throw new RuntimeException("咖啡名称不存在");
		}
	}
}

class Store {
	Coffee orderCoffee(String name) {
		return new SimpleCoffeeFactory().getCoffeeByName(name);
	}
}

class AmericaCoffee extends Coffee {
	@Override
	String getName() {
		return "美式咖啡";
	}

	@Override
	Coffee addMilk() {
		System.out.println("加牛奶");
		return this;
	}

	@Override
	Coffee addSuger() {
		System.out.println("加糖");
		return this;
	}
}

class CappuccinoCoffee extends Coffee {
	@Override
	String getName() {
		return "卡布奇诺咖啡";
	}

	@Override
	Coffee addMilk() {
		System.out.println("加牛奶");
		return this;
	}

	@Override
	Coffee addSuger() {
		System.out.println("加糖");
		return this;
	}

}