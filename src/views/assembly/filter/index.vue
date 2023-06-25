<template>
  <el-card class="content-box">
    <div style="display: flex; align-items: center; margin-top: 20px">
      <label for="" style="width: 80px; text-align: right">单选：</label>
      <filter-group v-model="filterModel" type="radio">
        <filter-item label="全部" value="" />
        <filter-item label="状态1" value="1">
          <template #default>
            <el-icon :size="16">
              <Edit />
            </el-icon>
            状态1插槽
          </template>
        </filter-item>
        <filter-item label="状态2" value="2" />
        <filter-item label="状态3" value="3" />
        <filter-item label="状态4" value="4" />
        <filter-item label="状态5" value="5" />
      </filter-group>
    </div>
    <div style="display: flex; align-items: center; margin-top: 20px">
      <label for="" style="width: 80px"></label>
      filterModel的值 '{{ filterModel }}'
    </div>
    <div style="display: flex; align-items: center; margin-top: 20px">
      <label for="" style="width: 80px">单选超出：</label>
      <filter-group v-model="filterModelMax" type="radio" style="width: 806px">
        <filter-item label="全部" value="" />
        <filter-item label="状态1" value="1">
          <template #default>
            <el-icon :size="16">
              <Edit />
            </el-icon>
            状态1插槽
          </template>
        </filter-item>
        <filter-item label="状态2" value="2" />
        <filter-item label="状态3" value="3" />
        <filter-item label="状态4" value="4" />
        <filter-item label="状态5" value="5" />
        <filter-item label="状态6" value="6" />
        <filter-item label="状态7" value="7" />
        <filter-item label="状态8" value="8" />
        <filter-item label="状态9" value="9" />
        <filter-item label="状态10" value="10" />
        <filter-item label="状态11" value="11" />
        <filter-item label="状态12" value="12" />
      </filter-group>
    </div>
    <div style="display: flex; align-items: center; margin-top: 20px">
      <label for="" style="width: 80px"></label>
      filterModelMax的值 '{{ filterModelMax }}'
    </div>
    <div style="display: flex; align-items: center; margin-top: 20px">
      <label for="" style="width: 80px; text-align: right">多选：</label>
      <filter-group v-model="filterModelCheckbox" type="checkbox">
        <filter-item label="全部" value="" />
        <filter-item label="状态1" value="1">
          <el-icon :size="16">
            <Edit />
          </el-icon>
          状态1插槽1
        </filter-item>
        <filter-item label="状态2" value="2" />
        <filter-item label="状态3" value="3" />
        <filter-item label="状态4" value="4" />
        <filter-item label="状态5" value="5" />
      </filter-group>
    </div>
    <div style="display: flex; align-items: center; margin-top: 20px">
      <label for="" style="width: 80px"></label>
      filterModelCheckbox的值 {{ filterModelCheckbox }}
    </div>
  </el-card>
</template>
<script lang="ts" setup name="filterGroups">
import { ref } from 'vue'
const filterModel = ref(null)
const filterModelMax = ref('12')
const filterModelCheckbox = ref([''])
</script>
