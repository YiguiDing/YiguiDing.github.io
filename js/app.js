// 表格相册
$("table")
  .has("img")
  .addClass("nexmoe-album");

// 搜索
function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}

// 平滑跳转同时修复锚点链接被转义
$(document).ready(function () {
  $("a.toc-link").click(function (ev) {
    ev.preventDefault();
    $("html, body").animate({
      scrollTop: $(decodeURI($(this).attr("href"))).offset().top - 25
    }, {
      duration: 500,
      easing: "swing"
    });
  });
});

$(document).on("copy", function(){
  if(!window.copyTip){ return; }
  var sel = document.getSelection();
  var ele = document.createElement("div");
  ele.innerHTML = '<div style="position: fixed;opacity: 0;white-space: pre;">' + sel + "\n\n" + window.copyTip.replaceAll("%url",document.location.href) + ' </div>' 
  document.body.appendChild(ele);
  sel.selectAllChildren(ele);
  setTimeout(function () {document.body.removeChild(ele);});
});

//适配手机端,将H1标题大小修改为1.0em
$(document).ready(function(){
  if(!isPc())
  {
    var nexmoe_post_cover = document.getElementsByClassName("nexmoe-post-cover");
    for(i=0;i<nexmoe_post_cover.length;i++)
    {
      nexmoe_post_cover[i].getElementsByTagName("h1")[0].style.fontSize = "1.2em"
    }
  }
});
function isPc(){
  console.log(window.navigator.userAgent);
  if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
  {
    return false;
  }else
  {
    return true;
  }
}
