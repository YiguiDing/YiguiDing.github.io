var str="abcdzqwezxqwezgeflz"
var obj={};

for(i in str)//统计每个字符出现的次数
{
    if(obj[str[i]])
    {
        obj[str[i]].count++;
        obj[str[i]].position.push(i);
    }else{
        obj[str[i]]={count:1,position:[i]}
    }
}
console.log(obj)