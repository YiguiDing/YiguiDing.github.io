package _05_4964_子矩阵_ok;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int n, m, a, b;
        long res = 0, MOD = 998244353;
        n = sc.nextInt();
        m = sc.nextInt();
        a = sc.nextInt();
        b = sc.nextInt();
        Queue queue = new Queue(m*n);
        int[][] matrix = new int[n][m];
        int[][] rMax = new int[n][m];
        int[][] rMin = new int[n][m];
        for (int row = 0; row < n; row++) {
            for (int col = 0; col < m; col++) {
                matrix[row][col] = sc.nextInt();
            }
        }
        for (int row = 0; row < n; row++) {
            queue.getMaxArray(matrix[row], rMax[row], b);
            queue.getMinArray(matrix[row], rMin[row], b);
        }
        int[] tempCol = new int[n];
        int[] colMax = new int[n];
        int[] colMin = new int[n];
        for (int col = b - 1; col < m; col++) {
            for (int row = 0; row < n; row++)
                tempCol[row] = rMax[row][col];
            queue.getMaxArray(tempCol, colMax, a);
            for (int row = 0; row < n; row++)
                tempCol[row] = rMin[row][col];
            queue.getMinArray(tempCol, colMin, a);
            for (int row = a - 1; row < n; row++) {
                res = (res + (long)colMax[row] * colMin[row]) % MOD;
            }
        }
        System.out.println(res);
    }

    static class Queue {
        int[] data;
        int front, tail, size, MAX_SIZE;

        Queue() {
        }

        Queue(int capacity) {
            init(capacity);
        }

        void init(int capacity) {
            MAX_SIZE = capacity;
            data = new int[MAX_SIZE];
            clear();
        }

        void clear() {
            front = 0;
            tail = -1;
            size = 0;
        }

        void EnQueue(int val) {
            tail = ++tail % MAX_SIZE;
            data[tail] = val;
            size++;
        }

        int DeQueue() {
            int t = data[front];
            front = ++front % MAX_SIZE;
            size--;
            return t;
        }

        int DeQueueLast() {
            int t = data[tail];
            tail = (tail + MAX_SIZE - 1) % MAX_SIZE;
            size--;
            return t;
        }

        int getFront() {
            return data[front];
        }

        int getTail() {
            return data[tail];
        }

        boolean isEmpty() {
            return size == 0;
        }

        boolean isFull() {
            return size == MAX_SIZE;
        }

        void getMinArray(int[] arr, int[] res, int window) {
            clear();
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTail()] >= arr[i]) DeQueueLast();// 从后面依次拿出大于当前数的元素
                while (!isEmpty() && getFront() <= i - window) DeQueue();// 从前面拿出超出窗口范围的数
                EnQueue(i);// 入队
                res[i] = arr[getFront()];// 窗口中的最小值
            }
        }

        void getMaxArray(int[] arr, int[] res, int window) {
            clear();
            for (int i = 0; i < arr.length; i++) {
                while(!isEmpty()&&arr[getTail()]<=arr[i])DeQueueLast();
                while(!isEmpty()&&getFront()<=i-window)DeQueue();
                EnQueue(i);
                res[i]=arr[getFront()];
            }
        }
    }

    static class Stack {
        int[] data;
        int pos, MAX_SIZE;

        Stack(int capacity) {
            init(capacity);
        }

        void init(int capacity) {
            MAX_SIZE = capacity;
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
    }

}
