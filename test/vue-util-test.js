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

childVue.mixin({
  created() {
    console.error('child mixin')
  }
})
window.child = new childVue({
  template: '<p>{{s}} {{sb}}</p>',
  props: {
    b: Number
  },

  computed: {
    sb () {
      return this.s + '1'
    }
  }
}).$mount('#app')

new childVue({
  template: '<p>{{s}} {{sb}}</p>',
  props: {
    b: Number
  },

  computed: {
    sb () {
      return this.s + '1'
    }
  }
}).$mount('#app2')

export default {
  childVue
}
