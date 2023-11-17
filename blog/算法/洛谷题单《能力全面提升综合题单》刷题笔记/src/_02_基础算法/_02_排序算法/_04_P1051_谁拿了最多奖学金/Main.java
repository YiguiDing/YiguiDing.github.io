package _02_基础算法._02_排序算法._04_P1051_谁拿了最多奖学金;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        sc.nextLine();
        Item[] items = new Item[N];
        int sum = 0;
        for (int i = 0; i < items.length; i++) {
            int val = 0;
            String[] infos = sc.nextLine().split(" ");
            String name = infos[0];
            int qi_mo = Integer.valueOf(infos[1]);
            int class_score = Integer.valueOf(infos[2]);
            boolean isXue = "Y".equals(infos[3]) ? true : false;
            boolean isXi = "Y".equals(infos[4]) ? true : false;
            int articles_cnt = Integer.valueOf(infos[5]);

            if (qi_mo > 80 && articles_cnt >= 1)
                val += 8000;
            if (qi_mo > 85 && class_score > 80)
                val += 4000;
            if (qi_mo > 90)
                val += 2000;
            if (isXi && qi_mo > 85)
                val += 1000;
            if (isXue && class_score > 80)
                val += 850;
            sum += val;
            items[i] = new Item(name, val);
        }
        Arrays.sort(items, (o1, o2) -> -Integer.compare(o1.val, o2.val));
        System.out.println(items[0].name);
        System.out.println(items[0].val);
        System.out.println(sum);
    }
}

class Item {
    String name;
    int val;

    public Item(String name, int val) {
        this.name = name;
        this.val = val;
    }
}