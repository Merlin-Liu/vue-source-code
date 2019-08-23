import Vue from 'vue'

const componentA = Vue.component('componentA', {
  name: 'componentA',
  template: `
    <div>
      <p>componentName: componentA</p>
      <!-- <p>componentPropsA.a: {{componentPropsA.a}}</p>
      <p>componentPropsA.b: {{componentPropsA.b}}</p> -->
      <p>showProp: {{showProp}}</p>
    </div>
  `,

  props: {
    componentPropsA: {
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

  components: {
    componentA
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
    messageB: 'hello B',
    // objData: {
    //   a: 1,
    //   b: 2
    // }
    // show: true,

    // showProp: 'show-prop',
    // componentProps: {
    //   a: 1,
    //   b: 2
    // }
    // $a: 1,
    // _a: 2
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

  render (h) {
    return h(
      'header',
      { class: 'message' },
      [
        h('p', null, this.messageA),
        h('p', null, this.messageB)
      ]
    )

    // return createElement(componentA)
  },

  watch: {
    messageA: [
      (newVal, oldVal) => {
        console.log(1)
      },

      (newVal, oldVal) => {
        console.log(2)
      },

      'clickHandle',

      {
        handler: 'messageAHandle',
        // immediate: true
      }
    ],

    // 'objData.c': (newVal, oldVal) => {
    //   console.log(newVal)
    // }
  },

  methods: {
    clickHandle() {
      console.log('clickHandle')
    },

    messageAHandle(newVal, oldVal) {
      console.log('messageAHandle')
    },

    watchMessageB() {
      this.bWatcher = this.$watch('messageB', function() {
        console.log('b change')
      })
    }
  }
}).$mount('#app')

window.vm = vm
window.componentA = vm.$children[0]
