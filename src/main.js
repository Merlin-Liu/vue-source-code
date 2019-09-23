import Vue from 'vue'

const handleClick = function () {
  alert('click')
}

// const componentA = Vue.component('componentA', {
//   name: 'componentA',
//   template: `<div><p>componentName: componentA</p><!-- <p>componentPropsA.a: {{componentPropsA.a}}</p><p>componentPropsA.b: {{componentPropsA.b}}</p> --><p>showProp: {{showProp}}</p></div>`,

//   props: {
//     componentPropsA: {
//       type: Object,
//       default: () => ({
//         a: 'a',
//         b: 'b'
//       })
//     },
//     showProp: {
//       type: Boolean
//     }
//   }
// })

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
  // template: `
  //   <div>
  //     <!-- props -->
  //     <!-- <p>{{boolProps}}</p>
  //     <component-a :show-prop="showProp"></component-a>
  //     <p>{{rootProps.a}}</p>
  //     <p v-if="show">{{messageA}}</p>
  //     <p v-else>{{messageB}}</p>
  //     <p>{{rootProps.b}}</p> -->

  //     <!-- methods -->
  //     <!-- <button @click="clickHandle">Click Me</button> -->

  //     <!-- data -->
  //     <p>{{messageA}}</p>
  //     <p>{{messageB}}</p>
  //     <!-- <p>{{objData.a}}</p> -->

  //     <!-- computed -->
  //     <!-- <p>{{computedA}}</p>
  //     <p>{{computedB}}</p>
  //     <p>{{computedC}}</p> -->
  //   </div>
  // `,

  // template: `<div>
  //   <!-- this is a comment -->
  //   <p>1121</p>
  //   <!--[if !IE]>-->
  //   <link href="non-ie.css" rel="stylesheet"></link>
  //   <!--<![endif]-->
  // </div>`,

  template: `
  <div>
    <p id="btn" @click="clickHandle">{{messageA}}</p><component-d></component-d><component-e @customEvent="onCustomEvent"></component-e>
  </div>`,

  components: {
    componentD,
    // componentE
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

  // render (h) {
    // return h(
    //   'header',
    //   { class: 'message' },
    //   [
    //     h('button',
    //       {
    //         on: {
    //           click: this.clickHandle
    //         }
    //       },
    //     'Chnage messageA'),
    //     h('p', this.messageA),
    //     h('p', this.messageB)
    //   ]
    // )

  //   return h('div', [h(componentC)])
  // },

  // watch: {
    // messageA: [
    //   (newVal, oldVal) => {
    //     console.log(1)
    //   },

    //   (newVal, oldVal) => {
    //     console.log(2)
    //   },

    //   'changeHandle',

    //   {
    //     handler: 'messageAHandle',
    //     immediate: true
    //   }
    // ],

    // 'objData.c': (newVal, oldVal) => {
    //   console.log(newVal)
    // }
  // },

  methods: {
    clickHandle() {
      // this.messageA = this.messageA + 'A'
      alert(1111)
    },

    onCustomEvent() {
      alert('customEvent')
    }

    // changeHandle(newVal, oldVal) {
    //   console.log('messageAHandle')
    // },

    // messageAHandle(newVal, oldVal) {
    //   console.log('messageAHandle')
    // },

    // watchMessageB() {
    //   this.bWatcher = this.$watch('messageB', function() {
    //     console.log('b change')
    //   })
    // }
  }
})
.$mount('#app')

window.Vue = Vue
window.vm = vm
window.componentE = componentE
// window.componentA = vm.$children[0]
