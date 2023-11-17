package _00_默写测试;

public class _03_整数二分默写 {
    public static void main(String[] args) {
        int[] arr = {0,1,2,3,4,5,6,7,7,7,7,11,12,13,14,15,16};
        System.out.println(bSearch_findMax(arr, 7));
        System.out.println(bSearch_findMin(arr, 7));
    }
    static int bSearch_findMax(int[] arr,int x){
        int l=0,r=arr.length-1;
        while(l<r){
            int mid = l+(r-l)/2+1;
            if(arr[mid]<=x) l=mid;
            else r=mid-1;
        }
        return l;
    }
    static int bSearch_findMin(int[] arr,int x){
        int l=0,r=arr.length-1;
        while(l<r){
            int mid = l+(r-l)/2;
            if(arr[mid]>=x) r=mid;
            else l=mid+1;
        }
        return l;
    }
}
