import https from "https";
import fetch from "node-fetch";
const httpsAgent = new https.Agent({rejectUnauthorized: false});
function get(groupsID,problemsID){
    // groupsID="113072"
    // problemsID = "100532"
    // fetch(`https://www.python123.io/api/v1/student/courses/8584/groups/${groupsID}/problems`, {
    fetch(`https://www.python123.io/api/v1/student/courses/8488/groups/${groupsID}/problems/${problemsID}`, {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiMjQ0OTY5NTM1NEBxcS5jb20iLCJuYW1lIjoi5LiB5q-F5qGCIiwiaWQiOiIxMjA2MTIwIiwicm9sZXMiOlsic3R1ZGVudCJdLCJsYXN0X2xvZ2luIjoxNjg1NDM1MjEwMzk2fSwiaWF0IjoxNjg2MDIzOTEwLCJleHAiOjE2ODczMTk5MTB9.ztWXaNZ2SJJNThokDBMxtyFFItMkH55K9cFmY6HNfj4",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include",
    agent: httpsAgent
    })
    .then(response=>{
        // console.log(response)
        // return response.text()
        return response.json()
        // var res = response.json();
        // var code = res["status"];
        // if(code==200) return res//可以解析为json对象
    })
    .then(body=>{
        console.log(JSON.stringify(body,null,4))
        console.log(body["data"]["explanation_content"]);
    })
}

// var groupsID="124197"
// var problemsID = "1808"

var groupsID="112019"
var problemsID = "2581"
get(groupsID,problemsID);