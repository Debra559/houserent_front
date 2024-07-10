<template>
    <el-card class="content-card" shadow="hover" @click="$router.push('detailup')">
        <div class="flex gap-2 mt-4">
            <el-tag :key="this.homeInfo.item.label" :type="this.homeInfo.item.type" effect="dark" round>
                {{ this.homeInfo.item.label }}
            </el-tag>
        </div>
        <img src="../../../public/image/房屋内部图.jpg" alt="房屋内部图">
        <div class="content-card-inner">
            <h3>{{ this.homeInfo.format }}</h3>
            <div class="icon">
                <el-icon>
                    <Location />
                </el-icon> {{ this.homeInfo.address }}
            </div>
            <div class="money">
                ￥ {{ this.homeInfo.money }} / 月
            </div>
        </div>
        <hr>
        <div class="content-card-down">
            <el-icon>
                <House />
            </el-icon>&nbsp;卧室:{{ this.homeInfo.bedchamber }}&nbsp;&nbsp;
            <el-icon>
                <Lock />
            </el-icon>&nbsp;洗手间:{{ this.homeInfo.toilet }}&nbsp;&nbsp;
            <el-icon>
                <School />
            </el-icon>&nbsp;面积:{{ this.homeInfo.area }}
        </div>
    </el-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    created() {
        // this.getHomeInfo()
    },
    data() {
        return {
            homeInfo: {
                address: '武汉 > 洪山区 > 光谷',
                format: '王家湾 二环 两房',
                money: '4000',
                bedchamber: '3',
                toilet: '2',
                area: '148.0 m²',
                item: {
                    type: 'success', label: '正在出租'
                }
            }
        }
    },
    methods: {
        // async getHomeInfo() {
        //     const { data: res } = await this.$http.get('home/info', { params: this.params })
        //     if (res.code !== '200') {
        //         this.$message.error('请求会员数据错误!')
        //     } else {
        //         this.info = res.data.list
        //     }
        // },
        getHomeInfo() {
            this.homeInfo.item.type = 'danger',
            this.homeInfo.item.label = '已出租'
        }
    }
})

</script>

<style lang="less" scoped>
.content-card {
    cursor: pointer;
    height: 400px;
    width: 300px;
    position: relative;

    .content-card-inner {
        width: 100%;

        h3 {
            margin-left: 23%;
            margin-top: 6px;
        }

        .icon {
            margin-top: -15px;
            font-size: 12px;
        }

        .money {
            margin-top: 20px;
            font-size: 25px;
            color: #409EFF;
        }
    }

    .mt-4 {
        position: absolute;
        right: 10px;
        top: 10px;
    }


    img {
        margin-top: -20px;
        margin-left: -20px;
        width: 310px;
        height: 200px;
        user-select: none;
    }
}
</style>