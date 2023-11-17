import java.util.*;

public class _08_括号配对问题_单栈实现_最优解 {
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
		for (char ch : expression.toCharArray()) {
			if (ch == '(' || ch == '[' || ch == '{'/*右括号*/) {
				left.push(ch);// 压入栈
				continue;
			}else if(ch == ')' || ch == ']' || ch == '}'/*左括号*/) {
				Character R = ch;
				Character L= !left.isEmpty() ? left.pop():null;
				if(L!=null && ((L == '[' && R == ']') || (L == '(' && R == ')') || (L == '{' && R == '}'))/*右括号应当能和栈顶元素匹配*/) {
					continue;
				}else {
					return false;
				}
			}
		}
		return left.size()==0;
	}
}