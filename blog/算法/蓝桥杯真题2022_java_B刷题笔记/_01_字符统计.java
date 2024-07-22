import java.util.Scanner;

public class _01_字符统计 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		int[] counter = new int[256];
		int max = 0;
		for (int i = 0; i < str.length(); i++) {
			int k = ++counter[str.charAt(i)];
			if (max < k) {
				max = k;
			}
		}
		for (int i = 0; i < counter.length; i++) {
			if (counter[i] == max) {
				System.out.print((char) i);
			}
		}
	}
}
