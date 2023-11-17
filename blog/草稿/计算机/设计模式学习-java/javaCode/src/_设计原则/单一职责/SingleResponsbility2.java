package _设计原则.单一职责;

public class SingleResponsbility2 {
	public static void main(String[] args) {
		new VehicleRoad().run("小汽车");
		new VehicleAir().run("飞机");
		new VehicleSea().run("轮船");
	}
}

class VehicleRoad {
	void run(String name) {
		System.out.println(name + "在地面上跑...");
	}
}

class VehicleAir {
	void run(String name) {
		System.out.println(name + "在天上飞...");
	}
}

class VehicleSea {
	void run(String name) {
		System.out.println(name + "在水里游...");
	}
}