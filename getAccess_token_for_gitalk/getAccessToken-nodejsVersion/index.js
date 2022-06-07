const http = require('http');
var url = require("url");

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    var urlObj = url.parse(req.url ,true);//req.url='/users?a=1&b=2' true:将字符串格式转换为对象格式
    // console.log(urlObj);//{a:1,b:2}
    urlObj.query["code"]
    if(urlObj.pathname=="/get_access_token")
    {
        console.log("收到get_access_token请求");
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        });
    
        req.on('end', function () {
            body = Buffer.concat(body);
            console.log(body.toString());
        });
    }


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });