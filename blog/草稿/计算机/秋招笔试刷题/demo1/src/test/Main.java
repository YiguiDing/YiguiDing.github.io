package test;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static StreamTokenizer st = new StreamTokenizer(br);
    static PrintWriter pw = new PrintWriter(bw);

    static int nextInt() throws IOException {
        st.nextToken();
        return (int) st.nval;
    }

    static long nextLon() throws Exception {
        st.nextToken();
        return (long) st.nval;
    }

    static double nextDob() throws Exception {
        st.nextToken();
        return st.nval;
    }

    static String nexString() throws IOException {
        st.nextToken();
        return st.sval;
    }

    static int[] get(int x) {
        int r = (int) Math.ceil(Math.sqrt(x));
        for (int n = 2; n <= r; n++) {
            int m = x / n;
            if ((m + n) % 2 == 0 && m * n == x) {
                return new int[] { n, m };
            }
        }
        return null;
    }

    public static void main(String[] args) throws Exception {
        int t = nextInt();
        for (int i = 0; i < t; i++) {
            int x = nextInt();
            int[] res = get(x);
            if (res == null) {
                pw.println(-1);
            } else {
                pw.println(res[0] + " " + res[1]);
            }
        }
        pw.flush();

    }
}
