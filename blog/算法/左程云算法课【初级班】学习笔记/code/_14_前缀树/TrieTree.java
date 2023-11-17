package 左程云算法课初级班基础知识学习笔记._14_前缀树;


public class TrieTree {
	class Node {
		int pass = 0;// 路径上经过该节点几次
		int end = 0;// 以该节点结尾几次
		Node[] nexts = new Node[26];// 经典写法，可以认为是26个字母26个方向、路径，子节点的指针，初始为空
		// HashMap<Character,Node> nexts = new HashMap<Character,Node>(); //
		// 如果字符不止26个可以用hashMap、HashSet
	}

	Node root = new Node();// 根节点

	// 插入一个字符串记录，即使是空串
	void insert(String string) {
		char[] chars = string.toLowerCase().toCharArray();
		Node current = root;
		current.pass++;
		for (int i = 0; i < chars.length; i++) {
			int direction = chars[i] - 'a';
			if (current.nexts[direction] == null)// 如果路径不存在则新建
				current.nexts[direction] = new Node();
			current.nexts[direction].pass++;// 经过此节点的串的个数++
			current = current.nexts[direction];// 跳到下一个
		}
		current.end++;// 结尾
	}

	// 删除字符串
	void delete(String string) {
		if (search(string) != 0) {
			char[] chars = string.toLowerCase().toCharArray();
			Node current = root;
			current.pass--;
			for (int i = 0; i < chars.length; i++) {
				int direction = chars[i] - 'a';
				current.nexts[direction].pass--;
				if (current.nexts[direction].pass == 0) {
					current.nexts[direction] = null;// 直接丢弃后续的节点引用
					return;
				}
				current = current.nexts[direction];// 跳到下一个
			}
			current.end--;// 字符串结束
		}
	}

	// 查询一个字符串插入了几次，包括空串
	int search(String string) {
		char[] chars = string.toLowerCase().toCharArray();
		Node current = root;
		for (int i = 0; i < chars.length; i++) {
			int direction = chars[i] - 'a';
			if (current.nexts[direction] == null) {
				// 查到一半路没了
				return 0;
			}
			current = current.nexts[direction];
		}
		return current.end;// 以此节点为截止的字符串个数。
	}

	// 查询以【perfix】开头的字符串的个数
	int searchPrefix(String prefix) {
		char[] chars = prefix.toLowerCase().toCharArray();
		Node current = root;
		for (int i = 0; i < chars.length; i++) {
			int direction = chars[i] - 'a';
			if (current.nexts[direction] == null) {
				// 查到一半路没了
				return 0;
			}
			current = current.nexts[direction];
		}
		return current.pass;// 经过此节点的串的个数
	}

}
