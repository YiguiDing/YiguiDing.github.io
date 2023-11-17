package _10_OK;
// package _10_;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Graph g = Graph.build();
        g.dfs(0, g.N - 1);
        System.out.println(g.res);
    }
}

class Edge {
    Node from, to;
    int weight;

    public Edge(Node from, Node to, int weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

class Node {
    Set<Edge> nexts = new HashSet<>();
    int val;

    public Node(int val) {
        this.val = val;
    }
}

class Graph {
    Map<Integer, Node> maps = new HashMap<>();
    int N;
    int K;
    int M;

    static Graph build() {
        Graph graph = new Graph();
        Scanner sc = new Scanner(System.in);
        graph.N = sc.nextInt();
        graph.K = sc.nextInt();
        graph.M = sc.nextInt();
        for (int i = 0; i < graph.M; i++) {
            int aa = sc.nextInt();
            int bb = sc.nextInt();
            int ww = sc.nextInt();
            Node a = graph.maps.get(aa);
            Node b = graph.maps.get(bb);
            if (a == null)
                a = new Node(aa);
            if (b == null)
                b = new Node(bb);
            Edge a2b = new Edge(a, b, ww);
            Edge b2a = new Edge(b, a, ww);
            a.nexts.add(a2b);
            b.nexts.add(b2a);
            graph.maps.put(aa, a);
            graph.maps.put(bb, b);
        }
        sc.close();
        return graph;
    }

    Set<Node> visited = new HashSet<>();
    List<Edge> paths = new ArrayList<>();
    int res = Integer.MAX_VALUE;

    void dfs(int cur, int to) {
        if (cur == to) {
            int[] pfxsum = new int[paths.size()];
            pfxsum[0] = paths.get(0).weight;
            for (int i = 1; i < pfxsum.length; i++) {
                pfxsum[i] = pfxsum[i - 1] + paths.get(i).weight;
            }
            int kk = pfxsum[pfxsum.length - 1];
            // System.out.println(kk);
            for (int i = 0; i + K < pfxsum.length; i++) {
                int temp = kk - (pfxsum[i + K] - pfxsum[i]);
                if (temp < res) {
                    res = temp;
                }
            }

            // System.out.println(paths);
        } else {
            Node curNode = maps.get(cur);
            visited.add(curNode);
            for (Edge edge : curNode.nexts) {
                if (!visited.contains(edge.to)) {
                    paths.add(edge);
                    // visited.add(edge.to);
                    dfs(edge.to.val, to);
                    // visited.remove(edge.to);
                    paths.remove(edge);
                }
            }
            visited.remove(curNode);
        }
    }
}