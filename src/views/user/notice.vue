<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="up">新闻公告</div>
                <div class="down">
                    <p @click="$router.push('home')">首页</p>/<p class="down-down" onclick="location.reload();">新闻公告</p>
                </div>
            </el-header>
            <el-main>
                <!-- 第一个新闻公告 -->
                <el-card shadow="hover" @click="$router.push('notice1')">
                    <p class="card-up">租房子要注意什么? 要交物业费吗?</p>
                    <el-icon>
                        <Clock />
                    </el-icon> 2024-07-09 10:02
                    <p>根据规定，物业管理服务费由物业管理公司按照物业管理合同的约定向业主收取。房屋出租后，如果业主与承租人在合同中对物业管理服务费的缴纳有具体规定的，以约定为准。因此，如果你和房东在租赁合同中约定了由谁付物业费，那么就按照合同来办。如果合同中没有...</p>
                    <template #footer>
                        <el-icon><PhoneFilled /></el-icon> (+86) 13654896654  &nbsp;
                        <el-icon><Briefcase /></el-icon> zhanggaobo@qq.com  &nbsp;
                        <el-icon><Platform /></el-icon> http://127.0.0.1:5173/notice1
                    </template>
                </el-card>

                <!-- 第二个新闻公告 -->
                <el-card shadow="hover" @click="$router.push('notice2')">
                    <p class="card-up">房东出租房子需要注意哪些细节？</p>
                    <el-icon>
                        <Clock />
                    </el-icon> 2024-07-10 10:24 
                    <p>一、房东出租房子需要注意哪些细节，房东出租房子需要注意以下细节:1.签署合同时候检验对方的身份证件，并且互相留身份证的复印件;2.签合同时写清租房日期以及房租到期时间，交租方式和交租日期;3.明确装饰装修的处理约定;4.注明违约条款和责任;5.作为房东，一定要做好...</p>
                    <template #footer>
                        <el-icon><PhoneFilled /></el-icon> (+86) 13654896654  &nbsp;
                        <el-icon><Briefcase /></el-icon> zhanggaobo@qq.com  &nbsp;
                        <el-icon><Platform /></el-icon> http://127.0.0.1:5173/notice2
                    </template>
                </el-card>

                <!-- 第三个新闻公告 -->
                <el-card shadow="hover" @click="$router.push('notice3')">
                    <p class="card-up">租房时如何辨别虚假房源信息？</p>
                    <el-icon>
                        <Clock />
                    </el-icon> 2024-07-11 10:56
                    <p>随着互联网的发展，大家可能会通过网站上的租房平台，网站论坛，贴吧等地方获取租房信息，或者是加入各种租房群，这些网络上的消息简略，无法确定房源的真实性和发布信息者的身份。除此之外有选择通过中介公司来获取房源信息，这样信息集中便捷。还有的可能偶尔...</p>
                    <template #footer>
                        <el-icon><PhoneFilled /></el-icon> (+86) 13654896654  &nbsp;
                        <el-icon><Briefcase /></el-icon> zhanggaobo@qq.com  &nbsp;
                        <el-icon><Platform /></el-icon> http://127.0.0.1:5173/notice3
                    </template>
                </el-card>

                 <!-- 第四个新闻公告 -->
                 <el-card shadow="hover" @click="$router.push('notice4')">
                    <p class="card-up">租房合同中的免责条款必然有效吗？房东应该如何合理规避出租房屋安全责任风险？</p>
                    <el-icon>
                        <Clock />
                    </el-icon> 2024-07-12 11:21
                    <p>免责条款并非必然有效，一般来说，经合同双方当事人充分协商确定的免责条款，不违反社会公共利益的，法律承认其效力。但根据民法典第四百九十七条及第五百零六条的规定，对有违公平原则、诚信原则、社会化公共利益的免责条款，法律是禁止的。具体到...</p>
                    <template #footer>
                        <el-icon><PhoneFilled /></el-icon> (+86) 13654896654  &nbsp;
                        <el-icon><Briefcase /></el-icon> zhanggaobo@qq.com  &nbsp;
                        <el-icon><Platform /></el-icon> http://127.0.0.1:5173/notice4
                    </template>
                </el-card>

            </el-main>
        </el-container>
    </div>
</template>


<style lang="less" scoped>
.el-header {
    height: 200px;
    width: 100%;
    background-color: rgb(26,43,77);
}

.up {
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    margin-top: 65px
}

.down {
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;

    /* 垂直居中 */
    p {
        cursor: pointer;
    }

    .down-down {
        color: #409EFF;
    }
}

.el-main {
    font-family: "Microsoft YaHei","sans-serif";
    font-weight: bold;
    .card-up {
        font-size: 25px;
    }

    .el-icon {
        margin-top: 5px
    }

    .el-card {
        max-width: 80%;
        margin: 0 auto;
        cursor: pointer;
        margin-bottom: 50px;
    }
}
</style>