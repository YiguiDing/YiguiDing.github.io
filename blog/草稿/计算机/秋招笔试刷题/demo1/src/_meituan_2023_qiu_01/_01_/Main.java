package _美团_2023_秋_01._01_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

/**
 * Main
 */
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

    // 2023-11-03T13:10
    // 2023-11-03T13:37

    public static void main(String[] args) throws Exception {
        // b折扣价<=a原价
        // 订单满x减y （y<=x）
        // 折扣与满减互斥
        // 按原价购买才能享受折扣优惠
        // 自动计算最低价方案

        double sumA = 0;
        double sumB = 0;
        // 总价 1<=n<=10^5
        int n = nextInt();
        // 原价，折扣价
        double[] a_origin = new double[n];
        double[] b_discont = new double[n];
        for (int i = 0; i < n; i++) {
            a_origin[i] = nextDob();
            b_discont[i] = nextDob();
            if (b_discont[i] > a_origin[i] || a_origin[i] <= 0 || b_discont[i] <= 0) {
                pw.println("error");
                pw.flush();
                return;
            }
            sumA += a_origin[i];
            sumB += b_discont[i];
        }
        // 满减，满x减y
        double x = nextDob();
        double y = nextDob();
        if (x < y || x <= 0 || y <= 0) {
            pw.println("error");
            pw.flush();
            return;
        }
        if (sumA >= x) {
            sumA -= y;
        }
        double ans = Math.min(sumA, sumB);
        pw.printf("%.2f\n", ans);
        pw.flush();
        return;
    }
}