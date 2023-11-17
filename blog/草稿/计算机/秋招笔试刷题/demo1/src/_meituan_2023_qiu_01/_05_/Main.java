package _meituan_2023_qiu_01._05_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

// from：17:56
// to：18:32
public class Main {
    public static void main(String[] args) throws Exception {
        int n = nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = i + 1;
        }
        Arrays.sort(nums);
        int[] temp = new int[n];
        for (int i = 0, k = n - 1; i < n; i += 2, k--) {
            temp[i] = nums[k];
        }
        for (int i = 1, k = 0; i < n; i += 2, k++) {
            temp[i] = nums[k];
        }
        // pw.println(Arrays.toString(temp));
        // int max = Integer.MIN_VALUE;
        // int min = Integer.MAX_VALUE;
        // for (int i = 0; i < n - 1; i++) {
        // int sum = temp[i] + temp[i + 1];
        // max = Math.max(max, sum);
        // min = Math.min(min, sum);
        // }
        for (int i = 0; i < n; i++) {
            if (i != 0) {
                pw.print(' ');
            }
            pw.print(temp[i]);
        }
        pw.println();
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
