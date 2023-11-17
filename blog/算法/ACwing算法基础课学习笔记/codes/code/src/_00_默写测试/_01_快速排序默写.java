package _00_默写测试;

import java.io.*;
class Main{
    private static StreamTokenizer st = new StreamTokenizer(new BufferedReader(new InputStreamReader(System.in)));
    private static PrintWriter pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));
    private static int nextInt() {
		try {
			st.nextToken();
		}
		catch(IOException e) {
			e.printStackTrace();
		}
		return (int)st.nval;
	}
    public static void main(String[] args){
        int N = nextInt();
        System.out.println(N);
        int[] arr = new int[N];
        for(int i=0;i<N;i++) arr[i]=nextInt();
        quickSort(arr,0,N-1);
        for(int i=0;i<N;i++) {
        	if(i<N-1) {
        		pw.printf("%d ",arr[i]);
        	}else {
        		pw.printf("%d",arr[i]);
        	}
        };
        pw.flush();
    }
    static void quickSort(int[] arr,int left,int right){
        if(left>=right) return;
        int x=arr[left],i=left,L=left-1,R=right+1;
        while(i<R){
            if(arr[i]<x) swap(arr,i++,++L);
            else if(arr[i]>x) swap(arr,i,--R);
            else i++;
        }
        quickSort(arr,left,L);
        quickSort(arr,R,right);
    }
    static void swap(int[] arr,int i,int j){
        int t =arr[i];
        arr[i]=arr[j];
        arr[j]=t;
    }
}