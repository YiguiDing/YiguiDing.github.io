package _02_数据结构;

public class _11_heap堆 {
	public static void main(String[] args) {
		int[] arr =  {8,7,6,5,4,3,2,1};
		Heap heap = new Heap(100);
		heap.load_NlogN(arr);
		while(!heap.isEmpty()) {
			System.out.println(heap.removeFirst());
		}
	}
	static class Heap{
		int[] data;
		int size,MAX_SIZE;
		public Heap(int capacity) {
			init(capacity);
		}
		void init(int capacity) {
			MAX_SIZE=capacity+1;
			data=new int[MAX_SIZE];
			clear();
		}
		void clear() {
			size=0;
		}
		void down(int idx){
			int minIdx = idx;
			if(2*idx<=size&&data[2*idx]<data[minIdx]) minIdx=2*idx;// 判断左子树值是否更小，记录下标
			if(2*idx+1<=size&&data[2*idx+1]<data[minIdx]) minIdx=2*idx+1;// 判断右子树值是否更小，记录下标
			if(minIdx==idx)return;// 相等说明自己已经是最小值了
			swap(idx, minIdx);
			down(minIdx);
		}
		void up(int idx) {
			int maxIdx =idx;
			if(idx/2>=1&&data[idx/2]>data[maxIdx]) maxIdx=idx/2;
			if(maxIdx==idx)return;// 选出最小值的下标
			swap(idx, maxIdx);
			up(maxIdx);
		}
//		O(N*logN)的建堆方式
		void load_NlogN(int[] arr) {
			for (int i = 0; i < arr.length; i++) {
				add(arr[i]);
			}
		}
//		O(N)的建堆方式
		void load_N(int[] arr) {
			for (int i = 0; i < arr.length; i++) {
				data[i+1]=arr[i];// 注意映射关系
			}
			size=arr.length;
			for (int i = size/2; 0<i; i--) {
				down(i);// 从最底部的一颗树的根节点往上执行down操作
			}
		}
		void add(int x) {
			size++;
			data[size]=x;// 放到末尾
			up(size);// 向上调整
		}
		int removeFirst() {
			int temp = data[1];
			swap(1, size);
			size--;
			down(1);
			return temp;
		}
		void modify(int idx,int val) {
			if(idx>size) return;
			data[idx]=val;
			up(idx);down(idx);
		}
		boolean isEmpty() {
			return size==0;
		}
		boolean isFull() {
			return size==MAX_SIZE;
		}
		void swap(int i,int j) {
			if(i!=j) {
				data[i]=data[i]^data[j];
				data[j]=data[i]^data[j];
				data[i]=data[i]^data[j];
			}
		}
	}
}
