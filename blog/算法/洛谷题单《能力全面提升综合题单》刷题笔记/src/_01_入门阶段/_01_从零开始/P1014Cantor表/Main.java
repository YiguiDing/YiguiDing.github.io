package _01_入门阶段._01_从零开始.P1014Cantor表;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int n = 1;
        int x = 1;
        int y = 1;
        int t = 1;
        while (n < N) {
            if (t % 2 == 0) {
                y++;// 向下移动 ⬇
                n++;
                while (y != 1 && n < N) {
                    x += 1;// 对角线移动↗
                    y -= 1;
                    n++;
                }
            } else {
                x++;// 向上移动 ↑
                n++;
                while (x != 1 && n < N) {
                    x -= 1;// 对角线移动↙
                    y += 1;
                    n++;
                }
            }
            t++;
        }
        System.out.println(y + "/" + x);
    }
}
