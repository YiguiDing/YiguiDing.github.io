package _meituan_2023_qiu_01._03_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

// 2023-11-03T14:26
// 2023-11-03T16:43
public class Main {
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

    static boolean isCmpSqRot(double x) {
        double sqrt = Math.sqrt(x);
        double _sqrt = Math.floor(sqrt);
        return sqrt == _sqrt;
    }

    static int head[], value[], next[], p, Max_Size;
    static long weight[];
    static boolean redflag[];

    static void init(int capacity) {
        Max_Size = capacity + 1;
        head = new int[Max_Size];
        value = new int[2 * Max_Size];
        next = new int[2 * Max_Size];
        Arrays.fill(head, -1);
        p = 0;
        //
        weight = new long[Max_Size];
        redflag = new boolean[Max_Size];
    }

    static void insert(int a, int b) {
        value[p] = b;
        next[p] = head[a];
        head[a] = p++;
    }

    static int ans = 0;

    static void dfs(int current, int parent) {
        for (int p = head[current]; p != -1; p = next[p]) {
            int child = value[p];
            if (child == parent)
                continue;
            dfs(child, current);
            if (!redflag[current] && !redflag[child] && isCmpSqRot(weight[current] * weight[child])) {
                redflag[current] = true;
                redflag[child] = true;
                ans += 2;
            }
        }
    }

    public static void main(String[] args) throws Exception {
        int n = nextInt();
        init(n);
        for (int i = 1; i <= n; i++) {
            weight[i] = nextLon();
        }
        for (int i = 0; i < n - 1; i++) {
            int u = nextInt();
            int v = nextInt();
            insert(u, v);
            insert(v, u);
        }
        dfs(1, -1);
        pw.println(ans);
        pw.flush();
    }
}
