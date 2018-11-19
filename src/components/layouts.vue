<template>
  <!--最外层容器-->
  <section class="container">
    <!--最左边容器 -->
    <section class="menu">
      <!--增加menu组件 -->
      <menus></menus>
    </section>
    <!--右边的容器-->
    <section class="content-container"></section>
  </section>
</template>

<script>
// 导入menus组件，让其可以在template调用
import menus from './menus'
// 导出这个组件，外部可以使用
export default {
  name: 'layouts',
  components: {
    menus
  }
}
</script>

<style lang="less">
  @import "../common/style/layouts.less";

</style>
