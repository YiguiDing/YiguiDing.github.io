package _meituan_2023_qiu_01._06_;

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

    static int head[], wigh[], value[], next[], idx, MaxNode, INF = 0x3f3f3f3f;

    static void init(int size) {
        MaxNode = size + 1;
        head = new int[MaxNode];
        wigh = new int[MaxNode];
        next = new int[MaxNode];
        idx = 0;
        Arrays.fill(head, -1);
    }

    static void addEdge(int from, int to, int wg) {
        value[idx] = to;
        wigh[idx] = wg;
        next[idx] = head[from];
        head[from] = idx++;
    }

    static void dij(int from, int to) {
        boolean visited[] = new boolean[MaxNode];
        int dist[] = new int[MaxNode];
        Arrays.fill(dist, INF);
        dist[from] = 0;
        visited[from] = true;
        for (int n = 1; n <= MaxNode; n++) {

        }
    }

    static void getNextNode(int[] dis, boolean[] exclude) {
        int target = -1;
        int mindis = INF;
        for (int i = 1; i < dis.length; i++) {

        }
    }

    public static void main(String[] args) {

    }
}
