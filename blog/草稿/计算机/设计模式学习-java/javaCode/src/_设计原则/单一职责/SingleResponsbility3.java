package _设计原则.单一职责;

public class SingleResponsbility3 {
	public static void main(String[] args) {
		Vehicle3 vehicle = new Vehicle3();
		vehicle.runRoad("小汽车");
		vehicle.runAir("飞机");
		vehicle.runSea("轮船");
	}
}

class Vehicle3 {
	void runRoad(String name) {
		System.out.println(name + "在地面上跑...");
	}

	void runAir(String name) {
		System.out.println(name + "在天上飞...");
	}

	void runSea(String name) {
		System.out.println(name + "在水里游...");
	}
}