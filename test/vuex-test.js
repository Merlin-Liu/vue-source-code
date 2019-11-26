// 拷贝的vue源码，即./node_modules/vue/dist/vue.esm.js
import Vue from '../vue'

// 拷贝的vuex源码，即./node_modules/vuex/dist/vuex.esm.js
import Vuex from '../vuex'

Vue.use(Vuex)

// vuex实例
export default new Vuex.Store({
  state: {
    count: {
      countA: 0,
      countB: 0
    }
  },
  mutations: {
    incrementA (state) {
      state.count.countA++
    },

    incrementB (state) {
      console.warn(111111)
      state.count.countB++
      console.warn(111111)
    }
  },
  actions: {
    addA(store) {
      store.commit('incrementA')
    },

    addB(store) {
      store.commit('incrementB')
    }
  },
  strict: true,
  // getters: {
  //   a: s => s.count.countA,
  //   b: s => s.count.countB
  // }
})
