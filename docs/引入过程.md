# VueJs引入流程

## 文字描述

执行`import vue from 'vue'`引入VueJs做了如下事情，按先后顺序排序

1. 定义Dep类
2. 定义Vnode类
3. 数组方法劫持
    * 劫持改变原来数组的`push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`七种发方法，使数组变成响应式
4. 定义Observer类
5. 定义Watcher类
6. 定义Vue类
7. initMixin(Vue)
    * 在Vue原型上挂载`_init`方法，用于Vue实例的初始化
8. stateMixin(Vue)
    * 将访问`vm.$data`、`vm.$props`代理到`vm._data`、`vm._props`上
    * 在Vue原型上挂载`$set`、`$delete`两个方法
    * 在Vue原型上挂载`$watch`方法
9. eventMixin(Vue)
    * 在Vue原型上挂载`$on`、`$once`、`$off`、`$emit`四个方法
10. lifecycleMixin(Vue)
    * 在Vue原型上挂载`_update`、`$forceUpdate`、`$destroy`三个方法
11. renderMixin(Vue)
    * 在Vue原型上挂载`o`、`n`、`l`、`s`、`q`等15个vue编译器需要用到的方法
    * 在Vue原型上挂载`_render`、`$nextTick`三个方法
12. initGlobalAPI(Vue)
    * 定义`Vue.config`、`Vue.options`属性
    * 定义`Vue.set`、`Vue.delete`、`Vue.nextTick`三个方法
    * 挂载`keep-alive`组件
    * 定义`Vue.use`、`Vue.mixin`、`Vue.extend`三个方法
13. createPatchFunction
    * `var patch = createPatchFunction({modules, nodeOps})`
14. 挂载其他指令、组件
    * 挂载`v-model`、`v-show`组件
    * 挂载`translation`、`translation-group`组件
15. 在Vue原型上挂载`__patch__`方法
    * `Vue.prototype.__patch__ = patch`
16. 在Vue原型上挂载`$mount`方法

## 流程图

其实是鱼骨图，如下：

![](../static/import.png)
