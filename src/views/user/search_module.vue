<template>
    <el-card class="content-card" shadow="hover"  @click="$router.push('detailup')">
        <img src="../../../public/image/房屋内部图.jpg" alt="房屋内部图">
        <div class="content-card-inner">
            <h3>{{ type }}</h3>
            <div class="icon">
                <el-icon>
                    <Location />
                </el-icon> {{ address }}
            </div>
            <div class="money">
                ￥ {{ money }} / 月
            </div>
        </div>
        <hr>
        <div class="content-card-down">
            <el-icon>
                <House />
            </el-icon>&nbsp;卧室:{{ bedchamber }}&nbsp;&nbsp;
            <el-icon>
                <Lock />
            </el-icon>&nbsp;洗手间:{{ toilet }}&nbsp;&nbsp;
            <el-icon>
                <School />
            </el-icon>&nbsp;面积:{{ area }}
        </div>
    </el-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            address: '武汉 > 洪山区 > 光谷',
            type: '王家湾 二环 两房',
            money: '4000',
            bedchamber: '3',
            toilet: '2',
            area: '148.0 m²'
        }
    }
})

</script>

<style lang="less" scoped>

.content-card {
    cursor: pointer;
    height: 400px;
    width: 300px;

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


    img {
        margin-top: -20px;
        margin-left: -20px;
        width: 310px;
        height: 200px;
        user-select: none;
    }
}
</style>