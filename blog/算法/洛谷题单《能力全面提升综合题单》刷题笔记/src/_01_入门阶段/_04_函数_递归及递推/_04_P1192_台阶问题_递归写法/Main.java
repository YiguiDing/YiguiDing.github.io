package _01_入门阶段._04_函数_递归及递推._04_P1192_台阶问题_递归写法;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        K = sc.nextInt();
        sc.close();
        computed = new boolean[N];
        cache = new int[N];
        System.out.println(dfs(0));
    }

    static int N;
    static int K;
    static boolean[] computed;// 标记该位置有没有计算出来
    static int[] cache;// 缓存
    static int MOD = 100003;

    static int dfs(int curPos) {
        if (curPos == N) {
            return 1;
        } else if (curPos < N) {
            if (computed[curPos])
                return cache[curPos];
            int cnt = 0;
            for (int step = 1; step <= K; step++) {
                cnt += dfs(curPos + step) % MOD;
                cnt %= MOD;
            }
            cache[curPos] = cnt;// 缓存
            computed[curPos] = true;// 标记为已经计算过了
            return cnt;
        } else
            return 0;
    }
}
