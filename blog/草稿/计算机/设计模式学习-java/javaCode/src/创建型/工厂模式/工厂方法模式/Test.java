package 创建型.工厂模式.工厂方法模式;

public class Test {
	public static void main(String[] args) {
		Store store = new Store();

		store.setCoffeeFactory(new AmericaCoffeeFactory());
		Coffee coffee1 = store.orderCoffee();
		store.setCoffeeFactory(new CappuccinoCoffeeFactory());
		Coffee coffee2 = store.orderCoffee();

		System.out.println(coffee1.getName());
		System.out.println(coffee2.getName());
	}
}

// 抽象产品
abstract class Coffee {
	abstract String getName();

	Coffee addSuger() {
		System.out.println("加糖");
		return this;
	};

	Coffee addMilk() {
		System.out.println("加牛奶");
		return this;
	};
}

// 抽象工厂
abstract class CoffeeFactory {
	abstract Coffee getCoffee();
}

// 实体咖啡美式咖啡
class AmericaCoffee extends Coffee {
	@Override
	String getName() {
		return "美式咖啡";
	}
}

// 实体咖啡美式咖啡的工厂
class AmericaCoffeeFactory extends CoffeeFactory {

	@Override
	Coffee getCoffee() {
		return new AmericaCoffee().addMilk().addSuger();
	}

}

// 实体咖啡 卡布奇诺咖啡
class CappuccinoCoffee extends Coffee {
	@Override
	String getName() {
		return "卡布奇诺咖啡";
	}
}

// 实体咖啡卡布奇诺咖啡的工厂
class CappuccinoCoffeeFactory extends CoffeeFactory {

	@Override
	Coffee getCoffee() {
		return new CappuccinoCoffee().addMilk();
	}
}

class Store {
	CoffeeFactory coffeeFactory;

	Coffee orderCoffee() {
		return coffeeFactory.getCoffee();
	}

	public void setCoffeeFactory(CoffeeFactory coffeeFactory) {
		this.coffeeFactory = coffeeFactory;
	}
}
