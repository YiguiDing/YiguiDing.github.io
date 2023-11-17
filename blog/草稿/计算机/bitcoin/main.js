
var fetch = require("node-fetch");
var fs =  require("fs/promises");
var bitcoinjs =  require("bitcoinjs-lib");

function req(add) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${add}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Microsoft Edge\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "Referer": "https://bitref.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        })
            .then(response => {
                return response.json()
            })
            .then(body => {
                // console.log(JSON.stringify(body, null, 4))
                resolve(body)
            })
            .catch(reason => reject(reason))
    })
}
async function read() {
    var data = await fs.readFile("./db.json")
    console.log(data);
}
async function write(json) {
    var res = await fs.writeFile("./db.json", JSON.stringify(json));
}

async function main() {
    bitcoinjs.initEccLib();
    bitcoinjs.crypto
    // while (true) {
    //     var res = await req("1PjTBgqrQw1K9NDmGS5BwBBYhn9ypUdcjj");
    //     console.log(res);
    // }
    // console.log(res.balance);
}

main();