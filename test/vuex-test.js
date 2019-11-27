// 拷贝的vue源码，即./node_modules/vue/dist/vue.esm.js
import Vue from '../vue'

// 拷贝的vuex源码，即./node_modules/vuex/dist/vuex.esm.js
import Vuex from '../vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,

  state: {
    countA: 0,
    countB: 0
  },

  mutations: {
    incrementA (state) {
      state.countA++
    },
    incrementB (state) {
      state.countB++
    }
  },

  actions: {
    addA ({commit}) {
      commit('incrementA')
    },
    addB ({commit}) {
      commit('incrementB')
    }
  }
}

const moduleBchild = {
  namespaced: true,

  state: {
    countA: 0,
    countB: 0
  },

  mutations: {
    incrementA (state) {
      state.countA++
    },
    incrementB (state) {
      state.countB++
    }
  },

  actions: {
    addA ({commit}) {
      commit('incrementA')
    },
    addB ({commit}) {
      commit('incrementB')
    }
  }
}

const moduleB = {
  namespaced: true,

  state: {
    countA: 0,
    countB: 0
  },

  mutations: {
    incrementA (state) {
      state.countA++
    },
    incrementB (state) {
      state.countB++
    }
  },

  actions: {
    addA ({commit}) {
      commit('incrementA')
    },
    addB ({commit}) {
      commit('incrementB')
    }
  },

  // 嵌套模块
  modules: {
    bChild: moduleBchild
  }
}

// vuex实例
export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },

  // strict: true, // 🔥注意，注意官网文档描述

  // getters: {
  //   a: s => s.count.countA,
  //   b: s => s.count.countB
  // },

  devtools: false
})
