(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{756:function(e,t,v){"use strict";v.r(t);var r=v(7),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"vue2-0-与-vue-3-0-对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0-与-vue-3-0-对比"}},[e._v("#")]),e._v(" Vue2.0 与 Vue 3.0 对比")]),e._v(" "),v("ul",[v("li",[e._v("源码采用"),v("code",[e._v("Monorepo")]),e._v("方式进行管理， 将模块拆分到 package 目录中")]),e._v(" "),v("li",[e._v("Vue3 采用 ts 开发,增强类型检测。 Vue2 则采用 flow")]),e._v(" "),v("li",[e._v("Vue3 的性能优化，支持 tree-shaking, 不使用就不会被打包")]),e._v(" "),v("li",[e._v("Vue2 后期引入 RFC , 使每个版本改动可控 "),v("a",{attrs:{href:"https://github.com/vuejs/rfcs/tree/master/active-rfcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("rfcs"),v("OutboundLink")],1)])]),e._v(" "),v("h3",{attrs:{id:"内部源码优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内部源码优化"}},[e._v("#")]),e._v(" 内部源码优化")]),e._v(" "),v("ul",[v("li",[e._v("Vue3 劫持数据采用 "),v("code",[e._v("proxy")]),e._v("， Vue2 劫持数据采用 "),v("code",[e._v("defineProperty")]),e._v("。 defineProperty 有性能问题和缺陷")]),e._v(" "),v("li",[e._v("Vue3 中对模板编译进行了优化，编译时 生成了 "),v("code",[e._v("Block tree")]),e._v("，可以对子节点的动态节点进行收集，可以减少比较，并且采用了 "),v("code",[e._v("patchFlag")]),e._v(" 标记动态节点")]),e._v(" "),v("li",[e._v("Vue3 采用 "),v("code",[e._v("compositionApi")]),e._v(" 进行组织功能，解决反复横跳，优化复用逻辑 （mixin 带来的数据来源不清晰、命名冲突等）, 相比 optionsApi 类型推断更加方便")]),e._v(" "),v("li",[e._v("增加了 "),v("code",[e._v("Fragment")]),e._v("、"),v("code",[e._v("Teleport")]),e._v("、"),v("code",[e._v("Suspense")]),e._v(" 组件")])])])}),[],!1,null,null,null);t.default=_.exports}}]);