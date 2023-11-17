package _02_基础算法._02_排序算法._01_P1177_模板_快速排序;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int[] data = new int[N];
        for (int i = 0; i < data.length; i++) {
            data[i] = sc.nextInt();
        }
        quickSort(data);
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i]);
            if (i != data.length - 1)
                System.out.print(" ");
            else
                System.out.println("");
        }
    }

    static void quickSort(int[] arr) {
        process(arr, 0, arr.length - 1);
    }

    static void process(int[] arr, int left, int right) {
        if (left < right) {
            int k = left + (int) (Math.random() * (right - left));
            int midVal = arr[k];
            int L = left, R = right;
            int cur = left;
            while (cur <= right && L <= R) {
                if (arr[cur] < midVal) {
                    exchange(arr, cur++, L++);
                } else if (arr[cur] > midVal) {
                    exchange(arr, cur, R--);// 需要思考为什么这里不用写 cur++;
                } else if (arr[cur] == midVal) {
                    cur++;
                }
            }
            process(arr, left, L - 1);
            process(arr, R + 1, right);
        }
    }

    static void exchange(int[] arr, int i, int j) {
        if (i != j) {
            arr[i] = arr[i] ^ arr[j];
            arr[j] = arr[i] ^ arr[j];
            arr[i] = arr[i] ^ arr[j];
        }
    }
}