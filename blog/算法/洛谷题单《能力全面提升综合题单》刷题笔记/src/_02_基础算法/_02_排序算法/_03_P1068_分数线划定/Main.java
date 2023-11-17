package _02_基础算法._02_排序算法._03_P1068_分数线划定;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int M = sc.nextInt();
        Item[] list = new Item[N];
        for (int i = 0; i < N; i++) {
            list[i] = new Item(sc.nextInt(), sc.nextInt());
        }
        // java默认排序算法具有有稳定性，先按id升序排序，再按分数升序排序即可
        Arrays.sort(list, (o1, o2) -> Integer.compare(o1.id, o2.id));
        Arrays.sort(list, (o1, o2) -> -Integer.compare(o1.score, o2.score));
        int k = (int) (M * 1.5);// 计算面试人数
        k = k >= N ? N : k;// 防止越界
        while (k < N/* 防止越界 */ && list[k - 1].score == list[k].score/* 同分判断 */)
            k++;// 跳过同分

        System.out.println(list[k - 1].score + " " + (k));
        for (int i = 0; i < k; i++) {
            System.out.println(list[i].id + " " + list[i].score);
        }
    }
}

class Item {
    int id, score;

    public Item(int id, int score) {
        this.id = id;
        this.score = score;
    }
}