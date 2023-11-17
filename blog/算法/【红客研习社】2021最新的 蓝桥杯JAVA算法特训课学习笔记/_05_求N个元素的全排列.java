import java.util.Arrays;
// abc的全排列 
// 每一个元素都可以放到开始的位置，剩余的位置放剩余的元素，
// 对于剩余的位置，也是在剩余的元素中的每一个元素，都可以放到剩余位置的第一个位置
// 第一位 	第二位 	第三位
// 	 a		b		c	 
// 	 a		c		b	 
// 	 b		a		c
// 	 b		c		a
// 	 c		a		b
// 	 c		b		a
public class _05_求N个元素的全排列 {
	public static void main(String[] args) {
		f(new int[] { 0, 1, 2 }, 0);
	}

	static void f(int[] datas, int current) {
		if (current == datas.length) {// 写length-1也可以
			System.out.println(Arrays.toString(datas));
		} else {
			for (int i = current; i < datas.length; i++) {
				swap(datas, current, i);// 试探
				f(datas, current + 1);// 将当前局面交给下一次递归
				swap(datas, current, i);// 回溯
			}
		}
	}

	static void swap(int[] datas, int i, int j) {
		if (i != j) {
			datas[i] = datas[i] ^ datas[j];
			datas[j] = datas[i] ^ datas[j];
			datas[i] = datas[i] ^ datas[j];
		}
	}
}
