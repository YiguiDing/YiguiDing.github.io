package 创建型.单例设计模式.通过序列化破坏单例模式;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Test {
	public static void main(String[] args) throws Exception {
		Demo demo1 = Demo.getInstance();
		Utils.ObjToFile(demo1);
		Demo demo2 = (Demo) Utils.FileToObj();
		System.out.println(demo1 == demo2); // false
	}
}

class Demo implements Serializable {
	private Demo() {
	};

	private static Demo instance = new Demo();

	public static Demo getInstance() {
		return instance;
	}
}

class Utils {
	static void ObjToFile(Object object) throws Exception {
		ObjectOutput objectOutput = new ObjectOutputStream(new FileOutputStream("./temp"));
		objectOutput.writeObject(object);
		objectOutput.close();
	}

	static Object FileToObj() throws Exception {
		ObjectInput objectInput = new ObjectInputStream(new FileInputStream("./temp"));
		Object result = objectInput.readObject();
		objectInput.close();
		return result;
	}
}