package _01_基础算法;

public class _03_整数二分 {
    public static void main(String[] args) {
    }
    static int bSearch_findMax(int l,int r){
        int mid;
        while(l<r){
            mid = l+(r-l)/2 + 1;
            if(check1(mid)) l=mid;
            else r=mid-1;
        }
        return l;
    }
    static int bSearch_findMin(int l,int r){
        int mid;
        while(l<r){
            mid = l+(r-l)/2;
            if(check2(mid)) r=mid;
            else l=mid+1;
        }
        return l;
    }
    static boolean check1(int x){ return true; } // 检查x是否满足某种性质
    static boolean check2(int x){ return true; } // 检查x是否满足某种性质
}