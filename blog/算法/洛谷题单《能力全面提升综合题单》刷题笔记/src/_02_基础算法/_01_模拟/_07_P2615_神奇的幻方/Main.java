package _02_基础算法._01_模拟._07_P2615_神奇的幻方;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int[][] matrix = new int[N][N];
        int preX = N / 2;
        int preY = 0;
        int num = 1;
        matrix[preY][preX] = num++;
        while (num <= N * N) {
            if (preY == 0 && preX != N - 1) {
                matrix[preY = N - 1][preX = preX + 1] = num++;
                continue;
            }
            if (preX == N - 1 && preY != 0) {
                matrix[preY = preY - 1][preX = 0] = num++;
                continue;
            }
            if (preY == 0 && preX == N - 1) {
                matrix[preY = preY + 1][preX] = num++;
                continue;
            }
            if (preY != 0 && preX != N - 1) {
                if (matrix[preY - 1][preX + 1] == 0) {
                    matrix[preY = preY - 1][preX = preX + 1] = num++;
                } else {
                    matrix[preY = preY + 1][preX] = num++;
                }
            }
        }

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j]);
                if (j != matrix[i].length - 1) {
                    System.out.print(" ");
                } else {
                    System.out.print("\n");
                }
            }
        }
    }
}