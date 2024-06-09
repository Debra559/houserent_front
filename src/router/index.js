import { createRouter, createWebHistory } from "vue-router";
import { adminRoute } from "./admin.js";
import { userRoute } from "./use.js";

const routes = [ adminRoute , userRoute ];
console.log(routes);

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    // 检查用户是否已登录
    const user = localStorage.getItem('user');
    if (to.meta.requiresAuth && !user) {
        next('/login');
    } else {
        next();
    }
})

export default router;