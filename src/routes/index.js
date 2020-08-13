import Vue from 'vue';
import VueRouter from 'vue-router';
import config from './config'

// 1. 安装
Vue.use(VueRouter)

// 2. 配置
var router = new VueRouter(config);

export default router;