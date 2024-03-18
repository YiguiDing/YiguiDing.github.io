const protocol= 'ws://';
// const hostname = "120.27.243.59";
const hostname = "127.0.0.1";
const port = 54321;

var wss=null;
var autoUpdataInterval=null;//自动更新排行榜数据定时器

function ConnectServer()//连接服务器
{
    console.log("与服务端建立连接......")
    if(wss!=null && wss.readyState==1)
    {
        console.log("已经与服务端建立过连接。");
        return;
    }
    wss = new WebSocket( protocol + hostname + ":" + port + "/");
    wss.onopen = function(evt) {  //绑定“连接事件”,与服务端建立连接后自动执行的函数
            
            console.log("与服务端的连接建立成功!");
            console.log("请求排行榜数据...");
            autoUpdata();
    };
    wss.onmessage = processReceivedMessage;//绑定"收到服务端消息事件"，收到服务端消息后执行的函数
    wss.onclose = function(evt) { //绑定“关闭或断开连接事件”
        console.log("与服务端的连接已断开!");
    };
}

//发送消息
function sendMessage(date)
{
    wss.send(date);
}

//关闭连接
function closeConnection()
{
    wss.close();
}

var LocalData=null;//记录从服务端获取的数据

function processReceivedMessage(MessageEvent)//对从服务端收到的数据进行处理
{
    console.log(MessageEvent.data.toString());
    var jsOBJ=JSON.parse(MessageEvent.data.toString());//将收到的数据转化成字典格式
    
    if(typeof jsOBJ[gameMode]=="object")//该对象存在则判定是排行榜数据
    {
        console.log("更新页面排行榜数据...");
        writeHistoryListToHtml(jsOBJ);
        LocalData=jsOBJ;//将数据记录到本地
    }
}
function writeHistoryListToHtml(jsOBJ)//将从服务端获取到的数据写入页面
{
    if(jsOBJ==null)
        return;
    var text_names=document.getElementsByClassName("list_text_name");
    for(var i=0;i<text_names.length;i++)
    {
        text_names[i].innerHTML=jsOBJ[gameMode][i]["name"];
    }
    var text_score=document.getElementsByClassName("list_text_score");
    for(var i=0;i<text_score.length;i++)
    {
        text_score[i].innerHTML=jsOBJ[gameMode][i]["score"];
    }
}
// 与服务端建立连接后 服务端会发送排行榜数据，不必请求了
// function getHistoryList()//向服务端发送获取排行榜数据请求 
// {
//     //javaScript对象 -> JSON.stringify -> 字符串 -> data[Buffer] -> toString()字符串 -> JSON.parse() -> javaScript对象
//     // ConnectServer();//与服务器建立连接
//     var request={//构建请求数据格式
//         requestType:"请求排行榜数据",
//         data:{
            
//         }
//     };
//     var String=JSON.stringify(request);//将JavaScript对象转换成json格式字符串
//     console.log(String);
//     sendMessage(String);
//     // closeConnection();
// }

// 服务端数据更新时会自动广播给客户端 所以不必反复向服务端发送请求
// function autoUpdata()//自动更新 
// {
//     getHistoryList();//先立即更新一次（立即向服务端发送数据）
//     if(autoUpdataInterval)//然后重新设置定时器
//         clearInterval(autoUpdataInterval);
//     autoUpdataInterval=setInterval(
//         function()
//         {
//             getHistoryList();
//         },
//         30000//30秒自动更新一次
//     );
// }

function addUserScoreToSever(gameMode,playerName,score)//将用户得分添加到服务器记录
{
    var date={
        requestType:"请求记录玩家得分",
        data:{
            mode:gameMode,
            addData:{
                name:playerName,
                score:score
            }
        }
    }
    wss.send(JSON.stringify(date));//发送数据
}
function check_Score_obove_HistoryListScore(score)//检查当前用户得分是否能上榜
{
    var list_text_scores=document.getElementsByClassName("list_text_score");
    for(var i=0;i<list_text_scores.length;i++)
    {
        var listScore=list_text_scores[i].innerHTML;
        if(listScore !="" && listScore<score)//如够当前得分比排行榜上某一得分高
        {
            return true;
        }
    }
    return false;
}