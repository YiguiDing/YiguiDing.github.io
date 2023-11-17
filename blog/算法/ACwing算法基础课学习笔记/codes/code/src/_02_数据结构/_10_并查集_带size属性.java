package _02_数据结构;

import java.util.HashMap;
import java.util.Scanner;
import java.util.Stack;
/*
add 123
size 123
add 321
size 321
isSame 123 321
union 123 321
size 123
size 321
isSame 123 321
add 111
size 111
isSame 123 111
isSame 321 111
union 123 111
size 123
size 321
size 111
isSame 123 111
isSame 321 111

1
1
false
2
2
true
1
false
false
3
3
3
true
true
 */
public class _10_并查集_带size属性 {
	public static void main(String[] args) {
		UnionSet<String> unionSet = new UnionSet<>();
		Scanner  scanner = new Scanner(System.in);
		while(scanner.hasNextLine()) {
			String[] in = scanner.nextLine().split(" ");
			String op = in[0];
			String s1,s2;
			switch(op) {
			case "add":
				s1 = in[1];
				unionSet.add(s1);
				break;
			case "union":
				s1 = in[1];
				s2 = in[2];
				unionSet.union(s1, s2);
				break;
			case "isSame":
				s1 = in[1];
				s2 = in[2];
				System.out.println(unionSet.isSameSet(s1, s2));
				break;
			case "size":
				s1 = in[1];
				System.out.println(unionSet.getSize(s1));
				break;
			}
		}
	}
	static class UnionSet<T> {
		HashMap<T, Wrapper<T>> valToItemMap = new HashMap<>();
		HashMap<Wrapper<T>, Wrapper<T>> fatherMap = new HashMap<>();

		public UnionSet() {
		}

		UnionSet(T[] arr) {
			load(arr);
		}

		void load(T[] arr) {
			for (int i = 0; i < arr.length; i++) {
				add(arr[i]);
			}
		}

		void add(T val) {
			if (valToItemMap.containsKey(val))  return;
			Wrapper<T> item = new Wrapper<>(val);
			valToItemMap.put(val, item);
			fatherMap.put(item, item);
		}

		Wrapper<T> findRoot(Wrapper<T> element) {
			Wrapper<T> current = element;
			Stack<Wrapper<T>> path = new Stack<>();
			while (fatherMap.get(current) != current) {
				path.push(current);
				current = fatherMap.get(current);
			}
//			路径压缩优化
			while (!path.isEmpty()) {
				fatherMap.put(path.pop(), current);
			}
			return current;
		}
		boolean contain(T val) {
			return valToItemMap.containsKey(val);
		}
		boolean isSameSet(T val1, T val2) {
			if(!contain(val1)||!contain(val2)) return false;
			return findRoot(valToItemMap.get(val1)) == findRoot(valToItemMap.get(val2));
		}
		
		void union(T val1, T val2) {
			if(!contain(val1)||!contain(val2)) return;
			Wrapper<T> r1 = findRoot(valToItemMap.get(val1));
			Wrapper<T> r2 = findRoot(valToItemMap.get(val2));
			if(r1==r2) return;
			r2.size+=r1.size;
			fatherMap.put(r1, r2);
		}
		int getSize(T val) {
			if(!contain(val)) return 0;
			return findRoot(valToItemMap.get(val)).size;
		}
		static class Wrapper<T> {
			T val;
			int size = 1;
			Wrapper(T v) {
				val = v;
			}
		}
	}
}
