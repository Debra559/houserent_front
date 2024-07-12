<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
  <a-form-item ref="house_name" label="房源名称" name="house_name">
      <a-input v-model:value="formState.house_name" />
    </a-form-item>
    <a-form-item ref="owner_id" label="房东" name="owner_id">
    <!-- 房东选择器，显示信息，返回id -->
    <a-select
        v-model:value="formState.owner_id"
        show-search
        placeholder="姓名"
        :filter-option="false"
        :options="ownerList"
        @search="SearchOwner"
        @change="onChange"
        :default-active-first-option="false"
      >
      </a-select>
    </a-form-item>

    <a-form-item ref="price" label="月租金额" name="price">
      <a-input v-model:value="formState.price" />
    </a-form-item>

    <a-form-item ref="deposit" label="押金" name="deposit">
      <a-input v-model:value="formState.deposit" />
    </a-form-item>

    <a-form-item label="出租状态" name="status">
      <a-radio-group v-model:value="formState.status">
        <a-radio value="1">在出租</a-radio>
        <a-radio value="2">已出租</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="租赁类型" name="rent_method">
      <a-radio-group v-model:value="formState.rent_method">
        <a-radio value="整租">整租</a-radio>
        <a-radio value="合租">合租</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item ref="floor" label="楼层" name="floor">
      <a-input v-model:value="formState.floor" />
    </a-form-item>


    <a-form-item ref="num_bed" label="卧室数" name="num_bed">
      <a-input v-model:value="formState.num_bed" />
    </a-form-item>

    <a-form-item ref="num_bath" label="卫生间数" name="num_bath">
      <a-input v-model:value="formState.num_bath" />
    </a-form-item>

    <a-form-item label="其他" name="type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="elevator">电梯</a-checkbox>
        <a-checkbox value="2" name="parking">停车位</a-checkbox>
        <!-- <a-checkbox value="3" name="parking"></a-checkbox> -->
      </a-checkbox-group>
    </a-form-item>
    

    <a-upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        upload
      </a-button>
    </a-upload>



    <a-form-item label="房源描述" name="description">
      <a-textarea v-model:value="formState.description" />
    </a-form-item>
  </a-form>
  <a-button style="width:100%;" type="primary" @click="handleClick">提交</a-button>
</template>
<script setup>
import { reactive, ref, toRaw } from 'vue';
import houseAddApis from '@/apis/houseAddApis.js';
import userApis from '@/apis/userApis.js';
import {message} from 'ant-design-vue';
const rangeConfig = {
rules: [
  {
    type: 'array',
    required: true,
    message: '输入格式错误',//Why
  },
],
};

const emit = defineEmits(['close']);


const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  house_name: '',
  address: 'hh',
  price: '',
  deposit: '',
  owner_id: null,
  image_list:[],
  area:500,
  elevator:1,
  parking_space:1,
  floor: '',
  num_bed: '',
  num_bath: '',
  status: 1,
  rent_method: '',
  image_list: '',
  description: '',
});
const rules = {
  name: [
    {
      required: true, // 表示这个字段是必填项
      message: '触发字段验证', // 当字段验证失败时显示的消息
      trigger: 'change', // 触发验证的事件，这里是当字段值改变时触发验证
    },
    {
      min: 1,
      max: 20,
      message: 'Length should be 1 to 20',
      trigger: 'blur',
    },
  ],
  owner_id: [
    {
      required:true, 
      message: '触发字段验证', 
      trigger: 'change', 
    }
  ],
  price: [
    {
      required:true, 
      message: '触发字段验证', 
      trigger: 'change', 
    }
  ],
  deposit: [
   { required:true, 
      message: '触发字段验证', 
      trigger: 'change', }
  ],
  status: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
   rent_method: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  address: [  //不知道如何存储
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],

  type: [  //有'1'就是有楼梯  有'2'就是有停车位
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
    floor: [  //不知道如何存储
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
    num_bed: [  //不知道如何存储
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
    num_bath: [  //不知道如何存储
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],

  description: [
    {
      required: false,
      message: 'Please input activity form',
      trigger: 'blur',
    },
  ],
};


const handleClick = () => {
  console.log("fromState:", formState);
  //name不可以使用  formState.num正常

  //res返回的是后端的数据
  houseAddApis.Addhouse(formState)
  .then((res) => {
    message.success("提交成功！");
    emit('close');
  });

};



const fileList = ref([
 
]);



/**
 * 房东信息选择器
 */
const ownerList = ref([]);
const SearchOwner = async (name) => {
  ownerList.value = (await userApis.SearchOwnerInfoList(name))
                  .map(item => ({
                    label: `${item.name}（${item.user_id}）`,
                    value: item.user_id,
                  }));
  console.log(ownerList.value);
}


</script>


<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>