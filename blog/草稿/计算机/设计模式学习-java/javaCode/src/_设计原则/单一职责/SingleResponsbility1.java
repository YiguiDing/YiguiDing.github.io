package _设计原则.单一职责;

/**
 * Hello world!
 *
 */
public class SingleResponsbility1 {
	public static void main(String[] args) {
		Vehicle1 vehicle = new Vehicle1();
		vehicle.run("小汽车");
		vehicle.run("飞机");
		vehicle.run("轮船");
	}
}

class Vehicle1 {
	void run(String name) {
		System.out.println(name + "在地面上跑...");
	}
}