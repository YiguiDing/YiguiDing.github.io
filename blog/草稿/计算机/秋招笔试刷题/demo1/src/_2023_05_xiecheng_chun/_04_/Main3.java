package _2023_05_xiecheng_chun._04_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

// 算法正确但超时

public class Main3 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static StreamTokenizer st = new StreamTokenizer(br);
    static PrintWriter pw = new PrintWriter(bw);

    static int nextInt() throws Exception {
        st.nextToken();
        return (int) st.nval;
    }

    static long nextLon() throws Exception {
        st.nextToken();
        return (long) st.nval;
    }

    static String nextStr() throws Exception {
        st.nextToken();
        return st.sval;
    }

    static class Record {
        long num;
        long cnt;

        public Record(long num, Long cnt) {
            this.num = num;
            this.cnt = cnt;
        }

        @Override
        public String toString() {
            return "Record [num=" + num + ", cnt=" + cnt + "]";
        }

    }

    static LinkedList<Record> records_0 = new LinkedList<>();
    static LinkedList<Record> records_1 = new LinkedList<>();

    static void getNextMatrx() {

    }

    public static void main(String[] args) throws Exception {
        Long n = nextLon(); // 10^12
        int m1 = nextInt(); // 10^5
        int m2 = nextInt();

        for (int i = 0; i < m1; i++) {
            long num = nextLon(); // 10^9
            long cnt = nextLon(); // 10^12
            records_0.add(new Record(num, cnt));
        }
        for (int i = 0; i < m2; i++) {
            long num = nextLon(); // 10^9
            long cnt = nextLon(); // 10^12
            records_1.add(new Record(num, cnt));
        }
        // System.out.println(records_0);
        // System.out.println(records_1);
        int cnt = 0;
        Set<Long> set = new HashSet<>();
        for (long i = 0; i < n - 1; i++) {
            set.clear();
            // System.out.println(records_0);
            // System.out.println(records_1);

            Record r0_0 = records_0.getFirst();
            Record r1_0 = records_1.getFirst();

            if (r0_0.cnt == 0) {
                records_0.pop();
                r0_0 = records_0.getFirst();
            }
            if (r1_0.cnt == 0) {
                records_1.pop();
                r1_0 = records_1.getFirst();
            }
            set.add(r0_0.num);
            set.add(r1_0.num);
            r0_0.cnt--;
            r1_0.cnt--;

            Record r0_1 = r0_0.cnt >= 1 ? r0_0 : records_0.get(1);
            Record r1_1 = r1_0.cnt >= 1 ? r1_0 : records_1.get(1);

            set.add(r0_1.num);
            set.add(r1_1.num);

            if (set.size() == 2) {
                cnt++;
            }
        }
        pw.println(cnt);
        pw.flush();
    }
}
