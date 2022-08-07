<template>
  <div class="container">
    <!-- 1.使用A模块的state数据 -->
    <p>{{$store.state.moduleA.username}}</p>
    <!-- 使用A模块的getters数据 -->
    <p>{{$store.getters.newName}}</p>


    <!-- 使用B模块的state数据 -->
    <p>{{$store.state.moduleB.username}}</p>
    <!-- 使用B模块的getters数据 -->
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>

  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const mutationsFn = () => {
      store.commit('moduleB/updateName')
    }

    const actionsFn = () => {
      store.dispatch('moduleB/updateName')
    }


    return { mutationsFn,actionsFn }
  }
}
</script>
<style scoped lang="less">

</style>
