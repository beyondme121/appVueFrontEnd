// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/////////////////////////// import ///////////////////////////
// 解决IE浏览器不显示内容的问题(Vuex中使用的Promise,es6相关语法,低版本ie浏览器不支持)
import 'babel-polyfill'

// 导入全局的css样式
import '@/assets/css/reset.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 导入import第三方库
import MintUI, { MessageBox, Toast, Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入import自定义全局组件()

// 引入指令


Vue.config.productionTip = false


/////////////////////////// 实例挂载 ///////////////////////////
Vue.use(MintUI)
// Vue实例原型挂载

// 注册全局组件


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
