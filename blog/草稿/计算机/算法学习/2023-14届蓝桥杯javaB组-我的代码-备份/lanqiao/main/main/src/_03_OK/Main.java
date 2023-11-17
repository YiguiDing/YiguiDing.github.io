// package _03_OK;
// package _03_;

import java.io.BufferedInputStream;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        for (int t = 0; t < N; t++) {
            Set<Range> res = new HashSet<>();
            boolean tt = false;
            int numSize = sc.nextInt();
            RangeTree rt = new RangeTree(numSize);
            for (int i = 0; i < numSize; i++) {
                rt.insert(i, sc.nextInt());
            }
            for (int left1 = 0; left1 < numSize; left1++) {
                for (int right1 = left1 - 1; right1 < numSize; right1++) {
                    int k1 = rt.search(left1, right1);
                    int k2 = rt.search(0, left1 - 1) + rt.search(right1 + 1, numSize - 1);
                    if (k1 % 2 == 0 && k2 % 2 == 0) {
                        if (right1 - left1 != -1)
                            res.add(new Range(left1, right1));
                        else {
                            tt = true;
                        }
                    }
                }
            }
            if (tt)
                System.out.println(res.size() + 1);
            else
                System.out.println(res.size());
        }
    }
}

class Range {
    int l, r;

    public Range(int l, int r) {
        this.l = l;
        this.r = r;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + l;
        result = prime * result + r;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Range other = (Range) obj;
        if (l != other.l)
            return false;
        if (r != other.r)
            return false;
        return true;
    }

}

class RangeTree {
    int L, M, R, Val;
    RangeTree Left, Right;

    RangeTree(int size) {
        this(0, size - 1);
    }

    RangeTree(int ll, int rr) {
        L = ll;
        R = rr;
        M = L + (R - L) / 2;
        if (L != R) {
            Left = new RangeTree(L, M);
            Right = new RangeTree(M + 1, R);
        }
    }

    void insert(int idx, int val) {
        this.Val += val;
        if (L != R) {
            if (idx <= M)
                Left.insert(idx, val);
            else
                Right.insert(idx, val);
        }
    }

    int search(int target_L, int target_R) {
        if (target_L < 0 || R < target_R || target_L > target_R)
            return 0;
        if ((L == target_L && R == target_R) || L == R) {
            return this.Val;
        } else {
            if (target_R <= M) {
                return Left.search(target_L, target_R);
            } else if (M < target_L) {
                return Right.search(target_L, target_R);
            } else {
                return Left.search(target_L, M) + Right.search(M + 1, target_R);
            }
        }
    }
}
