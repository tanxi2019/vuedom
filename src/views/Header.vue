<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
   :router="true">
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的产品</template>
      <el-menu-item index="/product">选项1</el-menu-item>
      <el-menu-item index="/product">选项2</el-menu-item>
      <el-menu-item index="/product">选项3</el-menu-item>
      <el-submenu index="/product">
        <template slot="title">选项4</template>
        <el-menu-item index="/product">选项1</el-menu-item>
        <el-menu-item index="/product">选项2</el-menu-item>
        <el-menu-item index="/product">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="people">个人中心</el-menu-item>
    <el-menu-item index="/teach">核心技术</el-menu-item>
    <el-menu-item index="/about">关于我们</el-menu-item>
  </el-menu>
</template>

<script>
  // eslint-disable-next-line
  /* eslint-disable */
  export default {
    data: function () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect: function (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style scoped>
</style>
