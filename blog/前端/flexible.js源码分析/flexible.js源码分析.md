---
title: flexible.js源码分析
date: 2022-07-05T10:52:00+08:00
cover: ./cover/default_cover.jpg
tag: [js,源码分析,前端]
# ---article: false---
category: 笔记
---


# flexible.js源码分析

flexible.js是手淘开发出的一个用来适配移动端的js框架。手淘框架的核心原理就是根据不同的视口宽度给html根标签设置不同的font-size，然后所有的px都用rem来代替，这样就实现了不同大小的屏幕都适应相同的样式了。

## 最外层

- 最外层是一个立即执行函数，
- 接收的实参为window和document对象
- 其中所有变量都是局部变量，不会造成变量名冲突

```js
(function flexible (window, document) {
    //立即执行函数
}(window, document))
```

## 变量

```js
//documentElement是html根标签
  var docEl = document.documentElement
//devicePixelRatio是物理像素比，一般pc端是1 手机端是2
  var dpr = window.devicePixelRatio || 1
```

## 设置body字体大小

```js
  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {//判断是否有body元素
      document.body.style.fontSize = (12 * dpr) + 'px' //设置body的Font-size:(12*dpr)px
    }
    else {
        //如果页面没有body，则添加DOMContentLoaded事件监听器，待DOM加载完毕后再来执行该函数
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();
```

## 设置html文字大小

- pageshow是页面显示时触发的事件，无论页面是否来自缓存；
- 该事件会在load事件触发之后触发；
- 该事件对象中persisted属性可以用来判断是否是缓存中的页面触发的pageshow事件
- 该事件添加给window
- 此处不能用load事件来代替的原因是：
  - load事件虽可以在点击超链接、f5刷新、强制刷新、前进后退后触发
  - 但在火狐浏览器中，存在“往返缓存”机制，后退页面时，整个DOM和js的状态都被存储在了内存中，此时再点击前进按钮回到页面，整个页面不会重新加载，不会触发load事件

```js
  
  function setRemUnit () {
    var rem = docEl.clientWidth / 10 // 设置 1rem = 视口宽度 / 10
    docEl.style.fontSize = rem + 'px' // 为HTML根标签设置字体大小
  }

  setRemUnit() // 调用

  // 添加监听事件，当窗口改变大小后重新根据视口宽度计算1rem大小
  window.addEventListener('resize', setRemUnit)
  //页面显示时触发的事件
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {//如果页面是从缓存中取出的
      setRemUnit()
    }
  })
```

## 使移动端支持0.5px

```js
//移动端检测是否支持0.5px，若支持则添加类名使其向下兼容
  if (dpr >= 2) {//检测是否是移动端
   //创建一个假body元素
    var fakeBody = document.createElement('body')
     //创建一个测试元素
    var testElement = document.createElement('div')
     //给测试元素添加0.5px的边框
    testElement.style.border = '.5px solid transparent'
    //将测试元素附加给假body元素
    fakeBody.appendChild(testElement)
    //将假body元素附加给html根标签
    docEl.appendChild(fakeBody)
    // 检测测试元素的高度是否为1，若是则说明支持0.5px的写法
    if (testElement.offsetHeight === 1) {
        //为根标签添加样式类名 通过添加类名hairlines来向下兼容
      docEl.classList.add('hairlines')
    }
    //移除假body元素
    docEl.removeChild(fakeBody)
  }
```

## 完整源码

```js
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```
