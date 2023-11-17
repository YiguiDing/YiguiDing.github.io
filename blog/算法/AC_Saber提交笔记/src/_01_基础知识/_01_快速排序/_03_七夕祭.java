package _01_基础知识._01_快速排序;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
/*
提交状态: 不会
输入
2 3 4
1 3
2 1
2 2
2 3
输出
row 1
 * */
public class _03_七夕祭 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	public static void main(String[] args) {
		int N = (int)nextNum();
		int M = (int)nextNum();
		int T = (int)nextNum();
		boolean[][] map = new boolean[N][M];
		while(T--!=0) {
			map[(int)nextNum()][(int)nextNum()]=true;
		}
		pw.flush();
	}
	static double nextNum() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO: handle exception
		}
		return st.nval;
	}
	static String nextStr() {
		try {
			st.nextToken();
		} catch (IOException e) {
		}
		return st.sval;
	}
}
