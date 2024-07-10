<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="up">
                    <h1>新房推荐</h1>
                </div>
            </el-header>
            <hr>
            <el-main class="content">
                <div class="router-views">
                    <router-view></router-view>
                    <router-view></router-view>
                    <router-view></router-view>
                    <router-view></router-view>
                    <router-view></router-view>
                    <router-view></router-view>
                    <router-view></router-view>
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>



<script>
import { defineComponent } from 'vue';

export default defineComponent({

})

</script>

<style lang="less" scoped>
.up {
    display: flex;
    justify-content: center;

    h1 {
        /* 水平居中 */
        align-items: center;
    }
}

.content {
    display: flex;
    justify-content: center;

    .router-views {
        display: flex;
        flex-direction: row;
        /* 设置水平排布 */
        flex-wrap: wrap; /* 允许自动换行 */
        gap: 60px;
        /* 设置子元素之间的间距 */
    }
}
</style>