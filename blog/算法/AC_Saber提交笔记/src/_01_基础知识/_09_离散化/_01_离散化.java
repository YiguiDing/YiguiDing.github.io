package _01_基础知识._09_离散化;
/*
提交状态: AC
输入
3 3
1 2
3 6
7 5
1 3
4 6
7 8
输出
8
0
5
输入
10 5
-50 9524
-19 -5705
33 1729
-8 -9723
-33 -5185
-29 7088
19 -4988
-37 985
-29 8888
-46 -5976
19 29
38 42
-17 24
25 49
9 24
输出
-4988
0
-14711
1729
-4988
 * */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class _01_离散化 {
//	求离散化后的实际位置
	static int bsearch(Integer[] arr,int x) {
		int l=0,r=arr.length-1,mid;
		while(l<r) {
			mid=l+(r-l)/2;
			if(x<=arr[mid])r=mid;
			else l=mid+1;
		}
		return l+1;// 因为要计算前缀和，映射到[1,n]的范围
	}
	public static void main(String[] args) throws IOException {
		int N = nextInt(),M=nextInt();
		LinkedList<Integer> all = new LinkedList<>();// 收集所有要用的坐标，包括插入坐标和询问坐标
		LinkedList<Integer> pos = new LinkedList<>();// 收集插入的位置
		LinkedList<Integer> add = new LinkedList<>();// 收集插入的值
		Queue<Integer> que = new LinkedList<>();// 收集询问的位置，注意收集的顺序和要求结果的顺序
		for(int i=0;i<N;i++){
			int p = nextInt(),num=nextInt();
			all.add(p);
			pos.push(p);
			add.push(num);
		}
		
		for (int i = 0; i < M; i++) {
			int l = nextInt(),r = nextInt();
			all.add(l);
			all.add(r);
			que.offer(l);
			que.offer(r);
		}
		
		// 离散化，需要排序和去重
		Integer[] idxMap = new Integer[all.size()]; 
		idxMap = all.toArray(idxMap);
		Arrays.sort(idxMap);// 排序
		LinkedList<Integer> temp= new LinkedList<>();
		for(int i=0;i<idxMap.length;i++)
		{
			if(i==0||idxMap[i]!=idxMap[i-1]) {// 去重
				temp.add(idxMap[i]);
			}
		}
		idxMap=new Integer[temp.size()];
		idxMap=temp.toArray(idxMap);
		
		int[] data = new int[idxMap.length+1];
		while (!pos.isEmpty()) {
			int idx =pos.pop();
			int val = add.pop();
			int realidx = bsearch(idxMap, idx);
			data[realidx]+=val;
		}
		int[] prefix = new int[data.length];
		for (int i = 1; i < data.length; i++) 
			prefix[i]=prefix[i-1]+data[i];
		while (!que.isEmpty()) {
			int l = bsearch(idxMap, que.poll());
			int r = bsearch(idxMap, que.poll());
			pw.println(prefix[r]-prefix[l-1]);
		}
		
		pw.flush();
	}
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
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
