package _03_数据结构;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
/*
提交状态: AC
输入
8 3
1 3 -1 -3 5 3 6 7
输出
-1 -3 -3 -3 3 3
3 3 5 5 6 7
 * */
public class _06_单调队列 {
	private static int queue[],head,tail,size,MAX_SIZE;
	static void init(int capacity) {
		MAX_SIZE=capacity;
		queue=new int[MAX_SIZE];
		head=0;tail=0;size=0;
	}
	static void clear() {
		head=0;tail=0;size=0;
	}
	static void EnQueue(int x) {
		queue[tail]=x;
		tail=++tail%MAX_SIZE;
		size++;
	}
	static int DeQueue() {
		int t = queue[head];
		head=++head%MAX_SIZE;
		size--;
		return t;
	}
	static int Dequeue_tail() {
		tail=(tail-1+MAX_SIZE)%MAX_SIZE;
		int t = queue[tail];
		size--;
		return t;
	}
	static int getHead() {
		return queue[head];
	}
	static int getTail() { // 注意获取tail的写法，不要写成queue[tail]
		return queue[(tail-1+MAX_SIZE)%MAX_SIZE];
	}
	static boolean isEmpty() {
		return size==0;
	}
	static boolean isFull() {
		return size==MAX_SIZE;
	}
	static int[] getWindowMin(int[] arr,int winSize) {
		clear();
		int[] res = new int[arr.length];
		for(int i=0;i<arr.length;i++) {
			while(!isEmpty() && arr[getTail()]>=arr[i]) Dequeue_tail();// 保持单调性
			while(!isEmpty() && getHead()<=i-winSize) DeQueue();// 维持窗口大小
			EnQueue(i);
			res[i]=arr[getHead()];
		}
		return res;
	}
	static int[] getWindowMax(int[] arr,int winSize) {
		clear();
		int[] res = new int[arr.length];
		for (int i = 0; i < res.length; i++) {
			while(!isEmpty()&&arr[getTail()]<=arr[i]) Dequeue_tail();
			while(!isEmpty()&&getHead()<=i-winSize) DeQueue();
			EnQueue(i);
			res[i]=arr[getHead()];
		}
		return res;
	}
	public static void main(String[] args) throws IOException {
		int N =nextInt(),K=nextInt();
		init(N);
		int[] arr = new int[N];
		for (int i = 0; i < arr.length; i++) arr[i]=nextInt();
		int[] resMin = getWindowMin(arr,K);
		for (int i = K-1; i < resMin.length; i++) {
			if(i!=K-1) pw.print(" ");
			pw.print(resMin[i]);
		}
		pw.println("");
		int[] resMax= getWindowMax(arr, K);
		for (int i = K-1; i < resMax.length; i++) {
			if(i!=K-1) pw.print(" ");
			pw.print(resMax[i]);
		}
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
