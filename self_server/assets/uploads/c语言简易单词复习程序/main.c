#include <io.h>
#include<conio.h> 
#include <stdio.h>
#include<stdlib.h>
int main()
{
    int mode=0;
    while(1){
    	system("cls");
    	printf("【主菜单】\n");
    	printf("[1]开始复习\n");
		printf("[2]导入词书\n");
    	printf("[3]设置\n");
    	printf("[4]退出\n");
    	scanf("%d",&mode);
		switch(mode){
			case 1:
				Review();
				break;
			case 2:
				menuImport(); 
				break;
			case 3:
				menuSetting();
				break; 
			case 4:
				return 0;
				break;
			default:
				break;
		} 
	} 
}

void menuImport()
{
	int mode=0;
    while(1){
    	system("cls");
    	printf("【导入菜单】\n");
    	printf("[1]导入单词\n");
    	printf("[2]导入词组\n");
    	printf("[3]返回上一级\n");
    	scanf("%d",&mode);
		switch(mode){
			case 1:
				importWordsList();
				break;
			case 2:
				//importPhrasesList();
				break; 
			case 3:
				return;
				break;
			default:
				break;
		} 
	} 
}
void importWordsList()
{
	FILE *file=NULL;
	char filePath[32];
	
	char listName[32];
	
	char getString[255]={0};
	char Word[512];
	char Chinese[1024];
	
	system("cls");
	
	printf("设置单词书名称：");
	// while (getchar() != '\n');//清空缓冲区 
	scanf("%s",listName);
	if(file=fopen(strcat(strcpy(filePath,"./VocabularyBooks/"),listName),"a+"))
	{
		printf("命名成功\n");
		Sleep(1000);
	
	}else
	{
		printf("命名失败\n");
		Sleep(1000);
		return;
	}
	system("cls");
	printf("请按行为单位输入单词-中文条目：\n");
	printf("示例：English 英语\n");
	printf("【提示：识别规则为，从该行的第一个英文字母到该字母之后的第一个非英文字母之前的内容将被视为单词，从该行第一个中文字符到该行末尾的内容将视为该单词的中文翻译】\n");
	while (getchar() != '\n');//清空缓冲区 
	while(gets(getString),getString[0]!='*')
	{
	//	printStr(getString);
	
		getWord(getString,Word);
		getChinese(getString,Chinese);
	
		printf("识别单词:[%s]\n",Word); 
		printf("识别中文:[%s]\n",Chinese); 
		
		if(*Word&&*Chinese)//该条目的单词和中文都有数据 
			fprintf(file,"%s*%s*0*0\n",Word,Chinese);
		else
			printf("识别失败\n"); 
	}
		fclose(file);
		printf("录入结束");
		Sleep(1000);
	
}
void importPhrasesList()
{
	FILE *file=NULL;
	char filePath[32];
	
	char listName[32];
	
	char getString[255]={0};
	char Phase[64];
	char Chinese[1024];
	
	system("cls");
	
	printf("设置单词书名称：");
	// while (getchar() != '\n');//清空缓冲区 
	scanf("%s",listName);
	if(file=fopen(strcat(strcpy(filePath,"./VocabularyBooks/"),listName),"a+"))
	{
		printf("命名成功\n");
		Sleep(1000);
	
	}else
	{
		printf("命名失败\n");
		Sleep(1000);
		return;
	}
	system("cls");
	printf("请按行为单位输入词组-中文条目：\n");
	printf("示例：English 英语\n");
	printf("【提示：识别规则为，从该行的第一个英文字母到该字母之后的第一个'空格中文'之前的内容将被视为词组，从该行第一个中文字符到该行末尾的内容将视为该单词的中文翻译】\n");
	while (getchar() != '\n');//清空缓冲区 
	while(gets(getString),getString[0]!='*')
	{
	//	printStr(getString);
	
		getPhase(getString,Phase);
		getChinese(getString,Chinese);
	
		printf("识别词组:[%s]\n",Phase); 
		printf("识别中文:[%s]\n",Chinese); 
		
		if(*Phase&&*Chinese)//该条目的单词和中文都有数据 
			fprintf(file,"%s\n%s\n0\n0\n\n",Phase,Chinese);
		else
			printf("识别失败\n"); 
	}
		fclose(file);
		printf("录入结束");
		Sleep(1000);
	
}
void getWord(char *string,char *Word)
{
	while( !isalpha(*string) && *string!='\0') string++;//定位到第一个英文字符 
	while( (isalpha(*Word=*string)||*Word=='-') && *string!='\0' )Word++,string++;// 从该字符开始到遇见第一个非字符 
	*Word='\0'; 
}
void getPhase(char *string,char *Phase)
{
	while( !isalpha(*string) && *string!='\0') string++;//定位到第一个英文字符 
	while( !(*string&0x80) && (*Phase=*string) && *string!='\0' )Phase++,string++;// 从该字符开始到遇见第一个'空格汉字'
	*(Phase+1)='\0';
}
void getChinese(char *string,char *Chinese)
{
	while( (*string&0x80)!=0x80 && *string!='\0') string++;//定位到第一个中文字符  
	while(*Chinese++=*string++);// 从该字符开始到最后一个字符 
	*Chinese='\0'; 
}
void printStr(char *str)
{
	do{
		printf("%x ",*str);
	}while(*str++);
}


void menuReview()
{
	
	int mode=0;
    while(1){
    	system("cls");
		// while (getchar() != '\n');//清空缓冲区    	
    	scanf("%d",&mode);
		switch(mode){
			case 1:
				Review(); 
				break;
			case 2:
				return;
				break;
			default:
				break;
		} 
	} 
}
void menuSetting()
{
	int mode=0;
    while(1){
    	system("cls");
    	printf("【设置菜单】\n");
    	printf("[1]切换词书\n");
    	printf("[2]变更单词出现规则\n");
    	printf("[3]返回上一级\n");
    	char temps[255];
    	scanf("%d",&mode);
		switch(mode){
			case 1:
				changeBooks();
				break;
			case 2:
				changeReviewOrderMode();
				break;
			case 3:
				return;
				break;
			default:
				break;
		} 
	} 
}
void changeBooks()
{
	char dirlist[10][64]={0};
	int i=0,j=0;
	char value[32];
	
	system("cls");
	printf("【当前学习词书】\n");
	getSettingValue("LearningBook",value);
    printf("[%s]\n\n",value);
	
	printf("【当前可切换词书列表】\n");	
	if( !getDirList("./VocabularyBooks/*",dirlist) )
	{
		printf("获取词书列表出错\n");
		Sleep(1000);
		return; 
	}
	printf("选择词书[0-n]:\n");
	i=0;
	while(dirlist[i][0]) 
	{
		printf("[%d].[%s]\n",i,dirlist[i]);
		i++;
	}

	// while (getchar() != '\n');//清空缓冲区 
	scanf("%d",&j);
	if(j>=i || j<0)
	{
		system("cls");
		printf("选择词书出错\n");
		Sleep(1000);
		return; 
	}
	printf("切换为:[%s]\n",dirlist[j]);
	if( setSettingValue("LearningBook",dirlist[j]) )
	{
		system("cls");
		printf("切换成功\n");
	}else
	{
		system("cls");
		printf("切换失败\n");
	}
	Sleep(1000);
}
char settingOrderString[10][100]={
	"按拼写正确次数_升序排序——优先复习不熟单词",
	"按拼写正确次数_降序排序",
	"按拼写错误次数_升序排序",
	"按拼写错误次数_降序排序——优先复习常错单词",
	"【推荐】按正确减错误次数_升序排序——优先复习不熟和常错单词",
	"按正确减错误次数_降序排序",
	"按单词长度_升序",
	"按单词长度_降序",
	"按单词在字典中顺序_升序",
	"按单词在字典中顺序_降序"
};
void changeReviewOrderMode()
{
	int mode=0;
	char value[100];

	system("cls");
	printf("【当前规则】\n");
	getSettingValue("ReviewOrderMode",value);
	printf("%s\n\n",value);
	printf("【单词出现规则变更】\n");
	for (int i = 0; i < 10; i++)
	{
		printf("[%d]%s\n",i,settingOrderString[i]);
	}
	scanf("%d",&mode);
	if (mode>=0&&mode<=10)
	{
		setSettingValue("ReviewOrderMode",settingOrderString[mode]);
		system("cls");
		printf("变更成功\n");
		Sleep(500);
	}else
	{
		setSettingValue("ReviewOrderMode",settingOrderString[5]);
		system("cls");
		printf("变更失败,已设为默认值。\n");
		Sleep(500);
	}
	return;
}
int setSettingValue(char*settingKey,void *settingValue)
{
	FILE *settingFile=fopen("./Setting/setting","r+");
	FILE *settingFileTemp=fopen("./Setting/setting_temp","w+");
	char settingKeyTemp[1024];
	char key[100],value[100];
	char sign=0; 
	
	while(fgets(settingKeyTemp,1024,settingFile))//每次获取一行 
	{
		
		if( isalpha(*settingKeyTemp) && *settingKeyTemp!=';')//如果是一条配置
		{
			SettingGetKey(settingKeyTemp,key);
			SettingGetValue(settingKeyTemp,value);
			//printf("[%s]=[%s]\n",key,value);
			
			if(strcmp(settingKey,key)==0)//如果是要修改的配置 
			{
				fprintf(settingFileTemp,"%s=%s\n",key,settingValue);
				sign=1;
			}else//不是要修改的配置 
			{
				fputs(settingKeyTemp,settingFileTemp);
			} 
		}
		else//如果不是配置 
		{
			fputs(settingKeyTemp,settingFileTemp);
		} 
	}
	fclose(settingFile);
	fclose(settingFileTemp);
	
	
	while(remove("./Setting/setting")!=0);
	while(rename("./Setting/setting_temp","./Setting/setting")!=0);
	
	return sign; 

}
int getSettingValue(char*settingKey,void *settingValue)
{
	FILE *settingFile=fopen("./Setting/setting","a+");
	char settingKeyTemp[1024];
	char key[100],value[100];
	int sign=0;
	while(fgets(settingKeyTemp,1024,settingFile))
	{
		if(isalpha(*settingKeyTemp)&&*settingKeyTemp!=';')
		{
			//printf("%s",settingKeyTemp);
			SettingGetKey(settingKeyTemp,key);
			SettingGetValue(settingKeyTemp,value);
			if(strcmp(settingKey,key)==0)
			{
				strcpy(settingValue,value);
				sign=1;
			}
		}
	}
	fclose(settingFile);
	return sign;
	
}
void SettingGetKey(char *string,char *key)
{
	while(!isalpha(*string)&&*string!='\0')string++;
	while((*key=*string)!='='&&*string!='\0')key++,string++;
	*key='\0';
}
void SettingGetValue(char *string,char *Value)
{
	while(*string!='\0'&& *string++!='=' );
	while( !isspace(*string) && (*Value=*string))Value++,string++;
	*Value='\0';
}
 
int getDirList( const char* path ,char dirList[][64])
{
    struct _finddata_t FileInfo;
    long Handle;
    if((Handle=_findfirst(path,&FileInfo))==-1L)
		return 0;
	else
	{
		if ( FileInfo.attrib != _A_SUBDIR )  // 如果不是目录
				strcpy(dirList++,FileInfo.name);

		while(_findnext(Handle,&FileInfo)==0)
			if ( FileInfo.attrib != _A_SUBDIR )  // 如果不是目录
				//printf("%s\n",FileInfo.name);
				strcpy(dirList++,FileInfo.name);
		_findclose(Handle);
	}
	
	return 1;

}
struct Word{
	char word[512];
	char chinese[1024];
	int correct;
	int mistake;
	struct Word* next;
};

struct Word* load(char *filePath)
{
	FILE *book=fopen(filePath,"r+");
	
	struct Word *Head=NULL,*TEMP=NULL;
	TEMP=Head=(struct Word *)malloc(sizeof(struct Word));
	Head->next=NULL;

	char word[512];
	char chinese[1024];
	int correct;
	int mistake;

	TEMP=Head;
	while(fscanf(book,"%[^*]%*c%[^*]%*c%d*%d\n",word,chinese,&correct,&mistake)!=EOF)
	{
		TEMP->next=(struct Word *)malloc(sizeof(struct Word));
		TEMP=TEMP->next;

		strcpy(TEMP->word,word);
		strcpy(TEMP->chinese,chinese);
		TEMP->correct=correct;
		TEMP->mistake=mistake;
		TEMP->next=NULL;
		// printf("%s*%s\n%d\n%d\n",TEMP->word,TEMP->chinese,TEMP->correct,TEMP->mistake);
	}
	fclose(book);
	return Head;
}
void exchangeTextTwo(struct Word *temp)
{
	struct Word *A,*B,*C;
	A=temp->next;
	B=temp->next->next;
	C=temp->next->next->next;

	temp->next=B;
	B->next=A;
	A->next=C;
}
void order(struct Word *Head,int orderType)
{
	struct Word *temp=Head->next;
	int shouldOrder=1;
	while(shouldOrder)
	{
		shouldOrder=0;
		temp=Head;
		while (temp->next && temp->next->next)
		{
			if(orderType==0 && temp->next->correct > temp->next->next->correct)//按正确次数升序
			{
				exchangeTextTwo(temp);//交换该地址位置的后面两个元素顺序
				shouldOrder=1;
			}
			if(orderType==1 && temp->next->correct < temp->next->next->correct)//按正确次数降序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==2 && temp->next->mistake > temp->next->next->mistake)//按错误次数降序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==3 && temp->next->mistake < temp->next->next->mistake)//按错误次数降序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==4 && ( (temp->next->correct-temp->next->mistake) > (temp->next->next->correct-temp->next->next->mistake) ) )//按正确-错误次数升序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==5 && ( (temp->next->correct-temp->next->mistake) < (temp->next->next->correct-temp->next->next->mistake) ) )//按正确-错误次数降序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==6 && ( strlen(temp->next->word) > strlen(temp->next->next->word) ) )//按单词长度_升序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==7 && ( strlen(temp->next->word) < strlen(temp->next->next->word) ) )//按单词长度_降序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==8 && ( strcmp(temp->next->word,temp->next->next->word) > 0 ) )//按单词在字典中顺序_升序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			if(orderType==9 && ( strcmp(temp->next->word,temp->next->next->word) < 0 ) )//按单词在字典中顺序_降序
			{
				exchangeTextTwo(temp);
				shouldOrder=1;
			}
			temp=temp->next;
		}
	}
}
struct Word * ReviewInit(char *filePath)
{
	system("cls");
	printf("加载中......\n");
	Sleep(500);
	struct Word *WordListHead=load(filePath);
	system("cls");
	char ReviewOrderMode[100];
	getSettingValue("ReviewOrderMode",ReviewOrderMode); 
	int i=0;
	for (i = 0; i < 10; i++)
	{
		if (strcmp(ReviewOrderMode,settingOrderString[i])==0)
		{
			printf("排序中......\n");
			Sleep(500);
			order(WordListHead,i);
			break; 
		}
	}
	// system("cls");
	// struct Word *temp=WordListHead;
	// while (temp=temp->next)
	// {
	// 	printf("%s %s %d %d\n",temp->word,temp->chinese,temp->correct,temp->mistake);
	// }
	return WordListHead;
}
void save(struct Word *head,char *filePath)
{
	FILE *book=fopen(filePath,"w+");

	struct Word *temp=head;
	while (temp=temp->next)
	{
		fprintf(book,"%s*%s*%d*%d\n",temp->word,temp->chinese,temp->correct,temp->mistake);
	}
	fclose(book);

}
void Review()
{
	char bookName[32];
	char filePath[64];
	char ReviewMode[32];
	char tempString[32];
	int i=0;
	struct Word * WordListHead,*temp;
	getSettingValue("LearningBook",bookName);
	strcat(strcpy(filePath,"./VocabularyBooks/"),bookName);
	WordListHead=ReviewInit(filePath);

	getSettingValue("ReviewMode",ReviewMode);
	
	system("cls");
	printf("退出输入:*\n");
	Sleep(500);
	temp=WordListHead;
	while (getchar() != '\n');//清空缓冲区 
	while (temp=temp->next)
	{
		i++;
		TryAgain:
		system("cls");
		printf("序号：%d\n",i);
		printf("%-15s%-15s%-15s\n","中文","拼写正确次数","拼写错误次数");
		printf("%-15s%-15d%-15d\n",temp->chinese,temp->correct,temp->mistake);
		
		gets(tempString);
		if (tempString[0]=='*')
		{
			break;
		}
		else if (strcmp(tempString,temp->word)!=0)
		{
			temp->mistake++;
			printf("提示：%s\n",temp->word);
			Sleep(3000);
			goto TryAgain;
		}
		else
		{
			temp->correct++;
			printf("拼写正确\n");
			Sleep(250);
		}
			
	}
	save(WordListHead,filePath);
	system("cls");
	printf("学习进度已保存\n");
	Sleep(500);

	Wordfree(WordListHead);
	system("cls");
	printf("内存已释放\n");
	Sleep(500);
	return;
} 
void Wordfree(struct Word *WordListHead)
{
	struct Word *temp=WordListHead;
	if (temp->next==NULL)
	{
		free(temp);
	}
	else
	{
		Wordfree(temp->next);
		free(temp);
	}
}