package _02_基础算法._01_模拟._05_P1042_乒乓球;

import java.io.BufferedInputStream;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));

        LinkedList<Record> records_11 = new LinkedList<>();
        LinkedList<Record> records_21 = new LinkedList<>();

        outer: while (sc.hasNext()) {
            String line = sc.nextLine();
            for (char ch : line.toCharArray()) {

                Record record_11 = records_11.size() >= 1 ? records_11.getLast() : null;
                Record record_21 = records_21.size() >= 1 ? records_21.getLast() : null;

                // 必须一个人的分数达到11分并且分数之差大于2
                if (record_11 == null || (record_11.a >= 11 || record_11.b >= 11) && Math.abs(record_11.a - record_11.b) >= 2) {
                    records_11.addLast(record_11 = new Record(0, 0));
                }
                // 必须一个人的分数达到21分并且分数之差大于2
                if (record_21 == null || (record_21.a >= 21 || record_21.b >= 21) && Math.abs(record_21.a - record_21.b) >= 2) {
                    records_21.addLast(record_21 = new Record(0, 0));
                }
                switch (ch) {
                    case 'W':
                        record_11.a++;
                        record_21.a++;
                        break;
                    case 'L':
                        record_11.b++;
                        record_21.b++;
                        break;
                    case 'E':
                        break outer;
                }
            }
        }
        for (Record record : records_11) {
            System.out.println(record.a + ":" + record.b);
        }
        System.out.println("");// 换行
        for (Record record : records_21) {
            System.out.println(record.a + ":" + record.b);
        }
    }
}

class Record {
    int a, b;

    Record(int aa, int bb) {
        a = aa;
        b = bb;
    }
}