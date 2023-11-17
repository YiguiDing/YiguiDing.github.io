package _01_基础知识._08_位运算;
/*
提交状态: AC
输入
5
1 2 3 4 5
输出
1 1 2 1 2
 * */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _01_二进制中一的个数 {
	static boolean lowBit(long x,int k) {
		return ((x>>k)&1)==1;
	}
	static int bineryCnt(long x) {
		int res=0;
		for(int i=0;i<64;i++) 
			if(lowBit(x, i)) res++;
		return res;
	}
	public static void main(String[] args) {
		long n = nextInt();
		for(int i=0;i<n;i++) {
			if(i!=0) pw.print(" ");
			pw.print(bineryCnt(nextInt()));
		}
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
