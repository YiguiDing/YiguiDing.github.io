---
title: js动画
date: 2022-07-06T01:07:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [动画,js]
# ---article: false---
category: 笔记
---


# js动画

## 动画实现原理

核心原理：通过定时器setinterval()不断移动盒子位置

- 利用offset获取当前位置
- 通过css定位设置新位置

```html
<div id="demoNOUH98u9"></div>
<style>
    #demoNOUH98u9{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
    var demoNOUH98u9 = document.querySelector("#demoNOUH98u9")
    var timer = setInterval(function(){
        if(demoNOUH98u9.offsetLeft>=200)
        {
            clearInterval(timer)
        }
        demoNOUH98u9.style.left = demoNOUH98u9.offsetLeft + 1 + "px"
    },50)
</script>
```

## 封装成函数

### 一般写法

```html
<div id="demoNOUH98123"></div>
<style>
    #demoNOUH98123{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
    var demoNOUH98123 = document.querySelector("#demoNOUH98123")
    function animate(elementObj,target){
        var timer = setInterval(function(){
        if(elementObj.offsetLeft>=target)
        {
            clearInterval(timer)
        }
        elementObj.style.left = elementObj.offsetLeft + 1 + "px"
    },50)
    }
    animate(demoNOUH98123,200)
</script>
```

### 优化写法

<button id="demoNOUHdwee">测试</button>
<div style="position:relative;height: 100px;">
    <div id="demoNOUH98456"></div>
</div>
<style>
    #demoNOUH98456{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
(function(){
    var demoNOUH98456 = document.querySelector("#demoNOUH98456")
    var demoNOUHdwee = document.querySelector("#demoNOUHdwee")
    function animate(elementObj,target){
        //clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
        clearInterval(elementObj.timer)
        //elementObj.timer可以避免反复申请内存
        elementObj.timer = setInterval(function(){
        if(elementObj.offsetLeft>=target)
        {
            clearInterval(elementObj.timer)
        }
        elementObj.style.left = elementObj.offsetLeft + 1 + "px"
    },15)
    }
    demoNOUHdwee.addEventListener("click",function(){
        animate(demoNOUH98456,200)
    })
})();
</script>

```html
<button id="demoNOUHdwee">测试</button>
<div style="position:relative;height: 100px;">
    <div id="demoNOUH98456"></div>
</div>
<style>
    #demoNOUH98456{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
(function(){
    var demoNOUH98456 = document.querySelector("#demoNOUH98456")
    var demoNOUHdwee = document.querySelector("#demoNOUHdwee")
    function animate(elementObj,target){
        //clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
        clearInterval(elementObj.timer)
        //elementObj.timer可以避免反复申请内存
        elementObj.timer = setInterval(function(){
        if(elementObj.offsetLeft>=target)
        {
            clearInterval(elementObj.timer)
        }
        elementObj.style.left = elementObj.offsetLeft + 1 + "px"
    },15)
    }
    demoNOUHdwee.addEventListener("click",function(){
        animate(demoNOUH98456,200)
    })
})();
</script>
```

## 缓动动画

- 原理：让盒子每次移动的距离慢慢变小，移动速度就会慢下来
- 公式：步长 =（目标值-当前值）/10
- 注意
  - 需要向上或向下取整，否则，根据公式，步长将会无限接近0，这就导致(当前值+步长)永远无法到达目标值
  - 如果步长是负数则应该向下取整，如果步长是正数则应该向上取整。
    - 如果步长是0.1，则应该向上取整，步长应为1
    - 如果步长是-0.1，则应该向下取整，步长应为-1
  - 若只需要单方向移动，判断条件写成这样是没问题的：
    - `elementObj.offsetLeft>=target` 左移
    - `elementObj.offsetLeft<=target` 右移
  - 若需要允许左右方向移动，判断条件应该写成：
    - `elementObj.offsetLeft==target`
    - 需要配合判断步长的正负性对其上下取整

**公式测试**

<button id="demoNOUHdw123we">测试</button>
<button id="demoNOUHddfwefe">复位</button>
<div style="position:relative;height: 100px;">
    <div id="demoNOUH9fe12we"></div>
</div>
<style>
    #demoNOUH9fe12we{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
    (function(){
        var demoNOUH9fe12we = document.querySelector("#demoNOUH9fe12we")
        var demoNOUHdw123we = document.querySelector("#demoNOUHdw123we")
        var demoNOUHddfwefe = document.querySelector("#demoNOUHddfwefe")
        function animate(elementObj, target) {
            //clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
            clearInterval(elementObj.timer)
            //elementObj.timer可以避免反复申请内存
            elementObj.timer = setInterval(function () {
                if (elementObj.offsetLeft == target) {
                    clearInterval(elementObj.timer)
                }
                //根据公式计算步长
                var step = (target - elementObj.offsetLeft) / 10
                //如果步长是负数则向下取整，如果步长是正数则向上取整。
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                elementObj.style.left = elementObj.offsetLeft + step + "px"
            }, 15)
        }
        demoNOUHdw123we.addEventListener("click", function () {
            animate(demoNOUH9fe12we, 200)
        })
        demoNOUHddfwefe.addEventListener("click", function () {
            animate(demoNOUH9fe12we, 0)
        })
    })();
</script>

```html
<button id="demoNOUHdw123we">测试</button>
<button id="demoNOUHddfwefe">复位</button>
<div style="position:relative;height: 100px;">
    <div id="demoNOUH9fe12we"></div>
</div>
<style>
    #demoNOUH9fe12we{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
    (function(){
        var demoNOUH9fe12we = document.querySelector("#demoNOUH9fe12we")
        var demoNOUHdw123we = document.querySelector("#demoNOUHdw123we")
        var demoNOUHddfwefe = document.querySelector("#demoNOUHddfwefe")
        function animate(elementObj, target) {
            //clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
            clearInterval(elementObj.timer)
            //elementObj.timer可以避免反复申请内存
            elementObj.timer = setInterval(function () {
                if (elementObj.offsetLeft == target) {
                    clearInterval(elementObj.timer)
                }
                //根据公式计算步长
                var step = (target - elementObj.offsetLeft) / 10
                //如果步长是负数则向下取整，如果步长是正数则向上取整。
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                elementObj.style.left = elementObj.offsetLeft + step + "px"
            }, 15)
        }
        demoNOUHdw123we.addEventListener("click", function () {
            animate(demoNOUH9fe12we, 200)
        })
        demoNOUHddfwefe.addEventListener("click", function () {
            animate(demoNOUH9fe12we, 0)
        })
    })();
</script>
```

## 缓动动画函数添加回调函数

### 回调函数

```js
function fuc(其他形式参数,callback){
    //do sthing...
    //判断是否传入了回调函数
    if(callback)
    {
        callback();
    }
}
fuc(其他实参,function(){
    //do sthing...
})
```

### 具体实现

<button id="demonvefoijgfwf">测试</button>
<button id="demofjewoifjw12">复位</button>
<div style="position:relative;height: 100px;">
    <div id="demofweijp090"></div>
</div>
<style>
    #demofweijp090 {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
    (function () {
        var demofweijp090 = document.querySelector("#demofweijp090")
        var demonvefoijgfwf = document.querySelector("#demonvefoijgfwf")
        var demofjewoifjw12 = document.querySelector("#demofjewoifjw12")
        function animate(elementObj, target, callback) {
            //clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
            clearInterval(elementObj.timer)
            //elementObj.timer可以避免反复申请内存
            elementObj.timer = setInterval(function () {
                if (elementObj.offsetLeft == target) {
                    clearInterval(elementObj.timer)
                    if (callback) {
                        callback();
                    }
                }
                //根据公式计算步长
                var step = (target - elementObj.offsetLeft) / 10
                //如果步长是负数则向下取整，如果步长是正数则向上取整。
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                elementObj.style.left = elementObj.offsetLeft + step + "px"
            }, 15)
        }
        demonvefoijgfwf.addEventListener("click", function () {
            animate(demofweijp090, 200, function () {
                demofweijp090.style.backgroundColor = "pink"
            })
        })
        demofjewoifjw12.addEventListener("click", function () {
            animate(demofweijp090, 0, function () {
                demofweijp090.style.backgroundColor = "green"
            })
        })
    })();
</script>

```html
<button id="demonvefoijgfwf">测试</button>
<button id="demofjewoifjw12">复位</button>
<div style="position:relative;height: 100px;">
    <div id="demofweijp090"></div>
</div>
<style>
    #demofweijp090 {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
</style>
<script>
    (function () {
        var demofweijp090 = document.querySelector("#demofweijp090")
        var demonvefoijgfwf = document.querySelector("#demonvefoijgfwf")
        var demofjewoifjw12 = document.querySelector("#demofjewoifjw12")
        function animate(elementObj, target, callback) {
            //clearInterval可以防止animate被反复调用时导致同时调用多个setInterval，致使timer被覆盖
            clearInterval(elementObj.timer)
            //elementObj.timer可以避免反复申请内存
            elementObj.timer = setInterval(function () {
                if (elementObj.offsetLeft == target) {
                    clearInterval(elementObj.timer)
                    if (callback) {
                        callback();
                    }
                }
                //根据公式计算步长
                var step = (target - elementObj.offsetLeft) / 10
                //如果步长是负数则向下取整，如果步长是正数则向上取整。
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                elementObj.style.left = elementObj.offsetLeft + step + "px"
            }, 15)
        }
        demonvefoijgfwf.addEventListener("click", function () {
            animate(demofweijp090, 200, function () {
                demofweijp090.style.backgroundColor = "pink"
            })
        })
        demofjewoifjw12.addEventListener("click", function () {
            animate(demofweijp090, 0, function () {
                demofweijp090.style.backgroundColor = "green"
            })
        })
    })();
</script>
```

## 动画核心代码

**animate.js**

```js
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
```

## 动画案例：侧边栏

<div id="demo83492379">
    <div class="more">→</div>
    <div class="more-address">了解更多</div>
</div>
<style>
    #demo83492379{
        position: relative;
        height: 50px;
        width: 50px;
        background-color: pink;
        overflow: visible;
        word-break: keep-all;
    }
    #demo83492379 .more{
        z-index: 2;
        position: relative;
        width: 50px;
        height: 50px;
        background-color: black;
        font-size: 25px;
        line-height: 50px;
        text-align: center;
    }
    #demo83492379 .more-address{
        position: absolute;
        left: -500px;
        top: 0;
        display: inline-block;
        padding: 0 10px;
        padding-left: 50px;
        height: 50px;
        background-color: black;
        font-size: 25px;
        line-height: 50px;
        text-align: center;
    }
</style>
<script>
(function(){
    var more = document.querySelector("#demo83492379 .more")
    var more_address = document.querySelector("#demo83492379 .more-address")
    more_address.style.left=-more_address.offsetWidth+"px"
    more.addEventListener("mouseenter",function(){
        animate(more_address,0,function(){
            more.innerHTML="←"
        })
    })
    more.addEventListener("mouseleave",function(){
        animate(more_address,-more_address.offsetWidth,function(){
            more.innerHTML="→"
        })
    })
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
})();
</script>

```html
<div id="demo83492379">
    <div class="more">→</div>
    <div class="more-address">了解更多</div>
</div>
<style>
    #demo83492379{
        position: relative;
        height: 50px;
        width: 50px;
        background-color: pink;
        overflow: visible;
        word-break: keep-all;
    }
    #demo83492379 .more{
        z-index: 2;
        position: relative;
        width: 50px;
        height: 50px;
        background-color: black;
        font-size: 25px;
        line-height: 50px;
        text-align: center;
    }
    #demo83492379 .more-address{
        position: absolute;
        left: -500px;
        top: 0;
        display: inline-block;
        padding: 0 10px;
        padding-left: 50px;
        height: 50px;
        background-color: black;
        font-size: 25px;
        line-height: 50px;
        text-align: center;
    }
</style>
<script>
(function(){
    var more = document.querySelector("#demo83492379 .more")
    var more_address = document.querySelector("#demo83492379 .more-address")
    more_address.style.left=-more_address.offsetWidth+"px"
    more.addEventListener("mouseenter",function(){
        animate(more_address,0,function(){
            more.innerHTML="←"
        })
    })
    more.addEventListener("mouseleave",function(){
        animate(more_address,-more_address.offsetWidth,function(){
            more.innerHTML="→"
        })
    })
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
})();
</script>
```
