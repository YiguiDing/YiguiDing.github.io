package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _03_静态栈 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int M = sc.nextInt();sc.nextLine();
        StaticStack stack = new StaticStack(100000);
        while(M--!=0){
            String[] in = sc.nextLine().split(" ");
            String op = in[0];;
            int x;
            switch(op){
                case "push":
                    x = Integer.parseInt(in[1]);
                    stack.push(x);
                    break;
                case "pop":
                    stack.pop();
                    break;
                case "empty":
                    System.out.printf("%s\n",stack.isEmpty()? "YES":"NO");
                    break;
                case "query":
                    System.out.printf("%d\n",stack.getTop());
                    break;
            }
        }
    }
    static class StaticStack{
        int[] data;
        int pos,size;
        StaticStack(int size){
            init(size);
        }
        void init(int size){
            this.size = size;
            data = new int[size];
            pos = -1;// 用-1和0都可以，但取值不同含义不同后序的计算方式也不同
        }
        void push(int val){
            data[++pos]=val;
        }
        int pop(){
            return data[pos--];
        }
        int getTop(){
            return data[pos];
        }
        boolean isEmpty(){
            return pos==-1;
        }
        boolean isFull(){
            return pos==size-1;
        }
    }
}
