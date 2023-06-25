import { defineStore } from 'pinia'
import { store } from '../index'
import { getShowMenuList, getFlatMenuList, getAllBreadcrumbList } from '@/utils/index'
import { getAuthMenuListApi } from '@/api/login'
import { PROJECT_NAME } from '@/config/index'
export const useAuthStore = defineStore({
  id: `${PROJECT_NAME}-auth`,
  state: () => {
    return {
      // 菜单权限列表
      authMenuList: []
    }
  },
  getters: {
    showMenuList: (state) => getShowMenuList(state.authMenuList),
    flatMenuList: (state) => getFlatMenuList(state.authMenuList),
    breadcrumbList: (state) => getAllBreadcrumbList(state.authMenuList)
  },
  actions: {
    async getAuthMenuList() {
      const { data } = await getAuthMenuListApi()
      this.authMenuList = data
    }
  }
})

export const useAuthStoreWithOut = () => {
  return useAuthStore(store)
}
