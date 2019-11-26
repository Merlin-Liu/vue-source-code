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
      state.count.countB++
    }
  },
  actions: {
    addA(store, a, b) {
      store.commit('incrementA')
    },

    addB(store) {
      store.commit('incrementB')
    }
  },
  strict: 1,
  getters: {
    a: s => s.count.countA,
    b: s => s.count.countB
  }
})
