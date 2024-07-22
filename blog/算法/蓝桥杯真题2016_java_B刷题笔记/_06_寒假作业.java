import java.util.Arrays;

public class _06_寒假作业 {
	public static void main(String[] args) {
		_06_寒假作业 handle = new _06_寒假作业();
		handle.dfs(0, 0);
		System.out.println(handle.counter);

	}

	boolean[][] selected = new boolean[5][3];
	int[][] result = new int[5][3];
	int[][] data = {
			{ 1, 2, 3 },
			{ 4, 5, 6 },
			{ 7, 8, 9 },
			{ 10, 11, 12 },
			{ 13 },
	};
	int counter = 0;

	void dfs(int curI, int curJ) {
		if (curJ >= data[curI].length) {
			curI += 1;
			curJ = 0;
		}
		if (curI == 4) {
			if (check(result)) {
				counter++;
				System.out.printf("%d+%d=%d\n", result[0][0], result[0][1], result[0][2]);
				System.out.printf("%d-%d=%d\n", result[1][0], result[1][1], result[1][2]);
				System.out.printf("%d*%d=%d\n", result[2][0], result[2][1], result[2][2]);
				System.out.printf("%d/%d=%d\n", result[3][0], result[3][1], result[3][2]);
				System.out.println("");
				System.out.println(counter);
			}
		} else {
			for (int i = 0; i < data.length; i++) {
				for (int j = 0; j < data[i].length; j++) {
					if (!selected[i][j]) {
						selected[i][j] = true;
						result[curI][curJ] = data[i][j];
						dfs(curI, curJ + 1);
						selected[i][j] = false;
					}
				}
			}
		}
	}

	boolean check(int[][] matrix) {
		return (matrix[0][0] + matrix[0][1] == matrix[0][2] &&
				matrix[1][0] - matrix[1][1] == matrix[1][2] &&
				matrix[2][0] * matrix[2][1] == matrix[2][2] &&
				(matrix[3][1] != 0 &&
						matrix[3][0] % matrix[3][1] == 0 &&
						matrix[3][0] / matrix[3][1] == matrix[3][2]));
	}
}