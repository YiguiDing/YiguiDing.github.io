---
title: CSS3进阶笔记
# top: 10
# cover: /images/CSS3重学笔记/cover.png
# coverWidth: 1920
# coverHeight: 1080
date: 2022-06-17T01:51:00+08:00
tags: [HTML,前端,HIDE]
categories: 笔记
---

# CSS3进阶笔记


## 字体图标
* 字体图标展示的是图标，实际特性却像是字，可以通过color属性改变颜色
* 字体图标用于处理颜色单一的简单小图（复杂图用精灵图）
* ![](/images/CSS3进阶笔记/2022-06-17-01-55-16.png)
* 优点：
    * 灵活，尺寸颜色可用css属性修改
    * 轻量，体积小渲染快降低服务器请求次数
    * 兼容，几乎兼容所有主流浏览器
    * 方便，
        * 下载字体包
        * 使用字体图标
  
## 阿里巴巴矢量字体库iconfont使用步骤
1. `iconfont.cn`下载字体图标
2. 引入的css文件名为iconfont.css ![](/images/CSS3进阶笔记/2022-06-17-02-23-42.png)
    ```html
    <link rel="stylesheet" href="./iconfont/iconfont.css">
    ```

3. 调用图标对应的类名，**必须**调用两个类名
    1. `iconfont`类,基本样式，包含字体图标的默认大小和颜色
    2. `icon-xxx`类,图标对应的类名![](/images/CSS3进阶笔记/2022-06-17-02-26-00.png)
    ```html
    <span class="iconfont icon-XXX"></span>
    ```
* iconfont具体实现原理
    * `.iconfont`类
    * ![](/images/CSS3进阶笔记/2022-06-17-02-50-20.png)
    * `.icon-XXX`类
    ![](/images/CSS3进阶笔记/2022-06-17-02-57-28.png)

## 平面转换
* 作用：改变盒子在**平面(2D)**的形态(**位移** ， 旋转 ， **缩放** )
* 属性名: **transform**
* 语法格式:
    * `transform: translate(水平向右移动距离,垂直向下移动距离);`
    * `transform: translate(自身宽度的百分比,自身高度的百分比);`
    * `transform: translate(只写一个参数表示X轴移动距离);`
    * `transform: translateX(一个参数);`
    * `transform: translateY(一个参数);`
    * 
![](/images/CSS3进阶笔记/2022-06-17-04-31-22.png)

### 使用示例
* 水平和垂直居中
```html
<div class="father">
    <div class="box">transform: translate(-50%,-50%);</div>
</div>
<style>
    .father{
        position: relative;
        width: 500px;
        height: 300px;
        background: skyblue;
    }
    .father .box{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 200px;
        height: 100px;
        background-color: green;
        line-height: 100px;
    }
</style>
```
<div class="father">
    <div class="box">transform: translate(-50%,-50%);</div>
</div>
<style>
    .father{
        position: relative;
        width: 500px;
        height: 300px;
        background: skyblue;
    }
    .father .box{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 200px;
        height: 100px;
        background-color: green;
        line-height: 100px;
    }
</style>

* 天猫
```html
<div class="tianmao-bgi"></div>
<style>
    .tianmao-bgi{
        width: 683px;
        height: 300px;
        background-image: url(images/CSS3进阶笔记/bg.jpg);
        background-size: contain;
        /* 溢出部分隐藏 */
        overflow: hidden;
    }
    .tianmao-bgi::before,
    .tianmao-bgi::after{
        display: inline-block;
        content: "";
        width: 341px;
        height: 300px;
        background-image: url(images/CSS3进阶笔记/fm.jpg);
        background-size:cover;
        transition: all 0.5s;
        
    }
    .tianmao-bgi::after{
        background-position:right 0;
    }
    .tianmao-bgi:hover::before{
        transform: translate(-100%);
    }
    .tianmao-bgi:hover::after{
        transform: translate(+100%);
    }
</style>
```
<div class="tianmao-bgi"></div>
<style>
    .tianmao-bgi{
        width: 683px;
        height: 300px;
        background-image: url(images/CSS3进阶笔记/bg.jpg);
        background-size: contain;
        /* 溢出部分隐藏 */
        overflow: hidden;
    }
    .tianmao-bgi::before,
    .tianmao-bgi::after{
        display: inline-block;
        content: "";
        width: 341px;
        height: 300px;
        background-image: url(images/CSS3进阶笔记/fm.jpg);
        background-size:cover;
        transition: all 0.5s;
        
    }
    .tianmao-bgi::after{
        background-position:right 0;
    }
    .tianmao-bgi:hover::before{
        transform: translate(-100%);
    }
    .tianmao-bgi:hover::after{
        transform: translate(+100%);
    }
</style>

## 旋转
* 语法 `transform:rotate(角度deg);`
* 角度单位deg
* 旋转一圈为360deg
* 取正为顺时针旋转，取负则相反
* 一定要配合**过渡**属性才能看到动态的效果

<div class="rotate-test" >旋转测试</div>
<style>
    .rotate-test{
        width: 100px;
        height: 100px;
        background-color: #fff;
        text-align: center;
        line-height: 100px;
        /* 一定要配合过渡属性才能看到动态的效果 */
        transition: all 1s;
    }
    .rotate-test:hover{
        transform:rotate(360deg);
    }
</style>

### 转换属性：位移、旋转、缩放的中心点更改 
* 默认原点是盒子的中心点
* 语法: `transform-origin: 水平位置 垂直位置;`
* 取值：**方位名词**、像素、百分比（相对于盒子自身尺寸计算）
* 示例
<div class="origin-test" >旋转测试</div>
<style>
    .origin-test{
        width: 100px;
        height: 100px;
        background-color: #fff;
        text-align: center;
        line-height: 100px;
        transition: all 1s;
        transform-origin: right bottom;
    }
    .origin-test:hover{
        transform:rotate(360deg);
    }
</style>


## 多重转换
* 语法格式,将其当做复合属性：`transform: translate() rotate();`
* 因为旋转会改变坐标轴方向，所以如果要实现平移+旋转效果，需要注意该属性的两个参数的顺序
<div class="multip" >
    <div>多重转换</div>
</div>
<style>
    .multip{
        width: 313px;
        height: 100px;
        background-color: #fff;
    }
    .multip div{
        height: 100px;
        width: 100px;
        background: green;
        transition: all 1s;
        border-radius: 50%;
        text-align: center;
        line-height: 100px;
    }
    .multip:hover div{
        transform: translate(313px,0) rotate(360deg);
    }
</style>