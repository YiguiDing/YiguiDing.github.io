import java.util.Arrays;
import java.util.Scanner;

class Main1{
	// 开始时间：
	//	提交时间: 2023-03-27 01:33:17 满分
	//用时16分钟
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		Item[] counter = new Item[26];
		for(int i=0;i<26;i++) {
			counter[i]=new Item((char)('A'+i),0);
		}
		for(int i=0;i<str.length();i++) {
			counter[str.charAt(i)-'A'].count++;
		}
		Arrays.sort(counter,(o1,o2)->{
			return -Integer.compare(o1.count, o2.count);
		});
		StringBuilder sb = new StringBuilder();
		int max = counter[0].count;
		for(Item item:counter) {
			if(item.count==max) {
				sb.append(item.ch);
			}else {
				break;
			}
		}
		char[] result = sb.toString().toCharArray();
		Arrays.sort(result);
		String res =  String.valueOf(result);
		System.out.println(res);
	}
}
class Item{
	Character ch;
	int count;
	public Item(Character ch, int count) {
		super();
		this.ch = ch;
		this.count = count;
	}
	
}