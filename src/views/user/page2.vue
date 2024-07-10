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
import module from './search_module.vue';

export default defineComponent({
    components: {
        'router-view': module,
    },
    created() {
        this.getHomeInfo()
    },
    data() {
        return {
            tablePage: {
                pageNum: 1, // 第几页
                pageSize: 10, // 每页多少条
                total: 100 // 总记录数
            },
            pageSizes: [10, 20, 30],
            params: [],
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
            // 在此刷新数据
        },
        handleSizeChange(pageSize) {
            this.tablePage.pageSize = pageSize
            // 在此刷新数据
        },
        async getHomeInfo() {
            this.params = this.selectedValue
            const response = await axios.get('http://127.0.0.1:4523/m1/4798977-4453240-default/home/info', {
                params: this.params
            });
            const res = response.data; // 获取响应数据
            if (res.code !== 200) {
                this.Error()
            } else {
                this.Success()
                this.homeInfos = res.data
                this.homeInfos.forEach(item => {
                    if (item.status == "danger") {
                        item.label = "已出租"
                    }
                });
                console.log(res.data)
            }
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