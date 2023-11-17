package _01_入门阶段._02_数组基础.P1427小鱼的数字游戏;

import java.util.Scanner;
import java.util.Stack;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Stack<Integer> stack = new Stack<>();
        while (true) {
            int k = sc.nextInt();
            if (k != 0) {
                stack.push(k);
            } else {
                break;
            }
        }
        while (!stack.isEmpty()) {
            System.out.print(stack.pop());
            if (stack.isEmpty()) {
                System.out.print("\n");
            }else{
                System.out.print(" ");
            }
        }
    }

}
