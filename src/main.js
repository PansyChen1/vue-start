import Vue from 'vue'
import App from './App.vue'

// 完整引入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import "./assets/style/reset.css";
import "./assets/style/global.css";

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
