package _01_基础知识._08_位运算;
/*
提交状态: AC
输入
250182048980811753
413715569939057660
133223633696258584
输出
19308689043391716

 * */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _02_64位整数乘法 {
	public static void main(String[] args) {
		long a = nextLong();// 注意输入long似乎无法用streamTrokenizer
		long b = nextLong();
		long MOD = nextLong();
		long res=0;
		long t = a;
		long k = b;
		while(0<k) {
			if((k&1)==1) res=(res+t)%MOD;
			t=(2*t)%MOD;
			k>>=1;
		}
		pw.print(res);
		pw.flush();
	}
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static long nextLong() {
			try {
				return Long.parseLong(br.readLine());
			} catch (NumberFormatException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			return 0;
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
