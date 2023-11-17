package _01_基础算法;

import java.util.Arrays;

public class _01_快速排序 {
    public static void main(String[] args) {
        int[] data = { 9, 9,8,8,8,8, 7, 6, 5, 5, 5, 5, 4, 3, 2, 1 };
        myQuickSort(data, 0, data.length - 1);
        System.out.println(Arrays.toString(data));
    }

    static void quickSort(int[] arr, int l, int r) {
        if (l >= r) return;
        int x = arr[l], i = l - 1, j = r + 1;
        while (i < j) {
            do i++; while (arr[i] < x);
            do j--; while (arr[j] > x);
            if (i < j) swap(arr, i, j);
        }
        quickSort(arr, l, j);
        quickSort(arr, j + 1, r);
    }

    static void swap(int[] arr, int i, int j) {
        if (i != j) {
            arr[i] = arr[i] ^ arr[j];
            arr[j] = arr[i] ^ arr[j];
            arr[i] = arr[i] ^ arr[j];
        }
    }

    static void myQuickSort(int[] arr, int l, int r) {
        if (l >= r) return;
        int x = arr[l], i = l, L = l - 1, R = r + 1;
        while (i < R) {
            if(arr[i]<x) swap(arr, i++, ++L);
            else if(arr[i]>x) swap(arr, i, --R);
            else i++;
        }
        quickSort(arr, l, L);
        quickSort(arr, R, r);
    }
}