package _05_数学._02_约数;
// 提交状态：AC
/*
 * 输入：
3
2
6
8
 * 输出：
252
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map.Entry;

public class _03_求约数之和 {
	static int MOD = 1000000007;
	public static void main(String[] args) {
		int n = nextInt();
		HashMap<Integer, Integer> powMap = new HashMap<>();// 因为a的范围只在1~100之间，那么其质因数也必然在这个范围内
		while(n--!=0) {
			int a = nextInt();
			for(int i=2;i<=a/i;i++) {
				if(a%i==0) {
					int base = i;
					int pow = 0;
					while(a%i==0) {
						a/=i;
						pow++;
					}
					if(!powMap.containsKey(base)) powMap.put(base, pow);
					else powMap.put(base, powMap.get(base)+pow);
				}
			}
			if(a>1) {
				if(!powMap.containsKey(a)) powMap.put(a, 1);
				else powMap.put(a, powMap.get(a)+1);
			}
		}
		long res = 1;
		for(Entry<Integer, Integer> entry:powMap.entrySet()) {
			int base = entry.getKey();
			int pow = entry.getValue();
			long k = 1;
			while(pow--!=0) k = (k*base+1)%MOD;
			res=res*k%MOD;
		}
		printer.println(res);
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