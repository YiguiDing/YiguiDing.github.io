package _03_数据结构._09_并查集;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.HashMap;
/*
提交状态: AC
输入
5 10
M 2 3
Q 2 3
M 1 5
Q 3 2
M 1 4
Q 4 5
Q 1 2
Q 2 4
M 4 1
Q 5 3
输出
Yes
Yes
Yes
No
No
No

 * */
public class _01_并查集 {
	static class UnionSet{
		HashMap<Integer, Integer> parentMap= new HashMap<>();
		void add(int x) {
			parentMap.put(x, x);
		}
		int findParent(int cur) {
			int curParent = parentMap.get(cur);
			if(curParent!=cur)parentMap.put(cur, findParent(curParent));
			return parentMap.get(cur);
		}
		boolean isSameSet(int x1,int x2) {
			return findParent(x1)==findParent(x2);
		}
		void union(int x1,int x2) {
			parentMap.put(findParent(x1), findParent(x2));
		}
	}
	public static void main(String[] args) throws IOException  {
		UnionSet unionSet = new UnionSet();
		String[] ops = br.readLine().split(" ");
		int n =Integer.parseInt(ops[0]),m=Integer.parseInt(ops[1]);
		for (int i = 1; i <= n; i++) {
			unionSet.add(i);
		}
		while(m--!=0) {
			ops = br.readLine().split(" ");
			if("M".equals(ops[0])) {
				int a = Integer.parseInt(ops[1]);
				int b = Integer.parseInt(ops[2]);
				unionSet.union(a, b);
			}else if("Q".equals(ops[0])) {
				int a = Integer.parseInt(ops[1]);
				int b = Integer.parseInt(ops[2]);
				pw.println(unionSet.isSameSet(a, b)?"Yes":"No");
			}
		}
		pw.flush();
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
