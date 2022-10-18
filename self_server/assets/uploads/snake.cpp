#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<ctime>
#include <graphics.h>
#include <windows.h>
#include<winuser.h>
#include <pthread.h>
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
//计算单节蛇的颜色
 void preocess_rate_color(double rate,int *R,int *G,int *B)
 {
    if(rate<=1/6.0)
    {
        *R=255;
        *G=152/(1/6.0)*rate;
        *B=0;
    }
    else
    if(rate<=2/6.0)
    {
        *R=255;
        *G=255/(2/6.0)*rate;
        *B=0;
    }
    else
    if(rate<=3/6.0)
    {
        *R=255/(0-(1/6.0))*(rate-2/6.0)+255;
        *G=255;
        *B=0;
    }
    else
    if(rate<=4/6.0)
    {
        *R=0;
        *G=255;
        *B=255/(1/6.0)*(rate-3/6.0);
    }
    else
    if(rate<=5/6.0)
    {
        *R=0;
        *G=255/(0-(1/6.0))*(rate-4/6.0)+255;
        *B=255;
    }
    else
    //if(rate<=1)
    {
        *R=150/(1/6.0)*(rate-5/6.0);
        *G=0;
        *B=255;
    }

 }
class snake_map
{
    private:
    public:
    const int space=0;
    const int snake=1;
    const int food=-2;
    const int wall=-1;
    
    


    class Point 
        Point_food,
        Point_snake_head,
        Point_snake_end;
    
    int wide;
    int hight;
    int *map;
    int map_one_wide;

    public:
    const int up=1;
    const int down=2;
    const int right=3;
    const int left=4;
    //const int middle=0;
    bool run_mode=1;
    int guide;
    
    
    public:
    
        //构造函数，初始化地图
    snake_map(int h,int w,int map_one_w)
    {
        wide=w;
        hight=h;
        map_one_wide=map_one_w;

        setinitmode(0);
        initgraph(wide*map_one_wide,(hight+0)*map_one_wide);   // 初始化，显示一个窗口

        creat_map();
        initi_map();
        creat_wall();
        creat_snake();
        creat_food();
        guide=up;
    }
    void init()
    {
        initi_map();
        creat_wall();
        creat_snake();
        creat_food();
        guide=up;
    }
    void change_mode()
    {
        run_mode=run_mode? 0:1;
    }
    void set_food(int x,int y)
    {
        Point_food.x=x;
        Point_food.y=y;
    }
    void set_snake_head(int x,int y)
    {
        Point_snake_head.x=x;
        Point_snake_head.y=y;
    }
    void set_snake_head(Point temp)
    {
        Point_snake_head.x=temp.x;
        Point_snake_head.y=temp.y;
    }
    void set_snake_end(int x,int y)
    {
        Point_snake_end.x=x;
        Point_snake_end.y=y;
    }
    int get_snake_len(struct Point end_snake)
    {
        return *(map+end_snake.y*wide+end_snake.x);
    }
    int get_snake_len(int y,int x)
    {
        return *(map+y*wide+x);
    }
    void set_map(struct Point temp,int x)
    {
       *(map+temp.y*wide+temp.x)=x;
         
    }
    void set_map(int y,int x,int num)
    {
         *(map+y*wide+x)=num;
    }

    void set_guide()
    {
        {
            if(GetAsyncKeyState(VK_UP))
	        {
                if(guide!=down)
		            guide=up;
	        }
            if(GetAsyncKeyState(VK_DOWN))
	        {
                if(guide!=up)
		            guide=down;
	        }
            if(GetAsyncKeyState(VK_RIGHT))
	        {
                if(guide!=left)
		            guide=right;
	        }
            if(GetAsyncKeyState(VK_LEFT))
	        {
                if(guide!=right)
		            guide=left;
	        }
        }
    }
    void add_snake()
    {
        
        for(int h_=0;h_<hight;h_++)
            for(int w_=0;w_<wide;w_++)
                if(
                    *(map+h_*wide+w_)>0
                    )
                    *(map+h_*wide+w_)+=1;
    }
    //creat map space
    void creat_map()
    {
        map=new int[wide*hight];
    }
    //initialize map
    void initi_map()
    {
        for(int h_=0;h_<hight;h_++)
            for(int w_=0;w_<wide;w_++)
                *(map+h_*wide+w_)=space;
    
    }
    //creat wall
    void creat_wall()
    {
        for(int h_=0;h_<hight;h_++)
        {
            *(map+h_*wide)=wall;
            *(map+h_*wide+wide-1)=wall;
        }
        
        for(int w_=0;w_<wide;w_++)
         {
            *(map+w_)=wall;
            *(map+hight*(wide-1)+w_)=wall;
         }
    
    }
    //random creat food in the map space
    void creat_food()
    {
        int food_w;
        int food_h;
        do
        {
        
            srand(time(NULL)+clock()+rand());
            food_w=rand()%wide;
        
            srand(time(NULL)+clock()+rand());
            food_h=rand()%hight;
        
        }while
        (
        !(*(map+food_h*wide+food_w)==space)
        );
        
        *(map+food_h*wide+food_w)=food;
        

        set_food(food_w,food_h);
        
    }


    void creat_snake()
    {
        //creat snake at the mide of the map
        
        
        set_map(hight/2+0,wide/2,1);
        set_map(hight/2+1,wide/2,2);
        set_map(hight/2+2,wide/2,3);
        
        set_snake_head(wide/2,hight/2);
        set_snake_end(wide/2,hight/2+2);
       
    }
    struct Point get_new_end_position()
    {
        set_map(Point_snake_end,0);
        int max_len=0;

        struct Point max_snake_end;
        max_snake_end.x=0;
        max_snake_end.y=0;

        if(get_snake_len(Point_snake_end.y-1,Point_snake_end.x)>=max_len)
        {
            max_len=get_snake_len(Point_snake_end.y-1,Point_snake_end.x);
            max_snake_end.y=Point_snake_end.y-1;
            max_snake_end.x=Point_snake_end.x;
        }
        if(get_snake_len(Point_snake_end.y+1,Point_snake_end.x)>=max_len)
        {
            max_len=get_snake_len(Point_snake_end.y+1,Point_snake_end.x);
            max_snake_end.y=Point_snake_end.y+1;
            max_snake_end.x=Point_snake_end.x;
        }
        if(get_snake_len(Point_snake_end.y,Point_snake_end.x-1)>=max_len)
        {
            max_len=get_snake_len(Point_snake_end.y,Point_snake_end.x-1);
            max_snake_end.y=Point_snake_end.y;
            max_snake_end.x=Point_snake_end.x-1;
        }
        if(get_snake_len(Point_snake_end.y,Point_snake_end.x+1)>=max_len)
        {
            max_len=get_snake_len(Point_snake_end.y,Point_snake_end.x+1);
            max_snake_end.y=Point_snake_end.y;
            max_snake_end.x=Point_snake_end.x+1;
        }
        

        return max_snake_end;
        //Point_snake_end;

    }
    struct Point get_next_position()
    {
        struct Point temp;
        if(guide==up)
        {
            temp.x=Point_snake_head.x;
            temp.y=Point_snake_head.y-1;
        }
        else
        if(guide==down)
        {
            temp.x=Point_snake_head.x;
            temp.y=Point_snake_head.y+1;
        }
        else
        if(guide==right)
        {
            temp.x=Point_snake_head.x+1;
            temp.y=Point_snake_head.y;
        }
        else
        if(guide==left)
        {
            temp.x=Point_snake_head.x-1;
            temp.y=Point_snake_head.y;
        }
        return temp;
    }

    bool eat_self(struct Point next_position)
    {
        if(*(map+next_position.y*wide+next_position.x)>0)
        {
            guide=0;
            return 1;
        }
        return 0;
    }
    bool eat_wall(struct Point next_position)
    {
        if(*(map+next_position.y*wide+next_position.x)==wall)
        {    
            guide=0;
            return 1;
        }
        return 0;
    }
    bool eat_food(struct Point next_position)
    {
        //吃到食物
        if(
            next_position.x==Point_food.x
            &&
            next_position.y==Point_food.y
            )
        {
            Point_snake_head=Point_food;
            add_snake();
            set_map(Point_snake_head,1);
            creat_food();
            return 1;
        }
        return 0;
    }
    //检测有没有吃到
    bool check_eat()
    {
        struct Point next_position=get_next_position();
        if(run_mode)
        {
            if(
                eat_food(next_position)
            )
            return 1;
            else
            return 0;
        }
        else
            return 0;
        
        

    }
    bool check_die()
    {
        struct Point next_position=get_next_position();

        if(run_mode)
        {
            if(
            eat_wall(next_position)
            ||
            eat_self(next_position)
            )
            return 1;
            else
                return 0;
        }
        else
            return 0;
        
    }
    
    
    void move_step_snake()
    {
        struct Point next_position=get_next_position();
        if(run_mode)
        {
            Point_snake_head=next_position;
            add_snake();
            set_map(Point_snake_head,1);
            set_map(Point_snake_end,0);
            Point_snake_end=get_new_end_position();
        }
    }
    void draw_one(
        int y,//相对位置
        int x,
        int w,//地图坐标
        int h,
        int outside_color,
        int inside_color//颜色
        )
    {
        
        setfillcolor(inside_color);//设置当前绘图填充色
        bar(x+w*map_one_wide,x+h*map_one_wide,y+w*map_one_wide+map_one_wide,x+h*map_one_wide+map_one_wide);
        

        //setfillcolor(color);//设置当前绘图填充色
        //setfillcolor(outside_color);//设置当前绘图填充色
        setcolor(outside_color);
        rectangle(x+w*map_one_wide,y+h*map_one_wide,x+w*map_one_wide+map_one_wide,y+h*map_one_wide+map_one_wide);

        

    }
    void draw_one(
        int y,//相对位置
        int x,
        int w,//地图坐标
        int h,
        int outside_color,
        int inside_color,//颜色
        int text_number
        //int text_coler,
        )
    {
        
        setfillcolor(inside_color);//设置当前绘图填充色
        bar(x+w*map_one_wide,x+h*map_one_wide,y+w*map_one_wide+map_one_wide,x+h*map_one_wide+map_one_wide);
        

        //setfillcolor(color);//设置当前绘图填充色
        //setfillcolor(outside_color);//设置当前绘图填充色
        setcolor(outside_color);
        rectangle(x+w*map_one_wide,y+h*map_one_wide,x+w*map_one_wide+map_one_wide,y+h*map_one_wide+map_one_wide);

        //写数字
        
        //前景色 文字颜色
        if(inside_color==WHITE)
            setcolor(BLACK);
        else
        setcolor(WHITE);

        //背景色
        //setbkcolor(inside_color);

        //设置格式
        setfont(map_one_wide,0,"宋体");

        //设置背景透明
        setbkmode(TRANSPARENT);
        
        //
        xyprintf(x+w*map_one_wide,y+h*map_one_wide,"%d",text_number);


    }
    int precess_snake_body_color(int snake_node_len)
    {
        // 当前节数/总节数 * 255

        //总长度
        double snake_len_sumary=get_snake_len(Point_snake_end);

        int snake_r=255;
        int snake_g=255;
        int snake_b=255;
        preocess_rate_color(snake_node_len/snake_len_sumary,&snake_r,&snake_g,&snake_b);

        return EGERGB(snake_r,snake_g,snake_b);
        
    }
    void add_snack_body()
    {
        Point_snake_head=get_next_position();
        add_snake();
        set_map(Point_snake_head,1);
    }
    void cut_snack_body()
    {
        Point_snake_end=get_new_end_position();
    }
    //打印地图
    void print_map()
    {
        //cleardevice();
        //setbkcolor();//设置当前绘图背景色
        for(int h_=0;h_<hight;h_++)
        {
            for(int w_=0;w_<wide;w_++)
            {
                
                if(get_snake_len(h_,w_)==space)
                {
                    //setcolor(RED);//EGERGB(255,0,0) //设置当前绘图前景色
                    
                    draw_one(0,0,w_,h_,BLACK,BLACK);

                    //printf("□");
                }   
                else
                if(get_snake_len(h_,w_)==wall)
                {
                    draw_one(0,0,w_,h_,BLACK,WHITE);

                }
                else
                if(get_snake_len(h_,w_)>0)
                {

                    draw_one(0,0,w_,h_,BLACK,precess_snake_body_color(get_snake_len(h_,w_)));
                    
                        
                }
                else
                if(get_snake_len(h_,w_)==food)
                {
                   draw_one(0,0,w_,h_,WHITE,RED);
                   //if(get_snake_len(h_,w_)==1)
                    {
                        setcolor(WHITE);

                        setfont(-map_one_wide*0.6,0,"宋体");

                        //设置背景透明
                        setbkmode(TRANSPARENT);

                        //settextjustify(CENTER_TEXT,CENTER_TEXT);

                        char numstr[10]={0};
                        sprintf(numstr,"%d",get_snake_len(Point_snake_end));
                        textheight(numstr);
                        outtextxy(w_*map_one_wide+map_one_wide/2-textwidth(numstr)/2,h_*map_one_wide+map_one_wide/2-textheight(numstr)/2,numstr);

                        //outtextrect(w_*map_one_wide,h_*map_one_wide,map_one_wide,map_one_wide,numstr);

                        //rectprintf(w_*map_one_wide,h_*map_one_wide,map_one_wide,map_one_wide,"%d",get_snake_len(Point_snake_end));
                        //xyprintf(w_*map_one_wide,(h_)*map_one_wide,"%d",get_snake_len(Point_snake_end));
                    }

                }
                
            }
        }
    }
    //打印地图
    void print_map_test()
    {
        //cleardevice();
        //setbkcolor();//设置当前绘图背景色
        for(int h_=0;h_<hight;h_++)
        {
            for(int w_=0;w_<wide;w_++)
            {
                
                if(get_snake_len(h_,w_)==space)
                {
                    //setcolor(RED);//EGERGB(255,0,0) //设置当前绘图前景色
                    
                    draw_one(0,0,w_,h_,BLACK,BLACK,space);

                    //printf("□");
                }   
                else
                if(get_snake_len(h_,w_)==wall)
                {
                    draw_one(0,0,w_,h_,BLACK,WHITE,wall);

                }
                else
                if(get_snake_len(h_,w_)>0)
                {

                    draw_one(0,0,w_,h_,BLACK,precess_snake_body_color(get_snake_len(h_,w_)),get_snake_len(h_,w_));
                    
                }
                else
                if(get_snake_len(h_,w_)==food)
                {
                   draw_one(0,0,w_,h_,WHITE,RED,food);

                }
                
            }
        }
    }
    void print_len()
    {

        setcolor(WHITE);
        //setbkcolor(RED);

        //设置格式
        setfont(map_one_wide,0,"宋体");

        //设置背景透明
        setbkmode(TRANSPARENT);
        
        
        xyprintf(0,(hight)*map_one_wide,"当前长度:%d",get_snake_len(Point_snake_end));

    }
    int get_map_one(int*map_,Point point)
    {
         if(point.x>=0&& point.x<wide && point.y>=0&&point.y<hight)
            return *(map_+point.y*wide+point.x);
        else
            return INT32_MAX;
    }
    int get_map_one(int*map_,int x,int y)
    {
        //是否在范围内
        if(x>=0&& x<wide && y>=0&&y<hight)
            return *(map_+y*wide+x);
        else
            return INT32_MAX;
    }
    void set_map_one(int*map_,Point point,int num)
    {
        if(point.x>=0&&point.x<wide&&point.y>=0&&point.y<hight)
            *(map_+point.y*wide+point.x)=num;
    }
    void set_map_one(int*map_,int y,int x,int num)
    {
        if(x>=0&&x<wide&&y>=0&&y<hight)
            *(map_+y*wide+x)=num;
    }


    void stop_add_cut()
    {
        if(GetAsyncKeyState(VK_SPACE))
	    {
            change_mode();
	    }
        if(GetAsyncKeyState(VK_ADD))
	    {
            add_snack_body();
	    }
        if(GetAsyncKeyState(VK_SUBTRACT))
	    {
            cut_snack_body();
	    }
    }

    int count_area( int *map_)
    {
        int count=0;

        for(int h=0;h<hight;h++)
            for(int w=0;w<wide;w++)
                if(*(map_+h*wide+w)>0 && *(map_+h*wide+w)<INT32_MAX)
                    count++;
        return count;
    }

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
    int set_conect_map_one(int *map_,Point point,int num)
    {
        //是否在范围内
        if( point.x>=0 && point.x<wide && point.y>=0 && point.y<hight)
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
    Point point(int x,int y)
    {
        Point temp(x,y);
        return temp;
    }

    //自动模式
    void auto_mode()
    {
        int *auto_map=new int[wide*hight];
        Point next;
        Point mostFarP;
        //clear
        clear_map(auto_map);

        //标记地图
        for(int h=0;h<hight;h++)
            for(int w=0;w<wide;w++)
                if(*(map+h*wide+w)==0)//空白处设置0
                    *(auto_map+h*wide+w)=0;
                else
                    *(auto_map+h*wide+w)=INT32_MAX;//墙，蛇身体，设置最大值

        //记录开始位置
        *(auto_map+Point_snake_head.y*wide+Point_snake_head.x)=1;
        //记录目标位置
        *(auto_map+Point_food.y*wide+Point_food.x)=-1;
        

        int last_area;
        int now_area;
        int distance=1;
        do
        {
            last_area=count_area(auto_map);//计算大于0的个数
            
                       //用得到的外边界点的坐标来向外扩张计算距离
                for(int h=0;h<hight;h++)
                    for(int w=0;w<wide;w++)//记录该行第一个符合要求的坐标
                        if(get_map_one(auto_map,w,h)==distance)
                            if(add_point_around_num(auto_map,point(w,h)))//如果到达终点
                            {
                                next=process_the_next_point(auto_map,Point_snake_head,Point_food);
                                set_guide(process_guid(Point_snake_head,next));//guide=process_guid(Point_snake_head,next);//计算方向
                                
                                goto end;//找到最优解，跳出
                            }
                distance++;
                now_area=count_area(auto_map);//计算大于0的个数
        } while (last_area!=now_area);//直到地图填满，没有0 或者地图


        //如果找不到最优解，找次优解——往能走到的最远的坐标移动
        if(distance>=3)
        {
            distance-=1;//能走到的最远距离
            for(int h=0;h<hight;h++)
                for(int w=0;w<wide;w++)//记录该行第一个符合要求的坐标
                    if(get_map_one(auto_map,w,h)==distance)
                    {    
                        mostFarP.x=w;
                        mostFarP.y=h;
                    }
            next=process_the_next_point(auto_map,Point_snake_head,mostFarP);
            set_guide(process_guid(Point_snake_head,next));//guide=process_guid(Point_snake_head,next);//计算方向
        }else
        {
            ;//没救了
        }

        
        
        end:;//得到起点位置到食物位置的下一个方向

    }

    Point process_the_next_point(int *auto_map,Point start,Point end)
    {
        
        int *line_map=new int[wide*hight];
        clear_map(line_map);


        draw_line_B_to_A(auto_map,line_map,start,end);
        
        for(int h=0;h<hight;h++)
            for(int w=0;w<wide;w++)//记录该行第一个符合要求的坐标
                if(get_map_one(line_map,w,h)==2)
                {
                    Point out(w,h);
                    return out;
                }
        Point out;
        return out;
    }

    void set_guide(int guide_)
    {
        if(guide_==up)
        {
            if(guide!=down)
                guide=up;
        }
        if(guide_== down)
        {
            if(guide!=up)
                guide=down;
        }
        if(guide_==right)
        {
            if(guide!=left)
                guide=right;
        }
        if(guide_==left)
        {
            if(guide!=right)
                guide=left;
        }
    }



    void clear_map(int *temp_map)
    {
        for(int h=0;h<hight;h++)
            for(int w=0;w<wide;w++)
                *(temp_map+h*wide+w)=0;
    }




    void draw_line_B_to_A(int *conect_map_,int *line_map,Point A,Point B)
    {
        Point nextA,nextB=B;
        do
        {   //得到B点附近的一个坐标 该坐标的数值是B点值减1
            nextA=get_range_min_point(conect_map_,nextB);

            set_map_one(line_map,nextB,get_map_one(conect_map_,nextB));
            set_map_one(line_map,nextA,get_map_one(conect_map_,nextA));
            


            nextB.x=nextA.x;
            nextB.y=nextA.y;
        } while (!(nextA.x==A.x && nextA.y==A.y));//直到0
    }





    
    void fill_line(int *conect_map_,int *line_map,Point START,Point END)
    {
        Point next=get_range_min_point(conect_map_,END);
        if(next==START)
        {
            *(line_map+wide*next.y+next.x)=*(conect_map_+wide*next.y+next.x);
        }
        else
        {
            fill_line(conect_map_,line_map,START,next);
            *(line_map+wide*END.y+END.x)=*(conect_map_+wide*END.y+END.x);
            
        }
    }


    int process_guid(Point start,Point around)
    {
                                                Point point_up___(start.x,start.y-1);
            Point point_left_(start.x-1,start.y);                                    Point point_right(start.x+1,start.y);
                                                Point point_down_(start.x,start.y+1);

            if(point_up___==around)
                return up;
            if(point_down_==around)
                return down;
            if(point_left_==around)
                return left;
            //if(point_right==around)
            else
                return right;
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
    void change_wide(int wide_)
    {
        wide=wide_;
    }


    void creat_thread_to_run(HWND hwnd)
    {
        pthread_create(NULL,NULL,run,this);
    }
    static void *run(void *p)
    {
        top:
        while(!check_die())
        {
            if(!check_eat())//检查是否能吃食物
                move_step_snake();//移动
                
            print_map();//输出地图
            auto_mode();//自动模式
            //Sleep(10);
        }
        init();//如果死亡，则初始化从新开始
        goto top;
    }


};
int main()
{

    snake_map map(35,35,25);
    
    top:
    while(!map.check_die())
    {
        if(!map.check_eat())
            map.move_step_snake();
            
        //map.print_map_test();//显示数值
        //map.set_guide();

        map.print_map();
        map.auto_mode();
        //Sleep(10);
        //map.print_len();

    }
    
    map.init();
    goto top;

    getchar();
    return 0;
}
