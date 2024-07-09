<script setup>
import { onMounted } from 'vue';
import {message} from 'ant-design-vue';
import tokenUtils from '../../utils/token.js';
import { useRouter } from 'vue-router';
import AddressRearch from '../../components/Search.vue'
import axios from 'axios';
import { useStore } from 'vuex';
import '../../index.css'
import Page2 from './page2.vue';
import { defineComponent, ref } from 'vue';

const store = useStore();


//生命周期函数，启动时执行
onMounted(async () => {
  const token = tokenUtils.getToken();
  console.log(token);
  if(token == null || token.length == 0){
    tokenUtils.delToken();
  }else{
    //有token，用token去获取用户信息
    const res = (await axios.request({
      url: "http://localhost:8808/user",
      method: "get",
      params:{
        token,
      }
    })).data;

    if(res.data){
      //这个token有效
      store.commit("setUserInfo", res.data);
    }else{
      message.warning("Token无效！");
      tokenUtils.delToken();
    }
  }
})
const searchText = ref('');

</script>

<template>
      <div class="P-home">
        <div class="P-home-page1">
                <div class="P-homepage1-tit" >houseSystem</div>
                <div class="P-homepage1-intro">欢迎来到 houseSystem</div>
                <div style="width:400px;margin: 0 auto;margin-top: 20px;">
                  <!-- <d-search icon-position="left" style="width: 400px" size="lg" placeholder="请输入区域"></d-search> -->
                  <AddressRearch></AddressRearch>
                  <d-button type="primary" style="margin-top: 10px;" @click="$router.push('search')">搜索</d-button>
                </div>
          </div>
        
      </div>
    <!-- <Page2></Page2> -->
</template>
 

 
<style >



</style>