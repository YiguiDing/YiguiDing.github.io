package _01_入门阶段._04_函数_递归及递推._03_P5534_XR_3_等差数列;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a1 = sc.nextLong();
        long a2 = sc.nextLong();
        long n = sc.nextLong();
        sc.close();
        long d = a2 - a1;// 计算公差
        long a_n = a1 + (n - 1) * d;// 计算第n项
        long sum_n = (a1 + a_n) * n / 2;// 等差数列求和公式
        System.out.println(sum_n);
    }
}
