package _03_搜素与图论;

import java.util.Arrays;

public class _01_邻接表的实现 {
	public static void main(String[] args) {
		Graph g = new Graph(100);
		
		g.add(1, 2);
		g.add(1, 3);
		
		g.add(2, 3);
		g.add(2, 4);
		
		g.add(3, 5);
		g.add(3, 5);
		
		// 递归序
		g.dfs_(1);
		System.out.println("");
		g.dfs(1);
		
		// 层序
		System.out.println("");
		g.wfs(1);
		
		/* output
5
3
4
2
1

5
3
4
2
1

1
3
2
5
4

		 */
		
		
	}
	static class Graph{
		int head[],vale[],next[],idx,MAX_SIZE;
		public Graph(int capacity) {
			MAX_SIZE=capacity;
			head=new int[MAX_SIZE];// head 表示点
			vale=new int[2*MAX_SIZE];// vale 表示边，假设边的数量是节点数量的两倍
			next=new int[2*MAX_SIZE];// next 表示指针
			visited=new boolean[MAX_SIZE];// 标记是否访问
			Arrays.fill(head, -1);// 表示空指针
			idx=0;
		}
		// 插入a->b的边,如果是无向图，就执行两次，插入两条边，a->b b->a
		void add(int a,int b){
			// 头插法
			vale[idx]=b;
			next[idx]=head[a];
			head[a]=idx;
			idx++;
		}
		boolean visited[];
//		利用系统栈来递归实现深度优先遍历
		void dfs(int start) {
			visited[start]=true;
			for(int p=head[start];p!=-1;p=next[p]) {
				if(!visited[vale[p]]) {
					dfs(vale[p]);
				}
			}
			System.out.println(start);// 处理当前节点
		}
//		利用手动维护栈的方式实现深度优先遍历
		void dfs_(int start) {
			int stack[]=new int[MAX_SIZE],top=-1;
			boolean visit[]=new boolean[MAX_SIZE];
			stack[++top]=start;// 压入根节点
			visit[start]=true;
			
			outer: while(top!=-1) {// 栈不为空
				// 找当前节点的子节点
				for(int p=head[stack[top]];p!=-1;p=next[p]) {
					if(!visit[vale[p]]) {
						visit[vale[p]]=true;
						stack[++top]=vale[p];// 找到一个未访问过的节点就入栈
						continue outer;// 然后直接去下一次while循环，去考虑刚压入的节点
					}
				}
				// 程序能走到这里，说明没有执行continue；
				// 要么是因为当前节点是叶节点，因为没有子节点可访问，所有才没有执行continue，
				// 要么是因为，当前节点的子节点全部访问过了，所以没有执行continue；
				int cur = stack[top--];
				System.out.println(cur);// 处理当前节点
			}
		}
//		利用队列的方式实现宽度优先遍历,层序遍历
		void wfs(int start) {
			int queen[]=new int[MAX_SIZE],front=0,tail=0,size=0;
			boolean visit[]=new boolean[MAX_SIZE];
			queen[tail++]=start;size++;
			visit[start]=true;
			while(size!=0) {
				int cur = queen[front++];size--;// 取出队头
				
				System.out.println(cur);// 处理当前节点
				
				for(int p=head[cur];p!=-1;p=next[p]) {
					if(!visit[vale[p]]) {// 把没访问的所有子节点入队
						visit[vale[p]]=true;
						queen[tail++]=vale[p];size++;// 入队
					}
				}
			}
		}
	}
}
