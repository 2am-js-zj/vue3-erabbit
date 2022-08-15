<template>
  <div class="home">
    <button @click="$store.state.user.profile.token=1">登录</button>
    <button @click="$store.state.user.profile.token=''">退出</button>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
</style>
