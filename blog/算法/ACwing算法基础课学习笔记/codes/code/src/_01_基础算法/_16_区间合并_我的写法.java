package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class _16_区间合并_我的写法 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        LinkedList<Range> ranges = new LinkedList<Range>();
        for (int i = 0; i < N; i++) {
            int l = sc.nextInt(), r = sc.nextInt();
            ranges.push(new Range(l, r));
        }
        LinkedList<Range> merged = merge(ranges);
        System.out.println(merged.size());
    }

    static LinkedList<Range> merge(LinkedList<Range> ranges) {
        LinkedList<Range> result = new LinkedList<>();
        // 按左端点排序
        Collections.sort(ranges, (o1, o2) -> Integer.compare(o1.left, o2.right));
        while (!ranges.isEmpty()) {// 遍历，直到为空
            Range curRange = ranges.pop();// 拿出一个区间
            while (!ranges.isEmpty() && // 看后序是否还有区间
                    ranges.getFirst().left <= curRange.right// 如果后续的区间的左端点在当前区间的右端点上或在其之内，说明区间有交集。
            ) {
                Range next = ranges.pop();// 有可能后续区间在当前区间的内部，这种情况也需要弹出。
                if (curRange.right < next.right)// 后续区间的右端点位置比当前区间右端点位置还要靠右，说明区间需要扩展。
                    curRange.right = next.right;// 扩展当前区间的右端点为后续第一个区间的右端点所在位置
            }
            result.push(curRange);// 合并区间完毕一个结果。
        }
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
