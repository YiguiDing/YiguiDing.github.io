package 左程云算法课初级班基础知识学习笔记._6_对数器;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		Test();
	}
	static void Test() {
		int times = 1000;
		int MaxLength = 20;
		int valueFrom = -100;
		int valueTo = 100;
		do {
			// 生成一个样本
			int arrA[] = generateRandomArray(MaxLength, valueFrom, valueTo);
			// 拷贝样本
			int arrB[] = arrayCopy(arrA);
			insertSort(arrA);// 插入排序
			bubbleSort(arrB);// 冒泡排序
			// 比较结果一致性,不一致就报错
			if (!compare(arrA, arrB)) {
				System.out.println("测试不通过，两函数处理结果不一致");
				System.out.println(Arrays.toString(arrA));
				System.out.println(Arrays.toString(arrB));
				return;
			}
			times--;// 进入下一次测试
		} while (times >= 0);
		// 测试通过
		System.out.println("测试通过，两函数处理结果一致");
	}

	// 数组拷贝
	static int[] arrayCopy(int arr[]) {
		int array[] = new int[arr.length];
		for (int i = 0; i < array.length; i++) {
			array[i] = arr[i];
		}
		return array;
	}

	// 生成随机数组
	static int[] generateRandomArray(int MaxLength, int valueFrom, int valueTo) {
		int array[] = new int[RandomRange(0, MaxLength)];
		for (int i = 0; i < array.length; i++) {
			array[i] = RandomRange(valueFrom, valueTo);
		}
		return array;
	}

	// 生成随机数
	static int RandomRange(int from, int to) {
		return (int) (from + Math.random() * (to - from));
	}

	// 比较数组是否相同
	static boolean compare(int arrA[], int arrB[]) {
		if (arrA.length != arrB.length)
			return false;
		for (int i = 0; i < arrA.length; i++) {
			if (arrA[i] != arrB[i])
				return false;
		}
		return true;
	}

	// 插入排序
	static void insertSort(int arr[]) {
		for (int i = 0; i < arr.length; i++) {// 遍历n次
			for (int j = i; // j从i开始
					0 <= j - 1 && arr[j - 1] > arr[j]; // 同时判断是否到头和是否满足交换条件
					j--// 前移
					) {
				exchange(arr, j - 1, j);// 交换
			}
		}
	}

	// 冒泡排序
	static void bubbleSort(int arr[]) {
		if (arr == null || arr.length <= 1) {
			return;
		}
		// 循环n次
		for (int top = 0; top < arr.length; top++) {
			for (int i = arr.length - 1; i > top; i--) {
				if (arr[i - 1] > arr[i])// 比较两个数，如果第一数比第二个数大，交换
					exchange(arr, i - 1, i);
			}
		}
		return;
	}

	// 交换元素
	static void exchange(int arr[], int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}