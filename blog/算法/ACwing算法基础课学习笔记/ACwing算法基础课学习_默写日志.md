---
title: ACwing算法基础课学习_默写日志
cover: ./cover/default_cover.jpg
date: 2023-04-28 12:44:00+08:00
tag: [蓝桥杯,JAVA,算法,刷题笔记]
category: 算法
# ---article: false--- # 在主页中隐藏
---

# ACwing算法基础课学习_默写日志

## 目录

- [ACwing算法基础课学习\_默写日志](#acwing算法基础课学习_默写日志)
  - [目录](#目录)
  - [2023-04-28](#2023-04-28)
    - [快速排序默写x3](#快速排序默写x3)
    - [归并排序默写x3](#归并排序默写x3)
    - [整数二分查找默写x3](#整数二分查找默写x3)
    - [浮点数二分查找默写x3](#浮点数二分查找默写x3)
    - [大整数运算加法默写x1](#大整数运算加法默写x1)
    - [大整数运算减法默写x1](#大整数运算减法默写x1)
    - [大整数运算乘法默写x3](#大整数运算乘法默写x3)
    - [一维前缀和默写x2](#一维前缀和默写x2)
    - [一维差分默写x2](#一维差分默写x2)
    - [二维前缀和默写x2](#二维前缀和默写x2)
    - [二维差分默写x1](#二维差分默写x1)
  - [2023-04-29](#2023-04-29)
    - [快速排序x1](#快速排序x1)
    - [栈x2](#栈x2)
    - [队列x1](#队列x1)
    - [单调栈x1](#单调栈x1)
    - [单调队列x1](#单调队列x1)
  - [2023-05-01](#2023-05-01)
    - [快速排序](#快速排序)
  - [2023-05-11](#2023-05-11)
    - [归并排序](#归并排序)

## 2023-04-28

### 快速排序默写x3

```java
    static void quickSort(int[] arr, int l, int r) {
        if(l>=r||arr==null) return;
        int x = arr[l],i=l,L=l-1,R=r+1; 
        while(i<R){
            if(arr[i]<x)swap(arr, i++, ++L);
            else if(x<arr[i])swap(arr, i, --R);
            else i++;
        }
        quickSort(arr, l, L);
        quickSort(arr, R, r);
    }
```

### 归并排序默写x3

```java
    static void mergeSort(int[] arr, int l, int r) {
        if (l >= r) return;
        int mid = l + (r - l) / 2;
        mergeSort(arr, l, mid); mergeSort(arr, mid + 1, r);
        int[] help = new int[r - l + 1];
        int t = 0, i = l, j = mid + 1;
        while (i <= mid && j <= r)
            if (arr[i] <= arr[j]) help[t++] = arr[i++];
            else help[t++] = arr[j++];
        while (i <= mid) help[t++] = arr[i++];
        while (j <= r) help[t++] = arr[j++];
        for (t = 0; t + l <= r; t++) arr[t + l] = help[t];
    }
```

### 整数二分查找默写x3

```java
    static int bSearch_findMax(int[] arr,int x){
        int l=0,r=arr.length-1,mid;
        while(l<r){
            mid = l+(r-l)/2+1;
            if(arr[mid]<=x) l=mid;
            else r=mid-1;
        }
        return l;
    }
    static int bSearch_findMin(int[] arr,int x){
        int l=0,r=arr.length-1,mid;
        while(l<r){
            mid = l+(r-l)/2;
            if(arr[mid]>=x) r=mid;
            else l=mid+1;
        }
        return l;
    }
```

### 浮点数二分查找默写x3

```java
    static double bSearch_findSqrt(double x){
        double l=0,r=Math.max(1,x);
        while(r-l>1e-10){
            double mid = l+(r-l)/2;
            if(mid*mid<=x) l=mid;
            else r=mid;
        }
        return l;
    }
```

### 大整数运算加法默写x1

```java
    static Vector<Integer> add(Vector<Integer> a1, Vector<Integer> a2) {
        Vector<Integer> res = new Vector<>();
        int t = 0;// 进位
        for (int i = 0; i < a1.size() || i < a2.size(); i++) {
            if (i < a1.size()) t += a1.get(i);
            if (i < a2.size()) t += a2.get(i);
            res.add(t % 10);
            t /= 10;
        }
        if (t == 1)  res.add(1);
        return res;
    }
```

### 大整数运算减法默写x1

```java
    // 0 <= a2 <= a1
    static Vector<Integer> sub(Vector<Integer> a1,Vector<Integer> a2){
        Vector<Integer> res = new Vector<>();
        int t = 0;// 借位
        for (int i = 0; i < a1.size(); i++) {
            int k = 10 + a1.get(i)-t;// 加10表示提前借一位
            if(i<a2.size()) k=k-a2.get(i);
            res.add(k%10);
            if(k-10<0) t=1;// 如果不借10结果为负则说明必须借位
            else t=0;
        }
        while(res.size()>1&&res.firstElement()==0)
            res.remove(res.size()-1);
        return res;
    }
```

### 大整数运算乘法默写x3

```java
    static Vector<Integer> mul(Vector<Integer> a1,Vector<Integer> a2){
        Vector<Integer> res = new Vector<>();
        for (int i = 0; i < a1.size(); i++) {
            for(int j=0;j<a2.size();j++){
                int p = j+i;// 位置
                int n = a1.get(i)*a2.get(j);// 结果
                while(p>=res.size()) res.add(0);// 保证有第p位
                res.set(p,res.get(p)+n);// 这个位置可能本就有值，所以要加上
            }
        }
        for(int i=0;i<res.size();i++){// 最后处理进位
            if(res.get(i)>=10){// 当前位需要进位
                if(i==res.size()) res.add(0);// 保证有第i+1位
                res.set(i+1,res.get(i+1) + res.get(i)/10);// 进位
                res.set(i,res.get(i)%10);// 取余
            }
        }
        return res;
    }
```

### 一维前缀和默写x2

```java
    static class PreFixArray {
        public int[] preFix;

        PreFixArray() {
        }

        PreFixArray(int[] array) {
            load(array);
        }

        public void load(int[] differ) {
            preFix = new int[differ.length];
            for (int i = 1; i < differ.length; i++) {
                preFix[i] = preFix[i - 1] + differ[i];
            }
        }

        public int getSum(int left, int right) {
            return preFix[right] - preFix[left - 1];
        }
    }
```

### 一维差分默写x2

```java
    static class DifferArray {
        public int[] differ;

        DifferArray() {
        }

        DifferArray(int[] preFix) {
            load(preFix);
        }

        public void load(int[] preFix) {
            differ = new int[preFix.length+1];
            for (int i = 1; i < preFix.length; i++) {
                insert(i, i, preFix[i]);
            }
        }

        void insert(int l, int r, int val) {
            differ[l] += val;
            differ[r + 1] -= val;
        }

        PreFixArray toPreFixArray() {
            return new PreFixArray(this.differ);
        }
    }
```

### 二维前缀和默写x2

```java
    static class PreFixMatrix {
        int[][] prefix;

        PreFixMatrix() {
        }

        PreFixMatrix(int[][] data) {
            load(data);
        }

        public void load(int[][] data) {
            prefix = new int[data.length + 1][data[0].length + 1];
            for (int row = 1; row < data.length; row++) {
                for (int col = 1; col < data[row].length; col++) {
                    prefix[row][col] = prefix[row - 1][col] +
                            prefix[row][col - 1] -
                            prefix[row - 1][col - 1] +
                            data[row][col];
                }
            }
        }

        public int getSum(int row1, int col1, int row2, int col2) {
            return (prefix[row2][col2] -
                    prefix[row2][col1 - 1] -
                    prefix[row1 - 1][col2] +
                    prefix[row1 - 1][col1 - 1]);
        }
    }
```

### 二维差分默写x1

```java
    static class DifferMatrix {
        int[][] differ;

        DifferMatrix() {
        }

        DifferMatrix(int[][] data) {
            load(data);
        }

        void load(int[][] data) {
            differ = new int[data.length + 1][data[0].length + 1];
            for (int row = 1; row < data.length; row++) {
                for (int col = 1; col < data[row].length; col++) {
                    insert(row, col, row, col, data[row][col]);
                }
            }
        }

        public void insert(int row1, int col1, int row2, int col2, int val) {
            differ[row1][col1] += val;
            differ[row1][col2 + 1] -= val;
            differ[row2 + 1][col1] -= val;
            differ[row2 + 1][col2 + 1] += val;
        }
        PreFixMatrix toPreFixMatrix(){
            return new PreFixMatrix(differ);
        }
    }
```

## 2023-04-29

### 快速排序x1

```java
    static void quickSort(int[] arr, int left, int right) {
        if (left >= right)
            return;
        int x = arr[left], i = left, L = left - 1, R = right + 1;
        while (i < R) {
            if (arr[i] < x)
                swap(arr, i++, ++L);
            else if (arr[i] > x)
                swap(arr, i, --R);
            else
                i++;
        }
        quickSort(arr, left, L);
        quickSort(arr, R, right);
    }

    static void swap(int[] arr, int i, int j) {
        if (i != j) {
            arr[i] = arr[i] ^ arr[j];
            arr[j] = arr[i] ^ arr[j];
            arr[i] = arr[i] ^ arr[j];
        }
    }
```

### 栈x2

```java
    static class Stack {
        int[] data;
        int pos, MAX_SIZE;

        Stack(int size) {
            init(size);
        }

        void init(int size) {
            MAX_SIZE = size;
            data = new int[MAX_SIZE];
            pos = 0;
        }

        void push(int val) {
            data[pos++] = val;
        }

        int pop() {
            return data[--pos];
        }

        boolean isEmpty() {
            return pos == 0;
        }

        boolean isFull() {
            return pos == MAX_SIZE;
        }

        void sort() {
            quickSort(data, 0, pos - 1);
        }

        void reverse() {
            for (int i = 0, j = pos - 1; i < j; i++, j--) {
                swap(data, i, j);
            }
        }
    }

```

### 队列x1

```java
    static class Queue {
        int[] data;
        int front, tail, size, MAX_SIZE;

        Queue() {
        }

        Queue(int capacity) {
            init(capacity);
        }

        void init(int capacity) {
            MAX_SIZE = capacity;
            data = new int[MAX_SIZE];
            clear();
        }

        void clear() {
            front = 0;
            tail = -1;
            size = 0;
        }

        void EnQueue(int val) {
            tail = ++tail % MAX_SIZE;
            data[tail] = val;
            size++;
        }

        int DeQueue() {
            int t = data[front];
            front = ++front % MAX_SIZE;
            size--;
            return t;
        }

        int DeQueueLast() {
            int t = data[tail];
            tail = (tail + MAX_SIZE - 1) % MAX_SIZE;
            size--;
            return t;
        }

        int getFront() {
            return data[front];
        }

        int getTail() {
            return data[tail];
        }

        boolean isEmpty() {
            return size == 0;
        }

        boolean isFull() {
            return size == MAX_SIZE;
        }

        void getMinArray(int[] arr, int[] res, int range) {
            clear();
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTail()] >= arr[i])
                    DeQueueLast();
                while (!isEmpty() && getFront() <= i - range)
                    DeQueue();
                EnQueue(i);
                res[i] = arr[getFront()];
            }
        }

        void getMaxArray(int[] arr, int[] res, int range) {
            clear();
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTail()] <= arr[i])
                    DeQueueLast();
                while (!isEmpty() && getFront() <= i - range)
                    DeQueue();
                EnQueue(i);
                res[i] = arr[getFront()];
            }
        }
    }

```

### 单调栈x1

```java
    static class Stack {
        int[] data;
        int pos, size;

        Stack(int size) {
            init(size);
        }

        void init(int size) {
            this.size = size;
            data = new int[size];
            clear();
        }
        void clear(){
            pos = -1;
        }

        void push(int x) {
            data[++pos] = x;
        }

        int pop() {
            return data[pos--];
        }

        int getTop() {
            return data[pos];
        }

        boolean isEmpty() {
            return pos == -1;
        }

        boolean isFull() {
            return pos == size - 1;
        }
        void getLeftMaxArray(int[] arr,int[] res){
            for (int i = 0; i < arr.length; i++) {
                while(!isEmpty()&&arr[getTop()]<=arr[i]) pop();// 拿出所有比当前数小的数
                if(isEmpty()) res[i]=-1;//栈空，左边没有数比当前数大
                else res[i]=getTop();// 栈不空，栈顶元素就是比当前数大的数
                push(i);// 压入当前位置
            }
        }
        void getLeftMinArray(int[] arr,int[] res){
            for (int i = 0; i < arr.length; i++) {
                while(!isEmpty()&&arr[getTop()]>=arr[i]) pop();// 拿出所有比当前数大的数
                if(isEmpty()) res[i]=-1;//栈空，左边没有数比当前数小
                else res[i]=getTop();// 栈不空，栈顶元素就是比当前数小的数
                push(i);// 压入当前位置
            }
        }
    }
```

### 单调队列x1

```java
    static class Queue {
        int[] data;
        int front, tail, size, MAX_SIZE;

        Queue() {
        }

        Queue(int capacity) {
            init(capacity);
        }

        void init(int capacity) {
            MAX_SIZE = capacity;
            data = new int[MAX_SIZE];
            clear();
        }

        void clear() {
            front = 0;
            tail = -1;
            size = 0;
        }

        void EnQueue(int val) {
            tail = ++tail % MAX_SIZE;
            data[tail] = val;
            size++;
        }

        int DeQueue() {
            int t = data[front];
            front = ++front % MAX_SIZE;
            size--;
            return t;
        }

        int DeQueueLast() {
            int t = data[tail];
            tail = (tail + MAX_SIZE - 1) % MAX_SIZE;
            size--;
            return t;
        }

        int getFront() {
            return data[front];
        }

        int getTail() {
            return data[tail];
        }

        boolean isEmpty() {
            return size == 0;
        }

        boolean isFull() {
            return size == MAX_SIZE;
        }

        void getMinArray(int[] arr, int[] res, int window) {
            clear();
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTail()] >= arr[i]) DeQueueLast();// 从后面依次拿出大于当前数的元素
                while (!isEmpty() && getFront() <= i - window) DeQueue();// 从前面拿出超出窗口范围的数
                EnQueue(i);// 入队
                res[i] = arr[getFront()];// 窗口中的最小值
            }
        }

        void getMaxArray(int[] arr, int[] res, int window) {
            clear();
            for (int i = 0; i < arr.length; i++) {
                while (!isEmpty() && arr[getTail()] <= arr[i]) DeQueueLast();
                while (!isEmpty() && getFront() <= i - window) DeQueue();
                EnQueue(i);
                res[i] = arr[getFront()];
            }
        }
    }

```

## 2023-05-01

### 快速排序

```java
import java.util.*;
import java.io.*;
class Main{
    private static StreamTokenizer st = new StreamTokenizer(new BufferedReader(new InputStreamReader(System.in)));
    private static PrintWriter pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));
    private static int Int() {
  try {
   st.nextToken();
  }
  catch(IOException e) {
   e.printStackTrace();
  }
  return (int)st.nval;
 }
    public static void main(String[] args){
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        int N = sc.nextInt();
        int[] arr = new int[N];
        for(int i=0;i<N;i++) arr[i]=sc.nextInt();
        quickSort(arr,0,N-1);
        for(int i=0;i<N;i++) System.out.printf("%d ",arr[i]);
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
```

## 2023-05-11

### 归并排序

```java
package _01_基础知识._02_归并排序;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
/*
输入
5
3 1 2 4 5
输出
1 2 3 4 5
 * */
public class _01_归并排序 {
 static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
 static StreamTokenizer st = new StreamTokenizer(br);
 static PrintWriter pw = new PrintWriter(bw);
 public static void main(String[] args) {
  int N = nextInt();
  int arr[] = new int[N],i;
  for (i = 0; i < arr.length; i++) {
   arr[i]=nextInt();
  }
  mergeSort(arr, 0, N-1);
  for (i = 0; i < arr.length-1; i++) pw.printf("%d ",arr[i]);
  pw.printf("%d\n",arr[i]);
  pw.flush();
 }
 static void mergeSort(int[] arr,int L,int R) {
  if(L>=R) return;
  int mid = L+(R-L)/2;
  mergeSort(arr, L, mid);mergeSort(arr, mid+1, R);
  int temp[]=new int[R-L+1], i=0, l=L,r=mid+1;
  while (l<=mid&&r<=R) {
   if(arr[l]<=arr[r]) temp[i++]=arr[l++];
   else temp[i++]=arr[r++];
  }
  while (l<=mid) temp[i++]=arr[l++];
  while (r<=R) temp[i++]=arr[r++];
  for(i=0;i<temp.length;i++) arr[L+i]=temp[i];
 }
 static int nextInt() {
  try {
   st.nextToken();
  } catch (IOException e) {
   // TODO 自动生成的 catch 块
   e.printStackTrace();
  }
  return (int) st.nval;
 }
 static String nextStr() {
  try {
   st.nextToken();
  } catch (IOException e) {
   // TODO 自动生成的 catch 块
   e.printStackTrace();
  }
  return st.sval;
 }
 
}

```
