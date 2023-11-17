package _02_基础算法._01_模拟._04_玩具谜题;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int M = sc.nextInt();
        int[] direction = new int[N];
        String[] names = new String[N];
        for (int i = 0; i < N; i++) {
            direction[i] = sc.nextInt() == 0 ? 1 : -1;// 朝内为1，朝外为-1
            names[i] = sc.next();
        }
        int pos = 0;
        for (int i = 0; i < M; i++) {
            int right = sc.nextInt() == 1 ? 1 : -1;// 右手边为1 左手边为-1
            int cnt = sc.nextInt();
            // 从当前位置偏移多少位置，根据图来看，小人面朝内（+1）且往右手（+1）方向数一个位置（+1）,就是下一个位置。，就是 +1 x +1 x +1;
            int offset = direction[pos] * right * cnt;
            pos += offset;
            pos %= direction.length;
            if (pos < 0) {
                pos = direction.length + pos;
            }
        }
        System.out.println(names[pos]);
    }
}
