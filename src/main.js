// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
// 导入样式
import 'element-ui/lib/theme-chalk/index.css';
//重置样式
import '@/assets/css/reset.css'

// 插件// 开发插件:
import MyHttpServer from '@/plugins/http.js'

// import axios from 'axios'
// Vue.prototype.$https=axios;


Vue.use(ElementUI);
Vue.use(MyHttpServer)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
