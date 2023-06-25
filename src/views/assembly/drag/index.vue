<template>
  <el-card class="content-box">
    <draggable
      v-model="dragList"
      class="list-group"
      item-key="id"
      animation="300"
      @end="handleDragEnd"
      tag="transition-group"
      :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
    >
      <template #item="{ element }">
        <li class="list-group-item">
          {{ element.name }}
        </li>
      </template>
    </draggable>
  </el-card>
</template>
<script name="drag" lang="ts" setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'
const dragList = ref([
  {
    name: 'draggable',
    order: 2
  },
  {
    name: 'for',
    order: 4
  },
  {
    name: 'based',
    order: 6
  },
  {
    name: 'vue.draggable',
    order: 1
  },
  {
    name: 'vue.js 2.0',
    order: 5
  },
  {
    name: 'component',
    order: 3
  },
  {
    name: 'on',
    order: 7
  },
  {
    name: 'Sortablejs',
    order: 8
  }
])
const handleDragEnd = () => {
  console.log(dragList.value)
}
</script>
<style lang="scss">
.list-group {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 4px;
  width: 320px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 16px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: move;
  margin-bottom: -1px;
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
</style>
