public class _08_杨辉三角形 {
	public static void main(String[] args) {
		for (int row = 0; row <= 5; row++) {
			for (int col = 0; col <=row; col++) {
				System.out.print(f(row, col)+" ");
			}
			System.out.println("");
		}
	}

	static int f(int row, int col) {
		if (row == 0)// 处理所有第0行
			return 1;
		if (col == 0 || col == row)//处理所有第0列和对角线上的元素
			return 1;
		return f(row - 1, col) + f(row - 1, col - 1);//递归，当前元素是上一行的两个元素的和
	}
}
