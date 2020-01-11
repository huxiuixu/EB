// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App'
import router from './router'
import {Button,message,Layout} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.component(Button.name, Button)
Vue.component(Button.Group.name,Button.Group)
Vue.prototype.$message = message
Vue.use(Antd);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
