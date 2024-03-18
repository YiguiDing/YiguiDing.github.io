import { createApp } from 'vue'
import axios from 'axios'
import 'bootstrap'
import './style.css'
import App from './App.vue'

axios.defaults.baseURL='https://escook.cn' //配置axios
let app = createApp(App)
app.config.globalProperties.$http=axios //在this上全局挂载axios



app.mount('#app')
