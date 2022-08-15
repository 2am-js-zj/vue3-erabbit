<template>
  <!-- 顶部通栏 -->
  <nav><AppNavbar /></nav>
  <!-- 头部组件 -->
  <header><AppHeader /></header>
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer><AppFooter /></footer>
</template>
<script>
import AppNavbar from '@/components/app-navbar.vue';
import AppHeader from '@/components/app-header.vue';
import AppFooter from '../components/app-footer.vue';
export default {
    components: { AppNavbar, AppHeader, AppFooter }
}
</script>
<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
