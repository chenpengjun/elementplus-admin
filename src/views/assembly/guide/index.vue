<template>
  <el-card class="content-box">
    <el-button type="primary" size="small" @click="handleOpen" class="test">打开引导页</el-button>
  </el-card>
</template>
<script lang="ts" setup name="guide">
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

const handleOpen = (event) => {
  // 必须加
  event.stopPropagation()
  const driver = new Driver()
  //driver.highlight('.test')
  driver.defineSteps([
    {
      element: '.el-menu',
      popover: {
        title: 'Title for the Popover',
        description: 'Description for it',
        position: 'right'
      }
    },
    {
      element: '.toolBarLeft_collapse',
      popover: {
        title: 'Title for the Popover',
        description: 'Description for it',
        position: 'right'
      }
    },
    {
      element: '.toolBarLeft_breadcrumb',
      popover: {
        title: 'Title for the Popover',
        description: 'Description for it',
        position: 'right'
      }
    }
  ])
  driver.start()
}
</script>
