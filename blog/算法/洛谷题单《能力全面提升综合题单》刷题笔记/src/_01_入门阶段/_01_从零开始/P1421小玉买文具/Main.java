package _01_入门阶段._01_从零开始.P1421小玉买文具;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = a*10+b;
        int pri = 19;
        System.out.println(sum/pri);
    }
}
