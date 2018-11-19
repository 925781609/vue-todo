<template>
  <!-- 菜单容器 -->
  <div class="list-todo">
    <!--单个菜单容器 -->
    <a class="list-todo activeListClass list">
      <!--锁的图标 -->
      <span class="icon-lock"></span>
      <!-- 数字 -->
      <span class="count-list">1</span>
      <!-- 菜单内容 -->
      星期一
    </a>
    <!-- 新增菜单 -->
    <a class="link-list-new">
      <span class="icon-plus"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'menus.vue'
}
</script>

<style lang="less">
  @import '../common/style/menu.less';
</style>
