package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _06_单调队列 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int K = sc.nextInt();
        int[] data = new int[N];
        StaticQueue queue = new StaticQueue(K+1);

        for (int i = 0; i < data.length; i++) 
            data[i]=sc.nextInt();
        
        for (int idx = 0; idx < data.length; idx++) {
            // 保证队列中的数单调递增，这一步实际上和单调栈一模一样
            while(!queue.isEmpty()&data[queue.getLast()]>=data[idx]) queue.DeQueueLast();
            // 保证队列中的元素个数不超过K
            while(!queue.isEmpty()&&queue.getFirst()<=idx-K) queue.DeQueue();
            // 入队
            queue.EnQueue(idx);
            // 由于单调性，队列中第一个数就是最小值
            if(idx+1-K>=0) System.out.printf("%d ",data[queue.getFirst()]);
        }
        System.out.println("");
        queue.clear();
        for (int idx = 0; idx < data.length; idx++) {
            // 保证队列中的数单调递减，这一步实际上和单调栈一模一样
            while(!queue.isEmpty()&data[queue.getLast()]<=data[idx]) queue.DeQueueLast();
            // 保证队列中的元素个数不超过K
            while(!queue.isEmpty()&&queue.getFirst()<=idx-K) queue.DeQueue();
            // 入队
            queue.EnQueue(idx);
            // 由于单调性，队列中第一个数就是最大值
            if(idx+1-K>=0) System.out.printf("%d ",data[queue.getFirst()]);
        }
    }

    static class StaticQueue {
        int[] data;
        int front, tail, size, MAX_SIZE;

        void init(int len) {
            data = new int[len];
            MAX_SIZE = len;
            clear();
        }

        void clear(){
            front = 0;
            tail = 0;
            size = 0;
        }

        StaticQueue(int len) {
            init(len);
        }

        void EnQueue(int val) {
            data[tail] = val;
            tail = ++tail % MAX_SIZE;
            size++;
        }

        int DeQueue() {
            int temp = data[front];
            front = ++front % MAX_SIZE;
            size--;
            return temp;
        }

        int getFirst(){
            return data[front];
        }

        int getLast(){
            return data[(tail+MAX_SIZE-1)%MAX_SIZE];
        }

        int DeQueueLast(){
            tail = (tail+MAX_SIZE-1)%MAX_SIZE;// tail--;
            int temp = data[tail];
            size--;
            return temp;
        }

        int getSize(){
            return size;
        }

        boolean isEmpty() {
            return size == 0;
        }

        boolean isFull() {
            return size == MAX_SIZE;
        }
    }
}
