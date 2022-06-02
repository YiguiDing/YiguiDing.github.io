---
title: "简易单词复习程序核心代码记录"
layout: post
date: 2022-04-25 10:19:00 +0800
cover: /images/article/jupyter.png
# coverWidth: 747
# coverHeight: 313
tags: [C]
categories: C
---

# 简易单词复习程序核心代码记录
* 这是一个邻近考试用c语言临时匆忙赶制的简易单词复习程序
* 由于编写过程中实现了一些之前从未实现的功能，而实现的方法似乎具有一定通用性 所以在此简要和概括性的记录一下 方便我下次直接复制

## 菜单与子菜单的切换和功能的调用
```c++

void subMenu()
{
    //写法同主菜单一致
}

void mainMenu()//主菜单
{
    char menuStr[][128]={
        "[主菜单]",
        "选项1",
        "选项2",
        "选项3",
        "退出"
    }
    while(1){

        System("cls");

        printf("%s\n",menuStr[i]);
        
        for(int i=1;i<5;i++)
            printf("[%d].%s\n",i,menuStr[i]);
        
        int j=0;
        scanf("%d",&j);
        
        switch(j)
        {
            case 1:
                subMenu();
                break;
            case 2:
                function1();
                break;
            case 3:
                function2();
                break;
            case 4:
                return;
            default:
                continue;
        }
    }
}

```

## 提取行内单词和中文意思
```c++
//关键代码片段：
while(gets(getString),getString[0]!='*')
{
    getWord(getString,Word);//提取单词
    getChinese(getString,Chinese);//提取中文
    if( *Word && *Chinese )//从该行提取的单词和中文不为空
        //do something...
    else
        continue;
}
//提取单词和中文的函数：
void getWord(char *string,char *Word)
{
	while( !isalpha(*string) && *string!='\0') string++;//定位到第一个英文字符 
	while( (isalpha(*Word=*string)||*Word=='-') && *string!='\0' )Word++,string++;// 从该字符开始到遇见第一个非字符 
	*Word='\0'; 
}
void getChinese(char *string,char *Chinese)
{
	while( (*string&0x80)!=0x80 && *string!='\0') string++;//定位到第一个中文字符  
	while(*Chinese++=*string++);// 从该字符开始到最后一个字符 
	*Chinese='\0'; 
}
```
