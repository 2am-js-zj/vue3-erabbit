import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

// 独立的三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'




export default createStore({
  modules: {
    cart,
    category,
    user,
  },
  plugins: [
    // 默认存储在localstorage
    createPersistedstate({
      // 本地存储 key 名字
      key: 'erabbit-client-pc-store',
      // 指定需要本地存储的模块
      paths: ['user', 'cart']
    })
  ]
})




// vue2.0 创建仓库 new Vuex.store({})
// vue3.0 创建仓库 createStore({})

// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName(state) {
//       return state.username + '!!!!'
//     }
//   },
//   mutations: {
//     updateName(state, payload) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName(context) {
//       //做异步操作
//       setTimeout(() => {
//         context.commit('updateName', 'zs')
//       }, 1000);
//     }
//   },
//   modules: {
//   }
// })
