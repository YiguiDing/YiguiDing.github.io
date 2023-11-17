package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.HashSet;
import java.util.Scanner;

public class _11_双指针_最长不重复连续子序列_暴力解 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int ans = 0;
        int[] arr = new int[N];
        for (int i = 0; i < arr.length; i++)
            arr[i] = sc.nextInt();

        // 暴力遍历所有区间
        for (int start = 0; start < N; start++) {
            for (int end = start; end < N; end++) {
                if (check(arr, start, end)) {
                    ans = Math.max(ans, end - start + 1);
                }
            }
        }
        System.out.println(ans);
    }

    // 判断是否有重复数
    private static boolean check(int[] arr, int start, int end) {
        HashSet<Integer> set = new HashSet<>();
        for (int i = start; i <= end; i++) {
            if (set.contains(arr[i]))
                return false;
            else
                set.add(arr[i]);
        }
        return true;
    }
}
