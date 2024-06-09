
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
        }
    ]

}
