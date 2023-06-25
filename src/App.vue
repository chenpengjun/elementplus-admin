<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" name="App" setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
onMounted(() => {
  appStore.setCssVarTheme()
})
</script>
<style scoped lang="scss"></style>
