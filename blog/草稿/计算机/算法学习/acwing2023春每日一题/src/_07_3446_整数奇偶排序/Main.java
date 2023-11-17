package _07_3446_整数奇偶排序;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        Stack stack1 = new Stack(10);
        Stack stack2 = new Stack(10);
        for (int i = 0; i < 10; i++) {
            int n=sc.nextInt();
            if(n%2==1) stack1.push(n);
            else stack2.push(n);
        }
        stack1.sort();
        stack2.sort();
        stack2.reverse();
        while(!stack1.isEmpty()){
            System.out.printf("%d ",stack1.pop());
        }
        while(!stack2.isEmpty()){
            System.out.printf("%d ",stack2.pop());
        }
    }

    static class Stack {
        int[] data;
        int pos, MAX_SIZE;

        Stack(int size) {
            init(size);
        }

        void init(int size) {
            MAX_SIZE = size;
            data = new int[MAX_SIZE];
            pos = 0;
        }

        void push(int val) {
            data[pos++] = val;
        }

        int pop() {
            return data[--pos];
        }

        boolean isEmpty() {
            return pos == 0;
        }

        boolean isFull() {
            return pos == MAX_SIZE;
        }

        void sort() {
            quickSort(data, 0, pos - 1);
        }

        void reverse() {
            for (int i = 0, j = pos - 1; i < j; i++, j--) {
                swap(data, i, j);
            }
        }
    }

    static void quickSort(int[] arr, int left, int right) {
        if (left >= right)
            return;
        int x = arr[left], i = left, L = left - 1, R = right + 1;
        while (i < R) {
            if (arr[i] < x)
                swap(arr, i++, ++L);
            else if (arr[i] > x)
                swap(arr, i, --R);
            else
                i++;
        }
        quickSort(arr, left, L);
        quickSort(arr, R, right);
    }

    static void swap(int[] arr, int i, int j) {
        if (i != j) {
            arr[i] = arr[i] ^ arr[j];
            arr[j] = arr[i] ^ arr[j];
            arr[i] = arr[i] ^ arr[j];
        }
    }
}
