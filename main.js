// 拷贝的vue源码，即./node_modules/vue/dist/vue.esm.js
import Vue from './vue'
// 拷贝的vuex源码，即./node_modules/vuex/dist/vuex.esm.js
import Vuex from './vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: {
//       countA: 0,
//       countB: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count.countA++
//       state.count.countB++
//     }
//   },
//   strict: 1
// })

const handleClick = function () {
  alert('click')
}

const componentB = {
  name: 'componentB',
  template: `<div><p>componentName: componentB</p><!-- <p>componentPropsB.a: {{componentPropsB.a}}</p><p>componentPropsB.b: {{componentPropsB.b}}</p> --><p>showProp: {{showProp}}</p></div>`,

  props: {
    componentPropsB: {
      type: Object,
      default: () => ({
        a: 'a',
        b: 'b'
      })
    },
    showProp: {
      type: Boolean
    }
  }
}

const componentC = {
  name: 'componentC',

  render(h) {
    return h('p', 'this is componentC')
  }
}

const componentD = {
  name: 'componentD',

  render(h) {
    return h('p', {
      on: { click: handleClick }
    }, 'this is componentD')
  }
}

const componentE = {
  name: 'componentE',

  render(h) {
    return h('p', {
      on: { click: this.emitEvent }
    }, 'this is componentE')
  },

  methods: {
    emitEvent() {
      this.$emit('customEvent')
    }
  }
}

const componentVModel = {
  name: 'componentVModel',

  data () {
    return {
      inputVal: '121dsdsd'
    }
  },

  render (createElement) {
    const input = createElement('input', {
      // 使用domProps属性来绑定input原生value
      domProps:{
        value: this.inputVal
      },

      on: {
        // v-model
        input: ({target: {value}}) => {
          this.inputVal = value
        }
      }
    })

    const p = createElement('p', this.inputVal)

    return createElement('div', [input, p])
  }
}

const componentSlot = {
  name: 'componentSlot',

  template: `<div><slot></slot><slot name="slotA"></slot><slot name="slotB"></slot></div>`
}

const componentSlotScope = {
  name: 'componentSlotScope',

  template:
    '<div style="color: red;">' +
      '<slot text="i am text" :msg="msg"></slot>' +
      `<button @click="msg += 'g'">Change Msg</button>` +
    '</div>',

  data () {
    return {
      msg: 'i am msg'
    }
  }
}

const componentKeepAliveA = {
  name: 'componentKeepAliveA',

  template:
    '<div class="a">' +
      '<p>Comp A</p>' +
    '</div>'
}

const componentKeepAliveB = {
  name: 'componentKeepAliveB',

  template:
    '<div class="b">' +
      '<p>Comp B</p>' +
    '</div>'
}

const eventComponent = {
  name: 'eventComponent',

  render(createElement) {
    return createElement('button', {
      on: {
        click: this.handleClick
      }
    }, 'Click Me')
  },

  methods: {
    handleClick(e) {
      console.warn(e)
      console.log('button click!')
      this.$emit('select')
    }
  }
}

const childVue = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}} {{text}}</p>',
  data() {
    return {
      firstName: 1,
      lastName: 2,
      alias: 3,
      text: 4
    }
  },

  props: {
    a: Number
  },

  computed: {
    s () {
      return this.firstName + this.lastName
    }
  }
})

// childVue.mixin({
//   created() {
//     console.error('child mixin')
//   }
// })
// window.child = new childVue({
//   template: '<p>{{s}} {{sb}}</p>',
//   props: {
//     b: Number
//   },

//   computed: {
//     sb () {
//       return this.s + '1'
//     }
//   }
// }).$mount('#app')

// new childVue({
//   template: '<p>{{s}} {{sb}}</p>',
//   props: {
//     b: Number
//   },

//   computed: {
//     sb () {
//       return this.s + '1'
//     }
//   }
// }).$mount('#app2')

const rootVm = new Vue({
  components: {
  },

  // template:
  //   '<div>' +
  //     '<keep-alive>' +
  //       '<component :is="currentComponent"></component>' +
  //     '</keep-alive>' +

  //     '<button @click="change">Switch</button>' +
  //   '</div>',

  template: `<p>{{num}}<button @click="add">add</button></p>`,

  props: {
  },

  // render(h) {
  //   return h('p', [
  //     this.num,
  //     h('button', {on: { click: this.add }}, 'add')
  //   ])
  // },

  data: {
    num: 0
  },

  filters: {
  },

  computed: {
  },

  watch: {
  },

  methods: {
    add() {
      this.num += 1
    }
  },

  // store
})

// 挂载
rootVm.$mount('#app')

window.Vue = Vue
window.vm = rootVm
// window.store = store
window.childVue = childVue
