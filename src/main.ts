import { createApp } from 'vue'

import '@/styles/reset.scss'
import '@/styles/common.scss'

import * as Icons from '@element-plus/icons-vue'

// 引入store
import { setupStore } from '@/store/index'

// 引入路由
import { setupRouter } from '@/router/index'

// 引入组件
import { setupComponents } from '@/components/'

import App from './App.vue'
// 创建实例
const setupAll = async () => {
  const app = createApp(App)

  setupStore(app)

  setupComponents(app)

  setupRouter(app)

  Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons])
  })
  app.mount('#app')
}
setupAll()

