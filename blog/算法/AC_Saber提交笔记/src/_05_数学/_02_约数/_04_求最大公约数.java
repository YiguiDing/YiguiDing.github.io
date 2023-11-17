package _05_数学._02_约数;
// 提交状态：AC
/*
 * 输入：
2
3 6
4 6
 * 输出：
3
2
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map.Entry;

public class _04_求最大公约数 {
	static int gcd(int a,int b) {
		return b==0? a:gcd(b, a%b);
	}
	public static void main(String[] args) {
		int n=nextInt();
		while(n--!=0) {
			int a=nextInt(),b=nextInt();
			printer.println(gcd(a, b));
		}
		printer.flush();
	}
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer = new PrintWriter(writer);
	static String[] tokens = null;
	static int idx=0;
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static String nextStr() {
		nextToken();
		return tokens[idx];
	}
	static long nextLon() {
		nextToken();
		return Long.parseLong(tokens[idx]);
	}
	static void nextToken() {
		idx++;
		if(tokens==null || idx==tokens.length) {
			try {
				tokens = reader.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			idx = 0;
		}
	}	
}