package 左程云算法课初级班基础知识学习笔记._11_堆;

import java.util.Arrays;
import java.util.PriorityQueue;

public class Test {
	public static void main(String[] args) {
		int test[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
		heapSort(test);
		System.out.println(Arrays.toString(test));
	}

	public static void heapSort(int arr[]) {
		// 优先级队列，就是堆，默认为小根堆
		PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
		for (int index = 0; index < arr.length; index++) {
			pq.add(arr[index]);
		}
		for (int index = 0; index < arr.length; index++) {
			arr[index] = (int) pq.poll();
		}
	}
}
