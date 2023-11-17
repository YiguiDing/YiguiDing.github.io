package 蓝桥杯历年真题刷题笔记._2013_java_B_;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class _07_错误票据 {
	static Map<Integer, Integer> map = new HashMap<>();

	static List<Integer> list = new ArrayList<>();

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		sc.nextLine();// 读完这一行

		for (int i = 0; i < n; i++) {
			String line = sc.nextLine();// 直接读入一行
			String nums[] = line.split(" ");// 按空格分割
			for (String num : nums) {
				Integer id = Integer.valueOf(num);// 转换成数字
				list.add(id);
			}
		}
		sc.close();
		Integer[] ids = new Integer[list.size()];
		list.toArray(ids);
		Arrays.sort(ids);
		Integer a = null, b = null;
		for (int i = 0; i < ids.length - 1; i++) {
			// 此处有坑， Integer 比较要用equals
			if (ids[i].equals( ids[i + 1])) {
				b = ids[i];// 当前的数和下一个数相同则重复
				continue;
			}
			if (ids[i + 1] != ids[i] + 1) {
				a = ids[i] + 1;// 当前的数+1 不等于 下一个数 则表面缺了一个
			}
		}
		System.out.println("缺失的数：" + a);
		System.out.println("重复的数：" + b);
		// 6
        // 164 178 108 109 180 155 141 159 104 182 179 118 137 184 115 124 125 129 168 196
        // 172 189 127 107 112 192 103 131 133 169 158
        // 128 102 110 148 139 157 140 195 197
        // 185 152 135 106 123 173 122 136 174 191 145 116 151 143 175 120 161 134 162 190
        // 149 138 142 146 199 126 165 156 153 193 144 166 170 121 171 132 101 194 187 188
        // 113 130 176 154 177 120 117 150 114 183 186 181 100 163 160 167 147 198 111 119
        // 缺失的数：105
        // 重复的数：120
	}
}