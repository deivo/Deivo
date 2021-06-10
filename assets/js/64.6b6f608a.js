(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{707:function(_,t,v){"use strict";v.r(t);var s=v(7),i=Object(s.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"js-中-this-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js-中-this-总结"}},[_._v("#")]),_._v(" JS 中 this 总结")]),_._v(" "),v("h3",{attrs:{id:"this"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[_._v("#")]),_._v(" this")]),_._v(" "),v("ul",[v("li",[_._v("全局上下文中"),v("code",[_._v("this")]),_._v("，浏览器中指向"),v("code",[_._v("window")])]),_._v(" "),v("li",[_._v("块级上下文中没有自己"),v("code",[_._v("this")]),_._v("，它的"),v("code",[_._v("this")]),_._v("是继承所在上下文中的"),v("code",[_._v("this")])]),_._v(" "),v("li",[_._v("在函数的私有上下文中，"),v("code",[_._v("this")]),_._v("的情况多种多样，可以通过下面几中方式来确定")])]),_._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"title"}),v("p",[v("code",[_._v("this")]),_._v("不是执行上下文，是执行主体")])]),v("h4",{attrs:{id:"_1-事件绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件绑定"}},[_._v("#")]),_._v(" 1. 事件绑定")]),_._v(" "),v("ul",[v("li",[_._v("给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的 this 是当前操作的元素本身（"),v("code",[_._v("ie6、7、8 使用 attachEvent 方法实现的 DOM2 事件绑定，事件触发，方法中 this 是 window 而不是元素本身")]),_._v("）")])]),_._v(" "),v("h4",{attrs:{id:"_2-普通函数执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-普通函数执行"}},[_._v("#")]),_._v(" 2. 普通函数执行")]),_._v(" "),v("ul",[v("li",[_._v("当方法执行的时候，我们看方法前面是否有"),v("code",[_._v("点（.）")]),_._v(",没有"),v("code",[_._v("点（.）")]),_._v("，没有"),v("code",[_._v("点（.）")]),_._v("this 是"),v("code",[_._v("window或者undefined")]),_._v("（严格模式下，没有点 this 就是"),v("code",[_._v("undefined")]),_._v("）;有"),v("code",[_._v("点（.）")]),_._v("，"),v("code",[_._v("点（.）")]),_._v("前面是谁"),v("code",[_._v("this")]),_._v("就是谁")])]),_._v(" "),v("h4",{attrs:{id:"_3-构造函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造函数"}},[_._v("#")]),_._v(" 3. 构造函数：")]),_._v(" "),v("ul",[v("li",[_._v("在构造函数模式执行中，函数体中的 this 是当前类的实例")])]),_._v(" "),v("h4",{attrs:{id:"_4-自执行函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-自执行函数"}},[_._v("#")]),_._v(" 4. 自执行函数")]),_._v(" "),v("ul",[v("li",[_._v("自执行函数"),v("code",[_._v("this")]),_._v("一般是"),v("code",[_._v("window")]),_._v("，严格模式一下，自执行函数"),v("code",[_._v("this")]),_._v("是"),v("code",[_._v("undefined")]),_._v("(函数中"),v("code",[_._v("this")]),_._v("是谁，和在哪里执行，以及在哪里定义的，没有关系)")])]),_._v(" "),v("h4",{attrs:{id:"_5-箭头函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-箭头函数"}},[_._v("#")]),_._v(" 5. 箭头函数")]),_._v(" "),v("ul",[v("li",[_._v("头函数中没有自己的"),v("code",[_._v("this")]),_._v("，它里面用到的"),v("code",[_._v("this")]),_._v("，都是自己所处上下文中的"),v("code",[_._v("this")]),_._v("（"),v("code",[_._v("真实项目中，一旦涉及 this 问题,箭头函数慎用")]),_._v("）")])]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("h5",{attrs:{id:"箭头函数没有那些属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数没有那些属性"}},[_._v("#")]),_._v(" 箭头函数没有那些属性")]),_._v(" "),v("ul",[v("li",[v("ol",[v("li",[_._v("箭头函数没有 prototype(也就是没有构造器)，所以不能被 new 执行")])])]),_._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[_._v("没有 arguments 实参集合")])])]),_._v(" "),v("li",[v("ol",{attrs:{start:"3"}},[v("li",[_._v("箭头函数没有 this，即使通过 call/apply/bind 也是没有反映的")])])])]),_._v(" "),v("p",[v("strong",[_._v("普通函数执行：")])]),_._v(" "),v("ul",[v("li",[_._v("形成私有上下文和 AO")]),_._v(" "),v("li",[_._v("初始化作用域链")]),_._v(" "),v("li",[_._v("初始化 this")]),_._v(" "),v("li",[_._v("初始化 arguments")]),_._v(" "),v("li",[_._v("形参赋值")]),_._v(" "),v("li",[_._v("变量提升")]),_._v(" "),v("li",[_._v("代码执行")])]),_._v(" "),v("p",[v("strong",[_._v("箭头函数执行：")])]),_._v(" "),v("ul",[v("li",[_._v("形成私有上下文 （和 AO）")]),_._v(" "),v("li",[_._v("初始化作用域链")]),_._v(" "),v("li",[_._v("形参赋值")]),_._v(" "),v("li",[_._v("变量提升")]),_._v(" "),v("li",[_._v("代码执行")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);