<template>
  <div class="toolBarLeft">
    <!-- 折叠按钮 -->
    <el-icon class="toolBarLeft_collapse hover-trigger" @click="handleCollapse">
      <component :is="appStore.isCollapse ? 'expand' : 'fold'" />
    </el-icon>
    <!-- 面包屑 -->
    <div
      :class="['toolBarLeft_breadcrumb', !appStore.breadcrumbIcon && 'no-icon']"
      id="toolBarLeft_breadcrumb"
    >
      <el-breadcrumb :separator-icon="ArrowRight">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
            <div class="el-breadcrumb__inner is-link" @click="handleBCrumbClick(item, index)">
              <el-icon class="breadcrumb-icon" v-if="item.meta.icon && appStore.breadcrumbIcon">
                <component :is="item.meta.icon" />
              </el-icon>
              <span class="breadcrumb-title">{{ item.meta.title }}</span>
            </div>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script name="ToolBarLeft" setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

import { useAppStore } from '@/store/modules/app'
import { useAuthStore } from '@/store/modules/auth'
import { useRouter, useRoute } from 'vue-router'
const appStore = useAppStore()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

interface MenuOptions {
  path: string
  name: string
  component?: string | (() => Promise<unknown>)
  redirect?: string
  meta: MetaProps
  children?: MenuOptions[]
}
interface MetaProps {
  icon: string
  title: string
  activeMenu?: string
  isLink?: string
  isHide: boolean
  isFull: boolean
  isAffix: boolean
  isKeepAlive: boolean
}

const breadcrumbList = computed(() => {
  let breadcrumbData = authStore.breadcrumbList[route.matched[route.matched.length - 1].path] ?? []
  // 🙅‍♀️不需要首页面包屑可删除以下判断
  if (breadcrumbData[0].path !== '/home/index') {
    breadcrumbData = [
      { path: '/home/index', meta: { icon: 'HomeFilled', title: '首页' } },
      ...breadcrumbData
    ]
  }
  return breadcrumbData
})

// 折叠事件
const handleCollapse = () => {
  appStore.setCollapse(!appStore.isCollapse)
}

// 面包屑点击事件
const handleBCrumbClick = (item: MenuOptions, index: number) => {
  if (index !== breadcrumbList.value.length - 1) router.push(item.path)
}
</script>
<style lang="scss" scoped>
.toolBarLeft {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
  &_collapse {
    margin-right: 20px;
    font-size: 22px;
    cursor: pointer;
  }
  &_breadcrumb {
    display: flex;
    align-items: center;
    padding-right: 50px;
    overflow: hidden;
    mask-image: linear-gradient(90deg, #000000 0%, #000000 calc(100% - 50px), transparent);
    .el-breadcrumb {
      white-space: nowrap;
      display: flex;
      align-items: center;
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          display: flex;
          align-items: center;
          .breadcrumb-icon {
            margin-top: 2px;
            margin-right: 6px;
            font-size: 16px;
          }
          .breadcrumb-title {
            //margin-top: 3px;
          }
        }
        :deep(.el-breadcrumb__separator) {
          position: relative;
          top: -1px;
        }
      }
    }
  }
}
</style>
