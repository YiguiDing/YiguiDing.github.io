package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _09_差分_矩阵的差分 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int M = sc.nextInt();
        int T = sc.nextInt();
        int[][] matrix = new int[N + 1][M + 1];
        for (int row = 1; row <= N; row++) {
            for (int col = 1; col <= M; col++)
                matrix[row][col] = sc.nextInt();
        }
        DifferMatrix differ = new DifferMatrix(matrix);
        while (T-- != 0) {
            int y1 = sc.nextInt();
            int x1 = sc.nextInt();
            int y2 = sc.nextInt();
            int x2 = sc.nextInt();
            int num = sc.nextInt();
            differ.insert(y1, x1, y2, x2, num); // 在某区域插入x
        }
        int[][] preFixSum = differ.PrefixMatrix().preFixSum;// 获取原数组,获取到的会比原长度多1
        for (int row = 1; row <= N; row++) {
            for (int col = 1; col <= M; col++)
                System.out.printf("%d ",preFixSum[row][col]);
            System.out.println("");
        }
    }

    static class DifferMatrix {
        int[][] differMatrix;

        DifferMatrix() {
        };

        DifferMatrix(int[][] prefixMatrix) {
            load(prefixMatrix);
        }

        void load(int[][] prefixMatrix) {
            differMatrix = new int[prefixMatrix.length + 1][prefixMatrix[0].length + 1];// 差分数组的长度要比原数组多1
            for (int row = 1; row < prefixMatrix.length; row++) {
                for (int col = 1; col < prefixMatrix[row].length; col++) {
                    insert(row, col, row, col, prefixMatrix[row][col]); // 使用原数组构建差分数组。
                }
            }
        }

        void insert(int row1, int col1, int row2, int col2, int num) {
            differMatrix[row1][col1] += num;// 需要画图才能明白
            differMatrix[row2 + 1][col1] -= num;
            differMatrix[row1][col2 + 1] -= num;
            differMatrix[row2 + 1][col2 + 1] += num;// 被减了两次，所有要加上。
        }

        PrefixMatrix PrefixMatrix() {
            return new PrefixMatrix(this.differMatrix);
        }
    }

    static class PrefixMatrix {
        int[][] preFixSum;

        PrefixMatrix() {
        };

        PrefixMatrix(int[][] matrix) {
            this.load(matrix);
        }

        void load(int[][] matrix) {// 求前缀和
            preFixSum = new int[matrix.length][matrix[0].length];
            for (int row = 1; row < matrix.length; row++) { // 以Index==1为起点
                for (int col = 1; col < matrix[0].length; col++) { // 以Index==1为起点
                    preFixSum[row][col] = (preFixSum[row - 1][col]
                            + preFixSum[row][col - 1]
                            - preFixSum[row - 1][col - 1]
                            + matrix[row][col]);
                }
            }
        }

        int getSum(int row1, int col1, int row2, int col2) {// 算子矩阵的和
            return (preFixSum[row2][col2]
                    - preFixSum[row2][col1 - 1]
                    - preFixSum[row1 - 1][col2]
                    + preFixSum[row1 - 1][col1 - 1]);
        }
    }
}
