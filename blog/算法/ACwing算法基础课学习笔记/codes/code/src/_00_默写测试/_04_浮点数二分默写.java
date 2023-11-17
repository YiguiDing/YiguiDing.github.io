package _00_默写测试;

public class _04_浮点数二分默写 {
    public static void main(String[] args) {
        System.out.println(bSearch_findSqrt(1024));
    }
    static double bSearch_findSqrt(double x){
        double l=0,r=x;
        while(r-l>1e-10){
            double mid = l+(r-l)/2;
            if(mid*mid<=x) l=mid;
            else r=mid;
        }
        return l;
    }
}
