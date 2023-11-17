package _01_入门阶段._02_数组基础.P1047校门外的树;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int l = sc.nextInt(), m = sc.nextInt();
        // 长度为1的路可以种2棵树 ↑_↑
        // 长度为4的路可以种5棵树 ↑_↑_↑_↑_↑
        boolean[] road = new boolean[l + 1];
        for (int i = 0; i < m; i++) {
            int start = sc.nextInt();
            int end = sc.nextInt();
            for (int j = start; j <= end; j++) {
                road[j] = true;
            }
        }
        sc.close();
        int res = 0;
        for (int i = 0; i < road.length; i++) {
            res += road[i] ? 0 : 1;
        }
        System.out.println(res);
    }
}
