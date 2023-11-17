package _01_入门阶段._02_数组基础.P5594_XR_4模拟赛;

import java.util.Scanner;

public class Main {
    // 这题主要就是要从题目弯弯绕绕的表述中理清题目要计算的本质东西是什么
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();// n个队员
        int m = sc.nextInt();// m套题
        int k = sc.nextInt();// 接下来有k天
        int[] res = new int[k + 1];
        boolean[][] sign = new boolean[k + 1][m + 1];// 用来标记sign[j][k] 第j天第k套题是否已经安排了考场
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                // 意思就是：第i个人的第j套题在第t天做
                int t = sc.nextInt();
                if (sign[t][j] == false) {
                    sign[t][j] = true;
                    res[t]++;
                }
            }
        }
        for (int i = 1; i <= k; i++) {
            System.out.print(res[i]);
            if(i!=k) System.out.print(" ");
            else System.out.print("\n");
        }
    }
}
