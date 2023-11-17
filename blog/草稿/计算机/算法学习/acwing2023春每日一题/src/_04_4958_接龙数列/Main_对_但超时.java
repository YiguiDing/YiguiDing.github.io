package _04_4958_接龙数列;

import java.io.BufferedInputStream;
import java.util.HashSet;
import java.util.Scanner;

public class Main_对_但超时 {
    private static int N;
    private static Item[] items;
    private static boolean[] computed;
    private static Integer[] cache;
    private static HashSet<Item>[] startWith = new HashSet[10];
    static {
        for (int i = 0; i < 10; i++) {
            startWith[i] = new HashSet<>();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        N = sc.nextInt();
        items = new Item[N];
        computed = new boolean[N];
        cache = new Integer[N];

        for (int idx = 0; idx < N; idx++) {
            items[idx] = new Item(sc.nextInt());
            startWith[items[idx].front].add(items[idx]);
        }
        int maxLen = 0;
        for (int idx = 0; idx < N; idx++) {
            maxLen = Math.max(maxLen, dfs(idx));
        }
        System.out.println(N - maxLen);
    }

    static int dfs(int curIdx) {
        if (curIdx == N - 1/* 最后一个数本身就能构成一个接龙数列，长度为1 */)
            return 1;
        if (computed[curIdx]/* 缓存 */)
            return cache[curIdx];
        int maxLen = 0;
        for (int nextIdx = curIdx + 1; nextIdx < N; nextIdx++) {
            if (startWith[items[curIdx].ended].contains(items[nextIdx])/* 当前数的结尾是下一个数的开头 */)
                maxLen = Math.max(maxLen, dfs(nextIdx));
        }
        computed[curIdx] = true;// 缓存
        return cache[curIdx] = 1 + maxLen;// 自己本身就是一个
    }
}

class Item {
    int front, ended;

    public Item(int num) {
        this.front = getLeftFirstNum(num);
        this.ended = num % 10;
    }

    static int getLeftFirstNum(int num) {
        while (num / 10 > 0) {
            num /= 10;
        }
        return num;
    }
}