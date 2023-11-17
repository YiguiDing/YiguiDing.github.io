package _02_数据结构;

import java.util.HashMap;
import java.util.Scanner;
import java.util.Stack;
/*
add 123
add 321
isSame 123 321
union 123 321
isSame 123 321
add 111
isSame 123 111
isSame 321 111
union 123 111
isSame 123 111
isSame 321 111

false
true
false
false
true
true
 */
public class _09_并查集 {
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
			fatherMap.put(findRoot(valToItemMap.get(val1)), findRoot(valToItemMap.get(val2)));
		}
		static class Wrapper<T> {
			T val;
			Wrapper(T v) {
				val = v;
			}
		}
	}
}
