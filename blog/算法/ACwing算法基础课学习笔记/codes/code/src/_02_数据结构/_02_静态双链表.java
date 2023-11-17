package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _02_静态双链表 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        sc.nextLine();
        StaticLinkedList stack = new StaticLinkedList(10000);
        while (N-- != 0) {
            String[] in = sc.nextLine().split(" ");
            int k, x;
            switch (in[0]) {
                case "L":
                    x = Integer.parseInt(in[1]);
                    stack.addToHead(x);
                    break;
                case "R":
                    x = Integer.parseInt(in[1]);
                    stack.addToTail(x);
                    break;
                case "D":
                    k = Integer.parseInt(in[1]);
                    stack.remove(k + 1);// remove(2) 删除的是所插入的第一个数。
                    break;
                case "IL":
                    k = Integer.parseInt(in[1]);
                    x = Integer.parseInt(in[2]);
                    stack.insertLeft(k + 1, x); // 因为第二个位置才是第一个数，所以要加1
                    break;
                case "IR":
                    k = Integer.parseInt(in[1]);
                    x = Integer.parseInt(in[2]);
                    stack.inertRight(k + 1, x);
                    break;
            }
        }
        for (int i = stack.right[0]; i != 1; i = stack.right[i]) {
            System.out.printf("%d ", stack.data[i]);
        }
    }

    static class StaticLinkedList {
        int[] left, right, data;
        int pos;

        StaticLinkedList(int size) {
            init(size);
        }

        // 初始化
        void init(int size) {
            left = new int[size];
            right = new int[size];
            data = new int[size];
            right[0] = 1;// 前两个节点占用作为头节点和尾节点
            left[1] = 0;// 执行add(0,?)时，可以将其插入到头节点和尾节点之间
            pos = 2;// 第2个节点是可用节点
        }

        // 在k位置之后插入一个节点
        void add(int k, int val) {
            data[pos] = val;// 存数据
            left[pos] = k;// 当前节点的左边是k
            right[pos] = right[k];// 右边是k的右边
            left[right[k]] = pos;// k原本的后继的前驱，重定向为当前节点
            right[k] = pos;// k的右边重定向为当前节点
            pos++;// 指向下一个可用节点。
        }

        void inertRight(int k, int val) {
            add(k, val);
        }

        void insertLeft(int k, int val) {
            add(left[k], val);
        }

        void addToHead(int val) {// 添加到头节点的下一个节点
            inertRight(0, val);// 0是头节点
        }

        void addToTail(int val) {// 添加到尾节点的前一个节点
            insertLeft(1, val);// 1是尾节点 插入到尾节点的前一个节点之后的位置。
        }

        // 移除k节点本身
        void remove(int k) {// remove 0 删除的是第一个数
            right[left[k]] = right[k];// k节点的前驱的后继指向k节点的后继
            left[right[k]] = left[k];// k节点的后继的前驱指向k节点的前驱
        }

    }
}
