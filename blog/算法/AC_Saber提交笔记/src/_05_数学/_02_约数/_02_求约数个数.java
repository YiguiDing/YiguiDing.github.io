package _05_数学._02_约数;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.security.KeyStore.Entry;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class _02_求约数个数 {
	static long MOD = 1000000007;
	public static void main(String[] args) {
		int n = nextInt();
		HashMap<Integer, Integer> powmap = new HashMap<>();
		while(n--!=0) {
			int m = nextInt();
			for (int i = 2; i <=m/i; i++) {
				if(m%i==0) {
					int base=i;
					int pow=0;
					while(m%base==0) {
						m/=base;
						pow++;
					}
					if(!powmap.containsKey(base)) powmap.put(base, pow);
					else powmap.put(base, powmap.get(base)+pow);
				}
			}
			if(m>1) {
				if(!powmap.containsKey(m)) powmap.put(m, 1);
				else powmap.put(m, powmap.get(m)+1);
			}
		}
		long res=1;
		for(long pow:powmap.values()) {
			res=res*(pow+1)%MOD;
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