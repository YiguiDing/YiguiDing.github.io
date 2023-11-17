package 创建型.工厂模式.抽象工厂模式;

public class Test {
	public static void main(String[] args) {
		
		// StyleFactory factory = new AmericanStyleFactory();// 美式风格
		StyleFactory factory = new ItalyStyleFactory();// 意式风格


		Coffee coffee = factory.createCoffee();
		Dessert dessert = factory.createDessert();

		System.out.println(coffee.getName());
		dessert.show();

	}
}

// 抽象甜品类
abstract class Dessert {
	abstract void show();
}

// 抽象咖啡类
abstract class Coffee {
	abstract String getName();
}

// 抽象工厂
interface StyleFactory {
	Dessert createDessert();

	Coffee createCoffee();
}

// 美式风格工厂，生产 抹茶慕斯 和 美式咖啡
class AmericanStyleFactory implements StyleFactory {

	@Override
	public Dessert createDessert() {
		return new MatchaMousse();
	}

	@Override
	public Coffee createCoffee() {
		return new AmericaCoffee();
	}
}

// 意式风格工厂，生产 拿铁咖啡 和 提拉米苏
class ItalyStyleFactory implements StyleFactory {

	@Override
	public Dessert createDessert() {
		return new Tiramisu();
	}

	@Override
	public Coffee createCoffee() {
		return new LatteCoffee();
	}

}

// 美式咖啡
class AmericaCoffee extends Coffee {

	@Override
	String getName() {
		return "美式咖啡";
	}

}

// 抹茶慕斯
class MatchaMousse extends Dessert {

	@Override
	void show() {
		System.out.println("抹茶慕斯");
	}

}

// 拿铁咖啡
class LatteCoffee extends Coffee {

	@Override
	String getName() {
		return "拿铁咖啡";
	}

}

// 提拉米苏
class Tiramisu extends Dessert {

	@Override
	void show() {
		System.out.println("提拉米苏");
	}

}