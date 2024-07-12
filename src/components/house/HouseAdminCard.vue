<template>
  <!-- <div class="card">
      {{props.house.house_name}} | <a-button @click="visible = true">显示图片</a-button>
      <div style="display: none"> -->
          <!-- 图片组 -->
          <!-- <a-image-preview-group :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
          <a-image v-for="(item, index) in props.house.image_list"
              :src="item"
          />
          </a-image-preview-group>
      </div>
  </div> -->

<!-- <a-row>

  <a-col :span="8" v-for="(item,index) in props.house.image_list" :key="item">
  <a-card  hoverable style="width: 400px">
  <template #cover>
    <img
      :alt="props.house.house_name"
      :src="item"
    />
  </template>
  <template #extra>
     <a-tag key="primary" :color="props.house.house_type == 1?'red':'green'">{{props.house.house_type == 1 ?'已出租':'未出租'}}</a-tag>
  </template>
  <template #actions>
    <setting-outlined key="setting" />
    <edit-outlined key="edit" />
    <ellipsis-outlined key="ellipsis" />
  </template>

  <a-card-meta :title="props.house.house_name" :description="props.house.description">
   
          <el-icon><Location /></el-icon>
    
  </a-card-meta>
</a-card>
</a-col>
</a-row> -->
<div class="card">
  <div class="Cardtitle">
    {{props.house.house_name}} 
    
  </div>
   <div class="CardImage">
    <a-image :src="props.house.image_list[0]"
      />
  </div>
  <div style="display: none">
      <!-- 图片组 -->
      <a-image-preview-group :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
      <a-image v-for="(item, index) in props.house.image_list"
          :src="item"
      />
      </a-image-preview-group>
  </div>

  <div class="Carddescription">
    <a-button @click="visible = true">显示图片</a-button>
    {{props.house.description}}
  </div>
</div>


</template>


<script setup>
import {ref} from 'vue';




const props = defineProps(['house']);

const visible = ref(false);

</script>

<style scoped>

.card{
  background-color: #f0f0f0;
  padding: 12px;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 400px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.card .Cardtitle{
  width:300px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card .CardImage{
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
}

.Card .Carddescription{
  font-size: 16px;
  font-weight: normal;
  color: #666;
  margin-top: 10px;
}

</style>










