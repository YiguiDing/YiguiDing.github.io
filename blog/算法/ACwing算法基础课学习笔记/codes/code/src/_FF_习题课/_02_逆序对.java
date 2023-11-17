package _FF_习题课;

import java.io.BufferedInputStream;
import java.util.Scanner;
/*
6
2 3 4 5 6 1
5
 */
public class _02_逆序对 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(new BufferedInputStream(System.in));
		int N = sc.nextInt();
		int[] arr = new int[N];
		for (int i = 0; i < arr.length; i++) {
			arr[i]=sc.nextInt();
		}
		System.out.println(mergeSort(arr, 0, arr.length-1));
	}
	static long mergeSort(int[] arr,int left,int right) {
		if(left>=right) return 0;
		int mid = left+(right-left)/2;
		long cnt = mergeSort(arr, left, mid) + mergeSort(arr, mid+1, right);
		int[] temp = new int[right-left+1];
		int i=left,j=mid+1,t=0;
		while(i<=mid&&j<=right)
			if(arr[i]<=arr[j]) {  temp[t++]=arr[i++];}
			else {cnt += mid-i+1; temp[t++]=arr[j++];}
		while(i<=mid) temp[t++]=arr[i++];
		while(j<=right) temp[t++]=arr[j++];
		for(t=0;t+left<=right;t++) arr[t+left]=temp[t];
		return cnt;
	}
}
