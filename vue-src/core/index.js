import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 初始化一些全局的属性、方法、内置组件
// 1、定义Vue.config、Vue.options属性
// 2、定义Vue.set、Vue.delete、Vue.nextTick三个方法
// 3、挂载keep-alive组件
// 4、定义Vue.use、Vue.mixin、Vue.extend三个方法
initGlobalAPI(Vue)

// 服务端渲染标志
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

// 服务端渲染上下文
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    return this.$vnode && this.$vnode.ssrContext
  }
})

// 函数式组件上下文
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
