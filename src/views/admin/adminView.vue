<template>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="logo" />
        <div class="title">后台管理</div>
        <a-menu v-model="selectedKeys" theme="dark" mode="inline" @click="handleClickItem">
          <a-menu-item key="/admin/home">
            <HomeOutlined />
            <span>首页</span>
          </a-menu-item>
         
          <a-sub-menu key="sub-user">
            <template #title>
              <span>
                <user-outlined />
                <span>用户管理</span>
              </span>
            </template>
            <a-menu-item key="/admin/user/list">用户列表</a-menu-item>
            <UserDeleteOutlined />
            <a-menu-item key="/admin/user/addUser">增加用户</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub-new">
            <template #title>
              <span>
                <team-outlined />
                <span>新闻管理</span>
              </span>
            </template>
            <a-menu-item key="/admin/user/new/list">新闻列表</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub-house">
            <template #title>
              <span>
                <team-outlined />
                <span>房屋管理</span>
              </span>
            </template>
            <a-menu-item key="/admin/user/house/list">房屋列表</a-menu-item>
            <a-menu-item key="1">分页查看</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub-liuyan">
            <template #title>
              <span>
                <team-outlined />
                <span>留言回复</span>
              </span>
            </template>
            <a-menu-item key="/admin/user/liuyan/list">留言回复列表</a-menu-item>
            <!-- <a-menu-item key="8"></a-menu-item> -->
          </a-sub-menu>
          <!-- <a-sub-menu key="sub4">
            <template #title>
              <span>
                <team-outlined />
                <span>查看合同列表</span>
              </span>
            </template>
            <a-menu-item key="9">查看合同信息</a-menu-item>
            <a-menu-item key="10">合同删除查询</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template #title>
              <span>
                <team-outlined />
                <span>查看管理员列表</span>
              </span>
            </template>
            <a-menu-item key="11">管理员增删查改</a-menu-item>
          </a-sub-menu> -->
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0 16px;margin-left: 16px;" >
          欢迎来到我们的管理员系统！
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',margin: '16px 0'}">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          HomeSystem ©2024 Created by Debra
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { UserOutlined, FileOutlined, TeamOutlined, HomeOutlined } from '@ant-design/icons-vue';

  import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickItem = (e) => {
  console.log('click', e);
  router.push({
    path: `${e.key}`
  });
};


  const collapsed = ref(false);
  const selectedKeys = ref(['1']);
  </script>
  <style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }

  .title {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  </style>