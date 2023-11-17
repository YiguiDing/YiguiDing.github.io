package _02_基础算法._02_排序算法._05_P1309_瑞士轮_暴力模拟;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int R = sc.nextInt();
        int Q = sc.nextInt();

        Item[] items = new Item[N * 2];
        for (int idx = 0; idx < items.length; idx++) {
            items[idx] = new Item(idx + 1, sc.nextInt(), 0);
        }
        for (int idx = 0; idx < items.length; idx++) {
            items[idx].tough = sc.nextInt();
        }

        // 先按id升序，再按分数降序
        // Arrays.sort(items, (o1, o2) -> Integer.compare(o1.id, o2.id));
        // Arrays.sort(items, (o1, o2) -> -Integer.compare(o1.score, o2.score));

        for (int t = 0; t < R; t++) {
            for (int j = 0; j < items.length - 1; j += 2) {
                if (items[j].tough > items[j + 1].tough) {
                    items[j].score += 1;
                    continue;
                }
                if (items[j].tough < items[j + 1].tough) {
                    items[j + 1].score += 1;
                    continue;
                }
            }
            Arrays.sort(items, (o1, o2) -> Integer.compare(o1.id, o2.id));
            Arrays.sort(items, (o1, o2) -> -Integer.compare(o1.score, o2.score));
        }
        System.out.println(items[Q - 1].id);
    }
}

class Item {
    int id, score, tough;

    public Item(int id, int score, int tough) {
        this.id = id;
        this.score = score;
        this.tough = tough;
    }

}