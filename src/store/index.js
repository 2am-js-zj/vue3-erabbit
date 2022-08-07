import { createStore } from 'vuex'


// A模块
const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName(state) {
      return state.username + "!!!"
    }
  },
  mutations: {
    updateName(state) {
      state.username = 'lslsls'
    }
  },

}
// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName(state) {
      return state.username + "!!!"
    }
  },
  mutations: {
    updateName(state) {
      state.username = 'ls'
    }
  },
  actions: {
    updateName(context) {
      //做异步操作
      setTimeout(() => {
        context.commit('updateName')
      }, 1000);
    }
  },

}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
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
