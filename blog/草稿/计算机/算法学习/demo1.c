#include<stdlib.h>
#include<stdio.h>
#include<time.h>

int Rand(int start,int to);
void quickQort(int arr[],int length);
void printArray(int arr[],int length);

void main()
{ 
	int arr[100];
	int i;
	for( i=0;i<100;i++){
		arr[i]=Rand(0,100);
	}
	quickQort(arr,100);
	printArray(arr,100);
}


int Rand(int start,int to){
	srand((unsigned)time(NULL)+rand());
	return start+rand()%(to-start);
}
void exchange(int arr[],int i,int j){
	if(i!=j){
		arr[i]=arr[i]^arr[j];
		arr[j]=arr[i]^arr[j];
		arr[i]=arr[i]^arr[j];
	}
}
int pagination(int arr[],int left,int right){
	int i = left;
	int midVal = arr[left];
	while(i<right){
		if(arr[i]<midVal) exchange(arr,left++,i++);
		else if(midVal<arr[i]) exchange(arr,right--,i);
		else i++;
	}
	return left;
}
void process(int arr[],int left,int right){
	if(left<right){
		int mid = pagination(arr,left,right);
		process(arr,left,mid-1);
		process(arr,mid+1,right);
	}
}
void quickQort(int arr[],int length){
	process(arr,0,length-1);
}
void printArray(int arr[],int length){
	int i=0;
	printf("[");
	for( i=0;i<length;i++){
		if(i!=length-1)printf("%d,",arr[i]);
		else printf("%d",arr[i]);
	}
	printf("]\n");
}