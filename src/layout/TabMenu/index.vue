<template>
  <div class="tabs-menu">
    <div class="tabs-menu_wrap">
      <el-tabs v-model="curTab" type="card" @tab-remove="handleRemove" @tab-click="handleTab">
        <el-tab-pane
          v-for="(item, index) in tabsMenuList"
          :key="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.close"
        >
          <template #label>
            <el-dropdown
              trigger="contextmenu"
              popper-class="tabs-dropdown"
              ref="dropdownRefs"
              @visible-change="handleVisibleChange(index)"
            >
              <span class="el-dropdown-link">
                {{ item.title }}
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    icon="Refresh"
                    @click="handleRefresh"
                    :disabled="item.path !== route.fullPath"
                    >刷新</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="CloseBold"
                    :disabled="!item.close"
                    @click="handleRemove(item.path)"
                    >关闭当前</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="CircleClose"
                    divided
                    :disabled="item.path !== route.fullPath"
                    @click="handleCloseOthers(item.path)"
                    >关闭其他</el-dropdown-item
                  >
                  <el-dropdown-item icon="Remove" @click="handleCloseAll"
                    >关闭所有</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="margin-right: 12px">
      <el-dropdown type="primary">
        <el-button type="primary" size="small"
          >更多
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="Refresh" @click="handleRefresh">刷新</el-dropdown-item>
            <el-dropdown-item
              :disabled="route.meta.isAffix"
              icon="CloseBold"
              @click="handleRemove(route.path)"
              >关闭当前</el-dropdown-item
            >
            <el-dropdown-item icon="CircleClose" divided @click="handleCloseOthers(route.path)"
              >关闭其他</el-dropdown-item
            >
            <el-dropdown-item icon="Remove" @click="handleCloseAll">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script name="TabMenu" lang="ts" setup>
import { ref, computed, onMounted, watch, Ref, nextTick } from 'vue'
import { TabPaneName, TabsPaneContext, DropdownInstance } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import { useAuthStore } from '@/store/modules/auth'
import { HOME_URL } from '@/config/index'
import { TabsMenuProps } from '@/store/modules/interface'

const emit = defineEmits(['refresh'])

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const authStore = useAuthStore()

// 当前选中的页面
const curTab = ref(route.fullPath)

// ref dropdown
const dropdownRefs: Ref<DropdownInstance[]> = ref([])

// 计算缓存的数据
const tabsMenuList = computed(() => {
  return appStore.tabsMenuList
})

watch(
  () => route.fullPath,
  () => {
    curTab.value = route.fullPath
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string,
      close: !route.meta.isAffix
    }
    appStore.addTabs(tabsParams)
    route.meta.isKeepAlive && appStore.addKeepAliveName(route.name as string)
  },
  { immediate: true }
)

// 删除事件
const handleRemove = (fullPath: TabPaneName) => {
  const name = appStore.tabsMenuList.filter((item) => item.path == fullPath)[0].name || ''
  appStore.removeKeepAliveName(name)
  appStore.removeTabs(fullPath as string, fullPath == route.fullPath)
}

// 点击
const handleTab = (tabItem: TabsPaneContext) => {
  const fullPath = tabItem.props.name as string
  router.push(fullPath)
}

// 刷新tab
const handleRefresh = () => {
  appStore.removeKeepAliveName(route.name as string)
  emit('refresh', false)
  nextTick(() => {
    appStore.addKeepAliveName(route.name as string)
    emit('refresh', true)
  })
}

// 关闭所有tab
const handleCloseAll = () => {
  appStore.tabsMenuList.forEach((dataItem) => {
    if (dataItem.close) {
      appStore.removeTabs(dataItem.path as string, false)
      appStore.removeKeepAliveName(dataItem.name as string)
    }
  })
  nextTick(() => {
    router.push(HOME_URL)
  })
}

// 关闭其他tab
const handleCloseOthers = (path: string) => {
  appStore.tabsMenuList.forEach((dataItem) => {
    if (dataItem.path !== path && dataItem.close) {
      appStore.removeTabs(dataItem.path as string, false)
      appStore.removeKeepAliveName(dataItem.name as string)
    }
  })
}

// dropdown
const handleVisibleChange = (index: number) => {
  dropdownRefs.value.forEach((dataItem, _index) => {
    if (_index !== index) {
      dropdownRefs.value[_index]?.handleClose()
    }
  })
}
const initTabs = () => {
  authStore.flatMenuList.forEach((item) => {
    if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
      const tabsParams = {
        icon: item.meta.icon,
        title: item.meta.title,
        path: item.path,
        name: item.name,
        close: !item.meta.isAffix
      }
      appStore.addTabs(tabsParams)
    }
  })
}
onMounted(() => {
  initTabs()
})
</script>
<style lang="scss">
.tabs-dropdown {
  margin-top: 10px;
}
</style>
<style lang="scss" scoped>
.tabs-menu {
  background-color: var(--el-bg-color);
  display: flex;
  align-items: center;
  &_wrap {
    position: relative;
    width: 100%;
    :deep(.el-tabs) {
      .el-tabs__header {
        box-sizing: border-box;
        height: 40px;
        padding: 0 10px;
        margin: 0;
        border-bottom-width: 0px;
        .el-tabs__nav-wrap {
          position: absolute;
          width: calc(100% - 10px);
          .el-tabs__nav {
            display: flex;
            border: none;
            .el-tabs__item {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #afafaf;
              border: none;
              .tabs-icon {
                margin: 1.5px 4px 0 0;
                font-size: 15px;
              }
              .is-icon-close {
                margin-top: 1px;
              }
              &.is-active {
                color: var(--el-color-primary);
                &::before {
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 0;
                  content: '';
                  border-bottom: 2px solid var(--el-color-primary) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
