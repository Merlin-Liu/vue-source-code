/* @flow */

import config from '../config'
import { initProxy } from './proxy'
import { initState } from './state'
import { initRender } from './render'
import { initEvents } from './events'
import { mark, measure } from '../util/perf'
import { initLifecycle, callHook } from './lifecycle'
import { initProvide, initInjections } from './inject'
import { extend, mergeOptions, formatComponentName } from '../util/index'

let uid = 0

export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag

    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // 用来避免Vue实例被observed
    vm._isVue = true

    // 组件场景下合并配置
    if (options && options._isComponent) {
      initInternalComponent(vm, options)
    }
    // 非组组件场景下合并配置
    else {
      // vm.constructor === Vue. JS基础知识
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm)
    }

    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    }
    else {
      vm._renderProxy = vm
    }

    vm._self = vm

    // 建立组件父子关系、$root、$refs、_watcher、初始化实例生命周期状态等
    initLifecycle(vm)

    // 注册组件事件 e.g. <componentA @notify="xxx"></componentA>
    initEvents(vm)

    // 初始化插槽、定义vm._c、vm.$createElement方法
    initRender(vm)

    // 调用beforeCreate生命周期钩子
    callHook(vm, 'beforeCreate')

    initInjections(vm) // resolve injections before data/props

    // 1、初始化props
    // 2、初始化methods
    // 3、初始化data
    // 4、初始化computed
    // 5、初始化watch
    initState(vm)

    initProvide(vm) // resolve provide after data/props
    // 调用created生命周期钩子
    callHook(vm, 'created')

    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    // 如果options中配置了el属性，直接将实例挂载到el所映射的DOM节点上
    // 否则需要手动执行vm.$mount(el)
    // e.g. new ({data: {a: 1}}).$mount('#app')
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}

export function initInternalComponent (vm: Component, options: InternalComponentOptions) {
  const opts = vm.$options = Object.create(vm.constructor.options)
  // doing this because it's faster than dynamic enumeration.
  const parentVnode = options._parentVnode
  opts.parent = options.parent
  opts._parentVnode = parentVnode

  const vnodeComponentOptions = parentVnode.componentOptions
  opts.propsData = vnodeComponentOptions.propsData
  opts._parentListeners = vnodeComponentOptions.listeners
  opts._renderChildren = vnodeComponentOptions.children
  opts._componentTag = vnodeComponentOptions.tag

  if (options.render) {
    opts.render = options.render
    opts.staticRenderFns = options.staticRenderFns
  }
}

export function resolveConstructorOptions (Ctor: Class<Component>) {
  // 即Vue.options，在initGlobalAPI方法中定义
  let options = Ctor.options

  // 如果有super属性，说明是由Vue.extend构造的子类
  if (Ctor.super) {
    // 获取父类（和父类的父类的父类。。一直到找到Vue基类）的最新的options
    const superOptions = resolveConstructorOptions(Ctor.super)
    // 获取子类本身的superOptions
    const cachedSuperOptions = Ctor.superOptions

    // 若父类最新的options和子类本身的superOptions不相等，说明父类的options改变过了
    // 例如执行了Parent.mixin方法
    // 这时则需要把子类本身的superOptions换成父类最新的options
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions // 替换成最新的

      // 检查子类的options是否变化
      // 例如子类执行了Child.mixin方法
      const modifiedOptions = resolveModifiedOptions(Ctor)
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions) // 替换成最新的
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        //如果有组件名称，将该组件挂载到options.components上。以便可在组件内使用
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor: Class<Component>): ?Object {
  let modified
  const latest = Ctor.options

  // Vue.extend之后的options，执行Vue.extend()的时候定义的
  // 用于与latest进行对比，检查子类的options是否变化，例如子类执行了Child.mixin方法
  const sealed = Ctor.sealedOptions
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {}
      modified[key] = latest[key]
    }
  }
  return modified
}
