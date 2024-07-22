import java.util.Arrays;

public class _03_搭积木 {
	public static void main(String[] args) {
		_03_搭积木 handle = new _03_搭积木();
		handle.process(0);
		System.out.println(handle.counter);
	}

	int counter = 0;
	int[] num = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

	void process(int step) {
		if (step == 10) {
			if (check(num)) {
				System.out.println(Arrays.toString(num));
				counter++;
			}
		} else {
			for (int i = step; i < num.length; i++) {
				exchange(num, step, i);
				process(step + 1);
				exchange(num, step, i);
			}
		}
	}

	boolean check(int[] arr) {

		// 题意中的金字塔结构
		// ------0
		// -----3 1
		// ----7 5 2
		// ---9 8 6 4

		// 抽象成二维数组：
		// 0
		// 3 1
		// 7 5 2
		// 9 8 6 4

		// 用一维数组对应： [0,3,1,7,5,2,9,8,6,4]

		for (int i = 0, increasement = 1; // 初始在0行，下一行的位置在+1 再下一行是+2
				increasement <= 3; // 最多加3
				i += increasement, increasement++// 定位到下一行
				) {
			for (int j = 0; // 0
					j < increasement; // incureasement 某种程度上代表了当前所在的行，
					j++) {
				int currentLine = i;
				int nextLine = i + increasement;// 下一行
				int n = arr[currentLine + j];
				int n1 = arr[nextLine + j];
				int n2 = arr[nextLine + j + 1];
				if (n < n1 && n < n2) {
					continue;
				} else {
					return false;
				}
			}
		}
		return true;
	}

	void exchange(int[] arr, int i, int j) {
		if (i != j) {
			arr[i] = arr[j] ^ arr[i];
			arr[j] = arr[j] ^ arr[i];
			arr[i] = arr[j] ^ arr[i];
		}
	}
}