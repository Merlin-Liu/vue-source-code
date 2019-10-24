# Vue2源码分析

对Vue2源码进行分析，修炼内功、提炼优秀的设计思想，运用到工作中。

## 概述

主要按照如下方面进行分析

![](./static/pipe.png)

分析过程使用了console，log打在[vue.js](./vue.js)中，如下效果

![](./static/console.png)

## 目录

* [vue整体流程](./doc/整体流程.md)

* [vue文件引入过程](./doc/vuejs引入过程.md)

* [vue初始化过程](./doc/初始化.md)

vue文件引入过程，如下图：

![](./static/import.png)

vue运行机制，如下图：

![](./static/机制.png)

⚠️ `vue.esm.js`为2.5.16，可能和最新版有差异，但整体功能不影响。
