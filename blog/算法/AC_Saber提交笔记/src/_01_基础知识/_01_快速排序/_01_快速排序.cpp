#include <iostream>
using namespace std;
void exchange(int arr[],int i,int j){
    if(i!=j){
        arr[i]=arr[i]^arr[j];
        arr[j]=arr[i]^arr[j];
        arr[i]=arr[i]^arr[j];
    }
}
void quick_sort1(int arr[],int left,int right){
    if(left>=right) return;
    int x=arr[left],i=left,L=left-1,R=right+1;
    while (i<R) {
        if(arr[i]<x) exchange(arr,i++,++L);
        else if(arr[i]>x) exchange(arr,i,--R);
        else i++;
    }
    quick_sort1(arr,left,L);
    quick_sort1(arr,R,right);
}

void quick_sort2(int q[], int l, int r)
{
    if (l >= r) return;
    int i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j) {
        do i ++ ; while (q[i] < x);
        do j -- ; while (q[j] > x);
        if (i < j) exchange(q,i, j);
    }
    quick_sort2(q, l, j), quick_sort2(q, j + 1, r);
}

const int N=100000;
static int a[N];
int n;
int main()
{
    cin>>n;
    for (int i = 0; i < n; i++) scanf("%d",&a[i]);
    // quick_sort1(a,0,n-1); // 无法通过
    quick_sort2(a,0,n-1); // 可以通过
    for (int i = 0; i < n; i++) printf("%d ",a[i]);
}