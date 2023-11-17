package _02_4956_冶炼金属;

import java.util.Scanner;

/**
 * Main
 */
public class Main_对_dfs暴力搜索 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int preLeft = Integer.MIN_VALUE;
        int preRigh = Integer.MAX_VALUE;
        for (int i = 0; i < N; i++) {
            int A = sc.nextInt();
            int B = sc.nextInt();
            int left = A / (B + 1);
            int right = A / B;
            // (left,right]
            left += 1;
            if (left > preLeft)
                preLeft = left;
            if (right < preRigh)
                preRigh = right;

        }
        System.out.println(preLeft + " " + preRigh);
    }
}

// 100/max = floor(3/1)
// 100/min = floor(3/1)

// 100/3 == 33.3333333
// ceil(100/3) == 34
// floor(100/3) == 33
// 100/34 == 2.94
// 100/33 == 3.03

// 100/4 = 25
// 100/25 = 4.0;

// (min,max] => (25,33]
