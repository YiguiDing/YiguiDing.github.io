import java.util.Arrays;
import java.util.Scanner;

public class _09_交换瓶子 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		data = new int[N + 1];
		for (int i = 1; i <= N; i++) {
			data[i] = sc.nextInt();
		}
		sc.close();
		order();
		System.out.println(counter);
	}

	static int N;
	static int[] data;
	static int counter = 0;

	static void order() {
		for (int curIdx = 1; curIdx <= N; curIdx++) {
			if (data[curIdx] != curIdx) {
				int realIdx = findIndex(data, curIdx, curIdx);
				exchange(data, realIdx, curIdx);
				counter++;
			}
		}
	}

	// 从当前位置开始去搜索一个数的坐标
	static int findIndex(int[] arr, int from, int target) {
		for (int i = from; i < arr.length; i++) {
			if (arr[i] == target) {
				return i;
			}
		}
		return -1;
	}

	static void exchange(int[] arr, int i, int j) {
		if (i != j) {
			arr[i] = arr[i] ^ arr[j];
			arr[j] = arr[i] ^ arr[j];
			arr[i] = arr[i] ^ arr[j];
		}
	}
}
