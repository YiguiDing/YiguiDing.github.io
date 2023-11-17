package _02_基础算法._01_模拟._01_P1003铺地毯_3_满分;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        Stack<React> stack = new Stack<>();
        for (int i = 1; i <= N; i++) {
            stack.add(new React(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Point point = new Point(sc.nextInt(), sc.nextInt());
        int n = N;
        while (!stack.isEmpty()) {
            React react = stack.pop();
            if (point.isCollision(react)) {
                System.out.println(n);
                return;
            }
            n--;
        }
        System.out.println(-1);
    }
}

class React {
    int x, y, w, h;

    React(int xx, int yy, int ww, int hh) {
        this.x = xx;
        this.y = yy;
        this.w = ww;
        this.h = hh;
    }
}

class Point {
    int x, y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    boolean isCollision(React react) {
        return react.x <= x && x <= react.x + react.w &&
                react.y <= y && y <= react.y + react.h;
    }
}
