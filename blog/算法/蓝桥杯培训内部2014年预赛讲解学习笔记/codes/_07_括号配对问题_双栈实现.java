import java.util.*;

public class _07_括号配对问题_双栈实现 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = Integer.valueOf(sc.nextLine());
		List<Boolean> result = new LinkedList<>();
		for (int i = 0; i < N; i++) {
			result.add(check(sc.nextLine()));
		}
		sc.close();
		for (Boolean res : result) {
			if (res)
				System.out.println("Yes");
			else
				System.out.println("No");
		}
	}

	static boolean check(String expression) {
		Stack<Character> left = new Stack<>();
		Stack<Character> right = new Stack<>();
		for (char item : expression.toCharArray()) {
			left.add(item);
		}
		while (!left.isEmpty()) {
			char qot_l = left.pop();// 弹出左边的
			if (qot_l == ')' || qot_l == ']' || qot_l == '}'/*从左边拿到一个应当放在右边的*/) {
				right.push(qot_l);// 右括号，放到右边
				continue;
			}
			// 执行到这里，说明从左边的栈中拿出的是一个左括号，那么就要从右边的栈中拿出一个右括号来判断两括号是否为一组，如果右栈为空则直接返回false
			if(right.isEmpty()) {
				return false;
			}
			char qot_r = right.pop();// 弹出右边的
			if ((qot_l == '[' && qot_r == ']') || (qot_l == '(' && qot_r == ')') || (qot_l == '{' && qot_r == '}')) {
				continue;// 左右括号正好是一对
			}
			return false;// 否则从左边拿到的是一个左括号，从右边拿到的是一个右括号，但是两括号不是一对
		}
		return left.size() == 0&&right.size()==0;
	}

}