package _03_4957_飞机降落;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Main_错2_贪心尝试 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            Item[] items = new Item[N];
            for (int i = 0; i < N; i++) {
                items[i] = new Item(sc.nextInt(), sc.nextInt(), sc.nextInt());
            }
            // 先根据到来时间排序
            // Arrays.sort(items, (o1, o2) -> Integer.compare(o1.T, o2.T));
            // 根据最晚降落时间排序,确定降落次序
            Arrays.sort(items, (o1, o2) -> Integer.compare(o1.T + o1.D + o1.L, o2.T + o2.D + o2.L));
            boolean res = true;
            int preLandTime = items[0].T + items[0].L;// 第一架飞机在到达后可以立即开始降落,不需要盘旋
            for (int i = 1; i < N; i++) {
                if (items[i].T <= preLandTime && // 当前飞机在前一架飞机降落前到来,则只能在先盘旋，等前一架飞机降落后才能降落
                    preLandTime - items[i].T <= items[i].D // 前一架飞机降落时间-当前飞机到达时间=需盘旋时间<=实际能够盘旋时间
                ) {
                    preLandTime = preLandTime + items[i].L;// 在前一架飞机降落后立即开始降落
                } else if (preLandTime <= items[i].T // 当前飞机在前一架飞机降落后才到来
                ) {
                    preLandTime = items[i].T + items[i].L;// 则该飞机可以立即降落，不需要盘旋
                } else {
                    res = false;
                    break;
                }
            }
            System.out.println(res ? "YES" : "NO");
        }
    }
}

class Item {
    public int T, D, L;

    public Item(int t, int d, int l) {
        T = t;
        D = d;
        L = l;
    }

}