import java.util.*;

public class _03_单词拼接 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = Integer.valueOf(sc.nextLine());
		List<String> res = new LinkedList<>();
		for (int i = 0; i < N; i++) {
			Graph g = new Graph();
			g.buildGraph(sc);
			res.add(g.dfs(null));// 把结果先存到数组中
		}
		sc.close();

		for (String str : res) {
			if (str != null) {
				System.out.println(str);
			} else {
				System.out.println("***");
			}
		}

	}
}

class Node implements Comparable<Node> {
	Character start, ended;
	String content;

	public Node(String content) {
		super();
		this.content = content;
		this.start = content.charAt(0);
		this.ended = content.charAt(content.length() - 1);
	}
	@Override
	public int compareTo(Node o) {
		// 这样先排序，再 DFS 搜索，找到的第一个答案就是题目要的字典序最小的答案
		// 否则则需要 DFS 搜索出所有的结果，然后再比较字典序
		
		// 这句是最关键的，有题目问，把一个字符串数组中的字符串拼接起来，找到使其拼接结果的字典序最小的字符串。其方法就是先对数组中的字符串排序，排序的比较方法就是这个函数：
		return (this.content + o.content).compareTo(o.content + this.content);
	}
}

class Edge {// 写了但没用
	Node from, to;

	public Edge(Node from, Node to) {
		super();
		this.from = from;
		this.to = to;
	}
}

class Graph {
	List<Node> nodes = new LinkedList<>();
	List<Edge> edges = new LinkedList<>();// 没有用
	Set<Node> used = new HashSet<>();
	HashMap<Character, List<Node>> startMap = new HashMap<>();// 这个实际上没有用
	HashMap<Character, List<Node>> endedMap = new HashMap<>();// 只有这个有用

	void buildGraph(Scanner sc) {
		int M = Integer.valueOf(sc.nextLine());// 注意要统一使用nextLine()
		for (int i = 0; i < M; i++) {
			String word = sc.nextLine();
			Node node = new Node(word);
			nodes.add(node);
			if (!startMap.containsKey(node.start)/* 防止未初始化 */) {
				startMap.put(node.start, new LinkedList<>());
			}
			if (!endedMap.containsKey(node.ended)) {
				endedMap.put(node.ended, new LinkedList<>());
			}
			startMap.get(node.start).add(node);
			endedMap.get(node.ended).add(node);
		}
		Collections.sort(nodes);// 排序，保证字典序最小
		for(List<Node> list :startMap.values()) {
			Collections.sort(list);// 排序，保证字典序最小
		}
		for(List<Node> list :endedMap.values()) {
			Collections.sort(list);// 排序，保证字典序最小
		}
	}

	LinkedList<String> result = new LinkedList<>();

	String dfs(Node current) {
		if (used.size() == nodes.size()) {
			StringBuilder sb = new StringBuilder();
			for (String item : result) {
				sb.append(item);
				sb.append('.');
			}
			if (result.size() >= 1) {
				sb.deleteCharAt(sb.length() - 1);
			}
			return sb.toString();

		} else if (current == null) {
			// 确定开头的元素
			for (Node cur : nodes /* 把所有节点依次当做开头位置，依次尝试 */) {
				used.add(cur);// 标记为使用
				result.add(cur.content);
				String res = dfs(cur);
				result.removeLast();// 回溯
				used.remove(cur);// 回溯
				if (res != null) {
					return res;// 找到答案，因为节点已经按字典序排序了，拼接起来的字符串一定是字典序最小的
				}
			}
		} else {
			// 确定当前字符串的下一个字符串
			if (startMap.containsKey(current.ended)/*直接查表：看是否有一个单词的开头是当前单词的结尾*/) {
				for (Node next : startMap.get(current.ended) /* 当前字符串的结尾，是下一个字符串的开头 */) {
					if (!used.contains(next)/* never used */) {
						used.add(next);// 标记为使用
						result.add(next.content);
						String res = dfs(next);
						result.removeLast();// 回溯
						used.remove(next);// 回溯
						if (res != null) {
							return res;// 找到答案
						}
					}
				}
			}
		}
		return null;// 没找到
	}
}