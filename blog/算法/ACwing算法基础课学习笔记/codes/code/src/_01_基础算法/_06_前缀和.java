package _01_基础算法;
import java.io.BufferedInputStream;
import java.util.Scanner;

public class _06_前缀和 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();// 数组长度
        int T = sc.nextInt();// 询问次数
        int[] arr = new int[N + 1];
        Prefix preFixSum = new Prefix();
        for (int i = 1; i < arr.length; i++) { // 以Index==1为起点读取数据
            arr[i] = sc.nextInt();
        }
        preFixSum.load(arr);

        while(T--!=0){
            int l=sc.nextInt();
            int r=sc.nextInt();
            System.out.println(preFixSum.getSum(l, r));
        }
    }
}

class Prefix{
    int[] preFixSum;
    Prefix(){};
    Prefix(int[] arr){
        this.load(arr);
    }
    void load(int[] arr){/* 传入num必须以1为起始坐标 */
        preFixSum = new int[arr.length];
        for (int i = 1; i < arr.length; i++) { // 以Index==1为起点
            preFixSum[i] = preFixSum[i - 1] + arr[i];
        }
    }
    int getSum(int l,int r){
        return preFixSum[r] - preFixSum[l-1];
    }
}