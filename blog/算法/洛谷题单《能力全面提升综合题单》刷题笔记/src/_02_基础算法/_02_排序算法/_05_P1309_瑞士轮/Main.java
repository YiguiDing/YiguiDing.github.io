package _02_基础算法._02_排序算法._05_P1309_瑞士轮;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));

        String[] line0 = sc.nextLine().split(" ");
        String[] line1 = sc.nextLine().split(" ");
        String[] line2 = sc.nextLine().split(" ");

        int N = Integer.parseInt(line0[0]);
        int R = Integer.parseInt(line0[1]);
        int Q = Integer.parseInt(line0[2]);

        Item[] items = new Item[N * 2];
        Item[] winer = new Item[N];
        Item[] loser = new Item[N];

        int w_len = 0;
        int l_len = 0;
        int w = 0, l = 0, m = 0;

        for (int idx = 0; idx < items.length; idx++) {
            items[idx] = new Item(
                    idx + 1,
                    Integer.parseInt(line1[idx]),
                    Integer.parseInt(line2[idx]));
        }
        // new QuickSorter<Item>().quickSort(items);
        Arrays.sort(items);
        for (int t = 0; t < R; t++) {
            w_len = 0;
            l_len = 0;
            for (int n = 0; n < items.length - 1; n += 2) {
                if (items[n].tough > items[n + 1].tough) {
                    winer[w_len++] = items[n];
                    loser[l_len++] = items[n + 1];
                    items[n].score += 1;
                } else {
                    winer[w_len++] = items[n + 1];
                    loser[l_len++] = items[n];
                    items[n + 1].score += 1;
                }
            }
            // merge
            w = 0;
            l = 0;
            m = 0;
            while (w < w_len && l < l_len) {
                // if (winer[w].score > loser[l].score) {
                //     items[m++] = winer[w++];
                // } else if (winer[w].score < loser[l].score) {
                //     items[m++] = loser[l++];
                // } else {
                //     if (winer[w].id < loser[l].id) {
                //         items[m++] = winer[w++];
                //     } else {
                //         items[m++] = loser[l++];
                //     }
                // }
                if (winer[w].compareTo(loser[l]) < 0) {
                    items[m++] = winer[w++];
                } else {
                    items[m++] = loser[l++];
                }
            }
            while (w < w_len)
                items[m++] = winer[w++];
            while (l < l_len)
                items[m++] = loser[l++];
        }
        System.out.println(items[Q - 1].id);
    }
}

class QuickSorter<T extends Comparable<T>> {
    void quickSort(T[] items) {
        process(items, 0, items.length - 1);
    }

    void process(T[] items, int left, int right) {
        if (left < right) {
            T ref = items[(int) (left + Math.random() * (right - left))];
            int L = left, R = right;
            int cur = left;
            while (cur <= right && L <= R) {
                if (items[cur].compareTo(ref) < 0) {
                    swap(items, L++, cur++);
                } else {
                    swap(items, R--, cur);
                }
            }
            process(items, left, L - 1);
            process(items, R + 1, right);
        }
    }

    void swap(T[] items, int i, int j) {
        if (i != j) {
            T temp = items[j];
            items[j] = items[i];
            items[i] = temp;
        }
    }
}

class Item implements Comparable<Item> {
    int id, score, tough;

    public Item(int id, int score, int tough) {
        this.id = id;
        this.score = score;
        this.tough = tough;
    }

    @Override
    public int compareTo(Item other) {
        int dif = -(this.score - other.score);
        int res = dif != 0 ? dif : this.id - other.id;
        return res;
    }

    @Override
    public String toString() {
        return "Item [id=" + id + ", score=" + score + ", tough=" + tough + "]";
    }
}