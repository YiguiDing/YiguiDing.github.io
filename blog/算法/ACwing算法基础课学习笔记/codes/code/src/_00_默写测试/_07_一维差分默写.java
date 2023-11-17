package _00_默写测试;

import java.io.BufferedInputStream;
/*
    输入
    6 3
    1 2 2 1 2 1
    1 3 1
    3 5 1
    1 6 1
    输出
    3 4 5 3 4 2
 */
import java.util.Scanner;

public class _07_一维差分默写 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int T = sc.nextInt();
        int[] arr = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            arr[i] = sc.nextInt();
        }
        DifferArray differ = new DifferArray(arr);
        while (T-- != 0) {
            int l = sc.nextInt();
            int r = sc.nextInt();
            int x = sc.nextInt();
            differ.insert(l, r, x);// 在某区间插入x
        }
        int[] preFixSum = differ.toPreFixArray().preFix;// 获取原数组,获取到的会比原长度多1
        for (int i = 1; i <= N; i++) {// 不要是用preFixSum.length获取到的会比原长度多1
            System.out.printf("%d ",preFixSum[i]);
        }
    }

    static class PreFixArray {
        public int[] preFix;
        PreFixArray(){}
        PreFixArray(int[] data){
            load(data);
        }
        public void load(int[] data){
            preFix = new int[data.length];
            for (int i = 1; i < data.length; i++) {
                preFix[i]+=preFix[i-1]+data[i];
            }
        }
        int getSum(int l,int r){
            return preFix[r]-preFix[l-1];
        }
    }

    static class DifferArray {
        int[] differ;
        DifferArray(){}
        DifferArray(int[] data){
            load(data);
        }
        public void load(int[] data){
            differ = new int[data.length+1];
            for (int i = 1; i < data.length; i++) {
                insert(i, i, data[i]);
            }
        }
        public void insert(int l,int r,int val){
            differ[l]+=val;
            differ[r+1]-=val;
        }
        PreFixArray toPreFixArray(){
            return new PreFixArray(differ);
        }
    }
}
