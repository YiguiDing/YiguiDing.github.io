package _01_基础知识._01_快速排序;

import java.util.Arrays;

public class _00_对数器 {
    // 生成随机数组
    static int[] getRandomArray(int maxLength, long minVal, long maxVal) {
        int Len = (int) (Math.random() * maxLength);
        int[] res = new int[Len];
        for (int i = 0; i < Len; i++) {
            res[i] = (int) (minVal + Math.random() * (maxVal - minVal));
        }
        return res;
    }
    // 复制出新数组
    static int[] copy(int[] arr) {
        int[] res = new int[arr.length];
        System.arraycopy(arr, 0, res, 0, res.length);// 使用c++代码实现的copy
        return res;
    }
    // 比较两数组是否完全一致
    static boolean arrayComp(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) return false;
        for (int i = 0, j = 0; i < arr1.length; i++, j++) {
            if (arr1[i] != arr2[j])
                return false;
        }
        return true;
    }
    public static void main(String[] args) {
        int T = 100;// 测试次数
        for (int i = 0; i < T; i++) {
        	System.out.println("生成随机数组");
            // 生成随机长度，值随机的数值
            int[] arr1 = getRandomArray(10000000, Integer.MIN_VALUE, Integer.MAX_VALUE);
            int[] arr2 = copy(arr1);
            int[] arr3 = copy(arr1);
    		long t1 = System.currentTimeMillis();
            quick_sort1(arr1);// 左程云算法课教的快速排序算法
		    long t2 = System.currentTimeMillis();
            quick_sort2(arr2);// acwing算法基础课教的快速排序算法
		    long t3 = System.currentTimeMillis();
            Arrays.sort(arr3);// java内置排序算法
            long t4 = System.currentTimeMillis();

            if (!arrayComp(arr1, arr3)||!arrayComp(arr2, arr3)) {
                System.out.println("三算法处理结果不一致");
                break;
            }

            long s1 = t2-t1;
            long s2 = t3-t2;
            long s3 = t4-t3;
            System.out.println("第1个算法耗时"+s1+"ms");
            System.out.println("第2个算法耗时"+s2+"ms");
            System.out.println("第3个算法耗时"+s3+"ms");
            System.out.println();
            
        }
        System.out.println("比较完毕");
    }

    static void quick_sort1(int[] arr) {
        quick_sort1(arr, 0, arr.length - 1);
    }
    static void quick_sort2(int q[]) {
        quick_sort2(q, 0, q.length-1);
    }

    private static void quick_sort1(int[] arr, int left, int right) {
        if(left>=right) return;
        int x=arr[left],idx=left,L=left-1,R=right+1;
        while (idx<R){
            if(arr[idx]<x) swap(arr,idx++,++L);
            else if(arr[idx]>x) swap(arr,idx,--R);
            else idx++;
        }
        quick_sort1(arr,left,L); quick_sort1(arr,R,right);
    }
    static void swap(int[] arr, int i, int j) {
        if (i != j) {
            arr[i] = arr[i] ^ arr[j];
            arr[j] = arr[i] ^ arr[j];
            arr[i] = arr[i] ^ arr[j];
        }
    }
    static void quick_sort2(int arr[], int l, int r) {
        if(l>=r)return;
        int x=arr[(l+r)>>1],L=l-1,R=r+1;
        while(L<R){
            do L++; while(arr[L]<x);
            do R--; while(arr[R]>x);
            if(L<R) swap(arr, L, R);
        }
        quick_sort2(arr, l, R);quick_sort2(arr, R+1, r);
    }
}
