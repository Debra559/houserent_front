
//后台路由
export const adminRoute = {
    
    path: '/admin',
    component: () => import('../views/admin/adminView.vue'),
    redirect: '/admin/home',
    children: [
        {
            path: 'home',
            component: () => import('../views/admin/homeView.vue')
        },
        {
            path: 'user',
            children: [
                {
                    path: 'list',
                    component: () => import('../views/admin/user/userList.vue')
                },
                {
                    path: 'addUser',
                    component: () => import('../views/admin/user/userAdd.vue')}
               
            ]
        },
        {
            path:'house',
            children:[
                {
                    path:'list',
                    component: () => import("@/views/admin/house/houseList.vue"),
                },
              
                {
                    path: 'detail/:id',
                    component: () => import('@/views/admin/house/houseDetail.vue'),
                }
            ]
        }
    ]

}
