package _01_基础算法;

import java.io.BufferedInputStream;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class _16_区间合并_题解写法 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        LinkedList<Range> ranges = new LinkedList<Range>();
        for (int i = 0; i < N; i++) {
            int l = sc.nextInt(), r = sc.nextInt();
            ranges.push(new Range(l, r));
        }
        LinkedList<Range> merged = merge_(ranges);
        System.out.println(merged.size());
    }

    static LinkedList<Range> merge_(LinkedList<Range> ranges) {
        Collections.sort(ranges, (o1, o2) -> Integer.compare(o1.left, o2.right));// 排序
        LinkedList<Range> result = new LinkedList<>();
        Integer curL = null, curR = null;
        for (Range next : ranges) {
            if (curL == null) {
                curL = next.left;
                curR = next.right;
            } else if (next.left <= curR) { // 下一个区间的左端点在当前所维护区间右端点之内
                curR = Math.max(curR, next.right);// 合并为一个最大区间
            } else {// 下一个数的最左边在当前所维护区间之外。
                result.push(new Range(curL, curR));// 前一个区间维护完毕，
                curL = next.left;
                curR = next.right;
            }
        }
        if (curL != null)
            result.push(new Range(curL, curR));// 最后一个区域维护完毕
        return result;
    }
    static class Range {
        public int left, right;

        public Range() {
        };

        public Range(int left, int right) {
            this.left = left;
            this.right = right;
        }

    }
}
