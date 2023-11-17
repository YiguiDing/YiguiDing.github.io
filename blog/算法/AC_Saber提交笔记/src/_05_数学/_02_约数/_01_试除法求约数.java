package _05_数学._02_约数;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;

public class _01_试除法求约数 {
	static ArrayList<Integer> getDivisors(int n) {
		ArrayList<Integer> divisors = new ArrayList<>();
		for(int i=1;i<=n/i;i++) {
			if(n%i==0){
			     divisors.add(i);
			    if(n/i!=i) divisors.add(n/i);
			}
		}
		Collections.sort(divisors);
		return divisors;
	}
	public static void main(String[] args) {
		int n = nextInt();
		while(n--!=0) {
			int m = nextInt();
			ArrayList<Integer> res =  getDivisors(m);
			for(Integer d:res) {
				printer.print(d+" ");
			}
			printer.println();
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