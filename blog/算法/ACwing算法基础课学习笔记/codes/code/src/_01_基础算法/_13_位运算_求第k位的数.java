package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Scanner;
import java.lang.StringBuilder;

public class _13_位运算_求第k位的数 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        while (true) {
            int num = sc.nextInt();
            System.out.println(getBits(num));
        }
    }

    static long getBit(long num, int k) {
        return (num >> k) & 1L;// 右移k位，然后与1
    }

    static String getBits(long num) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; num >= (1L << i); i++) // 注意这里的结束条件
            sb.append(getBit(num, i));
        sb.reverse();
        return sb.toString();
    }
}
