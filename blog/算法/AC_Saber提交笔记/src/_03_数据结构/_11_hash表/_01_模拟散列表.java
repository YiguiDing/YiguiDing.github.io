package _03_数据结构._11_hash表;
/*
提交状态: AC
输入
5
I 1
I 2
I 3
Q 2
Q 5
输出
Yes
No
 * */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class _01_模拟散列表 {
	static int hashTab[],vals[],next[],idx,MAX_SIZE,NULL=0;
	static void init(int capacity) {
		MAX_SIZE=findNextSu(capacity);
		vals=new int[MAX_SIZE];
		next=new int[MAX_SIZE];
		hashTab=new int[MAX_SIZE];
		idx=1;// 0为空指针，1为第一个可用指针
	}
	static void insert(int x) {
		int pos = hash(x);
		vals[idx]=x;
		next[idx]=hashTab[pos];
		hashTab[pos]=idx++;
	}
	static boolean find(int x) {
		for (int pos = hashTab[hash(x)]; pos != NULL; pos=next[pos]) {
			if(vals[pos]==x)return true;
		}
		return false;
	}
	static int hash(int x) {
		return (x%MAX_SIZE+MAX_SIZE)%MAX_SIZE;// 防止大负数造成hash表越界
	}
	static int findNextSu(int from) {// 找最近的素数
		for (int num = from;true; num++) {
			boolean isFind = true;
			for (int i = 2; i * i <= num; i++) {
				if(num%i==0) {isFind=false;break;};
			}
			if(isFind) return num;
		}
	}
	public static void main(String[] args) throws NumberFormatException, IOException {
		int N = Integer.parseInt(re.readLine());
		init(1000000);
		while (N--!=0) {
			String[] ops = re.readLine().split(" ");
			switch(ops[0]) {
				case"I":
					insert(Integer.parseInt(ops[1]));
					break;
				case "Q":
					pw.println(find(Integer.parseInt(ops[1]))?"Yes":"No");
					break;
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
