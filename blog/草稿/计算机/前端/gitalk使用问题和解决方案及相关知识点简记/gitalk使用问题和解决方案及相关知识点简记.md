---
title: gitalk使用问题和解决方案及相关知识点简记
date: 2022-06-03T02:40:47+08:00
tag: [gitalk]
# ---article: false---
catalagues: "笔记"
cover: ./cover/default_cover.jpg
---

# gitalk使用问题和解决方案及相关知识点简记

- 遇到的问题是管理员突然无法初始化文章底部的评论区
- 了解其工作原理和造成该问题的原因后发现没有简单的解决方法
- 在此简要记录一下造成的原因和其中一些原先不懂的知识点

## 问题及原因

1. 管理者初始化某篇文章下的评论区实际上就是登陆`github`并用其账号创建一个`issue`的过程，完成这个操作前需要：用户授权code + `clientID`+`clientSecret` 向`https://github.com/login/oauth/access_token`发送`POST`请求以获取`access_token`
1. 但由于当前的站点页面是`username.github.io`,需要另外请求资源的地址是`github.com`,这属于`跨域访问`，需要发送`跨域访问请求`，而此时 `https://github.com/login/oauth/access_token` ，**不支持跨域访问请求**，所以无法获取 `access_token`
1. 于是就要通过允许跨域访问的公用代理服务器`https://cors-anywhere.herokuapp.com/`，告诉他你要访问什么地址，需要发送什么数据，让它来做代理，替你获取`access_token`
1. `gitalk`原先`默认`使用的是`https://cors-anywhere.azm.workers.dev`，其服务器在国外，现已经被墙
1. 而`https://cors-anywhere.herokuapp.com/`是`cors-anywhere`项目的示例服务器，由于使用的人太多，现在已经被限制使用
1. 并且使用上述两个公用的代理服务器是不安全的，因为获取`access_token`需要把`秘钥clientSecret`发送给他们

## 注意

- 这里的clientID是OAuth应用程序的ID
- 这里的clientSecret是OAuth应用程序用于授权登录的秘钥
- GitHub授权登录过程
  1. 首先授权账号的 OAuth 服务。
  1. **Get** `https://github.com/login/oauth/authorize?client_id=?&redirect_uri=?`
     - 携带的必须参数的是`client_id`和`redirect_uri`(和设置OAuth时的地址相同)
     - 用户登录github账号并且点击授权登录之后
     - Github会返回一个`code`
     - 并重定向到`redirect_uri`
  1. **Post** `https://github.com/login/oauth/access_token`
     - 携带的必须参数为 `client_id` `client_secret` `code` `redirect_uri`
     - 然后Github会返回一个`access_token`
     - 并重定向到我们的`redirect_uri`
  1. **Get** `https://api.github.com/user`
     - 携带的参数格式为 Header: "Authorization" : "token access_token "
  1. Github返回我们的user信息，授权登录完成。

## 解决方案

- 可以用`cors-anywhere`项目的解决方案
- 也可以只在本地架设代理服务器
  - 好处是不会暴露秘钥
  - 坏处是只能在本地初始化评论区
- 本地用python架设代理服务器：
  - flask不适用于生产环境
  - 有空打算写一个nodejs版的

```python
import requests
import flask
from flask_cors import CORS

server = flask.Flask(__name__)

# 跨域访问问题
CORS(server, resources=r'/*')

# github auth
client_id = "你自己的"
client_secret = "你自己的"


# 接口返回格式 {"access_token":"gho_COSr3lUITUX9b2J7krsKjNlnlNSOBw2g0oZ1","token_type":"bearer","scope":"public_repo"}
@server.post('/get_access_token')
def get_access_token():
    url = 'https://github.com/login/oauth/access_token'
    params = {
        'client_id': client_id,
        'client_secret': client_secret,
        'code': flask.request.json['code']
    }
    headers = {
        'accept': 'application/json'
    }
    result = requests.post(url=url, params=params, headers=headers, verify=False)
    # 存储access_token
    # ..暂时不需要
    return result.json()


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=8011, debug=False)


## copy from "https://apidocs.cn/blog/front/js/修改Gitalk代理地址，解决无法登录问题.html"
```

- 然后Gitalk的代码也需要更改：

```js
new Gitalk({
  // '''
  proxy: "https://IP:PORT/get_access_token",
  //clientSecret: '', 此行配置可以去除了
  // '''
});
```

## 关于跨域请求

- 跨域资源共享(CORS)是一种机制
- 它允许浏览器向跨源服务器，发出XMLHttpRequest或Fetch请求。并且整个CORS通信过程都是浏览器自动完成的，不需要用户参与。
- 过程
  - 浏览器先根据同源策略对前端页面和后台交互地址做匹配，若同源，则直接发送数据请求；若不同源，则发送跨域请求。
  - 服务器收到浏览器跨域请求后，根据自身配置返回对应文件头。若未配置过任何允许跨域，则文件头里不包含 Access-Control-Allow-origin 字段，若配置过域名，则返回 Access-Control-Allow-origin + 对应配置规则里的域名的方式。
  - 浏览器根据接受到的 响应头里的 Access-Control-Allow-origin 字段做匹配，若无该字段，说明不允许跨域，从而抛出一个错误；若有该字段，则对字段内容和当前域名做比对，如果同源，则说明可以跨域，浏览器接受该响应；若不同源，则说明该域名不可跨域，浏览器不接受该响应，并抛出一个错误。
- 举例来说
  - 浏览器访问a.com时 页面中有一个资源来自b.com
  - 浏览器获取来自a.com的资源时,发送普通请求；浏览器获取来自b.com的资源时，发送的是跨域请求.
  - b.com的服务器如果不允许跨域，收到跨域请求后,发送响应，响应头中不包含Access-Control-Allow-origin 字段
  - b.com的服务器如果允许跨域，收到跨域请求后,发送响应，响应头中包含Access-Control-Allow-origin + 允许的跨域规则（比如说www.\*.com）
  - 浏览器收到之后会看Access-Control-Allow-origin字段，没有这个字段就抛出错误
  - 有这个字段还得看内容是不是包含a.com，不包含就抛出错误，包含就接受这个响应

## CSDN上看到的相关知识点的总结

```text
CORS的哪些是简单请求？
简单请求不会触发CORS的预检请求，若请求满足所有下述条件，则该请求可视为“简单请求”：

简洁版：
只能使用GET、HEAD、POST方法。使用POST方法向服务器发送数据时，Content-Type只能使用application/x-www-form-urlencoded、multipart/form-data
或 text/plain 编码格式。
请求时不能使用自定义的HTTP Headers

完整版：

(一) 使用下列方法之一

GET HEAD POST

(二) 只能设置以下集合中的请求头

Accept Accept-Language Content-Language Content-Type(但是有限制) DPR
Downlink Save-Data Viewport-Width Width

(三) Content-Type的值仅限于下面的三者之一

text/plain multipart/form-data application/x-www-form-urlencoded

请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。

请求中没有使用 ReadableStream 对象。

除了上面这些请求外，都是非简单请求。

CORS的预检请求具体是怎样的？
若是跨域的非简单请求的话，浏览器会首先向服务器发送一个预检请求，以获知服务器是否允许该实际请求。

整个过程大概是：

浏览器给服务器发送一个OPTIONS方法的请求，该请求会携带下面两个首部字段：
Access-Control-Request-Method: 实际请求要用到的方法
Access-Control-Request-Headers: 实际请求会携带哪些首部字段
若是服务器接受后续请求，则这次预请求的响应体中会携带下面的一些字段：
Access-Control-Allow-Methods: 服务器允许使用的方法
Access-Control-Allow-Origin: 服务器允许访问的域名
Access-Control-Allow-Headers: 服务器允许的首部字段
Access-Control-Max-Age: 该响应的有效时间(s),在有效时间内浏览器无需再为同一个请求发送预检请求
预检请求完毕之后，再发送实际请求
这里有两点要注意（注意，注意，注意）：
关于Access-Control-Max-Age，浏览器自身也有维护一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效，而是以最大有效时间为主。
当你勾选了浏览器的 Disable cache选项时，会导致浏览器每次非简单请求都会发送预检请求
————————————————
版权声明：本文为CSDN博主「Henry_楠」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/haonan_z/article/details/122105620

```
