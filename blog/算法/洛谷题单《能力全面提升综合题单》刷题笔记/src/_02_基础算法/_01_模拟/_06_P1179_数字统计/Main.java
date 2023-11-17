package _02_基础算法._01_模拟._06_P1179_数字统计;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int start = sc.nextInt();
        int ended = sc.nextInt();
        int cnt = 0;
        for (int i = start; i <= ended; i++) {
            cnt += counter(i + "");
        }
        System.out.println(cnt);
    }

    static int counter(String str) {
        int res = 0;
        for (char ch : str.toCharArray()) {
            if (ch == '2')
                res++;
        }
        return res;
    }
}