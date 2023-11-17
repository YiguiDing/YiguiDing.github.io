package _03_4957_飞机降落;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Main_错_贪心尝试 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            Item[] items = new Item[N];
            for (int i = 0; i < N; i++) {
                items[i] = new Item(sc.nextInt(), sc.nextInt(), sc.nextInt());
            }
            // 根据最晚降落时间排序,确定降落次序
            Arrays.sort(items, (o1, o2) -> Integer.compare(o1.T + o1.D + o1.L, o2.T + o2.D + o2.L));
            boolean res = true;
            int preLandTime = items[0].T + items[0].L;// 第一架飞机在到达后立即开始降落
            for (int i = 1; i < N; i++) {
                if (items[i].T <= preLandTime && // 当前飞机在前一架飞机降落前到来
                        preLandTime <= items[i].T + items[i].D // 当前飞机在油量耗尽前，前一架飞机降落
                ) {
                    preLandTime = items[i].T + (preLandTime - items[i].T/* 盘旋时间 */) + items[i].L;
                } else {
                    res = false;
                    break;
                }
            }
            System.out.println(res?"YES":"NO");
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