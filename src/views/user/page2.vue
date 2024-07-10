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

export default defineComponent({
    data() {
        return {
            tablePage: {
                pageNum: 1, // 第几页
                pageSize: 10, // 每页多少条
                total: 100 // 总记录数
            },
            pageSizes: [10, 20, 30]
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