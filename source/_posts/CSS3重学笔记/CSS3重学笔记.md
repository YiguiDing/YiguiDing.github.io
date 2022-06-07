---
title: CSS3重学笔记
cover: /images/CSS3重学笔记/cover.png
coverWidth: 1920
coverHeight: 1080
date: 2022-06-06T06:00:00+08:00
tags: [HTML,前端,HIDE]
categories: 笔记
---
# CSS3重学笔记
## CSS简介
* CSS: **Cascading Style sheets 层叠样式表**
* 注释格式: `/* css的唯一注释格式 */`
* 语法格式: `选择器{属性:属性值;}`

## 引入方式
1. **内嵌式** 
1. **外联式**
1. **行内式**

### **内嵌式** 
* 写在style标签中
* 虽然style标签可以写在任意位置，但**一般约定style标签写在head标签中的title标签下**
    ```html
    <head>
        <title>Document</title>
        <style>
            p{  
                color: red;
                background-color: green;
                font-size: 30px;
                width: 500px;
                height: 500px;
            }
        </style>
        <link rel="stylesheet" href="path/to/file.css">
    </head>
    ```
* 使用场景：小案例
* 作用范围：**当前页面**
    
### **外联式**
* 写在一个单独的.css文件中
* 需要用link标签引入
    ```html
    <!-- rel=>relation关系 stylesheet指定是css-->
    <!-- href=>路径 -->
        <link rel="stylesheet" href="path/to/file.css">
    ```
* 使用场景：大项目
* 作用范围：**多个页面**
    
### **行内式**
* 直接写到标签的style属性中
    ```html
        <p style="color: white;">qqq</p>
    ```
* 使用场景：一般配合js使用
* 作用范围：**仅单个标签**

## 选择器
1. **标签选择器**
1. **类选择器**
1. **id选择器**
1. **通配符选择器**
1. **后代选择器**
1. **子代选择器**
1. **并集选择器**
1. **交集选择器**
1. **伪类选择器**


### **标签选择器**
* 语法：`标签名{css属性名:属性值;}`
* 特点：匹配到所有标签，无论嵌套关系多深


### **类选择器**
* 语法：`.类名值{css属性名:属性值;}`
* 特点：只作用于标签属性中`class="指定类名"`的所有标签
* 注意：
    * 所有标签都可以有class属性
    * **类名只能以数字字母下划线中划线组成且不能以数字或中划线开头。**
    * 一个标签可有有多个类名`<div class="c1 c2"></div>`
    * 一个类选择器也可以选中多个类`.类名1 .类名2{css属性名:属性值;}`


### **id选择器**
* 语法：`#id属性值{css属性名:属性值;}`
* 特点：只唯一作用于id属性为指定值的标签
* 注意：
    * 所有HTML标签都可以有id属性
    * **id属性值只能以数字字母下划线中划线组成且不能以数字或中划线开头。**
    * 按规定id属性值在单个页面中是唯一的
    * 一个标签只能有一个id属性值
    * 一个id选择器只能选中一个标签
    * id选择器一般配合js使用


### **通配符选择器**
* 语法：`*{css属性名:属性值;}`
* 特点：作用于所有标签
* 用法：清除标签的默认样式
    * margin外边距 如h1标签就有默认外边距
    * padding内边距
    ```css
    *{
        margin:0;
        padding:0;
    }
    ```

### **后代选择器：**
* 语法: `选择器1 选择器2{css属性名:属性值;}`
* 特点：选择器之间用**空格**隔开
* 注意：
    * **后代包括 子代 孙代 重孙代**
    * 单个选择器可以是上面四种基本选择器
    * 可以跨代选择

### **子代选择器**
* 语法：`选择器1>选择器2{css属性名:属性值;}`
* 特点：选择器之间用 **>** 隔开
* 注意：
    * **子代选择器只能选择子代 不能选择孙代**

### **并集选择器**
* 语法：`选择器1,选择器2{css属性名:属性值;}`
* 特点：选择器之间用**逗号**隔开
* 注意：
    * **并集选择器中的单个选择器可以是上面两种复合选择器**
    * **单个选择器可以一行写一个提高代码可读性**

### **交集选择器**
* 语法 `选择器1选择器2{}`
* 特点：交集选择器选择的是满足要求的一类标签 交集可能是空 可能有一个 可能有多个
* 4种基本选择器两两排列组合的示例：
    * 标签和类名的交集：`p.class1{}`
    * 标签和id的交集`p#id1{}`
    * 标签和通配符的交集：`p*{}` `*p{} `
        * 似乎没有什么应用场景 *和p的交集就是p
    * 类名和id的交集： `.class1#id1{}` `#id1.class1{}`
    * 类和通配符的交集：`.class1*{}` `*.class1{}`
        * 似乎没有什么应用场景 *和class1的交集就是class1
    * id和通配符的交集：`#id1*{}` `*#id1{}`
        * 同上；*和#id1的交集就是#id1
* 注意：
    * **交集选择器能且只能交两个基本选择器**
    * 交集选择器的两个选择器一定是对两个不同HTML的标签选择器做交集 所以不要问h1和p的交集怎么写 不要问`h1p{}`这种写法浏览器能不能识别（你说你没问？好吧我问的...），这两个标签不可能有交集 但是类和类可以有交集`.class1.class2{}`这种写法浏览器能识别 `#id1#id2{}`这种写法浏览器也能识别
    * 因为统配符选择器和任何选择器的交集都是这个选择器本身，所以实际中应该用不到

### **伪类选择器**
* hover
    * 语法：`选择器:hover{}`
    * 作用：设置鼠标悬停在标签上时显示的样式
    * 注意：任何标签都有伪类hover



## 字体样式
1. **字体的大小属性**
1. **字体的粗细属性**
1. **字体的倾斜属性**
1. **字体的family字体属性**
1. **字体的复合属性**

### **字体的大小属性**
* 属性名：`font-size`
* 取值：`数字+px`
* 注意：
    * 谷歌浏览器默认文字大小16px
    * 必须加单位否则没有效果

### **字体的粗细属性**
* 属性名：`font-weight`
* 取值：
    * 取关键字：
        * `normal` 正常不加粗（默认）
        * `bold`  加粗
    * 取数字：
        * 取`100~900`的整百数 *共九种取值*
        * `400` 效果对应 `normal`
        * `700` 效果对应 `bold`
    * 注意：
        * 并不是所有`字体`都有九种粗细
        * 实际开发中主要用 `正常` 和 `加粗` 两种取值

### **字体的倾斜属性**
* 属性名：font-style
* 取值：
    * normal 正常不倾斜（默认）
    * italic 倾斜
        * italic作形容词时译为“斜体的；仿意大利古书写体的”，作名词时译为“斜体字”
* 所以可以用该属性把斜体标签变不倾斜`<em style="font-style:normal">ggg</em>`

### **字体的family字体属性**
* 属性名：`font-family`
* 取值格式：`font-family:字体名1,字体名2,字体名3,字体系列名;`
* 取值：
    * `微软雅黑` windows默认
    * `苹方` macOS默认
    * 等...
* 扩展：网页中一般采用**无衬线字体(sans-serif)**
    * ![](/images/CSS3重学笔记/2022-06-05-08-41-07.png)
* 示例：
    ```css
    div{
        /* 按优先级选择可用的字体，如果没有两种字体都没有则使用任意一种无衬线字体(sans-serif) */ 
        font-family:微软雅黑,黑体,sans-serif;
    }
    ```

### **字体的复合属性**
* 属性名：`font`
* 取值格式：font:style weight size family;
    * 示例：`font: italic bold 16px 微软雅黑;`
* 这个属性只能省略前两个值，省略表示设置为默认值
* 这种一个属性后有多个值的称为复合属性

## 文本样式
1. **文本缩进属性**
1. **文本水平对齐方式属性**
1. **文本修饰线属性**
1. **文本行高属性**

### **文本缩进属性**
* 属性名`text-indent`
* 取值：
    * `数字+px`
    * `数字+em` (推荐)
        * `1em`=当前标签的`font-size`大小

### **文本水平对齐方式属性**
* 属性名`text-align`
* 取值
    * `left`
    * `center`
    * `right`
* 注意
    * 可以作用于该标签的内容 不光是作用于文字
    * 要让`img`这种单标签居中 需要设置其父元素的`text-indent`属性

### **文本修饰线属性**
* 属性名：`text-decoration`
* 取值：
    * `underline` 下划线
    * `line-through` 删除线
    * `overline` 上划线
    * `none` 无装饰线
* 注意：
    * 开发中会用`text-decoration:none`清除超链接的下划线


### **文本行高属性**
* 属性名：`line-height`
* 取值：
    * 数字+px
    * 倍数可以是小数 （当前标签的font-size的倍数）
* 可以写到font中
    * 格式：`font: [style weight] size[/line-height] family;`
    * 示例：`font: italic 700 66px/2 微软雅黑;`
* 行高![](/images/CSS3重学笔记/2022-06-05-12-38-53.png)

## margin和text-align实现水平居中的区别
* `text-align` 指当前元素中内容的对其方式。
    * 写法：`text-align:center;`
    * 应用于**块级元素**
* `margin` 是指当前元素的外边距 而当指定其上下外边距为0 左右外边距为自动时 表现为相对于父标签居中，**不会影响自身的内容**
    * 写法：`margin:0px auto;`
    * 应用于**块级元素**
    * * 当元素设置为浮动时，左右`margin`设置为`auto`来居中元素的方式会失效

## 颜色的几种表示方式
* **关键字** `red` `green` `blue` `yellow` ...
* **rgb表示法**
    * 示例`rgb(255,255,255)`
* **rgba表示法**
    * `rgb`的取值范围0~255 
    * a表示透明度;取值范围0~1 小数表示法 可以省略整数部分0.5写.5
    * 示例`rgba(255,255,255,0.5)`
* **十六进制表示法**
    * `#ffffff`
    * `#fff` 简写
        * 注意是两位一组 其中一组中数字相同的才能简写 于是`#ff0066`可以写成`#f06`



## 背景
1. **背景颜色属性**
1. **背景图片**
1. **背景图片重复方式**
1. **背景图片位置**
1. **背景复合属性**

### **背景颜色属性**
* 属性名：`background-color`
* 取值：`颜色名关键字` 、 `rgb` `rgba` `#十六进制`
* 注意
    * 背景色默认为透明
        * `transparent`
        * `rgba(XX,XX,XX,0)`
    * 开发时可以设置背景色 辅助观察和理解元素间的尺寸和层叠关系

### **背景图片**
* 属性名：`background-image`
* 取值：`url("")`
* 示例：`background-image:url("./path/to/your/file.img")`
* 注意：
    * `url`中可以用单引号 双引号 也可以都不用
    * 图片为默认重复方式为水平和垂直方向重复（由如下属性控制）

### **背景图片重复方式**
* 属性名：`background-repeat`
* 取值：
    * `repeat`  水平和垂直方向重复 （默认）
    * `no-repeat` 不重复
    * `repeat-x` 仅沿x轴重复
    * `repeat-y` 仅沿y轴重复

### **背景图片位置**
* 属性名：`background-position`
* 使用格式：`background-position:水平方向 垂直方向;`
* 取值：
    * 取方位名词关键字 
        * 水平： `right` `center` `left`
        * 垂直： `top` `center` `bottom`
    * 取坐标：
        * 左上角为原点
        * 水平方向坐标轴的增长方向为朝右
        * 垂直方向坐标轴的增长方向为朝下
        * 取具体数值+px 可以取负数表示反方向
* 注意：
    * 两种取值方式 可以混合使用
    * `background-position:center center;`可以简写成`background-position:center;`

### **背景复合属性**
* 属性名： `background`
* 标准书写格式：`background:color image repeat position`
* 注意：
    * 四个取值不分先后顺序、随意省略
    * 最后一个取值`position`其实由两个值组成，分为水平方向和垂直方向，当取关键字时可以颠倒顺序，当取数值时不能颠倒顺序
    * 所以当盒子大小和背景图片一致时可直接简写为`background: url();`

## img标签和背景图片区别
* `img`是一个HTML标签。不设置宽高以原尺寸显示；设置单个宽高图片以等比例缩放显示；同时设置宽高图片以不等比例缩放显示。
* `background-img`是CSS样式。可以设置给div标签，但div必须设置宽高，如果不设置什么都不显示
* 选用原则：**重要的用img 不重要的装饰性的用背景图**



## 元素(HTML标签)显示模式
1. **块级元素block**
1. **行内元素inline**
1. **行内块元素inline-block**

### **块级元素**
* 特点
    * **独占一行**
    * **可以**设置宽高
    * 宽度默认继承自父级元素
* 代表元素： **div** **h系列** **p**  ul li dl dt dd form header nav footer

### **行内元素**
* 特点
    * **一行显示多个**
    * **不可以**设置宽高(不生效)
    * 宽度和高度默认由内容撑开
* 代表元素
    * **span** **a** b u i s strong ins em del

### **行内块元素**
* 特点
    * **一行可以显示多个**
    * **可以**设置宽高
* 代表标签
    * **img** **input** textarea button select ...
* 注意 img标签有行内块特点 但在Chrome调试工具中显示是inline

## CSS元素属性控制显示模式的相互转换
* 属性名：display
* 可选值：
    * **block** 块级元素 块元素**可以设置宽高** 使用频率**多**
    * **inline** 行内元素 行内元素不可以设置宽高 使用频率少
    * **inline-block** 行内块元素 行内块**可以设置宽高** 使用频率**多**

## CSS三大特性
*  **继承性**
*  **层叠性**
*  **优先级**

### **继承性**
* 子元素默认继承父元素
* 自己有相关属性的不再从父元素继承
    * a标签的文字颜色和下划线是浏览器给的默认颜色，不再从父元素继承。
    * h标签的大小是默认属性，不再从父元素继承。
* **只有文字控制属性才存在继承**
* 如：
    * color文字颜色 
    * font系列（font-style font-weight font-size font-family）
    * text系列（text-indent text-align）
    * line-height行高
    * 等

### **层叠性**
* 给标签设置不同的属性，样式会**叠加**
    * 样式叠加：`div{color:red;font-size:10px;}`
* 给标签设置相同的属性，样式会**覆盖**，覆盖的原则为先写的被后写的覆盖
    * 最终为绿色：`div{color:red;color:green;}`
* 样式冲突时，只有当选择器**优先级相同**时才能通过层叠性判断结果
    * 大概解释成，单个选择器内的样式冲突时，可以根据层叠性判断，多个选择器之间样式冲突时，必须要优先级相同才能根据层叠性判断。

### **优先级**
#### **多个`基本选择器`之间的的优先级**
* 不同的选择器有不同的优先级
* 优先级高的选择器样式**覆盖**优先级低的选择器样式
* 优先级关系
    * `继承<标签选择器<通配符选择器<类选择器<id选择器<行内样式<!important`
    * 作用范围广的选择器优先级低
    * 作用范围精确的选择器优先级高
* 注意：
    * `!important`写在属性值之后分号之前
    * `!important`无法被继承
    * 实际开发中不建议使用`!important`
* 示例：最终颜色为pink![](/images/CSS3重学笔记/2022-06-07-10-52-21.png)

#### **多个`复合选择器`之间的优先级的权重的计算**
* 如果使用复合选择器，需通过叠加计算方法，判断最终哪个选择器的优先级最高,优先级高的覆盖优先级低的。
* 叠加公式：![](/images/CSS3重学笔记/2022-06-07-08-17-55.png)
* 先比较各复合选择器优先级的第一级，值最大的选择器的优先级最高，如果无法得出最大值
* 再比较各复合选择器优先级的第二级，值最大的选择器的优先级最高，如果无法得出最大值，以此类推
* **如果都比较不出来，再根据层叠性确定**
* **!inportant**优先级依然是最高
+ 计算权重优先复合选择器的优先级的权重计算**示例**：
    + 最终字的颜色为red![](/images/CSS3重学笔记/2022-06-07-10-25-40.png)
    + 最终显示为天蓝色skyblue![](/images/CSS3重学笔记/2022-06-07-10-26-52.png)
    + 最终为blue蓝色 ![](/images/CSS3重学笔记/2022-06-07-11-15-01.png)![](/images/CSS3重学笔记/2022-06-07-11-13-20.png)
    + 最终为天蓝色![](/images/CSS3重学笔记/2022-06-07-11-11-50.png)
    + 最终为pink![](/images/CSS3重学笔记/2022-06-07-11-17-43.png)![](/images/CSS3重学笔记/2022-06-07-11-18-07.png)
    + 最终为黄色![](/images/CSS3重学笔记/2022-06-07-11-28-54.png)
    + 最终为红色![](/images/CSS3重学笔记/2022-06-07-11-30-41.png)


## 盒子模型
* css中规定每个盒子分别由
    * **内容区域content**，
    * **内边距区域padding**，
    * **边框区域border**，
    * **外边距区域margin**构成 这就是**盒子模型**
* 页面中每一个标签都可看作是一个盒子，方便布局
* 浏览器渲染时将网页中元素看成矩形区域，我们形象的称为盒子
![](/images/CSS3重学笔记/2022-06-07-12-11-21.png)
![](/images/CSS3重学笔记/2022-06-07-13-30-00.png)
![](/images/CSS3重学笔记/2022-06-07-13-39-11.png)

### 盒子模型各组成部分的设置
#### **内容区域content**，
* 通过width height属性控制，单位px

#### **内边距区域padding**，
* 通过padding属性控制
* 语法格式：
    * `padding: 上 右 下 左;`
    * `padding: 上 左右 下;`
    * `padding: 上下 左右;`
    * `padding: 上下左右边距;`
    * 上述四种写法的规律就是，从上开始顺时针依次赋值，没有赋到值的就看其对面的值

#### **边框区域border**，
* 通过border属性控制
    * 这是一个复合属性
    * 属性值**不分先后顺序**，**任意一个都不能省略**
    * 语法1：`border:宽度 线条种类 颜色;`
        * 宽度：数字+px
        * 线条种类 solid实线 dashed虚线 dotted点线
    * 语法2：`border-方位名词:宽度 线条种类 颜色;`
        * 方位名词： 
            * `top`
            * `bottom` 
            * `left` 
            * `right`
    * 语法3(不常用)：
        * `border-width:宽度;` 
        * `border-style:线条种类;` 
        * `border-color:颜色;`
    * 语法4(不常用)：
        * `border-width:上宽度 右宽度 下宽度 左宽度;` 
        * `border-style:上线条种类 右线条种类 下线条种类 左线条种类;`
        *  `border-color:上颜色 右颜色 下颜色 左颜色;`

* **外边距区域margin**













## 新浪首页导航条实例编写
```html
<style>
    .nav{
        width: 100%;
        height: 40px;
        border-top: 3px solid #ff8500;
        border-bottom: 1px solid #edeef0;
        background-color: white;
    }
    .nav-item{
        width:auto;
        height: 40px;
        background-color: white;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        color: #4c4c4c;
        font-size: 12px;
        line-height: 40px;
        padding: 0 5px 0 5px;
    }
    .nav-item:hover{
        background-color: #edeef0;
        color: #ff8400;
    }
</style>
<div class="nav">
    <a href="#" class="nav-item">首页</a>
    <a href="#" class="nav-item">文字个数不应影响效果</a>
    <a href="#" class="nav-item">新浪导航</a>
    <a href="#" class="nav-item">新浪导航</a>
</div>
```
**效果：**
<style>
    .nav{
        width: 100%;
        height: 40px;
        border-top: 3px solid #ff8500;
        border-bottom: 1px solid #edeef0;
        background-color: white;
    }
    .nav-item{
        width:auto;
        height: 40px;
        background-color: white;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        color: #4c4c4c;
        font-size: 12px;
        line-height: 40px;
        padding: 0 5px 0 5px;
    }
    .nav-item:hover{
        background-color: #edeef0;
        color: #ff8400;
    }
</style>
<div class="nav">
    <a href="#" class="nav-item">首页</a>
    <a href="#" class="nav-item">文字个数不应影响效果</a>
    <a href="#" class="nav-item">新浪导航</a>
    <a href="#" class="nav-item">新浪导航</a>
</div>


## HTML嵌套原则
* ![](/images/CSS3重学笔记/2022-06-06-09-32-35.png)
* 块级元素一般作为大容器，
    * 可以嵌套：
        * 块级元素
        * 行内元素 行内块元素 （这两个只能嵌套行内和行内块元素）
    * **但p标签禁止嵌套div p h等标签**
    * **h和p禁止互相嵌套**
* a标签可以嵌套任意标签
    * 但不要a标签嵌套a标签



## vscode的emment插件语法（自带插件）
![](/images/CSS3重学笔记/2022-06-05-17-40-04.png)
* div+类名 div.class1
* p+id p#id
* a+id+类名 a.id1#class1
* 同级标签 a+p
* 嵌套标签 ul>li
* 多个 ul*3>li*3
* 内容 ul*3>li{$}*3
* css
    * css提示规律
        * 按首字母提示
    w300+h200+bgc

## PxCook像素大厨的基本使用
* 写网页的测量工具


## 样式层叠
* 当一个标签有两个相同的属性，浏览器默认渲染最后一个
```css
div{
    /* 根据层叠性，div最后会渲染出蓝色 */
    color:red;
    color:blue;
}
```