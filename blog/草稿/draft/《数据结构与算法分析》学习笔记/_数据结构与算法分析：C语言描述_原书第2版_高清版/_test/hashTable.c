
#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<string.h>

#define Error(s) printf(s)

#define OK 1
#define ERROR 0
#define null 0
#define false 0
#define true 1

typedef int Status;
typedef int ElementType;

typedef struct Node_List Node_List,* NodePosition_List,* List,** Lists;

struct Node_List{
    char * key;
    ElementType elemnet;
    NodePosition_List next;
    NodePosition_List before;
};

typedef struct HashTable{
    int size;
    Lists lsits;
}HashTabl,*HashTable;


int isPrime(int num){
    if(num<=2)return false;
    int sqrt_num = (int)sqrt(num);
    for (int i = 2; i <= sqrt_num; i++)
    {
        if(num%i == 0)
            return false;
    }
    return true;
}
int nextPrime(int num){
    while(!isPrime(num))
        num++;
    return num;
}

int hash(char * key, int tableSize){
    unsigned long long int hashVal = 0;
    char chr = key[0];
    while ( (chr = *(key++)) != 0 )
    {
        hashVal = hashVal<<8 | chr;
    }
    return hashVal % tableSize ; //结果在[0 , tableSize-1]
}

HashTable creat_HashTable(int size){
    int size_Prime = nextPrime(size);

    HashTable table = malloc(sizeof(HashTabl));
    if(table == null){
        Error("malloc: HashTable==null error");
        return null;
    }
    table->size = size_Prime;
    table->lsits = (Lists) malloc( sizeof(List) * size_Prime);
    if( table->lsits == null){
        Error("malloc: table->lsits==null error");
        return null;
    }
    for (int i = 0; i < size_Prime; i++)
    {
        table->lsits[i] = null;
    }
    return table;
}

NodePosition_List find(HashTable table, char * key){
    if(!table){
        Error("malloc: table->lsits==null error");
        return null;
    }
    int hash_ = hash(key,table->size);
    NodePosition_List pos = table->lsits[hash_];
    while(pos != null && strcmp(pos-> key,key) != 0)
        pos=pos->next;
    return pos;
}

Status insert(HashTable table, char * key , ElementType element){
    NodePosition_List pos =  find(table,key);
    if(!pos){
        int hash_ = hash(key,table->size);
        List temp = table->lsits[hash_];

        NodePosition_List newNode = malloc(sizeof(Node_List));
        newNode->before = null;
        newNode->elemnet = element;
        newNode->key = malloc(strlen(key)+1);
        strcpy(newNode->key,key);

        table->lsits[hash_] = newNode;
        newNode->next = temp;
        if(newNode->next){
            newNode->next->before = newNode;
        }
        return OK;
    }else{
        return ERROR;
    }
}
Status delete(HashTable table, char * key){
    NodePosition_List pos =  find(table,key);
    if(pos && pos->before){
        NodePosition_List before = pos->before;
        NodePosition_List this = pos;
        NodePosition_List next = pos->next;

        before->next = next;
        free(this);
        
        return OK;
    }else if(pos){
        NodePosition_List this = pos;
        NodePosition_List next = pos->next;

        table->lsits[hash(key,table->size)] = next ;
        free(this);
    }
    else{
        return ERROR;
    }
}
void print(HashTable table){
    printf("------------------------------------------------------\n");
    for (int i = 0; i < table->size; i++)
    {
        NodePosition_List item = table->lsits[i];
        while (item != null)
        {
            printf("| %d ",item->elemnet);
            item = item->next;
        }
        printf("\n");
    }
}


int main(){
    HashTable table1;
    NodePosition_List result;
    char string[1024];

    table1 = creat_HashTable(10);

    for (int i = 0; i < 100; i++)
    {
        sprintf(string,"%d",i);
        insert(table1,string,i);
    }
    
    // result = find(table1,"111");
    // if (result)
    // {
    //     printf("%d",result->elemnet);
    // }

    print(table1);
    delete(table1,"40");
    print(table1);
}