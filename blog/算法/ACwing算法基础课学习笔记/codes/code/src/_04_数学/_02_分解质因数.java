package _04_数学;
/*
提交状态: AC
输入
2
6
8
输出
2 1
3 1

2 3

*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _02_分解质因数 {
	static void divide(int n) {
		for (int i = 2; i <= n/i|| n>1 ; i++) {// 因为n中最多只包含一个大于sqrt(n)的因数,对这个因数特殊处理即可，证明：如果有两个，则乘积必然大于n.
			if(n%i==0) {
				int pow=0;
				while(n%i==0) {
					pow++;
					n/=i;
				}
				printer.println(i+" "+pow);
			}
		}
//		if(n>1) {// 特殊处理
//			printer.println(n+" "+1);
//		}
		printer.println();
	}
	public static void main(String[] args) throws Throwable {
		int n = nextInt();
		while (n--!=0) {
			divide(nextInt());
		}
		printer.flush();
	}
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(reader);
	static PrintWriter printer = new PrintWriter(writer);
	static String[] tokens;
	static int idx;
	static void nextToken() throws Throwable {
		idx++;
		if(tokens==null||idx==tokens.length) {
			tokens=reader.readLine().split(" ");
			idx=0;
		}
	}
	static int nextInt() throws Throwable {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static long nextLon() throws Throwable {
		nextToken();
		return Long.parseLong(tokens[idx]);
	}
	static String nextStr() throws Throwable {
		nextToken();
		return tokens[idx];
	}
}
