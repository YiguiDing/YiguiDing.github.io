package _01_基础知识._10_区间合并;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.LinkedList;
/*
提交状态: AC
输入
5
1 2
2 4
5 6
7 8
7 9
输出
3
 * */
public class _01_区间合并 {
	public static void main(String[] args) {
		int N =nextInt();
		LinkedList<Range> ranges =new LinkedList<>();
		LinkedList<Range> res=new LinkedList<>();
		for (int i = 0; i < N; i++) 
			ranges.add(new Range(nextInt(), nextInt()));
		ranges.sort((a1,a2)->a1.left-a2.left);
		while (!ranges.isEmpty()) {
			Range cur = ranges.poll();
			while (!ranges.isEmpty()&&  ranges.getFirst().left<=cur.right) {
				Range after = ranges.poll();
				if(cur.right< after.right) cur.right=after.right;
			}
			res.add(cur);
		}
		pw.println(res.size());
		pw.flush();
	}
	static class Range{
		int left,right;
		public Range(int left, int right) {
			this.left = left;
			this.right = right;
		}
	}
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw =new PrintWriter(bw);
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
