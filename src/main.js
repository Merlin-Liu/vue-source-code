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

const componentE = Vue.component('componentE', {
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
})

const vm = new Vue({
  components: {
    componentD,
  },

  props: {
    // rootProps: {
    //   type: Object,
    //   required: false,
    //   default() {
    //     return {
    //       a: 1,
    //       b: 2
    //     }
    //   }
    // },
    // boolProps: {
    //   type: Boolean,
    //   default: false
    // }
  },

  data: {
    messageA: 'hello A',
    // messageB: 'hello B',
    // objData: {
    //   a: 1,
    //   b: 2
    // },
    // show: true,

    // showProp: 'show-prop',
    // componentProps: {
    //   a: 1,
    //   b: 2
    // },
    // $a: 1,
    // _a: 2
  },

  filters: {
  //   filterA(val) {
  //     return 'filters: ' + val
  //   }
  },

  computed: {
    // computedA() {
    //   return 'computedA: ' + this.messageA
    // },

    // computedB() {
    //   return 'computedB: ' + this.messageA
    // },

    // computedC() {
    //   return 'computedC: ' + this.messageA
    // }
  },

  render (createElement) {
    return createElement('div', [
      createElement('p', {
        id: 'btn',
        on: { click: this.clickHandle }
      }),

      createElement('component-d'),

      createElement('component-e', {
        on: {
          customEvent: [this.onCustomEvent, handleClick],
          input: this.onCustomEvent
        }
      })
    ])
  },

  watch: {
  },

  methods: {
    clickHandle() {
      alert(1111)
    },

    onCustomEvent() {
      alert('customEvent')
    }
  }
})
.$mount('#app')

window.Vue = Vue
window.vm = vm
window.componentE = componentE
