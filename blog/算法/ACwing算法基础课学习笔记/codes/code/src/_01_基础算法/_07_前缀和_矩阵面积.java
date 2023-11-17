package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _07_前缀和_矩阵面积 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();// 矩阵行数
        int M = sc.nextInt();// 矩阵列数
        int T = sc.nextInt();// 询问次数
        int[][] matrix = new int[N + 1][M + 1];
        PrefixMatrix PrefixMatrixSum = new PrefixMatrix();
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
}

class PrefixMatrix {
    int[][] preFixSum;
    PrefixMatrix() {};
    PrefixMatrix(int[][] matrix) {
        this.load(matrix);
    }
    void load(int[][] matrix) {// 求前缀和
        preFixSum = new int[matrix.length][matrix[0].length];
        for (int row = 1; row < matrix.length; row++) { // 以Index==1为起点
            for (int col = 1; col < matrix[0].length; col++) { // 以Index==1为起点
                preFixSum[row][col] = preFixSum[row - 1][col] + preFixSum[row][col - 1] - preFixSum[row - 1][col - 1]
                        + matrix[row][col];
            }
        }
    }
    int getSum(int row1, int col1, int row2, int col2) {// 算子矩阵的和
        return preFixSum[row2][col2] - preFixSum[row2][col1-1] - preFixSum[row1-1][col2] + preFixSum[row1-1][col1-1];
    }
}