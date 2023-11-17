package 左程云算法课初级班基础知识学习笔记._3_异或运算的概念性质作用和案例;

public class 例题1_1 {
	// - **题 1.1：**一个数组中有一个数出现了奇数次，其余 others 数所有数都只会出现偶数次，找出这一个数，要求：T(n)=O(n) S(n)=1
	public static void main(String[] args) {
		int[] Test = {0,0,1,1,2,2,3,3,5};
		printOne(Test);
	}
	static void printOne(int[] arr) {
		int T = 0;
		for (int i = 0; i < arr.length; i++) {
			T ^= arr[i];
		}
		System.out.println(T);
	}

}
