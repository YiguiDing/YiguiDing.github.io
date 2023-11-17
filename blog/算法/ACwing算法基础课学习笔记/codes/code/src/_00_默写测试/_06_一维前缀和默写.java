package _00_默写测试;

import java.io.BufferedInputStream;
import java.util.Scanner;
/*
    输入样例
    5 3
    2 1 3 6 4
    1 2
    1 3
    2 4
    输出样例
    3
    6
    10
 */

public class _06_一维前缀和默写 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();// 数组长度
        int T = sc.nextInt();// 询问次数
        int[] arr = new int[N + 1];
        PreFixArray preFix = new PreFixArray();
        for (int i = 1; i < arr.length; i++) { // 以Index==1为起点读取数据
            arr[i] = sc.nextInt();
        }
        preFix.load(arr);

        while(T--!=0){
            int l=sc.nextInt();
            int r=sc.nextInt();
            System.out.println(preFix.getSum(l, r));
        }
    }

    static class PreFixArray {
        public int[] preFix;

        PreFixArray() {
        }

        PreFixArray(int[] array) {
            load(array);
        }

        public void load(int[] differ) {
            preFix = new int[differ.length];
            for (int i = 1; i < differ.length; i++) {
                preFix[i] = preFix[i - 1] + differ[i];
            }
        }

        public int getSum(int left, int right) {
            return preFix[right] - preFix[left - 1];
        }
    }
}
