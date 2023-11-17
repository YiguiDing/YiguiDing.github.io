import java.util.*;

public class _09_吝啬的国度_深度度优先dfs_非递归实现 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Graph g = new Graph();
		int k = sc.nextInt();
		for (int i = 0; i < k; i++) {
			g.create(sc);
			System.out.println(Arrays.toString(g.dfs()));
		}
	}

	static class Node {
		Set<Edge> froms = new HashSet<>();
		Set<Edge> nexts = new HashSet<>();
		int idx;

		public Node(int idx) {
			super();
			this.idx = idx;
		}
	}

	static class Edge {
		Node from, to;

		public Edge(Node from, Node to) {
			super();
			this.from = from;
			this.to = to;
		}
	}

	static class Graph {
		Set<Node> nodes = new HashSet<>();
		Set<Edge> edges = new HashSet<>();
		Map<Integer, Node> idxToNode = new HashMap<>();

		int initIdx;
		int N;
		void create(Scanner sc) {
			N = sc.nextInt();// 总节点数
			initIdx = sc.nextInt();// 初始位置
			for (int i = 0; i < N - 1/* n-1条边 */; i++) {
				int idxA = sc.nextInt();
				int idxB = sc.nextInt();
//				System.out.println(idxA + "<--->" + idxB);
				Node nodeA, nodeB;

				if (!idxToNode.containsKey(idxA)) {
					nodeA = new Node(idxA);
					idxToNode.put(idxA, nodeA);
					nodes.add(nodeA);
				}
				if (!idxToNode.containsKey(idxB)) {
					nodeB = new Node(idxB);
					idxToNode.put(idxB, nodeB);
					nodes.add(nodeB);
				}

				nodeA = idxToNode.get(idxA);
				nodeB = idxToNode.get(idxB);

				Edge edgeA2B = new Edge(nodeA, nodeB);// 无向图
				Edge edgeB2A = new Edge(nodeB, nodeA);
//				nodeA.froms.add(edgeB2A);
//				nodeB.froms.add(edgeA2B);
				nodeA.nexts.add(edgeA2B);
				nodeB.nexts.add(edgeB2A);
				edges.add(edgeA2B);
				edges.add(edgeB2A);
			}
		}

//		Map<Integer, Integer> result = new HashMap<>();
		

		// 深度优先遍历
		int[] dfs() {
			Set<Node> visited = new HashSet<>();
			int[] result= new int[N];
			Node from = idxToNode.get(initIdx);
			Stack<Node> stack = new Stack<>();
			visited.add(from);
			result[from.idx - 1] = -1;
			stack.push(from);
			while (!stack.isEmpty()) {
				Node cur = stack.pop();
				visited.add(cur);
				for (Edge edge : cur.nexts) {
					Node next = edge.to;
					if (!visited.contains(next)) {
						result[next.idx - 1] = cur.idx;
						stack.push(next);
					}
				}
			}
			return result;
		}
	}
}
