<template>
  <a-modal v-model="open" title="登录" ok-text="登录" cancel-text="取消" @ok="handleOk">
        <a-input v-model="formState.username" placeholder="用户名" style="margin-top: 10px;" />
      <a-input-password v-model="formState.password" placeholder="请输入密码" style="margin-top: 10px;">
      <template #iconRender="v">
        <EyeTwoTone v-if="v"></EyeTwoTone>
        <EyeInvisibleOutlined v-else></EyeInvisibleOutlined>
      </template>
    </a-input-password>
    <!-- <a-button type="primary" @click="handleOk">登录</a-button> -->
    <div style="margin-top: 10px;">还没账号？
    <a-button type="primary" @click="RegisterModal">点击注册</a-button></div>
    </a-modal>
</template>

<script setup>
import axios from 'axios';
import {message} from 'ant-design-vue';
import { reactive, ref } from 'vue';
import {useStore} from 'vuex';
import tokenUtils from '../../utils/token.js';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons-vue';

// const value3 = ref<string>('');


// const visible = ref<boolean>(true);
const store = useStore();


const open = ref(false);
const formState = reactive({
  username: '',
  password: '',
});

const handleOk = async () => {
  const res= 
    ( await axios.request({
    url: 'http://localhost:8080/login',
    method: 'post',
    data: formState,
  })
  ).data;
  if(res.data){
    //登录成功
    message.success("登录成功！");
    open.value = false;
    store.commit("setUserInfo", res.data);
    tokenUtils.setToken(res.data.token);
  }else{
    message.warning("登录失败！" + res.msg);
  }
  return true;
};

const showModal = () => {
  open.value = true;
};


const RegisterModal = () => {
  open.value = false;
  store.commit("setRegisterModal", true);
  
};


// 暴露showModal
defineExpose({
  showModal,
  handleOk
});

</script>