import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.Vector;

public class _01_购物单 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		double total = 0;
		while (true) {
			String str = sc.nextLine();
			if (str.equals("break"))
				break;
			String[] strs = str.replaceAll("[ ]+", ",").split(",");

			double price = Double.valueOf(strs[1]);
			double discount = 1;
			if (strs[2].startsWith("半")) {
				discount = 0.5;
			} else if (strs[2].length() == 2) {
				discount = Double.valueOf(strs[2].substring(0, 1)) / 10d;
			} else if (strs[2].length() == 3) {
				discount = Double.valueOf(strs[2].substring(0, 2)) / 100d;
			} else {
				System.out.println("error!!!!!!!!!");
				break;
			}
			System.out.println(price);
			System.out.println(discount);
			total += price * discount;
		}
		System.out.println(total);
		// 输出：5136.859500000001
	}
}