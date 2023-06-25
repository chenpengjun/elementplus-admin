<template>
  <el-card class="content-box">
    <span class="text">详情页</span>
    <span class="text">params:{{ route.params }}</span>
  </el-card>
</template>
<script lang="ts" setup name="tabsDetail">
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
const route = useRoute()
const appStore = useAppStore()

appStore.setTabsTitle(route.path, `详情页：${route.params.id as string}`)
</script>
