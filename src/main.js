// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// webapp预编译入口
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 挂载id，这个实例下所有的内容都会在index.html 一个id为app的div下显示
  el: '#app',
  // 注入路由配置
  router,
  // 注入组件
  components: { App },
  // 配置根模板 即打开页面显示那个组件
  template: '<App/>'
})
