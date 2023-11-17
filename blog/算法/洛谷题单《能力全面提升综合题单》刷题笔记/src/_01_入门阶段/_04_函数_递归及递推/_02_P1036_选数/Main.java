package _01_入门阶段._04_函数_递归及递推._02_P1036_选数;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        K = sc.nextInt();
        nums = new int[N];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = sc.nextInt();
        }
        dfs(0, 0, 0);
        System.out.println(cnt);

    }

    static int N;
    static int K;
    static int cnt = 0;
    static int[] nums;

    static void dfs(int curIdx/* 递归考虑每一个数选或不选两种情况 */, int sum, int selected) {
        if (selected == K) {
            if (isPrime(sum)) {
                cnt++;
            }
        } else {
            if (curIdx < nums.length) {
                // 考虑当前位置的数：
                // 不选该数
                dfs(curIdx + 1, sum, selected);
                // 选择该数
                dfs(curIdx + 1, sum + nums[curIdx], selected + 1);
            }
        }
    }

    private static boolean isPrime(int num) {
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
