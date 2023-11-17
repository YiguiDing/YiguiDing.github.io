package _03_数据结构._10_堆排序;

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
5 3
4 5 1 3 2
输出
1 2 3
 * */
public class _01_堆排序 {
	static class Heap{
		int val[],tail,MAX_SIXE;
		public Heap(int capacity) {
			init(capacity);
		}
		void init(int capacity){
			MAX_SIXE=capacity;
			val=new int[MAX_SIXE];
			tail=0;
		}
		void up(int k) {
			int tarIdx=k;
			int fatherIdx = k/2;
			if(fatherIdx>=1&&val[fatherIdx]>val[tarIdx])tarIdx=fatherIdx;
			if(tarIdx==k)return;
			swap(k, tarIdx);
			up(tarIdx);
		}
		void down(int k) {
			int tarIdx = k;
			int left = 2*k;
			int right = 2*k+1;
			if(left<=tail && val[left]<val[tarIdx]) tarIdx=left;
			if(right<=tail && val[right]<val[tarIdx]) tarIdx=right;
			if(tarIdx==k) return;
			swap(k, tarIdx);
			down(tarIdx);
		}
		void add(int x) {
			tail++;
			val[tail]=x;
			up(tail);
		}
		int removeTop() {
			int t=val[1];
			swap(1, tail);
			tail--;
			down(1);
			return t;
		}
		void swap(int i,int j) {
			if(i!=j) {
				val[i]=val[i]^val[j];
				val[j]=val[i]^val[j];
				val[i]=val[i]^val[j];
			}
		}
	}
	public static void main(String[] args) throws IOException  {
		int n =nextInt(),m=nextInt();
		Heap unionSet =new Heap(n+1);
		for (int i = 0; i < n; i++) {
			unionSet.add(nextInt());
		}
		for (int i = 0; i < m; i++) {
			if(i!=0)pw.print(" ");
			pw.print(unionSet.removeTop());
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
