package 左程云算法课初级班基础知识学习笔记._9_快速排序;

import java.util.Arrays;

public class Problem_1 {
	public static void main(String[] args) {
		int T[] = {9,8,7,6,5,4,3,2,1};
		test(T, 5);
		System.out.println(Arrays.toString(T));// [4, 3, 2, 1, 5, 9, 8, 7, 6]
	}
	// 荷兰国旗问题1
	public static void test(int arr[], int num) {
		int p = 0;
		for(int i = 0;i<arr.length;i++){
			if(arr[i]<num){
				exchange(arr, i,p++);
			}
		}
	}

	public static void exchange(int arr[], int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
