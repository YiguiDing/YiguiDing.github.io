package _01_入门阶段._01_从零开始.P1307数字反转;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean sign = n < 0 ? true : false;
        n = n < 0 ? -n : n;
        StringBuilder sb = new StringBuilder();
        sb.append((n + ""));
        Integer k = Integer.valueOf(sb.reverse().toString());
        k = sign ? -k : k;
        System.out.println(k);
    }
}
