package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.Scanner;
import java.util.TreeMap;

public class _12_双指针_最长不重复连续子序列_非暴力解 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int ans = 0;
        int[] arr = new int[N];
        for (int i = 0; i < arr.length; i++)
            arr[i] = sc.nextInt();
        TreeMap<Integer, Integer> idxMap = new TreeMap<>(); // 有序hashMap

        for (int idxEnd = 0, idxStart = 0; idxEnd < N; idxEnd++) {
            if (!idxMap.containsKey(arr[idxEnd])) {
                // [ 1 2 3 4 5 4 6 7 8 ]
                // i-^
                // j---------^
                // 用hashMap记录数字5及其位置
                idxMap.put(arr[idxEnd], idxEnd);
            } else {
                // [ 1 2 3 4 5 4 6 7 8 ]
                // i-^
                // j-----------^
                // i指向1,j指向4时,
                // 会发现之前已经有一条4的记录
                // 记录第一个4的位置为k，
                // 吐出之前1~4的记录，
                // 然后i指向4的下一个位置,i=k+1，
                // 记录当前位置数4的位置
                int preIdx = idxMap.get(arr[idxEnd]); // 记录当前字符第一次出现的位置。
                while (idxMap.containsKey(arr[idxEnd]))
                    idxMap.pollFirstEntry();// 吐出arr[end]及其之前的所有记录
                idxMap.put(arr[idxEnd], idxEnd);// 将当前位置字符添加到记录中
                idxStart = preIdx + 1;// 下一个扫描起始位置就是第一个4的下一个位置。
            }
            ans = Math.max(ans, idxEnd - idxStart + 1);
        }
        System.out.println(ans);
    }
}
