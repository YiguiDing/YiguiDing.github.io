package test2;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

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

    static int head[], val[], next[], idx, MAX_NODE, INF = 0x3f3f3f3f;
    static boolean red[];

    static void init(int maxnode) {
        MAX_NODE = maxnode + 1;
        head = new int[MAX_NODE];
        val = new int[MAX_NODE];
        next = new int[MAX_NODE];
        red = new boolean[MAX_NODE];
        dis_min = new int[MAX_NODE];
        idx = 0;
    }

    static void addEdge(int from, int to) {
        val[idx] = to;
        val[idx] = head[from];
        head[from] = idx++;
    }

    static int[] dis_min;

    static void djk(int from) {
        boolean[] visited = new boolean[MAX_NODE];
        Arrays.fill(dis_min, INF);
        dis_min[from] = 0;
        for (int n = 1; n <= MAX_NODE; n++) {
            int node = getNext(dis_min, visited);
            if (node == -1)
                continue;
            for (int p = head[node]; p != -1; p = next[p]) {
                int child = val[p];
                dis_min[child] = Math.min(dis_min[child], dis_min[child] + 1);
            }
        }
    }

    static int getNext(int[] dis, boolean[] exclude) {
        int tar_idx = -1;
        int tar_dis = INF;
        for (int i = 1; i < dis.length; i++) {
            if (!exclude[i] && dis[i] < tar_dis) {
                tar_idx = i;
                tar_dis = dis[i];
            }
        }
        return tar_idx;
    }

    public static void main(String[] args) throws Exception {
        int n = nextInt();
        init(n);
        String r = nexString();
        for (int idx = 0; idx < n; idx++) {
            char ch = r.charAt(idx);
            if (ch == 'R') {
                red[idx + 1] = true;
            }
        }
        for (int idx = 1; idx <= n - 1; idx++) {
            int f = nextInt();
            int t = nextInt();
            addEdge(f, t);
        }
        djk(1);
        pw.println(Arrays.toString(dis_min));
        pw.flush();
        System.out.println();
    }
}
