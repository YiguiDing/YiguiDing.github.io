---
title: 使用原生js实现轮播图
date: 2022-07-06T05:55:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [轮播图,js,demo]
category: 笔记
---


# 使用原生js实现轮播图

## [-->最终效果<--](./demos/index.html)

## 实现的功能

- **自动切换** ，当切换到最后一张时，切换方式将由 从前往后 切换自动改为 从后往前 切换
- **自动暂停** ，当鼠标移动到banner图上时，暂停自动播放，鼠标离开时，恢复自动播放
- **手动切换** ，
  - 点击按钮`》`，实现切换到下一张，当切换到最后一张时，停止切换
  - 点击按钮`《`，实现切换到上一张，当切换到第前一张时，停止切换
  - 节流处理：频繁点击切换按钮时，仅允许切换一张，切换完毕后才允许切换下一张
- **任意切换** ，点击底部圆点时，切换到相对应的图片
- **PC端鼠标拖动切换**
  - 鼠标左右拖动图片，移动到一定的阈值后松开鼠标，
    - 允许鼠标移动到图片之外（通过嵌套，给document添加事件监听器和移除事件监听器实现）
    - 允许鼠标松开时在图片之外（通过嵌套，给document添加事件监听器和移除事件监听器实现）
  - 如达到指定阈值，且移动的方向有另一张图片，则切换到该图片
  - 如未达到指定阈值，或移动的方向没有图片，则恢复原位
- **移动端手指拖动切换**
  - 功能及判断逻辑如上

## 碰到的问题总结

### 问题1：`ul>li`一行排列的问题

- 在`.box>ul>li`的结构中，若想设置：
  - `.box`有宽高
  - `li`有宽高，一行排列
- 有两种解决方案
    1. 给`ul`设置一个很大的宽度，给li设置左浮动
        - 优点是`li`之间没有任何间距
        - 缺点是要设置宽度,如果设置的不好或`li`过多会造成`li`的换行排列
    1. 给ul设置`white-space:nowrap;`，给li设置行内块，
        - 优点是不用设置`ul`宽度
        - 缺点是`li`之间会有由源代码中换行符造成的间隔

### 问题2：确定下一个li的问题

- 在ul>li的结构中，需要确定下一次需要展示的li是谁，
- 同时需要考虑当展示最后一个li是，下一个待展示的li是谁

**我的解决方案**  
写一个函数，循环获取下一个子元素，  
如：若一个元素中有子元素1，2，3，4；  
则该函数每次调用将分别获取的元素为:1->2->3->4->3->2->1->2->3->4->3->2->1->2

```js
//循环获取下一个子元素
function getNextActivedElement(elementObj){//如有子元素1，2，3，4 则该该函数返回的是 1->2->3->4->3->2->1->2->3->4->3->2->1....
    if(!elementObj.activedLiIndex)//若activedLiIndex属性不存在则对其初始化
    {
        elementObj.activedLiIndex=0;//初始化索引为第一个元素
    }
    if(!elementObj.moveguide)//若moveguide属性不存在则对其初始化
    {
        elementObj.moveguide="forward";//初始化移动方向为向右
    }
    if(elementObj.moveguide=="forward")//移动方向是向前
    {
        if(elementObj.children[elementObj.activedLiIndex].nextElementSibling)//如果能够找到下一个元素
        {
            elementObj.activedLiIndex+=1;//索引定位到下一个
        }else{//如果找不到下一个元素
            elementObj.moveguide="backward";//设置移动方向为往前
            elementObj.activedLiIndex-=1;//索引定位到前一个
        }
    }else{//移动方向是向后
        if(elementObj.children[elementObj.activedLiIndex].previousElementSibling)//如果能够找到前一个元素
        {
            elementObj.activedLiIndex-=1;//索引定位到前一个
        }else{
            elementObj.moveguide="forward";//设置移动方向为往后
            elementObj.activedLiIndex+=1;//索引定位到下一个
        }
    }
    return elementObj.children[elementObj.activedLiIndex];
}
```

### 问题3：移动距离

在`.banner>ul>li`的结构中，移动的是`ul`，移动距离应该是`-li[index].offsetLeft`

### 问题4：无缝滚动的问题

- 当前由于实现思路的问题暂时没有做无缝滚动的效果
- 若要做无缝滚动效果，需要在最后一个li之后添加第一个li的拷贝，
- 如图，当做完动画3->1的切换后，直接设置ul的偏移为0，使得显示第一张图片

![](./images/js轮播图/2022-07-06-20-09-37.png)

### 问题4：节流阀

节流阀用于防止事件触发的过快，导致上一个事件还未处理完又去处理下一个事件

```
rightBtn.addEventListener("click",function(){
    if(!rightBtn.flag)//节流阀：防止频繁触发事件
    {
        rightBtn.flag=true;//打开节流阀
        if(!bannerUl.activedLiIndex)
        {   //第一次调用则初始化新属性
            bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
        }
        if(bannerUl.children[bannerUl.activedLiIndex].nextElementSibling)//如果该元素存在后一个兄弟元素
        {
            bannerUl.activedLiIndex+=1;//索引+1
            //根据Index值更新底部li
            updataBottomUl(bannerUl.activedLiIndex)
            //动画
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                //回调函数：
                rightBtn.flag=false;//关闭节流阀
            })
        }
    }
});
```

### 问题5：鼠标移入banner效果

- 鼠标移入banner则暂停自动播放  
- 鼠标离开banner则启动自动播放

**实现代码**

```js
//自动播放
var autoSwitch = null;
//开启自动播放
function startAutoSwitch(){
    stopAutoSwitch();//先清除定时器
    autoSwitch = setInterval(function(){
        //循环获取下一个li
        var nextLi = getNextActivedElement(bannerUl)
        //将ul移动，偏移量为li的负offset
        animate(bannerUl,-nextLi.offsetLeft)
        //更新底部Ul状态
        updataBottomUl(nextLi.dataset["index"])
    },5000);
}
//关闭自动播放
function stopAutoSwitch(){
    clearInterval(autoSwitch)
}
//运行自动播放
startAutoSwitch();
//鼠标移入banner则暂停自动播放
banner.addEventListener("mouseenter",function(){
    stopAutoSwitch();
})
//鼠标离开banner则启动自动播放
banner.addEventListener("mouseleave",function(){
    startAutoSwitch();
})
```

### 问题6：对前后切换轮播图功能的进一步封装

该部分功能在切换轮播图的按钮功能及拖动轮播图的功能中都有使用，所以对其进行了封装

**原代码**

```js
//鼠标点击事件
leftBtn.addEventListener("click",function(){
    if(!leftBtn.flag)//节流阀：防止频繁触发事件
    {
        leftBtn.flag=true;//打开节流阀
        if(!bannerUl.activedLiIndex)
        {   //第一次调用则初始化新属性
            bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
        }
        if(bannerUl.children[bannerUl.activedLiIndex].previousElementSibling)//如果该元素存在前一个兄弟元素
        {
            bannerUl.activedLiIndex-=1;//索引-1
            //根据Index值更新底部li
            updataBottomUl(bannerUl.activedLiIndex)
            //动画
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                //回调函数：
                leftBtn.flag=false;//关闭节流阀
            })
        }
    }
})
rightBtn.addEventListener("click",function(){
    if(!rightBtn.flag)//节流阀：防止频繁触发事件
    {
        rightBtn.flag=true;//打开节流阀
        if(!bannerUl.activedLiIndex)
        {   //第一次调用则初始化新属性
            bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
        }
        if(bannerUl.children[bannerUl.activedLiIndex].nextElementSibling)//如果该元素存在后一个兄弟元素
        {
            bannerUl.activedLiIndex+=1;//索引+1
            //根据Index值更新底部li
            updataBottomUl(bannerUl.activedLiIndex)
            //动画
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                //回调函数：
                rightBtn.flag=false;//关闭节流阀
            })
        }
    }
});
```

**封装后**

```js
//鼠标点击事件
leftBtn.addEventListener("click",function(){
    if(!leftBtn.flag)//节流阀：防止频繁触发事件
    {
        moveToPrevious(function(){
            // 根据Index值更新底部li
            updataBottomUl(bannerUl.activedLiIndex)
            //播放动画
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                //回调函数：
                rightBtn.flag=false;//关闭节流阀
            })
        });
    }
})
rightBtn.addEventListener("click",function(){
    if(!rightBtn.flag)//节流阀：防止频繁触发事件
    {
        rightBtn.flag=true;//打开节流阀
        moveToNext(function(){
            // 根据Index值更新底部li
            updataBottomUl(bannerUl.activedLiIndex)
            //播放动画
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                //回调函数：
                rightBtn.flag=false;//关闭节流阀
            })
        });
    }
});
function moveToNext(callback){//如果能获取到下一个兄弟元素则修改Index否则保持不变
    if(!bannerUl.activedLiIndex)
    {   //第一次调用则初始化新属性
        bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
    }
    if(bannerUl.children[bannerUl.activedLiIndex].nextElementSibling)//如果该元素存在后一个兄弟元素
    {
        bannerUl.activedLiIndex+=1;//索引+1
    }
    callback && callback();
}
function moveToPrevious(callback){//如果能获取到上一个兄弟元素则修改Index否则保持不变
    if(!bannerUl.activedLiIndex)
    {   //第一次调用则初始化新属性
        bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
    }
    if(bannerUl.children[bannerUl.activedLiIndex].previousElementSibling)//如果该元素存在后一个兄弟元素
    {
        bannerUl.activedLiIndex-=1;//索引-1
    }
    callback && callback();
}
```

### 问题7：鼠标拖动翻页功能实现

实现思路：

- 在鼠标点击时记录鼠标坐标`A`，同时记录轮播图在x轴的偏移offsetLeft(`C`)，
- 在鼠标移动时再记录坐标B，  
- 两个坐标差`(B-A)`就是轮播图需要在x轴上相对于原先位置C的偏移的距离，
- 于是`轮播图.Left = C + (B-A) + "px"`
- 鼠标弹起时，根据鼠标移动距离是否超过某阈值，最终决定是否移动

注意点：

- 鼠标按下时，记录相关坐标，同时添加下述两个监听器
- 鼠标移动，应当允许鼠标离开轮播图界面，所以该监听器应当添加给document
- 鼠标弹起，应当允许鼠标离开轮播图界面，所以该监听器应当添加给document
  - 鼠标弹起后，移除这两个监听器
- 上述两个添加给document的监听器应当在整个完整的效果结束时移除，否则在点击网页其他部分时，鼠标弹起是任然会触发该事件

**核心代码**

```js
// Pc端鼠标拖动banner>ul效果
bannerUl.addEventListener("mousedown",function(e){
    stopAutoSwitch();//暂停自动播放
    bannerUl.mosedownStartPos = e.clientX ;//鼠标按下时的坐标
    bannerUl.mosedownoffsetLeft = bannerUl.offsetLeft;//鼠标按下时，bannerUl的offsetleft
    document.addEventListener("mousemove",bannerUlMoveWithMouse)//添加事件监听鼠标移动，实现拖动效果
    document.addEventListener("mouseup",bannerUlMoveWithMouseToCorrectPos)//添加事件监听鼠标弹起，实现拖动归位效果
    function bannerUlMoveWithMouse(e){
        //鼠标移动的距离
        bannerUl.mosedownMoveGap = e.clientX  - bannerUl.mosedownStartPos; 
        // 新偏移 = 原偏移 + 鼠标移动距离
        bannerUl.style.left = bannerUl.mosedownoffsetLeft + bannerUl.mosedownMoveGap + "px"
    }
    function bannerUlMoveWithMouseToCorrectPos (e){//将ul移动到正确的位置上
        if(bannerUl.mosedownMoveGap>50)//当鼠标移动距离超过一个阈值
        {
            moveToPrevious(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                // 根据Index值更新底部li
                updataBottomUl(bannerUl.activedLiIndex)
                //播放动画
                animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
            });
        }
        else if(bannerUl.mosedownMoveGap<-50)//当鼠标移动距离超过一个阈值
        {
            moveToNext(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                // 根据Index值更新底部li
                updataBottomUl(bannerUl.activedLiIndex)
                //播放动画
                animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
            });
        }else//鼠标移动没有超过设定阈值
        {   //归位
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
        }
        document.removeEventListener("mousemove",bannerUlMoveWithMouse);//移除document的mousemove
        document.removeEventListener("mouseup",bannerUlMoveWithMouseToCorrectPos);//移除document的mouseup
        startAutoSwitch();//恢复自动播放
    }
})


```

### 移动端手指拖动bannerul效果

**相关事件**

- `touchstart` 手指按下
- `touchmove` 手指移动
- `touchend` 手指离开

**坐标获取**

- `event.targetTouches[0].pageX` 第一个手指的坐标

```js
// 移动端手指拖动bannerul效果
bannerUl.addEventListener("touchstart",function(e){
    stopAutoSwitch();//暂停自动播放
    bannerUl.fingerDownStartPos = e.targetTouches[0].pageX ;//手指按下时的坐标
    bannerUl.fingerDownoffsetLeft = bannerUl.offsetLeft;//手指按下时，bannerUl的offsetleft
    document.addEventListener("touchmove",bannerUlMoveWithFinger)//添加事件监听手指移动，实现拖动效果
    document.addEventListener("touchend",bannerUlMoveWithFingerToCorrectPos)//添加事件监听手指离开，实现拖动归位效果
    function bannerUlMoveWithFinger(e){
        //手指移动的距离
        bannerUl.fingerDownMoveGap = e.targetTouches[0].pageX  - bannerUl.fingerDownStartPos; 
        // 新偏移 = 原偏移 + 手指移动距离
        bannerUl.style.left = bannerUl.fingerDownoffsetLeft + bannerUl.fingerDownMoveGap + "px"
    }
    function bannerUlMoveWithFingerToCorrectPos(e){
        bannerUl.removeEventListener("touchmove",bannerUlMoveWithFinger);
        if(bannerUl.fingerDownMoveGap>50)//当手指移动距离超过一个阈值
        {
            moveToPrevious(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                // 根据Index值更新底部li
                updataBottomUl(bannerUl.activedLiIndex)
                //播放动画
                animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
            });
        }
        if(bannerUl.fingerDownMoveGap<-50)//当手指移动距离超过一个阈值
        {
            moveToNext(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                // 根据Index值更新底部li
                updataBottomUl(bannerUl.activedLiIndex)
                //播放动画
                animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
            });
        }else//手指移动没有超过设定阈值
        {   //归位
            animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
        }
        document.removeEventListener("touchmove",bannerUlMoveWithFinger);//移除document的mousemove
        document.removeEventListener("touchend",bannerUlMoveWithFingerToCorrectPos);//移除document的mouseup
        startAutoSwitch();//恢复自动播放
    }
})
```

## 完整代码

```html
<div class="banner">
    <ul>
        <li data-active="true" style="background-color: skyblue;">轮播图1<br>已实现同时允许pc端鼠标拖动和移动端触摸拖动切换</li>
        <li style="background-color: pink;">轮播图2<br>已实现同时允许pc端鼠标拖动和移动端触摸拖动切换</li>
        <li style="background-color: green;">轮播图3<br>已实现同时允许pc端鼠标拖动和移动端触摸拖动切换</li>
        <li style="background-color: yellowgreen;">轮播图4<br>已实现同时允许pc端鼠标拖动和移动端触摸拖动切换</li>
        <li style="background-color: gold;">轮播图5<br>已实现同时允许pc端鼠标拖动和移动端触摸拖动切换</li>
    </ul>
    <span class="left">《</span>
    <span class="right">》</span>
    <div class="bottom">
        <ul>
            <!--
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            -->
        </ul>
    </div>
</div>
<style>
    .banner *{
        margin: 0;
        padding: 0;
    }
    .banner *::before,
    .banner *::after{
        content: none !important;
    }
    .banner{
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 300px;
        background-color: gray;
        overflow: hidden;
    }
    .banner>ul{
        position: relative;
        top: 0;
        /* 去除ul默认的左40px的内边距padding */
        padding: 0;
        /* 去除ul默认的上下外边距16px */
        margin: 0;
        height: 100%;
        list-style: none;
        white-space:nowrap;
    }
    .banner>ul>li{
        position: relative;
        display: inline-block;
        height: 100%;
        width: 100%;
        background-color: pink;
        vertical-align: top;
        color: black;
    }
    .banner>.left,
    .banner>.right
    {
        position: absolute;
        display: inline-block;
        width: 25px;
        height: 25px;
        /* background-color: gainsboro; */
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        font-size: 15px;
        line-height: 25px;
        color: white;
    }
    .banner>.left{
        left: 0;
        top: 50%;
        transform: translate(0,-50%);
    }
    .banner>.right{
        right: 0;
        top: 50%;
        transform: translate(0,-50%);
    }
    .banner>.bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(0,-100%);
        width: 100%;
        height: 10px;
        /* background-color: white; */
        text-align: center;
    }
    .banner>.bottom>ul{
        display: inline-block;
        height: 10px;
        /* 去除ul默认的padding,margin */
        padding: 0;
        margin: 0;
        list-style: none;
        /* background-color: green; */
        /* 防止li按文字的baseline对齐 */
        vertical-align: top;
    }
    .banner>.bottom>ul>li{
        float: left;
        margin: 0 5px;
        height: 10px;
        width: 10px;
        background-color: rgb(195, 195, 195);
        border-radius: 50%;
        cursor: pointer;
    }
    .banner>.bottom>ul>li.active{
        background-color: white;
    }
</style>
<script>
    (function(){
        var banner = document.querySelector(".banner") 
        var bannerUl = document.querySelector(".banner>ul") 
        var bottomUl = document.querySelector(".banner>.bottom>ul") 
        var leftBtn = document.querySelector(".banner>.left") 
        var rightBtn = document.querySelector(".banner>.right") 
        //为bannerUl添加index属性
        for(var i=0;i<bannerUl.childElementCount;i++)
        {
            bannerUl.children[i].dataset["index"]=i;
        }
        // 为bottom>UL创建li
        for(var i=0;i<bannerUl.childElementCount;i++)
        {
            bottomUl.appendChild(document.createElement("li"))
        }
        // 为bottomU>li[0]添加active类名
        bottomUl.children[0].classList.add("active")
        // 为bottomU>li添加index属性
        for(var i=0;i<bottomUl.childElementCount;i++)
        {
            bottomUl.children[i].dataset["index"]=i;
        }
        //自动播放
        var autoSwitch = null;
        //开启自动播放
        function startAutoSwitch(){
            stopAutoSwitch();//先清除定时器
            autoSwitch = setInterval(function(){
                //循环获取下一个li
                var nextLi = getNextActivedElement(bannerUl)
                //将ul移动，偏移量为li的负offset
                animate(bannerUl,-nextLi.offsetLeft)
                //更新底部Ul状态
                updataBottomUl(nextLi.dataset["index"])
            },5000);
        }
        //关闭自动播放
        function stopAutoSwitch(){
            clearInterval(autoSwitch)
        }
        //运行自动播放
        startAutoSwitch();
        //鼠标移入banner则暂停自动播放
        banner.addEventListener("mouseenter",function(){
            stopAutoSwitch();
        })
        //鼠标离开banner则启动自动播放
        banner.addEventListener("mouseleave",function(){
            startAutoSwitch();
        })
        // Pc端鼠标拖动banner>ul效果
        bannerUl.addEventListener("mousedown",function(e){
            stopAutoSwitch();//暂停自动播放
            bannerUl.mosedownStartPos = e.clientX ;//鼠标按下时的坐标
            bannerUl.mosedownoffsetLeft = bannerUl.offsetLeft;//鼠标按下时，bannerUl的offsetleft
            document.addEventListener("mousemove",bannerUlMoveWithMouse)//添加事件监听鼠标移动，实现拖动效果
            document.addEventListener("mouseup",bannerUlMoveWithMouseToCorrectPos)//添加事件监听鼠标弹起，实现拖动归位效果
            function bannerUlMoveWithMouse(e){
                //鼠标移动的距离
                bannerUl.mosedownMoveGap = e.clientX  - bannerUl.mosedownStartPos; 
                // 新偏移 = 原偏移 + 鼠标移动距离
                bannerUl.style.left = bannerUl.mosedownoffsetLeft + bannerUl.mosedownMoveGap + "px"
            }
            function bannerUlMoveWithMouseToCorrectPos (e){//将ul移动到正确的位置上
                if(bannerUl.mosedownMoveGap>50)//当鼠标移动距离超过一个阈值
                {
                    moveToPrevious(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                        // 根据Index值更新底部li
                        updataBottomUl(bannerUl.activedLiIndex)
                        //播放动画
                        animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
                    });
                }
                else if(bannerUl.mosedownMoveGap<-50)//当鼠标移动距离超过一个阈值
                {
                    moveToNext(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                        // 根据Index值更新底部li
                        updataBottomUl(bannerUl.activedLiIndex)
                        //播放动画
                        animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
                    });
                }else//鼠标移动没有超过设定阈值
                {   //归位
                    animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
                }
                document.removeEventListener("mousemove",bannerUlMoveWithMouse);//移除document的mousemove
                document.removeEventListener("mouseup",bannerUlMoveWithMouseToCorrectPos);//移除document的mouseup
                startAutoSwitch();//恢复自动播放
            }
        })
        // 移动端手指拖动bannerul效果
        bannerUl.addEventListener("touchstart",function(e){
            stopAutoSwitch();//暂停自动播放
            bannerUl.fingerDownStartPos = e.targetTouches[0].pageX ;//手指按下时的坐标
            bannerUl.fingerDownoffsetLeft = bannerUl.offsetLeft;//手指按下时，bannerUl的offsetleft
            document.addEventListener("touchmove",bannerUlMoveWithFinger)//添加事件监听手指移动，实现拖动效果
            document.addEventListener("touchend",bannerUlMoveWithFingerToCorrectPos)//添加事件监听手指离开，实现拖动归位效果
            function bannerUlMoveWithFinger(e){
                //手指移动的距离
                bannerUl.fingerDownMoveGap = e.targetTouches[0].pageX  - bannerUl.fingerDownStartPos; 
                // 新偏移 = 原偏移 + 手指移动距离
                bannerUl.style.left = bannerUl.fingerDownoffsetLeft + bannerUl.fingerDownMoveGap + "px"
            }
            function bannerUlMoveWithFingerToCorrectPos(e){
                bannerUl.removeEventListener("touchmove",bannerUlMoveWithFinger);
                if(bannerUl.fingerDownMoveGap>50)//当手指移动距离超过一个阈值
                {
                    moveToPrevious(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                        // 根据Index值更新底部li
                        updataBottomUl(bannerUl.activedLiIndex)
                        //播放动画
                        animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
                    });
                }
                if(bannerUl.fingerDownMoveGap<-50)//当手指移动距离超过一个阈值
                {
                    moveToNext(function(){//如果能获取到下一个兄弟元素则修改activedLiIndex否则保持不变
                        // 根据Index值更新底部li
                        updataBottomUl(bannerUl.activedLiIndex)
                        //播放动画
                        animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
                    });
                }else//手指移动没有超过设定阈值
                {   //归位
                    animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft)
                }
                document.removeEventListener("touchmove",bannerUlMoveWithFinger);//移除document的mousemove
                document.removeEventListener("touchend",bannerUlMoveWithFingerToCorrectPos);//移除document的mouseup
                startAutoSwitch();//恢复自动播放
            }
        })
        //手指点击事件
        leftBtn.addEventListener("click",function(){
            if(!leftBtn.flag)//节流阀：防止频繁触发事件
            {
                leftBtn.flag=true;//打开节流阀
                moveToPrevious(function(){
                    // 根据Index值更新底部li
                    updataBottomUl(bannerUl.activedLiIndex)
                    //播放动画
                    animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                        //回调函数：
                        rightBtn.flag=false;//关闭节流阀
                    })
                });
            }
        })
        rightBtn.addEventListener("click",function(){
            if(!rightBtn.flag)//节流阀：防止频繁触发事件
            {
                rightBtn.flag=true;//打开节流阀
                moveToNext(function(){
                    // 根据Index值更新底部li
                    updataBottomUl(bannerUl.activedLiIndex)
                    //播放动画
                    animate(bannerUl,-bannerUl.children[bannerUl.activedLiIndex].offsetLeft,function(){
                        //回调函数：
                        rightBtn.flag=false;//关闭节流阀
                    })
                });
            }
        });
        function moveToNext(callback){//如果能获取到下一个兄弟元素则修改Index否则保持不变
            if(!bannerUl.activedLiIndex)
            {   //第一次调用则初始化新属性
                bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
            }
            if(bannerUl.children[bannerUl.activedLiIndex].nextElementSibling)//如果该元素存在后一个兄弟元素
            {
                bannerUl.activedLiIndex+=1;//索引+1
            }
            callback && callback();
        }
        function moveToPrevious(callback){//如果能获取到上一个兄弟元素则修改Index否则保持不变
            if(!bannerUl.activedLiIndex)
            {   //第一次调用则初始化新属性
                bannerUl.activedLiIndex=0;//初始化第一个激活元素为0
            }
            if(bannerUl.children[bannerUl.activedLiIndex].previousElementSibling)//如果该元素存在后一个兄弟元素
            {
                bannerUl.activedLiIndex-=1;//索引-1
            }
            callback && callback();
        }
        bottomUl.addEventListener("click",function(event){
            // 获取被点击li的index
            var index = event.target.dataset["index"]
            //修改索引
            bannerUl.activedLiIndex = parseInt(index)//此处需要注意数据类型
            console.log(bannerUl.activedLiIndex);
            //过渡动画
            animate(bannerUl,-bannerUl.children[index].offsetLeft)//动画
            //更新底部li
            updataBottomUl(index)
        })
        function updataBottomUl(index){//更新底部ul状态
            for(var i=0;i<bottomUl.childElementCount;i++)
            {
                bottomUl.children[i].classList.remove("active")
            }
            bottomUl.children[index].classList.add("active")
        }
        //动画函数
        function animate(elementObj, target, callback) {
            clearInterval(elementObj.timer)//clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
            elementObj.timer = setInterval(function () {//elementObj.timer可以避免反复申请内存
                if (elementObj.offsetLeft == target) {
                    clearInterval(elementObj.timer)
                    if (callback) {
                        callback();
                    }
                }
                var step = (target - elementObj.offsetLeft) / 10 //根据公式计算步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step)//如果步长是负数则向下取整，如果步长是正数则向上取整。
                elementObj.style.left = elementObj.offsetLeft + step + "px"
            }, 15)
        }
        //循环获取下一个子元素
        function getNextActivedElement(elementObj){//如有子元素1，2，3，4 则该该函数返回的是 1->2->3->4->3->2->1->2->3->4->3->2->1....
            if(!elementObj.activedLiIndex)//若activedLiIndex属性不存在则对其初始化
            {
                elementObj.activedLiIndex=0;//初始化索引为第一个元素
            }
            if(!elementObj.moveguide)//若moveguide属性不存在则对其初始化
            {
                elementObj.moveguide="forward";//初始化移动方向为向右
            }
            if(elementObj.moveguide=="forward")//移动方向是向前
            {   
                if(elementObj.children[elementObj.activedLiIndex].nextElementSibling)//如果能够找到下一个元素
                {
                    elementObj.activedLiIndex+=1;//索引定位到下一个
                }else{//如果找不到下一个元素
                    elementObj.moveguide="backward";//设置移动方向为往前
                    elementObj.activedLiIndex-=1;//索引定位到前一个
                }
            }else{//移动方向是向后
                if(elementObj.children[elementObj.activedLiIndex].previousElementSibling)//如果能够找到前一个元素
                {
                    elementObj.activedLiIndex-=1;//索引定位到前一个
                }else{
                    elementObj.moveguide="forward";//设置移动方向为往后
                    elementObj.activedLiIndex+=1;//索引定位到下一个
                }
            }
            return elementObj.children[elementObj.activedLiIndex];
        }
    })();
</script>
```
