<template>
  <!--最外层容器-->
  <section class="container">
    <!--最左边容器 -->
    <section class="menu">
      <!--增加menu组件 -->
      <menus></menus>
    </section>
    <!--右边的容器-->
    <section class="content-container">
      <todo></todo>
    </section>
  </section>
</template>

<script>
// 导入menus组件，让其可以在template调用
import menus from './menus'
import todo from './todo'
// 导出这个组件，外部可以使用
export default {
  name: 'layouts',
  // 局部注册
  components: {
    menus,
    todo
  }
}
</script>

<style lang="less">
  @import "../common/style/layouts.less";

</style>
