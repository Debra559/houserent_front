import { compareTime } from 'element-plus/es/components/time-select/src/utils.mjs';

//用户路由
export const userRoute = {
    
    path: '/',
    component: () => import('../views/user/home.vue'),
    redirect: '/home',
    children: [
        {
            path: 'home',
            component: () => import('../views/user/page1.vue')
        },
        {
            path: 'login',
            component: () => import('../views/user/login.vue')
        },
        {
            path: 'register',
            component: () => import('../views/user/register.vue')
        },
        {
            path: 'notice',
            component: () => import('../views/user/notice.vue')
        },
        {
            path: 'notice1',
            component: () => import('../views/user/notice1.vue')
        },
        {
            path: 'notice2',
            component: () => import('../views/user/notice2.vue')
        },
        {
            path: 'notice3',
            component: () => import('../views/user/notice3.vue')
        },
        {
            path: 'notice4',
            component: () => import('../views/user/notice4.vue')
        },
        {
            path: 'search',
            component: () => import('../views/user/page2.vue'),
            redirect: 'result',
            children: [
                {
                    path: '/result',
                    component: () => import('../views/user/search_module.vue')
                },
              ]
        },
        {
            path: 'detailup',
            component: () => import('../views/user/page2.vue'),
            redirect: 'detail',
            children: [
                {
                    path: '/detail',
                    component: () => import('../views/user/detail_module.vue')
                },
              ]
        },
    ]

}
