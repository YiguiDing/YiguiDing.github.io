package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _01_静态单链表 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int Q = sc.nextInt();sc.nextLine();
        StaticLinkedList list = new StaticLinkedList(100010);
        while(Q--!=0){
            char op;
            int k,x;
            String[] in= sc.nextLine().split(" ");
            op=in[0].charAt(0);
            switch(op){
                case 'H':
                    x=Integer.valueOf(in[1]);
                    list.insertToHead(x);
                    break;
                case 'I':
                    k=Integer.valueOf(in[1]);
                    x=Integer.valueOf(in[2]);
                    list.add(k-1, x);
                    break;
                case 'D':
                    k=Integer.valueOf(in[1]);
                    //删除第k个插入的元素
                    if(k==0) list.removeFirst();
                    else list.remove(k-1);
                    break;
            }
            
        }
        for (int p = list.head; p!=-1; p=list.next[p]) {
            System.out.printf("%d ",list.vale[p]);
        }
        
    }

    static class StaticLinkedList {
        int[] next;
        int[] vale;
        int head, idx;

        StaticLinkedList(int size) {
            init(size);
        }

        void init(int size) {
            next = new int[size];
            vale = new int[size];
            head = -1;
            idx = 0; // 0位置节点为第一个可用节点
        }

        void insertToHead(int val) {
            vale[idx] = val; // 存入当前值
            next[idx] = head; // 当前节点指向头节点所指向的节点
            head = idx;// 头结点指向当前节点
            idx++;// 指针后移
        }
        void add(int k,int val){
            vale[idx]=val;// 存入当前值
            next[idx]=next[k];// 当前节点指向k节点的下一个节点
            next[k]=idx;// 使k节点的下一个节点成为当前节点
            idx++;// 指针后移
        }
        // 移除头节点。
        int removeFirst(){
            int res = vale[head];// 获得
            head=next[head];// 头指针直接执行头结点的下一个节点。
            return res;
        }
        // 移除k地址元素的后继节点，next[k]位置的节点。
        void remove(int k){
            if(next[k]==-1) return;
            next[k] = next[next[k]];
        }
    }
}
