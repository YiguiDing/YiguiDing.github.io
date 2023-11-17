package _01_3384二叉树遍历;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Queue<Character> queue = new LinkedList<>();
        String str = sc.nextLine();
        char[] chs = str.toCharArray();
        for (char ch : chs) {
            if (ch == '#')
                queue.add(null);
            else
                queue.add(ch);
        }
        Tree tree = new Tree(queue);
        System.out.println(tree.midRootPrint(new StringBuilder()));
    }
}


class Tree {
    Character ch;
    Tree left, right;

    Tree(Queue<Character> queue) {
        ch = queue.poll();
        if (ch != null) {
            left = new Tree(queue);
            right = new Tree(queue);
        }
    }

    StringBuilder midRootPrint(StringBuilder sb) {
        if (ch != null) {
            if (left != null) {
                left.midRootPrint(sb);
            }
            sb.append(ch);
            if (right != null) {
                sb.append(' ');
                right.midRootPrint(sb);
            }
        }
        return sb;
    }
}