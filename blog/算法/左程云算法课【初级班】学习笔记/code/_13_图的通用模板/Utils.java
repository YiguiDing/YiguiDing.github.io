package 左程云算法课初级班基础知识学习笔记._13_图的通用模板;

import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.Stack;
import java.util.Map.Entry;

public class Utils {

	// 从一个点出发，做宽度优先遍历
	void wideFirstOrder(Node node) {
		if (node == null)
			return;

		Queue<Node> queue = new LinkedList<Node>();// 深度优先，使用队列实现先进先出
		Set<Node> set = new HashSet<Node>();// 集合，遍历过的点的集合，防止重复遍历

		queue.add(node);
		set.add(node);

		while (!queue.isEmpty()) {

			Node current = queue.poll();
			System.out.println(current.value);

			for (Node next : current.nexts) {// 依次将当前节点的下一跳加入到队列，等待遍历
				if (!set.contains(next)) {
					queue.add(next);// 如果没有遍历过才添加到队列
					set.add(next);
				}
			}
		}

	}

	// 从一个点出发 深度优先遍历
	void deepFirstOrder(Node node) {
		if (node == null)
			return;
		Stack<Node> stack = new Stack<Node>();
		Set<Node> set = new HashSet<Node>();
		stack.add(node);
		set.add(node);
		System.out.println(node); // 先处理这个节点
		while (!stack.isEmpty()) {
			Node current = stack.pop();
			for (Node next : current.nexts) {
				// 找到一个没有遍历的节点
				if (!set.contains(next)) {
					set.add(next);// 注册当前节点防止后续重复处理
					stack.add(current);// 入栈父节点，因为后续还要来遍历他的next节点，找到另一条没走过的路
					System.out.println(next); // 处理当前节点
					break;// 跳出当前循环，开始处理找到的这个没有遍历过的节点
				}
			}
		}
	}

	static List<Node> topologyOrder(Graph graph) {
		HashMap<Node, Integer> inValMap = new HashMap<Node, Integer>(); // 记录所有节点入度的hash表
		Queue<Node> zeroinVal = new LinkedList<>(); // 入度为零的队列
		List<Node> result = new LinkedList<Node>();// 排序结果

		// 先把图中所有节点遍历，添加到表中
		for (Node node : graph.nodes.values()) {
			inValMap.put(node, node.in);// 记录所有节点的入度
			if (node.in == 0) {
				zeroinVal.add(node);// 记录入度为0的节点
			}
		}

		while (!zeroinVal.isEmpty()) {
			Node current = zeroinVal.poll();// 拿出队列中入度为0的节点，放入排序结果中
			result.add(current);
			for (Node next : current.nexts) {
				inValMap.put(next, inValMap.get(next) - 1); // 由于一个节点的出度就是另一个节点的入度,所以更新其他节点的入度就是在原来的基础上-1
				if (inValMap.get(next) == 0) {
					zeroinVal.add(next); // 如果更新后，入度为零，则添加到队列
				}
			}
		}
		return result;
	}

	static class SimpleUnionFind {
		HashMap<Node, Set<Node>> map = new HashMap<>();

		void init(Collection<Node> ndoes) {
			for (Node node : ndoes) {
				Set<Node> set = new HashSet<Node>();
				set.add(node);
				map.put(node, set);
				map.put(node, set);
			}
		}

		boolean isSameSet(Node n1, Node n2) {
			// 判断两个节点是否在同一个集合
			return map.get(n1) == map.get(n2);
		}

		void union(Node n1, Node n2) {
			// 合并两个节点所在的集合
			Set<Node> setA = map.get(n1);
			Set<Node> setB = map.get(n2);

			for (Node node : setB) {
				setA.add(node);// 将集合B中的节点放入集合A
				map.put(node, setA);// 节点现在在集合A中，所以从新调成其指向
			}
		}
	}

	// KruskalMST算法实际就是在计算一个无向图要保证全联通，实际需要保留哪些边，所以返回值是边的集合
	public static Set<Edge> KruskalMST(Graph graph) {
		Set<Edge> result = new HashSet<Edge>();// 边的集合
		SimpleUnionFind unionFind = new SimpleUnionFind();// 简易并查集
		PriorityQueue<Edge> heap = new PriorityQueue<Edge>(new Comparator<Edge>() {
			// 优先级队列就是堆，这里要传递一个比较器。
			public int compare(Edge o1, Edge o2) {
				return o1.weight - o2.weight;// o1-o2 就是降序排序，按照权重排序
			};
		});
		unionFind.init(graph.nodes.values());// 初始化简易并查集
		heap.addAll(graph.edges);// 把所有边添加到堆中，这样堆顶就是权重最小的边
		while (!heap.isEmpty()) {
			Edge edge = heap.peek();
			if (!unionFind.isSameSet(edge.from, edge.to)) {
				// 不在同一个集合中则说明添加这条边不会产生回路
				unionFind.union(edge.from, edge.to);// 合并两个集合
				result.add(edge);// 添加这条边
			}
		}
		return result;
	}

	// prim算法是站在节点的角度考虑，返回的值是这个图生成最小生成树所需的边的集合
	public static Set<Edge> PrimMST(Graph graph) {
		Set<Edge> result = new HashSet<Edge>();
		Set<Node> nodeSet = new HashSet<Node>();// 用于判断是否是已经联通过的节点
		PriorityQueue<Edge> heap = new PriorityQueue<Edge>(new Comparator<Edge>() {
			@Override
			public int compare(Edge o1, Edge o2) {
				return o1.weight - o2.weight;
			}
		});

		// for循环是为了防止出现森林的情况，就是说图中存在两片独立而不联通的区域
		for (Node node : graph.nodes.values()) {
			if (!nodeSet.contains(node)) {
				nodeSet.add(node);// 添加节点到集合中表示处理过了
				heap.addAll(node.edges); // 添加所有发出的边
				while (!heap.isEmpty()) {
					for (Edge edge : heap) {// 从堆中拿出权重最低的边
						if (!nodeSet.contains(edge.to)) {// 仅当目的节点未被处理时
							nodeSet.add(edge.to);
							result.add(edge);// 记录这条边
							heap.addAll(edge.to.edges);// 添加该节点发出的所有边。
						}
					}
				}
			}
		}

		return result;
	}

	// 获取最短路径的节点，但排除excldeSet集合
	static Node getMinDistanceNode(HashMap<Node, Integer> distanceMap, Set<Node> excludeSet) {
		Integer min_distance = Integer.MAX_VALUE;
		Node min_node = null;
		for (Entry<Node, Integer> entry : distanceMap.entrySet()) {
			Node node = entry.getKey();
			Integer distance = entry.getValue();
			if (!excludeSet.contains(node) && distance < min_distance) {
				min_node = node;
				min_distance = distance;
			}
		}
		return min_node;
	}

	// 求一个节点到图中其他节点的最短距离，
	static HashMap<Node, Integer> dijkstra(Node node) {
		// 记录图中其他节点到node的最短距离
		HashMap<Node, Integer> distanceMap = new HashMap<Node, Integer>();
		// 更新完毕的节点,已经使用最短路径到达的节点
		HashSet<Node> arrivedNodeSet = new HashSet<Node>();
		// node 到 node 的距离是0
		distanceMap.put(node, 0);
		// 找到到node距离最小路径的节点
		Node minNode = getMinDistanceNode(distanceMap, arrivedNodeSet);
		while (minNode != null) {
			Integer distance = distanceMap.get(minNode);// 当前节点到node的距离
			for (Edge edge : minNode.edges) {// 遍历该节点的边
				Node toNode = edge.to;// 获取边的目的节点
				if (!distanceMap.containsKey(edge.to)) {
					// 如果是一个新的节点，则在distanceMap中添加一条记录，距离就是distance+边的权重
					distanceMap.put(toNode, distance + edge.weight);
				}
				// 更新距离，如果从node到这些节点的路径变得更短了就更新
				distanceMap.put(toNode, Math.min(distanceMap.get(toNode), distance + edge.weight));
			}
			arrivedNodeSet.add(minNode);// 处理完毕，让下次不会被选中
			minNode = getMinDistanceNode(distanceMap, arrivedNodeSet);
		}
		return distanceMap;
	}
}
