<template>

<div>
<div>
  <a-button type="primary" class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">
    <PlusCircleOutlined />
    发布新房源
  </a-button>
    <a-modal v-model:open="open" title="请输入房源信息" size="size">
      <template #footer></template>
      <AddRent @close="open = false"/>
    </a-modal>
 
</div>
<div style="width:100%;display:inline-block;">
  <span v-for="(item, index) in houseList" :key="index" :house="item" style="width:20%;padding:8px;float:left;">
    <HouseCardComp :house="item" />
  </span>
</div>

</div>
</template>


<script setup>
import houseApis from '@/apis/houseApis.js';
import {ref, onBeforeMount} from 'vue';
import HouseCardComp from '@/components/house/HouseCardComp.vue';
import { DownloadOutlined,PlusCircleOutlined } from '@ant-design/icons-vue';
import AddRent from '@/components/add_rent.vue';
const pageNo = ref(1);
const pageSize = ref(10);
const houseList = ref([]);
const open = ref(false);
const size = ref('large');

//在组件挂在之前获取数据
onBeforeMount(async () => {
  const res = await houseApis.GetHouseList(pageNo.value, pageSize.value);
  
  //将image_list转换为列表
  res.map(item => {
    item.image_list = item.image_list.split(',');
    return item;
  });

  houseList.value = res;

})

const handleAdd = () => {
      open.value = true;    
};

</script>

