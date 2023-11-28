---
title: express配置子域名和https证书
date: 2023-04-04T13:04:00+08:00
cover: ./cover/default_cover.jpg
tag: [express]
category: 后端
star: true
---

# express配置web服务记录

`server.js`

```js
let Express = require("express");// express
let connect = require("connect")// express 的connect 模块
let vhost = require("vhost")// express 的 vhost 模块 子域名支持
const proxy = require("express-http-proxy");// express的http代理中间件
let http = require("http");// nodejs 原生http模块
let https = require("https");// nodejs 原生https模块
let fs = require("fs");
const path = require("path");

// ---------------------------------config:https---------------------------------
const host = "0.0.0.0"
const port_http = 80
const port_https = 443;
const key = fs.readFileSync(path.resolve(__dirname, "./ssl/dingdingdang.online.key"))
const pem = fs.readFileSync(path.resolve(__dirname, "./ssl/dingdingdang.online.pem"))
const config = { key: key, cert: pem }
// ---------------------------------config:https---------------------------------

const mainApp = connect()

const blogApp = Express().use(Express.static("./blog"));
const codeApp = Express().use(proxy("127.0.0.1:8080")); // 由于code-server 需要使用 http://127.0.0.1:8080 还需要使用 ws://127.0.0.1:8080 所以这里的写法是不完整的
const fileApp = Express().use(proxy("127.0.0.1:8081"));

mainApp.use(vhost("dingdingdang.online", blogApp))
mainApp.use(vhost("www.dingdingdang.online", blogApp))
mainApp.use(vhost("blog.dingdingdang.online", blogApp))
mainApp.use(vhost("code.dingdingdang.online", codeApp))
mainApp.use(vhost("file.dingdingdang.online", fileApp))


http.createServer(mainApp).listen(port_http, host, () => {
    console.log(`server is running at ${host}:${port_http}`);
});

https.createServer(config, mainApp).listen(port_https, host, () => {
    console.log(`server is running at ${host}:${port_https}`);
})
```
