export default {
    routes: [{
            path: "/",
            name: "Home",
            component: () => import('@/pages/Home')
        },
        {
            path: "/login",
            name: "Login",
            component: () => import('@/pages/Login')
        },
        {
            path: "/register",
            name: "Register",
            component: () => import('@/pages/Register')
        },
        {
            path: "/channels/:id",
            name: "Channels",
            component: () => import('@/pages/Channels')
        },
        {
            path: "/not-found",
            name: "404",
            component: () => import('@/pages/NotFound')
        }
    ],
    // 改变地址而不刷新页面
    mode: "history"
}