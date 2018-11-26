<template>
  <!-- 最外层容器 -->
   <div class="list-item editingClass editing">
     <!-- 自定义多选框 -->
     <label class="checkbox">
       <input type="checkbox" v-model="item.checked">
       <span class="checkbox-custom"></span>
     </label>
      <input type="text" v-model="item.text" placeholder="写点什么...">
     <a class="delete-item">
       <span class="icon-trash">
       </span>
     </a>
   </div>
</template>

<script>
export default {
  name: 'item',
  // 子组件显式的用props选项声明它期待获得的数据，
  // 这里声明 它想要一个叫做 'item'的数据
  props: ['item']
}
</script>

<style lang="less">
  @import '../common/style/list-items.less';

</style>
