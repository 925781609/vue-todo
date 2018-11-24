import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/layouts'

// 全局注册Router组件，它会绑定到Vue实例里面
Vue.use(Router)

// 创建router实例，然后传`routes`配置
export default new Router({
  routes: [
    {
      // path为对应的url地址，比如'/user/:userId'
      path: '/',
      // name为对应的组件
      name: 'Layouts',
      component: Layouts
    }
  ]
})
