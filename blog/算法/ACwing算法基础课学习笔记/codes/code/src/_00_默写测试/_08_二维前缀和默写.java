package _00_默写测试;

import java.io.BufferedInputStream;
import java.util.Scanner;
/*
    输入
    3 4 3
    1 7 2 4
    3 6 2 8
    2 1 2 3
    1 1 2 2
    2 1 3 4
    1 3 3 4
    输出
    17
    27
    21
 */
public class _08_二维前缀和默写 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();// 矩阵行数
        int M = sc.nextInt();// 矩阵列数
        int T = sc.nextInt();// 询问次数
        int[][] matrix = new int[N + 1][M + 1];
        PreFixMatrix PrefixMatrixSum = new PreFixMatrix();
        for (int row = 1; row < matrix.length; row++) { // 以Index==1为起点读取数据
            for (int col = 1; col < matrix[row].length; col++) { // 以Index==1为起点读取数据
                matrix[row][col] = sc.nextInt();
            }
        }
        PrefixMatrixSum.load(matrix);

        while (T-- != 0) {
            int x1 = sc.nextInt();
            int y1 = sc.nextInt();
            int x2 = sc.nextInt();
            int y2 = sc.nextInt();
            System.out.println(PrefixMatrixSum.getSum(x1,y1,x2,y2));
        }
    }

    static class PreFixMatrix {
        int[][] prefix;

        PreFixMatrix() {
        }

        PreFixMatrix(int[][] data) {
            load(data);
        }

        public void load(int[][] data) {
            prefix = new int[data.length + 1][data[0].length + 1];
            for (int row = 1; row < data.length; row++) {
                for (int col = 1; col < data[row].length; col++) {
                    prefix[row][col] = prefix[row - 1][col] +
                            prefix[row][col - 1] -
                            prefix[row - 1][col - 1] +
                            data[row][col];
                }
            }
        }

        public int getSum(int row1, int col1, int row2, int col2) {
            return (prefix[row2][col2] -
                    prefix[row2][col1 - 1] -
                    prefix[row1 - 1][col2] +
                    prefix[row1 - 1][col1 - 1]);
        }
    }
}
