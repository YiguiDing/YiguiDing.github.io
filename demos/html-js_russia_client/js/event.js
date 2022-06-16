$(document).ready(//文档结构已经加载完成后执行（不包含图片等非文字媒体文件）
    function()
    {
        // $('body').off('touchend');//off将删除之前附加到其上的事件处理程序。 但它不会停止元素的默认行为 您可以向单个选择器添加多个事件。
        $('body').on('touchend',function(e) {//click事件在移动端浏览器其实是默认由touchstart、touchend这两个事件的触发 //阻止touchend事件的默认事件就可以的。
            e.preventDefault();//阻止ios端双击页面后放大
        });

        //ios的audio.play()在click事件外是被屏蔽的 也就是说只有在click事件发生的周期内audio.play()才是有实际效果的
        //(click事件在手机上被分为touchstart、touchend两个事件)
        //测试下来发现，只要这个audio在click事件中被播放过一次之后，这个audio.play()就可以在程序中其他任何地方正常执行播放了
        //所以解决方法是 在用户第一次触摸屏幕的时候播放所有音乐，在用户松开屏幕的时候 解绑这个事件处理函数，这样下一次触摸屏幕就不会再播放所有音乐了
        var Play_All_Audio = function play_All_Audio(){//点击屏幕的时候播放所有音效（因为是小游戏，只有 三个音效时长也段 无所谓）
            around_audio.play();
            collision_audio.play();
            clear_audio.play();
        };
        
        $('body').on('touchstart',Play_All_Audio);//点击屏幕播放所有音效

        $('body').on('touchend',function clear_the_function_play_All_Audio(){//用户松开时执行
            $('body').off('touchstart',Play_All_Audio);//解绑定play_All_Audio()事件处理函数  这样下一次点击触摸屏幕的时候就不会再播放所有声音了
            $('body').off('touchend',clear_the_function_play_All_Audio);//解绑定自己这个处理函数,这样下一次松开触摸屏幕的时候就不会再执行这样的操作了
        });
            

    //对手机端起作用
        if(!isPc())//按键主要是给手机端用的
        {    
            $("#id_button_Turn").on("touchstart",function(){
                turn_around();
            });
            $("#id_button_Down").on("touchstart",function(){
                // move_pattern(1,0);
                // directly_down();
                fast_down();
            });
            $("#id_button_Left").on("touchstart",function(){
                // move_pattern(0,-1);
                fast_left();
            });
            $("#id_button_Righ").on("touchstart",function(){
                // move_pattern(0,1);
                fast_right();
            });
            //stop_fast_
            $("#id_button_Turn").on("touchend",function(){
                // turn_around();
            });
            $("#id_button_Down").on("touchend",function(){
                stop_fast_down();
            });
            $("#id_button_Left").on("touchend",function(){
                // move_pattern(0,-1);
                stop_fast_left();
            });
            $("#id_button_Righ").on("touchend",function(){
                // move_pattern(0,1);
                stop_fast_right();
            });
            $("#modeToJD").on("touchend",function(){
                change_mode(JD_MODE);
            });
            $("#modeToJS").on("touchend",function(){
                change_mode(JS_MODE);
            });
            $("#modeToXS").on("touchend",function(){
                change_mode(XS_MODE);
            });
            $("#modeToKN").on("touchend",function(){
                change_mode(KN_MODE);
            });
            $("#modeToKN").on("touchend",function(){
                change_mode(KN_MODE);
            });
            $("#id_copyRightText").on("touchend",function(){//点击超链接外div便跳转 手机端
                redirect(document.getElementById("id_copyRightText_A").href);
            });
            
            
        }else
    //对PC端起作用
        {
            $("#id_button_Turn").on("mousedown",function(){
                turn_around();
            });
            $("#id_button_Down").on("mousedown",function(){
                // move_pattern(1,0);
                fast_down();
            });
            $("#id_button_Left").on("mousedown",function(){
                // move_pattern(0,-1);
                fast_left();
            });
            $("#id_button_Righ").on("mousedown",function(){
                // move_pattern(0,1);
                fast_right();
            });
            //stop_fast_
            $("#id_button_Turn").on("mouseup",function(){
                // turn_around();
            });
            $("#id_button_Down").on("mouseup",function(){
                // move_pattern(1,0);
                // fast_down();
                stop_fast_down();
            });
            $("#id_button_Left").on("mouseup",function(){
                // move_pattern(0,-1);
                stop_fast_left();
            });
            $("#id_button_Righ").on("mouseup",function(){
                // move_pattern(0,1);
                stop_fast_right();
            });
            $("#modeToJD").on("mouseup",function(){
                change_mode(JD_MODE);//按钮按下改变游戏模式，同时也会改变按钮效果
            });
            $("#modeToJS").on("mouseup",function(){
                change_mode(JS_MODE);
            });
            $("#modeToXS").on("mouseup",function(){
                change_mode(XS_MODE);
            });
            $("#modeToKN").on("mouseup",function(){
                change_mode(KN_MODE);
            });
            
        }
        $("#id_copyRightText").on("mousedown",function(){//点击超链接外div便跳转 手机端PC端
            redirect(document.getElementById("id_copyRightText_A").href);
        });
        

    }
)