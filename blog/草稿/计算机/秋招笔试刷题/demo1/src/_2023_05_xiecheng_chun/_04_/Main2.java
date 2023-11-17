package _2023_05_xiecheng_chun._04_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Main2 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static StreamTokenizer st = new StreamTokenizer(br);
    static PrintWriter pw = new PrintWriter(bw);

    static int nextInt() throws Exception {
        st.nextToken();
        return (int) st.nval;
    }

    static String nextStr() throws Exception {
        st.nextToken();
        return st.sval;
    }

    public static void main(String[] args) throws Exception {
        int n = nextInt(), m1 = nextInt(), m2 = nextInt();
        int[][] mx = new int[2][n];
        int idx = 0;
        for (int i = 0; i < m1; i++) {
            int num = nextInt();
            int cnt = nextInt();
            while (cnt != 0) {
                mx[0][idx++] = num;
                cnt--;
            }
        }
        idx = 0;
        for (int i = 0; i < m2; i++) {
            int num = nextInt();
            int cnt = nextInt();
            while (cnt != 0) {
                mx[1][idx++] = num;
                cnt--;
            }
        }

        // System.out.println(Arrays.toString(mx[0]));
        // System.out.println(Arrays.toString(mx[1]));

        int cnt = 0;
        Set<Integer> set = new HashSet<Integer>();
        for (int col = 0; col < n - 1; col += 1) {
            set.clear();
            set.add(mx[0][col + 0]);
            set.add(mx[0][col + 1]);
            set.add(mx[1][col + 0]);
            set.add(mx[1][col + 1]);
            if (set.size() == 2) {
                cnt++;
            }
            // pw.println(set.toString());
        }
        pw.println(cnt);
        pw.flush();
    }
}
