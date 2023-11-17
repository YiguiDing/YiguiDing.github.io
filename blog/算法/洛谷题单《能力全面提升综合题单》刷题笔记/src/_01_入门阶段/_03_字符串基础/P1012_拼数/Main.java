package _01_入门阶段._03_字符串基础.P1012_拼数;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        Integer[] nums = new Integer[N];

        for (Integer i = 0; i < nums.length; i++) {
            nums[i] = sc.nextInt();
        }

        Arrays.sort(nums, (o1, o2) -> {
            // 这句排序算法是关键
            return -("" + o1 + o2).compareTo("" + o2 + o1);
            // 错误写法：
            // o1 太大了，加起来更大
            // return -Integer.compare(Integer.valueOf(o1 + "" + o2), Integer.valueOf(o2 + "" + o1));
        });

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < nums.length; i++) {
            sb.append(nums[i] + "");
        }

        System.out.println(sb.toString());
    }
}