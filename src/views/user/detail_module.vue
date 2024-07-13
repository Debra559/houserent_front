<template>
    <div class="all">

        <!-- 图片的div -->
        <div class="changeImg">
            <el-carousel class="changeImgIn">
                <el-carousel-item v-for="item in homeInfo.image_list" :key="item">
                    <el-image :src="item" class="img" :fit="fill"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- 图片下各部分数量的div -->
        <div class="Imgdown">
            <el-card shadow="always" class="Imgdown_card">
                <div class="Imgdown_content">
                    <el-image src="../../../public/image/homeInfoImg/卧室家具.png" class="Imgdown_img"></el-image>
                    <p>卧室: {{ homeInfo.num_bed }} 个</p>
                </div>
            </el-card>
            <el-card shadow="always" class="Imgdown_card">
                <div class="Imgdown_content">
                    <el-image src="../../../public/image/homeInfoImg/洗手间.png" class="Imgdown_img"></el-image>
                    <p>洗手间: {{ homeInfo.num_bath }} 个</p>
                </div>
            </el-card>
            <el-card shadow="always" class="Imgdown_card">
                <div class="Imgdown_content">
                    <el-image src="../../../public/image/homeInfoImg/房屋面积.png" class="Imgdown_img"></el-image>
                    <p>面积: {{ homeInfo.area }} m²</p>
                </div>
            </el-card>
        </div>

        <!-- 房屋简介的div -->
        <div class="homeBriefly">
            <el-card shadow="always" class="homeBriefly_card">
                <p class="homeBriefly_card_up">详细介绍</p>
                <p>{{ homeInfo.description }}</p>
            </el-card>
        </div>

        <!-- 业主信息的div -->
        <div>
            <el-card shadow="always" class="homeOwn">
                <p class="homeOwn_font">联系人员</p>
                <div class="homeOwn_img">
                    <el-image :src="homeInfo.faceImg" fit="fill" class="img"></el-image>
                </div>
                <p class="homeOwn_font_down">员工: {{ homeInfo.owner }}</p>
                <div class="homeOwn_phone homeOwn_font_down">
                    <div>
                        <el-icon>
                            <PhoneFilled />
                        </el-icon>
                        {{ homeInfo.phone }}
                    </div>
                    <div>
                        <el-icon>
                            <WalletFilled />
                        </el-icon>
                        {{ homeInfo.email }}
                    </div>
                </div>
            </el-card>
        </div>

        <!-- 预定的div -->
        <div class="scheduled">
            <el-card shadow="always" class="scheduled_card">
                <p class="scheduled_card_font1">立即预订</p>
                <p class="scheduled_card_font2">预定时长</p>
                <el-select v-model="value" clearable placeholder="请选择" class="scheduled_card_change">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" class="scheduled_card_button" @click="goContract">确定</el-button>
            </el-card>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';

export default defineComponent({
    data() {
        return {
            options: [{
                value: '1个月',
                label: '1个月'
            }, {
                value: '6个月',
                label: '6个月'
            }, {
                value: '1年',
                label: '1年'
            }, {
                value: '2年',
                label: '2年'
            }, {
                value: '5年',
                label: '5年'
            }],
            value: ''
        }
    },
    props: {
        homeInfo: {
            type: Object,
            required: true,
        },
    },
    methods: {
        goContract() {
            if (this.value == '') {
                this.Error();
            } else {
                this.$router.push({ name: 'UpContract', params: { selectedValue: this.value } });
            }
        },
        // 预定时长必须选择的消息提醒
        Error() {
            ElMessage({
                message: '预定时长必须选择!',
                type: 'error',
            })
        }
    },
});
</script>

<style lang="less" scoped>
.all {
    background-color: rgb(245, 245, 245);

    .el-carousel__item {
        opacity: 0.75;
        margin: 0;
        text-align: center;
    }

    .changeImg {
        width: 100%;

        .changeImgIn {
            width: 40%;
            margin-top: 2%;
            margin-left: 15%;
        }
    }

    .Imgdown {
        margin-left: 15%;
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;


        .Imgdown_card {
            width: 30%;
            margin-bottom: 20px;
            margin-top: 5%;
            background-color: white;
        }

        .Imgdown_content {
            display: flex;
            /* 使子元素水平排列 */
            align-items: center;
            /* 使子元素垂直居中 */
            font-weight: bold;
        }

        .Imgdown_img {
            height: 30px;
            margin-right: 10px;
            /* 添加间距 */
        }
    }

    .homeBriefly_card {
        margin-left: 15%;
        width: 40%;
        margin-bottom: 3%;
        background-color: white;

        .homeBriefly_card_up {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 5px;
            margin-top: -5px;
        }
    }

    .homeOwn {
        background-color: white;
        height: 52%;
        width: 20%;
        position: absolute;
        top: 12%;
        right: 15%;

        .homeOwn_font {
            font-size: 17px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .homeOwn_img {
            display: flex;
            justify-content: center;
            /* 水平居中 */
            height: 30px;
            user-select: none;
            /* 防止用户选择文本 */
            pointer-events: none;
            /* 禁止鼠标事件，包括拖动 */
        }

        .img {
            height: 200px;
            /* 设置图片高度 */
            width: auto;
            /* 保持图片宽高比 */
        }

        .homeOwn_font_down {
            font-size: 17px;
            font-weight: bold;
            margin-top: 70%;
            margin-left: 5%;
        }

        .homeOwn_phone {
            font-size: 15px;
            margin-top: 5px;
            margin-left: 10px;
        }
    }

    .scheduled_card {
        height: 200px;
        width: 20%;
        position: absolute;
        top: 68%;
        right: 15%;

        .scheduled_card_font1 {
            font-size: 17px;
            font-weight: bold;
        }

        .scheduled_card_font2 {
            font-size: 13px;
            font-weight: bold;
            margin-top: 20px;
        }

        .scheduled_card_change {
            margin-top: 10px;
        }

        .scheduled_card_button {
            width: 100%;
            margin-top: 5%;
        }
    }
}
</style>