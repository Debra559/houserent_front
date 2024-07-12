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
                    <router-view v-for="(home, index) in homeInfos" :key="index" :homeInfo="home"></router-view>
                </div>
            </el-main>
            <el-footer class="footer">
                <el-pagination class="pagin" background layout="total, sizes, prev, pager, next, jumper"
                    :current-page="tablePage.pageNum" :page-size="tablePage.pageSize" :page-sizes="pageSizes"
                    :total="tablePage.total" @size-change="handleSizeChange" @current-change="handlePageChange" />
            </el-footer>
            <br>
        </el-container>
    </div>
</template>



<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus'
import modulehome from './search_module.vue';
import houseApis from '@/apis/houseApis.js';

export default defineComponent({
    components: {
        'router-view': modulehome,
    },
    created() {
        this.getHomeInfo()
    },
    data() {
        return {
            tablePage: {
                pageNum: 1, // 第几页
                pageSize: 8, // 每页多少条
                total: 100 // 总记录数
            },
            pageSizes: [8, 12, 16],
            params: '',
            homeInfos: [],
        }
    },
    computed: {
        selectedValue() {
            return this.$store.getters.getSelectedValue;
        }
    },
    methods: {
        handlePageChange(currentPage) {
            this.tablePage.pageNum = currentPage
            this.getHomeInfo()
            // 在此刷新数据
        },
        handleSizeChange(pageSize) {
            this.tablePage.pageSize = pageSize
            this.getHomeInfo()
            // 在此刷新数据
        },
        async getHomeInfo() {
            this.params = this.selectedValue
            const res = await houseApis.GetHouseList(this.tablePage.pageNum, this.tablePage.pageSize)
            // if (res.code !== 200) {
            //     this.Error()
            // } else {

            //将image_list转换为列表
            res.map(item => {
                item.image_list = item.image_list.split(',');
                return item;
            });
            
            this.Success()
            this.homeInfos = res
            this.homeInfos.forEach(item => {
                if (item.status == "danger") {
                    item.label = "已出租"
                }
            });
            console.log(res)
            // }
        },
        // 数据请求成功的消息提醒
        Success() {
            ElMessage({
                message: '数据请求成功!',
                type: 'success',
            })
        },
        // 数据请求失败的消息提醒
        Error() {
            ElMessage({
                message: '数据请求失败!',
                type: 'danger',
            })
        }
    }
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
        flex-wrap: wrap;
        /* 允许自动换行 */
        gap: 60px;
        /* 设置子元素之间的间距 */
    }
}

.footer {
    display: flex;
    justify-content: center;

    .pagin {
        align-items: center;
    }
}
</style>