package _01_入门阶段._04_函数_递归及递推._03_P1464_Function;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a, b, c;
        while (true) {
            a = sc.nextLong();
            b = sc.nextLong();
            c = sc.nextLong();
            if (a == -1 && b == -1 && c == -1) {
                break;
            }
            // 100分通过测试的写法 最后一个测试点可以通过 消耗：799ms/118.28MB
            System.out.println("w(" + a+ ", "+ b+", "+c +") = "+ w(a, b, c));

            // 不知道为什么，这样写最后一个测试点无法通过，提示超时 消耗：1.20s/120.30MB
            // System.out.printf("w(%d, %d, %d) = %d%n", a, b, c, w(a, b, c));
        }
        sc.close();
    }

    static long[][][] cache = new long[21][21][21];
    static boolean[][][] computed = new boolean[21][21][21];

    static long w(long a, long b, long c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return 1;
        }
        if (a > 20 || b > 20 | c > 20) {
            return w(20, 20, 20);
        }
        if (computed[(int) a][(int) b][(int) c]) {
            return cache[(int) a][(int) b][(int) c];
        }
        long res;
        if (a < b && b < c) {
            res = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
        } else {
            res = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
        }
        cache[(int) a][(int) b][(int) c] = res;
        computed[(int) a][(int) b][(int) c] = true;
        return res;
    }
}