package _01_入门阶段._01_从零开始.P1085不高兴的津津;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] data = new int[7];
        for (int i = 0; i < data.length; i++) {
            data[i] = sc.nextInt() + sc.nextInt();
        }
        int maxIdx = -1;
        int maxVal = Integer.MIN_VALUE;
        for (int i = 0; i < data.length; i++) {
            if (data[i] > 8 && data[i] > maxVal) {
                maxVal = data[i];
                maxIdx = i;
            }
        }
        maxIdx += 1;
        System.out.println(maxIdx);
    }
}
