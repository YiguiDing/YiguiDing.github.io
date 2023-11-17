package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class _15_离散化_ {
    static class Info {
        int idx, val;
        public Info(int idx, int val) {
            this.idx = idx;
            this.val = val;
        }
    }

    static class Range {
        int left, right;
        public Range(int left, int right) {
            this.left = left;
            this.right = right;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();// 数组元素个数
        int M = sc.nextInt();// 询问次数

        Info[] insertInfo = new Info[N];// 要插入的位置和值
        Range[] queryRange = new Range[M];// 要查询的区间
        
        // 记录所有坐标,包括执行插入操作和查询操作的坐标，后续要对所有这些要用到的坐标进行离散化处理
        Integer[] idxMap = new Integer[N + 2 * M];

        for (int i = 0; i < N; i++) {
            insertInfo[i] = new Info(sc.nextInt(), sc.nextInt());//记录插入位置和值
            idxMap[i] = insertInfo[i].idx;// 记录插入坐标
        }

        for (int i = 0, j = 0; i < M; i++, j += 2) {
            queryRange[i] = new Range(sc.nextInt(), sc.nextInt());// 记录查询范围
            idxMap[N + j] = queryRange[i].left;// 记录查询坐标
            idxMap[N + j + 1] = queryRange[i].right;// 记录查询坐标
        }

        Arrays.sort(idxMap);// 排序
        idxMap = getUniqueArray(idxMap);// 去重

        // 插入操作
        int[] data = new int[idxMap.length + 1];// 执行插入操作。
        for (int i = 0; i < insertInfo.length; i++) {
            // 找到离散化后的下标
            int realIdx = getIdx(idxMap, insertInfo[i].idx);
            data[realIdx] += insertInfo[i].val;
        }
        // 计算前缀和
        for (int i = 1; i < data.length; i++) {
            data[i] += data[i - 1];
        }

        // 处理查询操作
        for (int i = 0; i < M; i++) {
            int l = queryRange[i].left;
            int r = queryRange[i].right;
            int realL = getIdx(idxMap, l);// 找到离散化后的下标
            int realR = getIdx(idxMap, r);// 找到离散化后的下标
            int ans = data[realR] - data[realL - 1];
            System.out.println(ans);
        }
    }

    // 对排序后的数组去重
    static Integer[] getUniqueArray(Integer[] arr) {// arr必须排过序。
        List<Integer> list = new LinkedList<>();
        for (int i = 0; i < arr.length; i++) {
            // 1 1 2 2 2 3 3 4 4 5 5；不重复数的特征：第一个数，当前数和前一个数不同。
            if (i == 0 || arr[i] != arr[i - 1]) {
                list.add(arr[i]);
                // arr[j++]=arr[i];// 双指针，原地替换，但是要想办法记住其最终长度
            }
            // 1 3 7
            // 2 6 5
        }
        return list.toArray(new Integer[list.size()]);
    }

    // 离散化的核心代码,获取某个数的下标(重新映射)
    static int getIdx(Integer[] arr, int num) {// arr必须排序和去重。
        int l = 0, r = arr.length - 1, mid;
        while (l < r) {
            mid = l + (r - l) / 2;
            if (arr[mid] >= num)
                r = mid;
            else
                l = mid + 1;
        }
        return r + 1;// 也可以加上1，映射到[1,n]
    }
}