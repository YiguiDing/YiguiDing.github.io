package _02_基础算法._01_模拟._01_P1003铺地毯;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        QuartTree qt = new QuartTree(0, 0, 150000, 150000);
        for (int i = 1; i <= N; i++) {
            React react = new React(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());
            react.setVal(i);
            qt.add(react);
        }
        Point point = new Point(sc.nextInt(), sc.nextInt());
        Set<React> reacts = qt.find(point);
        int res = -1;
        for (React react : reacts) {
            if (react.val > res) {
                res = react.val;
            }
        }
        System.out.println(res);
    }
}

class React {
    int val;
    int x, y, w, h;

    React(int xx, int yy, int ww, int hh) {
        this.x = xx;
        this.y = yy;
        this.w = ww;
        this.h = hh;
    }

    public void setVal(int val) {
        this.val = val;
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

class QuartTree extends React {
    Set<React> reacts = new HashSet<>();
    QuartTree leftTop;
    QuartTree leftBot;
    QuartTree righTop;
    QuartTree righBot;
    int val;

    QuartTree(int xx, int yy, int ww, int hh) {
        super(xx, yy, ww, hh);
    }

    void add(React react) {
        if (react.x + react.w < x + w / 2 &&
                react.y + react.h < y + h / 2) {
            // 左上角
            if (leftTop == null) {
                leftTop = new QuartTree(x, y, w / 2, h / 2);
            }
            leftTop.add(react);

        } else if (react.x > x + w / 2 &&
                react.y > y + h / 2) {
            // 右下角
            if (righBot == null) {
                righBot = new QuartTree(x + w / 2, y + h / 2, w / 2, h / 2);
            }
            righBot.add(react);

        } else if (react.x + react.w < x + w / 2 &&
                react.y > y + h / 2) {
            // 左下角
            if (leftBot == null) {
                leftBot = new QuartTree(x, y + h / 2, w / 2, h / 2);
            }
            leftBot.add(react);

        } else if (react.x > x + w / 2 &&
                react.y + react.h < y + h / 2) {
            // 右上角
            if (righTop == null) {
                righTop = new QuartTree(x + w / 2, y, w / 2, h / 2);
            }
            leftTop.add(react);
        } else {
            reacts.add(react);
        }
    }

    Set<React> find(Point point) {
        if (point.isCollision(this)) {
            Set<React> result = new HashSet<>();
            for (React react : reacts) {
                if (point.isCollision(react)) {
                    result.add(react);
                }
            }
            if (leftTop != null &&
                    point.x < x + w / 2 &&
                    point.y < y + h / 2) {
                result.addAll(leftTop.find(point));
            } else if (righBot != null &&
                    point.x > x + w / 2 &&
                    point.y > y + h / 2) {
                result.addAll(righBot.find(point));
            } else if (leftBot != null &&
                    point.x < x + w / 2 &&
                    point.y > y + h / 2) {
                result.addAll(leftBot.find(point));
            } else if (righTop != null &&
                    point.x > x + w / 2 &&
                    point.y < y + h / 2) {
                result.addAll(righTop.find(point));
            }
            return result;
        } else
            return null;
    }
}
