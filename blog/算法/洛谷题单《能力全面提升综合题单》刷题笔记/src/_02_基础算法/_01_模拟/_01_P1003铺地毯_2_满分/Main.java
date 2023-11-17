package _02_基础算法._01_模拟._01_P1003铺地毯_2_满分;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = Integer.parseInt(sc.nextLine());
        Stack<String> stack = new Stack<>();
        for (int i = 1; i <= N; i++) {
            stack.push(sc.nextLine());
        }
        String[] pos = sc.nextLine().split(" ");
        Point point = new Point(Integer.parseInt(pos[0]), Integer.parseInt(pos[1]));
        int n = N;
        while (!stack.isEmpty()) {
            String[] nums = stack.pop().split(" ");
            React react = new React(
                    Integer.parseInt(nums[0]),
                    Integer.parseInt(nums[1]),
                    Integer.parseInt(nums[2]),
                    Integer.parseInt(nums[3]));
            if (point.isCollision(react)) {
                break;
            }
            n--;
        }
        if (n != 0) {
            System.out.println(n);
        } else
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
