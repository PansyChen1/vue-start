import Vue from 'vue'
import App from './App.vue'

// 完整引入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import "./assets/style/reset.css";
import "./assets/style/global.css";

import router from './routes';
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router, // 3. 配置路由到vue实例中
  store
}).$mount('#app')