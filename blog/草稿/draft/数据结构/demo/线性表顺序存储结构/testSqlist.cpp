#include<stdio.h>
#include"./sqList.cpp"

int main(){
    sqList sqList;
    initList(sqList);
    printf("初始状态：");
    printList(sqList);

    for (int i = 1; i <= 20; i++)
    {
        ListInsert(sqList,i,i);
    }
    printf("插入数据后状态：");
    printList(sqList);

    printf("删除位置为5的数据后状态：");
    ListDelete(sqList,5);
    printList(sqList);

    printf("插入位置为5的数据5后状态：");
    ListInsert(sqList,5,5);
    printList(sqList);

    printf("获取位置为5的数据：");
    EleType e;
    GetElem(sqList,5,e);
    printf("%d \n",e);

    printf("获取数据为10位置：");
    int i;
    locateElem(sqList,10,i);
    printf("%d \n",i);
    
    return 0;
}