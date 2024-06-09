<script setup>
import { onMounted } from 'vue';

import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import tokenUtils from './utils/token.js'
import { message} from 'ant-design-vue'

const store = useStore()
const router = useRouter()

onMounted(async () => {

    document.title = '房屋租赁系统'

    const token = tokenUtils.getToken();
    console.log(token);

    if(token == null || token.length == 0){
        tokenUtils.delToken();
    }else{
        //有token,用token去获取用户信息
        const res = (await axios.request(
            {
                url: "http://localhost:8808/user",
                method: "get",
                params:{
                    token,
                }
            }
        )).data;

        if(res.data)
        {
            store.commit('setUser', res.data)
            store.commit('setToken', token)
        }else{
            message.warning("Token无效！");
            tokenUtils.delToken();
        }
    }
    
   
})

</script>

<template>
    <router-view></router-view>
</template>

