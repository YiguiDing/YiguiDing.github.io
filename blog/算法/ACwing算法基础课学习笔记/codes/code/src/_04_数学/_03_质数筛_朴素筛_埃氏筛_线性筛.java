package _04_数学;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.ArrayList;

public class _03_质数筛_朴素筛_埃氏筛_线性筛 {
//	朴素筛
	static ArrayList<Integer> getPrimes_1(int n) {
		ArrayList<Integer> primes = new ArrayList<>();
		boolean remove[] = new boolean[n+1];
		for (int i = 2; i<=n; i++) {
			for(int t=2*i;t<=n;t+=i) remove[t]=true;// 标记i的所有倍数为非质素
			if(!remove[i]) primes.add(i);// 未被筛除,说明当前数i不是[2,i-1]的数的倍数，也就是说[2,i-1]中不存在i的约数，所以一定是质素
		}
		return primes;
	}
//	埃氏筛
	static ArrayList<Integer> getPrimes_2(int n){
		ArrayList<Integer> primes = new ArrayList<>();
		boolean remove[] = new boolean[n+1];
		for (int i = 2; i <= n; i++) {
			if(!remove[i]) {
				primes.add(i);
				for(int t=2*i;t<=n;t+=i) remove[t]=true;// 只需要对所有质素的倍数执行删除操作
			}
		}
		return primes;
	}
//	线性筛法 arrayList实现
	static ArrayList<Integer> getPrimes_3(int n){
		ArrayList<Integer> primes = new ArrayList<>();
		boolean remove[] = new boolean[n+1];
		for (int i = 2; i <= n ; i++) {
			if(!remove[i]) primes.add(i);
			for(int p:primes) {// 遍历AarrayList比较耗时,应该用数组实现
				if(p>n/i) break;// 意思就是p*i<remove.length，防止越界
				remove[p*i]=true;// p*i一定是合数，p一定是其最小质因数，所有合数一定会被筛掉，而且只会被筛掉一次，因为合数一定存在最小质因子，最小质因子一定会枚举到。
				// i%p!=0时，p一定不是i的最小质因子,因为是在从小到大枚举质数，但此时p一定是p*i的最小质因子
				// i%p==0时，p一定是i的最小质因子,因为是在从小到大枚举质数，此时p也一定是p*i的最小质因子，
				// 然后就要停止筛了，因为后续的p就不是i的最小质因子了，同时就更不能保证p是p*i的最小质因子了。
				// 因为只有保证每个合数都被他的最小质因子筛掉，才能使得每个合数都只被筛掉一次，才能保证筛法是线性的
				if(i%p==0) break;
			}
		}
		return primes;
	}
	// 线性筛法，数组实现
	static int primes[],tail;
	static void getPrimes_3_1(int n){
		primes =new int[n+1];tail=0;// 用于保存从[1,n]中找到的所有质数
		boolean remove[] = new boolean[n+1];// 用于标记被筛除的合数
		for (int i = 2; i <=n; i++) {// 从2开始枚举所有自然数
			if(!remove[i]) primes[tail++]=i;// 如果当前数不是合数，则一定是质数，放入收集数组
			
			// 下面的t<tail可以不用写
			// 因为当枚举到数组中最后一个质数时，如果i是质数，则i一定会在上一行代码中被添加到数组中，则枚举到的最后一个质数p就是i，i%p==0，将会break。
			// 如果i不是质数，则一定是合数，那么一定会在从小到大枚举质数的过程中因为能够为其找到一个最小质因数而导致i%p==0而导致break执行
			
			// for枚举已经得到的素数， `(p=primes_3[t])<=n/i` 等效于 `(p=primes_3[t])*i<=n` 是为了防止访问remove[p*i]时越界
			for(int t=0,p;t<tail && (p=primes[t])<=n/i;t++) {
				remove[p*i]=true;// p*i一定是合数，p一定是其最小质因数，所有合数一定会被筛掉，而且只会被筛掉一次，因为合数一定存在最小质因子，最小质因子一定会枚举到。
				if(i%p==0){
					// i%p!=0时，p一定不是i的最小质因子,因为是在从小到大枚举质数，但此时p一定是p*i的最小质因子
					// i%p==0时，p一定是i的最小质因子,因为是在从小到大枚举质数，此时p也一定是p*i的最小质因子，
					// i%p==0时就要停止筛了，因为后续的p就不是i的最小质因子了，同时就更不能保证p是p*i的最小质因子了。
					// 因为只有保证每个合数都被他的最小质因子筛掉，才能使得每个合数都只被筛掉一次，才能保证筛法是线性的
					break;
				}
			}
		}
	}
	static void test() {
		long t1 = System.currentTimeMillis();
		ArrayList<Integer> res1= getPrimes_1(100);
		long t2 = System.currentTimeMillis();
		ArrayList<Integer> res2= getPrimes_2(100);
		long t3 = System.currentTimeMillis();
		ArrayList<Integer> res3= getPrimes_3(100);
		long t4 = System.currentTimeMillis();
		getPrimes_3_1(100);
		long t5 = System.currentTimeMillis();
		
		
		printer.println(res1);
		printer.println();
		printer.println(res2);
		printer.println();
		printer.println(res3);
		printer.println();
		for(int i=0;i<tail;i++) printer.print(primes[i]+" ");
		printer.println();

		printer.println("生成[2,100]中的素数");
		printer.println("朴素筛法耗时："+(t2-t1)+"ms(arrayList存储)");
		printer.println("埃氏筛法耗时："+(t3-t2)+"ms(arrayList存储)");
		printer.println("线性筛法耗时："+(t4-t3)+"ms(arrayList存储，因枚举arrayList数组导致效率变低)");
		printer.println("线性筛法耗时："+(t5-t4)+"ms(数组存储)");
		
		printer.flush();
	}
	public static void main(String[] args) {
		test();
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
