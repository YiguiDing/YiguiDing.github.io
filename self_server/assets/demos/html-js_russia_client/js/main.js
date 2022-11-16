
//定义变量
const STEP_LEN=40;//单个方块的宽
const STEP_NEXT_LEN=25;//预览界面下一个方块的宽
const MAX_COL=10;//边界宽
const MAX_ROW=20;//边界高
const JD_MODE="经典模式",JS_MODE="加速模式",XS_MODE="限时模式",KN_MODE="困难模式";
var game_is_ruing=true;//游戏暂停
var game_is_over=false;//游戏结束
var gameMode=JD_MODE;//默认经典模式
var score=0,temp_score=0,history_score=0;//得分
var timeMs=0;//剩余时间毫秒
var autoDownMs=500;//毫秒
var reSetAutoDownInterval=0;//重设"自动下落定时器"的定时器
var upTheLastLineInterval=0;//使最后一行上涨的定时器
var timeDecreaseInterval=0;//使时间减少的定时器
var autoDownInterval=0;//自动下落定时器
var fastDownInterval=0;//快速下降方块的定时器
var fastLeftInterval=0;//快速左移方块的定时器
var fastRighInterval=0;//快速右移方块的定时器

//音效
const collision_audio = document.createElement("audio");//方块下落后的音效
collision_audio.src="/audio/collision.mp3";
collision_audio.load();//加载资源


const clear_audio = document.createElement("audio");//清除方块时的音效
clear_audio.src="/audio/clear.mp3";
clear_audio.load();//加载资源

const around_audio = document.createElement("audio");//旋转移动音效
around_audio.src="/audio/around.mp3";
around_audio.load();//加载资源

const moveRL_audio = around_audio;//左右移动音效

const moveDown_audio = around_audio;//下移音效



var PATTERN=[
    {                   // 正L形状
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:1,col:2},// |   | X | X |   |            // 1,1  // 1,2
        2:{row:2,col:1},// |   | X |   |   |            // 2,1  
        3:{row:3,col:1},// |   | X |   |   |            // 3,1
    },
    {                   // 反L形状
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:1,col:2},// |   | X | X |   |     // 1,1 // 1,2
        2:{row:2,col:2},// |   |   | X |   |            // 2,2
        3:{row:3,col:2},// |   |   | X |   |            // 3,2
    },
    {                   // I形状
        0:{row:0,col:1},// |   | X |   |   |            // 0,1
        1:{row:1,col:1},// |   | X |   |   |            // 1,1
        2:{row:2,col:1},// |   | X |   |   |            // 2,1
        3:{row:3,col:1},// |   | X |   |   |            // 3,1
    },
    {                   // I形状//为提高被随机到的概论
        0:{row:0,col:1},// |   | X |   |   |            // 0,1
        1:{row:1,col:1},// |   | X |   |   |            // 1,1
        2:{row:2,col:1},// |   | X |   |   |            // 2,1
        3:{row:3,col:1},// |   | X |   |   |            // 3,1
    },
    {                   // 土形状
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:2,col:1},// |   | X |   |   |            // 1,1
        2:{row:2,col:0},// | X | X | X |   |    // 2,0  // 2,1  // 2,2         
        3:{row:2,col:2},// |   |   |   |   |    
    },
    {                   // 土形状
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:2,col:1},// |   | X |   |   |            // 1,1
        2:{row:2,col:0},// | X | X | X |   |    // 2,0  // 2,1  // 2,2         
        3:{row:2,col:2},// |   |   |   |   |    
    },
    {                   
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:1,col:2},// |   | X | X |   |            //1,1   //1,2 
        2:{row:2,col:1},// | X | X |   |   |    //2,0   //2,1       
        3:{row:2,col:0},// |   |   |   |   |    
    },
    {                   
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:1,col:2},// |   | X | X |   |    // 1,1  // 1,2            
        2:{row:2,col:2},// |   |   | X | X |            // 2,2  // 2,3
        3:{row:2,col:3},// |   |   |   |   |
    },
    {                    
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:1,col:2},// |   | X | X |   |    // 1,1  // 1,2       
        2:{row:2,col:1},// |   | X | X |   |    // 2,1  // 2,2
        3:{row:2,col:2},// |   |   |   |   |    
    },
    {                    
        0:{row:1,col:1},// |   |   |   |   |            
        1:{row:1,col:2},// |   | X | X |   |    // 1,1  // 1,2       
        2:{row:2,col:1},// |   | X | X |   |    // 2,1  // 2,2
        3:{row:2,col:2},// |   |   |   |   |    
    },
];

var nextTimes_pattern;
var current_pattern;

var pattern_X=0,pattern_Y=0;
//初始化
function init_game()
{
    //console.log("init_game函数被调用");
    //先清除定时器再清除背景容器
    clearInterval(timeDecreaseInterval);
    clearInterval(reSetAutoDownInterval);
    clearInterval(upTheLastLineInterval);
    clearInterval(autoDownInterval);
    clearInterval(fastDownInterval);
    clearInterval(fastLeftInterval);
    clearInterval(fastRighInterval);
    game_is_ruing=true;
    game_is_over=false;
    // gameMode=JD_MODE;//默认经典模式 每次初始化不重设
    score=0,temp_score=0,//得分
    timeMs=0;//剩余时间毫秒
    autoDownMs=500;//毫秒

    //清空背景容器
    var background = document.getElementsByClassName("background")[0];//背景容器
    background.innerHTML=null;

    //更新历史得分
    if(score>history_score)
    {
        history_score=score;
    }
    //更新html数据
    document.getElementsByClassName("text_history_score_lable")[0].innerHTML="最高得分：";
    document.getElementsByClassName("text_history_score")[0].innerHTML=history_score;

    //清空当前得分
    score=0;
    var text_score=document.getElementsByClassName("text_score")[0];
    text_score.innerHTML=score.toString();
    //判断页面是否需要按钮
    if(!isPc())//如果不是PC端则则需要按钮
    {   //显示按钮
        document.getElementsByClassName("game_button")[0].style.display="";

    }
    active_button(gameMode);//更新按钮按下状态
    //计算并设置浏览器缩放
    reSizeHtml();
    //监听按键事件
    listen_keys();
    //创建模型
    creat_pattern();
    //自动下落
    autoDown(autoDownMs);

    ConnectServer();//连接服务器

}
function listen_keys()
{
    var Left=37,Up=38,Right=39;Down=40,Spase=32;
    document.onkeydown = function(event){   //onkeypress按下松开、onkeyup松开、onkeydown按下
        // console.log(event.keyCode);
        //console.log(document.onkeydown);
        switch(event.keyCode)
        {
            case Left:
                console.log("Left");
                //move_cell(0,-1);
                // move_pattern(0,-1);
                fast_left();
                break;
            case Right:
                console.log("Right");
                //move_cell(0,1);
                // move_pattern(0,1);
                fast_right();
                break;
            case Down:
                console.log("Down");
                //move_cell(1,0);
                // move_pattern(1,0);
                fast_down();
                break;
            case Up:
                console.log("Up");
                //move_cell(-1,0);
                //move_pattern(-1,0);
                turn_around();
                break;
            case Spase:
                // stop_or_run_game();
                break;
        }


    }
    document.onkeyup = function(event){

        switch(event.keyCode)
        {
            case Left:
                console.log("Left");
                stop_fast_left();
                break;
            case Right:
                console.log("Right");
                stop_fast_right();
                break;
            case Down:
                console.log("Down");
                stop_fast_down();
                break;
            case Up:
                console.log("Up");
                //
                break;
        }


    }
}
function move_cell(toDown,toLeft)
{
    var cell = document.getElementsByClassName("cell")[0];
    cell.style.top = parseInt(cell.style.top||0,10) + toDown * STEP_LEN + 'px';
    cell.style.left = parseInt(cell.style.left||0,10) + toLeft * STEP_LEN + 'px';

    //没有top属性时，document.getElementsByClassName("cell")[0].style.top 的值为 ''

    //1.在js中0、''、null、false、undefined、NaN的布尔值是false       所以''为false
    //2.||或运算在第一个表达式为真时不处理第二个，第一个为假时处理第二个 所以''||0 的值为0 '5px'|0的值为'5px'
    //3.在js做比较的时候，有这样的三条规则：
        //1.两布尔值比较，先转化成对应的数值
        //2.数值和字符串比较，字符串转换成数值
        //3.字符串转换成布尔值,空字符为false 其余为true 
        //所以在'2px'||0 表达式中 由于字符串无法转换成数字，只要字符串不是''结果就是这个字符串本身，当字符串为'',则结果为后面的表达式
}
function move_pattern(toDown,toLeft)
{
    //移动前检测
    while(temp_score=check_and_clear_full_line())//查找铺满的行并清除该行、下沉其上方块
    {
        
        setTimeout(play_audio(clear_audio),500);//500ms后发出声音
        score+=temp_score*10;
        console.log("当前得分: "+score);

        var text_score=document.getElementsByClassName("text_score")[0];
        text_score.innerHTML=score.toString();

    }
    if(check_gameOver()||game_is_over)//检测游戏是否结束
    {
        console.log("游戏结束。");
        stop_or_run_game();//暂停方块下落
        alert("游戏结束。\n你的得分是: " + score);
        if(score>history_score)//0分不提示
        {
            history_score=score;
            var text_history_score=document.getElementsByClassName("text_history_score")[0];
            text_history_score.innerHTML=history_score.toString();
        }

        if(check_Score_obove_HistoryListScore(score))
        {
            var playerName=prompt("打破服务端历史记录,留个名吧~");
            if(playerName!=null)
            {
                while(playerName==null||playerName==""||playerName.length>10||haveSensitiveWord(playerName)||haveNumber(playerName))//检测是否空是否过长是否有敏感关键字是否有数字
                {
                    if(playerName==null)
                        break;
                    if(playerName=="")
                        playerName=prompt("名字不能为空哦~");
                    else if(playerName.length>10)
                    {
                        playerName=prompt("名字太长了！！！");
                    }
                    else if(haveSensitiveWord(playerName))
                    {
                        playerName=prompt("??? 好好说话");
                    }else if(haveNumber(playerName))
                    {
                        playerName=prompt("不能包含数字,请重新输入");
                    }
                    else
                    {
                        playerName=prompt("请重新输入");
                    }
                }
            }
            if(playerName!=null)
            {
                addUserScoreToSever(gameMode,playerName,score);//向服务端请求记录数据
                alert("你的得分已经被提交到服务器了~");
            }else
            {
                alert("已取消提交得分");
            }
            
        }
        // init_game();//初始化到默认游戏模式
        change_mode(gameMode);//初始化到当前游戏模式
        return;
    }
    //移动方块
    var cells = document.getElementsByClassName("cell");
    for(var i=0;i < cells.length;i++)
    {
        cells[i].style.top  = parseInt(cells[i].style.top ||0,10) + toDown * STEP_LEN + 'px';
        cells[i].style.left = parseInt(cells[i].style.left||0,10) + toLeft * STEP_LEN + 'px';
    }

    if(check_onFloor()||check_collision())//检测方块是否底部越界,或两方块碰撞重合。此时撤销移动方块操作(在原先的位置重新绘制)，
    {
        console.log("移动越界，恢复原位......");
        //重新绘制
        var cells = document.getElementsByClassName("cell");
        for(var i=0;i < cells.length;i++)
        {
            cells[i].style.top  = parseInt(cells[i].style.top ||0,10) - toDown * STEP_LEN + 'px';
            cells[i].style.left = parseInt(cells[i].style.left||0,10) - toLeft * STEP_LEN + 'px';
        }
        console.log("已恢复原位。");

        if(toLeft!=0)//左右移动只需要恢复位置，不需要冻结
            return;
        frozen();//冻结
        creat_pattern();//重新创建pattern

        return;
    }

    if(check_out())//如果有方块越界,或有方块左右重合碰撞
    {
        console.log("移动越界，恢复原位......");
        //重新绘制
        var cells = document.getElementsByClassName("cell");
        for(var i=0;i < cells.length;i++)
        {
            cells[i].style.top  = parseInt(cells[i].style.top ||0,10) - toDown * STEP_LEN + 'px';
            cells[i].style.left = parseInt(cells[i].style.left||0,10) - toLeft * STEP_LEN + 'px';
        }

        console.log("已恢复原位。");
        return;
    }
    pattern_X += toLeft;//没有方块越界，保存本次对pattern位置的修改
    pattern_Y += toDown;
    console.log("模型移动成功。");
}

function check_out()//根据绘制出的结果来计算是否有方块越界
{
    var cells = document.getElementsByClassName("cell");
    for(var i = 0 ;i < cells.length ; i++)
    {
        var cell_top =   parseInt(cells[i].style.top   ||0,10);
        var cell_left=   parseInt(cells[i].style.left  ||0,10);
        //if( cell_top < 0 || (MAX_ROW-1)*STEP_LEN < cell_top )//检测是否上下越界 ,因为要将方块初始化在边界外面，所以不检测上方越界
        if( (MAX_ROW-1)*STEP_LEN < cell_top )//检测是否下越界
        {
            //console.log("某方块上下越界。");
            console.log("某方块下越界。");
            return true;
        }
        if( cell_left < 0 || (MAX_COL-1)*STEP_LEN < cell_left )
        {
            console.log("某方块左右越界。");
            return true;
        }
    }
    return false;
}
function random_Int(number_a,to_b)//随机数，a~b 包括a和b
{
    return number_a + parseInt(Math.random()*100000000) % (to_b-number_a+1)  ;
}
function creat_pattern()
{
    pattern_X=3;
    pattern_Y=-4;
    // console.log(Math.random());
    // console.log(Math.random()*1000000);
    // console.log(parseInt(Math.random()*1000000));
    // console.log(PATTERN.length);
    // console.log(parseInt(Math.random()*1000000)%PATTERN.length);
    // console.log(random_Int(5,7));

    if(!nextTimes_pattern)//如果为空
    {
        set_nextTimes_pattern();
        draw_next_pattern();
    }
    current_pattern=nextTimes_pattern;//将上一次创建的Pattern的设置为当前的
    set_nextTimes_pattern();
    draw_next_pattern();
    //current_pattern=PATTERN[2];
    //生成元素
    var background = document.getElementsByClassName("background")[0];//背景
    for(cell_key in current_pattern)//遍历pattern中的元素
    {
        var newDiv = document.createElement("div");//创建div
        newDiv.className    =  "cell";//为其指定class类名
        newDiv.style.top    =  (pattern_Y+current_pattern[cell_key]["row"]) * STEP_LEN + 'px';//设置相对位置
        newDiv.style.left   =  (pattern_X+current_pattern[cell_key]["col"]) * STEP_LEN + 'px';
        background.appendChild(newDiv);//附加为background的子元素
    }
}

function turn_around()
{
    var temp_pattern=deepClone(current_pattern);//深拷贝出一个临时变量
    var old_pattern=deepClone(current_pattern);//深拷贝出一个备用变量
    //根据旧的坐标值计算旋转后的新的坐标值
    for(cell_key in current_pattern)//遍历 
    {
        temp_pattern[cell_key]['row']=current_pattern[cell_key]['col'];
        temp_pattern[cell_key]['col']=3-current_pattern[cell_key]['row'];
    }
    current_pattern=deepClone(temp_pattern);//将计算出的值拷贝回去
    //根据新的pattern更新每个cell的位置
    var cells = document.getElementsByClassName("cell");
    for(var i=0;i < cells.length;i++)
    {
        cells[i].style.top  = (pattern_Y+current_pattern[i]["row"]) * STEP_LEN + 'px';//设置相对位置
        cells[i].style.left = (pattern_X+current_pattern[i]["col"]) * STEP_LEN + 'px';
    }
    if(check_out()||check_collision())//如果有方块越界或方块碰撞
    {
        console.log("旋转越界，恢复原位......");
        current_pattern=deepClone(old_pattern);//恢复原本的pattern
        //根据新的pattern更新每个cell的位置
        var cells = document.getElementsByClassName("cell");
        for(var i=0;i < cells.length;i++)
        {
            cells[i].style.top  = (pattern_Y+current_pattern[i]["row"]) * STEP_LEN + 'px';//设置相对位置
            cells[i].style.left = (pattern_X+current_pattern[i]["col"]) * STEP_LEN + 'px';
        }
        console.log("已恢复原位。");
        return;
    }
    // play_audio(around_audio);
}
function deepClone(obj) {//通过js的内置对象JSON来进行数组对象的深拷贝
    var _obj = JSON.stringify(obj),
      objClone = JSON.parse(_obj);
    return objClone;
}

function check_collision()//方块间重合视为碰撞
{
    var cells = document.getElementsByClassName("cell");
    var frozen_cells = document.getElementsByClassName("frozen_cell");

    for(var i = 0 ;i < cells.length ; i++)
    {
        for(var j = 0 ;j < frozen_cells.length ; j++)
        {   //如果两方快上下左右重合，则视为两方块碰撞。
            if( cells[i].style.top == frozen_cells[j].style.top && cells[i].style.left == frozen_cells[j].style.left)
                return true;
        }
    }
    return false;
}

function check_onFloor()//检测是否到底
{
    var cells = document.getElementsByClassName("cell");
    for(var i = 0 ;i < cells.length ; i++)
    {
        var cell_top =   parseInt(cells[i].style.top   ||0,10);
        if( (MAX_ROW-1)*STEP_LEN < cell_top )
        {
            console.log("某方块上下越界。");
            return true;
        }
    }
    return false;
}

function frozen()//冻结到底的方块和碰撞的方块
{
    play_audio(collision_audio);//播放方块落地音效
    var cells = document.getElementsByClassName("cell");
    for(var i = cells.length-1 ; i >= 0  ; i--)
    {
        cells[i].className = "frozen_cell";
    }
}
function check_and_clear_full_line()//查找铺满的行并清除该行、下沉其上方块
{   
    //算法需要双层嵌套循环，外出遍历行，内层遍历方块，并对当前遍历行有多少个方块计数，检测到铺满就删除这一行
    var clear_count=0;//用于计算得分
    var frozen_cells = document.getElementsByClassName("frozen_cell");
    for(var line_Number = MAX_ROW-1 ; line_Number >= 0  ; line_Number--)//遍历行号
    {
        var count=0;//对该行方块计数
        for(var i = 0 ; i < frozen_cells.length  ; i++)//遍历所有对象
        {
            if(  parseInt(frozen_cells[i].style.top ||0,10) == line_Number*STEP_LEN)//如果该方块在某一行
                count++;
            if(count == MAX_COL)//该行方块个数为MAX_COL代表铺满
            {
                clear_line(line_Number);//清除该行并下沉其上的行
                clear_count++;
            }
        }
    }
    return clear_count;
}
function clear_line(line_Number)//清除某一行方块，并将改行之上的方块删除
{   
    var background = document.getElementsByClassName("background")[0];//背景容器
    var frozen_cells = document.getElementsByClassName("frozen_cell");
    for(var i = frozen_cells.length-1 ; i >= 0  ; i--)
    {//遍历所有方块
        //如果该方块在该行，删除
        if( ( parseInt(frozen_cells[i].style.top ||0,10)) == line_Number*STEP_LEN)//if（800px==800px）
            background.removeChild(frozen_cells[i]);
        //如果该方块在该行之上，下沉
        else if( ( parseInt(frozen_cells[i].style.top ||0,10)) < line_Number*STEP_LEN)
        {
            frozen_cells[i].style.top  = parseInt(frozen_cells[i].style.top||0,10)+ STEP_LEN + 'px';
        }//剩余的不用保持
    }
}
function check_gameOver()//就是检测被固定的方块frozen_cells有没有上越界
{
    var frozen_cells = document.getElementsByClassName("frozen_cell");
    for(var i = 0 ;i < frozen_cells.length ; i++)
    {
        var cell_top =   parseInt(frozen_cells[i].style.top   ||0,10);
        if( cell_top <= 0 )//检测是否上下越界 
        {
            console.log("某方块上越界。");
            return true;
        }
    }
    return false;
}
function autoDown(ms)
{
    if(autoDownInterval)
        clearInterval(autoDownInterval);
    autoDownInterval=setInterval(
        function()
        {
            // play_audio(moveDown_audio);
            move_pattern(1,0);
        },
        ms
    );
}
function draw_next_pattern()
{
    var next_continer = document.getElementsByClassName("next_continer")[0];//背景容器 
    next_continer.innerHTML=null;
    for(cell_key in nextTimes_pattern)//遍历pattern中的元素
    {
        var newDiv = document.createElement("div");//创建div
        newDiv.className    =  "cell_next";//为其指定class类名
        newDiv.style.top    =  (nextTimes_pattern[cell_key]["row"]) * STEP_NEXT_LEN + 'px';//设置相对位置
        newDiv.style.left   =  (nextTimes_pattern[cell_key]["col"]) * STEP_NEXT_LEN + 'px';
        next_continer.appendChild(newDiv);//附加为next的子元素
    }
}
function set_nextTimes_pattern(pattern)
{
    nextTimes_pattern=PATTERN[random_Int(0,PATTERN.length-1)];//随机选一个模板

    var times=random_Int(0,4);//生成0~4的随机数
    while(times--)//每个循环会把nextTimes_pattern内的模板顺时针旋转一次
    {
        var temp_pattern=deepClone(nextTimes_pattern);//深拷贝出一个临时变量
        //根据旧的坐标值计算旋转后的新的坐标值
        for(cell_key in nextTimes_pattern)//遍历 
        {
            temp_pattern[cell_key]['row']=nextTimes_pattern[cell_key]['col'];
            temp_pattern[cell_key]['col']=3-nextTimes_pattern[cell_key]['row'];
        }
        nextTimes_pattern=deepClone(temp_pattern);//将计算出的值拷贝回去
    }
}
//判断是手机端还是pc端
function isPc(){
    console.log(window.navigator.userAgent);
    //对请求头的内容用正则表达式匹配
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
    {
      return false; // 移动端
    }else
    {
      return true; // PC端
    }
}

function reSizeHtml()//按按游戏界面宽高缩放浏览器
{   //假如浏览器窗口高为1000px，网页body500px,则如需按照页面高度铺满页面就要将页面缩放1000÷500=2倍

    document.body.style.zoom=1;//页面缩放比例置1

    var gameHeight=document.body.clientHeight;//界面高
        if(!isPc()) gameHeight+=document.getElementById("id_game_button").clientHeight; //如不是pc 界面的body的高度需加上按钮的高度
    var gameWidth =document.getElementsByClassName("game")[0].offsetWidth;//界面宽

    var browerHeight=window.innerHeight;//浏览器宽
    var browerWidth =window.innerWidth;//浏览器高

    var full_height_rate=browerHeight/gameHeight;//按高度填满浏览器所需缩放比例
    var full_width_rate =browerWidth/gameWidth; //按宽度填满浏览器所需缩放比例

    console.log("游戏界面的高px:" + gameHeight);
    console.log("游戏界面的宽px:" + gameWidth);

    console.log("浏览器窗口的高px:" + browerHeight);
    console.log("浏览器窗口的宽px:" + browerWidth);

    console.log("按高度填满浏览器所需缩放比例:"+ full_height_rate);
    console.log("按宽度填满浏览器所需缩放比例:" + full_width_rate);

    if(full_height_rate>0||full_width_rate>0)
        //放大时优先选择缩放比例小的。（防止过大的缩放比例导致行或宽的内容无法在一个页面呈现）
        document.body.style.zoom=full_height_rate<full_width_rate? full_height_rate:full_width_rate;
    else//缩小时优先选择缩放比例大的。（防止过小的缩放比例导致页面内容太小看不清）
        document.body.style.zoom=full_height_rate>full_width_rate? full_height_rate:full_width_rate;

}
function down_step()
{
    var toDown=1,toLeft=0;
    //移动方块
    var cells = document.getElementsByClassName("cell");
    for(var i=0;i < cells.length;i++)
    {
        cells[i].style.top  = parseInt(cells[i].style.top ||0,10) + toDown * STEP_LEN + 'px';
        cells[i].style.left = parseInt(cells[i].style.left||0,10) + toLeft * STEP_LEN + 'px';
    }

    if(check_onFloor()||check_collision())//检测方块是否底部越界,或两方块碰撞重合。此时撤销移动方块操作(在原先的位置重新绘制)，
    {
        console.log("移动越界，恢复原位......");
        //重新绘制
        var cells = document.getElementsByClassName("cell");
        for(var i=0;i < cells.length;i++)
        {
            cells[i].style.top  = parseInt(cells[i].style.top ||0,10) - toDown * STEP_LEN + 'px';
            cells[i].style.left = parseInt(cells[i].style.left||0,10) - toLeft * STEP_LEN + 'px';
        }
        console.log("已恢复原位。");

        if(toLeft!=0)//左右移动只需要恢复位置，不需要冻结
            return false;
        frozen();//冻结上下移动的方块
        creat_pattern();//重新创建pattern
        stop_fast_down();//到达底部的时候清空快速降落定时器
        return true;
    }
    pattern_X += toLeft;//没有方块越界，保存本次对pattern位置的修改
    pattern_Y += toDown;
    console.log("模型移动成功。");
    return false;//返回是否到底
}
function directly_down()//直接让方块落地
{
    while(!down_step());
}
function fast_down()//加速下落
{
    if(!fastDownInterval)
    {
        clearInterval(fastDownInterval);
        fastDownInterval=setInterval(function(){
            // play_audio(moveDown_audio);
            down_step();
        },20);
    }
}
function stop_fast_down()
{
    clearInterval(fastDownInterval);
    fastDownInterval=null;
}
function fast_left()
{
    if(!fastLeftInterval)
    {
        move_pattern(0,-1);
        // play_audio(moveRL_audio);
        clearInterval(fastLeftInterval);
        fastLeftInterval=setInterval(function(){
            move_pattern(0,-1);
            // play_audio(moveRL_audio);
        },150);
    }
}
function stop_fast_left()
{
    clearInterval(fastLeftInterval);
    fastLeftInterval=null;
}
function fast_right()
{
    if(!fastRighInterval)
    {
        move_pattern(0,1);
        // play_audio(moveRL_audio);
        clearInterval(fastRighInterval);
        fastRighInterval=setInterval(function(){
            move_pattern(0,1);
            // play_audio(moveRL_audio);
        },150);
    }
}
function stop_fast_right()
{
    clearInterval(fastRighInterval);
    fastRighInterval=null;
}
function stop_or_run_game()//暂停、运行状态切换
{
    if(game_is_ruing)
    {
        game_is_ruing=false;
        clearInterval(autoDownInterval);
    }else
    {
        game_is_ruing=true;
        autoDown(autoDownMs);
    }
}

function change_mode(MODE)
{
    // alert("测试"+MODE);
    if(MODE==JD_MODE)//经典
    {
        init_game();
    }else
    if(MODE==JS_MODE)//急速
    {
        init_game();
        reSetAutoDownInterval=setInterval(function()
        {
            var newIntervalMs=autoDownMs-score/5
            if(newIntervalMs>=50)//逐渐加快速度,最快50
            {
                autoDown(newIntervalMs);//重新设置移动速度
                console.log("新的自动下落速度:"+ (newIntervalMs));
            }
        },5000);//每隔5秒重新根据得分情况加速(重新设置自动下落间隔，定时器的定时器)
    }else
    if(MODE==XS_MODE)//
    {
        init_game();
        timeMs=1000*100;//100秒
        // writeTimeToHtml();
        timeDecreaseInterval=setInterval(() => {
            decreaseTimeMS(100);//减少时间
            writeTimeToHtml();//写入html
            if(timeMs<=0)//时间结束
            {
                game_is_over=true;//其他函数会检测这个变量判断是否应该结束执行后续操作
                clearInterval(timeDecreaseInterval);//结束自己
            }
            
        }, 100);

    }
    else
    if(MODE=KN_MODE)//困难模式
    {
        init_game();//设置一个每隔一定事件上涨一行的定时器
        upTheLastLineInterval=setInterval(function()
        {
            UpTheLastLine()
        },10000);//每隔10秒上涨一次
    }
    active_button(MODE)//更新按钮按下效果
    gameMode=MODE;//切换模式
    // autoUpdata();//获取服务端排行数据 //切换模式后需要将排行榜的数据更新为其他模式的数据,但不必向服务端请求,可新建变量存储本地数据
    writeHistoryListToHtml(LocalData);//用本地数据来更新
}
function UpTheLastLine()//上涨
{
    var background = document.getElementsByClassName("background")[0];//背景容器
    var frozen_cells = document.getElementsByClassName("frozen_cell");

    var temp=[];
    for(var i = 0 ; i < frozen_cells.length  ; i++)//遍历所有对象
    {
        if(parseInt(frozen_cells[i].style.top ||0,10) == (MAX_ROW-1)*STEP_LEN)//如果该方块在最后一行
        {
            temp.push({//记录该方块的坐标
                top:parseInt(frozen_cells[i].style.top ||0,10)+"px",
                left:parseInt(frozen_cells[i].style.left ||0,10)+"px"
            });
        }
        frozen_cells[i].style.top=parseInt(frozen_cells[i].style.top ||0,10) - STEP_LEN + "px";//移动
    }
    for(var i=0;i<temp.length;i++)
    {
        var newDiv = document.createElement("div");//创建div
        newDiv.className    =  "frozen_cell";//为其指定class类名
        newDiv.style.top    =  temp[i]["top"];//设置相对位置
        newDiv.style.left   =  temp[i]["left"]
        background.appendChild(newDiv);//附加为next的子元素
    }

}
function writeTimeToHtml()//将剩余时间(倒计时)写入HTML
{

    var text_history_score_lable=document.getElementsByClassName("text_history_score_lable");
    var text_history_score=document.getElementsByClassName("text_history_score");

    text_history_score_lable[0].innerHTML="剩余时间:";
    text_history_score[0].innerHTML=(timeMs/1000).toFixed(1);

}
function decreaseTimeMS(ms)//每次50ms
{

    timeMs-=ms;

}
function active_button(MODE)//根据当前游戏模式给button添加按下效果
{
    //移除其他按钮的按下效果
    var change_mode_buttons = document.getElementsByClassName("change_mode_button");
    for(var i=0;i<change_mode_buttons.length;i++)
    {
        change_mode_buttons[i].className ="change_mode_button";
        // change_mode_buttons[i].classList.replace ="is_active";
    }
    
    if(MODE==JD_MODE)//经典
    {//给按钮添加按下效果
        document.getElementById("modeToJD").className+=" is_active";
    }else
    if(MODE==JS_MODE)//急速
    {
        document.getElementById("modeToJS").className+=" is_active";
    }else
    if(MODE==XS_MODE)//限时模式
    {
        document.getElementById("modeToXS").className+=" is_active";
    }
    else
    if(MODE=KN_MODE)//困难模式
    {
        document.getElementById("modeToKN").className+=" is_active";
    }


    
}

function play_audio(audio) {
    // console.log("播放音频");
    audio.loop=false;
    audio.currentTime = 0;
    audio.play();
}

function redirect(str)
{
    location.assign(str);
}