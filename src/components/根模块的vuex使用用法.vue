<template>
<!-- vue2.0 需要根元素，vue3.0可以是代码片段 Fragment -->
  <div class="container">
    首页
    <!-- 1.使用根模块state -->
    {{$store.state.username}}
    <!-- 2.使用根模块的getters的数据 -->
    <p>{{$store.getters['newName']}}</p>
    <button @click="updateName">更新数据</button>
  </div>
</template>
<script>
// useStore 拿到仓库实例
import { useStore } from 'vuex'
export default {
  setup() {
    // 1.使用根模块state的数据
    // 使用vuex仓库
    const store = useStore()
    console.log(store.state.username)

    // 2.使用根模块的getters数据
    console.log(store.getters.newName)

    const updateName = () => {
      // 3.提交根模块mutations方法
      // store.commit('updateName')

      // 4.调用actions函数
      store.dispatch('updateName')
    }

    return { updateName }
  }
}
</script>
<style scoped lang="less">

</style>
