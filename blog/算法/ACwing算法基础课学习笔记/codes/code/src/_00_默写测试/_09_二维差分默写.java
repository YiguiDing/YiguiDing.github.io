package _00_默写测试;

/*
    输入
    3 4 3
    1 2 2 1
    3 2 2 1
    1 1 1 1
    1 1 2 2 1
    1 3 2 3 2
    3 1 3 4 1
    输出
    2 3 4 1
    4 3 4 1
    2 2 2 2
 */

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _09_二维差分默写 {
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
        int[][] result = differ.toPreFixMatrix().preFix;// 获取原数组,获取到的会比原长度多1
        for (int row = 1; row <= N; row++) {
            for (int col = 1; col <= M; col++)
                System.out.printf("%d ",result[row][col]);
            System.out.println("");
        }
    }
    static class DifferMatrix {
        int[][] differ;

        DifferMatrix() {
        }

        DifferMatrix(int[][] data) {
            load(data);
        }

        void load(int[][] data) {
            differ = new int[data.length + 1][data[0].length + 1];
            for (int row = 1; row < data.length; row++) {
                for (int col = 1; col < data[row].length; col++) {
                    insert(row, col, row, col, data[row][col]);
                }
            }
        }

        public void insert(int row1, int col1, int row2, int col2, int val) {
            differ[row1][col1] += val;
            differ[row1][col2 + 1] -= val;
            differ[row2 + 1][col1] -= val;
            differ[row2 + 1][col2 + 1] += val;
        }
        PreFixMatrix toPreFixMatrix(){
            return new PreFixMatrix(differ);
        }
    }

    static class PreFixMatrix {
        int[][] preFix;

        PreFixMatrix(){}
        
        PreFixMatrix(int[][] data){
            load(data);
        }

        public void load(int[][] data) {
            preFix = new int[data.length][data[0].length];
            for (int row = 1; row < data.length; row++) {
                for (int col = 1; col < data[row].length; col++) {
                    preFix[row][col] = preFix[row][col - 1] +
                            preFix[row - 1][col] -
                            preFix[row - 1][col - 1] +
                            data[row][col];
                }
            }
        }

        public int getSum(int row1, int col1, int row2, int col2) {
            return (preFix[row2][col2] +
                    preFix[row2][col1 - 1] +
                    preFix[row1 - 1][row2] -
                    preFix[row1 - 1][col1 - 1]);
        }
    }
}
