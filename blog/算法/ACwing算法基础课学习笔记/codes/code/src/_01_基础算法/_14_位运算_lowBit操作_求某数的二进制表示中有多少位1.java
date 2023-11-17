package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _14_位运算_lowBit操作_求某数的二进制表示中有多少位1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        while(N--!=0){
            int num = sc.nextInt();
            int ans = 0;
            while(num!=0) {
                num-=lowBit(num);
                ans++;
            };
            System.out.printf("%d ",ans);
        }
    }
    static int lowBit(int x) {
        return x & (~x + 1);
    }
}
