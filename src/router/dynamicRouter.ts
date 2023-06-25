import { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'
import router from './index'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

export const initDynamicRouter = async () => {
  const authStore = useAuthStore()
  try {
    await authStore.getAuthMenuList()
    authStore.flatMenuList.forEach((item) => {
      item.children && delete item.children
      if (item.componentPath && typeof item.componentPath == 'string') {
        item.component = modules['/src/views' + item.componentPath + '.vue']
      }
      if (item.meta.isFull) {
        router.addRoute(item as unknown as RouteRecordRaw)
      } else {
        router.addRoute('layout', item as unknown as RouteRecordRaw)
      }
    })
    return Promise.resolve()
  } catch (error) {
    console.log(error)
  }
}
