---
title: js返回顶部
date: 2022-07-06T21:33:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [返回顶部,js]
# ---article: false---
category: 笔记
---


# js返回顶部

## 主要思路

- 需要有动态效果
- 需要重新封装animate动画函数
- `window.scroll(x,y)` 函数用于设置页面窗口滚动位置
- `window.pageYOffset` 窗口滚动内容的上边距

## 结束条件的问题

由于鼠标滚动的原因，`window.pageYOffset`是含小数部分的，且目标位置`target`是整数，计算的步长`step`也是取整数，  
这就导致`window.pageYOffset+step`永远也不会等于target
所以结束的判断条件只判断整数部分就好了：  

```js
if(parseInt(window.pageYOffset)==parseInt(targetY))
{

}
```

## 防止目标值过大的问题

如果body的高度只有1000px，而指定target到2000px，这是不可能实现的，这会导致页面滚动到底部，且无法拖动滚动条，所以需要计算出target的最大值，以对其进行限制

**相关属性**

- `window.innerHeight`表示窗口内容区域的高度，这是不包括边框、菜单栏的。
- `window.outerHeight`是窗口的整体高度，包括边框、菜单栏等。
- `document.body.offsetHeight` 可以获得页面的高度

所以，可以计算出当页面滚动条在底部时，pageYOffset的高度为：`document.body.offsetHeight-window.innerHeight`

## 保持X轴的滚动条位置不变

只需要把X偏移保持就好了

```js

window.scroll(window.pageXOffset, x的偏移 )

```

## 效果及源码

<button id="returnTop">动态返回顶部</button>
<button id="returnMiddle">动态返回中部</button>
<button id="returnBottom">动态返回底部</button>
<script>
    var returnTop = document.querySelector("#returnTop")
    var returnBottom = document.querySelector("#returnBottom")
    var returnMiddle = document.querySelector("#returnMiddle")
    returnTop.addEventListener("click", function () {
        //返回顶部
        animateWinScrollToY(0);
    })
    returnBottom.addEventListener("click", function () {
        //返回底部
        animateWinScrollToY(document.body.offsetHeight - window.innerHeight);
    })
    returnMiddle.addEventListener("click", function () {
        //返回中部
        animateWinScrollToY( (document.body.offsetHeight - window.innerHeight) /2);
    })
    function animateWinScrollToY(targetY, callback) {
        if (document.body.offsetHeight - window.innerHeight >= targetY) {//防止targetY过大导致死循环
            clearInterval(window.returnTopTimer)//防止被反复调用
            window.returnTopTimer = setInterval(function () {
                if (parseInt(window.pageYOffset) == parseInt(targetY))//因为滚动的距离存在小数，所以这里只判断整数部分是否接近就好了
                {
                    clearInterval(window.returnTopTimer);
                    callback && callback();
                    // console.log("到达目标位置");
                }
                else
                {
                    window.step = (targetY - window.pageYOffset) / 10 //根据公式计算步长
                    window.step = window.step <= 0 ? Math.floor(window.step) : Math.ceil(window.step); //上下取整，防止小数
                    window.scroll(window.pageXOffset, window.pageYOffset + window.step);
                }
            }, 15)
        }
    }
</script>

```html
<button id="returnTop">动态返回顶部</button>
<button id="returnMiddle">动态返回中部</button>
<button id="returnBottom">动态返回底部</button>
<script>
    var returnTop = document.querySelector("#returnTop")
    var returnBottom = document.querySelector("#returnBottom")
    var returnMiddle = document.querySelector("#returnMiddle")
    returnTop.addEventListener("click", function () {
        //返回顶部
        animateWinScrollToY(0);
    })
    returnBottom.addEventListener("click", function () {
        //返回底部
        animateWinScrollToY(document.body.offsetHeight - window.innerHeight);
    })
    returnMiddle.addEventListener("click", function () {
        //返回中部
        animateWinScrollToY( (document.body.offsetHeight - window.innerHeight) /2);
    })
    function animateWinScrollToY(targetY, callback) {
        if (document.body.offsetHeight - window.innerHeight >= targetY) {//防止targetY过大导致死循环
            clearInterval(window.returnTopTimer)//防止被反复调用
            window.returnTopTimer = setInterval(function () {
                if (parseInt(window.pageYOffset) == parseInt(targetY))//因为滚动的距离存在小数，所以这里只判断整数部分是否接近就好了
                {
                    clearInterval(window.returnTopTimer);
                    callback && callback();
                    // console.log("到达目标位置");
                }
                else
                {
                    window.step = (targetY - window.pageYOffset) / 10 //根据公式计算步长
                    window.step = window.step <= 0 ? Math.floor(window.step) : Math.ceil(window.step); //上下取整，防止小数
                    window.scroll(window.pageXOffset, window.pageYOffset + window.step);
                }
            }, 15)
        }
    }
</script>
```
