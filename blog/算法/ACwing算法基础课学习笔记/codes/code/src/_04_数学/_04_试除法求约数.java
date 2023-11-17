package _04_数学;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class _04_试除法求约数 {
//	试除法求所有约数 O(sqrt(N))
	static ArrayList<Integer> getDivisor(int n){
		ArrayList<Integer> divisor = new ArrayList<>();
		for (int i = 1; i <= n/i; i++) {
			if(n%i==0) {
				divisor.add(i);
				if(i!=n/i) divisor.add(n/i);
			}
		}
		Collections.sort(divisor);
		return divisor;
	}
	public static void main(String[] args) {
		printer.println(getDivisor(100));//[1, 2, 4, 5, 10, 20, 25, 50, 100]
		printer.flush();
	}
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(reader);
	static PrintWriter printer = new PrintWriter(writer);
	static String tokens[];static int idx;
	static void nextToken() throws IOException {
		idx++;
		if(tokens==null||idx==tokens.length)
			tokens=reader.readLine().split(" ");
	}
	static int nextInt() throws IOException{
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static long nextLon() throws IOException{
		nextToken();
		return Long.parseLong(tokens[idx]);
	}
	static String nextStr()throws IOException{
		nextToken();
		return tokens[idx];
	}
}
