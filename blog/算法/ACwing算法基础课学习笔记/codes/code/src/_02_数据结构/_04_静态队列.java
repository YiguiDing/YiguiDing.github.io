package _02_数据结构;

public class _04_静态队列 {
    static class StaticQueue {
        int[] data;
        int head, tail, size, counter;

        StaticQueue(int size) {
            init(size);
        }

        void init(int size) {
            this.size = size;
            data = new int[size];
            head = 0;// 都为0，可以统一计算公式。
            tail = 0;// 都为0，可以统一计算公式。
            counter = 0;// 元素个数计数，使用这种方式判断空和满会很简单。
        }

        void EnQueue(int x) {
            data[tail] = x;
            tail = ++tail % size;
            counter++;
        }

        int DeQueue() {
            int t = data[head];
            head = ++head % size;
            counter--;
            return t;
        }

        boolean isEmpty() {
            return counter == 0;
        }

        boolean isFull() {
            return counter == size;// counter记录的是元素个数，所以直接判断是否和size相等即可
        }
    }
}
