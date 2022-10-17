const path = require("path")

var temp1 = path.join("/home","/dyg","./","../","/admin","test.txt")
console.log(temp1);
/*
输出:
/home/admin/test.txt
*/


var temp2 = path.join(__dirname,"test.txt")
console.log(temp2);
/*
输出:
/mnt/D/GitProject/YiguiDing.github.ioV2/source/_posts/nodejs学习笔记/demos/test.txt
*/

var temp3 = path.basename("/path/to/fileName.txt")
console.log(temp3);
/*
输出:
fileName.txt
*/

var temp4 = path.basename("/path/to/fileName.12345","345")
console.log(temp4);
/*
输出:
fileName.12
*/


var temp5 = path.extname("/path/to/fileName.12345")
console.log(temp5);
/*
输出:
.12345
*/