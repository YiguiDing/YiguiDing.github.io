package _FF_习题课;

import java.io.BufferedInputStream;
import java.util.Scanner;
/*
5 3
2 4 1 5 3
*/
public class _01_第k小数 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(new BufferedInputStream(System.in));
		int N = sc.nextInt();
		int K = sc.nextInt();
		int[] arr = new int[N];
		for (int i = 0; i < arr.length; i++) {
			arr[i]=sc.nextInt();
		}
		System.out.println(quickSort(arr, K-1));
	}
	static int quickSort(int[]arr,int k){
		return quickSort(arr, 0, arr.length-1, k);
	}
//	快速排序找到第k小数
	static int quickSort(int[] arr,int left,int right,int k) {
		if(left>=right)return arr[left];//本质就是二分查找
		int x=arr[left],i=left,L=left-1,R=right+1;
		while(i<R) {
			if(arr[i]<x) swap(arr,i++,++L);
			else if(arr[i]>x)swap(arr, i, --R);
			else i++;
		}
		if(k<=L) return quickSort(arr, left, L, k);
		else if(k>=R) return quickSort(arr, R, right, k);
		else return arr[k];// [L,R]之间的数是等于x的数，所以只写arr[k],也可以直接返回x，或者写arr[L+1] arr[R-1];
	}
	private static void swap(int[] arr, int i, int j) {
		if(i!=j) {
			arr[i]=arr[i]^arr[j];
			arr[j]=arr[i]^arr[j];
			arr[i]=arr[i]^arr[j];
		}
	}
	
}
