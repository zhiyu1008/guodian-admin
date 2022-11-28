import { createApp } from 'vue'
import router from './route'
import App from './App.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/message.scss'
const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')