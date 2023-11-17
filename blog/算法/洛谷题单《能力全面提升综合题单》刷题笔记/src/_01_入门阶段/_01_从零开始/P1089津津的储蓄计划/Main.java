package _01_入门阶段._01_从零开始.P1089津津的储蓄计划;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] expect = new int[12];// 每个月的预算
        for (int i = 0; i < expect.length; i++) {
            expect[i] = sc.nextInt();
        }
        int save = 0;
        int rest = 0;
        for (int i = 0; i < expect.length; i++) {
            rest += 300;
            if (rest - expect[i] >= 0/* 够用 */) {
                rest -= expect[i];// 花钱
                int k = rest / 100 * 100;// 计算要存的整百数
                rest -= k;// 存钱
                save += k;// 存钱
            } else {
                System.out.println(-(i + 1));// 钱不够用输出月数
                return;
            }
        }
        System.out.println(rest + save * 12 / 10/* x1.2 */);
    }
}
