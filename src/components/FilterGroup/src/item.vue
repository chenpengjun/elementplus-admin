<template>
  <div class="filter-item" :class="{ 'is-actived': isActived }" @click="handleClick">
    <slot>{{ props.label }}</slot>
  </div>
</template>
<script lang="ts" setup name="filterItem">
import { computed, inject, onMounted } from 'vue'
import { filterGroupContextKey } from './constant'
const props = defineProps({
  label: String,
  value: String
})

// 注入父组件
const filterGroup = inject(filterGroupContextKey)

// 计算是否选中
const isActived = computed(() => {
  if (filterGroup?.type === 'radio') {
    return filterGroup?.groupValue?.value === props.value
  }
  return filterGroup?.groupValue?.value?.includes(props.value)
})

// 点击事件
const handleClick = () => {
  filterGroup?.changeEvent(props.value)
}

// 向父组件添加
onMounted(() => {
  filterGroup?.registerItem(props.value)
})
</script>
<style lang="scss" scoped>
.filter-item {
  display: flex;
  padding: 4px 12px;
  font-size: 14px;
  background: var(--el-color-primary-light-9);
  border: 1px solid var(--el-color-primary-light-5);
  border-radius: 32px;
  color: var(--el-color-primary);
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 12px;
}
.filter-item:hover {
  color: #ffffff;
  background: var(--el-color-primary);
  border-color: var(--el-color-primary);
}
.filter-item.is-actived {
  color: #ffffff;
  background: var(--el-color-primary);
  border-color: var(--el-color-primary);
}
.filter-item:last-child {
  margin-right: 0px;
}
</style>
