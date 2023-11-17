package _03_4957_飞机降落;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main_对_dfs暴力搜索 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            Item[] items = new Item[N];

            for (int i = 0; i < N; i++) {
                items[i] = new Item(sc.nextInt(), sc.nextInt(), sc.nextInt());
            }
            System.out.println(dfs(items, 0, 0)?"YES":"NO");
        }
    }

    static boolean dfs(Item[] items, int curIdx, int lastTime/*前一架飞机降落结束时间 */) {
        if (curIdx == items.length) {
            return true;
        } else {
            for (int idx = curIdx; idx < items.length; idx++) {
                swap(items, curIdx, idx);
                if (lastTime <= items[curIdx].T + items[curIdx].D && /*当前飞机到来时间+最长盘旋时间=最晚开始降落时间>=前一架飞机降落结束 */
                        dfs(items, curIdx + 1, Math.max(lastTime, items[curIdx].T)/*当前开始降落时间 */ + items[curIdx].L/*降落耗时 */)) {
                    return true;
                }
                swap(items, curIdx, idx);
            }
        }
        return false;
    }

    private static void swap(Item[] items, int idxA, int idxB) {
        if (idxA != idxB) {
            Item temp = items[idxA];
            items[idxA] = items[idxB];
            items[idxB] = temp;
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