package _02_基础算法._01_模拟._03_P1328_生活大爆炸版石头剪刀布;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    static int[][] map = new int[][] {
            { +0, -1, +1, +1, -1 },
            { +1, +0, -1, +1, -1 },
            { -1, +1, +0, -1, +1 },
            { -1, -1, +1, +0, +1 },
            { +1, +1, -1, -1, +0 }
    };

    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int Na = sc.nextInt();
        int Nb = sc.nextInt();
        int[] playerA = new int[Na];
        int[] playerB = new int[Nb];
        for (int i = 0; i < playerA.length; i++) {
            playerA[i] = sc.nextInt();
        }
        for (int i = 0; i < playerB.length; i++) {
            playerB[i] = sc.nextInt();
        }
        int t = 0, a = 0, b = 0;
        int scoreA = 0, scoreB = 0;
        while (t < N) {
            scoreA += map[playerA[a]][playerB[b]] == 1 ? 1 : 0;// map[i][j] 存的是i对j的结果
            scoreB += map[playerB[b]][playerA[a]] == 1 ? 1 : 0;
            a=++a%playerA.length;// 循环
            b=++b%playerB.length;// 循环
            t++;
        }
        System.out.println(scoreA + " " + scoreB);
    }
}
