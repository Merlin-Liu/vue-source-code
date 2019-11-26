// 拷贝的vue源码，即./node_modules/vue/dist/vue.esm.js
import Vue from '../vue'

// 拷贝的vueRouter源码，即./node_modules/vue-router/dist/vue-router.esm.js
import VueRouter from '../vue-router'

Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Root = {
  name: 'root',

  template: '<button @click="showRoute">root</button>',

  methods: {
    showRoute() {
      console.log(this.$route)
    }
  }
}
const Foo = {
  name: 'foo',

  template: '<button @click="showRoute">foo</button>',

  methods: {
    showRoute() {
      console.log(this.$route)
    }
  }
}
const Bar = {
  name: 'bar',

  template: '<button @click="showRoute">bar</button>',

  methods: {
    showRoute() {
      console.log(this.$route)
    }
  }
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { name: 'root', path: '/', component: Root },
  { name: 'foo', path: '/foo', component: Foo },
  { name: 'bar', path: '/bar', component: Bar }
]

// router实例
export default new VueRouter({routes})
