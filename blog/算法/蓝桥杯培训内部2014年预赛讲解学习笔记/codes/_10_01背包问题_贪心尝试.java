import java.util.*;

public class _10_01背包问题_贪心尝试 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();// 物品数
		int V = sc.nextInt();// 背包容量
		Item[] items = new Item[N];
		for (int i = 0; i < N; i++) {
			items[i] = new Item(sc.nextInt(), sc.nextInt());
		}
		sc.close();
		
		
		// 思路是利用排序算法的稳定性来实现
		Arrays.sort(items,(o1, o2) -> {
			return Integer.compare(o1.weight, o2.weight);// 体积小的在前面
		});
		
		Arrays.sort(items,(o1, o2) -> {
			return -Integer.compare(o1.value, o2.value);//  价值大的相对在前
		});
		
		System.out.println(Arrays.toString(items));
		int valTotal = 0;
		for(int i=0;i<items.length;i++) {
			
			if(items[i].weight<=V) {
				System.out.println(items[i]);
				
				V-=items[i].weight;
				valTotal+=items[i].value;
			}
		}
		System.out.println(valTotal);
	}

	static class Item {
		int weight, value;
		public Item(int value, int weight) {
			super();
			this.weight = weight;
			this.value = value;
		}
		@Override
		public String toString() {
			return "Item [weight=" + weight + ", value=" + value + "]";
		}
		
	}
}
