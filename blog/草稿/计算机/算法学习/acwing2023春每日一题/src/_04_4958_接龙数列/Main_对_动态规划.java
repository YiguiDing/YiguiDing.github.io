package _04_4958_接龙数列;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main_对_动态规划 {
    private static int N;
    private static int[] Len_PreEndWith;

    public static void main(String[] args) {
        // 本质就是求最长接龙子序列
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        N = sc.nextInt();
        Len_PreEndWith = new int[10];
        int maxLen = 0;
        for (int idx = 0; idx < N; idx++) {
            Item item = new Item(sc.nextInt());
            Len_PreEndWith[item.ended] = Math.max(Len_PreEndWith[item.front] + 1, Len_PreEndWith[item.ended]);
            maxLen = Math.max(maxLen, Len_PreEndWith[item.ended]);
        }
        System.out.println(N - maxLen);
    }
    static class Item {
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
}
