<template>
  <div>
   <a-button type="primary" class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button>
   <a-modal v-model:open="open" title="请输入租客信息" @ok="handleOk">
     <AddRentuser/>
   </a-modal>
   <a-table bordered :data-source="dataSource" :columns="columns">
     <template #bodyCell="{ column, text, record }">
       <template v-if="column.dataIndex === 'housename'">
         <div class="editable-cell">
           <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
             <a-input v-model="editableData[record.key].name" @pressEnter="save(record.key)" />
             <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
           </div>
           <div v-else class="editable-cell-text-wrapper">
             {{ text || ' ' }}
             <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
           </div>
         </div>
       </template>
       <template v-else-if="column.dataIndex === 'operation'">
         <a-popconfirm
           v-if="dataSource.length"
           title="Sure to delete?"
           @confirm="onDelete(record.key)"
         >
           <a>Delete</a>
         </a-popconfirm>
       </template>
     </template>
   </a-table>
  </div>
 </template>
 <script setup>
 import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
 import axios from 'axios';
 import { computed, reactive, ref } from 'vue';
 import { cloneDeep } from 'lodash-es';
 import  AddRentuser from '../../../components/add_rentuser.vue';

 const open = ref(false);
 const columns = ref([
 {
     title: '序号',
     dataIndex: 'key',
   },
   {
     title: '房源',
     dataIndex: 'housename',
     width: '30%',
   },
   {
     title: '租客',
     dataIndex: 'rentername',
   },
   {
     title: '租赁时间',
     dataIndex: 'time',
   },
   {
     title: '租赁金额',
     dataIndex: 'money'
   },
   {
     title: '信息',
     dataIndex: 'info'
   },
   {
     title: '操作',
     dataIndex: 'operation',
   },
   
 ]);
 const dataSource = ref([
   {
     key: '0',
     housename: 'Edward King 0',
     rentername: 32,
     address: 'London, Park Lane no. 0',
     status: 'Uneditable',
     money: 1000,
     time: '2022-01-01',
   },

 ]);
 const count = computed(() => dataSource.value.length + 1);
 const editableData = reactive({});
 const edit = key => {
   editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
 };
 const save = key => {
   Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
   delete editableData[key];
 };
 const onDelete = key => {
   dataSource.value = dataSource.value.filter(item => item.key !== key);
 };
 const handleAdd = () => {
     open.value = true;
   
 };
 const handleOk = e => {
 console.log(e);
 const newData = {
     key: `${count.value}`,
     housename: `Edward King ${count.value}`,
     age: 32,
     address: `London, Park Lane no. ${count.value}`,
   };
   dataSource.value.push(newData);

 open.value = false;
};
 </script>
 <style lang="less" scoped>
 .editable-cell {
   position: relative;
   .editable-cell-input-wrapper,
   .editable-cell-text-wrapper {
     padding-right: 24px;
   }
 
   .editable-cell-text-wrapper {
     padding: 5px 24px 5px 5px;
   }
 
   .editable-cell-icon,
   .editable-cell-icon-check {
     position: absolute;
     right: 0;
     width: 20px;
     cursor: pointer;
   }
 
   .editable-cell-icon {
     margin-top: 4px;
     display: none;
   }
 
   .editable-cell-icon-check {
     line-height: 28px;
   }
 
   .editable-cell-icon:hover,
   .editable-cell-icon-check:hover {
     color: #108ee9;
   }
 
   .editable-add-btn {
     margin-bottom: 8px;
   }
 }
 .editable-cell:hover .editable-cell-icon {
   display: inline-block;
 }
 </style>
 