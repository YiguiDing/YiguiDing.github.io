package _01_入门阶段._01_从零开始.P1980计数问题;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int x = sc.nextInt();
        sc.close();
        int[] cnt = new int[10];
        for (int i = 1; i <= n; i++) {
            int k = i;
            while (k != 0) {
                cnt[k % 10]++;
                k /= 10;
            }
        }
        System.out.println(cnt[x]);
    }
}
