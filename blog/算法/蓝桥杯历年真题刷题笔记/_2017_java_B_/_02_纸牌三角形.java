public class _02_纸牌三角形 {
	public static void main(String[] args) {
		dfs(0);
		System.out.println(counter / (3 * 2));// 可旋转3次，镜像两次。
	}

	static int data[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
	static int counter = 0;

	static void dfs(int curStep) {
		if (curStep == data.length) {
			if (check()) {
				counter++;
			}
		} else {
			for (int i = curStep; i < data.length; i++) {
				swap(data, curStep, i);
				dfs(curStep + 1);
				swap(data, curStep, i);
			}
		}
	}

	static boolean check() {
		int i = data[0] + data[1] + data[2] + data[3];
		int j = data[3] + data[4] + data[5] + data[6];
		int k = data[6] + data[7] + data[8] + data[0];
		return i == j && j == k;
	}

	static void swap(int[] arr, int i, int j) {
		if (i != j) {
			arr[i] = arr[i] ^ arr[j];
			arr[j] = arr[i] ^ arr[j];
			arr[i] = arr[i] ^ arr[j];
		}
	}
}
