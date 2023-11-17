import {createRouter,createWebHashHistory} from 'vue-router'
import loginVue from './components/login.vue'
import userVue from './components/user.vue'
import userInfoVue from './components/userInfo.vue'
import userRightVue from './components/userRight.vue'
import userDetailVue from './components/userDetail.vue'
const router = createRouter({
    history:createWebHashHistory(),
    linkActiveClass:'actived_by_router',
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:loginVue},
        {path:'/user',redirect:'/user/info',component:userVue ,children:[
            {path:'info',component:userInfoVue},
            {path:'right',component:userRightVue},
            {path:'detail/:userId',component:userDetailVue,props:true},
        ]},
    ]
})

router.beforeEach((to,before,next)=>{
    if(to.path != '/login' && !localStorage.getItem("token"))//若不是访问/login 且没有登陆token 则重定向到/login
    {
        next('/login')
    }else{
        next()//其他页面则允许访问(其实应当需要更复杂的判断)
    }
})
export default router