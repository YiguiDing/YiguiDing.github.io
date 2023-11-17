package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Scanner;

/**
 * _08_差分
 */
public class _08_差分 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int T = sc.nextInt();
        int[] arr = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            arr[i] = sc.nextInt();
        }
        Differ differ = new Differ(arr);
        while (T-- != 0) {
            int l = sc.nextInt();
            int r = sc.nextInt();
            int x = sc.nextInt();
            differ.insert(l, r, x);// 在某区间插入x
        }
        int[] preFixSum = differ.toPreFix().preFixSum;// 获取原数组,获取到的会比原长度多1
        for (int i = 1; i <= N; i++) {// 不要是用preFixSum.length获取到的会比原长度多1
            System.out.printf("%d ",preFixSum[i]);
        }
    }
    static class Differ {
        int[] differ;
    
        Differ() {
        };
    
        Differ(int[] preFix) {
            load(preFix);
        }
    
        void load(int[] preFix) {
            differ = new int[preFix.length + 1];// 差分数组的长度要比原数组多1
            for (int i = 1; i < preFix.length; i++) {
                insert(i, i, preFix[i]); // 使用原数组构建差分数组。
            }
        }
    
        void insert(int l, int r, int num) {
            differ[l] += num;
            differ[r + 1] -= num;
        }
    
        Prefix toPreFix() {
            return new Prefix(this.differ);
        }
    }
    
    static class Prefix {
        int[] preFixSum;
    
        Prefix() {
        };
    
        Prefix(int[] arr) {
            this.load(arr);
        }
    
        void load(int[] arr) {/* 传入num必须以1为起始坐标 */
            preFixSum = new int[arr.length];
            for (int i = 1; i < arr.length; i++) { // 以Index==1为起点
                preFixSum[i] = preFixSum[i - 1] + arr[i];
            }
        }
    
        int getSum(int l, int r) {
            return preFixSum[r] - preFixSum[l - 1];
        }
    }
}

