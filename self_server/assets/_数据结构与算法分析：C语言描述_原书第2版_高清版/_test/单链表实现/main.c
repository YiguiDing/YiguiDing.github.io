#include<stdio.h>
#include "linkList.c"
int main(){
    LinkList temp1;

    init(&temp1);

    insert_after(&temp1,1111);   //在链表末尾插入
    insert_after(&temp1,2222); 
    insert_index(&temp1,3,3333); //在链表指定位置插入
    insert_before(&temp1,4444); // 在链表头插入

    print(&temp1); //输出


    delete_element(&temp1,2222); //删除指定元素
    
    print(&temp1);

}