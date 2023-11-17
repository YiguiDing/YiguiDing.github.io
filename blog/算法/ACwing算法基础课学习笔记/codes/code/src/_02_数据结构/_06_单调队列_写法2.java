package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _06_单调队列_写法2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int K = sc.nextInt();
        int[] data = new int[N];
        int[] max = new int[N];
        int[] min = new int[N];
        
        StaticQueue queue = new StaticQueue(K+1);

        for (int i = 0; i < data.length; i++)  data[i]=sc.nextInt();
        
        queue.getMinArray(data, min, K);
        queue.getMaxArray(data, max, K);
        
        for (int i = K-1; i < min.length; i++) {
			System.out.printf("%d ",min[i]);
		}
        System.out.println("");
        for (int i = K-1; i < max.length; i++) {
			System.out.printf("%d ",max[i]);
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
        void getMaxArray(int[] data,int[] res,int winSize) {
        	clear();
        	for (int idx = 0; idx < data.length; idx++) {
				while(!isEmpty()&&data[getLast()]<=data[idx]) DeQueueLast();// 从队尾开始拿,拿出所有小于等于当前数的数
				while(!isEmpty()&&getFirst()<=idx-winSize) DeQueue();// 从队头开始拿，维持窗口大小
				EnQueue(idx);//入队当前位置
				res[idx]=data[getFirst()];//得到当前窗口中最大值。 
			}
        }
        void getMinArray(int[] data,int[] res,int winSize) {
        	clear();
        	for (int idx = 0; idx < data.length; idx++) {
				while(!isEmpty()&&data[getLast()]>=data[idx]) DeQueueLast();
				while(!isEmpty()&&getFirst()<=idx-winSize) DeQueue();
				EnQueue(idx);
				res[idx]=data[getFirst()];
			}
        }
    }
}
