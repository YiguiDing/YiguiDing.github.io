package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _05_单调栈 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        Stack stk = new Stack(N);
        int[] data = new int[N];
        int[] res = new int[N];
        for (int i = 0; i < N; i++) {
            data[i]=sc.nextInt();
        }
        stk.getLeftMinArray(data, res);
        for (int i = 0; i < N; i++){
            System.out.printf("%d ", res[i]!=-1? data[res[i]]:res[i]);
        }
    }

    static class Stack {
        int[] data;
        int pos, size;

        Stack(int size) {
            init(size);
        }

        void init(int size) {
            this.size = size;
            data = new int[size];
            clear();
        }

        void clear() {
            pos = -1;
        }

        void push(int x) {
            data[++pos] = x;
        }

        int pop() {
            return data[pos--];
        }

        int getTop() {
            return data[pos];
        }

        boolean isEmpty() {
            return pos == -1;
        }

        boolean isFull() {
            return pos == size - 1;
        }

        void getLeftMaxArray(int[] arr, int[] res) {
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTop()] <= arr[i]) pop();// 拿出所有比当前数小的数
                if (isEmpty()) res[i] = -1;// 栈空，左边没有数比当前数大
                else res[i] = getTop();// 栈不空，栈顶元素就是比当前数大的数
                push(i);// 压入当前位置
            }
        }

        void getLeftMinArray(int[] arr, int[] res) {
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTop()] >= arr[i]) pop();// 拿出所有比当前数大的数
                if (isEmpty()) res[i] = -1;// 栈空，左边没有数比当前数小
                else res[i] = getTop();// 栈不空，栈顶元素就是比当前数小的数
                push(i);// 压入当前位置
            }
        }
    }
}
