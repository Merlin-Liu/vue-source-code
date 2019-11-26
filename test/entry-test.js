// 拷贝的vue源码，即./node_modules/vue/dist/vue.esm.js
import Vue from '../vue'

// vue-router例子
// import router from './vue-router-test'

// vuex例子
import store from './vuex-test'

// component例子
// import {
//   componentWithPorps,
//   componentVModel,
//   componentSlot,
//   componentSlotScope,
//   componentKeepAliveA,
//   componentKeepAliveB,
//   eventComponent
// } from './component-test'

// vue其他静态方法例子
import './vue-util-test'

// rootVm
/* ------------------------------------------------------------------------------------------------ */
const rootVm = new Vue({
  components: null,

  render(h) {
    return h('div', [
      h('button', {
        on: {
          click: () => {
            this.$store.commit('incrementA')
          }
        }
      },
      this.$store.getters.b),

      h('button', {
        on: {
          click: () => {
            this.$store.commit('incrementB')
          }
        }
      },
      this.$store.getters.b)
    ])
  },

  props: null,

  data: null,

  filters: null,

  computed: null,

  watch: null,

  methods: null,

  // router,

  store
})

// 挂载
rootVm.$mount('#app')
/* ------------------------------------------------------------------------------------------------ */

window.Vue = Vue
window.vm = rootVm
