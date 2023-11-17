package _02_基础算法._01_模拟._02_P1067_多项式输出;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        int[] factors = new int[N + 1];
        for (int i = 0; i < factors.length; i++) {
            factors[i] = sc.nextInt();
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0, exp = N; i < factors.length; i++, exp--) {
            Integer num = factors[i];
            if (num != 0) {
                // +
                if (i != 0 && num > 0) {
                    sb.append("+");
                }
                // -
                if (num < 0) {
                    sb.append("-");
                }
                // num
                if (exp != 0 && Math.abs(num) != 1 || exp == 0) {
                    sb.append(Math.abs(num));
                }
                // x^?
                if (exp == 0) {
                    ;
                } else if (exp == 1)
                    sb.append('x');
                else {
                    sb.append("x^" + exp);
                }
            }
        }
        if (sb.length() == 0) {
            sb.append("0");
        }

        System.out.print(sb.toString());
    }
}
