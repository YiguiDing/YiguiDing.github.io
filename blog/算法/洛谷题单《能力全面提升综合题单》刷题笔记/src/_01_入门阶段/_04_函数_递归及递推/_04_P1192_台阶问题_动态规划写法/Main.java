package _01_入门阶段._04_函数_递归及递推._04_P1192_台阶问题_动态规划写法;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();
        sc.close();
        int[][] dp = new int[N + 1][K + 1];
        // dp[len][step] = 路长为len 走step步有dp[len][step]种方法
        // dp[len][step] 当 len==step时，dp[len][step]=1;
        // dp[len][step] = sum(dp[len-step])
        for (int len = 1; len <= N; len++) {
            for (int step = 1; step <= K; step++) {
                if (len == step) {
                    dp[len][step] = 1;
                } else if (len > step) {
                    dp[len][step] = arrSum(dp[len - step]) % MOD;
                }
            }
        }
        int res = arrSum(dp[N]) % MOD;
        System.out.print(res);
    }

    static int arrSum(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    static int MOD = 100003;
}
