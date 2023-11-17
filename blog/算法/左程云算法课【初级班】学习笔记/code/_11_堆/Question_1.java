package 左程云算法课初级班基础知识学习笔记._11_堆;

import java.util.PriorityQueue;

public class Question_1 {
	public static void main(String[] args) {

	}

	public static void sort(int arr[],int k){
		PriorityQueue<Integer> pq = new  PriorityQueue<>();
		int i = 0;
		while(i < Math.min(arr.length, k+1)){
			pq.add(arr[i++]);
		}
		int j = 0;
		while (j < arr.length) {
			arr[j++] = pq.poll();
			if(i<arr.length)
				pq.add(arr[i++]);
		}
	}
}
