package _01_基础算法;

import java.util.Arrays;

public class _02_归并排序 {
    public static void main(String[] args) {
        int[] data = { 9, 9,8 ,8,8,8, 7, 6, 5, 5, 5, 5, 4, 3, 2, 1 };
        mergeSort(data);
        System.out.println(Arrays.toString(data));
    }

    public static void mergeSort(int[] arr) {
        temp = new int[arr.length];
        mergeSort(arr, 0, arr.length - 1);
    }
    private static int[] temp;
    private static void mergeSort(int[] arr, int L, int R) {
        if (L >= R) return;
        int M = L + (R - L) / 2;
        mergeSort(arr, L, M);
        mergeSort(arr, M + 1, R);
        int k = 0, i = L, j = M + 1;
        while (i <= M && j <= R) {
            if(arr[i]<=arr[j]) temp[k++]=arr[i++];
            else temp[k++] = arr[j++];
        }
        while(i<=M) temp[k++] = arr[i++];
        while(j<=R) temp[k++] = arr[j++];
        for(k=0;k+L<=R;k++) arr[k+L]=temp[k];
    }
}
