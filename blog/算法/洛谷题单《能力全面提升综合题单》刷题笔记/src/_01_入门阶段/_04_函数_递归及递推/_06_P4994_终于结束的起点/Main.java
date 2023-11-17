package _01_入门阶段._04_函数_递归及递推._06_P4994_终于结束的起点;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Mod = sc.nextInt();
        FibGen gen = new FibGen();
        gen.gen();
        int preN = gen.idx;
        int preF = gen.fib;
        while (true) {
            gen.gen();
            int curN = gen.idx;
            int curF = gen.fib;
            if (preF % Mod == 0 && curF % Mod == 1) {
                break;
            }
            preF = curF;
            preN = curN;
        }
        System.out.println(preN);
    }

    static int Mod;

    static class FibGen {
        // fib: +5 -3 +2 -1 +1 0 1 1 2
        // idx: -5 -4 -3 -2 -1 0 1 2 3
        int a = -1;
        int b = 1;
        int fib = a + b;
        int idx = 0;

        public void gen() {
            a = b;
            b = fib;
            fib = a + b;
            fib %= Mod;// 直接取余
            idx++;
        }
    }
}
