const test = require("./6.自定义模块")

var html = `<h1 style="color:skyblue">测试</h1>`
var encode = test.htmlEncode(html)
var decode = test.htmlDecode(encode)

console.log(encode);
console.log(decode);