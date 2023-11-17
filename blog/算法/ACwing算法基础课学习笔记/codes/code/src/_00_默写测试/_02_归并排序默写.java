package _00_默写测试;

import java.util.Arrays;

public class _02_归并排序默写 {
    public static void main(String[] args) {
        int[] data = { 9, 9, 8, 8, 8, 8, 7, 6, 5, 5, 5, 5, 4, 3, 2, 1 };
        mergeSort(data, 0, data.length - 1);
        System.out.println(Arrays.toString(data));
    }

    static void mergeSort(int[] arr, int l, int r) {
        if(l>=r)return;
        int mid = l+(r-l)/2;
        mergeSort(arr, l, mid);mergeSort(arr, mid+1, r);
        int[] help=new int[r-l+1];
        int t=0,i=l,j=mid+1;
        while(i<=mid&&j<=r)
            if(arr[i]<=arr[j]) help[t++]=arr[i++];
            else help[t++]=arr[j++];
        while(i<=mid) help[t++]=arr[i++];
        while(j<=r) help[t++]=arr[j++];
        for(t=0;t+l<=r;t++) arr[t+l]=help[t];
    }

}
