import Vue from 'vue'

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

const rootVm = new Vue({
  components: {
    componentSlotScope
  },

  template:
    '<component-slot-scope>' +
      `<template slot-scope="slotData"><p>{{slotData.text}}</p><p>{{slotData.msg}}</p></template>` +
    '</component-slot-scope>',

  props: {
  },

  data: {
  },

  filters: {
  },

  computed: {
  },

  watch: {
  },

  methods: {
  }
})

// 挂载
rootVm.$mount('#app')

window.Vue = Vue
window.vm = rootVm
