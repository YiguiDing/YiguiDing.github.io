package _设计原则.开闭原则;

public class Test {
	public static void main(String[] args) {
		SouGouInput souGouInput = new SouGouInput();
		souGouInput.display();

		souGouInput.setSkin(new MySkin());// 修改皮肤
		souGouInput.display();
	}
}

// 抽象皮肤类
abstract class Skin {
	abstract void display();
}

// 默认皮肤
class DefaultSkin extends Skin {
	@Override
	void display() {
		System.out.println("默认皮肤");
	}
}

// 带有默认皮肤的输入法
class SouGouInput {
	private Skin skin = new DefaultSkin();

	public void setSkin(Skin skin) {
		this.skin = skin;
	}

	void display() {
		this.skin.display();
	}
}

// 用户自定义皮肤
class MySkin extends Skin {
	@Override
	void display() {
		System.out.println("扩展的自定义皮肤");
	}
}
