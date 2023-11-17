package _05_数学._01_质数;

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
import java.util.ArrayList;

public class _02_分解质因数 {
	static void divide_simple(int n) {
		for (int i = 2; i <= n / i; i++) {// 只需要除到sqrt(n) ,n中大于sqrt的质因数最多只有一个。因为，如果有两个，这两个质因数的乘积必然大于n
			if (n % i == 0) {
				int base = i;// 找到一个质因数
				int pow = 0;// 记录次数
				while (n % base == 0) {
					n /= base;// 一直除，直到除完n中的所有质因数
					pow += 1;// 记录含有的质因数个数
				}
				printer.println(base + " " + pow);
			}
		}
		if (n > 1) printer.println(n + " " + 1); // n不为1说明还含有一个大于sqrt(n)的质因数
		printer.println();
	}
	static class PrimeFactors{
		int base,pow;
		public PrimeFactors(int base, int pow) {
			this.base = base;
			this.pow = pow;
		}
	}
	static ArrayList<PrimeFactors> divide(int n) {
		ArrayList<PrimeFactors> res = new ArrayList<>();
		for (int i = 2; i <= n/i; i++) {
			if(n%i==0) {
				int base = i;
				int pow = 0;
				while(n%base==0) {
					pow++;
					n/=base;
				}
				res.add(new PrimeFactors(base, pow));
			}
		}
		if(n>1) res.add(new PrimeFactors(n, 1));
		return res;
	}
	public static void main(String[] args) throws Throwable {
		int n = nextInt();
		while (n-- != 0) {
			int m = nextInt();
//			divide_simple(m);
			ArrayList<PrimeFactors> res =  divide(m);
			for(PrimeFactors factor:res) {
				printer.println(factor.base+" "+factor.pow);
			}
			printer.println();
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
		if (tokens == null || idx == tokens.length) {
			tokens = reader.readLine().split(" ");
			idx = 0;
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
