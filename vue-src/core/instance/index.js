import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) { // option就是创建一个Vue实例传入的参数。el、data、props、methods、computed等

  // 未使用new关键字调用Vue的时候警告
  // e.g. Vue({ ... })
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('`Vue`是个构造函数，应该使用`new`关键字来调用')
  }

  // _init方法是initMixin的时候挂载到Vue原型上的
  this._init(options)
}

// 在Vue原型上挂载_init方法
initMixin(Vue)

// 1、在Vue原型上挂载$data、$props两个属性
// 2、在Vue原型上挂载$set、$delete、$watch三个方法
stateMixin(Vue)

// 在Vue原型上挂载$on、$once、$off、$emit四个方法
eventsMixin(Vue)

// 在Vue原型上挂载_update、$forceUpdate、$destroy三个方法
lifecycleMixin(Vue)

// 1、在Vue原型上挂载o、n、l、s、q等15个vue编译器需要用到的方法
// 2、在Vue原型上挂载_render、$nextTick三个方法
renderMixin(Vue)

export default Vue
