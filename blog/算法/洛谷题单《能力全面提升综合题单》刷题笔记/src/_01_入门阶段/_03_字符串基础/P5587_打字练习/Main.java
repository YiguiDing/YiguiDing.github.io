package _01_入门阶段._03_字符串基础.P5587_打字练习;

import java.util.LinkedList;
import java.util.Scanner;
import java.util.Stack;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        LinkedList<String> article = new LinkedList<>();
        LinkedList<String> inputs = new LinkedList<>();
        String line;
        // 这题最坑的就是范文也有‘<’退格键需要处理。
        while (!(line = sc.nextLine()).equals("EOF")) {
            Stack<Character> buffer = new Stack<>();// 缓冲区
            for (char ch : line.toCharArray()) {
                if (ch == '<') {// 删除键
                    if (buffer.size() > 0)
                        buffer.pop();// 清除缓冲区中的一个元素
                } else {
                    buffer.push(ch);// 录入非删除键
                }
            }
            StringBuffer sb = new StringBuffer();
            for (char ch : buffer) {
                sb.append(ch);
            }
            article.add(sb.toString());
        }
        while (!(line = sc.nextLine()).equals("EOF")) {
            Stack<Character> buffer = new Stack<>();// 缓冲区
            for (char ch : line.toCharArray()) {
                if (ch == '<') {// 删除键
                    if (buffer.size() > 0)
                        buffer.pop();// 清除缓冲区中的一个元素
                } else {
                    buffer.push(ch);// 录入非删除键
                }
            }
            StringBuffer sb = new StringBuffer();
            for (char ch : buffer) {
                sb.append(ch);
            }
            inputs.add(sb.toString());
        }

        int Ts = sc.nextInt();
        int cnt = 0;
        // System.out.println(article);
        // System.out.println(inputs);
        while (article.size() != 0 && inputs.size() != 0) {
            String lineA = article.removeFirst();
            String lineB = inputs.removeFirst();
            int i = 0;
            while (i < lineA.length() && i < lineB.length()) {
                if (lineA.charAt(i) == lineB.charAt(i)) {
                    cnt++;
                }
                i++;
            }
        }
        int res = (int) (cnt / (Ts / 60.0) + 0.5);// 四舍五入直接+0.5然后强制转int即可
        System.out.println(res);
    }
}
