import java.util.HashMap;
import java.util.Map;

public class 利用HashTable设计RandomPool {
	public static void main(String[] args) {
		RandomPool rPool = new RandomPool();
		rPool.insert("123");
		rPool.insert("456");
		rPool.insert("789");
		rPool.insert("xxxxxx");
		rPool.insert("101112");
		rPool.delete("xxxxxx");
		for (int i = 0; i < 10; i++) {
			System.out.println(rPool.getRandom());
		}
	}
}

class RandomPool {
	// 记录元素个数
	int size = 0;
	// 为了删除一个元素方便
	Map<String, Integer> ValueToIdx = new HashMap<>();
	// 为了等概率随机获取一个元素方便
	Map<Integer, String> IdxToValue = new HashMap<>();

	void insert(String val) {
		if (ValueToIdx.containsKey(val)) {
			return;// 已经存在
		}
		ValueToIdx.put(val, size);
		IdxToValue.put(size, val);
		size++;
	}

	// 随机获取一个元素
	String getRandom() {
		if (size == 0)
			return null;
		// random-> [0,1)
		// size -> [0,length]
		// rdmIdx = random * size
		// rdmIdx-> [0,length-1]
		Integer rdmIdx = (int) (Math.random() * (double) size);
		return IdxToValue.get(rdmIdx);
	}

	void delete(String val) {
		if (!ValueToIdx.containsKey(val)) {
			return;// 不存在
		}
		swap(ValueToIdx.get(val), size - 1);// 把要删除的元素和最后一个交换
		size--;// size-- 即可
	}

	private void swap(Integer I, Integer J) {
		if (I != J &&
				0 <= I && I < size &&
				0 <= J && J < size) {
			String tempI = IdxToValue.get(I);
			String tempJ = IdxToValue.get(J);

			IdxToValue.put(I, tempJ);
			ValueToIdx.put(tempJ, I);

			IdxToValue.put(J, tempI);
			ValueToIdx.put(tempI, J);
		}
	}
}