package _美团_2023_秋_01._02_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

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

    // 2023-11-03T13:37
    // 2023-11-03T14:21
    public static void main(String[] args) throws Exception {
        int n = nextInt();
        String s = nexString();
        String t = nexString();
        HashMap<Character, HashSet<Integer>> s2Map = new HashMap<>();
        int ans = 0;
        for (int idx = 0; idx < s.length(); idx++) {
            Character s_ch = s.charAt(idx);
            Character t_ch = t.charAt(idx);
            if (s_ch == t_ch) {
                ans++;
                continue;
            }
            if (!s2Map.containsKey(t_ch)) {
                s2Map.put(t_ch, new HashSet<>());
            }
            s2Map.get(t_ch).add(idx);
        }
        int addi = 0;
        for (int idx = 0; idx < t.length(); idx++) {
            Character s_ch = s.charAt(idx);
            Character t_ch = t.charAt(idx);
            if (s_ch == t_ch) {
                continue;
            }
            if (s2Map.containsKey(s_ch)) {
                Set<Integer> have = s2Map.get(s_ch);
                if (have.size() != 0) {
                    addi = Math.max(addi, 1);
                }

                for (Integer i : have) {
                    if (t_ch == s.charAt(i)) {
                        addi = Math.max(addi, 2);
                    }
                }
            }
            if (addi == 2) {
                break;
            }
        }
        ans += addi;
        pw.println(ans);
        pw.flush();
        return;

    }
}
