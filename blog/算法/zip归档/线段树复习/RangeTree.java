public class RangeTree {
    int L, M, R, Val;
    RangeTree Left, Right;

    RangeTree(int size) {
        RangeTree(0, size - 1);
    }

    RangeTree(int left, int right) {
        L = left;
        R = right;
        M = left + (right - left) / 2;
        if (L != R) {
            Left = new RangeTree(L, M);
            Right = new RangeTree(M + 1, R);
        }
    }

    void insert(int idx, int val) {
        Val += val;
        if (L != R) {
            if (idx <= M) {
                Left.insert(idx, val);
            } else {
                Right.insert(idx, val);
            }
        }
    }

    int search(int l, int r) {
        if (L == R) {
            return Val;
        } else {
            if (r <= M) {
                return Left.search(l, r);
            } else if (M < l) {
                return Right.search(l, r);
            } else {
                return Left.search(l, M) + Right.search(M + 1, r);
            }
        }
    }
}
