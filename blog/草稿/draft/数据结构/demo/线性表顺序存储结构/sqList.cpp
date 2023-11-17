
#include<stdio.h>

#define maxSize 1024
typedef int EleType;
typedef struct sqList
{
    EleType data[maxSize];
    int length;
} sqList;

typedef char State;
#define OK 1;
#define Error 0;

State initList(sqList& list)
{
    list.length = 0;
    return OK;
}
State isFull(sqList& List)
{
    return List.length == maxSize;
}
State indexOutOfInsertRange(sqList& list, int i)
{
    // i [1,length+1]
    return i < 1 || list.length+1 < i;
}
State ListInsert(sqList& list, int i,EleType e)
{
    if (isFull(list))
        return Error;
    if (indexOutOfInsertRange(list,i))
        return Error;
        
    for (int j = list.length ; j >= i ; j--)
    {
        list.data[j] = list.data[j-1];
    }
    list.data[i-1] = e;
    list.length++;
    return OK;
}
State indexOutOfLengthRange(sqList& list, int i)
{
    // i [1,length+1]
    return i < 1 || list.length < i;
}
State ListDelete(sqList& list, int i)
{
    if (indexOutOfLengthRange(list, i))
        return Error;
    for (int j = i-1; j < list.length; j++)
    {
       list.data[j]=list.data[j+1];
    }
    list.length--;
    return OK;
}
State GetElem(sqList& List,int i,EleType &e){
    if (indexOutOfLengthRange(List,i))
        return Error;
    e = List.data[i-1];
    return OK;
}
State locateElem(sqList& list,EleType e,int &i){
    for (int index = 0; index < list.length;index++)
    {
        if (list.data[index]==e)
        {
            i = index+1;
            return OK;
        }
    }
    return Error;
}

void printList(sqList& list){
    for (int i = 1; i <= list.length; i++)
    {
        EleType e;
        GetElem(list,i,e);
        printf("%d ",e);
    }
    putchar('\n');    
}