package _03_数据结构._11_hash表;
/*
提交状态: AC
输入
8 3
aabbaabb
1 3 5 7
1 3 6 8
1 2 1 2
输出
Yes
No
Yes
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _02_字符串hash {
	static long[] hashs,pows;
	// '0'=》 48 | '1'=》 49  | 'A'=》 65  | 'a'=》 97  | 'z'=》 122
	//  [1-9] 九个数，基数为9：'9'-'1' + 1 = 9个数字
	//	[0-1-9] 十个数，十进制，基数为10
	//	[0-9-A-Z-a-Z],很多个数，基数为 Base='z'-'0'+1
	static long Base='z'-'0'+1;
//	计算字符串的hash，str是从1开始的。
	static void initStrHash(char[] str) {// 字符串只包含大小写字母和数字
		hashs=new long[str.length];
		pows=new long[str.length];pows[0]=1;//初始化。 
		for (int i = 1; i < str.length; i++) {
			hashs[i]=hashs[i-1]*Base + str[i]-'0'+1;// 应该避免出现0;否则hash(A)=0 hash(AA)=0
			pows[i]=pows[i-1]*Base;// 计算指数; pows[0]=1;pows[1]=Factor;pows[2]=Factor*Factor;
		}
	}
//	获得子串的hash
	static long getSubStrHash(int l,int r) {
		return hashs[l-1]*pows[r-l+1]-hashs[r];
	}
	public static void main(String[] args) throws NumberFormatException, IOException {
		String[] ops = re.readLine().split(" ");
		int N = Integer.parseInt(ops[0]),M=Integer.parseInt(ops[1]);
		char[] str = new char[N+1];
		for(int i=1;i<=N;i++) {
			str[i]=(char) re.read();
		}re.readLine();
		initStrHash(str);
		while (M--!=0) {
			ops = re.readLine().split(" ");
			int l1=Integer.parseInt(ops[0]);
			int r1=Integer.parseInt(ops[1]);
			int l2=Integer.parseInt(ops[2]);
			int r2=Integer.parseInt(ops[3]);
			if(getSubStrHash(l1, r1)==getSubStrHash(l2, r2)) {
				pw.println("Yes");
			}else {
				pw.println("No");
			}
		}
		pw.flush();
	}
	static BufferedReader re = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer = new StreamTokenizer(re);
	static PrintWriter pw = new PrintWriter(wr);
	static int nextInt() {
		try {
			tokenizer.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) tokenizer.nval;
	}
	static String nextStr() {
		try {
			tokenizer.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return tokenizer.sval;
	}
}
