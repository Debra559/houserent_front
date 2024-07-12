<template>
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="name" label="租客姓名" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="选择房源" name="region">

        <a-select v-model:value="formState.region" placeholder="请选择哪套房">
          <a-select-option value="shanghai">西苑1栋101</a-select-option>
          <a-select-option value="beijing">西苑1栋102</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item name="租赁时间" label="租赁时间" v-bind="rangeConfig">
      <a-range-picker v-model:value="formState['range-picker']" value-format="YYYY-MM-DD" />
    </a-form-item>
    <a-form-item ref="money" label="月租金额" name="money">
        <a-input v-model:value="formState.money" />
      </a-form-item>
      <a-form-item label="Instant delivery" name="delivery">
        <a-switch v-model:checked="formState.delivery" />
      </a-form-item>
      <a-form-item label="Activity type" name="type">
        <a-checkbox-group v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="租赁类型" name="resource">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">整租</a-radio>
          <a-radio value="2">合租</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Activity form" name="desc">
        <a-textarea v-model:value="formState.desc" />
      </a-form-item>
    </a-form>
  </template>
  <script setup>
  import { reactive, ref, toRaw } from 'vue';


  const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: '请选择时间',//Why
    },
  ],
};

  const formRef = ref();
  const labelCol = {
    span: 5,
  };
  const wrapperCol = {
    span: 13,
  };
  const formState = reactive({
    name: '',
    region: undefined,
    date1: undefined,
    
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  });
  const rules = {
    name: [
      {
        required: true,
        message: 'Please input Activity name',
        trigger: 'change',
      },
      {
        min: 1,
        max: 20,
        message: 'Length should be 1 to 20',
        trigger: 'blur',
      },
    ],
    region: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
      },
    ],
    date1: [
      {
        required: true,
        message: 'Please pick a date',
        trigger: 'change',
        type: 'object',
      },
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change',
      },
    ],
    resource: [
      {
        required: true,
        message: 'Please select activity resource',
        trigger: 'change',
      },
    ],
    desc: [
      {
        required: true,
        message: 'Please input activity form',
        trigger: 'blur',
      },
    ],
  };
  const onSubmit = () => {
    formRef.value
      .validate()
      .then(() => {
        console.log('values', formState, toRaw(formState));
      })
      .catch(error => {
        console.log('error', error);
      });


    //先传到后端 然后加入数据库
      

  };
  const resetForm = () => {
    formRef.value.resetFields();
  };
  </script>