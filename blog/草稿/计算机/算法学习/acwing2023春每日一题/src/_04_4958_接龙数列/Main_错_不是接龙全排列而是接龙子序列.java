package _04_4958_接龙数列;

import java.io.BufferedInputStream;
import java.util.HashSet;
import java.util.Scanner;

public class Main_错_不是接龙全排列而是接龙子序列 {
    static int N;
    static Item[] items;
    static boolean[] used;
    static HashSet<Item>[] endwith = new HashSet[10];
    static HashSet<Item>[] startWith = new HashSet[10];
    static {
        for (int i = 0; i < 10; i++) {
            endwith[i] = new HashSet<>();
            startWith[i] = new HashSet<>();
        }
    }

    public static void main(String[] args) {
        // 搞错了，这里弄成求最长接龙数列了，实际应该是求最长接龙子序列
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        N = sc.nextInt();
        items = new Item[N];
        used = new boolean[N];

        for (int idx = 0; idx < N; idx++) {
            items[idx] = new Item(idx, sc.nextInt());
            endwith[items[idx].ended].add(items[idx]);
            startWith[items[idx].front].add(items[idx]);
        }
        dfs(0, null);
        System.out.println(maxLen);
    }

    static int maxLen = 0;

    private static void dfs(int curLen, Item preItem) {
        maxLen = Math.max(maxLen, curLen);
        if (preItem == null) {
            for (int i = 0; i < N; i++) {
                used[i] = true;
                dfs(curLen + 1, items[i]);
                used[i] = false;
            }
        } else {
            for (Item item : startWith[preItem.ended]) {
                if (!used[item.idx]) {
                    used[item.idx] = true;
                    dfs(curLen + 1, item);
                    used[item.idx] = false;
                }
            }
        }
    }
    static class Item {
        int idx;
        int front, ended;
    
        public Item(int idx, int num) {
            this.idx = idx;
            this.front = getMaxBit(num);
            this.ended = num % 10;
        }
    
        static int getMaxBit(int num) {
            while (num / 10 != 0) {
                num /= 10;
            }
            return num;
        }
    }
}
