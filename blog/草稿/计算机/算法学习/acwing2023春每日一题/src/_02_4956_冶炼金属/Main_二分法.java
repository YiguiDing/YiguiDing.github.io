package _02_4956_冶炼金属;

import java.util.Scanner;

public class Main_二分法 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int preLeft = Integer.MIN_VALUE;
        int preRigh = Integer.MAX_VALUE;
        for (int i = 0; i < N; i++) {
            int A = sc.nextInt();
            int B = sc.nextInt();
            preLeft = Math.max(preLeft, findMinV(A, B));
            preRigh = Math.min(preRigh, findMinV(A, B - 1) - 1);
        }
        System.out.println(preLeft + " " + preRigh);
    }

    static int findMinV(int A, int B) {
        int left = 1, right = 1000000000+1;
        int mid = -1;
        while (left < right) {
            mid = left + (right - left) / 2;
            if (A / mid <= B) // floor(A/V)<=B 则 mid>=V
                right = mid;
            else // floor(A/V>B) 则 mid<V
                left = mid + 1;
        }
        return right;
    }
}
