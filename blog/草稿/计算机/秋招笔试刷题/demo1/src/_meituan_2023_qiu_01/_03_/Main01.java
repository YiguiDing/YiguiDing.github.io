package _美团_2023_秋_01._03_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

// 2023-11-03T14:26
// 2023-11-03T16:09
// 思路错了，一开始以为只要遍历边的集合就好了，实际上还是要建立图，要先处理子节点的相邻边
// 比如:（3和6是2的子节点,7是6的子节）
// 2—3
// |
// 6—7
// 2和3可以标红，6和7可以标红
// 2和6也可以标红
// 如果先处理父节点，先标红2和6，那么2-3 6-7就不能标红,只能标红2个节点
// 如果先处理子节点，就可以把2-3,6-7标红，可以标红4个节点
public class Main01 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(
            System.out));
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

    static class Edge {
        int a, b;

        public Edge(int a, int b) {
            this.a = a;
            this.b = b;
        }

    }

    public static void main(String[] args) throws Exception {
        int n = nextInt();
        long[] weight = new long[n + 1];
        boolean[] red = new boolean[n + 1];
        Edge[] edges = new Edge[n - 1];
        for (int i = 1; i <= n; i++) {
            weight[i] = nextLon();
        }
        for (int i = 0; i < n - 1; i++) {
            int u = nextInt();
            int v = nextInt();
            edges[i] = new Edge(u, v);
        }
        int cnt = 0;
        for (int i = 0; i < n - 1; i++) {
            Edge edge = edges[i];
            if (!red[edge.a] && !red[edge.b]) {

                long mult = weight[edge.a] * weight[edge.b];
                long sqrt = (long) Math.sqrt(mult);
                if (sqrt * sqrt == mult) {
                    red[edge.a] = true;
                    red[edge.b] = true;
                    cnt += 2;
                }
            }
        }
        pw.println(cnt);
        pw.flush();
    }
}
