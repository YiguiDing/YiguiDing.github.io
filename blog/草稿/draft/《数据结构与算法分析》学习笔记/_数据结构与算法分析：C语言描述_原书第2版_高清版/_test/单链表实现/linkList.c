#include<stdlib.h>

typedef int Status;
#define OK 1
#define ERROR 0

typedef int ElementType;
typedef struct Node LinkList,Node,*Position;
struct Node {
    ElementType element;
    Position next;
};


Status init(LinkList* List){
    if(!List) return ERROR;
    List->next = 0;
    return OK;
}


Status insert_index(LinkList* List,int index,ElementType element){
    if(!List) return ERROR;
    Position current=List;
    while( current->next && --index){
        current=current->next;
    }
    Position temp = current->next;
    current->next = (Position)malloc(sizeof(Node));
    current->next->element = element;
    current->next->next = temp;
    return OK;
}

Status insert_after(LinkList* List,ElementType element){
    if(!List) return ERROR;
    Position current=List;
    while( current->next ){
        current=current->next;
    }
    current->next = (Position)malloc(sizeof(Node));
    current->next->element = element;
    current->next->next = 0;
    return OK;
}
Status insert_before(LinkList* List,ElementType element){
    if(!List) return ERROR;
    Position current=List;
    Position temp = current->next;
    current->next = (Position)malloc(sizeof(Node));
    current->next->element = element;
    current->next->next = temp;
    return OK;
}

Status delete_element(LinkList* List,ElementType element){
    if(!List) return ERROR;

    Position before=List;
    while (before->next ){
        if( before->next->element == element ){
            Position current = before->next;
            Position after = current->next;

            free(current);
            before->next = after;

            return OK;
        }
        before = before->next;
    }
    return ERROR;
}

Status print(LinkList * List){
    Position current = List->next;
    while (current)
    {
        printf("%d ",current->element);
        current = current->next;
    }
    putchar('\n');
    return OK;
}