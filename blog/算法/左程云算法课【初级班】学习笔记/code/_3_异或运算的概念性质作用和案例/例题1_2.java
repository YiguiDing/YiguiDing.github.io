package 左程云算法课初级班基础知识学习笔记._3_异或运算的概念性质作用和案例;

public class 例题1_2 {
	public static void main(String[] args) {
		int Test[] = { 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5 };
		printTwo(Test);
	}
	// **题 1.2：**一个数组中有两个数出现了奇数次，其余 others 数所有数都只会出现偶数次，找出这两个数，要求：T(n)=O(n) S(n)=1
	static void printTwo(int arr[]) {
		int T = 0;
		for (int i = 0; i < arr.length; i++) {
			T ^= arr[i];
		}
		// 此时T=A^B
		int differBit = 1;
		while ((differBit & T) == 0) {// 找到从右往左数第一个为`1`的位
			differBit = differBit << 1;
		}
		// int differBit = T&(~T+1); // 提取T中的最后一位1
		// 此时differBit的大概形式为 00000100
		int K = 0;
		for (int i = 0; i < arr.length; i++) {
			if ((differBit & arr[i]) == 0)
				K ^= arr[i];
		} // 此时K中就是A

		T ^= K;// 此时T中就是B
		System.out.println(T);
		System.out.println(K);
	}
}
