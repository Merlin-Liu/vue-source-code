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
// import './vue-util-test'

// rootVm
/* ------------------------------------------------------------------------------------------------ */
const rootVm = new Vue({
  components: null,

  render(h) {
    return h('div', [
      h('button', {
        on: {
          click: () => {
            this.$store.dispatch('a/addA')
          }
        }
      },
      this.$store.state.a.countA),

      h('button', {
        style: {
          marginLeft: '10px'
        },
        on: {
          click: () => {
            this.$store.dispatch('a/addB')
          }
        }
      },
      this.$store.state.a.countB),

      h('hr'),

      h('button', {
        on: {
          click: () => {
            this.$store.dispatch('b/addA')
          }
        }
      },
      this.$store.state.b.countA),

      h('button', {
        style: {
          marginLeft: '10px'
        },
        on: {
          click: () => {
            this.$store.dispatch('b/addB')
          }
        }
      },
      this.$store.state.b.countB),

      h('hr'),

      h('button', {
        on: {
          click: () => {
            this.$store.dispatch('b/bChild/addA')
          }
        }
      },
      this.$store.state.b.bChild.countA),

      h('button', {
        style: {
          marginLeft: '10px'
        },
        on: {
          click: () => {
            this.$store.dispatch('b/bChild/addB')
          }
        }
      },
      this.$store.state.b.bChild.countB),
    ])
  },

  props: null,

  data: {},

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
