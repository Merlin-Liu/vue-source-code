import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: {
      countA: 0,
      countB: 0
    }
  },
  mutations: {
    increment (state) {
      state.count.countA++
      state.count.countB++
    }
  }
})

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

  props: {
  },

  render(createElement) {
    return createElement('div', [
      createElement('p', 'current countA: ' + this.$store.state.count.countA),
      createElement('p', 'current countB: ' + this.$store.state.count.countB),
      createElement('p', 'current arrayData: ' + this.arrayData),
      createElement('p', 'current objectData: ' + this.objectData.c),
      createElement('button', {
        on: {
          click: () => {
            this.$store.commit('increment')
            const array = this.arrayData
            const lastIndex = array.length - 1
            this.arrayData.push(array[lastIndex] + 1)
          }
        }
      }, 'increment')
    ])
  },

  data: {
    arrayData: [1, 2, 3, 4, 5, 6],
    objectData: {
      a: 1,
      b: 10
    }
  },

  filters: {
  },

  computed: {
  },

  watch: {
  },

  methods: {
  },

  store
})

// 挂载
rootVm.$mount('#app')

window.Vue = Vue
window.vm = rootVm
