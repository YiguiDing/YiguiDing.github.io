package 蓝桥杯历年真题刷题笔记._2014_java_B_;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class _07_扑克排序 {
	public static void main(String[] args) {
		f(arr, 0);
		List<String> list = new ArrayList<>();
		list.addAll(result_set);
		Collections.sort(list);// 排序后，第一个就是字典序最小的
		System.out.println(list);
		System.out.println(list.get(0));
		// 输出：
		// 2342A3A4
	}

	static char[] arr = { 'A', 'A', '2', '2', '3', '3', '4', '4' };
	static Set<String> result_set = new HashSet<>();

	static void f(char[] arr, int step) {
		if (step == arr.length) {
			String str = new String(arr);
			if (check_v2(str)) {
				result_set.add(str);
			}
		} else {
			for (int i = step; i < arr.length; i++) {
				exchange(arr, step, i);
				f(arr, step + 1);
				exchange(arr, step, i);
			}
		}
	}

	private static boolean check_v2(String str) {
		// 应该直接使用API提高做题效率
		return (str.lastIndexOf('A') - str.indexOf('A') + 1 == 2 + 1 &&
				str.lastIndexOf('2') - str.indexOf('2') + 1 == 2 + 2 &&
				str.lastIndexOf('3') - str.indexOf('3') + 1 == 2 + 3 &&
				str.lastIndexOf('4') - str.indexOf('4') + 1 == 2 + 4);
	}

	static void exchange(char[] arr, int i, int j) {
		if (i != j) {
			arr[i] = (char) (arr[i] ^ arr[j]);
			arr[j] = (char) (arr[i] ^ arr[j]);
			arr[i] = (char) (arr[i] ^ arr[j]);
		}
	}
}