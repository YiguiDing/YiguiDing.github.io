package _01_基础算法;

public class _04_浮点数二分 {
    public static void main(String[] args) {
        System.out.println(bSearch_findSqRoot(100));// sqrt(10)=10.000000149011612
        System.out.println(bSearch_findSqRoot(2)); // sqrt(2)=1.4142141342163086
    }
    static double bSearch_findSqRoot(double x){
        double l = 0,r = x,mid;
        while(r-l>0.000001){
            mid = l+(r-l)/2;
            if(mid*mid<=x) l=mid; // 浮点数二分不需要考虑边界
            else r=mid;  
        }
        return r;
    }


    static double bSearch(double r,double l){
        double mid;
        while(r-l>0.001){ // 精度控制，甚至可以直接for循环控制迭代次数。
            mid = l+(r-l)/2;
            if(check(mid))  r=mid; // 浮点数二分不需要考虑边界
            else l=mid;
        }
        return r;
    }
    static boolean check(double x) {return true;}// 检查x是否满足某种性质
}
