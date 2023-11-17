package _01_基础知识._07_双指针算法;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;
import java.util.TreeMap;
/*
提交状态: AC
输入
10
9 3 6 9 5 10 1 2 3 9
输出
7
 * */

public class _01_最长连续不重复子序列_集合与队列 {
	public static void main(String[] args) {
		int N =nextInt();
		int arr[]=new int[N];
		int len = 0;
		for (int i = 0; i < arr.length; i++) arr[i]=nextInt();
		Set<Integer> set = new HashSet<>();
		Queue<Integer> queue = new LinkedList<>();
		for (int head = 0,tail=0; tail < arr.length;tail++) {
			if(!set.contains(arr[tail])) {
				set.add(arr[tail]);
				queue.add(tail);
			}
			else {
				while(set.contains(arr[tail])) {
					head = queue.poll();
					set.remove(arr[head]);
				}
				head+=1;
				set.add(arr[tail]);
				queue.add(tail);
			}
			len=Math.max(len, tail-head+1);
		}
		pw.print(len);
		pw.flush();
	}
	
	
	
	
	
	
	
	
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
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
