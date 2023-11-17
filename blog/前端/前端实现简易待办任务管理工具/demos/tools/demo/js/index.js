$(document).ready(async function(){
    // input 苹果端点击会放大屏幕
    $("body").on("touchstart","input",function(event){
        // event.preventDefault()
    })
    $("body").on("touchend","input",function(event){
        // event.preventDefault()
    })
    
    // start:----------------slideDown/slideUp----------------------------------------------------------------------------------
    //最外层的slideDown按钮
    $(".longly,.shortly,.daily").on("click",">.header .resize.glyphicon-resize-full",function(){
        var panel = $(this).parents(".myPanel").eq(0)
        slideDownmyPanelcontent(panel)
        $(this).removeClass("glyphicon-resize-full").addClass("glyphicon-resize-small")
    })
    //最外层的slideUp按钮
    $(".longly,.shortly,.daily").on("click",">.header .resize.glyphicon-resize-small",function(){
        var panel = $(this).parents(".myPanel").eq(0)
        slideUpmyPanelcontent(panel)
        $(this).removeClass("glyphicon-resize-small").addClass("glyphicon-resize-full")
    })

    //daily的content中的slideDown按钮 content中的内容的高度变化，daily的content的高度也要变化
    $(".daily").on("click",">.content .resize.glyphicon-resize-full",function(){
        $(this).removeClass("glyphicon-resize-full").addClass("glyphicon-resize-small")
        var thisPanel = $(this).parents(".myPanel").eq(0)
        slideDownmyPanelcontent(thisPanel,true,function(){
            var dailyPanel = $(".daily")
            if(dailyPanel.find(">.header .moreOrLess.glyphicon-th").length!=0)
            {
                resizemyPanelcontent_Min(dailyPanel)
            }
        })
    })
    //daily的content中的slideUp按钮 content中的内容的高度变化，daily的content的高度也要变化
    $(".daily").on("click",">.content .resize.glyphicon-resize-small",function(){
        $(this).removeClass("glyphicon-resize-small").addClass("glyphicon-resize-full")
        var thisPanel = $(this).parents(".myPanel").eq(0)
        slideUpmyPanelcontent(thisPanel,true,function(){
            var dailyPanel = $(".daily")
            if(dailyPanel.find(">.header .moreOrLess.glyphicon-th").length!=0)
            {
                resizemyPanelcontent_Min(dailyPanel)
            }
        })
    })
    // end:----------------slideDown/slideUp----------------------------------------------------------------------------------


    //调整panel面板内容部分高度自适应最大化，显示所有内容
    $(".longly,.shortly,.daily").on("click",">.header .moreOrLess.glyphicon-th",function(){
        var panel = $(this).parents(".myPanel").eq(0)
        resizemyPanelcontent_Max(panel)
        $(this).removeClass("glyphicon-th").addClass("glyphicon-th-large")
    })
    //调整panel面板内容部分高度自适应最小化，显示单个内容
    $(".longly,.shortly,.daily").on("click",">.header .moreOrLess.glyphicon-th-large",function(){
        var panel = $(this).parents(".myPanel").eq(0)
        if(resizemyPanelcontent_Min(panel))//判断是否调整成功
        {
            $(this).removeClass("glyphicon-th-large").addClass("glyphicon-th")
        }
    })

    // 显示详细计划的按钮
    $(".longly,.shortly").on("click",".detail.glyphicon-list-alt",function(){
        var li = $(this).parents("li").eq(0)
        var panel = $(this).parents(".myPanel").eq(0)
        li.find(".list-group").slideToggle(function(){
            if(panel.find(".moreOrLess.glyphicon-th").length!=0)
            {
                resizemyPanelcontent_Min(panel)
            }else{
                resizemyPanelcontent_Max(panel)
            }
        })
    })
    function getChildMaxHeight(JqueryObj){//获取子元素中高度的最大值
        var childrens = JqueryObj.children()
        if (childrens.length) {
            var maxHeight = childrens.outerHeight(true)
            $(childrens).each(function(index,DOMelement){
                var tempHeight = $(DOMelement).outerHeight(true)
                if(tempHeight>maxHeight)
                    maxHeight=tempHeight;
            })
            return maxHeight;
        }else if(childrens.length==0){
            return -1;
        }else{
            return 0;
        }
    }
    function resizemyPanelcontent_Min(panel,animate=true){//调整面板内容部分的高度，自适应最大的子元素的高度，使其高度能够预览任何一个子元素
        var content =panel.children(".content")
        var ul = content.children("ul")
        var height = getChildMaxHeight(ul)
        if(height!=0 && height !=-1) // 高度为0说明面板隐藏了 ul个数为0说明计划删光了
        {
            if(animate){
                content.animate({"height":height+15})
            }else{
                content.animate({"height":height+15},0)
            }
            return true
        }else if(height == -1 ){
            // console.log(panel);
            if(animate){
                // console.log(content);
                content.animate({"height":0})
            }else{
                content.animate({"height":0},0)
            }
            return false
        }else{
            return false
        }
    }
    function resizemyPanelcontent_Max(panel,animate=true){//调整面板内容部分的高度为自动，使其能够显示所有子元素，无需鼠标滚动
        var content =panel.children(".content")
        if(animate){
            content.animate({"height":content.prop("scrollHeight")-1},function(){
                // content.css("height","auto")//最终还是将其设置为auto,让其自动确定高度
            })
        }else{
            content.css("height",content.prop("scrollHeight")-1)
        }
        return true
    }
    function slideDownmyPanelcontent(panel,animate=true,callback){
        var content =panel.children(".content")
        if(animate)
            content.slideDown(callback)
        else
            content.slideDown(0,callback)

    }
    function slideUpmyPanelcontent(panel,animate=true,callback){
        var content =panel.children(".content")
        if(animate)
            content.slideUp(callback)
        else
            content.slideUp(0,callback)
    }
    



//-----------------------------------------------------start:应用逻辑---------------------------------------------------------

    function init(db, storeName) {
        // 添加三条初始内容
        addData(db, storeName, {
            id: "11111111111111",//时间戳
            type: "yearly", //年度计划
            planName: "计划名称测试1",
            startDate: "2022-01-01",
            endedDate: "2022-12-25",
            content: [//计划的具体内容
                {
                    id: "1111",//时间戳
                    describe: "具体计划1",
                    states: {//每日完成情况记录
                        "2022-07-07": true,
                        "2022-07-08": false,
                        "2022-07-09": true,
                        "2022-07-10": true
                    }
                },
                {
                    id: "2222",//时间戳
                    describe: "具体计划2",
                    states: {//每日完成情况记录
                        "2022-07-07": true,
                        "2022-07-08": false,
                        "2022-07-09": true,
                        "2022-07-10": true
                    }
                }
            ],
        });
        addData(db, storeName, {
            id: "1231231354465675",//时间戳
            type: "yearly", //年度计划
            planName: "计划名称测试2",
            startDate: "2022-01-01",
            endedDate: "2022-12-25",
            content: [//计划的具体内容
                {
                    id: "1111",//时间戳
                    describe: "具体计划1",
                    states: {//每日完成情况记录
                        "2022-07-07": true,
                        "2022-07-08": false,
                        "2022-07-09": true,
                        "2022-07-10": true
                    }
                },
                {
                    id: "2222",//时间戳
                    describe: "具体计划2",
                    states: {//每日完成情况记录
                        "2022-07-07": true,
                        "2022-07-08": false,
                        "2022-07-09": true,
                        "2022-07-10": true
                    }
                }
            ],
        });
        
        addData(db, storeName, {
            id: "2222222222222222",//时间戳
            type: "monthly", //月度计划
            planName: "计划名称测试3",
            startDate: "2022-07-01",
            endedDate: "2022-12-25",
            content: [//计划的具体内容
            {
                id: "11111111111",//时间戳
                describe: "具体安排1",
                states: {//每日完成情况记录
                    "2022-07-14":true,
                    "2022-07-16":true,
                }
            },
            {
                id: "2221121212",//时间戳
                describe: "具体安排2",
                states: {//每日完成情况记录
                    "2022-07-14":true,
                    "2022-07-16":true,
                }
            },
            
            ],
        });
        addData(db, storeName, {
            id: "3333333333333333333", //时间戳
            type: "daily",
            date: "2022-07-07",//日期 
            plans: [//具体计划
                {
                    id: "12312123123",//时间戳
                    describe: "计划1",//计划内容描述
                    states: true//完成情况
                },
                {
                    id: "11111112222222",
                    describe: "计划2",
                    states: false//完成情况
                },
            ],
            timeManage: [{
                id: "222222222222",//时间戳
                startTime: "00:00",//开始时间
                endedTime: "01:00",//结束时间
                describe: "时间安排记录测试1"
            }, {
                id: "3121241324",//时间戳
                startTime: "01:00",//开始时间
                endedTime: "02:00",//结束时间
                describe: "时间安排记录测试2"
            }
            ],
            Notes: [{
                id: "12323424321",//时间戳
                describe: "备忘事项测试1"
            }, {
                id: "12323433422",//时间戳
                describe: "备忘事项测试2"
            }, {
                id: "12312312122",//时间戳
                describe: "备忘事项测试3"
            },
            ]
        });
    }

    let DB;
    var DBName = "plansDB"
    var storageName = "plans"
    let yearlyPlanPageSize = 8;
    let monthlyPlanPageSize = 8;
    let dailyPlanPageSize = 8;
    let monthlyPlanCurrentPage = 1;
    let yearlyPlanCurrentPage = 1;
    let dailyPlanCurrentPage = 1;

    // let data;
    DB = await openDB(DBName, 1,storageName,init)
    // console.log(DB);
    await initPage()

    function getAllYearlyPlans()
    {
        return getDataByIndex(DB,storageName,"type","yearly")
    }
    
    function getAllMonthlyPlans()
    {
        return getDataByIndex(DB,storageName,"type","monthly")
    }
    

    function getYearlyPlans(page){
        return  cursorGetDataByIndexAndPage(DB,storageName,"type","yearly",page,yearlyPlanPageSize)
    }
    function getMonthlyPlans(page){
        return cursorGetDataByIndexAndPage(DB,storageName,"type","monthly",page,monthlyPlanPageSize)
    }
    function geDailyPlans(page){
        return  cursorGetDataByIndexAndPage(DB,storageName,"type","daily",page,dailyPlanPageSize)
    }
    function isYearlyPlan(plan) {
        if (plan.type == "yearly") {
            return true
        }
        return false
    }
    function isMonthlyPlan(plan) {
        if (plan.type == "monthly") {
            return true
        }
    }
    function isDailyPlan(plan) {
        if (plan.type == "daily") {
            return true
        }
    }
    // function getPlans() {
    //     return obj.plans;
    // }
    function getPlanById(id) {
        return getDataByKey(DB,storageName,id.toString())
    }
    function getPlanTimeManage(plan)
    {
        return plan.timeManage
    }
    function getPlanNotes(plan)
    {
        return plan.Notes;
    }
    
    function getSubPlanById(plan,id) {
        var subPlans;
        if (isYearlyPlan(plan)||isMonthlyPlan(plan)) {
            subPlans = plan.content
        }else
            subPlans = plan.plans
        for (let index = 0; index < subPlans.length; index++) {
            if (subPlans[index].id == id.toString())
                return subPlans[index]
        }
        return false;
    }
    function getPlanType(plan)
    {
        return plan.type;
    }
    function addPlan(plan) {
        return updateDB(DB,storageName,plan)
    }
    function removePlanById(id) {
        return deleteData(DB,storageName,id.toString())
    }
    function reWritePlan(plan) {
        return updateDB(DB,storageName,plan)
    }
    async function changePlanStates(planId,subPlanId,date,states){
        var plan = await getPlanById(planId)
        var subPlan = getSubPlanById(plan,subPlanId)
        if(isYearlyPlan(plan)||isMonthlyPlan(plan))
        {
            subPlan.states[date]=states;
        }else{
            subPlan.states = states;
        }
        await reWritePlan(plan)
        return 
    }
    function creatContent(id, describe, states = {}) {
        return {
            id: id.toString() ,//时间戳
            describe: describe,//具体安排1
            states: states//每日完成情况记录
        }
    }
    function creatdailyContent(id, describe, states = false) {
        return {
            id: id.toString(),//时间戳
            describe: describe,//具体安排1
            states: states//每日完成情况记录
        }
    }
    function creatPlan(id, type, planName, startDate, endedDate, content_list) {
        return {
            id: id.toString(),//时间戳
            type: type, //月度计划
            planName: planName,
            startDate: startDate,
            endedDate: endedDate,
            content: content_list,//计划的具体内容
        }
    }
    function creatdailyPlan(id, type, date, plans = [], timeManage = [], Notes = []) {
        return {
            id: id.toString(),//时间戳
            type: type, //日度计划
            date: date, //日期 "2022-07-16"
            plans: plans,
            timeManage: timeManage,
            Notes: Notes,//计划的具体内容
        }
    }
    function creatTimeManage(id,startTime,endedTime,describe){
        return {
            id: id.toString(),//时间戳
            startTime: startTime,//开始时间
            endedTime: endedTime,//结束时间
            describe: describe
        }
    }

    function creatNotes(id,describe){
        return {
            id: id.toString(),//时间戳
            describe: describe
        }
    }

    


    // 添加具体安排内容
    function creat_PlanContentItem_InnerHTML(describe,id,states={}){
        var innerHtml = `
        <div class="list-group-item"  style="display:none;">
        <span class="content">
        `+ describe +`
        </span>
        <span class="glyphicon glyphicon-chevron-up up"></span>
         <span class="glyphicon glyphicon-trash delete" data-toggle="modal"  data-target="#delete-Plan-content"></span>
        </div>
        `
        var jqObj = $(innerHtml);
        jqObj.data("id",id)
        jqObj.data("describe",describe)
        jqObj.data("states",states)
        return jqObj;
    }
    //点击添加按钮的操作
    $('#Plan-Add-Editer .add-btn').on("click",function(){
        var panel_body = $(this).parents(".panel").children(".panel-body")
        var input = $(this).siblings("input")
        var value = input.val()//文本框内容
        if(value.length!=0)
        {
            var id = + new Date();//时间戳
            var jqObj = creat_PlanContentItem_InnerHTML(value,id);
            panel_body.append(jqObj)
            jqObj.slideDown()
            input.val("")
        }
    })
    // 删除具体安排内容 （原版是直接删除，不做提示）
    // $('#Plan-Add-Editer').on("click",".delete",function(){
    //     var item = $(this).parents(".list-group-item")
    //     item.slideUp(function(){
    //         item.remove()
    //     })
    // })
    //点击删除具体安排内容
    $('#delete-Plan-content').on('show.bs.modal', function (event) {
        var modal = $(this)
        var button = $(event.relatedTarget)     // 触发事件的button
        modal.data("button",button)
    })
    //点击确定删除具体安排内容
    $("#delete-Plan-content").on('click',".delete",function(){
        var modal = $("#delete-Plan-content")
        var button = modal.data("button")     // 触发事件的button
        var contentItem = button.parents(".list-group-item")

        modal.modal('hide')
        contentItem.slideUp(function(){
            contentItem.remove()
        })
    })
    



    //移动具体安排内容
    $('#Plan-Add-Editer,#dailyPlan-Add-Editer,#dailyPlan-timeManage-Editer,#dailyPlan-Notes-Editer').on("click",".up",function(){
        var modal = $(this).parents(".modal")
        if(modal.flag != true)//节流阀
        {
            modal.flag = true//打开节流阀
            var item = $(this).parents(".list-group-item")
            var prev = item.prev()//获取同级的前一个元素
            if(prev.length!=0)//该元素存在
            {

                var cloneItem = item.clone() //克隆当前元素

                cloneItem.data(item.data()) //克隆缓存数据

                // console.log("拷贝前：");
                // console.log(item.data("id"));
                // console.log(item.data("describe"));
                // console.log(item.data("states"));
                // console.log("拷贝后：");
                // console.log(cloneItem.data("id"));
                // console.log(cloneItem.data("describe"));
                // console.log(cloneItem.data("states"));
                
                cloneItem.hide(); //隐藏克隆的元素
                prev.before(cloneItem) //将克隆的元素添加到原元素位置前一个的前一个位置
                 //显示新元素
                cloneItem.slideDown(function(){
                    item.slideUp(function(){ //隐藏并删除旧元素
                        item.remove()
                        modal.flag = false //关闭节流阀
                    })
                })
            }else{
                modal.flag = false//关闭节流阀
            }
        }
    })
    // 根据点击按钮的不同，初始化不同的页面内容
    $('#Plan-Add-Editer').on('show.bs.modal', async function (event) {
        var modal = $(this)
        var button = $(event.relatedTarget)     // 触发事件的button
        var planType = button.data('plans-item-type')  //计划类型： 年度计划 月度计划
        var planId = button.data('plans-item-id')  //计划id 时间戳
        var planOperator = button.data('plan-operator')  //操作类型： 新建计划 编辑计划

        //传递值
        modal.data("button",button)
        modal.data("plans-item-id",planId)
        modal.data("plans-item-type",planType)
        modal.data("plan-operator",planOperator)

        //初始化模态框表单数据
        modal.find(".modal-title").text(planOperator)
        modal.find(".planName").val("")//清空计划名称
        if (planType=="yearly") {
            modal.find(".planType").val("年度计划") //计划类型
        }else if (planType=="monthly") {
            modal.find(".planType").val("月度计划") //计划类型
        }
        modal.find(".dateSelecter").val("") //清除日期选择框默认日期
        modal.find(".planContent").val("")//清空计划内容输入框
        modal.find(".planContentItems").html("")//清空计划内容列表

        if(planOperator=="编辑计划"){//初始化待编辑的内容
            var planItem = await getPlanById(planId)
            // console.log(planItem);
            var planStartTime = planItem.startDate
            var planEndTime = planItem.endedDate
            modal.find(".planName").val(planItem.planName)//设置计划名称

            $('.dateSelecter').data('daterangepicker').setStartDate(new Date(planStartTime)); // 设置input框的时间为计划开始时间
            $('.dateSelecter').data('daterangepicker').setEndDate(new Date(planEndTime)); // 设置input框的时间为计划结束时间
            modal.find(".dateSelecter").data("start",planStartTime) //初始化输入框开始时间
            modal.find(".dateSelecter").data("end",planEndTime) //初始化输入框结束时间
            // modal.find(".dateSelecter").val(planStartTime + " - " + planEndTime) //初始化输入框结束时间

            modal.find(".planContent").val("")//清空计划内容输入框
            // start: 创建Plan Content Item 元素
            var planContentItems =  modal.find(".planContentItems");
            $.each(planItem.content,function(index,item){
                planContentItems.append(creat_PlanContentItem_InnerHTML(item.describe,item.id,item.states).show())
            })
            // end: 创建元素
        }else if(planOperator=="新建计划"){
            var planId = + new Date() //生成planId 时间戳
            modal.data("plans-item-id",planId)
        }
    })


    // 点击保存后的操作
    $('#Plan-Add-Editer').on('click',".save",async function(){
        var modal = $('#Plan-Add-Editer')
        var operator = modal.data("plan-operator")
        var planId = modal.data("plans-item-id")
        var planName = modal.find(".planName").val()
        var type = modal.data("plans-item-type")
        var planStartTime = modal.find(".dateSelecter").data("start")
        var planEndTime = modal.find(".dateSelecter").data("end")
        var planContentItems = modal.find(".planContentItems>div")

        // console.log(operator);
        // console.log(planId);
        // console.log(planName);
        // console.log(type);
        // console.log(planStartTime);
        // console.log(planEndTime);

        //判断格式是否正确
        if (!planId){
            alert("error:plan ID 未定义")
            return
        }
        if (!planName) {
            alert("error:名称不能为空")
            return
        }
        if (!planStartTime) {
            alert("error:起始日期不能为空")
            return
        }
        if (!planEndTime) {
            alert("error:起始日期不能为空")
            return
        }
        if (!planContentItems.length) {
            alert("error:内容不能为空")
            return
        }
        if(operator=="编辑计划"){//初始化待编辑的内容
            var Content_list = [] 
            planContentItems.each(function(index,DOMElementObj){//遍历子元素，获取表单信息，创建计划具体内容的列表
                var ContentId = $(DOMElementObj).data("id")
                var describe = $(DOMElementObj).data("describe")
                var states = $(DOMElementObj).data("states")
                Content_list.push(creatContent(ContentId,describe,states))
            })
            var newPlan = creatPlan(planId,type,planName,planStartTime,planEndTime,Content_list);//创建计划
            if (await reWritePlan(newPlan)) {//删除原计划后再添加新计划
                // reFlash()
                await initPage();
            }
        }else if(operator=="新建计划"){
            var Content_list = [] 
            planContentItems.each(function(index,DOMElementObj){//遍历子元素，获取表单信息，创建计划具体内容的列表
                var ContentId = $(DOMElementObj).data("id")
                var describe = $(DOMElementObj).data("describe")
                Content_list.push(creatContent(ContentId,describe))
            })
            var newPlan = creatPlan(planId,type,planName,planStartTime,planEndTime,Content_list);//创建计划
            await addPlan(newPlan);//添加计划
            // reFlash()
            await initPage();
        }
        modal.modal('hide')
    })

    //点击删除计划按钮后的操作
    $('#delete-Plan').on('show.bs.modal', function (event) {
        var modal = $(this)
        var button = $(event.relatedTarget)     // 触发事件的button
        var planId = button.data("plans-item-id")
        modal.data("plans-item-id",planId)
    })
    //点击确定删除计划按钮后的操作
    $("#delete-Plan").on('click',".delete",async function(){
        var modal = $("#delete-Plan")
        var planId = modal.data("plans-item-id")
        var plan = await getPlanById(planId)
        var planType = getPlanType(plan)
        await removePlanById( planId )
        // reFlash()
        await initPage();

        if(planType == "yearly"){
            resizemyPanelcontent_Min($(".longly"),true)
        }else if(planType == "monthly"){
            resizemyPanelcontent_Min($(".shortly"),true)
        }else if(planType == "daily"){
            resizemyPanelcontent_Min($(".daily"),true)
        }
        modal.modal('hide')
    })



    
    // 添加daily具体安排内容
    function creat_dailyPlansContentItem_InnerHTML(describe,id,states=false){
        var innerHtml = `
        <div class="list-group-item"  style="display:none;">
        <span class="content">
        `+ describe +`
        </span>
        <span class="glyphicon glyphicon-chevron-up up"></span>
         <span class="glyphicon glyphicon-trash delete"></span>
        </div>
        `
        var jqObj = $(innerHtml);
        jqObj.data("id",id)
        jqObj.data("describe",describe)
        jqObj.data("states",states)
        return jqObj
    }


    //点击daily添加按钮的操作
    $('#dailyPlan-Add-Editer .add-btn').on("click",function(){
        var panel_body = $(this).parents(".panel").children(".panel-body")
        var input = $(this).siblings("input")
        var value = input.val()//文本框内容
        if(value.length!=0)
        {
            var id = + new Date();//时间戳
            var jObj = creat_dailyPlansContentItem_InnerHTML(value,id);
            panel_body.append(jObj)
            jObj.slideDown()
            input.val("")
        }
    })
    // 删除daily具体安排内容 
    $('#dailyPlan-Add-Editer,#dailyPlan-timeManage-Editer,#dailyPlan-Notes-Editer').on("click",".delete",function(){
        var item = $(this).parents(".list-group-item")
        item.slideUp(function(){
            item.remove()
        })
    })

    // 根据点击按钮的不同，初始化不同的页面内容
    $('#dailyPlan-Add-Editer').on('show.bs.modal', async function (event) {
        var modal = $(this)
        var button = $(event.relatedTarget)                 // 触发事件的button
        var planOperator = button.data('daily-item-operator')     // 操作类型： 新建计划 编辑计划
        var planType = button.data('daily-item-type')  //计划类型： 年度计划 月度计划

        var planId;
        var planDate;

        //初始化模态框表单数据
        modal.find(".modal-title").text(planOperator) //新建计划 or 编辑计划
        modal.find(".planType").val("日度计划") //计划类型 日度计划
        // modal.find(".dailySelecter").val("") //清除日期选择框默认日期
        modal.find(".dailyPlansContent").val("")//清空计划内容输入框
        modal.find(".planContentItems").html("")//清空计划内容列表

        if(planOperator=="新建计划")
        {
            planId = + new Date() //生成planId 时间戳
            // planId
            var now = new Date()
            planDate = moment().format('YYYY-MM-DD');
            modal.find(".dateSelecter").val(planDate) //初始化输入框结束时间
        }

        if (planOperator == "编辑计划") {
            planId = button.data('daily-item-id')           // 计划id 时间戳

            var planItem = await getPlanById(planId)
            planDate = planItem.date
            modal.find(".dateSelecter").val(planDate) //初始化输入框结束时间
            modal.find("input.dailyPlansContent").val("")//清空计划内容输入框

            // start: 创建dailyPlan Content Item 元素
            var planContentItems = modal.find(".planContentItems");
            $.each(planItem.plans, function (index, item) {
                planContentItems.append(creat_dailyPlansContentItem_InnerHTML(item.describe, item.id, item.states).show())
            })
            // end: 创建元素
        }
        //传递值
        // modal.data("button", button)
        modal.data("daily-item-id", planId)
        modal.data("daily-item-operator", planOperator)
        modal.data('daily-item-type',planType)  //计划类型： 年度计划 月度计划
        modal.data("daily-item-date", planDate)
    })
    // 点击保存后的操作
    $('#dailyPlan-Add-Editer').on('click', ".save",async function () {
        var modal = $('#dailyPlan-Add-Editer')
        var planId = modal.data("daily-item-id")
        var planDate = modal.data("daily-item-date")
        var planOperator = modal.data("daily-item-operator")
        var planType = modal.data('daily-item-type')  //计划类型： 年度计划 月度计划
        var planContentItems = modal.find(".planContentItems>div")
        //判断格式是否正确
        if (!planId) {
            alert("error:plan ID 未定义")
            return
        }
        if(!planDate){
            alert("error: planDate 未定义")
            return
        }
        if (planOperator == "编辑计划") {//初始化待编辑的内容
            var Content_list = []
            planContentItems.each(function (index, DOMElementObj) {//遍历子元素，获取表单信息，创建计划具体内容的列表
                var ContentId = $(DOMElementObj).data("id")
                var describe = $(DOMElementObj).data("describe")
                var states = $(DOMElementObj).data("states")
                Content_list.push(creatdailyContent(ContentId, describe, states))
                // console.log(Content_list);
            })
            var newPlan = creatdailyPlan(planId, planType ,planDate,Content_list, [], []);//创建计划
            if (await reWritePlan(newPlan)) {//删除原计划后再添加新计划
                // reFlash()
                await initPage()
            }
        } else if (planOperator == "新建计划") {
            var Content_list = []
            planContentItems.each(function (index, DOMElementObj) {//遍历子元素，获取表单信息，创建计划具体内容的列表
                var ContentId = $(DOMElementObj).data("id")
                var describe = $(DOMElementObj).data("describe")
                var states = $(DOMElementObj).data("states")
                Content_list.push(creatdailyContent(ContentId, describe,states))
            })
            var newPlan = creatdailyPlan(planId, planType, planDate ,Content_list);//创建计划
            await addPlan(newPlan);//添加计划
            // reFlash()
            await initPage()
        }
        modal.modal('hide')
    })

    //时间选择
    $('.clockpicker').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        default: 'now',
        donetext: '确定',
        vibrate:true
    
    });

    //打钩修改计划完成状态
    $(".daily").on("click",".list-group-item.ticked,.list-group-item.unticked",async function(){
        var btn = $(this)
        var planid = btn.data("plan-item-id")
        var isTodayPlan = btn.data("istoday")
        var subplanId = btn.data("plan-item-content-item-id")
        var date = btn.data("plan-item-date")

        if (isTodayPlan) {
            if (btn.hasClass("ticked")) {
                await changePlanStates(planid,subplanId,date,false)
                await $(this).removeClass("ticked").addClass("unticked")
                reFreshHtmlContentByPlanId(planid)
            }else if (btn.hasClass("unticked")) 
            {
                await changePlanStates(planid,subplanId,date,true)
                await $(this).removeClass("unticked").addClass("ticked")
                reFreshHtmlContentByPlanId(planid)
            }
        }
    })
    //----------------------------------------------------------start:timeManage-Editer---------------------------------------------------------------
    function creat_dailyPlanTimeManageItem_InnerHTML(timeItemId,startTime,endedTime,describe){
        var innerHtml = `
        <div class="list-group-item"  style="display:none;">
        <div class="content">
            <span class="time">`+ startTime +` - `+ endedTime +` </span><span class="texts">`+ describe +`</span>
        </div>
        <span class="glyphicon glyphicon-chevron-up up"></span>
         <span class="glyphicon glyphicon-trash delete"></span>
        </div>
        `
        var jqObj = $(innerHtml);
        jqObj.data("timeItemId",timeItemId)
        jqObj.data("startTime",startTime)
        jqObj.data("endTime",endedTime)
        jqObj.data("describe",describe)
        return jqObj
    }
    $('#dailyPlan-timeManage-Editer').on('show.bs.modal',async function (event) {//timeManage-Editer编辑框的初始化
        var modal = $(this)
        var button = $(event.relatedTarget)                 // 触发事件的button
        var planId = button.data("plan-item-id")
        modal.data("plan-item-id",planId)
        var plan =await getPlanById(planId)
        var planContentItems = modal.find(".planContentItems")
        planContentItems.html("")
        getPlanTimeManage(plan).forEach(element => {
            planContentItems.append(creat_dailyPlanTimeManageItem_InnerHTML(element.id,element.startTime,element.endedTime,element.describe).show())
        });
    })
    $('#dailyPlan-timeManage-Editer').on('click', ".add-btn" ,function () {
        var modal = $('#dailyPlan-timeManage-Editer')
        var planContentItems = modal.find(".planContentItems")
        var id  = + new Date();
        var value = modal.find(".timeManageContent").val()
        var startTime = modal.find(".startTime").val()
        var endTime = modal.find(".endTime").val()
        // console.log(startTime);
        // console.log(endTime);
        var jqObj = creat_dailyPlanTimeManageItem_InnerHTML(id,startTime,endTime,value)
        planContentItems.append(jqObj)
        jqObj.slideDown()
        modal.find(".timeManageContent").val("")
        modal.find(".startTime").val("")
        modal.find(".endTime").val("")
    })
    $('#dailyPlan-timeManage-Editer').on('click', ".save" ,async function () {
        var modal = $('#dailyPlan-timeManage-Editer')
        var planContentItems = modal.find(".planContentItems>.list-group-item")
        var planId = modal.data("plan-item-id")
        var plan = await getPlanById(planId)
        var list = []
        // console.log(planContentItems);
        planContentItems.each(function(index,element){
            var element = $(element)
            list.push(creatTimeManage(element.data("timeItemId"),element.data("startTime"),element.data("endTime"),element.data("describe")))
        })
        await reWritePlan(creatdailyPlan(plan.id,plan.type,plan.date,plan.plans,list,plan.Notes))
        // reFlash()
        await initPage()
        modal.modal('hide')
    })
    //----------------------------------------------------------end:timeManage-Editer---------------------------------------------------------------
    
    //----------------------------------------------------------start:Notes-Editer---------------------------------------------------------------
    function creat_dailyPlanNotesItem_InnerHTML(NoteId,describe){
        var innerHtml = `
        <div class="list-group-item"  style="display:none;">
        <div class="content">`+ describe +`</div>
        <span class="glyphicon glyphicon-chevron-up up"></span>
         <span class="glyphicon glyphicon-trash delete"></span>
        </div>
        `
        var jqObj = $(innerHtml);
        jqObj.data("NoteId",NoteId)
        jqObj.data("describe",describe)
        return jqObj
    }
    $('#dailyPlan-Notes-Editer').on('show.bs.modal',async function (event) {//timeManage-Editer编辑框的初始化
        var modal = $(this)
        var button = $(event.relatedTarget)                 // 触发事件的button
        var planId = button.data("plan-item-id")
        modal.data("plan-item-id",planId)
        var plan =await getPlanById(planId)
        var planContentItems = modal.find(".planContentItems")
        planContentItems.html("")
        getPlanNotes(plan).forEach(element => {
            planContentItems.append(creat_dailyPlanNotesItem_InnerHTML(element.id,element.describe).show())
        });
    })
    $('#dailyPlan-Notes-Editer').on('click', ".add-btn" ,function () {
        var modal = $('#dailyPlan-Notes-Editer')
        var planContentItems = modal.find(".planContentItems")
        var id  = + new Date();
        var value = modal.find(".NotesContent").val()
        var jqObj = creat_dailyPlanNotesItem_InnerHTML(id,value)
        planContentItems.append(jqObj)
        jqObj.slideDown()
        modal.find(".NotesContent").val("")
    })
    $('#dailyPlan-Notes-Editer').on('click', ".save" ,async function () {
        var modal = $('#dailyPlan-Notes-Editer')
        var planContentItems = modal.find(".planContentItems>.list-group-item")
        var planId = modal.data("plan-item-id")
        var plan = await getPlanById(planId)
        var list = []
        planContentItems.each(function(index,element){
            var element = $(element)
            list.push(creatNotes(element.data("NoteId"),element.data("describe")))
        })
        await reWritePlan(creatdailyPlan(plan.id,plan.type,plan.date,plan.plans,plan.timeManage,list))
        // reFlash()
        await initPage()
        modal.modal('hide')
    })
    //----------------------------------------------------------end:Notes-Editer---------------------------------------------------------------
    


    async function reFreshHtmlContentByPlanId(id){
        var plan = await getPlanById(id);
        if(isYearlyPlan(plan))
        {
            var newElement =  creatPlanHTMLObj(plan);
            $(".longly > .content > ul.row").children().each(function(index,DOMElementObj){
                if(id == $(DOMElementObj).data("plans-item-id"))
                {
                    $(DOMElementObj).after(newElement.hide())
                    $(DOMElementObj).remove()
                    newElement.show()
                }
            })
        }else if(isMonthlyPlan(plan))
        {
            var newElement =  creatPlanHTMLObj(plan);
            $(".shortly > .content > ul.row").children().each(function(index,DOMElementObj){
                if(id == $(DOMElementObj).data("plans-item-id"))
                {
                    $(DOMElementObj).after(newElement.hide())
                    $(DOMElementObj).remove()
                    newElement.show()
                }
            })
        }else if(isDailyPlan(plan)){
            var allYearlyPlans = await getAllYearlyPlans()
            var allMonthlyPlans = await getAllMonthlyPlans()
            var newElement =  creatDailyPlanHTMLObj(plan,allYearlyPlans,allMonthlyPlans);
            $(".daily > .content > ul.row").children().each(function(index,DOMElementObj){
                if(id == $(DOMElementObj).data("daily-item-id"))
                {
                    $(DOMElementObj).after(newElement.hide())
                    $(DOMElementObj).remove()
                    newElement.show()
                }
            })
        }
    }
    
    async function initPage(page=1,clear=true)//初始化页面
    {
        await loadMoreYearlyPlans(page,clear);//加载第年度计划一页的内容
        await loadMoreMonthlyPlans(page,clear);
        await loadMoreDailyPlans(page,clear);

        // 待上面代码执行完毕后根据页面按钮状态初始化
        //根据按钮状态绝对myPanel的content是否显示
        $(".myPanel>.header").each(function (index, DOMelement) {
            if ($(DOMelement).find(".resize.glyphicon-resize-small").length != 0) {
                slideDownmyPanelcontent($(DOMelement).parent(), false)
            } else if ($(DOMelement).find(".resize.glyphicon-resize-full").length != 0) {
                slideUpmyPanelcontent($(DOMelement).parent(), false)
            }
        })
        // //根据按钮状态修改myPanel的content高度
        $(".myPanel>.header").each(function (index, DOMelement) {// 查找header中的按钮状态
            if ($(DOMelement).find(".moreOrLess.glyphicon-th").length != 0) {
                resizemyPanelcontent_Min($(DOMelement).parent(), false)
            } else if ($(DOMelement).find(".moreOrLess.glyphicon-th-large").length != 0) {
                resizemyPanelcontent_Max($(DOMelement).parent(), false)
            }
        })
    }
    function creatPlanHTMLObj(planItem)
    {
        var innerHtml;
        // 获取年月日
        var startDate = new Date(planItem.startDate)
        var endedDate = new Date(planItem.endedDate)
        //计算百分比
        var countTF = countTrueAndFalse(planItem.content);//统计该计划中，具体安排的完成情况
        var countDays = getDays(planItem.startDate, planItem.endedDate) //计算两个日期中的天数
        countDays = countDays == 0 ? 1 : countDays //不能为0
        // 计算完成的百分比
        var donePercent =(countTF["countTrue"] / (countDays * planItem.content.length) * 100)
        // 计算未完成的百分比
        var unDonePercent =(countTF["countFalse"] / (countDays * planItem.content.length) * 100)
        donePercent = donePercent.toFixed(1)
        unDonePercent = unDonePercent.toFixed(1)
        // donePercent = donePercent==NaN ? "":donePercent;
        // unDonePercent = unDonePercent==NaN ? "":unDonePercent;
        // console.log(countTF);
        // console.log(countDays);
        // console.log(donePercent);
        // console.log(unDonePercent);
        innerHtml =
            `
                <li  class="col-xs-12	col-sm-6	col-md-4	col-lg-3 item" data-plans-item-id="` + planItem.id + `" >
                    <div id="`+ planItem.id + `" data-plans-item-id="` + planItem.id + `" class="item-innerBox">
                        <div class="header">
                            <!-- 计划名称 -->
                            <h4>`+ planItem.planName + `</h4>
                            <span class="glyphicon glyphicon-list-alt detail"></span>
                            <span class="glyphicon glyphicon-pencil edit" data-toggle="modal"  data-target="#Plan-Add-Editer" data-plans-item-type="`+ planItem.type + `" data-plan-operator="编辑计划" data-plans-item-id="` + planItem.id + `"></span>
                            <span class="glyphicon glyphicon-trash delete" data-toggle="modal"  data-target="#delete-Plan" data-plans-item-id="` + planItem.id + `" ></span>
                        </div>
                        <div class="content ">
                            <!-- 起至日期 -->
                            <p><span class="glyphicon glyphicon-time"></span>`+ startDate.getFullYear() + `年` + (startDate.getMonth() + 1) + `月` + startDate.getDate() + `日—` + (endedDate.getMonth() + 1) + `月` + endedDate.getDate() + `日</p>
                            <div class="progress">
                                <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="`+ donePercent + `" aria-valuemin="0" aria-valuemax="100" style="min-width: 4em;width: ` + donePercent + `%"> 
                                `+ donePercent + `%
                                </div>
                                <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="`+ unDonePercent + `" aria-valuemin="0" aria-valuemax="100" style="min-width: 4em;width: ` + unDonePercent + `%; display:` + (unDonePercent <= 0 ? "none" : "block") + `; ">
                                    `+ unDonePercent + `%
                                </div>
                            </div>
                            <!-- 具体计划 -->
                            <div class="list-group" style="display:none;">
                            `
                            + (function () {
                                //立即执行函数
                                var innerHtml = ""
                                $.each(planItem.content, function (index, item) {
                                    innerHtml += `<div class='list-group-item'>` + item.describe + `</div>`
                                })
                                return innerHtml
                            })()
                            + 
                            `
                        </div>
                    </div>
                </li>
            `;
        return $(innerHtml);
    }
    function creatDailyPlanHTMLObj(planItem,allYearlyPlans,allMonthlyPlans) {
        // 获取年月日
        var daily_StartDate = new Date(planItem.date)
        var now = new Date();
        var isToday =false;
        isToday = now.getFullYear() == daily_StartDate.getFullYear() && now.getMonth() == daily_StartDate.getMonth() && now.getDate() == daily_StartDate.getDate()
        innerHtml =
            `<li class="col-xs-12	col-sm-6	col-md-4	col-lg-3 item " data-daily-item-id="` + planItem.id + `" data-istoday="`+ isToday +`">
                <div class="myPanel dailyBoxmyPanel">
                    <!-- header -->
                    <div class="header">
                        <h4>`+ daily_StartDate.getFullYear() + `年` + (daily_StartDate.getMonth() + 1) + `月` + daily_StartDate.getDate() + `日
                        `
                        +
                        (function () {
                            if (isToday) return `<span>(今日)</span>`;
                            else return `<span>(锁定)</span>`;
                        })()
                        +
                        `
                        </h4>
                        <span class="glyphicon glyphicon-resize-small resize"></span>
                        `
                        +
                        (function () {
                            if (isToday) return `<span class="glyphicon glyphicon-pencil edit"  data-toggle="modal"  data-target="#dailyPlan-Add-Editer" data-daily-item-id="` + planItem.id + `" data-daily-item-operator="编辑计划" data-daily-item-type="` + planItem.type + `"></span>`;
                            else return "";
                        })()
                        +
                        `
                        <span class="glyphicon glyphicon-trash delete" data-toggle="modal"  data-target="#delete-Plan" data-plans-item-id="` + planItem.id + `"></span>
                    </div>
                    <div class="content">
                    <!-- 年度计划列表 -->
                    <div class="panel panel-default myPanel plansmyPanel yearPlansmyPanel">
                            <div class="panel-heading header">
                                <h5>年度计划</h5>
                                <span class="glyphicon glyphicon-resize-small resize"></span>
                            </div>
                            <div class="panel-body list-group content">`
                                +
                                (function () {
                                    // <div class='list-group-item unticked'>测试文字</div>
                                    var innerHtml = ""
                                    var daily_ms = daily_StartDate.getTime() //获取毫秒数
                                    $.each(allYearlyPlans, function (index, plan_Item) {//遍历年度/月度计划
                                            var start_ms = + new Date(plan_Item.startDate);//获取该年度/月度计划的开始时间
                                            var ended_ms = + new Date(plan_Item.endedDate);//获取该年度/月度计划的结束时间
                                            if (start_ms <= daily_ms && daily_ms <= ended_ms) //判断时间是否在这之内
                                            {
                                                $.each(plan_Item.content, function (index, content) {//遍历该计划中的每个具体事项
                                                    if (content["states"][planItem.date])
                                                        innerHtml += `<div class='list-group-item ticked' data-istoday="`+ isToday +`" data-plan-item-date="`+ planItem.date +`" data-plan-item-id="` + plan_Item.id + `" data-plan-item-content-item-id="` + content.id + `" >` + content.describe + `</div>`
                                                    else
                                                        innerHtml += `<div class='list-group-item unticked' data-istoday="`+ isToday +`" data-plan-item-date="`+ planItem.date +`" data-plan-item-id="` + plan_Item.id + `" data-plan-item-content-item-id="` + content.id + `" >` + content.describe + `</div>`
                                                })
                                            }
                                    })
                                    return innerHtml
                                })()
                                +
                            `</div>
                        </div>
                    <!-- 月度计划列表 -->
                    <div class="panel panel-default myPanel plansmyPanel mounthPlansmyPanel">
                            <div class="panel-heading header">
                                <h5>月度计划</h5>
                                <span class="glyphicon glyphicon-resize-small resize"></span>
                            </div>
                            <div class="panel-body list-group content">
                            `
                                +
                                (function () {
                                    // <div class='list-group-item unticked'>测试文字</div>
                                    var innerHtml = ""
                                    var daily_ms = daily_StartDate.getTime() //获取毫秒数
                                    $.each(allMonthlyPlans, function (index, plan_Item) {//遍历年度/月度计划
                                        if (isMonthlyPlan(plan_Item)) {//是年度/月度计划
                                            var start_ms = + new Date(plan_Item.startDate);//获取该年度/月度计划的开始时间
                                            var ended_ms = + new Date(plan_Item.endedDate);//获取该年度/月度计划的结束时间
                                            if (start_ms <= daily_ms && daily_ms <= ended_ms) //判断时间是否在这之内
                                            {
                                                $.each(plan_Item.content, function (index, content) {//遍历该计划中的每个具体事项
                                                    if (content["states"][planItem.date])
                                                        innerHtml += `<div class='list-group-item ticked' data-istoday="`+ isToday +`" data-plan-item-date="`+ planItem.date +`"  data-plan-item-id="` + plan_Item.id + `" data-plan-item-content-item-id="` + content.id + `" >` + content.describe + `</div>`
                                                    else
                                                        innerHtml += `<div class='list-group-item unticked' data-istoday="`+ isToday +`" data-plan-item-date="`+ planItem.date +`" data-plan-item-id="` + plan_Item.id + `" data-plan-item-content-item-id="` + content.id + `" >` + content.describe + `</div>`
                                                })
                                            }
                                        }
                                    })
                                    return innerHtml
                                })()
                                +
                            `
                            </div>
                        </div>
                        <!-- 当日计划列表 -->
                        <div class="panel panel-default myPanel plansmyPanel dalyPlansmyPanel">
                            <div class="panel-heading header">
                                <h5>当日计划</h5>
                                <span class="glyphicon glyphicon-resize-small resize"></span>

                                <!-- <span class="glyphicon glyphicon-plus add"></span> -->
                            </div>
                            <div class="panel-body list-group content">
                            `
                            +
                                (function () {
                                    var innerHtml = "";
                                    $.each(planItem.plans, function (key, item) {
                                        if (item.states)
                                            innerHtml += `<div class='list-group-item ticked'  data-istoday="`+ isToday +`" data-plan-item-date="`+ planItem.date +`" data-plan-item-id="`+ planItem.id +`"    data-plan-item-content-item-id="` + item.id + `" >` + item.describe + `</div>`
                                        else
                                            innerHtml += `<div class='list-group-item unticked'  data-istoday="`+ isToday +`" data-plan-item-date="`+ planItem.date +`" data-plan-item-id="`+ planItem.id +`"  data-plan-item-content-item-id="` + item.id + `" >` + item.describe + `</div>`
                                    })
                                    return innerHtml
                                })()
                            +
                            `</div>
                        </div>
                        <!-- 时间安排 -->
                        <div class="panel panel-default myPanel plansmyPanel timeManage">
                            <div class="panel-heading header">
                                <h5>时间安排</h5>
                                <span class="glyphicon glyphicon-resize-full resize"></span>
                                `
                                +
                                (function () {
                                    if (isToday) return `<span class="glyphicon glyphicon-pencil edit" data-toggle="modal"  data-target="#dailyPlan-timeManage-Editer"  data-plan-item-id="`+ planItem.id +`"></span>`;
                                    else return "";
                                })()
                                +
                                `
                                
                            </div>
                            <div class="panel-body list-group content">
                            `
                            +
                                (function () {
                                    // <div  class='list-group-item'><span class="time">00时</span><span class="texts">测试文字</span></div>
                                    var innerHtml = "";
                                    $.each(planItem.timeManage, function (key, timeManageItem) {
                                        innerHtml += `<div  class='list-group-item'  data-daily-item-timemanage-item-id="` + timeManageItem.id + `" ><span class="time"> ` + timeManageItem.startTime + ` - ` + timeManageItem.endedTime + ` </span><span class="texts">` + timeManageItem.describe + `</span></div>`
                                    })
                                    return innerHtml
                                })()
                            + 
                            `
                            </div>
                        </div>
                        <!-- Notes备忘录 -->
                        <div class="panel panel-default myPanel plansmyPanel  Notes">
                            <div class="panel-heading header">
                                <h5>备忘事项</h5>
                                <span class="glyphicon glyphicon-resize-full resize"></span>
                                `
                                +
                                (function () {
                                    if (isToday) return `<span class="glyphicon glyphicon-pencil edit" data-toggle="modal"  data-target="#dailyPlan-Notes-Editer"  data-plan-item-id="`+ planItem.id +`"></span>`;
                                    else return "";
                                })()
                                +
                                `
                            </div>
                            <div class="panel-body list-group content">
                            `
                            +
                                (function () {
                                    // <div  class='list-group-item'>测试文字</div>
                                    var innerHtml = "";
                                    $.each(planItem.Notes, function (key, Note) {
                                        innerHtml += `<div  class='list-group-item' data-daily-item-notes-item-id="` + Note.id + `" >` + Note.describe + `</div>`
                                    })
                                    return innerHtml
                                })()
                            + 
                            `
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `;
        return $(innerHtml);
    }

    async function loadMoreYearlyPlans(page,clear=false)
    {
        if (page==undefined) {
            page = yearlyPlanCurrentPage+=1;
        }else
        {
            yearlyPlanCurrentPage = page
        }
        var yearlyPlans = await getYearlyPlans(page)
        if(clear){
            $(".longly > .content > ul.row").html("")
        }
        $.each(yearlyPlans,function(index,planItem){
            $(".longly > .content > ul.row").append(creatPlanHTMLObj(planItem))
        })
    }
    async function loadMoreMonthlyPlans(page,clear=false)
    {
        if (page==undefined) {
            page = monthlyPlanCurrentPage+=1;
        }else
        {
            monthlyPlanCurrentPage = page
        }
        var monthlyPlans = await getMonthlyPlans(page)
        if(clear){
            $(".shortly > .content > ul.row").html("")
        }
        $.each(monthlyPlans,function(index,planItem){
            $(".shortly > .content > ul.row").append(creatPlanHTMLObj(planItem))
        })
    }
    async function loadMoreDailyPlans(page,clear=false)
    {
        if (page==undefined) {
            page = dailyPlanCurrentPage += 1;
        }else
        {
            dailyPlanCurrentPage = page
        }
        var dailyPlans = await geDailyPlans(page)
        var allYearlyPlans = await getAllYearlyPlans()
        var allMonthlyPlans = await getAllMonthlyPlans()
        if(clear){
            $(".daily > .content > ul.row").html("")
        }
        $.each(dailyPlans,function(index,planItem){
            var HTMLObj = creatDailyPlanHTMLObj(planItem,allYearlyPlans,allMonthlyPlans)
            if(HTMLObj.data("istoday")){
                $(".daily > .content > ul.row").prepend(HTMLObj)
                // $(".daily > .header  .add").hide()
            }
            else{
                $(".daily > .content > ul.row").append(HTMLObj)
            }
        })
    }
    $(".longly > .content").scroll(async function(){
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this).children().innerHeight() ) {
            console.log("到底了");
            await loadMoreYearlyPlans()
        }
    })
    $(".shortly > .content").scroll(async function(){
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this).children().innerHeight() ) {
            console.log("到底了");
            await loadMoreMonthlyPlans()
        }
    })
    $(".daily > .content").scroll(async function(){
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this).children().innerHeight() ) {
            console.log("到底了");
            await loadMoreDailyPlans()
        }
    })


    function getDays(strDateStart, strDateEnd) {//获取两个日期之间的天数console.log(getDays("2022-01-02","2022-01-03"))
        var strDateS = new Date(strDateStart);
        var strDateE = new Date(strDateEnd);
        var days = Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24
        return Math.ceil(days);//向上取整，半天当一天算
    }
    function countTrueAndFalse(content){
        var countTrue = 0;
        var countFalse = 0;
        $.each(content,function(index,item){
            $.each(item.states,function(key,value){
                if(value)
                {
                    countTrue++;
                }else
                {
                    countFalse++;
                }
            })
        })
        return {
            countTrue:countTrue,
            countFalse:countFalse
        };
    }



//日期选择
    $('.dateSelecter').daterangepicker({
        ranges:{
            '今日': [moment(), moment()],
            // '本月': [moment().startOf('month'), moment().endOf('month')],
            // '本周': [moment().startOf('weeks'), moment().endOf('weeks')],
            // '昨日': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            '最近5天': [moment(),moment().add(4, 'days')],
            '最近1周': [moment(),moment().add(1, 'weeks')],
            '最近1月': [moment(),moment().add(1, 'month')],
            '最近1年': [moment(),moment().add(1, 'years')],
            // '本月': [moment().startOf('month'), moment().endOf('month')],
            // '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        "locale": {
            "format": 'YYYY-MM-DD',
            "separator": " - ",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "起始时间",
            "toLabel": "结束时间'",
            "customRangeLabel": "自定义区间",
            "weekLabel": "W",
            "daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "firstDay": 1
        },
        "alwaysShowCalendars": true,
        autoApply: true,//自动应用更改
        autoUpdateInput:true,// 是否自动修改input.value
        // "minDate":moment(),
        "opens": "center",
        "drops": "down",
    }, function(start, end, label) {
        $('.dateSelecter').data("start",start.format('YYYY-MM-DD'))
        $('.dateSelecter').data("end",end.format('YYYY-MM-DD'))
        $('.dateSelecter').val(start.format('YYYY-MM-DD') + " - " + end.format('YYYY-MM-DD'))
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
    $('.dailySelecter').daterangepicker({
        "locale": {
            "format": 'YYYY-MM-DD',
            "separator": " - ",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "起始时间",
            "toLabel": "结束时间'",
            "customRangeLabel": "自定义区间",
            "weekLabel": "W",
            "daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "firstDay": 1
        },
        "alwaysShowCalendars": true,
        "singleDatePicker":true,
        autoApply: true,//自动应用更改,没有确认按钮，更简洁一些
        autoUpdateInput: true,// 是否自动修改input.value
        "startDate": moment(), //默认初始日期
        "endDate": moment(), //默认初始日期
        "minDate":moment(),
        "maxDate":moment(),
        "opens": "center",
        "drops": "down",
    }, function(start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
})


//-----------------------------------------------------end:应用逻辑---------------------------------------------------------
