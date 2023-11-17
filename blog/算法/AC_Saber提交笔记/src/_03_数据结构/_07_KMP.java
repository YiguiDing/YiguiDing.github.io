package _03_数据结构;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;
/*
提交状态: AC
输入
3
aba
5
ababa
输出
0 2
 * */
public class _07_KMP {
	static ArrayList<Integer> res = new ArrayList<>();
	static int KMP(char[] str1,char[] str2) {
		int[] next = getNextArray(str2);
		int p1=0,p2=0;
		while(p1<str1.length&&p2<str2.length) {
			if(str1[p1]==str2[p2]) {
				p1++;
				p2++;
			}else if(next[p2]!=-1) {
				p2=next[p2];
			}else {
				p1++;
			}
			if(p2==str2.length) {
				res.add(p1-p2);
				pw.print((p1-p2)+" ");
				p1-=1;
				p2=next[p2-1];
			}
		}
		return p2==str2.length?p1-p2:-1;
	}
	static int[] getNextArray(char[] str) {
		if(str.length<=2) return new int[] {-1,0};
		int[] next =new int[str.length];
		next[0]=-1;next[1]=0;
		for(int i=2;i<next.length;i++) {
			for (int len = next[i-1]; len >=0 ; len=next[len]) {
				if(str[len]==str[i-1]) {
					next[i]=len+1;
					break;
				}
			}
		}
		return next;
	}
	public static void main(String[] args) throws IOException {
		int n1=Integer.parseInt(br.readLine());
		char[] ch1= new char[n1];
		br.read(ch1);br.readLine();
		int n2=Integer.parseInt(br.readLine());
		char[] ch2= new char[n2];
		br.read(ch2);br.readLine();
		KMP(ch2, ch1);
//		for (int i = 0; i < res.size(); i++) {
//			if(i!=0) pw.print(" ");
//			pw.print(res.get(i));
//		}
		pw.flush();
	}
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw =new PrintWriter(bw);

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
