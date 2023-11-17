import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

public class 并查集的实现 {
	public static void main(String[] args) {
		List<Integer> list = new ArrayList<>();
		for (int i = 1; i <= 5; i++) {
			list.add(i);
		}
		UnionFindSet unionFindSet = new UnionFindSet(list);
		System.out.println("初始状态:\n" + unionFindSet.toString());
		System.out.println("查询1、2是否在同一集合:\n" + unionFindSet.isSameSet(1, 2));// 判断是否在同一个集合
		System.out.println("查询后状态:\n" + unionFindSet.toString());
		System.out.println("执行合并集合1、2操作");
		unionFindSet.union(1, 2);
		System.out.println("集合合并后状态：\n" + unionFindSet.toString());
		System.out.println("执行合并集合2、3操作");
		unionFindSet.union(2, 3);
		System.out.println("集合合并后状态：\n" + unionFindSet.toString());
		System.out.println("执行合并集合3、4操作");
		unionFindSet.union(3, 4);
		System.out.println("集合合并后状态：\n" + unionFindSet.toString());
		System.out.println("查询1、2是否在同一集合(查询操作同时会将集合扁平化):\n" + unionFindSet.isSameSet(1, 2));// 判断是否在同一个集合
		System.out.println("查询后状态:\n" + unionFindSet.toString());
	}
}

// 并查集：一种合并、查询操作极快的集合数据结构
class UnionFindSet<T> {
	/**
	 * Element
	 */
	public class Element<T> {
		T val;

		public Element(T val) {
			this.val = val;
		}

		@Override
		public String toString() {
			return "{" + val.toString() + "}";
		}
	}

	Map<T, Element<T>> elementMap = new HashMap<>();
	Map<Element<T>, Element<T>> fatherMap = new HashMap<>();
	Map<Element<T>, Integer> sizeMap = new HashMap<>();

	UnionFindSet(Iterable<T> items) {
		for (T item : items) {
			Element<T> element = new Element(item);
			elementMap.put(item, element);// item to element
			fatherMap.put(element, element);// 初始情况，父级是自己
			sizeMap.put(element, 1);// 初始size为1
		}
	}

	Element<T> findRoot(Element<T> current) {
		Stack<Element<T>> path = new Stack<>();
		Element<T> cur = current;
		Element<T> far = fatherMap.get(cur);
		while (cur != far) {// 父节点是自己的节点就是根节点
			path.push(cur);
			cur = far;
			far = fatherMap.get(cur);
		}
		// return far;

		// 扁平化，沿途经过的所有节点全部挂到根节点上，优化下一次的查找效率。
		while (!path.isEmpty()) {
			fatherMap.put(path.pop(), far);
		}
		return far;// 返回根节点
	}

	boolean isSameSet(T v1, T v2) {
		// 判断两元素是否在同一个集合
		return elementMap.containsKey(v1) && elementMap.containsKey(v2)
				&& findRoot(elementMap.get(v1)) == findRoot(elementMap.get(v2));
	}

	void union(T v1, T v2) {
		if (elementMap.containsKey(v1) && elementMap.containsKey(v2)) {
			Element<T> r1 = findRoot(elementMap.get(v1));
			Element<T> r2 = findRoot(elementMap.get(v2));
			if (r1 != r2) {
				Element<T> big = sizeMap.get(r1) > sizeMap.get(r2) ? r1 : r2;
				Element<T> sml = big == r1 ? r2 : r1;
				fatherMap.put(sml, big);// 把小的树 放到大的树上
				sizeMap.put(big, sizeMap.get(big) + sizeMap.get(sml));// 累加集合大小
				sizeMap.remove(sml);// 移除小树的大小记录。
			}
		}
	}

	@Override
	public String toString() {
		return "UnionFindSet [elementMap=" + elementMap + ", fatherMap=" + fatherMap + ", sizeMap=" + sizeMap + "]";
	}
}