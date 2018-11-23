<template>
  <!-- 菜单容器 -->
  <div class="list-todo">
    <!--单个菜单容器 -->
    <!-- v-for 列表渲染 -->
    <a class="list-todo list activeListClass" v-for="item in items" :key="item.title">
      <!--锁的图标 -->
      <!-- v-if 条件渲染-->
      <span class="icon-lock" v-if="item.locked"></span>
      <!-- 数字 -->
      <span class="count-list" v-if="item.count>0"> {{item.count}}</span>
      {{item.title}}
      <br/>
    </a>
    <!-- 新增菜单 -->
    <a class="link-list-new">
      <span class="icon-plus"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'menus.vue',
  // data 函数
  data () {
    return {
      items: [{title: '星期一', count: 3, locked: true}, // 菜单模拟数据
        {title: '星期二', count: 1, locked: true},
        {title: '星期三', count: 2, locked: true}
      ]
    }
  }
}
</script>

<style lang="less">
  @import '../common/style/menu.less';
</style>
