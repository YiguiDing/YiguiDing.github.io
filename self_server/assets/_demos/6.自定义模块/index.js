function htmlEncode(content){
    return content.replace(/<|>|"|&/g,march=>{
        switch(march){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return "&amp;";
         }
    })
}
function htmlDecode(content){
    return content.replace(/&lt;|&gt;|&quot;|&amp;/g,march=>{
        switch(march){
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&quot;':
                return '"';
            case '&amp;':
                return "&";
         }
    })
}
module.exports.htmlEncode = htmlEncode
module.exports.htmlDecode = htmlDecode