#include<iostream>
#include<cstdlib>

#include<ctime>

#include <pthread.h>

#include <math.h>

#include "./EGE/EGE_include/graphics.h"                 //EGE(Easy Graph Engine) //简单图形引擎的头文件
#pragma comment(lib,"./EGE/EGE_lib/libgraphics64");     //graphics.h头文件所需的动态连接库文件 graphics1964.lib

//#pragma comment(linker, "/subsystem:windows /entry:mainCRTStartup") //屏蔽控制台应用程序的窗口

struct time_ms
{
    tm tm_struct_1900;//格式 秒，分，小时，天，月，年(相对于1900年)                       每一位的值
    time_t time_t_1900;//秒数 (相对于1900年)
    uint64_t ms_1900;//毫秒级 (相对于1900年) 

    SYSTEMTIME SYSTEMTIME_0000;//现在当前 毫秒 秒，分，小时，天，月，年(相对于公元 元年)  每一位的值
    uint64_t S_0000;//秒数(相对于公元 元年)
    uint64_t MS_0000;//毫秒数(相对于公元 元年) 
};
    //使用:
    // struct time_ms now=GetCurrentTimerMS(NULL); //得到毫秒级别数
    // xyprintf(0,0,
    // "剩余时间：%d:%d:%d:%d",
    // now.SYSTEMTIME_0000.wHour,now.SYSTEMTIME_0000.wMinute,now.SYSTEMTIME_0000.wSecond,now.SYSTEMTIME_0000.wMilliseconds);

//获取现在的时间（精确到毫秒）
struct time_ms GetCurrentTimerMS(char* szTimer=NULL)
{
    struct time_ms temp;
	uint64_t nTimer = 0;
	SYSTEMTIME currentTime;
	GetLocalTime(&currentTime);
    temp.tm_struct_1900=
    {   currentTime.wSecond,
		currentTime.wMinute,
		currentTime.wHour,
		currentTime.wDay,
		currentTime.wMonth - 1,
		currentTime.wYear - 1900
	};
    temp.time_t_1900=mktime(&temp.tm_struct_1900);
	temp.ms_1900 =  temp.time_t_1900 * 1000 + currentTime.wMilliseconds;
    temp.SYSTEMTIME_0000=currentTime;
    temp.S_0000=//不考虑平年、瑞年、大月、小月
    (currentTime.wYear-1)*365*24*60*60+
    (currentTime.wMonth-1)*30*24*60*60+
    (currentTime.wDay-1)*24*60*60+
    (currentTime.wHour-1)*60*60+
    (currentTime.wMinute-1)*60+
    currentTime.wSecond;
    temp.MS_0000=temp.S_0000*1000+currentTime.wMilliseconds;//毫秒数(相对于公元 元年)
	return temp;
}

//定义Point对象
class Point
{
    public:
    int x,y;
    Point(int xx,int yy)
    {
        x=xx;
        y=yy;
    }
    Point()
    {
        x=0;
        y=0;
    }
    bool operator==(Point B)
    {
        if(this->x==B.x&&this->y==B.y)
            return 1;
        else return 0;
    }
};

class Linkup
{
    public:
    int test_mode=0;//测试模式,控制是否显示寻路过程 就是寻路算法的计算过程的演示
    int test_mode_print_map_EGERGB=0;//测试模式，显示EGERGB
    int flish_f=10;//连接线的刷新频率ms 测试模式设置为10，普通模式设置为50
    int waiting_for_read=500;//演示显示，防止转瞬即逝

    int wide,high;//方块的行列个数
    int sum,half_sum;
    int map_wide,map_high;//地图的宽
    int map_sum,map_half_sum;
    int one_wide;//单个方块宽度
    int *map;//地图

    int *select_map;//用于记录被选中方块的地图
    Point select_A;//选中的方块A的坐标
    Point select_B;//选中的方块B的坐标
    int select_times;//选中的方块的个数

    int *conect_map;//用于推导最短路径的地图
    int *conect_map_temp;//用于比较两次的区别
    int *conect_map_outside;//用于记录地图中不规则图形的外边界

    Point conect_began;//记录连线地图的开始位置
    Point conect_end;//记录连线地图的结束位置

    int should_print_map=0;
    int should_draw_time=0;
    int should_draw_conect_line=0;
    int should_print_distance_map=0;
    int should_print_success=0;
    int should_print_failure=0;
    int should_print_score=0;
    int should_print_waiting_mouse=0;

    struct time_ms time_start;//记录开始的时间
    struct time_ms time_now;//记录现在当前的时间

    //剩余的秒数，毫秒数 总路程
    int SUM_last_s=25;//五分钟300秒
    //int last_ms=30000;//五分钟300秒 30000毫秒
    int add_time_s;//用于保存根据距离计算出来的奖励时间
    int distanct_ms=300; //每单位距离增加多少时间ms毫秒 如果  distanct_ms=500ms  路程为10，则增加5000ms 即5秒
    int remain_tangle=0;//记录剩余的方块个数
    int score=0;//用于统计得分
    const char *form="Algerian";//字体设置

    //初始化
    Linkup(int set_map_w,int set_map_h,int one_wide_)
    {
        one_wide=one_wide_;
        //保证w h 都是偶数，或者其中之一是偶数也可以
        map_wide=set_map_w%2==0? set_map_w:set_map_w+1;
        map_high=set_map_h%2==0? set_map_h:set_map_h+1;
        map_sum=map_wide*map_high;
        map_half_sum=map_sum/2;
        wide=map_wide-2;
        high=map_high-2;
        sum=wide*high;
        half_sum=sum/2;

        map=new int[map_sum];
        select_map=new int[map_sum];
        conect_map=new int[map_sum];
        conect_map_outside=new int[map_sum];
        conect_map_temp=new int[map_sum];

        setinitmode(0);
        initgraph(map_wide*one_wide,map_high*one_wide);   // 初始化，显示一个窗口
    }
    void copy_map(int *a,int *to_b)
    {
        for(int h=0;h<map_high;h++)
            for(int w=0;w<map_wide;w++)
                set_map_one(to_b,h,w,get_map_one(a,w,h));
    }
    //清除，初始化地图
    void clear_map(int *temp_map)
    {
        for(int h=0;h<map_high;h++)
            for(int w=0;w<map_wide;w++)
                *(temp_map+h*map_wide+w)=0;
    }
    //小数位数范围控制 控制保留几位小数
    double rate_control(double in,double size)
    {
        size=size*10;
        size=(int)size;
        double out;
        int data;

        data=in*size;
        out=data/(double)size;

        return out;
    }
    //从地图上随机找两个不同位置填充两个颜色
    void rand_set_double_color_at_map(int *temp_map)
    {
        int color;
        double Drate;

        for(int teimes=0;teimes<half_sum;teimes++)
        {
            //随机选一个颜色
            srand(time(NULL)+clock()+rand());

            //获取小数
            Drate=rand()%half_sum/((double)half_sum);
            

            //保留几位小数
            Drate=rate_control(Drate,1);

            color=preocess_color(Drate);
            

            //随机找两个位置填充颜色
            rand_set_one(color);
            rand_set_one(color);
        }
        // test:
        // set_map_one(map,point(3,4),preocess_color(0.5));
        // set_map_one(map,point(8,9),preocess_color(0.5));
        // set_map_one(map,point(7,9),preocess_color(0.6));
        // set_map_one(map,point(8,8),preocess_color(0.6));
        // set_map_one(map,point(7,8),preocess_color(0.6));
    }
    //输出地图
    void print_map()
    {
        setlinewidth(one_wide/15);
        for(int h=0;h<map_high;h++)
            for(int w=0;w<map_wide;w++)    
            {
                if(get_map_one(select_map,point(w,h)))
                {
                    if(*(map+h*map_wide+w))
                        draw_one(0,0,w,h,RED,*(map+h*map_wide+w));
                    else
                        draw_one(0,0,w,h,RED,WHITE);
                }
                else
                {
                    if(*(map+h*map_wide+w))
                        draw_one(0,0,w,h,WHITE,*(map+h*map_wide+w));
                    else
                        draw_one(0,0,w,h,WHITE,WHITE);
                }
            }
    }
    void print_conect_line()
    {

        //从终点往出发点推算
        setlinewidth(one_wide/15);
        setcolor(RED);
        if(test_mode)
        {
            setcolor(WHITE);
            draw_line_B_to_A(conect_map,conect_began,conect_end);
            setcolor(RED);
        }
        //draw_line_B_to_A(conect_map,select_A,select_B);
        draw_line_A_to_B(conect_map,conect_began,conect_end);
    }

    //给一个点，求下一个点，如果这个点不是起点，继续求下一个点，如果这个点是起点，则连接这个点和输入点
    void draw_line_A_to_B(int *conect_map_,Point A,Point B)
    {
        Point next=get_range_min_point(conect_map_,B);
        if(next==A)
        {
            line(
                A.x*one_wide+one_wide/2,
                A.y*one_wide+one_wide/2,

                B.x*one_wide+one_wide/2,
                B.y*one_wide+one_wide/2
                );
            Sleep(flish_f);
        }
        else
        {
            draw_line_A_to_B(conect_map_,A,next);
            line(
                next.x*one_wide+one_wide/2,
                next.y*one_wide+one_wide/2,

                B.x*one_wide+one_wide/2,
                B.y*one_wide+one_wide/2
                );
            Sleep(flish_f);
        }
    }
    void draw_line_B_to_A(int *conect_map_,Point A,Point B)
    {
        Point nextA,nextB=B;
        do
        {   //得到B点附近的一个坐标 该坐标的数值是B点值减1
            nextA=get_range_min_point(conect_map_,nextB);

            line(
                nextB.x*one_wide+one_wide/2,
                nextB.y*one_wide+one_wide/2,

                nextA.x*one_wide+one_wide/2,
                nextA.y*one_wide+one_wide/2
                );
            Sleep(flish_f);
            //draw_one_inside(0,0,nextB.x,nextB.y,RED);
            //draw_one_inside(0,0,nextA.x,nextA.y,RED);

            nextB.x=nextA.x;
            nextB.y=nextA.y;
        } while (!(nextA.x==A.x && nextA.y==A.y));//直到
    }
    //得到附近找小1的值
    Point get_range_min_point(int *map_,Point point)
    {
                                                Point point_up___(point.x,point.y-1);
            Point point_left_(point.x-1,point.y);                                    Point point_right(point.x+1,point.y);
                                                Point point_down_(point.x,point.y+1);
            int point_middle_num=get_map_one(map_,point);
            //找到附近的小1的值的坐标。
            if(get_map_one(map_,point_up___)==point_middle_num-1)
                return point_up___;
            else if(get_map_one(map_,point_down_)==point_middle_num-1)
                return point_down_;
            else if(get_map_one(map_,point_left_)==point_middle_num-1)
                return point_left_;
            //if(get_map_one(map_,point_right)==point_middle_num-1)
            else
                return point_right;
    }


    void print_distance_map()
    {
        int distance;
        int color=get_map_one(map,select_A);//出发点的颜色

        int B=GetRValue(color);
        int G=GetGValue(color);
        int R=GetBValue(color);

        for(int h=0;h<map_high;h++)
            for(int w=0;w<map_wide;w++)    
            {
                //设置前景色为当前方块颜色的互补色
                //setcolor(process_another_color(get_map_one(map,point(w,h))));
                //setcolor(YELLOW);
                //设置格式
                setfont(one_wide/2.5,0,form);
                //设置背景透明
                setbkmode(TRANSPARENT);
                char outtext[10];
                sprintf(outtext,"%d",get_map_one(conect_map,point(w,h)));
                int hh=textheight(outtext);	//获取字符串的高
                int ww=textwidth(outtext);   //获取字符串的宽

                if((distance=get_map_one(conect_map,point(w,h)))!=INT32_MAX&&distance!=0&&distance!=-1)//根据连接图 最大值是不能走的，0是能走的但还没有走到的地方
                {   

                    //根据距离从新计算颜色，计算规则为根据起点的颜色EGERGB 各个值减去一定的量，使其明度降低
                    distance=distance==1? 0:distance*5;//如果是起点，颜色不变
                    int new_R=R-distance<0? 0:R-distance;//防止出现负数
                    int new_G=G-distance<0? 0:G-distance;
                    int new_B=B-distance<0? 0:B-distance;
                    
                    int new_EGERGB=EGERGB(new_R,new_G,new_B);

                    setlinewidth(one_wide/15);
                    draw_one(0,0,w,h,new_EGERGB,new_EGERGB);

                    setcolor(process_another_color(new_EGERGB));

                    outtextxy(w*one_wide+one_wide/2-ww/2,h*one_wide+one_wide/2-hh/2,outtext);

                }  
                //else
                    //outtextxy(w*one_wide+one_wide/2-ww/2,h*one_wide+one_wide/2-hh/2,"NONE");
                

            }


        
    }
    void print_color_map()
    {

        //颜色
        setcolor(BLACK);

        //设置格式
        setfont(one_wide/8,0,form); 

        //设置背景透明
        setbkmode(TRANSPARENT);

        int EGERGB;
        int R;
        int G;
        int B;

        for(int h=0;h<map_high;h++)
            for(int w=0;w<map_wide;w++)    
            {
                EGERGB=get_map_one(map,point(w,h));

                B=GetRValue(EGERGB);
                G=GetGValue(EGERGB);
                R=GetBValue(EGERGB);
                
                
                //xyprintf(w*one_wide,h*one_wide,"EGERGB:(%d,%d,%d)",R,G,B);



                char outtext[40];
                sprintf(outtext,"EGERGB:%d%d%d",R,G,B);
                int hh=textheight(outtext);	//获取字符串的高
                int ww=textwidth(outtext);   //获取字符串的宽
                outtextxy(w*one_wide+one_wide/2-ww/2,h*one_wide+one_wide/2-hh/2,outtext);
                
            }


                    

                

        
    }
    
    
    void print_select_map()
    {
        for(int h=0;h<map_high;h++)
            for(int w=0;w<map_wide;w++)    
            {   
                if(*(select_map+h*map_wide+w))
                    draw_one_outside(0,0,w,h,RED);

            }
        
    }
    
    //获取鼠标单机
    void get_mouse_select()
    {
        
        
        
        int w=0;
        int h=0;
        if(mousemsg())
        {

        
            MOUSEMSG temp_msg=GetMouseMsg();
            if(temp_msg.mkLButton&&is_run_mode())//按下左键并且游戏游戏处于运行模式
            {
                w=temp_msg.x/one_wide;
                h=temp_msg.y/one_wide;
                if(*(select_map+h*map_wide+w)==0)
                {
                    *(select_map+h*map_wide+w)=1;
                    select_times++;

                    if(select_A.x==0 && select_A.y==0)//设置时A为空先设置A 否则设置B
                    {
                        select_A.x=w;
                        select_A.y=h;
                    }
                    else
                    {
                        select_B.x=w;
                        select_B.y=h;
                    }
                }
                //else if(*(select_map+h*map_wide+w)==1)//清除时 B不为空 先清除B 否则清除A
                else
                {
                    *(select_map+h*map_wide+w)=0;
                    select_times--;

                    if(select_B.x!=0 && select_B.y!=0)
                    {
                        select_B.x=0;
                        select_B.y=0;
                    }
                    else
                    {
                        select_A.x=0;
                        select_A.y=0;
                    }
                }
                // //等待左键松开 （错误写法 鼠标按下不移动，视作没有消息）
                // while(mousemsg()&&temp_msg.mkLButton)//如果有新消息，或者左键仍然被按下执行循环，直到没有新消息，或者左键被松开，跳出循环
                // {
                //     temp_msg=GetMouseMsg();
                // }

                should_print_map=1;
                while(should_print_map)
                {
                    //等地图最终更新完成，
                }

                //防止屏幕闪烁
                do//等待松开左键，
                {
                    if(mousemsg())//防止堵塞 如果有新消息
                        temp_msg=GetMouseMsg();

                }while(temp_msg.mkLButton); //如果任然有鼠标消息，或者左键仍然按下任然，继续循环
                
            }
        }

        if(select_times>=2)
        {
            check_conect_and_clear_map_cell_and_then_print_conect_line();//检测选中的两点能否连接，如果能，通知graph绘制该线
            clear_map(select_map);
            select_times=0;
            select_A.x=0;
            select_A.y=0;
            
            select_B.x=0;
            select_B.y=0;
        }
    }

    //检测选中的两点能否连接，如果能，通知graph绘制该线
    void check_conect_and_clear_map_cell_and_then_print_conect_line()
    {
        if(select_times==2 && get_map_one(map,select_A)==get_map_one(map,select_B)&& get_map_one(map,select_A)!=0)//已经选中两个方块 并且两方块的值相等
        {
            clear_map(conect_map);
            //将地图的障碍、起点、终点的位置信息记录到用于推导最短路径的地图上
            for(int h=0;h<map_high;h++)
                for(int w=0;w<map_wide;w++)    
                {
                    if(get_map_one(map,point(w,h))==0)          //地图中空白的地方
                        set_map_one(conect_map,h,w,0);              // 0
                    else                                        //有障碍的地方
                        set_map_one(conect_map,h,w,INT32_MAX);     //最大的正数
                }
            
            //起点记录为1，终点记录为-1； 并且把有终点记录没有起点记录的地图复制一份
            set_map_one(conect_map,select_B,-1);
            copy_map(conect_map,conect_map_temp);//并且把有终点记录没有起点记录的地图复制一份，用于比较差异，方便推导
            set_map_one(conect_map,select_A,1);


            //if(test_mode)//如果是测试模式，此时关闭时间显示，等待连线完毕后开启时间显示
                should_draw_time=0;

            //推导最短路径 下面这段算法有问题但是我懒得改了
            int last_area=0,now_area=count_conect_map_area();//如果走了两次之后面积一样 说明A到B的路都走完了，无路可走了，用于控制跳出循环
            do
            {
                last_area=now_area;

                clear_map(conect_map_outside);
                int distance;


                //下面两行代码代替了后面被注释掉的部分
                process_difference_A_B(conect_map,conect_map_temp,conect_map_outside);//比较两张地图有差异的地方，有差异的地方就是外边界
                copy_map(conect_map,conect_map_temp);//将有终点记录（更新后的）的地图的地图复制，用于下一次比较
/*
                //逐行遍历 记录大于0 小于INT32_MAX的第一个和最后一个坐标
                for(int h=0;h<map_high;h++)
                {
                    for(int w=0;w<map_wide;w++)//记录该行第一个符合要求的坐标
                    {
                        distance=get_map_one(conect_map,w,h);
                        if(distance>0&&distance<INT32_MAX)
                        {
                            set_map_one(conect_map_outside,h,w,1);
                            break;
                        }
                    }
                    for(int w=map_wide-1;w>=0;w--)//记录该行最后一个符合要求的坐标
                    {
                        distance=get_map_one(conect_map,w,h);
                        if(distance>0&&distance<INT32_MAX)
                        {
                            set_map_one(conect_map_outside,h,w,1);
                            break;
                        }
                    }
                }
                //逐列遍历 记录大于0 小于INT32_MAX的第一个和最后一个坐标
                for(int w=0;w<map_wide;w++)
                {
                    for(int h=0;h<map_high;h++)//记录该列第一个符合要求的坐标
                    {
                        distance=get_map_one(conect_map,w,h);
                        if(distance>0&&distance<INT32_MAX)
                        {
                            set_map_one(conect_map_outside,h,w,1);
                            break;
                        }
                    }
                    for(int h=map_high-1;h>=0;h--)//记录该列最后一个符合要求的坐标
                    {
                        distance=get_map_one(conect_map,w,h);
                        if(distance>0&&distance<INT32_MAX)
                        {
                            set_map_one(conect_map_outside,h,w,1);
                            break;
                        }
                    }
                }
*/
                if(test_mode)//如果处于测试模式，显示地图拓宽过程
                {
                    should_print_distance_map=1;
                    while(should_print_distance_map)
                    {
                        //等待距离显示结束
                    }
                }

                //用得到的外边界点的坐标来向外扩张计算距离
                for(int h=0;h<map_high;h++)
                    for(int w=0;w<map_wide;w++)//记录该行第一个符合要求的坐标
                        if(get_map_one(conect_map_outside,w,h))
                            if(add_point_around_num(conect_map,point(w,h)))//如果到达终点
                            {
                                //复制记录连接图的 起始位置
                                conect_began=select_A;
                                conect_end=select_B;
                                
                                add_time_s=process_add_time_s(get_map_one(conect_map,select_B));//记录本次要增加的时间

                                score+=add_time_s;//增加的总时间等于分数

                                should_draw_conect_line=1;//打印该连接线
                                while(should_draw_conect_line)
                                {
                                    //等连接线打印完成之后
                                }
                                //删除用于推演最短路径的连接地图
                                clear_map(conect_map);


                                //删除表示方块被选中的外边框
                                clear_map(select_map);
                                //删除方块
                                set_map_one(map,select_A,0);
                                set_map_one(map,select_B,0);

                                remain_tangle-=2;//剩余方块数减2 //帮助判断游戏是否结束

                                should_print_map=1;//更新地图，

                                while(should_print_map)
                                {
                                    //等地图最终更新完成，
                                }

                                //方块删除之后再更新增加的时间
                                SUM_last_s+=add_time_s;

                                goto end;
                            }

                now_area=count_conect_map_area();
            } while (last_area!=now_area);//直到地图填满，没有0 或者地图

            end:


            //if(test_mode)//如果是测试模式，此时关闭时间显示，等待连线完毕后开启时间显示
                should_draw_time=1;

        }
    }
    Point point(int x,int y)
    {
        Point temp(x,y);
        return temp;
    }

    //对扩散的面积计算
    int count_conect_map_area()
    {
        int count=0;
        for(int h=0;h<map_high;h++)
                for(int w=0;w<map_wide;w++)
                    if(*(conect_map+h*map_wide+w)!=0)
                        count++;
        return count;
    }

    //计算出两张地图的区别，有区别的用1表示
    void process_difference_A_B(int *map_A,int *map_B,int *result_map)
    {
        for(int h=0;h<map_high;h++)
                for(int w=0;w<map_wide;w++)
                    if(get_map_one(map_A,w,h)!=get_map_one(map_B,w,h))
                    {
                        set_map_one(result_map,h,w,1);
                    }
                    else
                        set_map_one(result_map,h,w,0);
    }

    //将地图中某坐标A的周围的数字设置为A坐标处的数值+1
    int add_point_around_num(int *map_,Point point)
    {
                                            Point point_up(point.x,point.y-1);

        Point point_left(point.x-1,point.y);                                    Point point_right(point.x+1,point.y);

                                            Point point_down(point.x,point.y+1);


        int point_middle_num=get_map_one(map_,point);

        //对该点周围四点标上数字

        return 
        set_conect_map_one(map_,point_up,point_middle_num+1)    ||
        set_conect_map_one(map_,point_down,point_middle_num+1)  ||
        set_conect_map_one(map_,point_left,point_middle_num+1)  ||
        set_conect_map_one(map_,point_right,point_middle_num+1) ;


    }





    int get_map_one(int*map_,Point point)
    {
         if(point.x>=0&& point.x<map_wide && point.y>=0&&point.y<map_high)
            return *(map_+point.y*map_wide+point.x);
        else
            return INT32_MAX;
    }
    int get_map_one(int*map_,int x,int y)
    {
        //是否在范围内
        if(x>=0&& x<map_wide && y>=0&&y<map_high)
            return *(map_+y*map_wide+x);
        else
            return INT32_MAX;
    }
    int set_conect_map_one(int*map_,Point point,int num)
    {
        //是否在范围内
        if(point.x>=0&& point.x<map_wide && point.y>=0&&point.y<map_high)
        {
            //如果下一个位置是终点，则返回真
            if(get_map_one(map_,point)==-1)
            {
                set_map_one(map_,point,num);
                return 1;
            }
            //如果是空白的地方则填充数
            if(get_map_one(map_,point)==0)
                set_map_one(map_,point,num);
            return 0; 
        }
        return 0; //到边界
    }
    void set_map_one(int*map_,Point point,int num)
    {
        if(point.x>=0&&point.x<map_wide&&point.y>=0&&point.y<map_high)
            *(map_+point.y*map_wide+point.x)=num;
    }
    void set_map_one(int*map_,int y,int x,int num)
    {
        if(x>=0&&x<map_wide&&y>=0&&y<map_high)
            *(map_+y*map_wide+x)=num;
    }
    void draw_one_inside(
        int y,//相对位置
        int x,
        int w,//地图坐标
        int h,
        int inside_color//内部颜色
        )
    {
        setfillcolor(inside_color);//设置当前绘图填充色
        bar(x+w*one_wide,x+h*one_wide,y+w*one_wide+one_wide,x+h*one_wide+one_wide);
    }
    void draw_one_outside(
        int y,//相对位置
        int x,
        int w,//地图坐标
        int h,
        int outside_color//内部颜色
        )
    {
        setcolor(outside_color);
        rectangle(x+w*one_wide,y+h*one_wide,x+w*one_wide+one_wide,y+h*one_wide+one_wide);
    }
    void draw_one
    (
        int y,//相对位置
        int x,
        int w,//地图坐标
        int h,
        int outside_color,//外边框颜色
        int inside_color//内部颜色
        //int text_number//显示的数字
    )
    {
        setfillcolor(inside_color);//设置当前绘图填充色
        bar(x+w*one_wide,x+h*one_wide,y+w*one_wide+one_wide,x+h*one_wide+one_wide);
        

        //setfillcolor(color);//设置当前绘图填充色
        //setfillcolor(outside_color);//设置当前绘图填充色
        setcolor(outside_color);
        rectangle(x+w*one_wide,y+h*one_wide,x+w*one_wide+one_wide,y+h*one_wide+one_wide);
    }
    
    void rand_set_one(int color)
    {
        int w;
        int h;
        do
        {
            srand(time(NULL)+clock()+rand());
            w=rand()%wide+1;

            srand(time(NULL)+clock()+rand());
            h=rand()%high+1;

        } while (*(map+h*map_wide+w)!=0);

        *(map+h*map_wide+w)=color;

    }
    bool check_complect()
    {

        for(int h=0;h<map_high;h++)
                for(int w=0;w<map_wide;w++)
                    if(*(map+h*map_wide+w)!=0)
                        return 0;
        return 1;

    }
    void creat_thread_to_run_graph()
    {
        //Sleep(1000);
        pthread_create(NULL,NULL,graph,this);
        
    }

    static void* graph(void *p)
    {

        Linkup *this_p=(Linkup*)p;
        while(1)
        {
            if(this_p->should_print_map)
            {
                this_p->print_map();

                if(this_p->test_mode_print_map_EGERGB)//如果处于测试模式，显示EGERGB值
                    this_p->print_color_map();//显示颜色

                this_p->should_print_map=0;
            }

            if(this_p->should_print_distance_map&&this_p->test_mode)//显示路程
            {

                this_p->print_distance_map();
                Sleep(this_p->flish_f);
                this_p->should_print_distance_map=0;
                
            }

            if(this_p->should_draw_conect_line)
            {

                
                this_p->print_conect_line();
                
                this_p->print_add_time_message();

                Sleep(this_p->waiting_for_read);

                this_p->should_draw_conect_line=0;
            }

            if(this_p->should_draw_time)//显示剩余时间，显示分数
            {
                //this_p->should_draw_time=0;
                this_p->print_time();
                this_p->print_score();
                Sleep(10);
            }

            if(this_p->should_print_success)//显示成功界面
            {
                this_p->print_success();
                this_p->should_print_success=0;
            }
            if(this_p->should_print_failure)//显示失败界面
            {
                this_p->print_failure();
                this_p->should_print_failure=0;
            }
            if(this_p->should_print_score)//显示分数
            {
                this_p->print_score();
                this_p->should_print_score=0;
            }
            // if(this_p->should_print_time_add)
            // {
                
            //     this_p->print_add_time_message();

            //     this_p->should_print_time_add=0;
            // }
            if(this_p->should_print_waiting_mouse)//显示初始界面
            {
                this_p->print_waiting();
                this_p->should_print_waiting_mouse=0;
            }
        }
    }

    //等待界面
    void print_waiting()
    {
        int front_color=EGERGB(255,255,0);//墨绿色EGERGB(0,87,55)
        int fillcolor=EGERGB(96,96,96);//EGERGB(34,139,34);

        int form_size=one_wide*1.75;

        // setlinewidth(1);
        // setcolor(WHITE);

        setfillcolor(fillcolor);//设置当前绘图填充色

        bar(0,0,one_wide*map_wide,one_wide*map_high);

        
        //文字
        char outtext[100];
        sprintf(outtext," 开始游戏 ");

        setfont(form_size,0,form);//设置格式
        int hh=textheight(outtext);	//获取字符串的高
        int ww=textwidth(outtext);   //获取字符串的宽

        setcolor(front_color);
        setbkcolor(BROWN);
        setbkmode(OPAQUE);//设置背景透明
        outtextxy(one_wide*map_wide/2-ww/2,one_wide*map_high/2-hh/2,outtext);

        //外边框
        setlinewidth(3);
        setcolor(WHITE);
        rectangle(one_wide*map_wide/2-ww/2,one_wide*map_high/2-hh/2,one_wide*map_wide/2+ww/2,one_wide*map_high/2+hh/2);


        int form_size_=form_size/4;
        setfont(form_size_,0,form);//设置格式

        sprintf(outtext,"Tips：两方块距离越远，得分越高。左键开始游戏，右键开启寻路算法演示。");
        
        hh=textheight(outtext);	//获取字符串的高
        ww=textwidth(outtext);   //获取字符串的宽
        
        setbkmode(TRANSPARENT);//设置背景透明OPAQUE
        setcolor(front_color);
        outtextxy(one_wide*map_wide/2-ww/2,one_wide*map_high-hh,outtext);

    }


    void print_success()
    {
        int color=EGERGB(255,255,0);
        int form_size=one_wide;

        setfillcolor(color);//设置当前绘图填充色
        bar(0,0,one_wide*map_wide,one_wide*map_high);
        
        //外边框
        // setlinewidth(3);
        // setcolor(color);
        // rectangle(0,0,one_wide*map_wide,one_wide*map_high);



        //成功提示
        
        setcolor(EGERGB(0,87,55));//墨绿色
        setfont(form_size,0,form);//设置格式
        setbkmode(TRANSPARENT);//设置背景透明

        char outtext[50];
        sprintf(outtext,"YOU ARE WINER!!!");
        int hh=textheight(outtext);	//获取字符串的高
        int ww=textwidth(outtext);   //获取字符串的宽
        outtextxy(one_wide*map_wide/2-ww/2,one_wide*map_high/2-hh/2-one_wide/2-form_size/2,outtext);


        //得分
        sprintf(outtext," [ Score: %d ] ",score);
        hh=textheight(outtext);	//获取字符串的高
        ww=textwidth(outtext);   //获取字符串的宽
        outtextxy(one_wide*map_wide/2-ww/2,one_wide*map_high/2-hh/2+form_size/2,outtext);



        //提示单机左键继续


    }
    void print_failure()
    {
        int color=EGERGB(96,96,96);
        int form_size=one_wide;
        
        setfillcolor(color);//设置当前绘图填充色
        bar(0,0,one_wide*map_wide,one_wide*map_high);
        
        //外边框
        setlinewidth(one_wide/15);
        setcolor(color);
        rectangle(0,0,one_wide*map_wide,one_wide*map_high);


        //失败提示
        //设置前景色为当前背景颜色的互补色
        setcolor(process_another_color(color));
        //设置格式
        setfont(form_size,0,form);
        //设置背景透明
        setbkmode(TRANSPARENT);
        char outtext[50];
        sprintf(outtext,"YOU ARE FAILURE");
        int hh=textheight(outtext);	//获取字符串的高
        int ww=textwidth(outtext);   //获取字符串的宽
        outtextxy(one_wide*map_wide/2-ww/2,one_wide*map_high/2-hh/2-form_size/2,outtext);


        //得分
        //设置前景色为当前背景颜色的互补色
        setcolor(process_another_color(color));
        //设置格式
        setfont(one_wide,0,form);
        //设置背景透明
        setbkmode(TRANSPARENT);
        //char outtext[50];
        sprintf(outtext," [ Score: %d ] ",score);
        hh=textheight(outtext);	//获取字符串的高
        ww=textwidth(outtext);   //获取字符串的宽
        outtextxy(one_wide*map_wide/2-ww/2,one_wide*map_high/2-hh/2+form_size/2,outtext);
    }
    

    void print_score()
    {
        //得分
        setcolor(RED);//颜色
        setbkcolor(WHITE);//背景
        setfont(one_wide/2,0,form);//格式
        //setbkmode(TRANSPARENT);//设置背景透明
        setbkmode(OPAQUE);//设置背景不透明
        char outtext[50];
        sprintf(outtext," [ Score: %d ] ",score);
        outtextxy(0,one_wide/2,outtext);
    }
    //显示一次时间
    void print_time()
    {
        //颜色
        setcolor(RED);
        setbkcolor(WHITE);
        //设置格式
        setfont(one_wide/2,0,form);

        //设置背景透明
        //setbkmode(TRANSPARENT);
        //设置背景不透明
        setbkmode(OPAQUE);

        time_now=GetCurrentTimerMS();//记录现在当前的时间

        //剩余的秒数                
        time_t last_time_s=SUM_last_s-(time_now.time_t_1900-time_start.time_t_1900);//总时间减经过的秒数等于剩余的时间

        //剩余的毫秒位
        //int last_time_MS=(time_now.MS_0000-time_start.MS_0000)/1000.0;//小数部分就是秒数
        //double modf(double x, double *integer);//返回值为小数部分（小数点后的部分），并设置 integer 为整数部分。
        int last_time_MS=modf((time_now.MS_0000-time_start.MS_0000)/1000.0,NULL)*1000;
         
        //将剩余的秒数转换为标准格式  如300s ->  00h:05m:00s 
        tm *STD_out_last = localtime(&last_time_s);

        if(last_time_s==0)
            last_time_MS=0;

        char outtext[50];

        sprintf(outtext," [ Time:%c%d:%c%d:%c%c%d ]     ",
        STD_out_last->tm_min>=10? '\n':'0',STD_out_last->tm_min,
        STD_out_last->tm_sec>=10? '\n':'0',STD_out_last->tm_sec,
        last_time_MS>=100? '\n':'0',last_time_MS>=10? '\n':'0',last_time_MS);

        outtextxy(0,0,outtext);

        if(last_time_s==0)
        {
            should_draw_time=0;//停止更新时间
        }

    }

    void print_add_time_message()
    {
        //颜色

        //设置前景色为当前方块颜色的互补色
        setcolor(process_another_color(get_map_one(map,conect_end)));

        //setbkcolor(WHITE);
        //设置格式
        setfont(one_wide/2,0,form);

        //设置背景透明
        setbkmode(TRANSPARENT);
        //设置背景不透明
        //setbkmode(OPAQUE);
        
        char outtext[10];

        sprintf(outtext,"+%ds",add_time_s);


        int hh=textheight(outtext);	//获取字符串的高
        int ww=textwidth(outtext);   //获取字符串的宽


        outtextxy(conect_end.x*one_wide+one_wide/2-ww/2,conect_end.y*one_wide+one_wide/2-hh/2,outtext);

    }

    void set_start_s_time()
    {
        time_start=GetCurrentTimerMS();//记录开始的时间
        time_now=GetCurrentTimerMS();//记录现在当前的时间
    }
    int preocess_color(double rate)
    {
        int R=0;
        int G=0;
        int B=0;
        if(rate<=1/6.0)
        {
            R=255;
            G=152/(1/6.0)*rate;
            B=0;
        }
        else
        if(rate<=2/6.0)
        {
            R=255;
            G=255/(2/6.0)*rate;
            B=0;
        }
        else
        if(rate<=3/6.0)
        {
            R=255/(0-(1/6.0))*(rate-2/6.0)+255;
            G=255;
            B=0;
        }
        else
        if(rate<=4/6.0)
        {
            R=0;
            G=255;
            B=255/(1/6.0)*(rate-3/6.0);
        }
        else
        if(rate<=5/6.0)
        {
            R=0;
            G=255/(0-(1/6.0))*(rate-4/6.0)+255;
            B=255;
        }
        else
        //if(rate<=1)
        {
            R=150/(1/6.0)*(rate-5/6.0);
            G=0;
            B=255;
        }
        return EGERGB(R,G,B);

    }
    //计算增加的时间
    int process_add_time_s(int distanct)
    {
        //终点的值*500ms
        if(distanct==2)
            return 0;
        else if(distanct*distanct_ms<=2000)
            return 1;
        else
            return distanct*distanct_ms/1000.0;

    }
    //计算互补色180°
    int process_another_color(int in_color)
    {

        int B=GetRValue(in_color);
        int G=GetGValue(in_color);
        int R=GetBValue(in_color);


        return EGERGB(255-R,255-G,255-B);
    }
    bool is_success()
    {
        if(remain_tangle==0)
            return 1;
        else
            return 0;
    }
    bool is_failure()
    {
        if(should_draw_time==0)
            return 1;
        else
            return 0;
    }
    bool is_run_mode()
    {
        return !is_failure() && !is_success();
    }
    
    void run()
    {
        while(1)
        {
            if(is_run_mode())//如果时间没有用尽并且游戏没有完成,运行
            {

                get_mouse_select();
            }
            else         
            {
                if(is_success())//如果完成游戏
                {
                    
                    should_draw_time=0;//通知graph停止更新时间

                    //显示挑战成功界面//显示得分（单机继续）
                    should_print_success=1;
                    while (should_print_success)
                    {
                        /* code */// 等待界面显示完成
                    }

                    Sleep(waiting_for_read);

                    MOUSEMSG msg;
                    do
                    {
                        msg=GetMouseMsg();
                    }
                    while(!msg.mkLButton);//等待单机鼠标左键

                    //初始化
                    //开始游戏
                    init_game();
                    start();
                }
                else if(is_failure())//如果时间用尽
                {
                    //
                    //显示挑战失败should_print_failure
                    should_print_failure=1;
                    while (should_print_failure)
                    {
                        /* code */// 等待界面显示完成
                    }

                    Sleep(waiting_for_read);


                    //选择继续。
                    MOUSEMSG msg;
                    do
                    {
                        msg=GetMouseMsg();
                    }
                    while(!msg.mkLButton);//等待单机鼠标左键
                
                        //继续游戏
                            //初始化
                            //开始游戏
                        init_game();
                        start();

                }
            } 
        }
        
    }
    //初始化游戏
    void init_game()
    {
        clear_map(map);
        rand_set_double_color_at_map(map);

        clear_map(select_map);
        select_times=0;
        select_A.x=0;
        select_A.y=0;
        select_B.x=0;
        select_B.y=0;

        clear_map(conect_map);
        clear_map(conect_map_outside);

        should_draw_time=0;
        should_print_map=0;
        should_draw_conect_line=0;
        should_print_distance_map=0;
        should_print_success=0;
        should_print_failure=0;

        remain_tangle=sum;
        score=0;

    }

    void waiting_for_start()
    {
        //Sleep(1000);

        should_print_waiting_mouse=1;
        while (should_print_waiting_mouse)//等待graph线程显示后将其置0
        {
            //等待
        }
        
        MOUSEMSG msg=GetMouseMsg();
        do
        {
            if(mousemsg())
                msg=GetMouseMsg();
            
            if(msg.mkRButton)
            {
                test_mode=1;//测试模式,显示寻路过程
                flish_f=10;//连接线的刷新频率ms 测试模式设置为10，普通模式设置为
            }

        } while (!msg.mkLButton&&!msg.mkRButton);



        
    }
    void start()
    {

        //显示主界面
        should_print_map=1;//通知graph显示界面
        while (should_print_map)
        {
            //等待//graph显示界面完成
        }
        set_start_s_time();//记录开始时间
        should_draw_time=1;//通知graph持续显示时间
        
    }

};
int main()
{
    Linkup new_Linkup(20,20,40);//创建对象
    
    new_Linkup.init_game();//初始化

    new_Linkup.creat_thread_to_run_graph();//运行图形处理线程

    new_Linkup.waiting_for_start();//等待单击鼠标开始

    new_Linkup.start();//开始

    new_Linkup.run();//正式运行
}
