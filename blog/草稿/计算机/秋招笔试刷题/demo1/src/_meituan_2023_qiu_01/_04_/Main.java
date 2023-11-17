package _meituan_2023_qiu_01._04_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

// 耗时11分钟
// 2023-11-04T15:55
// 2023-11-04T16:06
public class Main {
    public static void main(String[] args) throws Exception {
        int n = nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = nextInt();
        }
        int x = nextInt();
        int y = nextInt();
        Integer x_idx = null;
        Integer y_idx = null;
        for (int idx = 0; idx < nums.length; idx++) {
            if (nums[idx] == x)
                x_idx = idx;
            if (nums[idx] == y)
                y_idx = idx;
            if (x_idx != null && y_idx != null) {
                break;
            }
        }
        if (x_idx != null && y_idx != null && Math.abs(x_idx - y_idx) == 1)
            pw.println("Yes");
        else
            pw.println("No");
        pw.flush();
    }

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
}
