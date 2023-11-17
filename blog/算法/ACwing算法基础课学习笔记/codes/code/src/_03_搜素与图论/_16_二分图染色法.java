package _03_搜素与图论;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;

/**
4 4
1 3
1 4
2 3
2 4
输出 Yes
 * 
 */

public class _16_二分图染色法 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);

	static int h[], next[], v[], weight[], idx;
	static int MaxNode, MaxEdge, NULL = 0;

	static void init(int n, int m) {
		MaxNode = n;
		MaxEdge = m;
		h = new int[MaxNode + 1];
		v = new int[2 * MaxEdge + 2];
		next = new int[2 * MaxEdge + 2];
		idx = 1;
	}
	static void add(int a, int b) {
		v[idx] = b;
		next[idx] = h[a];
		h[a] = idx++;
	}
	public static void main(String[] args) {
		int n = nextInt(), m = nextInt();
		init(n, m);
		while (m-- != 0) {
			int a = nextInt();
			int b = nextInt();
			add(a, b);
			add(b, a);
		}
		if (fillColor()) pw.println("Yes");
		else pw.println("No");
		pw.flush();
	}

	static int colors[];

	static boolean fillColor() {
		colors = new int[MaxNode + 1];
		for (int n = 1; n <= MaxNode; n++) 
			if (colors[n] == 0 && !dfs(n, 1)) return false;
		return true;
	}

	static boolean dfs(int root, int rootColor) {
		colors[root] = rootColor;
		for (int p = h[root]; p != NULL; p = next[p]) {
			if (colors[v[p]] == rootColor) return false;
			if (colors[v[p]]==0 && dfs(v[p], 3 - rootColor) == false)  return false;
		}
		return true;
	}
	static int nextInt() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) st.nval;
	}

	static String nextStr() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return st.sval;
	}
}
