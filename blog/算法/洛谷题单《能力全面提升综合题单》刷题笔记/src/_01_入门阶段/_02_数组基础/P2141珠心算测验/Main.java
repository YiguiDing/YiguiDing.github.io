package _01_入门阶段._02_数组基础.P2141珠心算测验;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        Map<Integer, Integer> numSet = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            nums[i] = sc.nextInt();
            numSet.put(nums[i], i);
        }
        int res = 0;
        for (int sum = 0; sum < nums.length; sum++) {
            for (int i = 0; i < nums.length; i++) {
                Integer j = numSet.get(nums[sum] - nums[i]);
                if (j != null && i != j) {
                    res++;
                    break;// 找到一个即可
                }
            }
        }
        // 1+4=5 4+1=5 2+3=5 3+2=5 是一种不是四种
        System.out.println(res);
    }

    public static void main_wrong(String[] args) {
        // 错误写法 1+4=5 4+1=5 2+3=5 3+2=5 是一种不是四种
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        Set<Integer> numSet = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            nums[i] = sc.nextInt();
            numSet.add(nums[i]);
        }
        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (i == j)
                    continue;
                if (numSet.contains(nums[i] + nums[j])) {
                    res++;
                }
            }
        }
        System.out.println(res / 2/* a+b=b+a 被统计两次的不必再统计 */);
    }
}
