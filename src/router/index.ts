import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { staticRouter, errorRouter } from './staticRouter'
import { initDynamicRouter } from '@/router/dynamicRouter'
import NProgress from '@/config/nprogress'
import { useAuthStoreWithOut } from '@/store/modules/auth'

export const Layout = () => import('@/layout/index.vue')

const authStore = useAuthStoreWithOut()

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [...staticRouter, ...errorRouter],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(async (to, from, next) => {
  // 动态设置标题
  document.title = to.meta.title

  NProgress.start()

  if (!authStore.authMenuList.length) {
    await initDynamicRouter()
    return next({ ...to, replace: true })
  }
  next()
})

router.onError((error) => {
  NProgress.done()
  console.warn('路由错误', error.message)
})

router.afterEach(() => {
  NProgress.done()
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
